import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { CustomerStoriesSection } from "@/components/sections/CustomerStoriesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />

      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
            alt="Professional workspace"
            className="w-full h-full object-cover brightness-[0.3] scale-105 transform transition-transform duration-[2s] hover:scale-110"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Vi skaper verdi med data og kunstig intelligens.
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
                Fra innsikt til handling – smartere løsninger for enhver bedrift.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/services")}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Utforsk våre tjenester
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToContact}
                  className="border-white text-white hover:bg-white/10"
                >
                  Kontakt oss i dag
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