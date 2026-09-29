import React from 'react';
import { ArrowRight, ShieldCheck, MessageSquare } from 'lucide-react';

interface HeroProps {
  onOpenForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
    <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-semibold mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Layanan Pendampingan Komunikasi & Mediasi</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F2A43] tracking-tight leading-[1.15]">
          Bingung Menghadapi <span className="text-[#2563EB]">Penagihan?</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-4 text-lg sm:text-xl text-[#64748B] font-medium max-w-2xl mx-auto leading-relaxed">
          Kami bantu menjembatani komunikasi dengan pihak penagihan.
        </p>

        {/* CTA Utama */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenForm}
            className="w-full sm:w-auto px-8 py-4 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-base sm:text-lg rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>💬 Mulai Mediasi</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Small Note */}
        <p className="mt-4 text-xs sm:text-sm text-[#64748B]">
          Pendampingan komunikasi dan mediasi sesuai kondisi kasus.
        </p>

        {/* Minimal Communication Flow Visual */}
        <div className="mt-10 pt-6 border-t border-slate-100 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs font-semibold text-[#0F2A43]">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1.5 rounded-lg">
              Peminjam (Kamu)
            </div>
            <ArrowRight className="w-4 h-4 text-[#06B6D4] shrink-0" />
            <div className="bg-[#0F2A43] text-white px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>Mediator Netral</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#06B6D4] shrink-0" />
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1.5 rounded-lg text-[#64748B]">
              Pihak Penagihan
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
