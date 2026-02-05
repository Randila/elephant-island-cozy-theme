import Navbar from "./components/Navbar";
import VideoLandingHero from "./components/VideoLandingHero";

import OutstandingViewsSwiper from "./components/ImageOffsetSwiper";
import NewsletterSection from "./components/NewsletterSection";
import IntroText from "./components/IntroText";
import ParallaxFeatureSection from "./components/ParallaxFeatureSection";
import SiteFooter from "./components/footer";
import TwoColumnSection from "./components/TwoColumnSection";
import TwoColumnSectionReverse from "./components/TwoColumnSectionReverse";
import Services from "./components/Services";

export default function Home() {
  const slides = [
    {
      id: "1",
      src: "/slider/slide-1.jpg",
      alt: "Beach sunset",
      badge: "SAVE OVER 15%",
      title: "Elephant Island Explorer",
      subtitle: "A private island-to-highlands journey",
      href: "/packages/explorer",
    },
    {
      id: "2",
      src: "/slider/slide-2.jpg",
      alt: "Beach sunset",
      badge: "SAVE OVER 15%",
      title: "Elephant Island Romance",
      subtitle: "Romantic couple escape",
      href: "/packages/romance",
    },
    {
      id: "3",
      src: "/slider/slide-3.jpg",
      alt: "Beach sunset",
      badge: "SAVE OVER 15%",
      title: "Elephant Island Wellness",
      subtitle: "Relax, reset, and rejuvenate",
      href: "/packages/wellness",
    },
    {
      id: "4",
      src: "/slider/slide-4.jpg",
      alt: "Beach sunset",
      badge: "SAVE OVER 15%",
      title: "Elephant Island Adventure",
      subtitle: "Wildlife, culture & discovery",
      href: "/packages/adventure",
    },
    {
      id: "5",
      src: "/slider/slide-1.jpg",
      alt: "Beach sunset",
      badge: "SAVE OVER 15%",
      title: "Elephant Island Luxury",
      subtitle: "Premium private experiences",
      href: "/packages/luxury",
    },
    {
      id: "6",
      src: "/slider/slide-2.jpg",
      alt: "Beach sunset",
      badge: "SAVE OVER 15%",
      title: "Elephant Island Signature",
      subtitle: "Our most loved island journey",
      href: "/packages/signature",
    },
  ];

  return (
    <>
      <Navbar />
      <VideoLandingHero videoSrc="/header-video.mp4" />

      <IntroText />
      <OutstandingViewsSwiper slides={slides} />

      <TwoColumnSection />
      <TwoColumnSectionReverse />

      <ParallaxFeatureSection
        bgImage="/beach.jpg"
        cards={[
          {
            title: "Airport Pickups and Transfers",
            desc: "Seamless arrival at Colombo Airport with private A/C vehicles and professional driver guides. We handle every transfer so your journey begins stress-free.",
            img: "/pickup.jpg",
            link: "#",
          },
          {
            title: "Luxury Vehicles & Driver Guides",
            desc: "Travel Sri Lanka in comfort with licensed English-speaking driver guides and modern A/C cars or mini-vans tailored to your group size.",
            img: "/chauffeur.png",
            link: "#",
          },
          {
            title: "Tailor-Made Sri Lanka Tours",
            desc: "Private itineraries crafted around your interests, budget, and travel style — from cultural highlights to beaches, wildlife and luxury escapes.",
            img: "/surf.jpg",
            link: "#",
          },
        ]}
      />

      <Services />

      <NewsletterSection backgroundImageUrl="/stay.webp" />
      <SiteFooter />
    </>
  );
}
