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
<div className="mt-8 pt-6 border-t border-slate-100 max-w-2xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1.1fr_auto_1fr] items-center gap-3">

    {/* Peminjam */}
    <div className="bg-white border border-blue-100 rounded-2xl px-4 py-4 text-center shadow-sm">
      <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-blue-50 flex items-center justify-center text-xl">
        👤
      </div>
      <div className="font-semibold text-[#0F2A43]">
        Peminjam
      </div>
      <div className="text-xs text-[#64748B] mt-0.5">
        Kamu
      </div>
    </div>

    {/* Arrow */}
    <div className="hidden sm:flex items-center justify-center">
      <ArrowRight className="w-5 h-5 text-[#06B6D4]" />
    </div>

    {/* Mediator */}
    <div className="relative bg-gradient-to-br from-[#EFF6FF] to-[#ECFEFF] border border-cyan-200 rounded-2xl px-5 py-4 text-center shadow-md">
      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#06B6D4] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
        JEMBATAN KOMUNIKASI
      </div>

      <div className="w-11 h-11 mx-auto mb-2 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm">
         🤝
      </div>

      <div className="font-bold text-[#0F2A43]">
        Mediator
      </div>

      <div className="text-xs text-[#64748B] mt-0.5">
        Kami bantu bicara
      </div>
    </div>

    {/* Arrow */}
    <div className="hidden sm:flex items-center justify-center">
      <ArrowRight className="w-5 h-5 text-[#06B6D4]" />
    </div>

    {/* Pihak Penagihan */}
    <div className="bg-white border border-slate-200 rounded-2xl px-4 py-4 text-center shadow-sm">
      <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-slate-50 flex items-center justify-center text-xl">
       💬
      </div>
      <div className="font-semibold text-[#0F2A43]">
        Pihak Penagihan
      </div>
      <div className="text-xs text-[#64748B] mt-0.5">
        Pihak terkait
      </div>
    </div>

  </div>
</div>


      </div>
    </section>
  );
};
