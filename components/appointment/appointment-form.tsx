"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  Phone,
  Clock,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { clinicData } from "@/lib/clinic-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    timeSlot: "Morning (09:00 AM – 01:00 PM)",
    concern: "General Dental Checkup",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello Dr. Rashmi Bhagat Dental Clinic,

I would like to request an appointment.

• Name: ${formData.name.trim() || "Not specified"}
• Phone: ${formData.phone.trim() || "Not specified"}
• Preferred Date: ${formData.date || "Next available date"}
• Preferred Time: ${formData.timeSlot}
• Treatment / Concern: ${formData.concern}
${formData.notes.trim() ? `• Additional Notes: ${formData.notes.trim()}` : ""}`;

    const waUrl = `https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    setSubmitted(true);
    // Launch WhatsApp
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="appointment"
      className="py-20 sm:py-28 bg-gradient-to-b from-ivory via-sage-50/60 to-ivory relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] border border-teal-800/10 shadow-elevated overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Information & Concierge Panel */}
            <div className="lg:col-span-5 bg-teal-800 text-ivory p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-700/50 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-teal-700/80 text-champagne border border-champagne/30 mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  Appointment Concierge
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-normal tracking-tight leading-tight mb-4">
                  Ready to take care <br />
                  <span className="italic font-serif text-champagne-light">of your smile?</span>
                </h3>

                <p className="text-teal-100/90 text-sm leading-relaxed mb-8">
                  Scheduling your visit takes less than 60 seconds. Fill out your preferred slot below to connect directly with our clinic on WhatsApp for instant confirmation.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-teal-200">
                        Clinic Timings
                      </div>
                      <div className="text-sm font-bold text-ivory">
                        {clinicData.hours.weekdays}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-teal-200">
                        Direct Assistance
                      </div>
                      <a
                        href={`tel:${clinicData.contact.phone.replace(/\s+/g, "")}`}
                        className="text-sm font-bold text-ivory hover:underline"
                      >
                        {clinicData.contact.displayPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-teal-700/60 text-xs text-teal-200/80 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-champagne shrink-0" />
                <span>Zero spam. Direct conversation with clinic staff.</span>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="patient-name"
                      className="block text-xs font-bold uppercase tracking-wider text-charcoal"
                    >
                      Patient Full Name <span className="text-teal-700">*</span>
                    </label>
                    <input
                      id="patient-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-teal-800/15 bg-sage-50/40 text-charcoal text-sm focus:bg-white focus:border-teal-800 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="patient-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-charcoal"
                    >
                      Phone / WhatsApp Number <span className="text-teal-700">*</span>
                    </label>
                    <input
                      id="patient-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-teal-800/15 bg-sage-50/40 text-charcoal text-sm focus:bg-white focus:border-teal-800 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="preferred-date"
                      className="block text-xs font-bold uppercase tracking-wider text-charcoal"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="preferred-date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-teal-800/15 bg-sage-50/40 text-charcoal text-sm focus:bg-white focus:border-teal-800 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Preferred Time Slot */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="preferred-time"
                      className="block text-xs font-bold uppercase tracking-wider text-charcoal"
                    >
                      Preferred Time Slot
                    </label>
                    <select
                      id="preferred-time"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-teal-800/15 bg-sage-50/40 text-charcoal text-sm focus:bg-white focus:border-teal-800 focus:outline-none transition-colors"
                    >
                      <option value="Morning (09:00 AM – 01:00 PM)">
                        Morning (09:00 AM – 01:00 PM)
                      </option>
                      <option value="Afternoon (01:00 PM – 04:00 PM)">
                        Afternoon (01:00 PM – 04:00 PM)
                      </option>
                      <option value="Evening (04:00 PM – 08:00 PM)">
                        Evening (04:00 PM – 08:00 PM)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Treatment / Concern */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="treatment-concern"
                    className="block text-xs font-bold uppercase tracking-wider text-charcoal"
                  >
                    Treatment or Reason for Visit
                  </label>
                  <select
                    id="treatment-concern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-teal-800/15 bg-sage-50/40 text-charcoal text-sm focus:bg-white focus:border-teal-800 focus:outline-none transition-colors"
                  >
                    <option value="General Dental Checkup">
                      General Dental Checkup & Consultation
                    </option>
                    <option value="Teeth Cleaning & Scaling">
                      Teeth Cleaning & Scaling (Tartar Removal)
                    </option>
                    <option value="Cavity & Tooth-Colored Filling">
                      Tooth Pain / Cavity Filling
                    </option>
                    <option value="Root Canal Treatment (RCT)">
                      Severe Toothache / Root Canal Treatment
                    </option>
                    <option value="Crowns & Dental Bridge">
                      Crown / Dental Cap / Bridge
                    </option>
                    <option value="Tooth Extraction">
                      Tooth Extraction / Wisdom Tooth
                    </option>
                    <option value="Teeth Whitening">
                      Teeth Whitening & Aesthetic Smile
                    </option>
                    <option value="Braces & Alignment Consultation">
                      Braces / Smile Alignment Consultation
                    </option>
                    <option value="Children's Dentistry">
                      Children's / Pediatric Dental Visit
                    </option>
                    <option value="Other Dental Concern">
                      Other Dental Concern
                    </option>
                  </select>
                </div>

                {/* Optional Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="patient-notes"
                    className="block text-xs font-bold uppercase tracking-wider text-charcoal"
                  >
                    Additional Notes / Symptoms (Optional)
                  </label>
                  <textarea
                    id="patient-notes"
                    name="notes"
                    rows={3}
                    placeholder="Describe any specific pain, duration, or questions..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-teal-800/15 bg-sage-50/40 text-charcoal text-sm focus:bg-white focus:border-teal-800 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Action Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold tracking-wide uppercase bg-teal-800 text-ivory hover:bg-teal-900 transition-all shadow-soft hover:shadow-elevated hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-champagne" />
                    <span>Continue on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-charcoal-muted mt-3">
                    Submitting opens WhatsApp with your pre-formatted appointment request.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
