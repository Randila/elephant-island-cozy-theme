
import HotelHeroSection from "../components/HotelHeroSection";
import Navbar from "../components/Navbar";
import ContactSplitSection from "../components/ContactSplitSection";
import NewsletterSection from "../components/NewsletterSection";
import SiteFooter from "../components/footer";

export default function Contact() {
  return (
    <>
    <Navbar />
        <HotelHeroSection
        title="Contact The Hotel"
        subtitle="Get in touch with us for your perfect island getaway"
        tagline="WE'RE HERE TO HELP"
        backgroundImage="/beach.jpg"
      />
      <ContactSplitSection/>

            <NewsletterSection backgroundImageUrl="/stay.webp" />
            <SiteFooter />
      </>
  );
}
