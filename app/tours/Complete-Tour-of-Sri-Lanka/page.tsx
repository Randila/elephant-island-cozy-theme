import Navbar from "../../components/Navbar";
import HotelHeroSection from "../../components/HotelHeroSection";
import NewsletterSection from "../../components/NewsletterSection";
import SiteFooter from "../../components/footer";
import TourSection from "../../components/complete/TourSection";
import { tours } from "../../data/tours";
import ImageOffsetSwiper from "../../components/ImageOffsetSwiper";

export default function Tour() {
  return (
    <>
      <Navbar />
      <HotelHeroSection
        title="Complete Tour of Sri Lanka"
        subtitle=""
        tagline="7 Nights | 8 Days"
        backgroundImage="/slider/tour6.jpeg"
      />

      <TourSection />

      <ImageOffsetSwiper slides={tours} />

      <NewsletterSection />
      <SiteFooter />
    </>
  );
}
