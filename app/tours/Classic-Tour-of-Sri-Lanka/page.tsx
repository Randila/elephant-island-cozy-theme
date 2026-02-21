import Navbar from "../../components/Navbar";
import HotelHeroSection from "../../components/HotelHeroSection";
import NewsletterSection from "../../components/NewsletterSection";
import SiteFooter from "../../components/footer";
import TourSection from "../../components/classic/TourSection";
import { tours } from "../../data/tours";
import ImageOffsetSwiper from "../../components/ImageOffsetSwiper";

export default function Tour() {
  return (
    <>
      <Navbar />
      <HotelHeroSection
        title="Classic Tour of Sri Lanka"
        subtitle=""
        tagline="3 Nights + Beach"
        backgroundImage="/slider/tour5.jpeg"
      />

      <TourSection />

      <ImageOffsetSwiper slides={tours} />

      <NewsletterSection />
      <SiteFooter />
    </>
  );
}
