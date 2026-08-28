# E-commerce Problem Space

## 1. Problem Overview

E-commerce businesses can see how many orders they receive, but aggregate
sales data does not provide enough visibility into what happens before a
customer completes a purchase.

Customers may browse products, add items to their cart, start checkout,
encounter friction or failures, and leave without completing the purchase.

The problem is not simply that customers abandon checkout. The deeper
problem is that the business may not have enough visibility into where
customers drop out, what happened before they left, and which problems
could potentially be addressed.

## 2. System Context

The system represents an online retailer selling physical products.

A customer can discover products, view product details, add products to a
cart, begin checkout, provide customer information, select shipping,
attempt payment, and complete an order.

The business needs to manage products and orders while also understanding
customer behavior throughout the purchase journey.

Customer
   │
   ▼
Online Store
   │
   ├── Product Catalog
   ├── Cart
   ├── Checkout
   ├── Payment
   └── Orders
          │
          ▼
       Fulfillment

## 3. Actors

### Customer

The person browsing products and attempting to make a purchase.

### Store Operator

The person responsible for managing the store and monitoring sales and
customer behavior.

### Payment Provider

An external system responsible for processing payment attempts and
returning payment results.

### Fulfillment

The process/system responsible for preparing and delivering completed
orders.

## 4. Customer Journey

### 4.1 Discovery

The customer searches or browses the product catalog to find a product that meets their needs.

Browse
  ↓
Search
  ↓
Filter
  ↓
View Product

### 4.2 Product Consideration

The customer evaluates a product using information such as price,
images, description, availability, reviews, and delivery information.

View Product
     │
     ├── Interested → Add to Cart
     │
     └── Not Interested → Leave


### 4.3 Cart

The customer reviews selected products, changes quantities, removes items,
and decides whether to proceed toward checkout.

Cart
 │
 ├── Change quantity
 ├── Remove item
 ├── Continue shopping
 └── Proceed to checkout

### 4.4 Checkout

The customer provides the information required to complete the purchase,
reviews the order, and prepares to make payment.

### 4.5 Shipping

The customer selects an available shipping option. Shipping availability,
cost, and delivery expectations can influence whether the customer
continues with the purchase.

### 4.6 Payment

The customer attempts to pay for the order.

The payment may succeed or fail. A failed payment may lead to a retry or
the customer leaving the checkout process.

### 4.7 Order

When payment and checkout requirements are successfully completed, the
system creates an order that can proceed to fulfillment.

## 5. Workflow

                    Customer
                       │
                       ▼
                 Discover Product
                       │
                       ▼
                  View Product
                       │
                       ▼
                   Add to Cart
                       │
                       ▼
                    View Cart
                       │
              ┌────────┴────────┐
              │                 │
              ▼                 ▼
            Leave          Start Checkout
                                │
                                ▼
                         Customer Details
                                │
                                ▼
                            Shipping
                                │
                                ▼
                            Payment
                                │
                       ┌────────┴────────┐
                       │                 │
                       ▼                 ▼
                    Success           Failure
                       │                 │
                       ▼                 ▼
                     Order             Retry
                       │                 │
                       ▼                 ▼
                  Fulfillment         Leave

## 6. Pain Points & Failure Points

### Customer-side

- Unexpected costs
- Complicated checkout
- Too many required fields
- Payment failure
- Shipping limitations
- Lack of trust
- Slow or confusing experience

### Business-side

- Limited visibility into checkout drop-off
- Difficulty distinguishing abandonment from technical/payment failure
- Limited understanding of where customers leave
- Difficulty identifying recurring checkout problems
- Difficulty measuring whether an intervention improves conversion

## 7. Abandonment Types

### Cart Abandonment

Customer adds products to the cart but does not begin checkout.

### Checkout Abandonment

Customer begins checkout but does not complete the purchase.

### Payment Failure

Customer attempts payment but the payment fails.

### Technical Failure

The customer cannot continue because of a system or technical error.

### Product/Inventory Failure

The selected product becomes unavailable during the purchase process.

### Shipping Failure

The customer cannot proceed because shipping is unavailable or unsuitable.

## 8. Business Questions

### Purchase Journey

- How many customers enter checkout?
- How many complete checkout?
- Where do customers drop out?

### Checkout

- Which checkout step has the highest drop-off?
- How long does checkout typically take?
- How many checkout attempts require multiple payment attempts?

### Payment

- How often do payments fail?
- Which payment failures lead to abandonment?
- How many customers successfully recover after a failed payment?

### Shipping

- How often does a customer abandon after viewing shipping options?
- How does shipping cost relate to checkout completion?

### Improvement

- Which problems appear frequently?
- Which problems are potentially recoverable?
- Did a change to the checkout experience improve completion?

## 9. Working Problem Statement

E-commerce businesses can lose potential sales during the purchase
journey, but transaction data alone provides limited visibility into
where customers drop out and what happened before they left.

The project will explore how a system can capture meaningful checkout
activity, distinguish different types of checkout failure or abandonment,
and provide actionable visibility into purchase funnel performance.

## 10. Project Hypothesis

If an e-commerce system captures meaningful events throughout the
customer's checkout journey, then the business can identify important
drop-off points and distinguish potentially different causes of lost
purchases.

This visibility can be used to identify opportunities for intervention
and measure whether changes improve checkout completion.

## 11. Project Objective

Build an e-commerce system that demonstrates how customer purchase
activity can be captured, analyzed, and used to identify checkout
bottlenecks and potential opportunities for improving conversion.

## 12. Scope

### In Scope

- Product catalog
- Product details
- Shopping cart
- Checkout workflow
- Customer information
- Shipping options
- Payment simulation
- Order creation
- Checkout event tracking
- Checkout abandonment detection
- Checkout funnel analytics
- Basic business dashboard
- Simulated customer activity

### Out of Scope

- Real-world logistics
- Actual product fulfillment
- Complex warehouse management
- Multi-vendor marketplace functionality
- Advanced recommendation engine
- Real payment processing
- Real-time logistics tracking
- Full accounting system
- Customer support system
- Production-scale infrastructure

## 13. Success Criteria

The project is successful if it can:

1. Represent the complete customer purchase journey.
2. Capture meaningful checkout events.
3. Distinguish completed checkouts from different failure/abandonment
   scenarios.
4. Identify where customers drop out of the checkout funnel.
5. Provide useful business-level metrics.
6. Simulate realistic checkout scenarios.
7. Demonstrate how an identified problem can lead to an intervention.
8. Measure the effect of that intervention.