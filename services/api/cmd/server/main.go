package main

import (
	"context"
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"esty.checkout-intelligence/internal/app"
	"esty.checkout-intelligence/internal/platform/config"
)

func main() {
	if err := run(); err != nil {
		log.Printf("application failed: %v", err)
		os.Exit(1)
	}
}

func run() (runErr error) {
	cfg, err := config.Load()
	if err != nil {
		return fmt.Errorf("load configuration: %w", err)
	}

	if err := cfg.Validate(); err != nil {
		return fmt.Errorf("validate configuration: %w", err)
	}

	startupCtx, cancelStartup := context.WithTimeout(
		context.Background(),
		5*time.Second,
	)

	application, err := app.New(startupCtx, cfg)
	cancelStartup()

	if err != nil {
		return fmt.Errorf("initialize application: %w", err)
	}

	defer func() {
		if err := application.Close(); err != nil {
			runErr = errors.Join(
				runErr,
				fmt.Errorf("close application resources: %w", err),
			)
		}
	}()

	// Register signal handling before starting the server.
	shutdown := make(chan os.Signal, 1)
	signal.Notify(shutdown, os.Interrupt, syscall.SIGTERM)
	defer signal.Stop(shutdown)

	serverErrors := make(chan error, 1)

	go func() {
		serverErrors <- application.Start()
	}()

	select {
	case err := <-serverErrors:
		if errors.Is(err, http.ErrServerClosed) {
			return nil
		}

		if err == nil {
			return errors.New("HTTP server stopped unexpectedly")
		}

		return fmt.Errorf("HTTP server failed: %w", err)

	case sig := <-shutdown:
		log.Printf("shutdown signal received: %s", sig)
	}

	shutdownCtx, cancelShutdown := context.WithTimeout(
		context.Background(),
		10*time.Second,
	)
	defer cancelShutdown()

	if err := application.Shutdown(shutdownCtx); err != nil {
		return fmt.Errorf("graceful shutdown: %w", err)
	}

	return nil
}
