# E-commerce Domain Model

## 1. Domain Overview

The system represents an online retail business where customers can
discover products, add products to a cart, proceed through checkout,
make a payment, and create an order.

The domain model focuses primarily on the customer purchase journey,
particularly the checkout process and the business's ability to
understand checkout completion, failure, and abandonment.

The model separates the transactional purchase process from the
events used to observe and analyze customer behavior.

## 2. Core Domain Concepts

### 2.1 Customer

**Meaning**

A person who interacts with the store and may make purchases.

**Responsibilities**

- Browse and evaluate products.
- Maintain a shopping cart.
- Start checkout.
- Provide purchase information.
- Attempt payment.
- Place orders.

**Relationships**

- Has a cart.
- Has one or more addresses.
- Can start checkouts.
- Can place orders.

### 2.2 Product

**Meaning**

A product represents something the store offers for sale.

**Responsibilities**

- Provide product information.
- Represent the product being offered to customers.
- Group related product variants.

**Relationships**

- Has one or more product variants.

### 2.3 Product Variant

**Meaning**

A product variant represents a specific purchasable configuration
of a product.

For example, a T-shirt may have different sizes and colors.

**Responsibilities**

- Represent a specific purchasable version of a product.
- Provide availability information.
- Provide the price applicable to that variant.

**Relationships**

- Belongs to a product.
- Can be referenced by cart items.
- Can be referenced by order items.

### 2.4 Cart
### 2.5 Cart Item
### 2.6 Checkout
### 2.7 Address
### 2.8 Shipping Option
### 2.9 Payment Attempt
### 2.10 Order
### 2.11 Order Item
### 2.12 Checkout Event

## 3. Domain Relationships

## 4. Lifecycle & State Models

### 4.1 Cart Lifecycle
### 4.2 Checkout Lifecycle
### 4.3 Payment Attempt Lifecycle
### 4.4 Order Lifecycle

## 5. Domain Behaviors

## 6. Business Rules & Invariants

## 7. Observed vs Inferred Information

## 8. Domain Boundaries

## 9. Open Questions