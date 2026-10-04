package database

import (
	"errors"
	"fmt"
	"os"
	"path/filepath"

	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
)

func Migrate(databaseURL, migrationsPath string) error {
	absolutePath, err := filepath.Abs(migrationsPath)
	if err != nil {
		return fmt.Errorf("resolve migrations path: %w", err)
	}

	if _, err := os.Stat(absolutePath); err != nil {
		return fmt.Errorf("migrations directory: %w", err)
	}

	entries, err := os.ReadDir(absolutePath)
	if err != nil {
		return fmt.Errorf("read migrations directory: %w", err)
	}

	if len(entries) == 0 {
		return nil
	}

	sourceURL := fmt.Sprintf("file://%s", absolutePath)

	m, err := migrate.New(sourceURL, databaseURL)
	if err != nil {
		return fmt.Errorf("create migration instance: %w", err)
	}

	defer func() {
		_, _ = m.Close()
	}()

	err = m.Up()
	if err != nil && !errors.Is(err, migrate.ErrNoChange) {
		return fmt.Errorf("run migrations: %w", err)
	}

	return nil
}
