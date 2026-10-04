package httpserver

import (
	"encoding/json"
	"log/slog"
	"net/http"

	"esty.checkout-intelligence/internal/platform/middleware"
)

func NewRouter(logger *slog.Logger) http.Handler {
	mux := http.NewServeMux()

	mux.HandleFunc("GET /health", healthHandler)

	mux.HandleFunc("GET /panic", func(w http.ResponseWriter, r *http.Request) {
		panic("test panic")
	})

	var handler http.Handler = mux

	handler = middleware.RequestLogger(logger)(handler)
	handler = middleware.Recovery(logger)(handler)
	handler = middleware.RequestID(handler)

	return handler
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	response := map[string]string{
		"status": "ok",
	}

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, "failed to encode response", http.StatusInternalServerError)
	}
}
