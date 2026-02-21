import React from "react";

interface IntroTextProps {
  icon?: string;
  label: string;
  title: string;
  description: string;
}

export default function IntroText({
  icon = "/newLogo.png",
  label,
  title,
  description,
}: IntroTextProps) {
  return (
    <section className="w-full bg-white pt-14 pb-10">
      <div className="mx-auto max-w-5xl px-4 text-center">
        {/* Icon */}
        <div className="mx-auto flex items-center justify-center">
          <div className="w-12 text-[#55624f]">
            <img src={icon} className="" alt="" />
          </div>
        </div>

        {/* Small top label */}
        <p className="mt-3 text-xs tracking-[0.22em] font-semibold text-[#55624f] uppercase">
          {label}
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
            max-w-2xl
            mx-auto
          "
        >
          {title}
        </h2>

        {/* Paragraph */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#2e2e2e]/80">
          {description}
        </p>
      </div>
    </section>
  );
}
