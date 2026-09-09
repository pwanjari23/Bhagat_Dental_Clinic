"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlightedText,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4",
            isDark
              ? "bg-teal-700/60 text-champagne border border-champagne/30"
              : "bg-sage-200 text-teal-800 border border-teal-800/10"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse" />
          {eyebrow}
        </div>
      )}

      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.2] mb-4 font-normal",
          isDark ? "text-ivory" : "text-charcoal"
        )}
      >
        {title}{" "}
        {highlightedText && (
          <span
            className={cn(
              "italic font-serif font-normal",
              isDark ? "text-champagne-light" : "text-teal-700"
            )}
          >
            {highlightedText}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed font-sans",
            isDark ? "text-teal-100/80" : "text-charcoal-muted"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
