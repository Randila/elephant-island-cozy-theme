export default function VideoLandingHero({ videoSrc = "/hero.mp4" }) {
  return (
    <section className="relative h-screen md:h-[75dvh] lg:h-screen w-full overflow-hidden bg-black">
      {/* 📱 Mobile → YouTube (FULL SCREEN COVER) */}
      <div className="absolute inset-0 md:hidden overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 h-[120vh] w-[120vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/qL3ESZMYSuI?autoplay=1&mute=1&loop=1&playlist=qL3ESZMYSuI&controls=0&modestbranding=1&playsinline=1"
          title="Mobile Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
      </div>

      {/* 💻 Desktop → MP4 */}
      <video
        className="hidden md:block absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
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
