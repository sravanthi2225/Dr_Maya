"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [methodsOpen, setMethodsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const closeMobile = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F6F1E9]/95 backdrop-blur-md py-3 shadow-[0_4px_24px_rgba(31,58,52,0.06)] border-b border-[#A9B8A3]/25"
            : "bg-[#F6F1E9] py-5 border-b border-[#A9B8A3]/15"
        }`}
      >
        <div className="max-w-310 mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo Wordmark */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none"
            aria-label="Dr. Maya Reynolds, PsyD - Home"
          >
            <span className="font-serif text-[1.4rem] sm:text-[1.65rem] tracking-tight font-medium text-[#1F3A34] transition-colors group-hover:text-[#A65A3B]">
              Dr. Maya Reynolds, <span className="font-normal italic">PsyD</span>
            </span>
            <span className="text-[0.68rem] uppercase tracking-[0.18em] text-[#5B6660] -mt-1 font-sans">
              Licensed Clinical Psychologist
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-7 text-[0.925rem] font-medium text-[#1F3A34]"
            aria-label="Main Navigation"
          >
            <Link
              href="#how-i-work"
              className="studio-link py-1 hover:text-[#A65A3B]"
            >
              About
            </Link>

            {/* Specialties Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSpecialtiesOpen(true)}
              onMouseLeave={() => setSpecialtiesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
                aria-expanded={specialtiesOpen}
                aria-haspopup="true"
                className="studio-link py-1 inline-flex items-center gap-1.5 hover:text-[#A65A3B] focus-visible:ring-1 focus-visible:ring-[#A65A3B]"
              >
                Specialties
                <svg
                  className={`w-3.5 h-3.5 text-[#5B6660] transition-transform duration-200 ${
                    specialtiesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {specialtiesOpen && (
                <div
                  className="absolute top-full left-0 w-64 pt-2 z-50 animate-fadeIn"
                  role="menu"
                >
                  <div className="bg-[#FAF7F2] rounded-xl shadow-[0_12px_32px_rgba(31,58,52,0.12)] border border-[#A9B8A3]/30 p-2.5">
                    <Link
                      href="#specialty-trauma"
                      role="menuitem"
                      onClick={() => setSpecialtiesOpen(false)}
                      className="block px-3.5 py-2.5 rounded-lg text-sm text-[#1F3A34] hover:bg-[#EAE0D0] transition-colors"
                    >
                      <div className="font-medium">Trauma Therapy</div>
                      <div className="text-xs text-[#5B6660] mt-0.5">Single-incident & complex recovery</div>
                    </Link>
                    <Link
                      href="#specialty-anxiety"
                      role="menuitem"
                      onClick={() => setSpecialtiesOpen(false)}
                      className="block px-3.5 py-2.5 rounded-lg text-sm text-[#1F3A34] hover:bg-[#EAE0D0] transition-colors"
                    >
                      <div className="font-medium">Anxiety & Panic</div>
                      <div className="text-xs text-[#5B6660] mt-0.5">Interrupting physiological alarm</div>
                    </Link>
                    <Link
                      href="#specialty-emdr"
                      role="menuitem"
                      onClick={() => setSpecialtiesOpen(false)}
                      className="block px-3.5 py-2.5 rounded-lg text-sm text-[#1F3A34] hover:bg-[#EAE0D0] transition-colors"
                    >
                      <div className="font-medium">EMDR Therapy</div>
                      <div className="text-xs text-[#5B6660] mt-0.5">Reprocessing stuck emotional memory</div>
                    </Link>
                    <Link
                      href="#specialty-burnout"
                      role="menuitem"
                      onClick={() => setSpecialtiesOpen(false)}
                      className="block px-3.5 py-2.5 rounded-lg text-sm text-[#1F3A34] hover:bg-[#EAE0D0] transition-colors"
                    >
                      <div className="font-medium">Burnout & Perfectionism</div>
                      <div className="text-xs text-[#5B6660] mt-0.5">High internal pressure & overthinking</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Methods Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMethodsOpen(true)}
              onMouseLeave={() => setMethodsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMethodsOpen(!methodsOpen)}
                aria-expanded={methodsOpen}
                aria-haspopup="true"
                className="studio-link py-1 inline-flex items-center gap-1.5 hover:text-[#A65A3B] focus-visible:ring-1 focus-visible:ring-[#A65A3B]"
              >
                Methods
                <svg
                  className={`w-3.5 h-3.5 text-[#5B6660] transition-transform duration-200 ${
                    methodsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {methodsOpen && (
                <div
                  className="absolute top-full left-0 w-72 pt-2 z-50 animate-fadeIn"
                  role="menu"
                >
                  <div className="bg-[#FAF7F2] rounded-xl shadow-[0_12px_32px_rgba(31,58,52,0.12)] border border-[#A9B8A3]/30 p-2.5">
                    <Link
                      href="#methods"
                      role="menuitem"
                      onClick={() => setMethodsOpen(false)}
                      className="block px-3.5 py-2 rounded-lg text-sm text-[#1F3A34] hover:bg-[#EAE0D0] transition-colors"
                    >
                      <div className="font-medium">Cognitive Behavioral Therapy (CBT)</div>
                      <div className="text-xs text-[#5B6660] mt-0.5">Targeting unhelpful thought patterns</div>
                    </Link>
                    <Link
                      href="#methods"
                      role="menuitem"
                      onClick={() => setMethodsOpen(false)}
                      className="block px-3.5 py-2 rounded-lg text-sm text-[#1F3A34] hover:bg-[#EAE0D0] transition-colors"
                    >
                      <div className="font-medium">EMDR Reprocessing</div>
                      <div className="text-xs text-[#5B6660] mt-0.5">Bilateral stimulation for trauma & triggers</div>
                    </Link>
                    <Link
                      href="#methods"
                      role="menuitem"
                      onClick={() => setMethodsOpen(false)}
                      className="block px-3.5 py-2 rounded-lg text-sm text-[#1F3A34] hover:bg-[#EAE0D0] transition-colors"
                    >
                      <div className="font-medium">Mindfulness-Based Practices</div>
                      <div className="text-xs text-[#5B6660] mt-0.5">Present-moment awareness & decentering</div>
                    </Link>
                    <Link
                      href="#methods"
                      role="menuitem"
                      onClick={() => setMethodsOpen(false)}
                      className="block px-3.5 py-2 rounded-lg text-sm text-[#1F3A34] hover:bg-[#EAE0D0] transition-colors"
                    >
                      <div className="font-medium">Body-Oriented Techniques</div>
                      <div className="text-xs text-[#5B6660] mt-0.5">Somatic nervous system stabilization</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="#office" className="studio-link py-1 hover:text-[#A65A3B]">
              Our Office
            </Link>

            <Link href="#faqs" className="studio-link py-1 hover:text-[#A65A3B]">
              FAQs
            </Link>

            <Link href="#contact" className="studio-link py-1 hover:text-[#A65A3B]">
              Contact
            </Link>
          </nav>

          {/* Header Action Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              id="header-consultation-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#A65A3B] text-white text-sm font-medium tracking-wide shadow-sm hover:bg-[#8D4A2F] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-[#A65A3B] focus:ring-offset-2 min-h-11"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#1F3A34] hover:bg-[#EAE0D0] transition-colors min-h-11 min-w-11 flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#F6F1E9] lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-6">
            <div className="border-b border-[#A9B8A3]/30 pb-4">
              <span className="text-xs uppercase tracking-widest text-[#5B6660]">Menu</span>
            </div>
            <nav className="flex flex-col space-y-4 text-xl font-serif text-[#1F3A34]">
              <Link
                href="#how-i-work"
                onClick={closeMobile}
                className="py-2 hover:text-[#A65A3B] transition-colors min-h-11 flex items-center"
              >
                About Dr. Reynolds
              </Link>
              <Link
                href="#specialties"
                onClick={closeMobile}
                className="py-2 hover:text-[#A65A3B] transition-colors min-h-11 flex items-center"
              >
                Specialties & Focus
              </Link>
              <Link
                href="#methods"
                onClick={closeMobile}
                className="py-2 hover:text-[#A65A3B] transition-colors min-h-11 flex items-center"
              >
                Methods & Approaches
              </Link>
              <Link
                href="#office"
                onClick={closeMobile}
                className="py-2 hover:text-[#A65A3B] transition-colors min-h-11 flex items-center"
              >
                Our Santa Monica Office
              </Link>
              <Link
                href="#faqs"
                onClick={closeMobile}
                className="py-2 hover:text-[#A65A3B] transition-colors min-h-11 flex items-center"
              >
                Frequently Asked Questions
              </Link>
              <Link
                href="#contact"
                onClick={closeMobile}
                className="py-2 hover:text-[#A65A3B] transition-colors min-h-11 flex items-center"
              >
                Contact & Location
              </Link>
            </nav>
          </div>

          <div className="pt-8 border-t border-[#A9B8A3]/30 space-y-4">
            <button
              type="button"
              onClick={() => {
                closeMobile();
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-full bg-[#A65A3B] text-white text-base font-medium shadow-md hover:bg-[#8D4A2F] transition-all min-h-12 flex items-center justify-center"
            >
              Book a Consultation
            </button>
            <p className="text-xs text-center text-[#5B6660]">
              123th Street 45 W, Santa Monica, CA 90401 · Adults Only
            </p>
          </div>
        </div>
      )}
    </>
  );
}
