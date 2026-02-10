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
import BookingHero from "./components/BookingHero";

export default function Home() {
  
  const slides = [
  {
    id: "1",
    src: "/slider/tour1.jpeg",
    alt: "Beach sunset",
    badge: "SAVE OVER 15%",
    title: "Sri Lanka's Highlights",
    subtitle: "Travel to Colombo, Kandy & Bentota",
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

      <IntroText 
        label="Welcome to Sri Lanka"
        title="The World's Most Beautiful Island"
        description="We are a group of travel experts that arrange fantastic private tailor made holidays in Sri Lanka. We are happy to quote for travellers on any budget that wish to experience Sri Lanka."
      />
      <OutstandingViewsSwiper slides={slides} />

      <TwoColumnSection />
      <TwoColumnSectionReverse />

    <ParallaxFeatureSection
      bgImage="/beach.jpg"
      cards={[
        {
          title: "Our Vehicles",
          desc: "We Use Luxury A/C Cars For 2 Persons And Luxury A/C Mini-Vans For 3 + Persons.",
          img: "/byd-car.webp",
          link: "#",
        },
        {
          title: "Our Driver Guides",
          desc: "All Of Our Driver Guides Are Licensed By The Sri Lanka Tourist Board And Are Fluent In English And Other Languages.",
          img: "/guides.jpg",
          link: "#",
        },
        {
          title: "Arrival At Colombo Airport",
          desc: "Most visitors arrive at Colombo Airport - which is about 20 minutes by expressway to the capital city.",
          img: "/emirates.jpeg",
          link: "#",
        },
      ]}
    />

      <BookingHero backgroundImage="/road.jpg" />


      <Services/>

      <NewsletterSection backgroundImageUrl="/stay.webp" />
      <SiteFooter />
    </>
  );
}
