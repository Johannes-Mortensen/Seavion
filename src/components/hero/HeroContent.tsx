import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export const HeroContent = () => {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    let rotationX = 45;
    let rotationY = 45;

    const animate = () => {
      if (cubeRef.current) {
        rotationX += 0.2;
        rotationY += 0.2;
        cubeRef.current.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
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
          className="relative" 
          style={{ 
            perspective: "1000px",
            width: "500px", 
            height: "500px"
          }}
        >
          <div
            ref={cubeRef}
            className="absolute w-full h-full"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: 'rotateX(45deg) rotateY(45deg)',
              transition: 'transform 0.1s ease'
            }}
          >
            {/* Front face */}
            <div 
              className="absolute w-full h-full bg-transparent border-2 border-blue-400/40 backdrop-blur-[2px]"
              style={{ 
                transform: 'translateZ(250px)',
                backfaceVisibility: 'visible'
              }}
            >
</lov-replace>
<lov-search>
              <div className="w-full h-full flex items-center justify-center text-purple-400/60 font-bold text-4xl">
                Data
              </div>
</lov-search>
<lov-replace>
            </div>
            
            {/* Back face */}
            <div 
              className="absolute w-full h-full bg-transparent border-2 border-purple-400/40 backdrop-blur-[2px]"
              style={{ 
                transform: 'translateZ(-250px) rotateY(180deg)',
                backfaceVisibility: 'visible'
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-purple-400/60 font-bold text-4xl">
                Data
              </div>
            </div>
            
            {/* Right face */}
            <div 
              className="absolute w-full h-full bg-transparent border-2 border-pink-400/40 backdrop-blur-[2px]"
              style={{ 
                transform: 'rotateY(90deg) translateZ(250px)',
                backfaceVisibility: 'visible'
              }}
            >
</lov-replace>
<lov-search>
              <div className="w-full h-full flex items-center justify-center text-blue-400/60 font-bold text-4xl">
                Cloud
              </div>
</lov-search>
<lov-replace>
            </div>
            
            {/* Left face */}
            <div 
              className="absolute w-full h-full bg-transparent border-2 border-blue-400/40 backdrop-blur-[2px]"
              style={{ 
                transform: 'rotateY(-90deg) translateZ(250px)',
                backfaceVisibility: 'visible'
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-blue-400/60 font-bold text-4xl">
                Cloud
              </div>
            </div>
            
            {/* Top face */}
            <div 
              className="absolute w-full h-full bg-transparent border-2 border-purple-400/40 backdrop-blur-[2px]"
              style={{ 
                transform: 'rotateX(90deg) translateZ(250px)',
                backfaceVisibility: 'visible'
              }}
            >
</lov-replace>
<lov-search>
              <div className="w-full h-full flex items-center justify-center text-pink-400/60 font-bold text-4xl">
                Edge
              </div>
</lov-search>
<lov-replace>
            </div>
            
            {/* Bottom face */}
            <div 
              className="absolute w-full h-full bg-transparent border-2 border-pink-400/40 backdrop-blur-[2px]"
              style={{ 
                transform: 'rotateX(-90deg) translateZ(250px)',
                backfaceVisibility: 'visible'
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-pink-400/60 font-bold text-4xl">
                Edge
              </div>
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