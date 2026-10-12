"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    format: "in-person",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please share a brief note about what brings you to therapy.";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[#A9B8A3]/30"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Office & Practice Info */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] text-[#5B6660] font-sans block mb-3">
              Direct Inquiries
            </span>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1F3A34] tracking-tight leading-[1.15] mb-6"
            >
              Begin your conversation.
            </h2>
            <p className="text-base sm:text-lg text-[#5B6660] font-sans leading-relaxed mb-8">
              I welcome your questions about working together. Whether you are interested in in-person therapy at my Santa Monica practice or secure telehealth across California, please reach out below.
            </p>

            <div className="space-y-6 pt-6 border-t border-[#A9B8A3]/30 text-sm text-[#1D2623] font-sans">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#EAE0D0] text-[#1F3A34] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#A65A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-serif font-medium text-base text-[#1F3A34]">Santa Monica Office</div>
                  <div>123th Street 45 W, Santa Monica, CA 90401</div>
                  <div className="text-xs text-[#5B6660] mt-0.5">Quiet, private, natural light, uncluttered</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#EAE0D0] text-[#1F3A34] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#A65A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-serif font-medium text-base text-[#1F3A34]">California Telehealth</div>
                  <div>Secure, HIPAA-compliant video sessions</div>
                  <div className="text-xs text-[#5B6660] mt-0.5">Available for adult residents statewide</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#EAE0D0] text-[#1F3A34] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#A65A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-serif font-medium text-base text-[#1F3A34]">Practice Scope</div>
                  <div>Adults only (Ages 18+)</div>
                  <div className="text-xs text-[#5B6660] mt-0.5">Contact directly for current session fee details</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#EAE0D0]/50 rounded-2xl border border-[#A9B8A3]/30 text-xs text-[#5B6660]">
              <strong className="text-[#1F3A34]">Crisis Notice:</strong> If you are experiencing a mental health emergency or severe crisis, please immediately call or text <strong className="text-[#A65A3B]">988</strong> to connect with the Suicide & Crisis Lifeline.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#F6F1E9] p-8 sm:p-10 rounded-3xl border border-[#A9B8A3]/30 shadow-[0_8px_24px_rgba(31,58,52,0.04)]">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="text-2xl font-serif text-[#1F3A34] mb-2">
                  Send a Consultation Message
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6660] font-sans mb-6">
                  Please share a few details and I will reply within 1–2 business days.
                </p>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-[#1F3A34] font-medium mb-1.5">
                    Your Name <span className="text-[#A65A3B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${
                      errors.name ? "border-red-500" : "border-[#A9B8A3]/40"
                    } text-sm text-[#1D2623] focus:border-[#A65A3B] transition-colors`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-[#1F3A34] font-medium mb-1.5">
                    Email Address <span className="text-[#A65A3B]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="youremail@domain.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${
                      errors.email ? "border-red-500" : "border-[#A9B8A3]/40"
                    } text-sm text-[#1D2623] focus:border-[#A65A3B] transition-colors`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                {/* Phone & Format Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider text-[#1F3A34] font-medium mb-1.5">
                      Phone Number <span className="text-xs normal-case text-[#5B6660]">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(310) 555-0192"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#A9B8A3]/40 text-sm text-[#1D2623] focus:border-[#A65A3B] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-format" className="block text-xs uppercase tracking-wider text-[#1F3A34] font-medium mb-1.5">
                      Location Format
                    </label>
                    <select
                      id="contact-format"
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#A9B8A3]/40 text-sm text-[#1D2623] focus:border-[#A65A3B] transition-colors"
                    >
                      <option value="in-person">In-Person (Santa Monica)</option>
                      <option value="telehealth">Telehealth (California)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-[#1F3A34] font-medium mb-1.5">
                    How can I support you? <span className="text-[#A65A3B]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe what challenges or goals you'd like to address..."
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${
                      errors.message ? "border-red-500" : "border-[#A9B8A3]/40"
                    } text-sm text-[#1D2623] focus:border-[#A65A3B] transition-colors`}
                  />
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-[#A65A3B] text-white font-medium text-sm sm:text-base shadow-sm hover:bg-[#8D4A2F] active:scale-[0.98] transition-all disabled:opacity-50 min-h-[48px] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending your message..." : "Send Consultation Inquiry"}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#EAE0D0] text-[#1F3A34] mx-auto flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[#A65A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1F3A34] mb-3">
                  Message Sent Successfully
                </h3>
                <p className="text-sm sm:text-base text-[#5B6660] leading-relaxed max-w-[420px] mx-auto mb-6">
                  Thank you for reaching out. I review all inquiries with care and will be in touch within 1–2 business days.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", format: "in-person", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#1F3A34] text-[#F6F1E9] text-sm font-medium hover:bg-[#A65A3B] transition-colors"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
