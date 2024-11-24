import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
      <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white text-center mb-8 tracking-tight">
        Vi forvandler data til vekst.
      </h1>
      <h2 className="text-2xl md:text-3xl text-blue-200 text-center max-w-3xl mx-auto mb-6 leading-relaxed">
        Fra innsikt til handling – AI og dataløsninger for alle bransjer.
      </h2>
      <p className="text-xl md:text-2xl text-gray-200 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
        La oss hjelpe deg med å utnytte kraften i kunstig intelligens for å transformere din virksomhet og sikre konkurransefortrinn i morgendagens marked.
      </p>
      <p className="text-2xl text-blue-300 text-center max-w-2xl mx-auto mb-12 leading-relaxed animate-pulse">
        Utforsk hvordan vi kan hjelpe din bedrift å vokse.
      </p>
      <div className="flex gap-6">
        <Button 
          className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full transition-all hover:scale-105 duration-300"
        >
          Utforsk våre løsninger
          <ArrowRight className="ml-2 animate-pulse" />
        </Button>
        <Button 
          variant="outline" 
          className="backdrop-blur-sm bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full transition-all hover:scale-105 duration-300 shadow-lg"
        >
          Kontakt oss i dag
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight className="w-8 h-8 text-white rotate-90" />
      </div>
    </div>
  );
};