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
    badge: "3 Nights | 4 Days",
    title: "Sri Lanka's Highlights",
    subtitle: "Colombo | Kandy | Bentota",
    href: "/packages/explorer",
  },
  {
    id: "2",
    src: "/slider/tour2.jpeg",
    alt: "Beach sunset",
    badge: "4 Nights | 5 Days",
    title: "Sri Lanka's Cultural Triangle",
    subtitle: "Colombo | Kandy | Sigiriya | Bentota",
    href: "/packages/romance",
  },
  {
    id: "3",
    src: "/slider/tour3.jpeg",
    alt: "Beach sunset",
    badge: "3 Nights | 4 Days",
    title: "Kandy and Sri Lanka's Hill Country",
    subtitle: "Colombo | Kandy | Bentota",
    href: "/packages/wellness",
  },
  {
    id: "4",
    src: "/slider/tour4.jpeg",
    alt: "Beach sunset",
    badge: "3 Nights | 4 Days",
    title: "Tour of Southern Sri Lanka",
    subtitle: "Colombo | Galle | Yala",
    href: "/packages/adventure",
  },
  {
    id: "5",
    src: "/slider/tour5.jpeg",
    alt: "Beach sunset",
    badge: "6 Nights | 7 Days",
    title: "Classic Tour of Sri Lanka",
    subtitle: "Colombo | Sigiriya | Kandy | Ella",
    href: "/packages/luxury",
  },
  {
    id: "6",
    src: "/slider/tour6.jpeg",
    alt: "Beach sunset",
    badge: "7 Nights | 8 Days",
    title: "Complete Tour of Sri Lanka",
    subtitle: "Colombo | Sigiriya | Kandy | Ella | Yala | Galle",
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
