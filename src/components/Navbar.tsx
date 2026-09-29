import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface NavbarProps {
  onOpenForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenForm }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo: Jangan Panik Dulu */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#0F2A43] text-white flex items-center justify-center font-black text-sm tracking-tight shadow-sm group-hover:bg-[#2563EB] transition-colors">
            {APP_CONFIG.shortLogo}
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[#0F2A43] text-base leading-tight tracking-tight">
              {APP_CONFIG.brandName}
            </span>
            <span className="text-[10px] text-[#64748B] font-medium leading-none">
              Mediasi Penagihan
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#64748B]">
          <button
            onClick={() => scrollTo('layanan')}
            className="hover:text-[#0F2A43] transition-colors cursor-pointer"
          >
            Layanan
          </button>
          <button
            onClick={() => scrollTo('cara-kerja')}
            className="hover:text-[#0F2A43] transition-colors cursor-pointer"
          >
            Cara Kerja
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="hover:text-[#0F2A43] transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenForm}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-sm rounded-lg shadow-sm transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>Mulai Mediasi</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenForm}
            className="px-3 py-1.5 bg-[#2563EB] text-white text-xs font-bold rounded-lg shadow-sm"
          >
            Mulai Mediasi
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#0F2A43] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E2E8F0] bg-white px-4 py-3 space-y-2">
          <button
            onClick={() => scrollTo('layanan')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-[#2563EB]"
          >
            Layanan
          </button>
          <button
            onClick={() => scrollTo('cara-kerja')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-[#2563EB]"
          >
            Cara Kerja
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-[#2563EB]"
          >
            FAQ
          </button>
        </div>
      )}
    </header>
  );
};
