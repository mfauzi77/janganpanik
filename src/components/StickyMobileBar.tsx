import React from 'react';

interface StickyMobileBarProps {
  onOpenForm: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenForm }) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="max-w-md mx-auto">
        <button
          onClick={onOpenForm}
          className="w-full py-3.5 bg-[#2563EB] active:bg-[#1d4ed8] text-white font-extrabold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-[0.98]"
        >
          <span>💬 Mulai Mediasi</span>
        </button>
      </div>
    </div>
  );
};
