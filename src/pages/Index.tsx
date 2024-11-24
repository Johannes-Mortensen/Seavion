import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { WaveBackground } from "@/components/hero/WaveBackground";
import { DigitalOverlay } from "@/components/hero/DigitalOverlay";
import { HeroContent } from "@/components/hero/HeroContent";
import { WhySection } from "@/components/sections/WhySection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
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
        <div className="w-24 h-24 border-t-2 border-purple-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Professional workspace"
            className="w-full h-full object-cover brightness-[0.3] scale-105 transform transition-transform duration-[2s] hover:scale-110"
          />
        </div>
        
        <WaveBackground />
        <DigitalOverlay />
        <HeroContent />
      </div>

      {/* Why Seavion Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            alt="Data visualization"
            className="w-full h-full object-cover brightness-[0.2]"
          />
        </div>
        <WhySection />
      </div>

      {/* Solutions Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Technology solutions"
            className="w-full h-full object-cover brightness-[0.2]"
          />
        </div>
        <SolutionsSection />
      </div>

      {/* Industries Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742"
            alt="Industrial setting"
            className="w-full h-full object-cover brightness-[0.2]"
          />
        </div>
        <IndustriesSection />
      </div>

      {/* Testimonials Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default Index;