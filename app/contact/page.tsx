import HotelHeroSection from "../components/HotelHeroSection";
import Navbar from "../components/Navbar";
import ContactSplitSection from "../components/ContactSplitSection";
import NewsletterSection from "../components/NewsletterSection";
import SiteFooter from "../components/footer";
import BookingHero from "../components/BookingHero";
import ImageOffsetSwiper from "../components/ImageOffsetSwiper";
import { tours } from "../data/tours";

export default function Contact() {
  return (
    <>
      <Navbar />
      <HotelHeroSection
        title="Contact Us"
        subtitle="Get in touch with us for your perfect island getaway"
        tagline="WE'RE HERE TO HELP"
        backgroundImage="/sea.jpeg"
      />
      <ContactSplitSection />

      <BookingHero backgroundImage="/road.jpg" />

      <ImageOffsetSwiper slides={tours} />

      <NewsletterSection backgroundImageUrl="/stay.webp" />
      <SiteFooter />
    </>
  );
}
