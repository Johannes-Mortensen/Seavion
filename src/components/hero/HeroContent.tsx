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
    <div className="relative z-10 min-h-screen flex items-center px-4">
      {/* Background Waves */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
          alt="Ocean waves"
          className="w-full h-full object-cover brightness-[0.3] scale-105 transform transition-transform duration-[2s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      </div>

      {/* Left side content */}
      <div className="w-full lg:w-3/5 space-y-8 text-left px-4 lg:pl-24 mt-32 md:mt-48">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight animate-fade-in opacity-0 text-white" 
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Vi skaper verdi med data og kunstig intelligens.
        </h1>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-light max-w-2xl leading-relaxed animate-fade-in opacity-0 text-white/90"
           style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Fra innsikt til handling – smartere løsninger for enhver bedrift.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in opacity-0"
             style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-fit text-lg px-8 py-6"
            onClick={scrollToContact}
          >
            Kom i gang <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent hover:bg-black/10 border-white text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-fit text-lg px-8 py-6"
            onClick={scrollToWhy}
          >
            Les mer om oss
          </Button>
        </div>
      </div>
    </div>
  );
};