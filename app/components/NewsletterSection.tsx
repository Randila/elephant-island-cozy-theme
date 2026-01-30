"use client";

import React, { useState } from "react";
import { Parallax } from "react-parallax";

type NewsletterSectionProps = {
  backgroundImageUrl: string;
  strength?: number;
};

export default function NewsletterSection({
  backgroundImageUrl,
  strength = 100,
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

              <h2 className="mt-6 font-marcellus text-2xl leading-[1.05] text-white sm:text-5xl lg:text-4xl">
                Sign up for our newsletter to
                <br />
                receive our news, deals and
                <br />
                special offers.
              </h2>
            </div>

            {/* RIGHT */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex items-end gap-6 border-b border-white/70">
                <div className="w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="w-full bg-transparent pb-3 text-white placeholder:text-white/60 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group mb-1 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white"
                >
                  Subscribe
                  
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
