import React from 'react';
import { WORKFLOW_3_STEPS } from '../config/appConfig';

interface WorkflowSectionProps {
  onOpenForm?: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = () => {
  return (
    <section id="cara-kerja" className="py-12 sm:py-16 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A43] tracking-tight">
            Caranya sederhana.
          </h2>
        </div>

        {/* 3 Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {WORKFLOW_3_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-xs font-black text-[#2563EB] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md mb-3">
                  Langkah {item.step}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0F2A43]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
