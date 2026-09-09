"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Calendar,
  ChevronDown,
  Stethoscope,
  ShieldCheck,
  Activity,
  Layers,
  HeartHandshake,
  Smile,
  Sun,
  Baby,
} from "lucide-react";
import { clinicData, TreatmentItem } from "@/lib/clinic-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { useTab } from "@/components/tab-context";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Activity,
  Layers,
  HeartHandshake,
  Smile,
  Sun,
  Baby,
};

export function ServicesInteractive() {
  const { setActiveTab } = useTab();
  const treatments = clinicData.treatments;
  const [activeTreatmentId, setActiveTreatmentId] = useState(treatments[0]?.id);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(treatments[0]?.id);

  const activeTreatment =
    treatments.find((t) => t.id === activeTreatmentId) || treatments[0];

  const getIcon = (iconName: string) => {
    const IconComp = iconMap[iconName] || Sparkles;
    return <IconComp className="w-5 h-5" />;
  };

  return (
    <section id="treatments" className="py-20 sm:py-28 bg-sage-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Comprehensive Treatments"
          title="Thoughtful care for"
          highlightedText="every stage of your smile."
          description="From routine checkups and ultrasonic cleanings to root canal therapy and restorations, explore our patient-first dental services."
        />

        {/* Desktop Two-Panel Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Treatment Selector */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-3 shadow-soft border border-teal-800/10 space-y-1">
            <div className="px-4 py-3 border-b border-teal-800/5 mb-1">
              <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-muted">
                Available Treatments
              </span>
            </div>
            {treatments.map((treatment) => {
              const isSelected = treatment.id === activeTreatmentId;
              return (
                <button
                  key={treatment.id}
                  type="button"
                  onClick={() => setActiveTreatmentId(treatment.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-2xl transition-all flex items-center justify-between group relative ${
                    isSelected
                      ? "bg-teal-800 text-ivory shadow-soft"
                      : "text-charcoal hover:bg-sage-50 hover:text-teal-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-white/15 text-champagne"
                          : "bg-sage-100 text-teal-800 group-hover:bg-teal-50"
                      }`}
                    >
                      {getIcon(treatment.icon)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold leading-tight">
                        {treatment.title}
                      </div>
                      <div
                        className={`text-[11px] leading-tight mt-0.5 ${
                          isSelected ? "text-ivory/70" : "text-charcoal-muted"
                        }`}
                      >
                        {treatment.category}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? "translate-x-0 opacity-100 text-champagne"
                        : "-translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-teal-700"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Treatment Presentation Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTreatment.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white rounded-3xl p-8 shadow-elevated border border-teal-800/10"
              >
                {/* Top Banner with Image & Meta */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-8">
                  <div className="md:col-span-7 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sage-100 text-teal-800 border border-teal-800/10">
                      {activeTreatment.category}
                    </div>
                    <h3 className="font-serif text-3xl text-teal-950 font-normal">
                      {activeTreatment.title}
                    </h3>
                    <p className="text-charcoal-muted text-sm leading-relaxed">
                      {activeTreatment.fullDesc}
                    </p>
                  </div>

                  <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-teal-800/10 bg-sage-100">
                    <Image
                      src={activeTreatment.image}
                      alt={activeTreatment.title}
                      fill
                      sizes="400px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Benefits Grid */}
                <div className="mb-8 pt-6 border-t border-teal-800/10">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal-muted mb-4">
                    Key Advantages & Clinical Focus
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeTreatment.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal"
                      >
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3-Step Treatment Protocol */}
                <div className="mb-8 p-5 rounded-2xl bg-sage-50/70 border border-teal-800/10">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal-muted mb-3">
                    What to Expect During Your Visit
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activeTreatment.steps.map((st) => (
                      <div key={st.step} className="space-y-1">
                        <span className="text-xs font-bold text-teal-700">
                          {st.step}
                        </span>
                        <p className="text-xs font-bold text-teal-950">
                          {st.title}
                        </p>
                        <p className="text-[11px] text-charcoal-muted leading-relaxed">
                          {st.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-teal-800/10">
                  <div className="text-xs text-charcoal-muted">
                    <span className="font-semibold text-charcoal">Recommended for: </span>
                    {activeTreatment.idealFor}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={`https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
                        `Hello Dr. Rashmi Bhagat Dental Clinic, I would like to know more about ${activeTreatment.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-teal-900 bg-sage-100 hover:bg-sage-200 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-teal-700" />
                      <span>Ask on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveTab("Contact")}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-800 text-ivory hover:bg-teal-900 transition-colors shadow-soft cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-champagne" />
                      <span>Book Consultation</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion View */}
        <div className="lg:hidden space-y-3">
          {treatments.map((treatment) => {
            const isExpanded = mobileExpandedId === treatment.id;
            return (
              <div
                key={treatment.id}
                className="bg-white rounded-2xl border border-teal-800/10 shadow-soft overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpandedId(isExpanded ? null : treatment.id)
                  }
                  className="w-full text-left p-4 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sage-100 text-teal-800 flex items-center justify-center shrink-0">
                      {getIcon(treatment.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-teal-950">
                        {treatment.title}
                      </h4>
                      <span className="text-[11px] text-charcoal-muted">
                        {treatment.category}
                      </span>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-teal-700 transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-5 pt-1 border-t border-teal-800/10 text-xs"
                    >
                      <p className="text-charcoal-muted leading-relaxed mb-4">
                        {treatment.fullDesc}
                      </p>

                      <div className="space-y-2 mb-4">
                        {treatment.benefits.slice(0, 3).map((b, i) => (
                          <div key={i} className="flex items-center gap-2 text-charcoal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col gap-2 pt-2">
                        <a
                          href={`https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
                            `Hello Dr. Rashmi Bhagat Dental Clinic, I would like to enquire about ${treatment.title}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-800 text-ivory font-semibold text-xs text-center"
                        >
                          <MessageCircle className="w-4 h-4 text-champagne" />
                          <span>Inquire via WhatsApp</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
