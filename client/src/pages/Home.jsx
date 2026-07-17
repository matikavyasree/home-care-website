import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import Statistics from "../components/home/Statistics";
import GalleryPreview from "../components/home/GalleryPreview";
import FAQSection from "../components/home/FAQSection";
import ContactCTA from "../components/home/ContactCTA";
import Footer from "../components/common/Footer";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <Statistics />
      <GalleryPreview />
       <FAQSection />
       <ContactCTA />
    </>
  );
}