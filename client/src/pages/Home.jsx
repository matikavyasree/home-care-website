import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import Statistics from "../components/home/Statistics";
import FAQSection from "../components/home/FAQSection";
import ContactCTA from "../components/home/ContactCTA";
import Footer from "../components/common/Footer";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <Statistics />
       <FAQSection />
       <ContactCTA />
       <Testimonials />
    </>
  );
}