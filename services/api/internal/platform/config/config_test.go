package config

import "testing"

func TestLoadUsesDefaultHTTPAddr(t *testing.T) {
	t.Setenv("HTTP_ADDR", "")
	t.Setenv("DATABASE_URL", "postgres://test")

	cfg, err := Load()
	if err != nil {
		t.Fatalf("expected no error, got %v", err)
	}

	if cfg.HTTPAddr != ":8080" {
		t.Fatalf("expected :8080, got %s", cfg.HTTPAddr)
	}

	if cfg.DatabaseURL != "postgres://test" {
		t.Fatalf(
			"expected postgres://test, got %s",
			cfg.DatabaseURL,
		)
	}
}

func TestLoadUsesConfiguredHTTPAddr(t *testing.T) {
	t.Setenv("HTTP_ADDR", ":9090")
	t.Setenv("DATABASE_URL", "postgres://test")

	cfg, err := Load()
	if err != nil {
		t.Fatalf("expected no error, got %v", err)
	}

	if cfg.HTTPAddr != ":9090" {
		t.Fatalf("expected :9090, got %s", cfg.HTTPAddr)
	}
}

func TestLoadRequiresDatabaseURL(t *testing.T) {
	t.Setenv("HTTP_ADDR", ":8080")
	t.Setenv("DATABASE_URL", "")

	_, err := Load()

	if err == nil {
		t.Fatal("expected DATABASE_URL error")
	}
}

func TestValidateRejectsEmptyHTTPAddr(t *testing.T) {
	cfg := Config{
		HTTPAddr:    "",
		DatabaseURL: "postgres://test",
	}

	if err := cfg.Validate(); err == nil {
		t.Fatal("expected validation error")
	}
}

func TestValidateRejectsEmptyDatabaseURL(t *testing.T) {
	cfg := Config{
		HTTPAddr:    ":8080",
		DatabaseURL: "",
	}

	if err := cfg.Validate(); err == nil {
		t.Fatal("expected validation error")
	}
}
