import React, { useState } from 'react';
import { ArrowRight, Copy, Check, Terminal, Layers, Code2, Server } from 'lucide-react';
import { EVENT_SAMPLES } from '../data/mockData';
import { FadeIn } from './MotionReveal';

interface IntegrationSectionProps {
  onOpenIntegrations: () => void;
}

export const IntegrationSection: React.FC<IntegrationSectionProps> = ({ onOpenIntegrations }) => {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentEvent = EVENT_SAMPLES[selectedEventIndex];
  const formattedCode = JSON.stringify(currentEvent.payload, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="integrations" className="py-20 md:py-24 border-b border-slate-800/80 bg-[#090D14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="max-w-3xl">
          <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
            Compatibility & Architecture
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
            Works with the store you already have.
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Checkout Intelligence is purpose-built as an observability integration—not a replacement for your cart, payment gateway, or commerce backend. It runs alongside your existing checkout flow to capture structured activity without altering transaction logic.
          </p>
        </FadeIn>

        {/* Visual Architecture Schematic */}
        <FadeIn className="mt-12 rounded-xl border border-slate-800 bg-[#0C121D] p-6 lg:p-8" delay={0.08}>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6">
            System Topology Schematic
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            
            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-[11px] font-mono text-slate-400">Node 01</div>
              <div className="text-sm font-bold text-white mt-1">Existing Store</div>
              <div className="text-xs text-slate-400 mt-1">
                Your current e-commerce frontend & checkout UI
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-[11px] font-mono text-indigo-400">Node 02</div>
              <div className="text-sm font-bold text-white mt-1">Checkout Events</div>
              <div className="text-xs text-slate-400 mt-1">
                Lightweight event payload sent via HTTPS webhook / client SDK
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-900 border border-indigo-900/50 bg-indigo-950/20">
              <div className="text-[11px] font-mono text-indigo-400">Node 03</div>
              <div className="text-sm font-bold text-white mt-1">Checkout Intelligence</div>
              <div className="text-xs text-slate-400 mt-1">
                Event parser, validation filter, anomaly detection engine
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-[11px] font-mono text-slate-400">Node 04</div>
              <div className="text-sm font-bold text-white mt-1">Merchant Dashboard</div>
              <div className="text-xs text-slate-400 mt-1">
                Funnels, problem alerts, conversion recovery telemetry
              </div>
            </div>

          </div>
        </FadeIn>

        {/* Interactive Code & Payload Preview */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Explanation and event switcher */}
          <FadeIn className="lg:col-span-5 space-y-6" delay={0.1}>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Standardized, privacy-safe checkout event schemas
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Send lightweight JSON event payloads at key checkout transitions. Payloads contain operational context (device form factor, checkout step, decline code) with strict zero-PII guarantees.
              </p>
            </div>

            {/* Event Tabs */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-slate-400 uppercase">
                Select Illustrative Event Payload:
              </div>
              <div className="grid grid-cols-1 gap-2">
                {EVENT_SAMPLES.map((sample, idx) => (
                  <button
                    key={sample.name}
                    onClick={() => setSelectedEventIndex(idx)}
                    className={`text-left p-3 rounded-lg border transition-all text-xs ${
                      selectedEventIndex === idx
                        ? 'border-indigo-500 bg-indigo-950/30 text-white'
                        : 'border-slate-800 bg-[#0C121D] hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="font-mono font-semibold flex items-center justify-between">
                      <span>{sample.name}</span>
                      {selectedEventIndex === idx && (
                        <span className="text-[10px] font-mono text-indigo-400 font-normal">
                          Active preview
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                      {sample.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Explore Integrations CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenIntegrations}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-indigo-500"
              >
                <span>Explore integrations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </FadeIn>

          {/* Right: Code Block Visual */}
          <FadeIn className="lg:col-span-7" delay={0.16}>
            <div className="rounded-xl border border-slate-800 bg-[#0B0F19] overflow-hidden shadow-xl">
              
              {/* Code header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800 bg-[#080B12]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-xs font-mono text-slate-300">
                    payload_{currentEvent.name}.json
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    · Illustrative example
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                  title="Copy sample event payload"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code viewport with line numbers */}
              <div className="p-4 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed max-h-[380px]">
                <pre className="text-emerald-400/90 whitespace-pre">
                  <code>{formattedCode}</code>
                </pre>
              </div>

              {/* Security and privacy guarantee footer */}
              <div className="px-4 py-2.5 border-t border-slate-800/80 bg-[#080B12] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Schema validation: strict JSON schema</span>
                <span>PCI-DSS safe: no raw card numbers ingested</span>
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};
