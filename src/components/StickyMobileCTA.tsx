"use client";

interface StickyMobileCTAProps {
  onOpenConsultation: () => void;
}

export default function StickyMobileCTA({ onOpenConsultation }: StickyMobileCTAProps) {
  return (
    <div
      aria-label="Quick mobile booking action"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-[#F6F1E9]/95 backdrop-blur-md border-t border-[#A9B8A3]/30 shadow-[0_-4px_16px_rgba(31,58,52,0.08)]"
    >
      <div className="max-w-[500px] mx-auto flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenConsultation}
          className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#A65A3B] text-white font-medium text-sm sm:text-base shadow-sm hover:bg-[#8D4A2F] active:scale-[0.98] transition-all min-h-11"
        >
          Book a Consultation
        </button>
        <a
          href="https://maps.google.com/?q=123th+Street+45+W,+Santa+Monica,+CA+90401"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Santa Monica Office Directions"
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#EAE0D0] text-[#1F3A34] hover:bg-[#A9B8A3] transition-colors shrink-0 min-h-11 min-w-11"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
