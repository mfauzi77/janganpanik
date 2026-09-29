import React from 'react';
import { APP_CONFIG } from '../config/appConfig';

interface FooterProps {
  onOpenForm?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#0F2A43] text-white pt-12 pb-16 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-black text-xs">
            {APP_CONFIG.shortLogo}
          </div>
          <span className="font-extrabold text-lg text-white tracking-tight">
            {APP_CONFIG.brandName}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-[#06B6D4] font-medium">
          {APP_CONFIG.tagline}
        </p>

        {/* Disclaimer */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 max-w-xl mx-auto">
          <p className="text-[11px] text-slate-400 leading-relaxed">
            {APP_CONFIG.disclaimerText}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-[10px] text-slate-500">
          © {new Date().getFullYear()} {APP_CONFIG.brandName}. Hak Cipta Dilindungi.
        </div>

      </div>
    </footer>
  );
};
