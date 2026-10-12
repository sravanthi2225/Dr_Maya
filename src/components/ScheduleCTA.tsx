import Image from "next/image";

interface ScheduleCTAProps {
  onOpenConsultation: () => void;
}

export default function ScheduleCTA({ onOpenConsultation }: ScheduleCTAProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-20 lg:py-28 bg-[#EAE0D0] border-t border-[#A9B8A3]/30"
    >
      <div className="max-w-310 mx-auto px-6 sm:px-8">
        
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#A9B8A3]/35 shadow-[0_16px_40px_rgba(31,58,52,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <span className="text-xs uppercase tracking-[0.2em] text-[#5B6660] font-sans block mb-3">
              Begin Your Work · Adults Only
            </span>

            {/* H2 */}
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1F3A34] tracking-tight leading-[1.15] mb-5"
            >
              Take the first step toward genuine internal steadiness.
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-[#5B6660] font-sans leading-relaxed mb-8 max-w-[580px]">
              You don’t have to keep navigating quiet exhaustion alone. I offer thoughtful in-person therapy at my private Santa Monica office and secure telehealth for clients located throughout California.
            </p>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                id="cta-book-now-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#A65A3B] text-white text-base font-medium shadow-[0_4px_16px_rgba(166,90,59,0.25)] hover:bg-[#8D4A2F] active:scale-[0.98] transition-all min-h-12 focus:outline-none focus:ring-2 focus:ring-[#A65A3B] focus:ring-offset-2"
              >
                Book a Consultation
              </button>

              <span className="text-xs text-[#5B6660] sm:ml-2">
                15-minute consultation to discuss your needs & schedule.
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_12px_28px_rgba(31,58,52,0.1)] border-2 border-[#EAE0D0] bg-[#EAE0D0]">
              <Image
                src="/images/office/santa-monica-coastal.webp"
                alt="Calm morning light over the Santa Monica coastal atmosphere"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover warm-grade hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-3 text-center">
              <span className="text-xs italic font-serif text-[#1F3A34]">
                Santa Monica, California · Secure Statewide Telehealth
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
