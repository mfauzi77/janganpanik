/**
 * Konfigurasi Utama Layanan Jangan Panik! (Logo: Jangan Panik Dulu / JP)
 * Seluruh data dan format WhatsApp terpusat di file ini.
 */

export const APP_CONFIG = {
  brandName: 'Jangan Panik Dulu',
  shortLogo: 'JP',
  tagline: 'Kamu cerita. Kami bantu bicara.',
  // Nomor WhatsApp Baru: 085111575701 -> 6285111575701
  whatsappNumber: '6285111575701',
  supportEmail: 'bantuan@janganpanik.id',
  operationalHours: 'Senin - Minggu: 08.00 - 21.00 WIB',
  address: 'Jakarta, Indonesia',
  disclaimerText:
    'Layanan ini merupakan pendampingan komunikasi dan mediasi. Tidak menjamin penghapusan utang atau hasil negosiasi tertentu.',
};

export interface FormSubmissionData {
  nama: string;
  whatsapp: string;
  aplikasi: string;
  lamaKeterlambatan: string;
  jenisMasalah: string;
  cerita: string;
}

/**
 * Pilihan durasi keterlambatan untuk dropdown
 */
export const DELAY_OPTIONS = [
  'Belum terlambat (antisipasi)',
  '1 - 7 hari',
  '8 - 30 hari',
  '1 - 3 bulan',
  '3 - 6 bulan',
  'Lebih dari 6 bulan',
];

/**
 * Pilihan jenis masalah di form
 */
export const ISSUE_OPTIONS = [
  'Penagihan',
  'Kunjungan lapangan',
  'Perselisihan komunikasi',
  'Kesulitan membicarakan pembayaran',
  'Lainnya',
];

/**
 * 4 Masalah Ringkas & Langsung ke Inti
 */
export const COMPACT_PROBLEMS = [
  'Banyak dihubungi pihak penagihan',
  'Bingung harus menjawab apa',
  'Ada rencana kunjungan lapangan',
  'Kesulitan membicarakan kondisi pembayaran',
];

/**
 * 3 Langkah Cara Kerja Sederhana
 */
export const WORKFLOW_3_STEPS = [
  {
    step: '1',
    title: 'Ceritakan',
    desc: 'Isi kondisi dan masalah kamu.',
  },
  {
    step: '2',
    title: 'Kami pelajari',
    desc: 'Kami memahami situasi dan komunikasi yang terjadi.',
  },
  {
    step: '3',
    title: 'Kami bantu mediasi',
    desc: 'Kami membantu menjembatani komunikasi dengan pihak penagihan.',
  },
];

/**
 * 3 FAQ Singkat & Padat
 */
export const FAQ_3_ITEMS = [
  {
    question: 'Apakah ini jasa pelunasan utang?',
    answer: 'Tidak. Layanan ini berfokus pada pendampingan komunikasi dan mediasi.',
  },
  {
    question: 'Apakah utang saya bisa dihapus?',
    answer: 'Tidak ada jaminan penghapusan utang. Hasil mediasi bergantung pada kondisi kasus dan pihak terkait.',
  },
  {
    question: 'Apakah pihak penagihan pasti mau mengikuti mediasi?',
    answer: 'Tidak selalu. Kami membantu menjembatani komunikasi sesuai kondisi kasus.',
  },
];

/**
 * Format Pesan WhatsApp Spesifik Sesuai Permintaan:
 * 
 * Halo, saya ingin meminta bantuan mediasi penagihan.
 * 
 * 📌 DATA SAYA
 * Nama: [Nama]
 * Aplikasi/Pemberi Pinjaman: [Aplikasi]
 * Keterlambatan: [Keterlambatan]
 * Jenis Masalah: [Jenis Masalah]
 * 
 * 📝 CERITA SINGKAT
 * [Cerita]
 * 
 * 🤝 BANTUAN
 * Saya ingin mendapatkan bantuan untuk menjembatani komunikasi dengan pihak penagihan.
 * 
 * Terima kasih.
 */
export function generateWhatsAppMessage(data: FormSubmissionData): string {
  const nama = data.nama.trim() || '-';
  const aplikasi = data.aplikasi.trim() || '-';
  const keterlambatan = data.lamaKeterlambatan.trim() || '-';
  const jenisMasalah = data.jenisMasalah.trim() || 'Penagihan';
  const cerita = data.cerita.trim() || '(Tidak ada catatan tambahan)';

  return `Halo, saya ingin meminta bantuan mediasi penagihan.

📌 DATA SAYA
Nama: ${nama}
Aplikasi/Pemberi Pinjaman: ${aplikasi}
Keterlambatan: ${keterlambatan}
Jenis Masalah: ${jenisMasalah}

📝 CERITA SINGKAT
${cerita}

🤝 BANTUAN
Saya ingin mendapatkan bantuan untuk menjembatani komunikasi dengan pihak penagihan.

Terima kasih.`;
}

/**
 * Menghasilkan link WhatsApp lengkap
 */
export function buildWhatsAppUrl(message?: string): string {
  const phone = APP_CONFIG.whatsappNumber;
  if (!message) {
    const defaultMsg = encodeURIComponent(
      'Halo, saya ingin meminta bantuan mediasi penagihan.'
    );
    return `https://wa.me/${phone}?text=${defaultMsg}`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
