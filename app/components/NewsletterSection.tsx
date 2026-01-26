"use client";

import React, { useState } from "react";
import { Parallax } from "react-parallax";

type NewsletterSectionProps = {
  backgroundImageUrl: string;
  strength?: number;
};

export default function NewsletterSection({
  backgroundImageUrl,
  strength = 300,
}: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // handle submit here
  }

  return (
    <Parallax
      bgImage={backgroundImageUrl}
      strength={strength}
      bgImageStyle={{ objectFit: "cover" }}
    >
      <section className="relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-white/80">
                STAY TUNED WITH COZYSTAY
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                Sign up for our newsletter to
                <br />
                receive our news, deals and
                <br />
                special offers.
              </h2>
            </div>

            {/* RIGHT */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex items-end gap-6">
                <div className="w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="w-full bg-transparent pb-3 text-white placeholder:text-white/60 outline-none"
                  />
                  <div className="h-px w-full bg-white/70" />
                </div>

                <button
                  type="submit"
                  className="group mb-1 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white"
                >
                  Subscribe
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40 transition group-hover:border-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        d="M21 3L3 10.5l7.5 2.25L12.75 20 21 3Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M21 3 10.5 12.75"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <label className="mt-6 flex items-center gap-3 text-sm text-white/85">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4 accent-white"
                />
                <span>
                  I agree to the{" "}
                  <a
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </form>
          </div>
        </div>
      </section>
    </Parallax>
  );
}
