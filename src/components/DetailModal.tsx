"use client";

import { useEffect } from "react";
import Image from "next/image";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string; // 'about' | 'specialty-trauma' | 'specialty-anxiety' | 'specialty-emdr' | 'specialty-burnout'
  onOpenConsultation: () => void;
}

export default function DetailModal({
  isOpen,
  onClose,
  type,
  onOpenConsultation,
}: DetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const contentMap: Record<
    string,
    { title: string; subtitle: string; body: string[]; image?: string }
  > = {
    about: {
      title: "About Dr. Maya Reynolds, PsyD",
      subtitle: "Licensed Clinical Psychologist · Santa Monica, California",
      body: [
        "I am a licensed clinical psychologist based in Santa Monica, California, dedicated to working exclusively with thoughtful, high-achieving adults. My practice is designed around the understanding that intelligence, self-awareness, and professional success do not make someone immune to overwhelming stress, anxiety, or trauma.",
        "In our work, I bring a warm, grounded, and collaborative presence. Sessions are neither detached clinical interrogations nor unstructured venting. Together, we establish a secure container where you can let down the heavy burden of constant performance and examine what is happening beneath your conscious awareness.",
        "My clinical work bridges the cognitive mind and the autonomic nervous system, drawing from Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented techniques. My ultimate goal is not merely symptom containment, but genuine insight, nervous system steadiness, and a more compassionate relationship with yourself.",
      ],
      image: "/images/maya/dr-maya-reynolds.webp",
    },
    "specialty-trauma": {
      title: "Trauma Therapy & Nervous System Stabilization",
      subtitle: "Single-Incident & Complex Relational Patterns",
      body: [
        "Trauma is not limited to overt catastrophic events; it encompasses any overwhelming experience that left your nervous system feeling powerless, unsafe, or unsupported. I work with both single-incident events (such as accidents or medical crises) and complex developmental patterns from childhood or prolonged relational stress.",
        "Trauma work in my practice is paced with extreme care. We do not rush into re-experiencing traumatic memories. We first build strong stabilization skills, grounding resources, and physiological regulation so that you feel steady in your everyday life.",
        "Using EMDR and somatic body-oriented methods, we gently reprocess unresolved memories so your body and mind can truly register that the danger has passed.",
      ],
      image: "/images/cards/trauma-safety.webp",
    },
    "specialty-anxiety": {
      title: "Anxiety & Panic Disorder Therapy",
      subtitle: "Interrupting Chronic Hypervigilance & Physical Alarms",
      body: [
        "Many high-achieving adults perceive anxiety as the fuel that drives their success. In reality, chronic anxiety is an exhausting physiological alarm state that steals sleep, strains relationships, and causes persistent physical distress like tight chests, shallow breathing, and gastrointestinal tension.",
        "In therapy, we untangle the feedback loop between catastrophic thoughts and somatic panic. You learn to recognize physical triggers early, regulate your breathing and autonomic tone, and relate to uncomfortable feelings without being hijacked by them.",
        "Our aim is to replace constant bracing with grounded internal clarity.",
      ],
      image: "/images/cards/anxiety-grounding.webp",
    },
    "specialty-emdr": {
      title: "EMDR Therapy (Eye Movement Desensitization & Reprocessing)",
      subtitle: "Evidence-Based Bilateral Reprocessing",
      body: [
        "Eye Movement Desensitization and Reprocessing (EMDR) is an extensively researched, evidence-based therapy that enables the brain to resume its natural healing process after distressing life experiences.",
        "When an experience is overwhelming, normal information processing can stall, leaving memories frozen with the vivid emotions, sensations, and negative self-beliefs experienced at the time. Through standardized bilateral eye movements or gentle tapping, EMDR helps your brain reprocess these memories into healthy, adaptive memory networks.",
        "Clients often find that memories which previously triggered intense physical distress become neutral memories of the past that no longer control their present.",
      ],
      image: "/images/office/office-window-light.webp",
    },
    "specialty-burnout": {
      title: "Burnout & Perfectionism in High-Achievers",
      subtitle: "Decoupling Self-Worth from Constant Performance",
      body: [
        "For entrepreneurs, creatives, and professionals, perfectionism often disguises itself as a virtue until exhaustion sets in. When your inner worth is tied exclusively to productivity, resting triggers acute anxiety, and failure is treated as an existential catastrophe.",
        "We explore the roots of your internal pressure, quiet the harsh inner critic, and build sustainable boundaries that protect your health and personal life.",
        "You will learn how to remain deeply committed to your work and passions without sacrificing your sleep, emotional wellbeing, or sense of peace.",
      ],
      image: "/images/cards/burnout-rest.webp",
    },
  };

  const current = contentMap[type] || contentMap.about;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F3A34]/60 backdrop-blur-sm animate-fadeIn"
    >
      <div
        className="relative w-full max-w-170 bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 shadow-[0_24px_64px_rgba(31,58,52,0.2)] border border-[#A9B8A3]/30 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#EAE0D0] text-[#1F3A34] hover:bg-[#A9B8A3] flex items-center justify-center transition-colors min-h-11 min-w-11"
          aria-label="Close details modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="pr-8 mb-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#A65A3B] font-sans block mb-2">
            Clinical Insight
          </span>
          <h2
            id="detail-modal-title"
            className="text-2xl sm:text-3xl font-serif text-[#1F3A34] leading-snug mb-1"
          >
            {current.title}
          </h2>
          <p className="text-xs sm:text-sm font-serif italic text-[#5B6660]">
            {current.subtitle}
          </p>
        </div>

        {current.image && (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-[#A9B8A3]/30 bg-[#EAE0D0]">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover warm-grade"
            />
          </div>
        )}

        <div className="space-y-4 text-sm sm:text-base text-[#1D2623] font-sans leading-relaxed mb-8">
          {current.body.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="pt-6 border-t border-[#A9B8A3]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5B6660]">
            123th Street 45 W, Santa Monica, CA 90401 · Adults Only
          </p>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#A65A3B] text-white text-sm font-medium hover:bg-[#8D4A2F] transition-colors min-h-11 flex items-center justify-center"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
