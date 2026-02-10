"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type MenuGroup = { title: string; items: { label: string; href: string }[] };

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setIsPastHero(y > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll when sidebar open
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  // esc close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navbarClasses = `
    transition-all duration-300 ease-in-out
    ${scrollY > 100 ? "py-4" : "py-6"}
    ${scrollY > 100 && !isPastHero ? "backdrop-blur-sm bg-black/20" : ""}
    ${isPastHero ? "bg-white" : "bg-transparent"}
  `;

  const textClasses = isPastHero ? "text-gray-900" : "text-white";
  const bookButtonClasses = isPastHero
    ? "bg-gray-900 text-white hover:bg-gray-800"
    : "bg-white/15 text-white backdrop-blur-md hover:bg-white/20";

  const burgerLine1 = isPastHero ? "bg-gray-800" : "bg-white/85";
  const burgerLine2 = isPastHero ? "bg-gray-600" : "bg-white/65";

  const primaryLinks = [
    { label: "Home", href: "" },
    { label: "Tours", href: "tours" },
    { label: "About", href: "about" },
  ];

  const menuGroups: MenuGroup[] = [
    {
      title: "Stay",
      items: [
        { label: "Garden Villa", href: "garden-villa" },
        { label: "Pool Studio", href: "pool-studio" },
        { label: "Pool Villa", href: "pool-villa" },
        { label: "Master Pool Villa", href: "master-pool-villa" },
      ],
    },
    {
      title: "Discover",
      items: [
        { label: "Secret Waterfalls", href: "#secret-waterfalls" },
        { label: "Dolphins of Lovina", href: "#dolphins" },
        { label: "Ceremonies", href: "#ceremonies" },
      ],
    },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b ${
          scrollY > 800 ? "border-slate-200" : "border-slate-50/20"
        } ${navbarClasses}`}
      >
        <nav className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div
            className={`${
              scrollY > 100 ? "h-12" : "h-16"
            } grid grid-cols-3 items-center transition-all duration-300 ease-in-out`}
          >
            {/* LEFT (mobile: Book) (desktop: Links) */}
            <div className="flex items-center gap-5 order-3 md:order-1 justify-end md:justify-start">
              {/* Mobile burger (RIGHT on mobile) */}
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-sidebar"
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden group inline-flex items-center justify-center"
              >
                <span className="grid gap-[6px]">
                  <span className={`h-px w-5 ${burgerLine1} transition`} />
                  <span className={`h-px w-4 ${burgerLine2} transition`} />
                </span>
              </button>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-6 text-xs tracking-[0.12em] uppercase font-jost">
                {primaryLinks.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className={`${
                      isPastHero
                        ? "text-gray-700 hover:text-gray-900"
                        : "text-white/85 hover:text-white"
                    } transition`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CENTER Logo */}
            <div className="flex justify-center order-2">
              <Link
                id="nav-logo"
                href="/"
                className={`${textClasses} text-center leading-none select-none`}
              >
              
                <div className="font-marcellus tracking-[0.22em] text-sm md:text-base">
                  ELEPHANT ISLAND
                </div>
              </Link>
            </div>

            {/* RIGHT (mobile: Book LEFT) (desktop: Book RIGHT) */}
            <div className="flex order-1 md:order-3 justify-start md:justify-end">
              <Link
                href="#book"
                className={`rounded-full p-4 text-xs tracking-[0.12em] uppercase transition font-jost ${bookButtonClasses}`}
              >
                <span className="inline md:hidden">Contact</span>
                <span className="hidden md:inline">Contact Now</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />

      {/* MOBILE SIDEBAR */}
      <aside
        id="mobile-sidebar"
        aria-hidden={!isMenuOpen}
        className={`fixed right-0 top-0 z-[70] h-dvh w-[88vw] max-w-[460px] md:hidden
  bg-[#f3efe8] text-[#2a1c14]
  transition-transform duration-300 ease-out
  ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-full flex-col">
          {/* TOP */}
          <div className="px-8 pt-6">
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="inline-flex h-10 items-center justify-end w-full hover:opacity-80 transition"
            >
              <span className="relative h-5 w-5">
                <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#2a1c14]/70" />
                <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#2a1c14]/70" />
              </span>
            </button>

            <div className="mt-10 text-[11px] tracking-[0.18em] uppercase text-[#2a1c14]/35">
              Menu
            </div>

            {/* Big links */}
            <div className="mt-6 space-y-3 font-marcellus">
              {primaryLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={closeMenu}
                  className="block text-[52px] leading-[0.95] tracking-[-0.02em] hover:opacity-80 transition"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1" />

          {/* MIDDLE */}
          <div className="border-t border-[#2a1c14]/15">
            <div className="px-8 py-10">
              <div className="grid grid-cols-2 gap-12">
                {menuGroups.map((g) => (
                  <div key={g.title}>
                    <div className="text-[11px] tracking-[0.18em] uppercase text-[#2a1c14]/35">
                      {g.title}
                    </div>
                    <div className="mt-5 space-y-4 text-[15px] text-[#2a1c14]/75">
                      {g.items.map((it) => (
                        <Link
                          key={it.label}
                          href={it.href}
                          onClick={closeMenu}
                          className="block hover:text-[#2a1c14] transition"
                        >
                          {it.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FOOTER pinned bottom */}
          <div className="border-t border-[#2a1c14]/15 px-8 py-4">
            <div className="flex items-center justify-between text-[13px] text-[#2a1c14]/55">
              <div className="flex items-center gap-3">
                <span className="text-[#d5a100]">★★★★★</span>
                <span className="flex items-center gap-2">
                  <span className="font-medium text-[#2a1c14]/70">5.0</span>
                  <span>/ 1,293 reviews</span>
                </span>
              </div>

              <Link
                href="#whatsapp"
                onClick={closeMenu}
                className="hover:text-[#2a1c14] transition"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
