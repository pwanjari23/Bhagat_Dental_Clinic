"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Sparkles } from "lucide-react";
import { clinicData, GalleryItem } from "@/lib/clinic-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { LightboxModal } from "./lightbox-modal";

type GalleryCategory = "All" | "Clinic" | "Care & Smiles" | "Environment";

export function ClinicGallery() {
  const galleryItems = clinicData.gallery;
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!galleryItems || galleryItems.length === 0) return null;

  const categories: GalleryCategory[] = ["All", "Clinic", "Care & Smiles", "Environment"];

  const filteredItems: GalleryItem[] =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white relative overflow-hidden border-y border-teal-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visual Tour"
          title="Designed for calm,"
          highlightedText="hygiene, and confidence."
          description="Explore our clinical spaces and treatment suites where patient comfort and clinical hygiene are prioritized."
        />

        {/* Category Filter Pills - Distinct Button Backgrounds & No Scrollbar Line */}
        <div className="flex items-center justify-center mb-12 px-2 overflow-visible">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-sage-100/70 p-1.5 rounded-full border border-teal-800/10 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap shrink-0 transition-all ${
                  activeCategory === cat
                    ? "bg-teal-800 text-ivory border border-teal-900 shadow-soft font-bold"
                    : "bg-white text-charcoal border border-teal-800/12 shadow-xs hover:bg-sage-50 hover:text-teal-950"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft border border-teal-800/10 bg-sage-100 cursor-pointer"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-teal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-ivory">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-champagne mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-normal leading-snug mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ivory/80 line-clamp-2">
                    {item.caption}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-champagne">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Fullscreen</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="text-center text-xs text-charcoal-muted mt-8">
          Illustrative representation of clinic standards and treatment environment.
        </p>

        {/* Lightbox Component */}
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          items={filteredItems}
          currentIndex={selectedImageIndex}
          onNavigate={(index) => setSelectedImageIndex(index)}
        />
      </div>
    </section>
  );
}
