import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="relative z-10 min-h-screen flex items-center px-4">
      {/* Left side content */}
      <div className="w-full md:w-1/2 space-y-6 text-left pl-8 md:pl-16 mt-32">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in opacity-0 text-white" 
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Seavion
        </h1>
        
        <p className="text-xl md:text-2xl max-w-xl mb-8 animate-fade-in opacity-0 text-white/90"
           style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Vi hjelper bedrifter å utnytte kraften i data og kunstig intelligens for å skape målbare resultater og bærekraftig vekst.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0"
             style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-fit"
          >
            Kom i gang <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent hover:bg-white/10 border-white/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-fit"
          >
            Les mer om oss
          </Button>
        </div>
      </div>

      {/* Right side animated elements */}
      <div className="absolute top-0 right-0 w-96 h-96">
        <div className="relative w-full h-full">
          {/* Main pulsing sphere */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute inset-4 bg-blue-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute inset-8 bg-blue-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          
          {/* Floating orbs */}
          <div className="absolute top-20 right-20 w-8 h-8 bg-blue-400/40 rounded-full blur-sm animate-float"></div>
          <div className="absolute top-40 right-40 w-6 h-6 bg-blue-300/40 rounded-full blur-sm animate-float" 
               style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-60 right-20 w-4 h-4 bg-blue-200/40 rounded-full blur-sm animate-float"
               style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
};