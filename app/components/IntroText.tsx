import React from "react";

export default function IntroText() {
  return (
    <section className="w-full bg-[#f7f5ef] pt-14 pb-10">
      <div className="mx-auto max-w-5xl px-4 text-center">
        {/* Icon */}
        <div className="mx-auto flex items-center justify-center">
          <div className="h-12 w-12 text-[#55624f]">
            {/* simple resort icon (inline svg) */}
            <img src="/resort.png" alt="" />
          </div>
        </div>

        {/* Small top label */}
        <p className="mt-3 text-xs tracking-[0.22em] font-semibold text-[#55624f] uppercase">
          Welcome to Cozystay Resort
        </p>

        {/* Big heading */}
        <h2
          className="
            mt-6
            font-[ui-serif,Georgia,Cambria,'Times New Roman',Times,serif]
            text-[#1b1b1b]
            leading-[0.95]
            text-4xl
            sm:text-6xl
          "
        >
          In the Heart of the South Pacific,
          <br />
          Outstanding Views
        </h2>

        {/* Paragraph */}
        <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-7 text-[#2e2e2e]/80">
          Nestled in the heart of the Pacific Islands resort, on the edge of a
          tranquil and beautiful Garden Island, CozyStay is a haven of warmth,
          tranquility and rejuvenation. Bathed in brilliant sunshine and clear
          skies, it offers stunning views of palm-lined beaches and gorgeous
          coral reefs.
        </p>
      </div>
    </section>
  );
}
