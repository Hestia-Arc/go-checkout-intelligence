import React, { useState } from 'react';
import { ArrowRight, Store, Send, ShieldCheck, BarChart3, LineChart, Wrench, CheckCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

export const ProductFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const pipeline = [
    { label: 'Store', sub: 'Existing platform' },
    { label: 'Checkout Events', sub: 'Standardized schema' },
    { label: 'Checkout Intelligence', sub: 'Ingestion & verification' },
    { label: 'Analysis', sub: 'Anomaly detection' },
    { label: 'Actionable Insights', sub: 'Merchant resolution' },
  ];

  const steps = [
    {
      num: '01',
      title: 'Connect an existing store',
      desc: 'Plug into your existing store via lightweight webhook or drop-in frontend SDK. No database migration, zero changes to checkout business logic.',
      icon: Store,
      detail: 'Supports custom headless checkouts, Shopify apps, WooCommerce, or proprietary commerce microservices.',
    },
    {
      num: '02',
      title: 'Send relevant checkout events',
      desc: 'Emit structured signals during checkout milestones: session start, address validation, shipping tier selection, payment submission, and outcomes.',
      icon: Send,
      detail: 'Minimal client footprint (<8kb) with background batching and non-blocking asynchronous transmission.',
    },
    {
      num: '03',
      title: 'Validate and process events',
      desc: 'Checkout Intelligence standardizes heterogeneous gateway errors, normalizes timestamps, and strips sensitive PII before ingestion.',
      icon: ShieldCheck,
      detail: 'Strict privacy boundary: zero card numbers or personal buyer identities ever stored.',
    },
    {
      num: '04',
      title: 'Analyze checkout behavior',
      desc: 'Statistical baseline algorithms evaluate drop-off friction across dimensions: device type, browser engine, payment method, and geo region.',
      icon: BarChart3,
      detail: 'Automated deviation triggers surface rate spikes without needing manual SQL queries.',
    },
    {
      num: '05',
      title: 'Investigate through the dashboard',
      desc: 'Explore drill-down funnels, review failure clusters, and isolate the exact moment and mechanism causing customers to leave.',
      icon: LineChart,
      detail: 'Visual funnel view displays stage-by-stage attrition with anomaly highlight badges.',
    },
    {
      num: '06',
      title: 'Act and monitor recovery',
      desc: 'Implement the fix—whether tweaking a mobile input field or adjusting a gateway timeout—and track conversion recovery immediately.',
      icon: Wrench,
      detail: 'Before-and-after conversion tracking validates whether the engineering intervention succeeded.',
    },
  ];

  return (
    <section id="product" className="py-20 md:py-24 border-b border-slate-800/80 bg-[#070B12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="max-w-3xl">
          <div className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider">
            Architecture & Pipeline
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
            From checkout activity to business insight.
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Checkout Intelligence operates as an observability layer on top of your existing commerce system, transforming unstructured checkout traffic into clear operational clarity.
          </p>
        </FadeIn>

        {/* Core Product Flow Diagram */}
        <FadeIn className="mt-12 rounded-xl border border-slate-800 bg-[#0C121D] p-6 lg:p-8" delay={0.1}>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6">
            End-to-End Intelligence Pipeline
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-2 items-center">
            {pipeline.map((node, i) => (
              <React.Fragment key={i}>
                <div 
                  onClick={() => setActiveStep(Math.min(i, steps.length - 1))}
                  className={`p-4 rounded-lg border text-center transition-all cursor-pointer ${
                    activeStep === i
                      ? 'border-indigo-500 bg-indigo-950/40 text-white shadow-sm shadow-indigo-950'
                      : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="text-xs font-mono font-bold text-slate-400 mb-1">
                    STAGE 0{i + 1}
                  </div>
                  <div className="text-sm font-bold tracking-tight text-white">
                    {node.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {node.sub}
                  </div>
                </div>

                {i < pipeline.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-slate-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </FadeIn>

        {/* 6 Step Explanation Grid */}
        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelta={0.06}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <StaggerItem
                key={step.num}
                className={`rounded-xl border p-6 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-indigo-500/70 bg-[#0E1524] shadow-md shadow-indigo-950/50'
                    : 'border-slate-800 bg-[#0A0F18] hover:border-slate-700'
                }`}
              >
                <div onClick={() => setActiveStep(idx)}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Step {step.num}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-white tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                  {step.detail}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
