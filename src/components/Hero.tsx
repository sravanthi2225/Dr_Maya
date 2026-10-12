"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-[#F6F1E9]"
    >
      <div className="max-w-310 mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Small uppercase eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE0D0] text-[#1F3A34] text-xs font-medium tracking-[0.16em] uppercase mb-6 border border-[#A9B8A3]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65A3B]" aria-hidden="true" />
              Santa Monica, CA & Telehealth Across California
            </div>

            {/* Large H1 with ONE italic emphasized word */}
            <h1
              id="hero-heading"
              className="text-[2.65rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[4.5rem] leading-[1.08] text-[#1F3A34] font-serif font-medium tracking-tight mb-6"
            >
              Therapy for high-achieving adults carrying <span className="font-normal italic text-[#1F3A34]">quiet</span> exhaustion.
            </h1>

            {/* One-sentence subline */}
            <p className="text-lg sm:text-xl text-[#5B6660] font-sans leading-relaxed max-w-155 mb-8 font-normal">
              Grounded, evidence-based psychotherapy for anxiety, panic, trauma, and burnout—helping you feel regulated in daily life, not just in session.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                id="hero-book-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#A65A3B] text-white text-base font-medium shadow-[0_4px_16px_rgba(166,90,59,0.25)] hover:bg-[#8D4A2F] active:scale-[0.98] transition-all min-h-12 focus:outline-none focus:ring-2 focus:ring-[#A65A3B] focus:ring-offset-2"
              >
                Schedule a Consultation
              </button>

              <Link
                href="#specialties"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-transparent text-[#1F3A34] hover:bg-[#EAE0D0]/70 text-base font-medium border border-[#1F3A34]/20 transition-all min-h-12"
              >
                Explore Specialties
              </Link>
            </div>

            {/* Practice quick credentials note */}
            <div className="mt-10 pt-6 border-t border-[#A9B8A3]/30 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#5B6660]">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#1F3A34]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Dr. Maya Reynolds, PsyD
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#1F3A34]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                In-Person & Secure Telehealth
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#1F3A34]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Adults Only
              </span>
            </div>
          </div>

          {/* Right Column: Two Asymmetric Images */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-105 sm:max-w-115 lg:max-w-none">
              
              {/* Primary Image: Therapist Portrait with Arched Mask */}
              <div className="relative mx-auto lg:mr-8 w-70 sm:w-80 md:w-87.5 aspect-4/5 arch-mask overflow-hidden shadow-[0_20px_48px_rgba(31,58,52,0.14)] border-4 border-[#F6F1E9] bg-[#EAE0D0]">
                <Image
                  src="/images/maya/dr-maya-reynolds.webp"
                  alt="Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 350px"
                  className="object-cover warm-grade hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              {/* Secondary Offset Image: Sunlit Office Vignette */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 lg:-left-10 w-45 sm:w-52.5 aspect-4/3 rounded-2xl overflow-hidden shadow-[0_16px_36px_rgba(31,58,52,0.18)] border-4 border-[#F6F1E9] bg-[#EAE0D0] hidden xs:block">
                <Image
                  src="/images/office/office-2.webp"
                  alt="Sunlit Santa Monica therapy office with natural light and linen curtains"
                  fill
                  sizes="210px"
                  className="object-cover warm-grade"
                />
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-[#1F3A34]/85 to-transparent p-2 text-center">
                  <span className="text-[10px] text-[#F6F1E9] font-medium tracking-wider uppercase">
                    Santa Monica Office
                  </span>
                </div>
              </div>

              {/* Decorative Subtle Accent Tag */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-[#EAE0D0] border border-[#A9B8A3]/40 rounded-full px-4 py-2 shadow-sm">
                <span className="font-serif italic text-xs text-[#1F3A34]">
                  Clinical depth & somatic ease
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
