"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/lib/clinic-data";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}: LightboxModalProps) {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-ivory flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-ivory flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-ivory flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Lightbox Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl bg-charcoal-muted">
            <Image
              src={currentItem.imageUrl}
              alt={currentItem.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>

          <div className="w-full text-center mt-4 text-ivory space-y-1">
            <div className="text-xs uppercase tracking-widest text-champagne font-semibold">
              {currentItem.category} • {currentIndex + 1} of {items.length}
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-normal">
              {currentItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-ivory/80 max-w-xl mx-auto">
              {currentItem.caption}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
