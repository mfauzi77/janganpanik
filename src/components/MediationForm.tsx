import React, { useState, useEffect } from 'react';
import { MessageSquare, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import {
  FormSubmissionData,
  DELAY_OPTIONS,
  ISSUE_OPTIONS,
  generateWhatsAppMessage,
  buildWhatsAppUrl,
} from '../config/appConfig';

interface MediationFormProps {
  initialIssue?: string;
}

export const MediationForm: React.FC<MediationFormProps> = ({ initialIssue }) => {
  const [formData, setFormData] = useState<FormSubmissionData>({
    nama: '',
    aplikasi: '',
    lamaKeterlambatan: DELAY_OPTIONS[1], // default: 1 - 7 hari
    jenisMasalah: 'Penagihan',
    cerita: '',
  });

  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (initialIssue) {
      // Pastikan issue yang diset cocok dengan opsi yang tersedia
      const validIssue = ISSUE_OPTIONS.includes(initialIssue) ? initialIssue : 'Penagihan';
      setFormData(prev => ({
        ...prev,
        jenisMasalah: validIssue,
      }));
    }
  }, [initialIssue]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (formError) setFormError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nama.trim()) {
      setFormError('Silakan masukkan nama kamu.');
      return;
    }

    if (!formData.aplikasi.trim()) {
      setFormError('Silakan masukkan nama aplikasi atau pihak penagih.');
      return;
    }

    const message = generateWhatsAppMessage(formData);
    const waUrl = buildWhatsAppUrl(message);
    window.location.href = waUrl;
  };

  return (
    <section
      id="mulai-mediasi"
      className="relative py-20 sm:py-28 bg-[#0F2A43] text-white overflow-hidden border-t border-slate-800"
    >
      {/* Decorative gradient navy -> blue -> cyan glow at background */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with White Headline */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
            <span>Kerahasiaan Terjaga</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Mulai Ceritakan Masalahmu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Tidak perlu bingung menyusun ceritanya. Ceritakan kondisi kamu dengan bahasa sendiri.
          </p>
        </div>

        {/* Clean White Card Form */}
        <div className="mt-10 bg-white text-[#172033] border border-slate-200 shadow-2xl rounded-2xl p-6 sm:p-10">
          
          {/* Error Banner with Red Tone */}
          {formError && (
            <div className="mb-6 bg-red-50 border border-red-200 text-[#EF4444] text-xs sm:text-sm font-semibold rounded-xl p-3.5 flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-[#EF4444]" />
              <span>{formError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            
            {/* Nama */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Nama <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Nama kamu"
                className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#172033] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-all"
                required
              />
            </div>

            {/* Nama Aplikasi & Keterlambatan Dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Nama Aplikasi / Pemberi Pinjaman <span className="text-[#EF4444]">*</span>
                </label>
                <input
                  type="text"
                  name="aplikasi"
                  value={formData.aplikasi}
                  onChange={handleChange}
                  placeholder="Contoh: Nama Pinjol / Bank"
                  className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#172033] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Lama Keterlambatan
                </label>
                <select
                  name="lamaKeterlambatan"
                  value={formData.lamaKeterlambatan}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-all cursor-pointer"
                >
                  {DELAY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Jenis Masalah (Bagian 'Kesulitan Pembayaran' ditiadakan sesuai instruksi) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Jenis Masalah
              </label>
              <select
                name="jenisMasalah"
                value={formData.jenisMasalah}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-all cursor-pointer"
              >
                {ISSUE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Cerita Singkat */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Cerita Singkat
              </label>
              <textarea
                name="cerita"
                rows={3}
                value={formData.cerita}
                onChange={handleChange}
                placeholder="Tuliskan kendala yang dihadapi secara singkat..."
                className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#172033] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-all resize-y"
              />
            </div>

            {/* CTA Utama Section (Contrast Blue Button on Navy section) */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-base sm:text-lg rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer active:scale-[0.99]"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>💬 Kirim & Mulai Mediasi</span>
                <ArrowRight className="w-5 h-5 text-blue-200" />
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">
                Data akan otomatis disusun menjadi pesan WhatsApp resmi tanpa perlu daftar akun.
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
