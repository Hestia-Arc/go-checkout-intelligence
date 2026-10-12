package app

import (
	"context"
	"database/sql"
	"fmt"

	"esty.checkout-intelligence/internal/platform/config"
	"esty.checkout-intelligence/internal/platform/database"
	httpserver "esty.checkout-intelligence/internal/platform/http"
	"esty.checkout-intelligence/internal/platform/logger"
)

type App struct {
	db     *sql.DB
	server *httpserver.Server
}

func New(ctx context.Context, cfg config.Config) (*App, error) {
	db, err := database.Open(cfg.DatabaseURL)
	if err != nil {
		return nil, fmt.Errorf("open database: %w", err)
	}

	if err := database.Ping(ctx, db); err != nil {
		_ = database.Close(db)
		return nil, fmt.Errorf("ping database: %w", err)
	}

	appLogger := logger.New()
	router := httpserver.NewRouter(appLogger)
	server := httpserver.NewServer(cfg.HTTPAddr, router)

	return &App{
		db:     db,
		server: server,
	}, nil
}

func (a *App) Start() error {
	return a.server.Start()
}

func (a *App) Shutdown(ctx context.Context) error {
	return a.server.Shutdown(ctx)
}

func (a *App) Close() error {
	return database.Close(a.db)
}
