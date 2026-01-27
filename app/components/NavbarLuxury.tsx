"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavbarLuxury() {
  const [scrollY, setScrollY] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsPastHero(currentScrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `
    transition-all duration-300 ease-in-out
    ${scrollY > 100 ? "py-4" : "py-6"}
    ${scrollY > 100 && !isPastHero ? "backdrop-blur-md bg-black/20" : ""}
    ${isPastHero ? "bg-white" : "bg-transparent"}
  `;

  const textClasses = isPastHero ? "text-gray-900" : "text-white";
  const lineClasses = isPastHero ? "bg-gray-900/15" : "bg-white/15";
  const bookButtonClasses = isPastHero
    ? "bg-gray-900 text-white hover:bg-gray-800"
    : "bg-white/15 text-white backdrop-blur-md hover:bg-white/20";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-50/20 ${navbarClasses}`}>

      <nav className="mx-auto max-w-[1400px] px-6">
        <div className={`${scrollY > 100 ? "h-12" : "h-16"} grid grid-cols-3 items-center transition-all duration-300 ease-in-out`}>
          <div className={`flex items-center gap-5 ${isPastHero ? "text-gray-700" : "text-white/85"}`}>
            <button aria-label="Open menu" className="group inline-flex gap-2">
              <span className="grid gap-[5px]">
                <span className={`h-px w-5 ${isPastHero ? "bg-gray-700" : "bg-white/80"} group-hover:${isPastHero ? "bg-gray-900" : "bg-white"} transition`} />
                <span className={`h-px w-4 ${isPastHero ? "bg-gray-500" : "bg-white/60"} group-hover:${isPastHero ? "bg-gray-700" : "bg-white"} transition`} />
              </span>
            </button>

            <div className="hidden md:flex items-center gap-6 text-xs tracking-[0.12em] uppercase">
              <Link href="#stay" className={`hover:${isPastHero ? "text-gray-900" : "text-white"} transition`}>Stay</Link>
              <Link href="#dining" className={`hover:${isPastHero ? "text-gray-900" : "text-white"} transition`}>Dining</Link>
              <Link href="#relax" className={`hover:${isPastHero ? "text-gray-900" : "text-white"} transition`}>Relax</Link>
              <Link href="#discover" className={`hover:${isPastHero ? "text-gray-900" : "text-white"} transition`}>Discover</Link>
            </div>
          </div>

          {/* IMPORTANT: id="nav-logo" */}
          <div className="flex justify-center">
            <Link id="nav-logo" href="/" className={`${textClasses} text-center leading-none select-none`}>
              <div className="font-[var(--font-jost)] text-[10px] tracking-[0.35em] uppercase opacity-70">
                THE
              </div>
              <div className="font-[var(--font-marcellus)] tracking-[0.22em] text-sm md:text-base">
                ELEPHANT ISLAND
              </div>
            </Link>
          </div>

          <div className="flex justify-end">
            <Link
              href="#book"
              className={`rounded-full px-4 py-2 text-xs tracking-[0.12em] uppercase transition ${bookButtonClasses}`}
            >
              Book now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
