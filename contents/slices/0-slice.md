We'll keep the **day/week milestones** so you always know *why we're doing something, what should be finished, and when to stop*.

# Slice 0 — Walking Skeleton

## Our objective

By the end of Slice 0, we want this:

```text
                    ┌──────────────────┐
                    │ React Storefront │
                    └────────┬─────────┘
                             │
                             │ HTTP/JSON
                             ▼
                    ┌──────────────────┐
                    │   Go Backend     │
                    │                  │
                    │ HTTP             │
                    │ Middleware       │
                    │ Application      │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   PostgreSQL     │
                    └──────────────────┘


                    ┌──────────────────┐
                    │ React Dashboard │
                    └────────┬─────────┘
                             │
                             │ HTTP/JSON
                             ▼
                       Go Backend
```

No checkout intelligence yet.

We're building the **technical path through which the future business capabilities will travel**.

---

# Slice 0 Schedule

Let's make this a **5-day slice**.

## Day 1 — Repository & Backend Foundation

**Goal:** Get the Go application running cleanly.

We'll accomplish:

* project/repository setup
* Go module
* initial directory structure
* configuration approach
* application entry point
* HTTP server
* basic routing
* `/health`
* graceful shutdown
* basic logging

End-of-day state:

```text
Browser
   ↓
GET /health
   ↓
Go server
   ↓
200 OK
```

---

## Day 2 — Database Foundation

**Goal:** Connect the application to PostgreSQL properly.

We'll accomplish:

* PostgreSQL development environment
* database configuration
* Go database connection
* connection lifecycle
* migration mechanism
* first migration
* database health check
* integration test foundation

Important:

**We will not create business tables yet.**

There is no:

```text
users
products
orders
payments
checkout_sessions
```

Those belong to later slices.

---

## Day 3 — HTTP/Application Infrastructure

**Goal:** Establish the boundaries that future slices will use.

We'll work on:

* HTTP request/response handling
* routing structure
* middleware
* error handling
* request IDs
* logging
* configuration boundaries
* application structure
* dependency wiring
* testing HTTP handlers

We'll also decide exactly where **application flows, domain logic, infrastructure, and platform concerns** live.

---

## Day 4 — React Frontend Foundation

**Goal:** Establish the frontend without coupling it to Go.

We'll create:

### Storefront

```text
React
TypeScript
Tailwind CSS
```

### Dashboard

Same stack.

We'll establish:

* frontend project structure
* routing
* layout
* API client boundary
* environment configuration
* reusable UI foundations
* loading/error states
* basic pages

Most importantly:

```text
React
   ↓
API Client
   ↓
HTTP/JSON Contract
   ↓
Backend
```

The React application should **not know or care that the backend is written in Go**.

That's deliberate.

---

# Day 5 — Connect Everything + Verify

Now we prove the skeleton.

```text
Storefront
     ↓
     API
     ↓
    Go
     ↓
 PostgreSQL
```

and:

```text
Dashboard
     ↓
     API
     ↓
    Go
```

We'll add:

* frontend → backend communication
* health/status display
* integration tests
* basic end-to-end verification
* development documentation
* architecture decision records where necessary
* cleanup/refactoring
* Slice 0 acceptance test

Then we **stop**.

We don't sneak into Slice 1.

---

# Our Definition of Done

Slice 0 isn't finished because the folders exist.

It is finished when we can demonstrate:

### Backend

```text
✓ Go application starts
✓ Configuration works
✓ HTTP server works
✓ /health works
✓ Graceful shutdown works
✓ Middleware works
✓ Error handling works
✓ Logging works
```

### Database

```text
✓ PostgreSQL starts
✓ Go connects to PostgreSQL
✓ Migrations run
✓ Connection errors are handled
✓ Database integration test works
```

### Frontend

```text
✓ Storefront starts
✓ Dashboard starts
✓ React + TypeScript works
✓ Tailwind works
✓ API client exists
✓ Frontend can communicate with backend
```

### Architecture

```text
✓ Platform concerns have a home
✓ Infrastructure has a boundary
✓ Application flow has a boundary
✓ Frontend isn't coupled to Go
✓ No speculative business domain
```

### Project discipline

```text
✓ Slice documented
✓ Tests passing
✓ README updated
✓ No future-slice code accidentally introduced
```

---

# One important decision before we code

There is one thing I want us to be disciplined about from the beginning:

## The API is a contract, not a Go interface.

For example, the React frontend should care about:

```http
GET /health
```

and:

```json
{
  "status": "ok"
}
```

It should **not** care whether the server implementation is:

```text
Go
C#
Django
Node.js
Rust
```

So we'll keep the boundary approximately:

```text
┌─────────────────────┐
│ React + TypeScript  │
└──────────┬──────────┘
           │
       HTTP/JSON
           │
     Stable Contract
           │
┌──────────▼──────────┐
│    Backend          │
│                     │
│ Go implementation   │
└─────────────────────┘
```

Later:

```text
┌─────────────────────┐
│ React + TypeScript  │
└──────────┬──────────┘
           │
       SAME API
           │
     Stable Contract
           │
    ┌──────┴──────┐
    ▼             ▼
   Go          C#/Django/
               Node/Rust
```

That's a valuable architectural property for the portfolio as well.

---

# One more thing: don't start coding yet

We're going to follow our own development process.

Even Slice 0 gets a tiny bit of design before implementation.

So **Day 1, Step 1** is:

> Establish the repository and define the walking skeleton's technical boundaries.

We'll then implement it incrementally.

### Our immediate next step

**Day 1 → Step 1: Create the project and establish the initial repository structure.**

We'll do that together, command by command, and I'll explain **what each piece is for and why it belongs where it does** rather than dumping a finished codebase on you.



=============================
DAY 1
=============================

Let's go.

# Slice 0 — Day 1

## Step 1: Create the project foundation

Today we're focusing on **backend foundation first**. We will not touch checkout logic, domain modeling, or database tables yet.

Our Day 1 target:

```text
checkout-intelligence/
├── cmd/
│   └── server/
│       └── main.go
├── internal/
│   └── platform/
│       ├── config/
│       ├── http/
│       └── middleware/
├── migrations/
├── web/
│   ├── storefront/
│   └── dashboard/
├── docs/
│   └── slices/
│       └── 00-walking-skeleton/
├── .gitignore
├── go.mod
└── README.md
```

We're intentionally starting small.

---

## 1. Create the repository

From your terminal:

```bash
mkdir checkout-intelligence
cd checkout-intelligence

git init
go mod init checkout-intelligence
```

Check:

```bash
git status
```

You should have a Git repository and a `go.mod`.

Your `go.mod` should initially look roughly like:

```go
module checkout-intelligence

go 1.XX
```

The exact Go version will depend on what you have installed.

Check it with:

```bash
go version
```

---

# 2. Create the directories

Run:

```bash
mkdir -p \
  cmd/server \
  internal/platform/config \
  internal/platform/http \
  internal/platform/middleware \
  migrations \
  web/storefront \
  web/dashboard \
  docs/system \
  docs/slices/00-walking-skeleton
```

Then:

```bash
find . -maxdepth 4 -type d | sort
```

You should see our basic structure.

---

# 3. Why are we starting with `cmd` and `internal`?

This is worth understanding rather than blindly copying.

### `cmd/`

Contains **executable applications**.

We currently have one:

```text
cmd/
└── server/
    └── main.go
```

`main.go` should eventually have one primary responsibility:

> **Assemble the application and start it.**

It shouldn't contain all our business logic.

Think:

```text
main.go

configuration
     ↓
dependencies
     ↓
application
     ↓
HTTP server
     ↓
start
```

---

### `internal/`

This is where the application's implementation lives.

Go gives `internal` special meaning: packages underneath it cannot be imported by code outside the parent module tree.

That's useful for an application like this because we don't currently intend to expose our internal implementation as a reusable public Go library.

---

# 4. Why `platform`?

We're following the hybrid architecture we agreed on.

`platform` will eventually contain technical capabilities that support the application:

```text
internal/platform/
├── config/
├── http/
└── middleware/
```

For example:

```text
config
    → environment/configuration

http
    → HTTP server setup

middleware
    → logging
    → recovery
    → request ID
    → authentication later
```

These aren't checkout business concepts.

Therefore they don't belong in the checkout domain.

---

# 5. Create our first `main.go`

Create:

```text
cmd/server/main.go
```

Put this in it:

```go
package main

import "fmt"

func main() {
	fmt.Println("Checkout Intelligence server")
}
```

Run:

```bash
go run ./cmd/server
```

You should get:

```text
Checkout Intelligence server
```

That's deliberately boring.

And that's good.

We're establishing the executable before adding complexity.

---

# 6. Add the README

Create:

```text
README.md
```

For now:

```markdown
# Checkout Intelligence

An enterprise-style e-commerce checkout intelligence application.

## Development Approach

This project uses a hybrid vertical-slice development approach:

- Vertical slices organize application capabilities.
- Domain models contain shared business concepts and invariants.
- Middleware and pipelines handle cross-cutting concerns.
- Architecture evolves incrementally based on real requirements.

## Initial Stack

### Backend
- Go
- PostgreSQL
- REST/JSON HTTP API

### Frontend
- React
- TypeScript
- Tailwind CSS

## Current Slice

Slice 0 — Walking Skeleton

The current goal is to establish the technical path through the system before implementing business capabilities.
```

Don't document technologies we haven't actually decided to use.

For example, don't start listing Redis, Kafka, Docker, Kubernetes, etc. just because they might eventually appear.

---

# 7. Add the Slice 0 documentation

Create:

```text
docs/slices/00-walking-skeleton/README.md
```

Use:

```markdown
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

- [ ] Go application starts successfully
- [ ] Configuration works
- [ ] HTTP server starts
- [ ] Health endpoint responds
- [ ] Basic middleware works
- [ ] PostgreSQL connection works
- [ ] Database migrations work
- [ ] Backend tests pass
- [ ] Storefront loads
- [ ] Dashboard loads
- [ ] Frontend can communicate with backend
```

This is our **scope fence**.

If we later get excited and start designing payment processing, this document reminds us:

> Not yet.

---

# 8. Add `.gitignore`

Create:

```text
.gitignore
```

Start with:

```gitignore
# Environment
.env
.env.*
!.env.example

# Go
/bin/
/dist/
*.test

# IDE
.vscode/
.idea/

# OS
.DS_Store

# Node
node_modules/

# Build output
dist/
```

We'll refine this when the frontend is created.

---

# 9. First commit

Before moving further:

```bash
git add .
git commit -m "chore: initialize checkout intelligence project"
```

Then:

```bash
git status
```

You want:

```text
nothing to commit, working tree clean
```

---

# Where we are now

Our system currently looks like:

```text
checkout-intelligence
        │
        ▼
    Go program
        │
        ▼
   prints a message
```

That's obviously not useful yet.

But we've established the **application boundary** without prematurely creating business concepts.

---

# Next: Day 1, Step 2

Now we'll turn this into an actual HTTP application.

We'll build:

```text
                    Go Application
                         │
                         ▼
                  HTTP Server
                         │
                         ▼
                    GET /health
                         │
                         ▼
                  {"status":"ok"}
```

We'll use Go's standard `net/http` initially.

Before introducing a router dependency, I want you to understand the HTTP foundation underneath it. That's particularly useful given your backend-engineering goal.

**Do the steps above first.** Once `go run ./cmd/server` works and your first commit is clean, we'll move directly into **Step 2: HTTP server + `/health` + graceful shutdown**.
