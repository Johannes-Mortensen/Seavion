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
      <div className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
            alt="Ocean waves"
            className="w-full h-full object-cover brightness-[0.3] scale-105 transform transition-transform duration-[2s] hover:scale-110"
          />
        </div>
        <div className="relative z-10 h-full flex items-center px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Vi skaper verdi med data og kunstig intelligens
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
                Fra innsikt til handling – smartere løsninger for enhver bedrift.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0"
                   style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-fit"
                  onClick={scrollToContact}
                >
                  Kom i gang <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-black/10 border-white text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-fit"
                  onClick={scrollToWhy}
                >
                  Les mer om oss
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
