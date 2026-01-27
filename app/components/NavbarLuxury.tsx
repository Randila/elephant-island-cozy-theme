"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavbarLuxury() {
  const [scrollY, setScrollY] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Assuming hero section is around 600px height (typical for hero sections)
      // You can adjust this value based on your actual hero section height
      setIsPastHero(currentScrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavbarClasses = () => {
    let classes = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ";
    
    if (isPastHero) {
      classes += "py-2 bg-white border-b border-slate-200 ";
    } else if (scrollY > 100) {
      classes += "py-2 backdrop-blur-md bg-white/10 border-b border-slate-50/25 ";
    } else {
      classes += "py-6 border-b border-slate-50/25";
    }
    
    return classes;
  };

  const getTextClasses = (baseClasses: string) => {
    if (isPastHero) {
      return baseClasses.replace("text-white", "text-slate-900").replace("text-white/85", "text-slate-700").replace("text-white/80", "text-slate-900").replace("text-white/60", "text-slate-700");
    }
    return baseClasses;
  };
  return (
    <header className={getNavbarClasses()}>

      <nav className="mx-auto max-w-[1400px] px-6">
        <div className="h-16 grid grid-cols-3 items-center">
          {/* Left */}
          <div className={`flex items-center gap-5 ${getTextClasses("text-white/85")}`}>
            <button aria-label="Open menu" className="group inline-flex gap-2">
              <span className="grid gap-[5px]">
                <span className={`h-px w-5 ${getTextClasses("bg-white/80")} group-hover:bg-white transition`} />
                <span className={`h-px w-4 ${getTextClasses("bg-white/60")} group-hover:bg-white transition`} />
              </span>
            </button>

            <div className={`hidden md:flex items-center gap-6 text-xs tracking-[0.12em] uppercase ${getTextClasses("text-white")}`}>
              <Link href="#stay" className={`transition ${isPastHero ? "hover:text-slate-600" : "hover:text-white"}`}>
                Stay
              </Link>
              <Link href="#dining" className={`transition ${isPastHero ? "hover:text-slate-600" : "hover:text-white"}`}>
                Dining
              </Link>
              <Link href="#experiences" className={`transition ${isPastHero ? "hover:text-slate-600" : "hover:text-white"}`}>
                Experiences
              </Link>
            </div>
          </div>

          {/* Center */}
          <div className="flex justify-center">
            <Link
              href="/"
              className={`text-center leading-none select-none ${getTextClasses("text-white")}`}
            >
              <div className="font-[var(--font-marcellus)] tracking-[0.22em] text-sm md:text-base">
                ELEPHANT ISLAND
              </div>
              <div className="font-[var(--font-jost)] text-[10px] tracking-[0.35em] uppercase opacity-70 mt-1">
                RESORT
              </div>
            </Link>
          </div>

          {/* Right */}
          <div className="flex justify-end">
            <Link
              href="#book"
              className={`rounded-full px-4 py-2 text-xs tracking-[0.12em] uppercase backdrop-blur-md transition ${
                isPastHero 
                  ? "bg-slate-900 text-white hover:bg-slate-800" 
                  : "bg-white/15 text-white hover:bg-white/20"
              }`}
            >
              Book now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
