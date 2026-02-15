export default function VideoLandingHero({ videoSrc = "/hero.mp4" }) {
  return (
    <section className="relative h-screen md:h-[75dvh] lg:h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
        <img src="/main-logo.png" className="w-16 grayscale" alt="" />
        <h3 className="mb-8 font-marcellus">Elephant Island</h3>
        <h1 className="font-marcellus text-5xl md:text-7xl 2xl:text-8xl leading-[1.05]">
          Amazing Holidays
          <br className="hidden md:block" /> in Sri Lanka
        </h1>
        <div className="h-12 w-px bg-white/45 my-8"></div>
        {/* CTA Button */}
        <div>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-marcellus font-medium text-black bg-[#E8A7C5] rounded-full transition-all duration-300 overflow-hidden cursor-pointer">
            {/* Button text */}
            <span className="px-4">Enquire</span>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-none group-hover:transition-transform group-hover:duration-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
