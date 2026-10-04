export type DeviceType = 'all' | 'mobile' | 'desktop' | 'tablet';
export type Timeframe = '24h' | '7d' | '30d';

export interface FunnelStep {
  id: string;
  name: string;
  count: number;
  conversionFromPrev: number;
  dropoffRate: number;
  avgDurationSec: number;
  anomaly?: boolean;
}

export interface DetectedProblem {
  id: string;
  title: string;
  severity: 'high' | 'medium' | 'low';
  metric: string;
  changeRate: string;
  affectedSegment: string;
  checkoutStep: string;
  detectedAt: string;
  possibleRootCause: string;
  recommendedAction: string;
  impactEstimate: string;
  status: 'active' | 'investigating' | 'resolved';
}

export interface MetricSummary {
  conversionRate: number;
  abandonmentRate: number;
  paymentFailureRate: number;
  totalSessions: number;
  completedOrders: number;
  avgCheckoutDuration: string;
}

export interface CheckoutEventSample {
  name: string;
  description: string;
  payload: Record<string, unknown>;
}
