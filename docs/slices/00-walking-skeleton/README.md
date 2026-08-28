# Slice 0 — Walking Skeleton

## Purpose

Establish the minimal technical path through the system so that the
frontend can communicate with the Go application and the application
can communicate with PostgreSQL.

## Business Capability

None.

This slice establishes the technical foundation required by subsequent
business capabilities.

## Scope

- Go HTTP server
- Configuration
- PostgreSQL connection
- Database migrations
- HTTP routing
- Basic middleware
- Error handling
- Logging
- Automated tests
- React storefront shell
- React merchant dashboard shell

## Out of Scope

- Checkout
- Products
- Orders
- Customers
- Payments
- Checkout intelligence
- Analytics
- Authentication
- Authorization

## Acceptance Criteria

- [x] Go application starts successfully
- [x] Configuration works
- [x] HTTP server starts
- [x] Health endpoint responds
- [x] Basic middleware works
- [ ] PostgreSQL connection works
- [ ] Database migrations work
- [ ] Backend tests pass
- [ ] Storefront loads
- [ ] Dashboard loads
- [ ] Frontend can communicate with backend