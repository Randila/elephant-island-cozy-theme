
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
        title="Contact Us"
        subtitle="Get in touch with us for your perfect island getaway"
        tagline="WE'RE HERE TO HELP"
        backgroundImage="/sea.jpeg"
      />
      <ContactSplitSection/>

            <NewsletterSection backgroundImageUrl="/stay.webp" />
            <SiteFooter />
      </>
  );
}
