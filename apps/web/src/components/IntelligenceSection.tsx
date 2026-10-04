import React, { useState } from 'react';
import { AlertTriangle, Filter, Search, ArrowRight, CheckCircle2, ChevronRight, Smartphone, Laptop, CreditCard, Clock, Layers } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

export const IntelligenceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'device' | 'gateway' | 'step'>('device');

  const capabilities = [
    {
      badge: '01. Detect',
      title: 'Identify unusual checkout behavior',
      desc: 'Automated deviation triggers scan incoming event batches against historical baselines to flag subtle drop-off anomalies before they compound into lost revenue.',
    },
    {
      badge: '02. Investigate',
      title: 'Isolate by dimension and segment',
      desc: 'Slice drop-offs by device form factor, operating system, payment gateway, checkout step, and locale to locate where failures are concentrated.',
    },
    {
      badge: '03. Act',
      title: 'Provide actionable operational context',
      desc: 'Translate telemetry alerts into concrete engineering recommendations—pointing teams directly to failing API responses, validation rules, or UI hurdles.',
    },
  ];

  return (
    <section id="intelligence" className="py-20 md:py-24 border-b border-slate-800/80 bg-[#070B12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="max-w-3xl">
          <div className="text-xs font-mono font-medium text-amber-400 uppercase tracking-wider">
            Diagnostic & Analytics Core
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
            Don't just see the numbers. Understand the problem.
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Standard analytics report that your conversion dipped. Checkout Intelligence isolates the exact combination of device, step, and failure code so your team can deploy a solution immediately.
          </p>
        </FadeIn>

        {/* 3 Capability Cards */}
        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelta={0.08}>
          {capabilities.map((cap, i) => (
            <StaggerItem
              key={i}
              className="rounded-xl border border-slate-800 bg-[#0C121D] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold text-indigo-400">
                  {cap.badge}
                </div>
                <h3 className="mt-3 text-base font-bold text-white tracking-tight">
                  {cap.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                Continuous baseline engine
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Dashboard-Style Operational Visual (Discovery of an Insight) */}
        <FadeIn className="mt-12 rounded-xl border border-slate-800 bg-[#0A0E17] overflow-hidden shadow-2xl" delay={0.12}>
          
          {/* Header Bar */}
          <div className="px-5 py-3.5 border-b border-slate-800 bg-[#080B12] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wide">
                Active Incident Diagnostic Panel
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">Incident #CHK-9402</span>
            </div>

            {/* Interactive Dimension Selector */}
            <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('device')}
                className={`px-3 py-1 rounded font-medium transition-colors ${
                  activeTab === 'device'
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                By Device
              </button>
              <button
                onClick={() => setActiveTab('gateway')}
                className={`px-3 py-1 rounded font-medium transition-colors ${
                  activeTab === 'gateway'
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                By Gateway Method
              </button>
              <button
                onClick={() => setActiveTab('step')}
                className={`px-3 py-1 rounded font-medium transition-colors ${
                  activeTab === 'step'
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                By Checkout Step
              </button>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left 5 cols: Incident Alert Card */}
            <div className="lg:col-span-5 rounded-lg border border-amber-500/30 bg-amber-950/20 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  CHECKOUT PROBLEM DETECTED
                </span>
                <span className="text-[11px] font-mono text-amber-300/80">Severity: High</span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Payment failure rate increased
                </h4>
                <div className="mt-1 text-2xl font-mono font-bold tabular-nums text-amber-400">
                  +38% <span className="text-xs font-normal text-slate-300">vs previous period</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-amber-500/20 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-amber-500/10">
                  <span className="text-slate-400">Most affected:</span>
                  <span className="font-semibold text-white">Mobile customers (74% of failures)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-amber-500/10">
                  <span className="text-slate-400">Checkout step:</span>
                  <span className="font-semibold text-white">Payment step (3DS modal)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-amber-500/10">
                  <span className="text-slate-400">Detected at:</span>
                  <span className="font-mono text-slate-300">Today, 14:22 UTC</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Estimated order attrition:</span>
                  <span className="font-mono text-amber-300 font-semibold">~210 transactions</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-[11px] font-mono text-slate-400 mb-1">
                  Root Cause Hypotheses:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed bg-black/40 p-2.5 rounded border border-amber-900/40">
                  Payment iframe height constraint on Mobile Safari triggers viewport clipping during 3DS challenge, causing buyer dismissals.
                </p>
              </div>
            </div>

            {/* Right 7 cols: Breakdown Inspector depending on activeTab */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-lg border border-slate-800 bg-[#0D121F] p-5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-mono uppercase text-slate-400">
                    Dimension Breakdown: {activeTab === 'device' ? 'Form Factor' : activeTab === 'gateway' ? 'Payment Rails' : 'Checkout Progression'}
                  </div>
                  <span className="text-xs text-slate-400">Click to compare segments</span>
                </div>

                {/* Tab: By Device */}
                {activeTab === 'device' && (
                  <div className="space-y-3.5">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-amber-300 flex items-center gap-1.5">
                          <Smartphone className="w-3.5 h-3.5" /> Mobile (iOS & Android) — High Anomaly
                        </span>
                        <span className="font-mono tabular-nums text-amber-400 font-bold">14.0% failure rate</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '78%' }} />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                        <span>8,940 checkout attempts</span>
                        <span>Normal baseline: 4.2%</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-300 flex items-center gap-1.5">
                          <Laptop className="w-3.5 h-3.5" /> Desktop (macOS & Windows) — Nominal
                        </span>
                        <span className="font-mono tabular-nums text-emerald-400 font-semibold">2.8% failure rate</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: '18%' }} />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                        <span>5,220 checkout attempts</span>
                        <span>Within expected tolerances</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-300 flex items-center gap-1.5">
                          Tablet & Other
                        </span>
                        <span className="font-mono tabular-nums text-slate-400 font-medium">3.4% failure rate</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-600 rounded-full" style={{ width: '22%' }} />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                        <span>660 checkout attempts</span>
                        <span>Stable</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab: By Gateway */}
                {activeTab === 'gateway' && (
                  <div className="space-y-3.5">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-amber-300">Credit Card (Stripe 3DS)</span>
                        <span className="font-mono tabular-nums text-amber-400 font-bold">16.8% failure rate</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '84%' }} />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                        <span>Primary decline code: 3ds_auth_timeout</span>
                        <span>Elevated (+42%)</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-300">Apple Pay (Express Wallet)</span>
                        <span className="font-mono tabular-nums text-emerald-400 font-semibold">1.4% failure rate</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: '10%' }} />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                        <span>Direct biometric completion</span>
                        <span>Nominal</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-300">PayPal / PayLater</span>
                        <span className="font-mono tabular-nums text-slate-300 font-medium">3.9% failure rate</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-600 rounded-full" style={{ width: '25%' }} />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                        <span>Standard external redirect modal</span>
                        <span>Expected tolerance</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab: By Step */}
                {activeTab === 'step' && (
                  <div className="space-y-3.5">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-300">01. Customer Info / Address</span>
                        <span className="font-mono tabular-nums text-slate-300">17.0% attrition (normal)</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-600 rounded-full" style={{ width: '30%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-300">02. Shipping Tier Selection</span>
                        <span className="font-mono tabular-nums text-slate-300">7.4% attrition (normal)</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-600 rounded-full" style={{ width: '15%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-amber-300">03. Payment Submission — ANOMALY</span>
                        <span className="font-mono tabular-nums text-amber-400 font-bold">17.1% attrition (abnormal)</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '85%' }} />
                      </div>
                      <div className="text-[11px] text-amber-400/90 mt-1">
                        Expected step drop: 6.5% · Anomaly delta: +10.6%
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action takeaway */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Recommended action: Inspect mobile 3DS viewport CSS & callback timer
                </span>
                <span className="text-indigo-400 font-medium font-mono">
                  Diagnostics verified
                </span>
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};
