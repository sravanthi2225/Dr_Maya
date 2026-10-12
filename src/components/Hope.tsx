import Image from "next/image";

export default function Hope() {
  return (
    <section
      aria-labelledby="hope-heading"
      className="py-20 lg:py-28 bg-[#EAE0D0] border-y border-[#A9B8A3]/30"
    >
      <div className="max-w-[1040px] mx-auto px-6 sm:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#5B6660] font-sans block mb-3">
            A Pathway to Steady Ground
          </span>
          <h2
            id="hope-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1F3A34] tracking-tight leading-[1.15] mb-4"
          >
            You don’t have to stay braced against your own life.
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-[#A65A3B]">
            Moving beyond surface-level coping into lasting nervous system regulation.
          </p>
        </div>

        {/* Narrative Flow with Editorial Image Placement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Paragraph 1 */}
          <div className="md:col-span-5 text-[#1D2623] text-base sm:text-lg leading-relaxed">
            <p>
              To everyone around you, you appear capable, accomplished, and completely composed. You meet every deadline, navigate high demands, and maintain an exterior that looks effortlessly functional. But underneath that competence is a quiet, continuous expenditure of energy—racing thoughts late at night, bodily tension you cannot seem to unclench, and the exhausting habit of constantly bracing for something to go wrong.
            </p>
          </div>

          {/* Central Image Vignette */}
          <div className="md:col-span-3 flex justify-center">
            <div className="relative w-[200px] h-[260px] arch-mask overflow-hidden shadow-[0_12px_28px_rgba(31,58,52,0.12)] border-2 border-[#F6F1E9] bg-[#F6F1E9]">
              <Image
                src="/images/office/office-window-light.webp"
                alt="Soft natural sunlight in quiet Santa Monica therapy office"
                fill
                sizes="200px"
                className="object-cover warm-grade"
              />
            </div>
          </div>

          {/* Paragraph 2 */}
          <div className="md:col-span-4 text-[#1D2623] text-base sm:text-lg leading-relaxed">
            <p>
              Real relief doesn’t come from pushing harder or adding more self-care tasks to an already overwhelmed schedule. It begins when we slow down to address both the emotional thoughts and the physiological alarms underneath. Together, we work to untangle old patterns, steady your nervous system, and restore a grounded sense of self-trust that holds up in daily life.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
