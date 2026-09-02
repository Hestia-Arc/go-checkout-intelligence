package main

import (
	"log"

	"esty.checkout-intelligence/internal/platform/config"
	"esty.checkout-intelligence/internal/platform/database"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("failed to load configuration: %v", err)
	}

	if err := cfg.Validate(); err != nil {
		log.Fatalf("failed to validate configuration: %v", err)
	}

	if err := database.Migrate(
		cfg.DatabaseURL,
		"migrations",
	); err != nil {
		log.Fatalf("failed to run migrations: %v", err)
	}

	log.Println("database migrations completed successfully")
}
