import React, { useState, useEffect } from 'react';
import { MessageSquare, AlertCircle } from 'lucide-react';
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
    whatsapp: '',
    aplikasi: '',
    lamaKeterlambatan: DELAY_OPTIONS[1], // default: 1 - 7 hari
    jenisMasalah: 'Penagihan',
    cerita: '',
  });

  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (initialIssue) {
      setFormData((prev) => ({
        ...prev,
        jenisMasalah: initialIssue,
      }));
    }
  }, [initialIssue]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formError) setFormError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nama.trim()) {
      setFormError('Silakan masukkan nama Anda.');
      return;
    }

    if (!formData.aplikasi.trim()) {
      setFormError('Silakan masukkan nama aplikasi atau pihak penagih.');
      return;
    }

    const message = generateWhatsAppMessage(formData);
    const waUrl = buildWhatsAppUrl(message);
    window.open(waUrl, '_blank');
  };

  return (
    <section id="mulai-mediasi" className="py-14 sm:py-20 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-black text-[#0F2A43] tracking-tight">
            Mulai Mediasi
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#64748B]">
            Ceritakan kondisi kamu. Kami akan pelajari sebelum menghubungi kamu.
          </p>
        </div>

        {/* Clean Form Card */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm rounded-2xl p-6 sm:p-8">
          
          {formError && (
            <div className="mb-5 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl p-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{formError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Nama & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#172033] uppercase tracking-wider mb-1.5">
                  Nama
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Nama kamu"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#172033] uppercase tracking-wider mb-1.5">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Contoh: 08123456789"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
                />
              </div>
            </div>

            {/* Aplikasi / Pemberi Pinjaman & Keterlambatan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#172033] uppercase tracking-wider mb-1.5">
                  Aplikasi / Pemberi Pinjaman
                </label>
                <input
                  type="text"
                  name="aplikasi"
                  value={formData.aplikasi}
                  onChange={handleChange}
                  placeholder="Contoh: Nama Pinjol / Bank"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#172033] uppercase tracking-wider mb-1.5">
                  Lama Keterlambatan
                </label>
                <select
                  name="lamaKeterlambatan"
                  value={formData.lamaKeterlambatan}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all cursor-pointer"
                >
                  {DELAY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Jenis Masalah */}
            <div>
              <label className="block text-xs font-bold text-[#172033] uppercase tracking-wider mb-1.5">
                Jenis Masalah
              </label>
              <select
                name="jenisMasalah"
                value={formData.jenisMasalah}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all cursor-pointer"
              >
                {ISSUE_OPTIONS.map((issue) => (
                  <option key={issue} value={issue}>
                    {issue}
                  </option>
                ))}
              </select>
            </div>

            {/* Cerita Singkat */}
            <div>
              <label className="block text-xs font-bold text-[#172033] uppercase tracking-wider mb-1.5">
                Cerita Singkat
              </label>
              <textarea
                name="cerita"
                rows={3}
                value={formData.cerita}
                onChange={handleChange}
                placeholder="Tuliskan kendala yang dihadapi secara singkat..."
                className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all resize-y"
              />
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-extrabold text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>💬 Kirim & Mulai Mediasi</span>
              </button>
              <p className="mt-2.5 text-center text-xs text-[#64748B]">
                Pesan akan otomatis diformat dan diteruskan ke WhatsApp resmi kami.
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
