import React from 'react';
import { ArrowRight, PhoneCall, MapPin, AlertCircle, MessageSquareWarning } from 'lucide-react';
import { PROBLEMS_WE_HELP } from '../config/appConfig';

interface ProblemsSectionProps {
  onOpenForm: (problemType?: string) => void;
}

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onOpenForm }) => {
  const getProblemStyle = (iconTheme: 'blue' | 'amber' | 'cyan' | 'navy') => {
    switch (iconTheme) {
      case 'blue':
        return {
          icon: <PhoneCall className="w-5 h-5 text-[#2563EB]" />,
          iconBg: 'bg-blue-50 border-blue-100 text-[#2563EB]',
          badgeText: 'text-[#2563EB]',
        };
      case 'amber':
        return {
          icon: <MapPin className="w-5 h-5 text-[#F59E0B]" />,
          iconBg: 'bg-amber-50 border-amber-200/80 text-[#B45309]',
          badgeText: 'text-[#B45309]',
        };
      case 'cyan':
        return {
          icon: <AlertCircle className="w-5 h-5 text-[#06B6D4]" />,
          iconBg: 'bg-cyan-50 border-cyan-100 text-[#0891B2]',
          badgeText: 'text-[#0891B2]',
        };
      case 'navy':
        return {
          icon: <MessageSquareWarning className="w-5 h-5 text-[#0F2A43]" />,
          iconBg: 'bg-slate-100 border-slate-200 text-[#0F2A43]',
          badgeText: 'text-[#0F2A43]',
        };
    }
  };

  return (
    <section id="masalah" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">
            Identifikasi Situasi
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F2A43] tracking-tight mt-1">
            Masalah Penagihan yang Bisa Kami Bantu
          </h2>
        </div>

        {/* 4 Cards: White cards with distinct accent icons & subtle hover lift */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {PROBLEMS_WE_HELP.map((item, index) => {
            const style = getProblemStyle(item.iconTheme);
            return (
              <div
                key={item.id}
                className="group bg-white border border-[#E2E8F0] hover:border-[#2563EB] rounded-2xl p-6 sm:p-7 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-1 flex items-start gap-4"
              >
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${style.iconBg}`}
                >
                  {style.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold font-mono ${style.badgeText}`}>
                      0{index + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F2A43] group-hover:text-[#2563EB] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Single Primary CTA under section */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onOpenForm()}
            className="px-8 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm sm:text-base rounded-xl shadow-md shadow-blue-600/20 hover:shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center gap-2 transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <span>Mulai Mediasi</span>
            <ArrowRight className="w-4 h-4 text-blue-200" />
          </button>
        </div>

      </div>
    </section>
  );
};
