import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../config/appConfig';

interface StickyMobileBarProps {
  onOpenForm: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenForm }) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Tombol WhatsApp Langsung (WhatsApp Mediasi) */}
        <a
          href={buildWhatsAppUrl("Halo Jangan Panik!, saya ingin meminta bantuan mediasi penagihan.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 bg-[#25D366] active:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-[0.98]"
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span>💬 WhatsApp Mediasi</span>
        </a>

        {/* Tombol Form Cerita Cepat */}
        <button
          onClick={onOpenForm}
          className="px-3.5 py-3 bg-[#0F2A43] active:bg-[#163B5D] text-white font-bold text-xs rounded-xl shadow-xs shrink-0 cursor-pointer"
          title="Isi Form Mediasi"
        >
          Isi Form
        </button>
      </div>
    </div>
  );
};
