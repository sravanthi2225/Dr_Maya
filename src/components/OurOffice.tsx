import Image from "next/image";

export default function OurOffice() {
  return (
    <section
      id="office"
      aria-labelledby="office-heading"
      className="py-20 lg:py-28 bg-[#F6F1E9] border-t border-[#A9B8A3]/30 overflow-hidden"
    >
      <div className="max-w-310 mx-auto px-6 sm:px-8">
        
        {/* Top Header Block */}
        <div className="max-w-195 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#5B6660] font-sans block mb-3">
            The Santa Monica Practice
          </span>
          <h2
            id="office-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1F3A34] tracking-tight leading-[1.15] mb-6"
          >
            A quiet, sunlit sanctuary designed for pause.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#1D2623] font-sans leading-relaxed">
            <p>
              Located at 123th Street 45 W in Santa Monica, the office is quiet, private, calm, and uncluttered. Flooded with soft natural light and thoughtfully furnished with comfortable, grounding elements, the environment is crafted to offer a true sanctuary away from the demanding pace of daily life.
            </p>
            <p>
              Clients frequently share that the space itself helps them arrive at ease before session even begins. For clients located anywhere in California who prefer or require remote sessions, I offer secure, HIPAA-compliant telehealth that brings this same grounded presence to your own space.
            </p>
          </div>
        </div>

        {/* Editorial Asymmetric Image Layout (2-3 images) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-end mb-16">
          
          {/* Main Large Image (Tall Arched/Soft-rounded Frame) */}
          <div className="md:col-span-7 relative">
            <div className="relative aspect-4/3 sm:aspect-16/11 rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(31,58,52,0.12)] border-2 border-[#EAE0D0] bg-[#EAE0D0]">
              <Image
                src="/images/office/office-1.webp"
                alt="Quiet and private therapy office seating area in Santa Monica with comfortable chairs and natural light"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover warm-grade hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-[#5B6660]">
              <span>Private Consultation Space</span>
              <span>123th Street 45 W, Santa Monica</span>
            </div>
          </div>

          {/* Side Stack of 2 Editorial Vignettes */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            
            {/* Image 2: Window Light & Linen */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-[0_12px_28px_rgba(31,58,52,0.08)] border-2 border-[#EAE0D0] bg-[#EAE0D0]">
              <Image
                src="/images/office/office-2.webp"
                alt="Gentle natural daylight through linen curtains in Santa Monica therapy room"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover warm-grade hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#1F3A34]/80 backdrop-blur-sm text-[11px] text-[#F6F1E9]">
                Abundant Natural Light
              </div>
            </div>

            {/* Image 3: Calming Uncluttered Detail */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-[0_12px_28px_rgba(31,58,52,0.08)] border-2 border-[#EAE0D0] bg-[#EAE0D0]">
              <Image
                src="/images/office/office-3.webp"
                alt="Uncluttered, comfortable grounding detail in Dr. Reynolds private office"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover warm-grade hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#1F3A34]/80 backdrop-blur-sm text-[11px] text-[#F6F1E9]">
                Calm & Grounding Environment
              </div>
            </div>

          </div>

        </div>

        {/* Address, Directions & Telehealth Note Bar */}
        <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#A9B8A3]/30 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#EAE0D0] text-[#1F3A34] flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#A65A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="font-serif text-lg text-[#1F3A34] font-medium">
                Santa Monica Office
              </div>
              <p className="text-sm text-[#5B6660]">
                123th Street 45 W, Santa Monica, CA 90401
              </p>
              <p className="text-xs text-[#1F3A34] mt-1 font-medium">
                In-person appointments in Santa Monica · Secure telehealth for clients located anywhere in California
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="https://maps.google.com/?q=123th+Street+45+W,+Santa+Monica,+CA+90401"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F3A34] text-[#F6F1E9] hover:bg-[#A65A3B] transition-colors text-sm font-medium shadow-sm min-h-11"
            >
              <span>Get directions</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
