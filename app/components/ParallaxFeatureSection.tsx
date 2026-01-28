"use client";

import React from "react";
import { Parallax } from "react-parallax";

type Card = {
  title: string;
  desc: string;
  img: string;
  link?: string;
};

export default function ParallaxFeatureSection({
  bgImage = "/images/parallax-bg.jpg",
  cards = [
    {
      title: "Spa & Wellness",
      desc: "Set in lush jungle, our modern spa embodies the calm of nature, offering extraordinary visual and auditory experiences that pamper and heal.",
      img: "/images/card-spa.jpg",
      link: "#",
    },
    {
      title: "Island Activities",
      desc: "A playground for the over-and-underwater world adventurers. Surfing, diving, snorkeling, fishing, sailing, nature trails & villages to explore.",
      img: "/images/card-activities.jpg",
      link: "#",
    },
    {
      title: "Gastronomic Dine",
      desc: "Our restaurants use fresh, organic ingredients that are locally produced and sourced. Delicious flavors and a warm atmosphere are the perfect way to unwind.",
      img: "/images/card-dine.jpg",
      link: "#",
    },
  ] as Card[],
}: {
  bgImage?: string;
  cards?: Card[];
}) {
  return (
    <section className="w-full bg-[#f7f5ef]">
      {/* Parallax top */}
      <Parallax
        bgImage={bgImage}
        bgImageAlt="Parallax Background"
        strength={100}
        className="relative"
      >
        {/* Height of parallax hero */}
        <div className="relative h-screen">
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* content */}
          <div className="relative z-10 flex h-full items-start pt-24 justify-center px-4">
            <div className="mx-auto max-w-3xl text-center text-white">
              {/* tiny icon + label */}
              <div className="mx-auto mb-4 flex flex-col items-center gap-2">
                <div className="h-8 w-8 opacity-90">
                  {/* minimal line icon */}
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    className="h-full w-full"
                  >
                    <path
                      d="M10 46h44"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 46V30c0-2 1.6-3.6 3.6-3.6h20.8c2 0 3.6 1.6 3.6 3.6v16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M26 32h4M26 38h4M34 32h4M34 38h4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 26c3-5 8-8 14-8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M52 26c-3-5-8-8-14-8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase opacity-90">
                  Unforgettable Experience
                </p>
              </div>

              {/* big title */}
              <h2 className="font-marcellus text-4xl leading-[1.05] sm:text-6xl">
                One of the World&apos;s Most
                <br />
                Desirable Locations
              </h2>

              {/* subtitle */}
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/85">
                A superior, 5-star resort embodying the very best of Fiji
                Islands luxury, tranquility &amp; sophistication.
              </p>
            </div>
          </div>
        </div>
      </Parallax>

      {/* Cards area (overlapping) */}
      <div className="relative">
        {/* Pull cards upward to overlap parallax */}
        <div className="-mt-28 sm:-mt-64">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {cards.map((c) => (
                <div key={c.title} className="text-center">
                  {/* image frame */}
                    <div className="relative overflow-hidden bg-white shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                      <img
                        src={c.img}
                        alt={c.title}
                        className="h-[420px] w-full object-cover"
                        draggable={false}
                      />
                    </div>

                  {/* title */}
                  <h3 className="mt-10 font-marcellus text-3xl text-[#1b1b1b]">
                    {c.title}
                  </h3>

                  {/* description */}
                  <p className="mx-auto mt-3 max-w-[340px] text-sm leading-6 text-[#1b1b1b]/70">
                    {c.desc}
                  </p>

                  {/* link */}
                  <a
                    href={c.link ?? "#"}
                    className="mt-5 inline-block text-[13px] text-[#1b1b1b]/70 hover:text-[#1b1b1b]"
                  >
                    <span className="relative">
                      Discover More
                      <span className="absolute left-1/2 top-[110%] h-[1px] w-20 -translate-x-1/2 bg-[#c8b08a]" />
                    </span>
                  </a>
                </div>
              ))}
            </div>

            {/* bottom breathing space like screenshot */}
            <div className="h-16 sm:h-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
