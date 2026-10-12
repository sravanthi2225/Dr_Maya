"use client";

import { useState, useEffect } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    format: "in-person",
    focus: "anxiety",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      format: "in-person",
      focus: "anxiety",
      message: "",
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F3A34]/60 backdrop-blur-sm animate-fadeIn"
    >
      <div
        className="relative w-full max-w-[620px] bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 shadow-[0_24px_64px_rgba(31,58,52,0.2)] border border-[#A9B8A3]/30 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#EAE0D0] text-[#1F3A34] hover:bg-[#A9B8A3] flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
          aria-label="Close consultation modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-8 pr-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#5B6660] font-sans block mb-2">
                Initial Consultation Inquiry
              </span>
              <h2
                id="consultation-modal-title"
                className="text-2xl sm:text-3xl font-serif text-[#1F3A34] leading-snug"
              >
                Schedule with Dr. Maya Reynolds
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6660] font-sans mt-2">
                Adults only. In-person at 123th Street 45 W in Santa Monica, or secure telehealth for clients located anywhere in California.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Full Name */}
              <div>
                <label htmlFor="modal-name" className="block text-xs uppercase tracking-wider text-[#1F3A34] font-medium mb-1.5">
                  Full Name <span className="text-[#A65A3B]">*</span>
                </label>
                <input
                  type="text"
                  id="modal-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Eleanor Vance"
                  className={`w-full px-4 py-3 rounded-xl bg-[#F6F1E9] border ${
                    errors.name ? "border-red-500" : "border-[#A9B8A3]/40"
                  } text-sm text-[#1D2623] focus:border-[#A65A3B] transition-colors`}
                />
                {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="modal-email" className="block text-xs uppercase tracking-wider text-[#1F3A34] font-medium mb-1.5">
                  Email Address <span className="text-[#A65A3B]">*</span>
                </label>
                <input
                  type="email"
                  id="modal-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="eleanor@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-[#F6F1E9] border ${
                    errors.email ? "border-red-500" : "border-[#A9B8A3]/40"
                  } text-sm text-[#1D2623] focus:border-[#A65A3B] transition-colors`}
                />
                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
              </div>

              {/* Phone (Optional) */}
              <div>
                <label htmlFor="modal-phone" className="block text-xs uppercase tracking-wider text-[#1F3A34] font-medium mb-1.5">
                  Phone Number <span className="text-xs normal-case text-[#5B6660]">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(310) 555-0192"
                  className="w-full px-4 py-3 rounded-xl bg-[#F6F1E9] border border-[#A9B8A3]/40 text-sm text-[#1D2623] focus:border-[#A65A3B] transition-colors"
                />
              </div>

              {/* Session Format & Focus Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-format" className="block text-xs uppercase tracking-wider text-[#1F3A34] font-medium mb-1.5">
                    Session Format
                  </label>
                  <select
                    id="modal-format"
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F6F1E9] border border-[#A9B8A3]/40 text-sm text-[#1D2623] focus:border-[#A65A3B] transition-colors"
                  >
                    <option value="in-person">In-Person (Santa Monica, CA)</option>
                    <option value="telehealth">Telehealth (California Statewide)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-focus" className="block text-xs uppercase tracking-wider text-[#1F3A34] font-medium mb-1.5">
                    Primary Area of Focus
                  </label>
                  <select
                    id="modal-focus"
                    value={formData.focus}
                    onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F6F1E9] border border-[#A9B8A3]/40 text-sm text-[#1D2623] focus:border-[#A65A3B] transition-colors"
                  >
                    <option value="anxiety">Anxiety & Panic</option>
                    <option value="trauma">Trauma & PTSD</option>
                    <option value="burnout">Burnout & Perfectionism</option>
                    <option value="emdr">EMDR Therapy</option>
                    <option value="other">High Internal Pressure / Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="modal-message" className="block text-xs uppercase tracking-wider text-[#1F3A34] font-medium mb-1.5">
                  Brief Note <span className="text-[#A65A3B]">*</span>
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share what is feeling difficult right now, or what you hope to work on..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#F6F1E9] border ${
                    errors.message ? "border-red-500" : "border-[#A9B8A3]/40"
                  } text-sm text-[#1D2623] focus:border-[#A65A3B] transition-colors`}
                />
                {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
              </div>

              {/* Emergency Callout Disclaimer */}
              <div className="p-3 bg-[#EAE0D0]/50 rounded-xl border border-[#A9B8A3]/30 text-xs text-[#5B6660]">
                If you are in acute crisis, please call or text <strong>988</strong> immediately. This form is not monitored for psychiatric emergencies.
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-[#A65A3B] text-white font-medium text-sm sm:text-base shadow-md hover:bg-[#8D4A2F] active:scale-[0.98] transition-all disabled:opacity-50 min-h-[48px] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending inquiry..." : "Send Consultation Request"}
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 px-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#EAE0D0] text-[#1F3A34] mx-auto flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-[#A65A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1F3A34] mb-3">
              Thank You for Reaching Out
            </h3>
            <p className="text-sm sm:text-base text-[#5B6660] max-w-[440px] mx-auto leading-relaxed mb-6 font-sans">
              Your inquiry has been received. I personally review each consultation request and will respond within 1–2 business days with next steps and scheduling availability.
            </p>
            <div className="p-4 bg-[#EAE0D0]/40 rounded-xl text-xs text-[#1F3A34] mb-6">
              Office: 123th Street 45 W, Santa Monica, CA 90401 · Adults Only
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-[#1F3A34] text-[#F6F1E9] text-sm font-medium hover:bg-[#A65A3B] transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
