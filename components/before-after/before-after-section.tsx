"use client";

import React from "react";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { SectionHeading } from "@/components/ui/section-heading";

export function BeforeAfterSection() {
  return (
    <section className="py-20 sm:py-28 bg-sage-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Aesthetic & Restorative Care"
          title="Gentle transformations with"
          highlightedText="natural beauty."
          description="Illustrating how professional scaling, stain removal, and tooth-colored restorative materials restore brightness and oral health."
        />

        <BeforeAfterSlider
          beforeImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
          afterImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
          beforeLabel="Stained & Plaque Enamel"
          afterLabel="Cleaned & Polished Smile"
          title="Interactive Smile Care Visualizer"
          description="Drag the slider left or right to explore typical outcomes of thorough plaque removal and enamel polishing."
        />
      </div>
    </section>
  );
}
