import Navbar from "../../components/Navbar";
import HotelHeroSection from "../../components/HotelHeroSection";
import NewsletterSection from "../../components/NewsletterSection";
import SiteFooter from "../../components/footer";
import TourSection from "../../components/southern/TourSection";
import { tours } from "../../data/tours";
import ImageOffsetSwiper from "../../components/ImageOffsetSwiper";

export default function Tour() {
  return (
    <>
      <Navbar />
      <HotelHeroSection
        title="Tour of Southern Sri Lanka"
        subtitle=""
        tagline="3 Nights | 4 Days"
        backgroundImage="/slider/tour4.jpeg"
      />

      <TourSection />

      <ImageOffsetSwiper slides={tours} />

      <NewsletterSection />
      <SiteFooter />
    </>
  );
}
