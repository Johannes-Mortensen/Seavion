import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroContent } from "@/components/hero/HeroContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      <HeroContent />
      <ServicesSection />
      <WhatWeDoSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;