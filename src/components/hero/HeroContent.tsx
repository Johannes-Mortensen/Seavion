import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(/ocean-bg.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 1
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80 z-0" />
      
      {/* Content container */}
      <div className="container mx-auto relative z-20">
        <div className="w-full lg:w-3/5 space-y-8 text-left">
          {/* Main heading */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-white animate-fade-in opacity-0" 
            style={{ 
              animationDelay: '0.2s', 
              animationFillMode: 'forwards',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
          >
            Transformerer bedrifter med kunstig intelligens
          </h1>
          
          {/* Subheading */}
          <h2 
            className="text-xl sm:text-2xl lg:text-3xl font-light max-w-2xl leading-relaxed text-gray-200 animate-fade-in opacity-0"
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
              className="bg-purple-600 hover:bg-purple-700 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-fit text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              Kom i gang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-white/10 border-white text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-fit text-lg px-8 py-6"
              onClick={scrollToWhy}
            >
              Les mer om oss
            </Button>
          </div>

          {/* Stats section */}
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