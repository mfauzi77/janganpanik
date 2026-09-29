import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const MediationServicesSection: React.FC = () => {
  return (
    <section id="layanan" className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A43] tracking-tight">
            Layanan kami
          </h2>
        </div>

        {/* Single Clean Layout */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-[#0F2A43]">
                Pendampingan Mediasi
              </h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Membantu menjembatani komunikasi dengan pihak penagihan, menyusun komunikasi, dan mendampingi proses sesuai kondisi kasus.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
