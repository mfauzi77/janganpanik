import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, APP_CONFIG } from '../config/appConfig';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className="hidden sm:block fixed bottom-6 right-6 z-40"
    >
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi kami melalui WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg shadow-emerald-900/20 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide">
          WhatsApp Mediasi
        </span>
      </a>
    </aside>
  );
};
