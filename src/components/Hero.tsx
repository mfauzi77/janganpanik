import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { HeroIllustration } from './HeroIllustration';

interface HeroProps {
  onOpenForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-white overflow-hidden">
      {/* Subtle radial ambient gradients (not full background) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-[#2563EB]/5 via-[#06B6D4]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Subtitle Badge with Cyan Accent */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
          <span className="text-xs font-bold text-[#0F2A43] tracking-wide">
            Layanan Pendampingan & Mediasi Penagihan
          </span>
        </div>

        {/* Headline with Targeted Color Accent */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F2A43] tracking-tight leading-[1.15]">
          Bingung Menghadapi{' '}
          <span className="text-[#2563EB] inline-block relative">
            Penagihan?
            <svg
              className="absolute -bottom-1.5 left-0 w-full h-2 text-[#06B6D4]/40"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
            >
              <path d="M0,5 Q50,0 100,5" fill="transparent" stroke="currentColor" strokeWidth="3" />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-5 text-base sm:text-xl lg:text-2xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
          Serahkan masalah komunikasinya kepada kami. Kami membantu menjembatani peminjam dan pihak penagihan melalui proses mediasi yang lebih terarah.
        </p>

        {/* CTA Utama (Primary Blue CTA with White text) */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <button
            onClick={onOpenForm}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-base sm:text-lg rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>💬 Mulai Mediasi</span>
            <ArrowRight className="w-5 h-5 text-blue-200" />
          </button>

          {/* Kalimat kecil pendukung */}
          <p className="mt-3.5 text-xs sm:text-sm text-[#64748B] font-medium">
            Kamu ceritakan masalahnya. Kami bantu komunikasinya.
          </p>
        </div>

        {/* Visual Diagram Jalur Mediasi Singkat */}
        <div className="mt-12 sm:mt-14">
          <HeroIllustration />
        </div>

      </div>
    </section>
  );
};
