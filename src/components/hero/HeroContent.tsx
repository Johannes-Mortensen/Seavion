import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export const HeroContent = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const rotationRef = useRef({ x: 45, y: 45 });

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhy = () => {
    const whySection = document.querySelector('#why-section');
    whySection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    let lastTime = performance.now();
    const ROTATION_SPEED = 0.065;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (cubeRef.current) {
        rotationRef.current.x += ROTATION_SPEED * (deltaTime / 16);
        rotationRef.current.y += ROTATION_SPEED * (deltaTime / 16);
        
        cubeRef.current.style.transform = `rotateX(${rotationRef.current.x}deg) rotateY(${rotationRef.current.y}deg)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative z-10 min-h-screen flex items-center px-4">
      {/* Background Cube */}
      <div className="absolute inset-0 flex items-center justify-center translate-x-0 md:translate-x-32 overflow-visible pointer-events-none">
        <div 
          className="relative w-[200px] h-[200px] md:w-[500px] md:h-[500px]"
          style={{ 
            perspective: "1000px",
            willChange: "transform",
            transform: 'translateZ(0)',
            transformOrigin: 'center center'
          }}
        >
          <div
            ref={cubeRef}
            className="absolute w-full h-full"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: 'rotateX(45deg) rotateY(45deg)',
              backfaceVisibility: 'visible'
            }}
          >
            {/* Cube faces */}
            <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent" style={{ transform: 'translateZ(100px) md:translateZ(250px)', border: '1px solid rgba(34, 211, 238, 0.3)', boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)', backfaceVisibility: 'visible' }} />
            <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent" style={{ transform: 'translateZ(-100px) md:translateZ(-250px) rotateY(180deg)', border: '1px solid rgba(34, 211, 238, 0.3)', boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)', backfaceVisibility: 'visible' }} />
            <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent" style={{ transform: 'rotateY(90deg) translateZ(100px) md:translateZ(250px)', border: '1px solid rgba(34, 211, 238, 0.3)', boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)', backfaceVisibility: 'visible' }} />
            <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent" style={{ transform: 'rotateY(-90deg) translateZ(100px) md:translateZ(250px)', border: '1px solid rgba(34, 211, 238, 0.3)', boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)', backfaceVisibility: 'visible' }} />
            <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent" style={{ transform: 'rotateX(90deg) translateZ(100px) md:translateZ(250px)', border: '1px solid rgba(34, 211, 238, 0.3)', boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)', backfaceVisibility: 'visible' }} />
            <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent" style={{ transform: 'rotateX(-90deg) translateZ(100px) md:translateZ(250px)', border: '1px solid rgba(34, 211, 238, 0.3)', boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)', backfaceVisibility: 'visible' }} />
          </div>
        </div>
      </div>

      {/* Left side content */}
      <div className="w-full md:w-1/2 space-y-6 text-left px-4 md:pl-16 mt-16 md:mt-32">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 animate-fade-in opacity-0 text-white" 
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Utnytt kraften i AI – skap fremtiden i dag
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl max-w-xl mb-6 md:mb-8 animate-fade-in opacity-0 text-white/90"
           style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Seavion leverer AI- og dataløsninger som driver vekst i enhver bransje.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0"
             style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-fit"
            onClick={scrollToContact}
          >
            Kom i gang <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent hover:bg-black/10 border-white text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-fit"
            onClick={scrollToWhy}
          >
            Les mer om oss
          </Button>
        </div>
      </div>
    </div>
  );
};