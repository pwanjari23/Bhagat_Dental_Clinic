"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink, ShieldCheck } from "lucide-react";
import { clinicData } from "@/lib/clinic-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  const reviews = clinicData.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!reviews || reviews.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patient Experiences"
          title="Care that speaks through"
          highlightedText="genuine smiles."
          description="Read reflections from patients in Saoner who visited Dr. Rashmi Bhagat Dental Clinic for routine checks and restorative care."
        />

        {/* Featured Review Spotlight */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-teal-800/10 shadow-elevated relative overflow-hidden">
            <Quote className="absolute top-6 right-8 w-20 h-20 text-teal-800/5 -rotate-12 pointer-events-none" />

            <div className="flex items-center gap-1 mb-6">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-champagne text-champagne"
                />
              ))}
              <span className="text-xs font-semibold text-charcoal-muted ml-2">
                5.0 Rating
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <blockquote className="font-serif text-xl sm:text-2xl text-teal-950 font-normal leading-relaxed">
                  “{currentReview.text}”
                </blockquote>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-teal-800/10">
                  <div>
                    <div className="font-bold text-base text-charcoal flex items-center gap-2">
                      <span>{currentReview.patientName}</span>
                      {currentReview.verifiedOnGoogle && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 bg-sage-100 px-2 py-0.5 rounded-full">
                          <ShieldCheck className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-charcoal-muted">
                      {currentReview.location} • {currentReview.treatmentTag}
                    </div>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full border border-teal-800/15 flex items-center justify-center text-teal-800 hover:bg-teal-800 hover:text-ivory transition-colors"
                      aria-label="Previous review"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs text-charcoal-muted font-medium px-2">
                      {currentIndex + 1} / {reviews.length}
                    </span>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full border border-teal-800/15 flex items-center justify-center text-teal-800 hover:bg-teal-800 hover:text-ivory transition-colors"
                      aria-label="Next review"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Small Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {reviews.slice(0, 3).map((r, i) => (
            <div
              key={r.id}
              onClick={() => setCurrentIndex(i)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                currentIndex === i
                  ? "bg-sage-100/60 border-teal-700 shadow-soft"
                  : "bg-white border-teal-800/10 hover:border-teal-800/20"
              }`}
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-3.5 h-3.5 fill-champagne text-champagne"
                  />
                ))}
              </div>
              <p className="text-xs text-charcoal line-clamp-3 mb-3 leading-relaxed">
                “{r.text}”
              </p>
              <div className="text-xs font-bold text-teal-950">
                {r.patientName}
              </div>
              <div className="text-[10px] text-charcoal-muted">
                {r.treatmentTag}
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA Button */}
        {clinicData.socials.google && (
          <div className="text-center">
            <a
              href={clinicData.socials.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-teal-900 bg-white hover:bg-sage-100 border border-teal-800/15 transition-all shadow-sm hover:shadow"
            >
              <span>View Clinic Listing & Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-teal-700" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
