import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Shield, Terminal } from 'lucide-react';
import { FadeIn } from './MotionReveal';

interface CTAProps {
  onOpenConnect: () => void;
  onExploreProduct: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenConnect, onExploreProduct }) => {
  return (
    <section className="py-20 md:py-24 border-b border-slate-800/80 bg-[#070B12] relative overflow-hidden">
      
      {/* Subtle glow accent */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-72 w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[100px]" />

      <FadeIn className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-400">
          <span>Non-invasive integration</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Zero changes to cart backend</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
          Stop guessing where checkout is losing customers.
        </h2>

        <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
          Connect your store and turn checkout activity into actionable intelligence.
        </p>

        {/* Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenConnect}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm shadow-indigo-950 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-indigo-400"
          >
            <span>Connect your store</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onExploreProduct}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-slate-500"
          >
            <span>Explore the product</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Engineering assurances */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            <span>Lightweight async script (&lt;8KB)</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-indigo-400" />
            <span>Zero raw cardholder data ingested</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span>Standard JSON webhook compatibility</span>
          </div>
        </div>

      </FadeIn>
    </section>
  );
};
