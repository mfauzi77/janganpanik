import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { WORKFLOW_4_STEPS } from '../config/appConfig';

interface WorkflowSectionProps {
  onOpenForm: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenForm }) => {
  const getStepVisuals = (theme: 'blue' | 'cyan' | 'navy' | 'green') => {
    switch (theme) {
      case 'blue':
        return {
          numBg: 'bg-[#2563EB] text-white',
          borderHover: 'hover:border-[#2563EB]',
          accentText: 'text-[#2563EB]',
          indicator: 'bg-[#2563EB]',
        };
      case 'cyan':
        return {
          numBg: 'bg-[#06B6D4] text-[#0F2A43]',
          borderHover: 'hover:border-[#06B6D4]',
          accentText: 'text-[#0891B2]',
          indicator: 'bg-[#06B6D4]',
        };
      case 'navy':
        return {
          numBg: 'bg-[#0F2A43] text-white',
          borderHover: 'hover:border-[#0F2A43]',
          accentText: 'text-[#0F2A43]',
          indicator: 'bg-[#0F2A43]',
        };
      case 'green':
        return {
          numBg: 'bg-[#10B981] text-white',
          borderHover: 'hover:border-[#10B981]',
          accentText: 'text-[#059669]',
          indicator: 'bg-[#10B981]',
        };
    }
  };

  return (
    <section id="cara-kerja" className="py-16 sm:py-24 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#06B6D4] tracking-wider uppercase">
            Alur Terstruktur
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F2A43] tracking-tight mt-1">
            Bagaimana Prosesnya?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B]">
            Setiap tahap dirancang bertahap untuk menjaga komunikasi tetap objektif dan tenang.
          </p>
        </div>

        {/* 4 Steps Journey Timeline */}
        <div className="mt-12 sm:mt-16">
          
          {/* Desktop Timeline (4 Columns with horizontal connector line) */}
          <div className="hidden md:block relative">
            {/* Horizontal progress guide line */}
            <div className="absolute top-9 left-12 right-12 h-1 bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#10B981] -z-0 rounded-full opacity-30" />

            <div className="grid md:grid-cols-4 gap-4 relative z-10">
              {WORKFLOW_4_STEPS.map((step, idx) => {
                const visuals = getStepVisuals(step.theme);
                const isFinal = idx === WORKFLOW_4_STEPS.length - 1;

                return (
                  <div
                    key={step.step}
                    className={`bg-white border border-[#E2E8F0] ${visuals.borderHover} rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between`}
                  >
                    <div>
                      {/* Step Number Circle */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`w-10 h-10 rounded-xl font-black text-sm flex items-center justify-center font-mono shadow-xs ${visuals.numBg}`}
                        >
                          {step.step}
                        </span>

                        {isFinal ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#10B981] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                            <span>Hasil</span>
                          </span>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-300" />
                        )}
                      </div>

                      <h3 className="font-extrabold text-[#0F2A43] text-lg">
                        "{step.title}"
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${visuals.indicator}`} />
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${visuals.accentText}`}>
                        {isFinal ? 'Penyelesaian' : `Tahap ${idx + 1}`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline (Vertical clean chain) */}
          <div className="md:hidden space-y-3">
            {WORKFLOW_4_STEPS.map((step, idx) => {
              const visuals = getStepVisuals(step.theme);
              const isFinal = idx === WORKFLOW_4_STEPS.length - 1;

              return (
                <div
                  key={step.step}
                  className={`bg-white border border-[#E2E8F0] ${visuals.borderHover} rounded-xl p-4 shadow-xs`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`w-8 h-8 rounded-lg font-black text-xs flex items-center justify-center font-mono shrink-0 shadow-xs mt-0.5 ${visuals.numBg}`}
                    >
                      {step.step}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-extrabold text-[#0F2A43] text-base">
                          "{step.title}"
                        </h3>
                        {isFinal && (
                          <span className="text-[10px] font-bold text-[#10B981] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            Titik Temu
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={onOpenForm}
            className="px-8 py-3.5 bg-[#0F2A43] hover:bg-[#163B5D] text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all duration-200 cursor-pointer inline-flex items-center gap-2 hover:-translate-y-0.5"
          >
            <span>Mulai Mediasi</span>
            <ArrowRight className="w-4 h-4 text-cyan-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
