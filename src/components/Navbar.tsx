import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface NavbarProps {
  onOpenForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenForm }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (targetId?: string) => {
    setMobileMenuOpen(false);
    if (!targetId) return;

    if (targetId === 'form') {
      onOpenForm();
      return;
    }

    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[#0F2A43] text-cyan-300 flex items-center justify-center font-black text-sm shadow-xs">
              {APP_CONFIG.shortLogo}
            </span>
            <span className="text-base sm:text-lg font-black text-[#0F2A43] tracking-tight">
              {APP_CONFIG.brandName}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <a
              href="#"
              className="hover:text-[#2563EB] transition-colors"
            >
              Beranda
            </a>
            <a
              href="#masalah"
              className="hover:text-[#2563EB] transition-colors"
            >
              Masalah
            </a>
            <a
              href="#cara-kerja"
              className="hover:text-[#2563EB] transition-colors"
            >
              Cara Kerja
            </a>
            <a
              href="#layanan"
              className="hover:text-[#2563EB] transition-colors"
            >
              Layanan
            </a>
            <a
              href="#faq"
              className="hover:text-[#2563EB] transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Single CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenForm}
              className="px-5 py-2.5 bg-[#0F2A43] hover:bg-[#163B5D] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Mulai Mediasi
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-800 py-1"
          >
            Beranda
          </a>
          <a
            href="#masalah"
            onClick={() => handleNavClick('masalah')}
            className="block text-sm font-semibold text-slate-800 py-1"
          >
            Masalah
          </a>
          <a
            href="#cara-kerja"
            onClick={() => handleNavClick('cara-kerja')}
            className="block text-sm font-semibold text-slate-800 py-1"
          >
            Cara Kerja
          </a>
          <a
            href="#layanan"
            onClick={() => handleNavClick('layanan')}
            className="block text-sm font-semibold text-slate-800 py-1"
          >
            Layanan
          </a>
          <a
            href="#faq"
            onClick={() => handleNavClick('faq')}
            className="block text-sm font-semibold text-slate-800 py-1"
          >
            FAQ
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenForm();
            }}
            className="w-full mt-2 py-3 bg-[#0F2A43] text-white text-center text-sm font-bold rounded-xl"
          >
            Mulai Mediasi
          </button>
        </div>
      )}
    </header>
  );
};
