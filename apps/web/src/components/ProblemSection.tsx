import React from 'react';
import { UserMinus, EyeOff, FileQuestion, SearchCheck } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: UserMinus,
      title: 'Customers disappear',
      summary: 'Customers start checkout but never finish.',
      description:
        'Shoppers add items to their bag, navigate to checkout, and silently vanish mid-flow without triggering an explicit order cancellation or error report.',
    },
    {
      icon: EyeOff,
      title: 'Failures hide inside averages',
      summary: 'A stable top-line conversion rate often conceals bleeding segments.',
      description:
        'An overall 70% conversion rate can mask an 18% mobile crash, an issue with a single card network, or a regional tax calculation breakdown.',
    },
    {
      icon: FileQuestion,
      title: "Data exists, but answers don't",
      summary: 'Raw server logs and transaction ledgers lack operational context.',
      description:
        'Merchants may have thousands of raw event rows across payment gateways and analytics trackers without a coherent explanation of what broke and why.',
    },
    {
      icon: SearchCheck,
      title: 'Teams investigate manually',
      summary: 'Pinpointing the root cause drains days of engineering time.',
      description:
        'Diagnosing a sudden checkout drop-off forces engineers and commerce teams to reconcile disparate logs, gateway consoles, and support tickets by hand.',
    },
  ];

  return (
    <section className="py-20 md:py-24 border-b border-slate-800/80 bg-[#090D14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="max-w-3xl">
          <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
            The Checkout Blindspot
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
            Your checkout can lose customers without telling you why.
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Most commerce systems record completed sales, but lack the observability needed to explain where, why, and on which step potential buyers drop off.
          </p>
        </FadeIn>

        {/* 4 Problem Cards */}
        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelta={0.07}>
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={index}
                className="group rounded-xl border border-slate-800 bg-[#0C121D] p-6 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-indigo-400 group-hover:border-indigo-500/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold text-indigo-300/90 leading-snug">
                    {item.summary}
                  </p>

                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                  Friction Vector 0{index + 1}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
