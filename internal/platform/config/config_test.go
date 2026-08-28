package config

import (
	"os"
	"testing"
)

func TestLoadUsesDefaultHTTPAddr(t *testing.T) {
	t.Setenv("HTTP_ADDR", "")

	cfg, err := Load()
	if err != nil {
		t.Fatalf("expected no error, got %v", err)
	}

	if cfg.HTTPAddr != ":8080" {
		t.Fatalf("expected :8080, got %s", cfg.HTTPAddr)
	}
}

func TestLoadUsesConfiguredHTTPAddr(t *testing.T) {
	t.Setenv("HTTP_ADDR", ":9090")

	cfg, err := Load()
	if err != nil {
		t.Fatalf("expected no error, got %v", err)
	}

	if cfg.HTTPAddr != ":9090" {
		t.Fatalf("expected :9090, got %s", cfg.HTTPAddr)
	}
}

func TestValidateRejectsEmptyHTTPAddr(t *testing.T) {
	cfg := Config{}

	if err := cfg.Validate(); err == nil {
		t.Fatal("expected validation error")
	}

	_ = os.Getenv // keep os imported only if your editor requires it
}
