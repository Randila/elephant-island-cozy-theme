export default function VideoLandingHero({ videoSrc = "/header-video.mp4" }) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video className="absolute inset-0 h-full w-full object-cover" src={videoSrc} autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
        <h3 className="mb-8">Elephant Island</h3>
        <h1 className="font-[var(--font-marcellus)] text-5xl md:text-7xl leading-[1.05]">
          Find the spirit of Ceylon
          <br/> at the Elephant Island
        </h1>
      </div>
    </section>
  );
}
