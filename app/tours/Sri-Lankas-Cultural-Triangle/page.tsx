import Navbar from "../../components/Navbar";
import HotelHeroSection from "../../components/HotelHeroSection";
import NewsletterSection from "../../components/NewsletterSection";
import SiteFooter from "../../components/footer";
import TourSection from "../../components/cultural/TourSection";
import { tours } from "../../data/tours";
import ImageOffsetSwiper from "../../components/ImageOffsetSwiper";

export default function Tour() {
  return (
    <>
      <Navbar />
      <HotelHeroSection
        title="Sri Lanka's Cultural Triangle"
        subtitle=""
        tagline="3 Nights | 4 Days"
        backgroundImage="/slider/tour2.jpeg"
      />

      <TourSection />

      <ImageOffsetSwiper slides={tours} />

      <NewsletterSection />
      <SiteFooter />
    </>
  );
}
