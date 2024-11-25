import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { DigitalOverlay } from "@/components/hero/DigitalOverlay";
import { HeroContent } from "@/components/hero/HeroContent";
import { WhySection } from "@/components/sections/WhySection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="w-24 h-24 border-t-2 border-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
            alt="Professional workspace"
            className="w-full h-full object-cover brightness-[0.3] scale-105 transform transition-transform duration-[2s] hover:scale-110"
          />
        </div>
        
        <DigitalOverlay />
        <HeroContent />
      </div>

      {/* Other Sections */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <WhySection />
      </div>

      <div className="relative bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-emerald-500/10 to-blue-500/10" />
        <SolutionsSection />
      </div>

      <AboutUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;