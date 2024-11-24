import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
        Seavion
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fadeIn opacity-90">
        Vi hjelper bedrifter å utnytte kraften i data og kunstig intelligens for å skape målbare resultater og bærekraftig vekst.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Kom i gang <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="bg-transparent hover:bg-white/10"
        >
          Les mer om oss
        </Button>
      </div>
    </div>
  );
};