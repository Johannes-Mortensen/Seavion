import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { CustomerStoriesSection } from "@/components/sections/CustomerStoriesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { HeroContent } from "@/components/hero/HeroContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      <HeroContent />
      <WhatWeDoSection />
      <ServicesSection />
      <AboutUsSection />
      <CustomerStoriesSection />
      <ContactSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;