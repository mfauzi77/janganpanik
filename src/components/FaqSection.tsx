import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_5_ITEMS } from '../config/appConfig';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A43] tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        {/* 3 FAQ Accordions */}
        <div className="space-y-3">
          {FAQ_5_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0F2A43] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#2563EB]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
