"use client";

import React from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Shield,
  ArrowUp,
} from "lucide-react";
import { clinicData } from "@/lib/clinic-data";
import { useTab, NavTab } from "@/components/tab-context";

export function Footer() {
  const { setActiveTab } = useTab();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks: { label: string; tab: NavTab }[] = [
    { label: "Home", tab: "Home" },
    { label: "About Clinic", tab: "About" },
    { label: "Meet Doctor", tab: "Doctor" },
    { label: "Treatments", tab: "Treatments" },
    { label: "Patient Reviews", tab: "Reviews" },
    { label: "Contact & Location", tab: "Contact" },
  ];

  return (
    <footer className="bg-teal-950 text-ivory/80 pt-8 pb-24 md:pt-16 md:pb-16 border-t border-teal-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            1. MOBILE VIEW (< md): Compact & Elegant with Full Laptop Data
           ========================================================================= */}
        <div className="md:hidden space-y-5">
          {/* Brand & Overview */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-teal-800 text-champagne flex items-center justify-center shadow-soft shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="font-serif font-bold text-base text-ivory block leading-tight">
                  Dr. Rashmi Bhagat
                </span>
                <span className="text-[10px] uppercase tracking-wider text-teal-300 font-medium">
                  Dental Clinic • Saoner
                </span>
              </div>
            </div>

            <p className="text-xs text-teal-100/75 leading-relaxed font-sans">
              {clinicData.subtagline} Gentle, personalized, and family-friendly dental care on Main Road, Civil Line, Saoner.
            </p>

            {/* Quick Contact & Social Icons */}
            <div className="flex items-center gap-2.5 pt-0.5">
              <a
                href={`https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Dr. Rashmi Bhagat Dental Clinic, I would like to book an appointment."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-teal-800 hover:bg-teal-700 text-champagne flex items-center justify-center transition-colors shadow-soft"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${clinicData.contact.phone.replace(/\s+/g, "")}`}
                className="w-8 h-8 rounded-full bg-teal-800 hover:bg-teal-700 text-champagne flex items-center justify-center transition-colors shadow-soft"
                aria-label="Phone Call"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              {clinicData.socials.google && (
                <a
                  href={clinicData.socials.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-teal-800 hover:bg-teal-700 text-champagne flex items-center justify-center transition-colors shadow-soft"
                  aria-label="Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Visit & Timings + Appointment CTA */}
          <div className="pt-3 border-t border-teal-800/30 space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-champagne">
              Visit & Timings
            </h4>
            <div className="space-y-2 text-xs text-teal-100/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-champagne shrink-0 mt-0.5" />
                <span>{clinicData.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>{clinicData.hours.weekdays}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>{clinicData.contact.displayPhone}</span>
              </div>
            </div>

            <div className="pt-1.5">
              <button
                type="button"
                onClick={() => setActiveTab("Contact")}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-champagne text-teal-950 hover:bg-champagne-light transition-colors shadow-soft text-center"
              >
                Request Appointment
              </button>
            </div>
          </div>

          {/* Minimal Copyright & Back To Top */}
          <div className="pt-3 flex items-center justify-between text-[10px] text-teal-300/60 border-t border-teal-800/25">
            <span>© {new Date().getFullYear()} {clinicData.name}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-champagne hover:text-white font-medium"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            2. LAPTOP / DESKTOP VIEW (>= md): Full 4-Column Editorial Footer (Unchanged)
           ========================================================================= */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-teal-800/30">
            {/* Col 1: Clinic Overview & Philosophy */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-800 text-champagne flex items-center justify-center shadow-soft">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-bold text-xl text-ivory block leading-tight">
                    Dr. Rashmi Bhagat
                  </span>
                  <span className="text-xs uppercase tracking-wider text-teal-300 font-medium">
                    Dental Clinic • Saoner
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-teal-100/70 leading-relaxed font-sans pr-4">
                {clinicData.subtagline} Providing gentle, unhurried, and family-friendly dental care on Main Road, Civil Line, Saoner.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
                    "Hello Dr. Rashmi Bhagat Dental Clinic, I would like to book an appointment."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-teal-800 hover:bg-teal-700 text-champagne flex items-center justify-center transition-colors shadow-soft"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${clinicData.contact.phone.replace(/\s+/g, "")}`}
                  className="w-9 h-9 rounded-full bg-teal-800 hover:bg-teal-700 text-champagne flex items-center justify-center transition-colors shadow-soft"
                  aria-label="Phone Call"
                >
                  <Phone className="w-4 h-4" />
                </a>

                {clinicData.socials.google && (
                  <a
                    href={clinicData.socials.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-teal-800 hover:bg-teal-700 text-champagne flex items-center justify-center transition-colors shadow-soft"
                    aria-label="Google Maps Listing"
                  >
                    <MapPin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-champagne">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => setActiveTab(link.tab)}
                      className="hover:text-ivory transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Key Treatments */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-champagne">
                Treatments
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveTab("Treatments")}
                    className="hover:text-ivory transition-colors text-left"
                  >
                    Comprehensive Dental Checkup
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveTab("Treatments")}
                    className="hover:text-ivory transition-colors text-left"
                  >
                    Teeth Cleaning & Scaling
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveTab("Treatments")}
                    className="hover:text-ivory transition-colors text-left"
                  >
                    Tooth-Colored Dental Fillings
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveTab("Treatments")}
                    className="hover:text-ivory transition-colors text-left"
                  >
                    Gentle Root Canal Therapy (RCT)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveTab("Treatments")}
                    className="hover:text-ivory transition-colors text-left"
                  >
                    Crowns & Dental Bridges
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveTab("Treatments")}
                    className="hover:text-ivory transition-colors text-left"
                  >
                    Teeth Whitening & Aesthetics
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveTab("Treatments")}
                    className="hover:text-ivory transition-colors text-left"
                  >
                    Children&apos;s Dental Care
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Visit & Hours */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-champagne">
                Visit & Timings
              </h4>
              <div className="space-y-2.5 text-xs text-teal-100/80">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                  <span>{clinicData.address.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-champagne shrink-0" />
                  <span>{clinicData.hours.weekdays}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-champagne shrink-0" />
                  <span>{clinicData.contact.displayPhone}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("Contact")}
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-champagne text-teal-950 hover:bg-champagne-light transition-colors shadow-soft"
                >
                  Request Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Bottom Credits & Back to Top */}
          <div className="pt-8 flex items-center justify-between text-xs text-teal-300/60">
            <div>
              © {new Date().getFullYear()} {clinicData.name}. All rights reserved.
            </div>

            <div className="flex items-center gap-1.5">
              <span>Designed with care for better patient experiences.</span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-champagne hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
