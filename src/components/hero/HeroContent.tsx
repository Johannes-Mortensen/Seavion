import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Cube3D } from "./Cube3D";

export const HeroContent = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhy = () => {
    const whySection = document.querySelector('#why-section');
    whySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center px-4 overflow-hidden">
      {/* Background with dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/95 to-gray-900 z-10" />
      
      {/* 3D Cube Background */}
      <Cube3D />

      {/* Content container */}
      <div className="container mx-auto relative z-20">
        <div className="w-full lg:w-3/5 space-y-8 text-left">
          {/* Main heading with enhanced contrast */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight animate-fade-in opacity-0" 
            style={{ 
              animationDelay: '0.2s', 
              animationFillMode: 'forwards',
              background: 'linear-gradient(to right, #fff, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
          >
            Transformerer bedrifter med kunstig intelligens
          </h1>
          
          {/* Subheading with better contrast */}
          <h2 
            className="text-xl sm:text-2xl lg:text-3xl font-light max-w-2xl leading-relaxed animate-fade-in opacity-0 text-gray-100"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            Vi hjelper norske bedrifter med å utnytte potensialet i moderne teknologi for å skape konkurransefortrinn og effektivisere arbeidsprosesser.
          </h2>
          
          {/* CTA buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in opacity-0"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-fit text-lg px-8 py-6 relative overflow-hidden group"
              onClick={scrollToContact}
            >
              <span className="relative z-10">Kom i gang</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 inline-block group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-purple-900/20 border-purple-400 text-purple-400 transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-fit text-lg px-8 py-6"
              onClick={scrollToWhy}
            >
              Les mer om oss
            </Button>
          </div>

          {/* Stats section with improved visibility */}
          <div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-12 animate-fade-in opacity-0"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">100+</div>
              <div className="text-sm text-gray-200">Fornøyde kunder</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">95%</div>
              <div className="text-sm text-gray-200">Kundetilfredshet</div>
            </div>
            <div className="text-center hidden sm:block">
              <div className="text-3xl font-bold text-purple-300 mb-2">24/7</div>
              <div className="text-sm text-gray-200">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};