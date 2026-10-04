package main

import (
	"context"
	"errors"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"esty.checkout-intelligence/internal/platform/config"
	"esty.checkout-intelligence/internal/platform/database"
	httpserver "esty.checkout-intelligence/internal/platform/http"
	"esty.checkout-intelligence/internal/platform/logger"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("failed to load configuration: %v", err)
	}

	if err := cfg.Validate(); err != nil {
		log.Fatalf("failed to validate configuration: %v", err)
	}

	db, err := database.Open(cfg.DatabaseURL)
	if err != nil {
		log.Fatalf("failed to open database: %v", err)
	}
	defer database.Close(db)

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := database.Ping(ctx, db); err != nil {
		log.Fatalf("failed to ping database: %v", err)
	}

	applogger := logger.New()

	router := httpserver.NewRouter(applogger)

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
