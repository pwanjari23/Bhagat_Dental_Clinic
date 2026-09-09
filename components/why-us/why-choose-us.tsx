"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  MessageSquare,
  Smile,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const pillars = [
    {
      num: "01",
      icon: Heart,
      title: "Personalized Attention",
      subtitle: "Care shaped around you",
      description:
        "We believe no two smiles or dental histories are identical. Appointments are unhurried, giving you the time to express concerns and receive tailored recommendations.",
    },
    {
      num: "02",
      icon: MessageSquare,
      title: "Clear Communication",
      subtitle: "Honest, jargon-free advice",
      description:
        "Before any procedure begins, we explain the diagnosis, procedure steps, and all available options so you are always fully informed and in control.",
    },
    {
      num: "03",
      icon: Smile,
      title: "Comfortable Experience",
      subtitle: "A calm, reassuring setting",
      description:
        "From our tranquil waiting space to gentle chairside manners, our clinic is specifically designed to reduce dental apprehension and ensure a relaxed visit.",
    },
    {
      num: "04",
      icon: Sparkles,
      title: "Modern Gentle Approach",
      subtitle: "Contemporary dental standards",
      description:
        "We utilize ultrasonic scaling, tooth-colored aesthetic composites, and strict multi-stage sterilization protocols for predictable, hygienic care.",
    },
  ];

  const scrollToIndex = useCallback((index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-card-index]");
    if (cards[index]) {
      const card = cards[index];
      const targetScroll = card.offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  }, []);

  // Automatic slide interval (advances every 3.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % pillars.length;
        scrollToIndex(next);
        return next;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, pillars.length, scrollToIndex]);

  const handlePrev = () => {
    const nextIdx = activeIdx > 0 ? activeIdx - 1 : pillars.length - 1;
    setActiveIdx(nextIdx);
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % pillars.length;
    setActiveIdx(nextIdx);
    scrollToIndex(nextIdx);
  };

  // Sync activeIdx if user scrolls manually
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-card-index]");
    const currentScroll = container.scrollLeft;

    let closestIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const distance = Math.abs(card.offsetLeft - container.offsetLeft - currentScroll);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    if (closestIdx !== activeIdx) {
      setActiveIdx(closestIdx);
    }
  };

  // Mouse drag support
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDragging.current = true;
    setIsPaused(true);
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftStart.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
    setIsPaused(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Because your comfort"
          highlightedText="matters at every step."
          description="We combine contemporary dental techniques with unhurried, patient-centered care for Saoner residents."
        />

        {/* Top Control Bar: Live Auto-slide Indicator & Nav Buttons */}
        <div className="flex items-center justify-between mt-12 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-sage-100/80 text-teal-900 border border-teal-800/10">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>Pillar {activeIdx + 1} of 4: <strong className="font-semibold text-teal-950">{pillars[activeIdx].title}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white hover:bg-sage-100 text-teal-900 border border-teal-800/15 flex items-center justify-center transition-all shadow-sm active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-teal-800 hover:bg-teal-700 text-champagne flex items-center justify-center transition-all shadow-soft active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Automatic Sliding Cards Track (Slides automatically on mobile & laptop) */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeaveOrUp}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto snap-x snap-mandatory gap-5 sm:gap-6 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth no-scrollbar select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = idx === activeIdx;
            return (
              <div
                key={pillar.title}
                data-card-index={idx}
                className={`w-[85vw] sm:w-[360px] md:w-[380px] lg:w-[410px] shrink-0 snap-start rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? "bg-white border-teal-800/25 shadow-elevated ring-1 ring-teal-800/10"
                    : "bg-white/90 border-teal-800/10 shadow-soft hover:shadow-elevated"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-soft ${
                        isActive
                          ? "bg-teal-800 text-champagne"
                          : "bg-sage-100 text-teal-800"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`font-serif text-2xl font-bold transition-colors ${
                        isActive ? "text-teal-900/40" : "text-teal-900/20"
                      }`}
                    >
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-teal-950 font-bold mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-3">
                    {pillar.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-teal-800/10 flex items-center justify-between text-xs font-semibold text-teal-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    <span>Patient-Centered Focus</span>
                  </div>
                  <span className="text-[11px] text-charcoal-muted/60 font-mono">
                    Pillar {pillar.num}/04
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
