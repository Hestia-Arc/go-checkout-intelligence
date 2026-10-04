import React from 'react';
import { Link2, Radio, BrainCircuit, LayoutDashboard, TrendingUp } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      label: 'Connect',
      title: 'Integrate with your checkout flow',
      desc: 'Deploy our lightweight client script or backend webhook into your existing store. Zero migration needed.',
      icon: Link2,
    },
    {
      num: '02',
      label: 'Capture',
      title: 'Events flow into the platform',
      desc: 'Structured, privacy-compliant events stream securely whenever shoppers step into the checkout experience.',
      icon: Radio,
    },
    {
      num: '03',
      label: 'Analyze',
      title: 'Statistical anomaly detection',
      desc: 'The engine continuously compares completion rates, latencies, and gateway responses against historical baselines.',
      icon: BrainCircuit,
    },
    {
      num: '04',
      label: 'Understand',
      title: 'Surfaces problems and root causes',
      desc: 'The dashboard isolates specific friction points, affected device segments, and failing validation rules.',
      icon: LayoutDashboard,
    },
    {
      num: '05',
      label: 'Improve',
      title: 'Act and monitor the recovery',
      desc: 'Deploy fixes with confidence and verify in real time whether checkout conversion and recovery improve.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-24 border-b border-slate-800/80 bg-[#090D14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="max-w-3xl">
          <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
            Operational Lifecycle
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
            Connect once. Start understanding your checkout.
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Get comprehensive visibility in minutes without altering your payment gateway credentials or cart logic.
          </p>
        </FadeIn>

        {/* 5 Sequential Steps */}
        <div className="mt-14 relative">
          
          {/* Subtle horizontal timeline bar for desktop */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-0.5 bg-slate-800 -z-0" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10" staggerDelta={0.08}>
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem
                  key={step.num}
                  className="rounded-xl border border-slate-800 bg-[#0C121D] p-5 flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <div>
                    {/* Circle step badge */}
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-indigo-400 mb-4 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="text-xs font-mono font-bold text-slate-400">
                      {step.num} — {step.label}
                    </div>

                    <h3 className="mt-2 text-sm font-bold text-white tracking-tight">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
                    Stage {step.num} complete
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
};
