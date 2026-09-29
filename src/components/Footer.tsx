import React from 'react';
import { APP_CONFIG } from '../config/appConfig';

interface FooterProps {
  onOpenForm: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenForm }) => {
  return (
    <footer className="relative bg-[#0F2A43] text-white border-t border-slate-800 pt-14 pb-28 md:pb-16 overflow-hidden">
      {/* Subtle decorative glow at top of footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top: Logo & Menu */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Logo & Tagline */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-[#06B6D4] text-[#0F2A43] flex items-center justify-center font-black text-sm shadow-md">
                {APP_CONFIG.shortLogo}
              </span>
              <span className="text-xl font-black tracking-tight text-white">
                {APP_CONFIG.brandName}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-slate-300">
              {APP_CONFIG.tagline}
            </p>
          </div>

          {/* Simple Menu: Beranda, Cara Kerja, Mulai Mediasi, FAQ */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-cyan-300 transition-colors">
              Beranda
            </a>
            <a href="#cara-kerja" className="hover:text-cyan-300 transition-colors">
              Cara Kerja
            </a>
            <button
              onClick={onOpenForm}
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Mulai Mediasi
            </button>
            <a href="#faq" className="hover:text-cyan-300 transition-colors">
              FAQ
            </a>
          </nav>

        </div>

        {/* Bottom: Disclaimer Singkat & Copyright */}
        <div className="mt-7 text-center text-xs text-slate-400 leading-relaxed max-w-3xl mx-auto">
          <p>
            {APP_CONFIG.brandName} menyediakan layanan informasi, pendampingan komunikasi, dan mediasi. Layanan ini tidak menghapus kewajiban pembayaran dan tidak menjamin hasil tertentu.
          </p>
          <p className="mt-4 text-[11px] text-slate-500 font-mono">
            © {new Date().getFullYear()} {APP_CONFIG.brandName}. Semua hak dilindungi.
          </p>
        </div>

      </div>
    </footer>
  );
};
