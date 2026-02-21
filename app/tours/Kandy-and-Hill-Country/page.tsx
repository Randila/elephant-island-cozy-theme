import Navbar from "../../components/Navbar";
import HotelHeroSection from "../../components/HotelHeroSection";
import NewsletterSection from "../../components/NewsletterSection";
import SiteFooter from "../../components/footer";
import TourSection from "../../components/hillCountry/TourSection";
import { tours } from "../../data/tours";
import ImageOffsetSwiper from "../../components/ImageOffsetSwiper";

export default function Tour() {
  return (
    <>
      <Navbar />
      <HotelHeroSection
        title="Kandy And The Hill Country"
        subtitle=""
        tagline="4 Nights | 5 Days"
        backgroundImage="/slider/tour3.jpeg"
      />
  


      <TourSection />

      <ImageOffsetSwiper slides={tours} />

      <NewsletterSection />
      <SiteFooter />
    </>
  );
}
