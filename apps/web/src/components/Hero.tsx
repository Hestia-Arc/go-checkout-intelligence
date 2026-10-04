import React, { useState } from 'react';
import { ArrowRight, AlertTriangle, Smartphone, ChevronRight, Activity, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';
import { HERO_METRICS } from '../data/mockData';
import { FadeIn } from './MotionReveal';

interface HeroProps {
  onOpenConnect: () => void;
  onOpenHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConnect, onOpenHowItWorks }) => {
  const [selectedSegment, setSelectedSegment] = useState<'all' | 'mobile'>('mobile');

  // Illustrative segment metrics comparison
  const metrics = selectedSegment === 'mobile'
    ? { conversion: 61.2, abandonment: 24.8, failures: 14.0, sessions: 8940 }
    : { conversion: 72.4, abandonment: 18.6, failures: 9.0, sessions: 14820 };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-800/60">
      {/* Subtle radial engineering grid background */}
      <div 
        className="pointer-events-none absolute inset-0 -z-10 opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <FadeIn className="lg:col-span-6 space-y-6" delay={0.05}>
            {/* Meta indicator - clean unboxed text as per design constitution */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-slate-300 font-mono">B2B Checkout Observability</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Merchant Analytics Engine</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              Know exactly where your checkout is breaking.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Checkout Intelligence connects to your store, analyzes checkout activity, and turns confusing checkout behavior into actionable business insights.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenConnect}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm shadow-indigo-950 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-indigo-400"
              >
                <span>Connect your store</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenHowItWorks}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-850 hover:text-white border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-slate-500"
              >
                <span>See how it works</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Architecture summary note */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <Cpu className="w-4 h-4 text-slate-500 shrink-0" />
              <span>
                Non-invasive webhook & SDK integration. Does not replace your commerce stack.
              </span>
            </div>
          </FadeIn>

          {/* Right Column: Sophisticated Product Dashboard Preview */}
          <FadeIn className="lg:col-span-6" delay={0.15}>
            <div className="relative rounded-xl border border-slate-800 bg-[#0C121D] shadow-2xl shadow-black/80 overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/90 bg-[#0A0F18]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">store_production_us</span>
                </div>

                {/* Segment toggle */}
                <div className="flex items-center gap-1 p-0.5 bg-slate-900/90 rounded border border-slate-800 text-[11px]">
                  <button
                    onClick={() => setSelectedSegment('all')}
                    className={`px-2 py-0.5 font-medium rounded transition-colors ${
                      selectedSegment === 'all'
                        ? 'bg-slate-800 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    All Traffic
                  </button>
                  <button
                    onClick={() => setSelectedSegment('mobile')}
                    className={`px-2 py-0.5 font-medium rounded transition-colors ${
                      selectedSegment === 'mobile'
                        ? 'bg-indigo-600/80 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Mobile Segment
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-5 space-y-5">
                
                {/* Section Title */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                      Checkout Health
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Live event aggregation · Active window: Last 24 Hours
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    telemetry stream active
                  </span>
                </div>

                {/* Metrics Grid with Tabular Numerals */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800/80">
                    <div className="text-xs text-slate-400">Conversion</div>
                    <div className="text-2xl font-bold font-mono tabular-nums text-white mt-1">
                      {metrics.conversion}%
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {selectedSegment === 'mobile' ? '↓ 11.2% vs desktop' : 'Baseline normal'}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800/80">
                    <div className="text-xs text-slate-400">Abandonment</div>
                    <div className="text-2xl font-bold font-mono tabular-nums text-slate-200 mt-1">
                      {metrics.abandonment}%
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {selectedSegment === 'mobile' ? '↑ 6.2% elevated' : 'Stable 7d avg'}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-900/80 border border-amber-900/30">
                    <div className="text-xs text-amber-400 font-medium">Payment failures</div>
                    <div className="text-2xl font-bold font-mono tabular-nums text-amber-300 mt-1">
                      {metrics.failures}%
                    </div>
                    <div className="text-[11px] text-amber-400/90 font-medium mt-1">
                      {selectedSegment === 'mobile' ? '⚠️ +38% spike' : 'Slightly elevated'}
                    </div>
                  </div>
                </div>

                {/* Detected Problem Insight Card */}
                <div className="rounded-lg border border-amber-500/30 bg-amber-950/20 p-4 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1 rounded bg-amber-500/20 text-amber-400 mt-0.5">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-amber-400 font-semibold tracking-wide">
                          CHECKOUT PROBLEM DETECTED
                        </div>
                        <h4 className="text-sm font-semibold text-white mt-0.5">
                          Payment failures increased 38%
                        </h4>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0">
                      2 hours ago
                    </span>
                  </div>

                  {/* Diagnostic Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-amber-500/20 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Affected segment:</span>
                      <span className="text-slate-200 font-medium inline-flex items-center gap-1.5 mt-0.5">
                        <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                        Mobile customers (iOS Safari)
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Possible issue:</span>
                      <span className="text-slate-200 font-medium block mt-0.5">
                        Payment processing step (3DS modal timeout)
                      </span>
                    </div>
                  </div>

                  {/* Impact preview */}
                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-amber-500/10">
                    <span>Impact: ~210 aborted transactions</span>
                    <a
                      href="#intelligence"
                      className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1"
                    >
                      Inspect diagnostics <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Footer disclaimer */}
                <div className="text-[11px] text-slate-400 text-center font-mono">
                  Illustrative product preview with sample checkout telemetry
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
