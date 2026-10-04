package middleware

import (
	"context"
	"net/http"

	"github.com/google/uuid"
)

func RequestID(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		requestID := r.Header.Get("X-Request-ID")

		if requestID == "" {
			requestID = uuid.NewString()
		}

		w.Header().Set("X-Request-ID", requestID)

		ctx := context.WithValue(
			r.Context(),
			requestIDKey{},
			requestID,
		)

		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

type requestIDKey struct{}

func GetRequestID(ctx context.Context) string {
	requestID, ok := ctx.Value(requestIDKey{}).(string)
	if !ok {
		return ""
	}

	return requestID
}
