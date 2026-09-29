import React from 'react';
import { ShieldCheck, MessageCircle, AlertTriangle, ArrowRight, ArrowDown, CheckCircle2 } from 'lucide-react';

export const HeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto select-none">
      {/* Decorative subtle ambient back-glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-100/50 via-cyan-100/30 to-amber-100/40 rounded-3xl blur-xl opacity-70 -z-10" />

      <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-4 sm:p-6 text-left">
        
        {/* Top Header */}
        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-5 flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2 text-[#0F2A43]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
            <span className="font-extrabold text-xs sm:text-sm">Skema Mediasi Komunikasi Terarah</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#2563EB] font-semibold text-[11px] sm:text-xs">
            <span>Bukan Konfrontasi</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#10B981] font-bold">Mencari Titik Temu</span>
          </div>
        </div>

        {/* 3 Step Visual Pipeline with Explicit Arrows on both PC & Mobile */}
        <div className="flex flex-col md:flex-row items-stretch gap-3 relative">
          
          {/* Card 1: Peminjam (Kamu) */}
          <div className="flex-1 bg-[#F8FAFC] border-2 border-slate-200/90 hover:border-[#2563EB]/40 rounded-xl p-4 flex flex-col justify-between transition-all">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-md">
                  Pihak 01
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FEF3C7] text-[#B45309]">
                  <AlertTriangle className="w-3 h-3 text-[#F59E0B]" />
                  <span>Perhatian</span>
                </span>
              </div>
              <div className="font-extrabold text-[#0F2A43] text-base mt-2 flex items-center gap-1.5">
                <span>Peminjam</span>
                <span className="text-[#2563EB] font-bold text-sm bg-blue-100/70 px-1.5 py-0.2 rounded-md">
                  (Kamu)
                </span>
              </div>
              <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                Menghadapi pesan penagihan & bingung merespons dengan tepat.
              </p>
            </div>
            <div className="mt-3.5 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 text-[11px] text-[#0F2A43] font-medium shadow-2xs">
              <MessageCircle className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
              <span>Cerita kendala apa adanya</span>
            </div>
          </div>

          {/* Flow Connector 1: Peminjam -> Mediator */}
          <div className="flex items-center justify-center py-0.5 md:py-0 md:px-0.5 shrink-0">
            {/* Desktop Horizontal Indicator with Badge */}
            <div className="hidden md:flex flex-col items-center justify-center gap-1 text-[#2563EB]">
              <div className="text-[9px] font-extrabold text-[#06B6D4] uppercase tracking-tighter bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-200/60 shadow-2xs">
                Menceritakan
              </div>
              <div className="w-9 h-9 rounded-full bg-blue-50 border-2 border-[#2563EB] flex items-center justify-center text-[#2563EB] shadow-xs">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>

            {/* Mobile Vertical Indicator with Badge */}
            <div className="flex md:hidden items-center justify-center gap-2 py-1 text-[#2563EB]">
              <div className="w-7 h-7 rounded-full bg-blue-50 border-2 border-[#2563EB] flex items-center justify-center text-[#2563EB] shadow-xs">
                <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-[10px] font-extrabold text-[#06B6D4] bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">
                Peminjam menceritakan kendala
              </span>
            </div>
          </div>

          {/* Card 2: Mediator JP (Central Core) */}
          <div className="flex-1 bg-[#0F2A43] text-white border-2 border-[#06B6D4] rounded-xl p-4 flex flex-col justify-between shadow-md relative overflow-hidden">
            {/* Subtle glow accent inside */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#06B6D4]/10 rounded-full blur-xl -mr-6 -mt-6 pointer-events-none" />

            <div>
              <div className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-wider flex items-center justify-between">
                <span>Penengah Netral</span>
                <span className="bg-[#06B6D4] text-[#0F2A43] px-2 py-0.5 rounded font-black text-[11px] shadow-xs">
                  JP!
                </span>
              </div>
              <div className="font-extrabold text-white text-base mt-2 flex items-center gap-1.5">
                <span>Mediator Netral</span>
                <ShieldCheck className="w-4 h-4 text-[#06B6D4]" />
              </div>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Menjembatani penyampaian pesan secara santun, jelas, dan proporsional.
              </p>
            </div>

            <div className="mt-3.5 bg-white/10 border border-[#06B6D4]/40 rounded-lg px-2.5 py-1.5 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Fasilitasi dialog terarah</span>
            </div>
          </div>

          {/* Flow Connector 2: Mediator -> Pihak Penagihan */}
          <div className="flex items-center justify-center py-0.5 md:py-0 md:px-0.5 shrink-0">
            {/* Desktop Horizontal Indicator with Badge */}
            <div className="hidden md:flex flex-col items-center justify-center gap-1 text-[#10B981]">
              <div className="text-[9px] font-extrabold text-[#10B981] uppercase tracking-tighter bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60 shadow-2xs">
                Mediasi
              </div>
              <div className="w-9 h-9 rounded-full bg-emerald-50 border-2 border-[#10B981] flex items-center justify-center text-[#10B981] shadow-xs">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>

            {/* Mobile Vertical Indicator with Badge */}
            <div className="flex md:hidden items-center justify-center gap-2 py-1 text-[#10B981]">
              <div className="w-7 h-7 rounded-full bg-emerald-50 border-2 border-[#10B981] flex items-center justify-center text-[#10B981] shadow-xs">
                <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-[10px] font-extrabold text-[#10B981] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Menjembatani komunikasi resmi
              </span>
            </div>
          </div>

          {/* Card 3: Pihak Penagihan */}
          <div className="flex-1 bg-[#F8FAFC] border-2 border-slate-200/90 hover:border-slate-300 rounded-xl p-4 flex flex-col justify-between transition-all">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-[#64748B] uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md">
                  Pihak 02
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#2563EB]">
                  <span>Pihak Terkait</span>
                </span>
              </div>
              <div className="font-extrabold text-[#0F2A43] text-base mt-2">Pihak Penagihan</div>
              <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                Menerima keterangan resmi & membahas opsi penyelesaian yang realistis.
              </p>
            </div>
            <div className="mt-3.5 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 text-[11px] text-[#0F2A43] font-medium shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
              <span>Komunikasi resmi tercatat</span>
            </div>
          </div>

        </div>

        {/* Bottom subtle connector note */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#64748B]">
          <div className="flex items-center gap-2">
            <span className="text-[#0F2A43] font-bold">Alur Mediasi:</span>
            <span>Peminjam (Kamu) berkonsultasi ➔ Mediator netral menjembatani ➔ Pihak penagihan diajak berdialog.</span>
          </div>
          <div className="flex items-center gap-1 text-[#2563EB] font-bold">
            <span>Dialog Solutif</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>
    </div>
  );
};
