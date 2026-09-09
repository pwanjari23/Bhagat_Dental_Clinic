"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  description?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before Care",
  afterLabel = "After Care",
  title,
  description,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {title && (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-serif text-charcoal">{title}</h3>
          {description && (
            <p className="text-sm text-charcoal-muted mt-1">{description}</p>
          )}
        </div>
      )}

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        tabIndex={0}
        role="slider"
        aria-valuenow={sliderPosition}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before and after comparison slider"
        onKeyDown={handleKeyDown}
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full select-none overflow-hidden rounded-3xl border border-teal-800/10 shadow-elevated cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-teal-700 bg-sage-50"
      >
        {/* "After" Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt="After treatment illustration"
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
            priority={false}
          />
          <div className="absolute top-4 right-4 bg-teal-900/80 backdrop-blur-md text-ivory text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            {afterLabel}
          </div>
        </div>

        {/* "Before" Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-[300px]" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%" }}>
            <Image
              src={beforeImage}
              alt="Before treatment illustration"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
              priority={false}
            />
          </div>
          <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-md text-ivory text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
            {beforeLabel}
          </div>
        </div>

        {/* Draggable Divider Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-elevated border-2 border-teal-800 flex items-center justify-center text-teal-800 cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
            <div className="flex items-center gap-1">
              <span className="block w-0 h-0 border-y-4 border-y-transparent border-r-4 border-r-teal-800" />
              <span className="block w-0.5 h-3 bg-teal-800 rounded-full" />
              <span className="block w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-teal-800" />
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-charcoal-muted mt-3">
        Drag slider or use left/right arrow keys to compare. Demonstration of stain removal and restorative enamel care.
      </p>
    </div>
  );
}
