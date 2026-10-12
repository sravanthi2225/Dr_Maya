import Link from "next/link";

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const currentYear = "2026";

  return (
    <footer className="bg-[#1F3A34] text-[#F6F1E9] pt-20 pb-14 border-t border-[#A9B8A3]/25">
      <div className="max-w-310 mx-auto px-6 sm:px-8">
        
        {/* Mandatory Crisis Line Notice Callout */}
        <div className="mb-16 p-6 sm:p-7 rounded-2xl bg-[#142723] border border-[#A9B8A3]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#A65A3B] text-white flex items-center justify-center shrink-0 font-serif font-bold text-sm">
              988
            </div>
            <div>
              <p className="text-sm sm:text-base font-serif font-medium text-[#F6F1E9]">
                If you are in crisis, call or text 988.
              </p>
              <p className="text-xs text-[#A9B8A3] font-sans">
                The Suicide & Crisis Lifeline offers 24/7 free, confidential support. This practice is not an emergency service.
              </p>
            </div>
          </div>
          <a
            href="tel:988"
            className="text-xs uppercase tracking-widest font-sans font-medium px-4 py-2 rounded-full bg-[#EAE0D0] text-[#1F3A34] hover:bg-white transition-colors shrink-0"
          >
            Call 988 Now
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#A9B8A3]/20">
          
          {/* Brand & Blurb Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#F6F1E9] mb-1">
              Dr. Maya Reynolds, <span className="font-normal italic">PsyD</span>
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-[#A9B8A3] font-sans mb-5">
              Licensed Clinical Psychologist
            </span>
            <p className="text-sm text-[#A9B8A3] leading-relaxed max-w-105 mb-6 font-sans">
              Providing grounded in-person psychotherapy in Santa Monica, California, alongside secure, HIPAA-compliant telehealth for thoughtful, high-achieving adults located throughout California.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142723] border border-[#A9B8A3]/25 text-xs text-[#EAE0D0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65A3B]" />
              Adults Only · In-Person & Telehealth
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#A9B8A3] font-sans font-semibold mb-5">
              Navigate
            </h3>
            <ul className="space-y-3 text-sm text-[#EAE0D0]">
              <li>
                <Link href="#how-i-work" className="hover:text-[#A65A3B] transition-colors">
                  About Dr. Reynolds
                </Link>
              </li>
              <li>
                <Link href="#specialties" className="hover:text-[#A65A3B] transition-colors">
                  Specialties
                </Link>
              </li>
              <li>
                <Link href="#methods" className="hover:text-[#A65A3B] transition-colors">
                  Clinical Methods
                </Link>
              </li>
              <li>
                <Link href="#office" className="hover:text-[#A65A3B] transition-colors">
                  Our Office
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-[#A65A3B] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="hover:text-[#A65A3B] transition-colors text-left"
                >
                  Book Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#A9B8A3] font-sans font-semibold mb-5">
              Practice Location
            </h3>
            <address className="not-italic text-sm text-[#EAE0D0] space-y-2 mb-4 leading-relaxed font-sans">
              <p className="font-medium text-[#F6F1E9]">Santa Monica Office</p>
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </address>
            <a
              href="https://maps.google.com/?q=123th+Street+45+W,+Santa+Monica,+CA+90401"
              target="_blank"
              rel="noopener noreferrer"
              className="studio-link text-xs uppercase tracking-wider text-[#A65A3B] hover:text-[#EAE0D0]"
            >
              Get directions on Google Maps →
            </a>
          </div>

          {/* Serving Areas Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#A9B8A3] font-sans font-semibold mb-5">
              Serving Areas
            </h3>
            <ul className="space-y-2 text-xs text-[#A9B8A3] font-sans">
              <li>Santa Monica, CA</li>
              <li>West Los Angeles</li>
              <li>Pacific Palisades</li>
              <li>Brentwood</li>
              <li className="pt-2 text-[#EAE0D0] font-medium">
                Statewide Telehealth:
              </li>
              <li>All California Residents</li>
            </ul>
          </div>

        </div>

        {/* Legal & Copyright Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A9B8A3] font-sans">
          <p>© {currentYear} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <span className="hover:text-[#F6F1E9] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#F6F1E9] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#F6F1E9] cursor-pointer">Good Faith Estimate Notice</span>
            <span className="hover:text-[#F6F1E9] cursor-pointer">HIPAA Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
