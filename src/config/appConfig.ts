/**
 * Konfigurasi Utama Layanan Jangan Panik Dulu (Logo: JP)
 * Seluruh data dan format WhatsApp terpusat di file ini.
 */

export const APP_CONFIG = {
  brandName: 'Jangan Panik!',
  shortLogo: 'JP!',
  tagline: 'Kamu cerita. Kami bantu bicara.',
  // Nomor WhatsApp Admin (format internasional tanpa '+' atau spasi)
  whatsappNumber: '6285111575701',
  operationalHours: 'Senin - Minggu: 08.00 - 21.00 WIB',
  responseEstimate: 'Dibalas < 15 menit',
  address: 'Jakarta, Indonesia',
  disclaimerText:
    'Jangan Panik! menyediakan layanan informasi, pendampingan komunikasi, dan mediasi. Layanan ini tidak menghapus kewajiban pembayaran dan tidak menjamin hasil tertentu. Proses mediasi bergantung pada kesediaan pihak-pihak yang terlibat.',
};

export interface FormSubmissionData {
  nama: string;
  aplikasi: string;
  lamaKeterlambatan: string;
  jenisMasalah: string;
  cerita: string;
}

/**
 * Pilihan durasi keterlambatan untuk dropdown / scrolldown
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
 * Pilihan jenis masalah di form (bagian kesulitan pembayaran dihapus sesuai request)
 */
export const ISSUE_OPTIONS = [
  'Penagihan telepon / pesan',
  'Kunjungan lapangan / Kolektor',
  'Perselisihan komunikasi',
  'Lainnya',
];

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
Jenis masalah: ${jenisMasalah}

📝 CERITA SINGKAT
${cerita}

🤝 BANTUAN YANG SAYA BUTUHKAN
Saya ingin mendapatkan bantuan untuk menjembatani komunikasi dengan pihak penagihan dan mencari solusi komunikasi yang lebih baik.

Terima kasih.`;
}

/**
 * Menghasilkan link WhatsApp lengkap
 */
export function buildWhatsAppUrl(message?: string): string {
  const phone = APP_CONFIG.whatsappNumber;
  if (!message) {
    const defaultMsg = encodeURIComponent(
      'Halo, saya ingin meminta bantuan mediasi untuk menjembatani komunikasi dengan pihak penagihan.'
    );
    return `https://wa.me/${phone}?text=${defaultMsg}`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * 4 Masalah yang bisa dibantu
 */
export const PROBLEMS_WE_HELP = [
  {
    id: 'penagihan',
    title: 'Penagihan',
    desc: 'Mendapat telepon atau pesan penagihan dan bingung harus merespons bagaimana?',
    iconTheme: 'blue' as const,
  },
  {
    id: 'kunjungan-lapangan',
    title: 'Kunjungan Lapangan',
    desc: 'Mendapat informasi mengenai kemungkinan kunjungan dan membutuhkan pendampingan komunikasi?',
    iconTheme: 'amber' as const,
  },
  {
    id: 'kesulitan-pembayaran',
    title: 'Kesulitan Pembayaran',
    desc: 'Sedang mengalami kesulitan membayar dan ingin menyampaikan kondisi kepada pihak terkait?',
    iconTheme: 'cyan' as const,
  },
  {
    id: 'perselisihan-komunikasi',
    title: 'Perselisihan Komunikasi',
    desc: 'Terjadi masalah dalam komunikasi antara peminjam dan pihak penagihan?',
    iconTheme: 'navy' as const,
  },
];

/**
 * 4 Langkah Cara Kerja
 */
export const WORKFLOW_4_STEPS = [
  {
    step: '01',
    title: 'Ceritakan',
    desc: 'Sampaikan kondisi dan masalah yang sedang kamu hadapi.',
    theme: 'blue' as const,
  },
  {
    step: '02',
    title: 'Kami Pelajari',
    desc: 'Kami memahami situasi dan inti masalahnya.',
    theme: 'cyan' as const,
  },
  {
    step: '03',
    title: 'Mediasi',
    desc: 'Kami membantu menjembatani komunikasi dengan pihak terkait apabila memungkinkan.',
    theme: 'navy' as const,
  },
  {
    step: '04',
    title: 'Titik Temu',
    desc: 'Komunikasi diarahkan untuk mencari solusi yang dapat dibicarakan oleh para pihak.',
    theme: 'green' as const,
  },
];

/**
 * 4 Poin Layanan Mediasi
 */
export const MEDIATION_SERVICES = [
  'Membantu menyusun komunikasi',
  'Membantu menyampaikan kondisi peminjam',
  'Membantu menjembatani komunikasi dengan pihak penagihan',
  'Membantu merangkum hasil komunikasi',
];

/**
 * 5 FAQ Final
 */
export const FAQ_ITEMS = [
  {
    question: 'Apakah mediasi berarti utang saya dihapus?',
    answer: 'Tidak. Mediasi berfokus pada komunikasi dan mencari solusi yang dapat dibicarakan.',
  },
  {
    question: 'Apakah kalian bisa menjamin masalah saya selesai?',
    answer: 'Tidak. Hasil mediasi bergantung pada kondisi dan kesediaan pihak yang terlibat.',
  },
  {
    question: 'Apakah pihak penagihan pasti mau mengikuti mediasi?',
    answer: 'Tidak selalu. Proses mediasi bergantung pada kesediaan pihak terkait.',
  },
  {
    question: 'Kalau saya bingung harus menjawab penagihan bagaimana?',
    answer: 'Kamu dapat menceritakan situasinya kepada kami agar komunikasi dapat dipersiapkan dengan lebih terarah.',
  },
  {
    question: 'Apakah saya tetap memiliki kewajiban pembayaran?',
    answer: 'Pendampingan mediasi tidak menghapus kewajiban pembayaran yang berlaku.',
  },
];

export const FAQ_LIST = FAQ_ITEMS;
