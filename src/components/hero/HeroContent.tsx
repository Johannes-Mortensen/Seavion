import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export const HeroContent = () => {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    let rotation = 0;

    const animate = () => {
      if (cubeRef.current) {
        rotation += 0.5;
        cubeRef.current.style.transform = `
          rotateX(${rotation}deg) 
          rotateY(${rotation}deg)
        `;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="relative z-10 min-h-screen flex items-center px-4">
      {/* Background Cube */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div
          ref={cubeRef}
          className="w-[500px] h-[500px] relative transform-style-preserve-3d transition-transform duration-300 opacity-80"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front face - only borders */}
          <div className="absolute w-full h-full bg-transparent border-2 border-blue-400/40 transform translate-z-[250px] shadow-lg backdrop-blur-[2px]"
               style={{ transform: 'translateZ(250px)' }}>
            <div className="w-full h-full flex items-center justify-center text-blue-400/60 font-bold text-4xl">
              AI
            </div>
          </div>
          {/* Back face - only borders */}
          <div className="absolute w-full h-full bg-transparent border-2 border-purple-400/40 transform -translate-z-[250px] shadow-lg backdrop-blur-[2px]"
               style={{ transform: 'translateZ(-250px)' }}>
            <div className="w-full h-full flex items-center justify-center text-purple-400/60 font-bold text-4xl">
              Data
            </div>
          </div>
          {/* Right face - only borders */}
          <div className="absolute w-full h-full bg-transparent border-2 border-pink-400/40 transform translate-x-[250px] rotate-y-90 shadow-lg backdrop-blur-[2px]"
               style={{ transform: 'translateX(250px) rotateY(90deg)' }}>
            <div className="w-full h-full flex items-center justify-center text-pink-400/60 font-bold text-4xl">
              ML
            </div>
          </div>
          {/* Left face - only borders */}
          <div className="absolute w-full h-full bg-transparent border-2 border-blue-400/40 transform -translate-x-[250px] rotate-y-[-90deg] shadow-lg backdrop-blur-[2px]"
               style={{ transform: 'translateX(-250px) rotateY(-90deg)' }}>
            <div className="w-full h-full flex items-center justify-center text-blue-400/60 font-bold text-4xl">
              Cloud
            </div>
          </div>
          {/* Top face - only borders */}
          <div className="absolute w-full h-full bg-transparent border-2 border-purple-400/40 transform translate-y-[-250px] rotate-x-90 shadow-lg backdrop-blur-[2px]"
               style={{ transform: 'translateY(-250px) rotateX(90deg)' }}>
            <div className="w-full h-full flex items-center justify-center text-purple-400/60 font-bold text-4xl">
              IoT
            </div>
          </div>
          {/* Bottom face - only borders */}
          <div className="absolute w-full h-full bg-transparent border-2 border-pink-400/40 transform translate-y-[250px] rotate-x-[-90deg] shadow-lg backdrop-blur-[2px]"
               style={{ transform: 'translateY(250px) rotateX(-90deg)' }}>
            <div className="w-full h-full flex items-center justify-center text-pink-400/60 font-bold text-4xl">
              Edge
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
};
