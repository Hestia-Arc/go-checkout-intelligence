import React, { useState } from 'react';
import { USE_CASE_QUESTIONS } from '../data/mockData';
import { HelpCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './MotionReveal';

export const UseCases: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <section className="py-20 md:py-24 border-b border-slate-800/80 bg-[#070B12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="max-w-3xl">
          <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
            Operational Value & Decision Support
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
            Questions Checkout Intelligence helps answer.
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Eliminate subjective debates between product managers and engineers. Use telemetry to answer the critical questions that impact checkout conversion every day.
          </p>
        </FadeIn>

        {/* Use Cases Grid */}
        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelta={0.07}>
          {USE_CASE_QUESTIONS.map((item, index) => {
            const isSelected = activeQuestion === index;
            return (
              <StaggerItem
                key={item.id}
                className={`group rounded-xl border p-6 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-indigo-500/70 bg-[#0E1524] shadow-md shadow-indigo-950/40'
                    : 'border-slate-800 bg-[#0C121D] hover:border-slate-700'
                }`}
              >
                <div onClick={() => setActiveQuestion(index)}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-indigo-400">
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-white tracking-tight leading-snug">
                    {item.question}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-300">Concrete outcome: </span>
                  {item.example}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
