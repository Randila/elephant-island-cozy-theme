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
import { tours } from "./data/tours";

export default function Home() {


  return (
    <>
      <Navbar />
      <VideoLandingHero videoSrc="/header-video.mp4" />

      <IntroText 
        label="Welcome to Sri Lanka"
        title="The World's Most Beautiful Island"
        description="We are a group of travel experts that arrange fantastic private tailor made holidays in Sri Lanka. We are happy to quote for travellers on any budget that wish to experience Sri Lanka."
      />
      <OutstandingViewsSwiper slides={tours} />
     

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
