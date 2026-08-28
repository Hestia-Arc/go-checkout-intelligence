# Slice 1 — Browse Products

## 1. Business Goal

Allow customers to discover products that are available for purchase through the e-commerce application.

The customer should be able to retrieve a list of products and see the information necessary to decide whether to view or purchase a product.

---

## 2. User Story

> As a customer, I want to browse available products so that I can discover products I may want to purchase.

---

## 3. Scope

This slice focuses only on retrieving and displaying a collection of products.

### Included

* Retrieve products
* Display product name
* Display product image
* Display product price
* Display basic availability
* Return products through the backend API
* Display products in the React frontend

### Not Included

The following capabilities belong to later slices:

* Product detail page
* Product search
* Product filtering
* Product categories
* Shopping cart
* Wishlist
* Checkout
* Payment
* Order management
* Product administration
* Inventory management

These may eventually interact with the product catalog but are not part of this slice.

---

## 4. Initial Acceptance Criteria

The slice is complete when:

1. A customer can open the product browsing page.
2. The frontend can request products from the backend.
3. The backend can retrieve products from persistence.
4. The backend returns products through the API.
5. The frontend displays the returned products.
6. Product price is provided by the backend rather than calculated by the frontend.
7. Unavailable products are represented correctly.
8. The API returns an appropriate error when the product retrieval operation fails.
9. The frontend can operate without knowing how the backend stores products.

---

## 5. Initial User Flow

```text
Customer
   │
   ▼
Open product browsing page
   │
   ▼
React requests products
   │
   ▼
GET /api/v1/products
   │
   ▼
Backend retrieves products
   │
   ▼
Backend returns product data
   │
   ▼
React renders products
   │
   ▼
Customer browses products
```

---

## 6. Relevant Domain Concepts

The primary domain concept for this slice is:

```text
Product
```

A product may have one or more:

```text
ProductVariant
```

A variant may have its own:

* SKU
* Price
* Availability
* Attributes

However, only the concepts required by the browse-products use case should be implemented in this slice.

We should not implement the entire product domain prematurely.

---

## 7. Business Rules

The backend is authoritative for product information.

The frontend must not determine:

* Product price
* Product availability
* Whether a product is purchasable

The backend should return the current authoritative information.

Products that are not available for purchase may still be returned for browsing, depending on the product's publication and availability state.

The exact rules will be refined as the slice is designed and implemented.

---

## 8. Slice Outcome

The desired outcome is a complete vertical slice:

```text
React
  ↓
HTTP API
  ↓
Application
  ↓
Domain
  ↓
Repository
  ↓
Database
```

The implementation should be small enough to understand while still demonstrating the architectural boundaries that will be used as the application grows.
