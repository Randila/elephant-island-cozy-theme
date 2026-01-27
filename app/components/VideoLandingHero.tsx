"use client";

export default function VideoLandingHero({
  videoSrc = "/header-video.mp4",
}: {
  videoSrc?: string;
}) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-[1400px] h-full px-6 flex flex-col justify-center items-center text-center text-white">
          <div className="font-[var(--font-jost)] text-[11px] tracking-[0.35em] uppercase text-white/75">
            Luxury resort experience
          </div>

          <h1 className="mt-5 font-[var(--font-marcellus)] text-5xl md:text-7xl leading-[1.05]">
            Elephant Island <br className="hidden md:block" />
            by the ocean
          </h1>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="h-10 w-px bg-white/55" />
          </div>
        </div>
      </div>
    </section>
  );
}
