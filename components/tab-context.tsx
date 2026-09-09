"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type NavTab =
  | "Home"
  | "About"
  | "Doctor"
  | "Treatments"
  | "Reviews"
  | "Contact";

interface TabContextType {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

const TabContext = createContext<TabContextType>({
  activeTab: "Home",
  setActiveTab: () => {},
});

const hashToTabMap: Record<string, NavTab> = {
  hero: "Home",
  home: "Home",
  about: "About",
  doctor: "Doctor",
  treatments: "Treatments",
  services: "Treatments",
  "why-us": "Home",
  reviews: "Reviews",
  testimonials: "Reviews",
  gallery: "Home",
  contact: "Contact",
  appointment: "Contact",
};

const tabToHashMap: Record<NavTab, string> = {
  Home: "home",
  About: "about",
  Doctor: "doctor",
  Treatments: "treatments",
  Reviews: "reviews",
  Contact: "contact",
};

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTabState] = useState<NavTab>("Home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (hash && hashToTabMap[hash]) {
        setActiveTabState(hashToTabMap[hash]);
        if (hash === "why-us" || hash === "gallery") {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 200);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const setActiveTab = (tab: NavTab) => {
    setActiveTabState(tab);
    const hash = tabToHashMap[tab];
    if (hash) {
      window.history.pushState(null, "", `#${hash}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}

export const useTab = () => useContext(TabContext);
