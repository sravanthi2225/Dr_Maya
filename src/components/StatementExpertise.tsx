"use client";

import { useState } from "react";

export default function StatementExpertise() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const areas = [
    { word: "Anxiety & Panic", note: "Deciphering alarms, settling physical dread" },
    { word: "Complex & Single Trauma", note: "Paced stabilization, EMDR reprocessing" },
    { word: "Professional Burnout", note: "Depleting fatigue, high internal pressure" },
    { word: "Relentless Perfectionism", note: "Decoupling self-worth from performance" },
    { word: "Chronic Overthinking", note: "Interrupting nighttime cognitive loops" },
    { word: "Nervous System Regulation", note: "Somatic release, returning to bodily safety" },
    { word: "High Internal Pressure", note: "Moving from survival mode to genuine ease" },
    { word: "Rebuilding Self-Trust", note: "Cultivating resilience and deep self-compassion" },
  ];

  return (
    <section
      aria-labelledby="expertise-heading"
      className="py-20 lg:py-28 bg-[#1F3A34] text-[#F6F1E9] relative overflow-hidden"
    >
      <div className="max-w-310 mx-auto px-6 sm:px-8">
        
        {/* Statement H2 */}
        <div className="max-w-[820px] mb-16">
          <span className="text-xs uppercase tracking-[0.22em] text-[#A9B8A3] font-sans block mb-3">
            Areas of Focus
          </span>
          <h2
            id="expertise-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F1E9] tracking-tight leading-[1.18]"
          >
            Specialized, integrative psychotherapy designed for sustained internal steadiness.
          </h2>
        </div>

        {/* List of Large Italic Words Separated by Hairline Rules */}
        <div className="border-t border-[#A9B8A3]/25">
          {areas.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group border-b border-[#A9B8A3]/25 py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-2 transition-colors duration-300 hover:border-[#A65A3B]/60"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="text-xs font-mono text-[#A9B8A3]/60 tracking-widest">
                  0{index + 1}
                </span>
                <span
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-serif italic tracking-wide transition-all duration-300 ${
                    hoveredIndex === index
                      ? "text-[#F6F1E9] translate-x-2"
                      : "text-[#F6F1E9]/85 group-hover:text-[#F6F1E9]"
                  }`}
                >
                  {item.word}
                </span>
              </div>

              <div className="pl-10 md:pl-0">
                <span className="text-xs sm:text-sm font-sans text-[#A9B8A3] tracking-wide transition-colors group-hover:text-[#EAE0D0]">
                  {item.note}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Bottom Grounding Quote */}
        <div className="mt-12 flex justify-between items-center text-xs text-[#A9B8A3]/75 font-sans">
          <span>In-Person Santa Monica · California Telehealth</span>
          <span>Adults Only</span>
        </div>

      </div>
    </section>
  );
}
