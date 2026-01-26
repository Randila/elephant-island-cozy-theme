"use client";

import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

type Slide = {
  id: string;
  src: string;
  alt?: string;
};

export default function OutstandingViewsSwiper({
  slides,
}: {
  slides: Slide[];
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const updateEdges = useCallback((swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const prev = () => swiperRef.current?.slidePrev();
  const next = () => swiperRef.current?.slideNext();

  return (
    <section className="w-full bg-[#f7f5ef] py-10">

      {/* Swiper area */}
      <div className="relative mx-auto mt-10 max-w-[1400px]">
        {/* This is the “only-at-start” left gap */}
        <div
          className={[
            "transition-[padding] duration-500 ease-out",
            isBeginning ? "pl-10 sm:pl-16 md:pl-24" : "pl-0",
          ].join(" ")}
        >
          <Swiper
            onSwiper={handleSwiper}
            onSlideChange={updateEdges}
            speed={650} // smooth button slide
            slidesPerView={"auto"}
            spaceBetween={26}
            grabCursor
            // helps keep the swipe feeling snappy & like “one-by-one”
            longSwipesRatio={0.15}
            threshold={8}
            className="!overflow-visible"
          >
            {slides.map((s) => (
              <SwiperSlide
                key={s.id}
                className="
                  !w-[280px] xs:!w-[320px] sm:!w-[360px] md:!w-[420px] lg:!w-[400px]
                "
              >
                <div className="bg-white">
                  <div className="relative aspect-[2/3] w-full overflow-hidden bg-black/5">
                    {/* Use next/image if you want; plain img is fine too */}
                    <img
                      src={s.src}
                      alt={s.alt ?? ""}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Prev/Next buttons */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className={[
            "absolute left-2 top-1/2 z-20 -translate-y-1/2",
            "h-12 w-12 rounded-full bg-white/90 shadow-md backdrop-blur",
            "flex items-center justify-center",
            "transition-opacity",
            isBeginning ? "opacity-40 pointer-events-none" : "opacity-100",
          ].join(" ")}
        >
          <span className="text-xl leading-none">‹</span>
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className={[
            "absolute right-2 top-1/2 z-20 -translate-y-1/2",
            "h-12 w-12 rounded-full bg-white/90 shadow-md backdrop-blur",
            "flex items-center justify-center",
            "transition-opacity",
            isEnd ? "opacity-40 pointer-events-none" : "opacity-100",
          ].join(" ")}
        >
          <span className="text-xl leading-none">›</span>
        </button>

        {/* Optional handwritten line under (like screenshot) */}
        <div className="mx-auto max-w-6xl px-4">
          <p className="mt-6 font-[cursive] text-xl text-[#2a2a2a]/70">
            Inspired by our history, surrounded by nature and designed to offer
            a different experience
          </p>
        </div>
      </div>
    </section>
  );
}
