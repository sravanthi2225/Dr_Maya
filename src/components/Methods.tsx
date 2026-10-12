export default function Methods() {
  const methods = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      label: "Cognitive Restructuring & Behavioral Change",
      description:
        "We identify and gently challenge automatic thoughts, catastrophic assumptions, and harsh inner narratives that fuel anxiety and perfectionism. CBT provides concrete, actionable tools to reframe overthinking and engage with your life with renewed flexibility.",
    },
    {
      title: "EMDR Therapy",
      label: "Bilateral Stimulation & Trauma Resolution",
      description:
        "Eye Movement Desensitization and Reprocessing directly addresses how distressing memories and overwhelming stress are stored in the brain. Bilateral eye movements or tactile taps help decouple traumatic memories from emotional charge, allowing natural integration and relief.",
    },
    {
      title: "Mindfulness-Based Practices",
      label: "Present-Moment Centering & Decentering",
      description:
        "Mindfulness teaches you how to step out of obsessive future forecasting and anchor yourself in the present moment. Rather than battling internal discomfort, you learn to observe sensations and thoughts without judgment, reducing autonomic reactivity.",
    },
    {
      title: "Body-Oriented (Somatic) Techniques",
      label: "Nervous System Regulation & Bodily Release",
      description:
        "Because tension, panic, and trauma reside within the physiology of the body, talk alone is often insufficient. Somatic techniques help you recognize bodily cues of safety, release muscular bracing, and guide your nervous system into deep, genuine rest.",
    },
  ];

  return (
    <section
      id="methods"
      aria-labelledby="methods-heading"
      className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[#A9B8A3]/30"
    >
      <div className="max-w-310 mx-auto px-6 sm:px-8">
        
        {/* Header Block */}
        <div className="max-w-190 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#5B6660] font-sans block mb-3">
            Therapeutic Methods
          </span>
          <h2
            id="methods-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1F3A34] tracking-tight leading-[1.15] mb-5"
          >
            Evidence-based modalities addressing mind and body.
          </h2>
          <p className="text-lg text-[#5B6660] font-sans leading-relaxed">
            I draw from scientifically validated psychotherapeutic frameworks to support both emotional insight and physiological nervous system regulation.
          </p>
        </div>

        {/* 4 Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {methods.map((method, idx) => (
            <div
              key={idx}
              className="bg-[#F6F1E9] rounded-2xl p-8 sm:p-9 border border-[#A9B8A3]/30 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#A65A3B] uppercase tracking-wider">
                    Modality 0{idx + 1}
                  </span>
                  <span className="text-xs text-[#5B6660]">Grounded & Evidence-Based</span>
                </div>
                <h3 className="text-2xl font-serif text-[#1F3A34] mb-1">
                  {method.title}
                </h3>
                <p className="text-xs font-serif italic text-[#A65A3B] mb-4">
                  {method.label}
                </p>
                <p className="text-sm sm:text-[0.95rem] text-[#1D2623] leading-relaxed font-sans">
                  {method.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#A9B8A3]/20 flex items-center gap-2 text-xs text-[#5B6660]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F3A34]" />
                <span>Paced with safety and client collaboration</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
