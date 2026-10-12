"use client";

interface SpecialtiesProps {
  onSelectSpecialty: (specialtyId: string) => void;
}

export default function Specialties({ onSelectSpecialty }: SpecialtiesProps) {
  const items = [
    {
      id: "specialty-trauma",
      title: "Trauma & Complex Patterns",
      subtitle: "Single-incident events & long-standing developmental patterns",
      description:
        "Trauma is not just what happened in the past; it is the physiological reflex of feeling unsafe in the present. I work with single-incident events as well as complex, long-standing patterns stemming from childhood, relationships, or chronic stress. Every step of our work is paced carefully, placing stability, daily emotional regulation, and felt safety at the center before touching deeper memories.",
      methods: ["EMDR Therapy", "Somatic & Body-Oriented Practices", "Stabilization Pacing"],
    },
    {
      id: "specialty-anxiety",
      title: "Anxiety & Panic Disorders",
      subtitle: "Interrupting chronic overthinking and physical alarm loops",
      description:
        "High-achieving adults frequently mask anxiety behind extraordinary competence. But internally, the cost is relentless: chest tightness, sudden waves of panic, insomnia, and an inability to turn off the mental chatter. We work directly with both the cognitive thought loops and the autonomic nervous system to decode physical alarms and restore deep, steady ease.",
      methods: ["Cognitive Behavioral Therapy (CBT)", "Mindfulness-Based Practices", "Physiological Reset"],
    },
    {
      id: "specialty-emdr",
      title: "EMDR Therapy",
      subtitle: "Targeted bilateral reprocessing for stuck memories and distress",
      description:
        "Eye Movement Desensitization and Reprocessing (EMDR) is an extensively validated therapeutic modality that helps your brain and nervous system reprocess distressing experiences that talk therapy alone hasn’t resolved. By engaging bilateral stimulation in a supportive setting, EMDR allows traumatic memories to lose their intense emotional charge, enabling you to feel calm in the present.",
      methods: ["Standard 8-Phase Protocol", "Bilateral Stimulation", "Resource Installation"],
    },
    {
      id: "specialty-burnout",
      title: "Burnout & Perfectionism",
      subtitle: "High internal pressure, chronic fatigue, and untangling self-worth",
      description:
        "When your inner standards demand constant vigilance, rest begins to feel like a liability. I work with entrepreneurs, professionals, and creatives struggling with unrelenting internal pressure, somatic depletion, and dread. Together, we safely decouple your intrinsic self-worth from continuous performance, re-establishing boundaries and genuine restorative rest.",
      methods: ["CBT for Perfectionism", "Mindful Self-Compassion", "Values-Driven Boundary Work"],
    },
  ];

  return (
    <section
      id="specialties"
      aria-labelledby="specialties-heading"
      className="py-20 lg:py-28 bg-[#EAE0D0]/50 border-t border-[#A9B8A3]/30"
    >
      <div className="max-w-310 mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-190 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#5B6660] font-sans block mb-3">
            Specialized Care
          </span>
          <h2
            id="specialties-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1F3A34] tracking-tight leading-[1.15] mb-5"
          >
            Four dedicated areas of clinical expertise.
          </h2>
          <p className="text-lg text-[#5B6660] font-sans leading-relaxed">
            Every person arrives with distinct life experiences. These four specialized tracks provide targeted, evidence-based care addressing both emotional thoughts and bodily physiology.
          </p>
        </div>

        {/* 4 Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {items.map((item, idx) => (
            <div
              key={item.id}
              id={item.id}
              className="bg-[#FAF7F2] rounded-2xl p-8 sm:p-10 border border-[#A9B8A3]/30 shadow-[0_4px_20px_rgba(31,58,52,0.03)] hover:shadow-[0_12px_32px_rgba(31,58,52,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#A65A3B] tracking-wider uppercase">
                    Specialty 0{idx + 1}
                  </span>
                  <span className="text-xs font-sans text-[#5B6660]">Santa Monica & Telehealth</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#1F3A34] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-serif italic text-[#A65A3B] mb-5">
                  {item.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#1D2623] font-sans leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Modality tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.methods.map((method, mIdx) => (
                    <span
                      key={mIdx}
                      className="px-2.5 py-1 rounded-full bg-[#EAE0D0] text-[#1F3A34] text-xs font-sans"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#A9B8A3]/20">
                <button
                  type="button"
                  onClick={() => onSelectSpecialty(item.id)}
                  className="studio-link text-sm font-medium text-[#A65A3B] hover:text-[#8D4A2F]"
                >
                  Learn more about {item.title} →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
