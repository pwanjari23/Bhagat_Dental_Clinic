"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarCheck,
  Stethoscope,
  FileQuestion,
  FileCheck2,
  Smile,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useTab } from "@/components/tab-context";

export function DentalJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const { setActiveTab } = useTab();

  const steps = [
    {
      num: "01",
      title: "Book",
      subtitle: "Simple Scheduling",
      desc: "Reach out via WhatsApp or phone. Pick a convenient time slot without endless back-and-forth.",
      icon: CalendarCheck,
    },
    {
      num: "02",
      title: "Consult",
      subtitle: "Gentle Assessment",
      desc: "Meet Dr. Rashmi Bhagat for an unhurried, comfortable examination of your teeth and gums.",
      icon: Stethoscope,
    },
    {
      num: "03",
      title: "Understand",
      subtitle: "Clear Explanation",
      desc: "We discuss your diagnosis with clarity, answering questions about options and preventive care.",
      icon: FileQuestion,
    },
    {
      num: "04",
      title: "Plan",
      subtitle: "Transparent Steps",
      desc: "Review a tailored roadmap with transparent costs and expected visits before starting.",
      icon: FileCheck2,
    },
    {
      num: "05",
      title: "Care",
      subtitle: "Gentle Treatment",
      desc: "Experience calm, modern dental care at your pace, followed by personalized smile maintenance.",
      icon: Smile,
    },
  ];

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      setActiveTab("Contact");
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-sage-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Your Patient Journey"
          title="A seamless, transparent path to"
          highlightedText="a healthier smile."
          description="We make every stage of your dental care straightforward, comfortable, and respectful of your time."
        />

        {/* Desktop Horizontal Progression */}
        <div className="hidden lg:block relative mt-16 mb-12">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-teal-800/15 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-6 border border-teal-800/10 shadow-soft hover:shadow-elevated transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-teal-800 text-champagne flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-teal-700 transition-all shadow-soft">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-bold text-teal-700 tracking-wider uppercase mb-1">
                    Step {step.num}
                  </span>

                  <h3 className="font-serif text-xl text-teal-950 font-normal mb-1">
                    {step.title}
                  </h3>

                  <div className="text-[11px] font-semibold text-charcoal-muted uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Interactive Stepper (< lg) */}
        <div className="lg:hidden mt-10">
          {/* Step Navigation Track */}
          <div className="relative mb-6 px-1">
            {/* Background Track Line */}
            <div className="absolute top-5 left-6 right-6 h-0.5 bg-teal-900/10 -z-0" />

            {/* Step Bubbles */}
            <div className="flex justify-between items-start relative z-10">
              {steps.map((step, idx) => {
                const isActive = idx === activeStep;
                const isCompleted = idx < activeStep;
                return (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center group focus:outline-none"
                    aria-label={`Step ${step.num}: ${step.title}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                        isActive
                          ? "bg-teal-800 text-champagne shadow-elevated ring-4 ring-champagne/40 scale-110"
                          : isCompleted
                          ? "bg-teal-700 text-ivory shadow-sm"
                          : "bg-white text-charcoal-muted border border-teal-800/20"
                      }`}
                    >
                      {step.num}
                    </div>
                    <span
                      className={`text-[10px] mt-1.5 font-semibold transition-colors truncate max-w-[56px] text-center ${
                        isActive ? "text-teal-900 font-bold" : "text-charcoal-muted/70"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Showcase Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -40 && activeStep < steps.length - 1) {
                    setActiveStep(activeStep + 1);
                  } else if (info.offset.x > 40 && activeStep > 0) {
                    setActiveStep(activeStep - 1);
                  }
                }}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-teal-800/10 shadow-elevated relative overflow-hidden select-none"
              >
                {/* Large Decorative Step Number Watermark */}
                <div className="absolute -right-3 -bottom-5 font-serif text-8xl font-black text-teal-950/5 pointer-events-none select-none">
                  {steps[activeStep].num}
                </div>

                {/* Top Meta: Step Indicator + Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-sage-100 px-3 py-1 rounded-full">
                      Step {steps[activeStep].num} of 05
                    </span>
                    <span className="text-xs text-charcoal-muted font-medium">
                      {steps[activeStep].subtitle}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-teal-800 text-champagne flex items-center justify-center shadow-soft shrink-0">
                    {React.createElement(steps[activeStep].icon, { className: "w-5 h-5" })}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mb-5 relative z-10">
                  <h3 className="font-serif text-2xl text-teal-950 font-bold mb-1.5">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                    {steps[activeStep].desc}
                  </p>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between pt-3.5 border-t border-teal-800/10 relative z-10">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={activeStep === 0}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl transition-all ${
                      activeStep === 0
                        ? "text-charcoal-muted/30 cursor-not-allowed"
                        : "text-teal-800 hover:bg-sage-100 active:scale-95"
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex items-center gap-1.5">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveStep(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === activeStep ? "w-5 bg-teal-800" : "w-1.5 bg-teal-800/20"
                        }`}
                        aria-label={`Go to step ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-xl bg-teal-800 text-ivory hover:bg-teal-700 active:scale-95 transition-all shadow-soft"
                  >
                    <span>{activeStep === steps.length - 1 ? "Book Visit" : "Next Step"}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-champagne" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
