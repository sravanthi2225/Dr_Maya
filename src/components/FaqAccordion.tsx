"use client";

import { useState } from "react";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who do you work with?",
      a: "I work exclusively with adults. My practice is designed for high-achieving, thoughtful, and self-aware individuals—including entrepreneurs, creatives, and professionals—who look entirely functional on the outside, but privately feel exhausted, stuck in overthinking, tense in the body, sleeping poorly, and always bracing for something to go wrong.",
    },
    {
      q: "Do you offer in-person sessions, telehealth, or both?",
      a: "Both. I offer in-person psychotherapy at my private office in Santa Monica, California (located at 123th Street 45 W), as well as secure, confidential telehealth for adult clients residing anywhere within the state of California.",
    },
    {
      q: "What therapeutic approaches and methods do you use?",
      a: "I integrate Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented techniques. This integrative style ensures we address both the emotional thoughts and the physiological, nervous system side of stress and trauma.",
    },
    {
      q: "How do you approach trauma therapy?",
      a: "I work with both single-incident trauma and complex, long-standing patterns from childhood, relationships, or chronic stress. Trauma therapy is paced carefully, with deep emphasis on safety, stabilization, and feeling regulated in your day-to-day life—not just during our sessions.",
    },
    {
      q: "Do you work with burnout, perfectionism, and high internal pressure?",
      a: "Yes. A substantial focus of my practice is supporting individuals struggling with unrelenting internal pressure, chronic fatigue, and perfectionism. We work together to decouple your self-worth from endless performance, quiet the inner critic, and restore genuine rest.",
    },
    {
      q: "What is your Santa Monica office like?",
      a: "The office is quiet, private, calm, and uncluttered, with abundant natural light and comfortable furnishings. Clients frequently share that the environment itself helps them arrive at ease before session begins.",
    },
    {
      q: "How do fees and insurance work?",
      a: "Contact me for current details regarding session rates, payment procedures, and documentation for out-of-network insurance reimbursement.",
    },
    {
      q: "How do I get started, and is this service for emergencies?",
      a: "To get started, you can schedule an initial consultation through the booking link on this site. Please note that this private practice is not designed for psychiatric emergencies. If you are in crisis, call or text 988 immediately to reach the Suicide & Crisis Lifeline, call 911, or visit your nearest emergency room.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="py-20 lg:py-28 bg-[#F6F1E9] border-t border-[#A9B8A3]/30"
    >
      <div className="max-w-[960px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#5B6660] font-sans block mb-3">
            Questions & Answers
          </span>
          <h2
            id="faqs-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1F3A34] tracking-tight leading-[1.15] mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#5B6660] font-sans leading-relaxed">
            Clear, grounded information about my practice, methods, and getting started.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-2xl border border-[#A9B8A3]/30 overflow-hidden transition-colors shadow-sm"
              >
                <button
                  type="button"
                  id={`faq-btn-${idx}`}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-[#EAE0D0]/50"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#1F3A34] font-medium leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full bg-[#EAE0D0] text-[#1F3A34] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#A65A3B] text-white" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="px-6 sm:px-8 pb-6 pt-1 text-[#1D2623] text-sm sm:text-base leading-relaxed border-t border-[#A9B8A3]/20 animate-fadeIn font-sans"
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
