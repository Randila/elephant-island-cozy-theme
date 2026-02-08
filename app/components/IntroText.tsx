import React from "react";

export default function IntroText() {
  return (
    <section className="w-full bg-[#f7f5ef] pt-14 pb-10">
      <div className="mx-auto max-w-5xl px-4 text-center">
        {/* Icon */}
        <div className="mx-auto flex items-center justify-center">
          <div className="w-16 text-[#55624f]">
            {/* simple resort icon (inline svg) */}
            <img src="/main-logo.png" className="grayscale" alt="" />
          </div>
        </div>

        {/* Small top label */}
        <p className="mt-3 text-xs tracking-[0.22em] font-semibold text-[#55624f] uppercase">
          Welcome to Sri Lanka
        </p>

        {/* Big heading */}
        <h2
          className="
            mt-6
            font-marcellus
            text-[#1b1b1b]
            leading-[0.95]
            text-4xl
            sm:text-6xl
          "
        >
          The World’s Most
          <br />
          Beautiful Island
        </h2>

        {/* Paragraph */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#2e2e2e]/80">
          We are a group of travel experts that arrange fantastic private tailor
          made holidays in Sri Lanka. We are happy to quote for travellers on
          any budget that wish to experience Sri Lanka.
        </p>
      </div>
    </section>
  );
}
