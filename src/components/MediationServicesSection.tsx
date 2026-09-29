import React from 'react';
import { CheckCircle2, Shield, MessageSquare, Scale, AlertCircle } from 'lucide-react';
import { MEDIATION_SERVICES } from '../config/appConfig';

export const MediationServicesSection: React.FC = () => {
  return (
    <section id="layanan" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout: Kiri (Headline & Batasan) | Kanan (Visual Ilustrasi Komunikasi & 4 Poin) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Sebelah Kiri (5 Columns on Desktop): Headline dan Penjelasan Singkat */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">
              Ruang Lingkup Bantuan
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F2A43] tracking-tight mt-1 leading-tight">
              Apa yang Kami Bantu?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#64748B] leading-relaxed">
              Tujuan kami bukan menghapus kewajiban, tetapi membantu agar masalah dapat dibicarakan dengan komunikasi yang lebih jelas dan terarah.
            </p>

            {/* Small Amber Accent Note: Perhatian / Batasan Layanan Terpadu */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
              <span>
                <strong>Perhatian:</strong> Layanan ini adalah fasilitasi komunikasi netral. Hasil mediasi tetap bergantung pada kesepakatan kedua belah pihak.
              </span>
            </div>
          </div>

          {/* Sebelah Kanan (7 Columns on Desktop): Visual Ilustrasi Komunikasi + 4 Poin Terstruktur */}
          <div className="lg:col-span-7 bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-6 sm:p-8">
            
            {/* Visual Mini Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]" />
                <span className="text-xs font-bold text-[#0F2A43] uppercase tracking-wide">
                  Fokus Pendampingan
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-[#2563EB]">
                <Shield className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Terarah & Santun</span>
              </div>
            </div>

            {/* 4 Poin Utama Layanan */}
            <div className="space-y-3.5">
              {MEDIATION_SERVICES.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#2563EB]/40 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-blue-100/70 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold text-[#0F2A43]">
                      {point}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro communication illustration strip */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>Bahasa netral & persuasif</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-[#0F2A43]" />
                <span>Sesuai koridor etika</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
