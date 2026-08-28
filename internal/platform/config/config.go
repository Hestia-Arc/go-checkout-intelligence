package config

import (
	"fmt"
	"os"
)

type Config struct {
	HTTPAddr string
}

func Load() (Config, error) {
	httpAddr := os.Getenv("HTTP_ADDR")

	if httpAddr == "" {
		httpAddr = ":8080"
	}

	return Config{
		HTTPAddr: httpAddr,
	}, nil
}

func (c Config) Validate() error {
	if c.HTTPAddr == "" {
		return fmt.Errorf("HTTP address cannot be empty")
	}

	return nil
}
