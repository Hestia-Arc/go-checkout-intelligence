import { DetectedProblem, FunnelStep, MetricSummary, CheckoutEventSample } from '../types';

export const HERO_METRICS: MetricSummary = {
  conversionRate: 72.4,
  abandonmentRate: 18.6,
  paymentFailureRate: 9.0,
  totalSessions: 14820,
  completedOrders: 10730,
  avgCheckoutDuration: '2m 14s',
};

export const FUNNEL_DATA: FunnelStep[] = [
  {
    id: 'cart',
    name: 'Cart Initiated',
    count: 18450,
    conversionFromPrev: 100,
    dropoffRate: 0,
    avgDurationSec: 18,
  },
  {
    id: 'customer_info',
    name: 'Customer & Contact',
    count: 15320,
    conversionFromPrev: 83.0,
    dropoffRate: 17.0,
    avgDurationSec: 42,
  },
  {
    id: 'shipping_method',
    name: 'Shipping Selection',
    count: 14180,
    conversionFromPrev: 92.6,
    dropoffRate: 7.4,
    avgDurationSec: 28,
  },
  {
    id: 'payment_step',
    name: 'Payment Processing',
    count: 12940,
    conversionFromPrev: 91.3,
    dropoffRate: 8.7,
    avgDurationSec: 54,
    anomaly: true, // Marked anomaly on mobile
  },
  {
    id: 'order_completed',
    name: 'Order Completed',
    count: 10730,
    conversionFromPrev: 82.9,
    dropoffRate: 17.1,
    avgDurationSec: 0,
  },
];

export const DETECTED_PROBLEMS: DetectedProblem[] = [
  {
    id: 'prob-01',
    title: 'Payment failure rate increased significantly',
    severity: 'high',
    metric: 'Payment failure rate',
    changeRate: '+38% vs prior 7d average',
    affectedSegment: 'Mobile Safari & Chrome users',
    checkoutStep: 'Payment Processing',
    detectedAt: '2 hours ago',
    possibleRootCause: '3D Secure modal iframe viewport cutoff and gateway timeout on iOS WebKit',
    recommendedAction: 'Verify mobile viewport meta in payment iframe integration and inspect 3DS callback latency',
    impactEstimate: '~210 orders lost in the last 24h',
    status: 'active',
  },
  {
    id: 'prob-02',
    title: 'Elevated drop-off during shipping method step',
    severity: 'medium',
    metric: 'Step abandonment',
    changeRate: '+19% vs baseline',
    affectedSegment: 'International shipments (EU / UK)',
    checkoutStep: 'Shipping Selection',
    detectedAt: 'Yesterday at 16:30',
    possibleRootCause: 'Carrier rate lookup API latency exceeding 4.2s causing user cancellation',
    recommendedAction: 'Enable cached fallback shipping tiers or increase client timeout tolerance',
    impactEstimate: '~85 international checkouts aborted',
    status: 'investigating',
  },
  {
    id: 'prob-03',
    title: 'Postal code validation rejects valid alphanumeric codes',
    severity: 'medium',
    metric: 'Form validation errors',
    changeRate: '4.8x normal input retry count',
    affectedSegment: 'Canadian & UK postal formats',
    checkoutStep: 'Customer & Contact',
    detectedAt: '3 days ago',
    possibleRootCause: 'Strict regex client-side check failing on uppercase space variations (e.g., M5V 3L9)',
    recommendedAction: 'Sanitize white-space and adopt permissive alphanumeric regex validator',
    impactEstimate: '~120 customers experiencing repeated validation blocks',
    status: 'resolved',
  },
];

export const EVENT_SAMPLES: CheckoutEventSample[] = [
  {
    name: 'payment_failed',
    description: 'Triggered when the merchant payment gateway returns an error, decline, or verification timeout.',
    payload: {
      event: 'payment_failed',
      event_id: 'evt_99841802',
      checkout_id: 'chk_1024_x9b',
      timestamp: '2026-10-03T21:44:12Z',
      store_id: 'store_us_east_primary',
      session: {
        device: 'mobile',
        os: 'iOS 18.2',
        browser: 'Mobile Safari',
        screen_width: 393,
      },
      cart: {
        currency: 'USD',
        subtotal: 148.50,
        item_count: 3,
      },
      payment: {
        method: 'credit_card',
        gateway: 'stripe',
        decline_code: '3ds_authentication_timeout',
        attempt_number: 2,
      },
    },
  },
  {
    name: 'checkout_abandoned',
    description: 'Triggered when a customer departs from an active checkout session without completing the purchase.',
    payload: {
      event: 'checkout_abandoned',
      event_id: 'evt_99841755',
      checkout_id: 'chk_1023_a1c',
      timestamp: '2026-10-03T21:39:04Z',
      last_active_step: 'shipping_method',
      time_spent_seconds: 142,
      session: {
        device: 'desktop',
        os: 'macOS 15.1',
        browser: 'Chrome 131',
      },
      cart: {
        currency: 'USD',
        subtotal: 89.00,
        shipping_estimated: 18.50,
      },
      exit_reason_signal: 'tab_closed_during_api_call',
    },
  },
  {
    name: 'shipping_selected',
    description: 'Dispatched when the customer selects a shipping option or calculates carrier shipping tiers.',
    payload: {
      event: 'shipping_method_selected',
      event_id: 'evt_99841680',
      checkout_id: 'chk_1022_f4e',
      timestamp: '2026-10-03T21:31:50Z',
      selected_rate: {
        carrier: 'fedex',
        service: 'express_2day',
        cost: 14.99,
      },
      rates_returned_count: 4,
      lookup_latency_ms: 840,
    },
  },
  {
    name: 'checkout_started',
    description: 'Emitted when a customer transitions from the shopping cart into the checkout flow.',
    payload: {
      event: 'checkout_started',
      event_id: 'evt_99841520',
      checkout_id: 'chk_1021_m0k',
      timestamp: '2026-10-03T21:20:18Z',
      entry_point: 'mini_cart_drawer',
      cart_value: 235.00,
      currency: 'USD',
      customer_type: 'guest',
      items: [
        { sku: 'SKU-0941', quantity: 1, unit_price: 195.00 },
        { sku: 'SKU-8820', quantity: 2, unit_price: 20.00 },
      ],
    },
  },
];

export const USE_CASE_QUESTIONS = [
  {
    id: 'q1',
    question: 'Where are customers dropping out?',
    badge: 'Funnel visibility',
    answer:
      'Pinpoint the exact step between cart initiation and order confirmation where customer volume plummets, eliminating guesswork between contact info, address validation, and payment.',
    example: 'Identified that 24% of customers exited when postal code auto-lookup failed on specific regional formats.',
  },
  {
    id: 'q2',
    question: 'Which checkout step causes the most failures?',
    badge: 'Step degradation',
    answer:
      'Isolate whether abandonment is voluntary (customer changed mind, saw shipping fee) or involuntary (validation errors, API timeouts, declined payment methods).',
    example: 'Distinguished between users leaving because of unexpected tax estimates versus users whose cards failed silently.',
  },
  {
    id: 'q3',
    question: 'Are payment failures increasing?',
    badge: 'Payment observability',
    answer:
      'Track gateway responses, 3DS authentication completions, decline reason categories, and retry counts across all payment providers in real time.',
    example: 'Caught a 38% surge in mobile payment failures immediately following a payment provider SDK version change.',
  },
  {
    id: 'q4',
    question: 'Are mobile customers behaving differently?',
    badge: 'Segment isolation',
    answer:
      'Segment checkout funnel metrics by device form factor, operating system, and browser viewport to identify mobile-specific friction points.',
    example: 'Revealed a 14% conversion gap between desktop and mobile caused by virtual keyboard overlap on the CVV input.',
  },
  {
    id: 'q5',
    question: 'Did checkout performance change after a release?',
    badge: 'Release correlation',
    answer:
      'Annotate frontend deployments, checkout redesigns, and third-party script additions alongside your core checkout conversion curve.',
    example: 'Correlated a 6.2% conversion dip directly to an unoptimized third-party address autocomplete script deployed on Tuesday.',
  },
  {
    id: 'q6',
    question: 'Which problems deserve attention first?',
    badge: 'Prioritization',
    answer:
      'Rank checkout issues by lost transaction volume, revenue impact, and frequency so engineering and commerce teams fix the biggest leaks first.',
    example: 'Grouped 14 error alerts into two high-priority root causes responsible for 82% of checkout drop-offs.',
  },
];
