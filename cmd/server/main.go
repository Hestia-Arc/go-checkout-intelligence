package main

import (
	"context"
	"errors"
	"log"
	"os"
	"os/signal"
	"syscall"

	httpserver "esty.checkout-intelligence/internal/platform/http"
)

func main() {
	router := httpserver.NewRouter()

	server := httpserver.NewServer(":8080", router)

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
