import React, { useState } from 'react';
import { 
  Filter, 
  Calendar, 
  AlertCircle, 
  ArrowUpRight, 
  ArrowDownRight, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Smartphone, 
  Layers,
  Activity,
  AlertTriangle,
  RefreshCw,
  SlidersHorizontal,
  Info
} from 'lucide-react';
import { DETECTED_PROBLEMS, FUNNEL_DATA } from '../data/mockData';
import { Timeframe, DeviceType, DetectedProblem } from '../types';
import { FadeIn } from './MotionReveal';

export const DashboardShowcase: React.FC = () => {
  const [timeframe, setTimeframe] = useState<Timeframe>('24h');
  const [deviceFilter, setDeviceFilter] = useState<DeviceType>('all');
  const [selectedProblem, setSelectedProblem] = useState<DetectedProblem>(DETECTED_PROBLEMS[0]);

  // Dynamic values based on filters
  const stats = {
    all: {
      sessions: '14,820',
      conversion: '72.4%',
      abandonment: '18.6%',
      failureRate: '9.0%',
      dropoffs: '4,090',
    },
    mobile: {
      sessions: '8,940',
      conversion: '61.2%',
      abandonment: '24.8%',
      failureRate: '14.0%',
      dropoffs: '3,468',
    },
    desktop: {
      sessions: '5,220',
      conversion: '88.1%',
      abandonment: '9.1%',
      failureRate: '2.8%',
      dropoffs: '622',
    },
    tablet: {
      sessions: '660',
      conversion: '74.2%',
      abandonment: '17.8%',
      failureRate: '8.0%',
      dropoffs: '170',
    },
  }[deviceFilter];

  return (
    <section id="dashboard" className="py-20 md:py-28 border-b border-slate-800/80 bg-[#090D14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider">
              Merchant Console Showcase
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
              One place to understand checkout performance.
            </h2>
            <p className="mt-3 text-base text-slate-400 leading-relaxed">
              Consolidate checkout funnels, payment gateway responses, and anomaly alerts into a single merchant command center.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-end">
            <span className="text-[11px] font-mono text-slate-400">
              Demo Sandbox Environment
            </span>
          </div>
        </FadeIn>

        {/* The Big Realistic Merchant Dashboard */}
        <FadeIn className="mt-10 rounded-2xl border border-slate-800 bg-[#0C121D] shadow-2xl overflow-hidden" delay={0.1}>
          
          {/* Top Bar of Console */}
          <div className="px-6 py-4 border-b border-slate-800 bg-[#090E17] flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <span className="font-semibold text-white text-sm">
                Checkout Observability
              </span>
              <span className="text-slate-600">/</span>
              <span className="text-xs font-mono text-slate-400">
                prod-store-east-01
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                live stream
              </span>
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              
              {/* Device segmented switch */}
              <div className="flex items-center bg-slate-900 p-0.5 rounded-lg border border-slate-800 font-medium">
                {(['all', 'mobile', 'desktop', 'tablet'] as DeviceType[]).map((dev) => (
                  <button
                    key={dev}
                    onClick={() => setDeviceFilter(dev)}
                    className={`px-2.5 py-1 rounded capitalize transition-colors ${
                      deviceFilter === dev
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {dev}
                  </button>
                ))}
              </div>

              {/* Timeframe switch */}
              <div className="flex items-center bg-slate-900 p-0.5 rounded-lg border border-slate-800 font-mono text-[11px]">
                {(['24h', '7d', '30d'] as Timeframe[]).map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={`px-2 py-1 rounded transition-colors ${
                      timeframe === tf
                        ? 'bg-slate-800 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>

            </div>
          </div>

          <div className="p-6 space-y-8">
            
            {/* 1. Overview Metrics Cards with Tabular Numerals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
              <div className="p-4 rounded-xl border border-slate-800 bg-[#090F1A]">
                <div className="text-xs text-slate-400">Checkout Sessions</div>
                <div className="mt-1 text-2xl font-bold font-mono tabular-nums text-white">
                  {stats.sessions}
                </div>
                <div className="mt-1 text-[11px] text-slate-400 flex items-center gap-1">
                  <span className="text-emerald-400 font-medium inline-flex items-center">
                    <ArrowUpRight className="w-3 h-3" /> +4.2%
                  </span>
                  <span>vs prior period</span>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-[#090F1A]">
                <div className="text-xs text-slate-400">Conversion Rate</div>
                <div className="mt-1 text-2xl font-bold font-mono tabular-nums text-white">
                  {stats.conversion}
                </div>
                <div className="mt-1 text-[11px] text-slate-400 flex items-center gap-1">
                  <span className="text-amber-400 font-medium inline-flex items-center">
                    <ArrowDownRight className="w-3 h-3" /> -3.1%
                  </span>
                  <span>vs 30d baseline</span>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-[#090F1A]">
                <div className="text-xs text-slate-400">Checkout Abandonment</div>
                <div className="mt-1 text-2xl font-bold font-mono tabular-nums text-slate-200">
                  {stats.abandonment}
                </div>
                <div className="mt-1 text-[11px] text-slate-400">
                  Total dropped: <span className="font-mono text-slate-300">{stats.dropoffs}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-amber-900/40 bg-amber-950/20">
                <div className="text-xs text-amber-300 font-medium">Payment Failure Rate</div>
                <div className="mt-1 text-2xl font-bold font-mono tabular-nums text-amber-300">
                  {stats.failureRate}
                </div>
                <div className="mt-1 text-[11px] text-amber-400/90 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> Spike detected on mobile
                </div>
              </div>

            </div>

            {/* 2. Conversion Funnel View with Step-by-Step Attrition */}
            <div className="rounded-xl border border-slate-800 bg-[#090F1A] p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    Checkout Progression Funnel
                  </h3>
                  <p className="text-xs text-slate-400">
                    Step-by-step completion volume, progression ratios, and attrition markers
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Total Drop: <span className="text-amber-400 font-bold">4,090 sessions</span>
                </div>
              </div>

              {/* Funnel Visual Bars */}
              <div className="space-y-3">
                {FUNNEL_DATA.map((step, idx) => {
                  const maxCount = FUNNEL_DATA[0].count;
                  const percentageWidth = Math.round((step.count / maxCount) * 100);

                  return (
                    <div key={step.id} className="group">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-slate-400 text-[11px]">0{idx + 1}</span>
                          <span className="font-medium text-slate-200">{step.name}</span>
                          {step.anomaly && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-950/70 border border-amber-700/60 text-amber-300 font-semibold">
                              ANOMALY DETECTED
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 font-mono text-xs">
                          <span className="text-slate-400 tabular-nums">
                            {step.count.toLocaleString()} sessions
                          </span>
                          <span className={`font-semibold tabular-nums ${
                            step.dropoffRate > 15 ? 'text-amber-400' : 'text-slate-300'
                          }`}>
                            {step.conversionFromPrev}% pass-through
                          </span>
                        </div>
                      </div>

                      {/* Bar indicator */}
                      <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden flex items-center p-0.5 border border-slate-800">
                        <div 
                          className={`h-full rounded-full transition-all duration-300 ${
                            step.anomaly ? 'bg-amber-500' : 'bg-indigo-600'
                          }`}
                          style={{ width: `${percentageWidth}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
                <span>Highest friction point: Step 04 (Payment step drop-off elevated by +38%)</span>
                <span>Cart-to-Order Conversion: 58.1%</span>
              </div>
            </div>

            {/* 3. Trend Chart with Anomaly Flag */}
            <div className="rounded-xl border border-slate-800 bg-[#090F1A] p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    Checkout Failure Trend & Deployment Annotations
                  </h3>
                  <p className="text-xs text-slate-400">
                    Hourly failure rates mapped against frontend release events
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-indigo-400 font-medium">
                    <span className="w-2.5 h-0.5 bg-indigo-500 rounded"></span> Overall Failures
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                    <span className="w-2.5 h-0.5 bg-amber-500 rounded"></span> Mobile 3DS Spikes
                  </span>
                </div>
              </div>

              {/* High-fidelity SVG chart with realistic timeline */}
              <div className="relative h-44 w-full pt-4">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 800 140" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="800" y2="20" stroke="#1E293B" strokeDasharray="3 3" />
                  <line x1="0" y1="60" x2="800" y2="60" stroke="#1E293B" strokeDasharray="3 3" />
                  <line x1="0" y1="100" x2="800" y2="100" stroke="#1E293B" strokeDasharray="3 3" />

                  {/* Base trend curve (Overall) */}
                  <path
                    d="M0,110 Q100,105 200,95 T400,90 T550,55 T650,45 T800,50"
                    fill="none"
                    stroke="#6366F1"
                    strokeWidth="2.5"
                  />

                  {/* Mobile Anomaly Curve (Surge after 14:00) */}
                  <path
                    d="M0,115 Q100,112 250,110 T400,105 T500,85 T550,30 T650,22 T800,25"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                  />

                  {/* Deployment marker pin */}
                  <line x1="480" y1="0" x2="480" y2="130" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="480" cy="20" r="4" fill="#94A3B8" />
                  
                  {/* Incident flag marker */}
                  <circle cx="550" cy="30" r="5" fill="#F59E0B" stroke="#0C121D" strokeWidth="2" />
                </svg>

                {/* Annotation labels */}
                <div className="absolute top-1 left-[58%] -translate-x-1/2 bg-slate-900 border border-slate-700 px-2 py-0.5 rounded text-[10px] font-mono text-slate-300">
                  Release v2.41 (Payment SDK update)
                </div>
                <div className="absolute top-8 left-[70%] -translate-x-1/2 bg-amber-950 border border-amber-600/80 px-2 py-0.5 rounded text-[10px] font-mono text-amber-300 font-bold">
                  +38% Failure Spike Detected
                </div>
              </div>

              {/* Time axis */}
              <div className="mt-2 flex justify-between text-[11px] font-mono text-slate-400">
                <span>00:00</span>
                <span>04:00</span>
                <span>08:00</span>
                <span>12:00</span>
                <span className="text-amber-400 font-semibold">14:00 (Incident Trigger)</span>
                <span>18:00</span>
                <span>22:00</span>
              </div>
            </div>

            {/* 4. Detected Problems Queue & Interactive Insight Inspector */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left: Queue of Problems */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono uppercase text-slate-400">
                    Detected Problems Queue ({DETECTED_PROBLEMS.length})
                  </div>
                  <span className="text-xs text-slate-400">Select problem to inspect</span>
                </div>

                <div className="space-y-2.5">
                  {DETECTED_PROBLEMS.map((prob) => {
                    const isSelected = selectedProblem.id === prob.id;
                    return (
                      <div
                        key={prob.id}
                        onClick={() => setSelectedProblem(prob)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-indigo-500 bg-indigo-950/30'
                            : 'border-slate-800 bg-[#090F1A] hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2">
                            <span className={`w-2 h-2 rounded-full mt-1.5 ${
                              prob.severity === 'high' ? 'bg-amber-400' : 'bg-indigo-400'
                            }`} />
                            <div>
                              <h4 className="text-xs font-bold text-white">
                                {prob.title}
                              </h4>
                              <div className="mt-1 text-[11px] font-mono text-slate-400">
                                {prob.checkoutStep} · {prob.changeRate}
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400">
                            {prob.detectedAt}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Insight Detail Card */}
              <div className="lg:col-span-6 rounded-xl border border-slate-800 bg-[#090F1A] p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono font-bold text-indigo-400">
                      INCIDENT DOSSIER: {selectedProblem.id.toUpperCase()}
                    </span>
                    <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded ${
                      selectedProblem.status === 'active' 
                        ? 'bg-amber-950 text-amber-300 border border-amber-700/50' 
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {selectedProblem.status.toUpperCase()}
                    </span>
                  </div>

                  <h4 className="mt-3 text-sm font-bold text-white">
                    {selectedProblem.title}
                  </h4>

                  <div className="mt-4 space-y-2.5 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Affected Segment:</span>
                      <span className="text-slate-200 font-mono mt-0.5 block">
                        {selectedProblem.affectedSegment}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[11px]">Probable Root Cause:</span>
                      <span className="text-slate-200 mt-0.5 block bg-slate-900/90 p-2.5 rounded border border-slate-800">
                        {selectedProblem.possibleRootCause}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[11px]">Recommended Engineering Action:</span>
                      <span className="text-indigo-300 mt-0.5 block bg-indigo-950/20 p-2.5 rounded border border-indigo-900/40">
                        {selectedProblem.recommendedAction}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    Impact: <span className="font-mono text-white font-medium">{selectedProblem.impactEstimate}</span>
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">
                    Telemetry verified
                  </span>
                </div>
              </div>

            </div>

            {/* Explanatory demo disclaimer */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 font-mono">
              <span>Notice: Illustrative demo data for merchant checkout observability</span>
              <span>Sample ID: sandbox_chk_telemetry_2026</span>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};
