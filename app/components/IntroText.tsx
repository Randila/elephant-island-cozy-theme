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
          Welcome to Elephant Island
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
          At the Edge of the Indian Ocean,
          <br />
          Endless Tropical Beauty
        </h2>

        {/* Paragraph */}
        <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-7 text-[#2e2e2e]/80">
          Set along the breathtaking coastline of Sri Lanka, Elephant Island is a sanctuary of beauty, culture, and unforgettable journeys. From golden beaches to lush tropical landscapes, we curate private, tailor-made holidays designed to immerse you in the island’s magic — offering exceptional experiences for every traveller and every budget.
        </p>
      </div>
    </section>
  );
}
