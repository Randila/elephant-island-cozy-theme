import NavbarLuxury from "./components/NavbarLuxury";
import VideoLandingHero from "./components/VideoLandingHero";

import OutstandingViewsSwiper from "./components/ImageOffsetSwiper";
import NewsletterSection from "./components/NewsletterSection";
import OutstandingViewsHeader from "./components/OutstandingViewsHeader";
import ParallaxFeatureSection from "./components/ParallaxFeatureSection";
import SiteFooter from "./components/footer";

export default function Home() {
  const slides = [
    { id: "1", src: "/slider/slide-1.jpg", alt: "Beach sunset" },
    { id: "2", src: "/slider/slide-2.jpg", alt: "Beach sunset" },
    { id: "3", src: "/slider/slide-3.jpg", alt: "Beach sunset" },
    { id: "4", src: "/slider/slide-4.jpg", alt: "Beach sunset" },
  ];

  return (
    <>
      <NavbarLuxury />
      <VideoLandingHero videoSrc="/header-video.mp4" />

      <OutstandingViewsHeader />
      <OutstandingViewsSwiper slides={slides} />

      <ParallaxFeatureSection
        bgImage="/beach.jpg"
        cards={[
          {
            title: "Spa & Wellness",
            desc: "Set in lush jungle, our modern spa embodies the calm of nature, offering extraordinary visual and auditory experiences that pamper and heal.",
            img: "/pool.jpg",
            link: "#",
          },
          {
            title: "Island Activities",
            desc: "A playground for the over-and-underwater world adventurers. Surfing, diving, snorkeling, fishing, sailing, nature trails & villages to explore.",
            img: "/surf.jpg",
            link: "#",
          },
          {
            title: "Gastronomic Dine",
            desc: "Our restaurants use fresh, organic ingredients that are locally produced and sourced. Delicious flavors and a warm atmosphere are the perfect way to unwind.",
            img: "/wine.jpg",
            link: "#",
          },
        ]}
      />

      <NewsletterSection backgroundImageUrl="/beach.jpg" />
      <SiteFooter />
    </>
  );
}
