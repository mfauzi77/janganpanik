import React from 'react';
import { AlertCircle } from 'lucide-react';
import { COMPACT_PROBLEMS } from '../config/appConfig';

interface ProblemsSectionProps {
  onOpenForm?: (problem?: string) => void;
}

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onOpenForm }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A43] tracking-tight">
            Ada masalah dengan penagihan?
          </h2>
        </div>

        {/* 4 Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto">
          {COMPACT_PROBLEMS.map((problem, index) => (
            <div
              key={index}
              onClick={() => onOpenForm && onOpenForm(problem)}
              className="bg-white border border-[#E2E8F0] hover:border-[#2563EB]/50 hover:shadow-sm rounded-xl p-4 flex items-center gap-3 transition-all cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                <AlertCircle className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-[#172033] group-hover:text-[#2563EB] transition-colors">
                {problem}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
