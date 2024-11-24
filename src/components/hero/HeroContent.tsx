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

      {/* 3D Cube */}
      <div className="absolute top-20 right-20 perspective-[1000px]">
        <div
          ref={cubeRef}
          className="w-32 h-32 relative transform-style-preserve-3d transition-transform duration-300"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front face */}
          <div className="absolute w-full h-full bg-blue-500/30 backdrop-blur-sm border border-blue-300/50 transform translate-z-[64px]"
               style={{ transform: 'translateZ(64px)' }}>
            <div className="w-full h-full flex items-center justify-center text-white">Front</div>
          </div>
          {/* Back face */}
          <div className="absolute w-full h-full bg-blue-500/30 backdrop-blur-sm border border-blue-300/50 transform -translate-z-[64px]"
               style={{ transform: 'translateZ(-64px)' }}>
            <div className="w-full h-full flex items-center justify-center text-white">Back</div>
          </div>
          {/* Right face */}
          <div className="absolute w-full h-full bg-blue-500/30 backdrop-blur-sm border border-blue-300/50 transform translate-x-[64px] rotate-y-90"
               style={{ transform: 'translateX(64px) rotateY(90deg)' }}>
            <div className="w-full h-full flex items-center justify-center text-white">Right</div>
          </div>
          {/* Left face */}
          <div className="absolute w-full h-full bg-blue-500/30 backdrop-blur-sm border border-blue-300/50 transform -translate-x-[64px] rotate-y-[-90deg]"
               style={{ transform: 'translateX(-64px) rotateY(-90deg)' }}>
            <div className="w-full h-full flex items-center justify-center text-white">Left</div>
          </div>
          {/* Top face */}
          <div className="absolute w-full h-full bg-blue-500/30 backdrop-blur-sm border border-blue-300/50 transform translate-y-[-64px] rotate-x-90"
               style={{ transform: 'translateY(-64px) rotateX(90deg)' }}>
            <div className="w-full h-full flex items-center justify-center text-white">Top</div>
          </div>
          {/* Bottom face */}
          <div className="absolute w-full h-full bg-blue-500/30 backdrop-blur-sm border border-blue-300/50 transform translate-y-[64px] rotate-x-[-90deg]"
               style={{ transform: 'translateY(64px) rotateX(-90deg)' }}>
            <div className="w-full h-full flex items-center justify-center text-white">Bottom</div>
          </div>
        </div>
      </div>
    </div>
  );
};