package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	HTTPAddr    string
	DatabaseURL string
}

func Load() (Config, error) {
	_ = godotenv.Load()

	httpAddr := os.Getenv("HTTP_ADDR")

	if httpAddr == "" {
		httpAddr = ":8080"
	}

	databaseURL := os.Getenv("DATABASE_URL")
	if databaseURL == "" {
		return Config{}, fmt.Errorf("DATABASE_URL is required")
	}

	return Config{
		HTTPAddr:    httpAddr,
		DatabaseURL: databaseURL,
	}, nil
}

func (c Config) Validate() error {
	if c.HTTPAddr == "" {
		return fmt.Errorf("HTTP address cannot be empty")
	}

	if c.DatabaseURL == "" {
		return fmt.Errorf("database URL cannot be empty")
	}

	return nil
}
