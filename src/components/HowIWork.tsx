import Image from "next/image";
import Link from "next/link";

interface HowIWorkProps {
  onOpenAbout: () => void;
}

export default function HowIWork({ onOpenAbout }: HowIWorkProps) {
  return (
    <section
      id="how-i-work"
      aria-labelledby="how-i-work-heading"
      className="py-20 lg:py-28 bg-[#F6F1E9]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(31,58,52,0.12)] border-4 border-[#EAE0D0] bg-[#EAE0D0]">
              <Image
                src="/images/maya/maya-in-session.webp"
                alt="Dr. Maya Reynolds, PsyD, providing grounded, collaborative psychotherapy"
                fill
                sizes="(max-width: 1024px) 420px, 460px"
                className="object-cover warm-grade hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Subtle caption */}
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#5B6660]">
                Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist
              </span>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs uppercase tracking-[0.2em] text-[#5B6660] font-sans block mb-3">
              Clinical Approach
            </span>

            {/* H2 */}
            <h2
              id="how-i-work-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1F3A34] tracking-tight leading-[1.15] mb-5"
            >
              A grounded, collaborative space for real depth and insight.
            </h2>

            {/* Italic Lead Line */}
            <p className="text-xl sm:text-2xl font-serif italic text-[#A65A3B] leading-snug mb-6">
              Structured enough to feel supportive, with room for reflection, safety, and depth.
            </p>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-[#1D2623] leading-relaxed mb-5 font-sans">
              My therapeutic style is warm, collaborative, and deeply grounded. I believe therapy should never feel rigid or clinical in an impersonal way, nor should it leave you floating without clarity. Our work together is structured enough to provide dependable direction, yet spacious enough to explore the underlying causes of what you are carrying without rush.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base sm:text-lg text-[#1D2623] leading-relaxed mb-8 font-sans">
              Because trauma, anxiety, and prolonged stress reside in both the thoughts we think and the tension in our muscles, I integrate Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented techniques. Together, we address both the emotional and physiological sides of your experience—building genuine insight, nervous system resilience, and a stronger, kinder relationship with yourself.
            </p>

            {/* Text link "Learn more about me" */}
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={onOpenAbout}
                className="studio-link text-base font-serif italic text-[#1F3A34] hover:text-[#A65A3B] font-medium"
              >
                Learn more about me and my clinical background →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
