"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hope from "@/components/Hope";
import WhoIHelp from "@/components/WhoIHelp";
import StatementExpertise from "@/components/StatementExpertise";
import HowIWork from "@/components/HowIWork";
import Specialties from "@/components/Specialties";
import OurOffice from "@/components/OurOffice";
import ScheduleCTA from "@/components/ScheduleCTA";
import Methods from "@/components/Methods";
import FaqAccordion from "@/components/FaqAccordion";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ConsultationModal from "@/components/ConsultationModal";
import DetailModal from "@/components/DetailModal";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [detailType, setDetailType] = useState<string>("about");

  const openConsultation = () => {
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
  };

  const openDetail = (type: string) => {
    setDetailType(type);
    setIsDetailOpen(true);
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F1E9] text-[#1D2623] selection:bg-[#EAE0D0]">
      {/* 1. Header: sticky, wordmark, nav dropdowns, CTA, mobile menu */}
      <Header onOpenConsultation={openConsultation} />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {/* 2. Hero: eyebrow, H1 with one italic word, subline, CTA, asymmetric images */}
        <Hero onOpenConsultation={openConsultation} />

        {/* 3. Hope section: H2, italic supporting line, paragraph, image, second paragraph */}
        <Hope />

        {/* 4. "Who I help": three image cards (Anxiety & Panic, Trauma, Burnout & Perfectionism) */}
        <WhoIHelp onOpenConsultation={openConsultation} />

        {/* 5. Statement H2 followed by Areas of expertise large italic words separated by hairline rules */}
        <StatementExpertise />

        {/* 6. "How I work": H2, image, italic lead line, two paragraphs, Learn more link */}
        <HowIWork onOpenAbout={() => openDetail("about")} />

        {/* 7. Specialties: 4 items (Trauma, Anxiety & Panic, EMDR, Burnout) */}
        <Specialties onSelectSpecialty={(id) => openDetail(id)} />

        {/* 8. NEW "Our Office" section: between Specialties and CTA with address, directions link, telehealth note, 3 images */}
        <OurOffice />

        {/* 9. Schedule CTA section: eyebrow, H2, paragraph, Book button, image */}
        <ScheduleCTA onOpenConsultation={openConsultation} />

        {/* Clinical Methods Deep-Dive (CBT, EMDR, Mindfulness, Body-Oriented) */}
        <Methods />

        {/* 10. FAQs (accordion): 8 profile-mapped Q&As */}
        <FaqAccordion />

        {/* Contact Form Section (validated form & location info) */}
        <ContactSection />
      </main>

      {/* 11. Footer: in-person + telehealth blurb, navigate, contact address, serving areas, legal links, crisis line 988 */}
      <Footer onOpenConsultation={openConsultation} />

      {/* Sticky Mobile "Book" Action Bar */}
      <StickyMobileCTA onOpenConsultation={openConsultation} />

      {/* Interactive Consultation / Inquiry Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={closeConsultation}
      />

      {/* Interactive Clinical Detail & Specialty Modal */}
      <DetailModal
        isOpen={isDetailOpen}
        onClose={closeDetail}
        type={detailType}
        onOpenConsultation={openConsultation}
      />
    </div>
  );
}
