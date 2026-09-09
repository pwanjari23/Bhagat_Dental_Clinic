"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  ChevronRight,
  Shield,
  Calendar,
} from "lucide-react";
import { clinicData } from "@/lib/clinic-data";
import { useTab, NavTab } from "@/components/tab-context";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activeTab, setActiveTab } = useTab();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { label: NavTab }[] = [
    { label: "Home" },
    { label: "About" },
    { label: "Doctor" },
    { label: "Treatments" },
    { label: "Reviews" },
    { label: "Contact" },
  ];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-teal-800/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              type="button"
              onClick={() => handleNavClick("Home")}
              className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.01] text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-2xl bg-teal-800 text-ivory flex items-center justify-center shadow-soft group-hover:bg-teal-700 transition-colors">
                <svg
                  className="w-5 h-5 fill-current text-champagne"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C9.5 2 7.5 3.2 6.5 5C5.5 6.8 5 9.2 5 12c0 3.5 1.5 6.5 2.8 8.7.4.7 1.2 1.3 2 1.3h.4c.8 0 1.5-.5 1.8-1.2.6-1.5 1.3-3.8 1.5-4.8.2 1 .9 3.3 1.5 4.8.3.7 1 1.2 1.8 1.2h.4c.8 0 1.6-.6 2-1.3C20.5 18.5 22 15.5 22 12c0-2.8-.5-5.2-1.5-7C19.5 3.2 17.5 2 15 2h-3z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-lg sm:text-xl text-teal-950 tracking-tight leading-tight">
                  Dr. Rashmi Bhagat
                </span>
                <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal-muted flex items-center gap-1.5">
                  <span>Dental Clinic</span>
                  <span className="w-1 h-1 rounded-full bg-teal-600" />
                  <span>Saoner</span>
                </span>
              </div>
            </button>

            {/* Desktop Navigation Tabs with Sliding Pill */}
            <nav className="hidden lg:flex items-center gap-1 bg-sage-50/90 backdrop-blur-md p-1.5 rounded-full border border-teal-800/15 shadow-sm">
              {navLinks.map((link) => {
                const isActive = activeTab === link.label;
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => handleNavClick(link.label)}
                    className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors rounded-full focus:outline-none ${
                      isActive
                        ? "text-teal-950 font-bold"
                        : "text-charcoal-muted hover:text-teal-900"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabPill"
                        className="absolute inset-0 rounded-full border-2 border-teal-800 bg-white shadow-soft"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Dr. Rashmi Bhagat Dental Clinic, I would like to book an appointment."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-900 bg-teal-50 px-3.5 py-2 rounded-full border border-teal-700/15 transition-all hover:bg-teal-100 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 text-teal-700" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => handleNavClick("Contact")}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-teal-800 text-ivory hover:bg-teal-900 transition-all shadow-soft hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-3.5 h-3.5 text-champagne" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-charcoal hover:text-teal-800 hover:bg-sage-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-800"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 lg:hidden bg-charcoal/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-teal-800/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-800 text-ivory flex items-center justify-center">
                    <Shield className="w-4 h-4 text-champagne" />
                  </div>
                  <span className="font-serif font-bold text-teal-950">
                    Dr. Rashmi Bhagat
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-charcoal hover:bg-sage-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="py-6 flex flex-col gap-2">
                {navLinks.map((link, idx) => {
                  const isActive = activeTab === link.label;
                  return (
                    <motion.button
                      key={link.label}
                      type="button"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      onClick={() => handleNavClick(link.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                        isActive
                          ? "bg-teal-800 text-ivory font-bold shadow-soft"
                          : "text-charcoal hover:text-teal-800 hover:bg-sage-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 ${
                          isActive ? "text-champagne" : "text-teal-600/60"
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
