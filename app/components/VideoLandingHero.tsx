type VideoLandingHeroProps = {
  mobileSrc?: string;
  desktopSrc?: string;
};

export default function VideoLandingHero({
  mobileSrc = "/video-mobile.mp4",
  desktopSrc = "/video-desktop.mp4",
}: VideoLandingHeroProps) {
  return (
    <section className="relative h-screen md:h-[75dvh] lg:h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        src={mobileSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      <video
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        src={desktopSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-8 text-white text-center px-6">
        <img src="/main-logo.png" className="w-16 grayscale" alt="" />
        <h3 className="mb-8 font-marcellus">Elephant Island</h3>

        <button className="mt-4 px-8 py-4 bg-[#E8A7C5] text-black rounded-full">
          Enquire
        </button>

        <h1 className="font-marcellus text-2xl mt-12">Sri Lanka Holidays</h1>
      </div>
    </section>
  );
}
