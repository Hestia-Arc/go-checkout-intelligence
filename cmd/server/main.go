package main

import (
	"context"
	"errors"
	"log"
	"os"
	"os/signal"
	"syscall"

	"esty.checkout-intelligence/internal/platform/config"
	httpserver "esty.checkout-intelligence/internal/platform/http"
	"esty.checkout-intelligence/internal/platform/logger"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		log.Fatal()
	}

	if err := cfg.Validate(); err != nil {
		log.Fatal(err)
	}

	logger := logger.New()

	router := httpserver.NewRouter(logger)

	server := httpserver.NewServer(cfg.HTTPAddr, router)

	serverErrors := make(chan error, 1)

	go func() {
		serverErrors <- server.Start()
	}()

	shutdown := make(chan os.Signal, 1)
	signal.Notify(shutdown, os.Interrupt, syscall.SIGTERM)

	select {
	case err := <-serverErrors:
		if !errors.Is(err, context.Canceled) {
			log.Printf("server error: %v", err)
		}

	case sig := <-shutdown:
		log.Printf("shutdown signal received: %s", sig)

		ctx, cancel := httpserver.DefaultShutdownContext()
		defer cancel()

		if err := server.Shutdown(ctx); err != nil {
			log.Printf("graceful shutdown failed: %v", err)
		}
	}
}
