import Image from "next/image";
import Link from "next/link";

interface WhoIHelpProps {
  onOpenConsultation: () => void;
}

export default function WhoIHelp({ onOpenConsultation }: WhoIHelpProps) {
  const cards = [
    {
      id: "card-anxiety",
      title: "Anxiety & Panic",
      image: "/images/cards/anxiety-grounding.webp",
      alt: "Quiet coastal atmosphere representing nervous system settling",
      description:
        "For those navigating persistent racing thoughts, sudden waves of panic, chest tightness, or a constant sense of dread. We work to decipher physical alarm signals, unhook from worry loops, and restore bodily calm.",
      highlights: [
        "Uncontrollable overthinking & mental loops",
        "Panic attacks & physical breath restriction",
        "Persistent hypervigilance and dread",
      ],
      specialtyAnchor: "#specialty-anxiety",
    },
    {
      id: "card-trauma",
      title: "Trauma & Long-Standing Patterns",
      image: "/images/cards/trauma-safety.webp",
      alt: "Gentle natural landscape representing safety and stabilization",
      description:
        "Whether rooted in a single distressing event or complex developmental patterns from childhood, relationships, or chronic stress. Paced thoughtfully with an unwavering emphasis on safety and regulation.",
      highlights: [
        "Single-incident & relational trauma",
        "Deep emotional triggers & guardedness",
        "Stabilization-first pacing",
      ],
      specialtyAnchor: "#specialty-trauma",
    },
    {
      id: "card-burnout",
      title: "Burnout & Perfectionism",
      image: "/images/cards/burnout-rest.webp",
      alt: "Morning calm and warm lighting representing rest and pause",
      description:
        "Tailored for entrepreneurs, creatives, and professionals whose relentless internal standards have led to deep exhaustion, disrupted sleep, and physical depletion. We decouple worth from performance.",
      highlights: [
        "High internal pressure & unrelenting standards",
        "Chronic exhaustion and sleep disruption",
        "Rebuilding sustainable self-worth",
      ],
      specialtyAnchor: "#specialty-burnout",
    },
  ];

  return (
    <section
      id="who-i-help"
      aria-labelledby="who-i-help-heading"
      className="py-20 lg:py-28 bg-[#F6F1E9]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-[760px] mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#5B6660] font-sans block mb-3">
            Who I Help · Adults Only
          </span>
          <h2
            id="who-i-help-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1F3A34] tracking-tight leading-[1.15] mb-5"
          >
            Therapy tailored for thoughtful adults carrying quiet intensity.
          </h2>
          <p className="text-lg text-[#5B6660] font-sans leading-relaxed">
            Many of my clients are high-achieving professionals, entrepreneurs, and creatives. You appear capable and self-reliant to everyone around you, yet privately feel stretched thin, tense in your muscles, and constantly on guard.
          </p>
        </div>

        {/* Three Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card) => (
            <article
              key={card.id}
              className="group flex flex-col bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#A9B8A3]/30 shadow-[0_8px_24px_rgba(31,58,52,0.04)] hover:shadow-[0_16px_36px_rgba(31,58,52,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE0D0]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover warm-grade group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Card Content */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif text-[#1F3A34] mb-3 group-hover:text-[#A65A3B] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-[0.95rem] text-[#5B6660] leading-relaxed mb-6 font-sans">
                    {card.description}
                  </p>

                  <ul className="space-y-2 mb-8 pt-4 border-t border-[#A9B8A3]/25">
                    {card.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[0.825rem] text-[#1D2623]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A65A3B] mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    href={card.specialtyAnchor}
                    className="studio-link text-xs uppercase tracking-[0.16em] font-medium text-[#A65A3B] hover:text-[#8D4A2F]"
                  >
                    Learn more about approach →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Grounding note below cards */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#EAE0D0]/60 border border-[#A9B8A3]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm sm:text-base text-[#1F3A34] font-serif italic">
            "You do not need to wait until you reach a breaking point to seek meaningful, supportive care."
          </p>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center text-xs uppercase tracking-widest font-sans font-medium px-5 py-2.5 rounded-full bg-[#1F3A34] text-[#F6F1E9] hover:bg-[#A65A3B] transition-colors flex-shrink-0"
          >
            Schedule Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
