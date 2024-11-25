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
    const ROTATION_SPEED = 0.05; // Reduced rotation speed for smoother animation

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (cubeRef.current) {
        rotationRef.current.x += ROTATION_SPEED * deltaTime;
        rotationRef.current.y += ROTATION_SPEED * deltaTime;
        
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
      <div className="absolute inset-0 flex items-center justify-center translate-x-32 overflow-hidden pointer-events-none">
        <div 
          className="relative" 
          style={{ 
            perspective: "1000px",
            width: "500px", 
            height: "500px",
            willChange: "transform" // Optimize for animations
          }}
        >
          <div
            ref={cubeRef}
            className="absolute w-full h-full"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: 'rotateX(45deg) rotateY(45deg)',
              backfaceVisibility: 'hidden', // Improve performance
              willChange: 'transform' // Optimize for animations
            }}
          >
            {/* Cube faces with optimized rendering */}
            {[
              { transform: 'translateZ(250px)' },
              { transform: 'translateZ(-250px) rotateY(180deg)' },
              { transform: 'rotateY(90deg) translateZ(250px)' },
              { transform: 'rotateY(-90deg) translateZ(250px)' },
              { transform: 'rotateX(90deg) translateZ(250px)' },
              { transform: 'rotateX(-90deg) translateZ(250px)' }
            ].map((style, index) => (
              <div 
                key={index}
                className="absolute w-full h-full"
                style={{
                  ...style,
                  border: '1px solid rgba(34, 211, 238, 0.3)',
                  boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)',
                  background: 'linear-gradient(45deg, rgba(34, 211, 238, 0.1), transparent)',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Left side content */}
      <div className="w-full md:w-1/2 space-y-6 text-left pl-8 md:pl-16 mt-32">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in opacity-0 text-white" 
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Utnytt kraften i AI – skap fremtiden i dag
        </h1>
        
        <p className="text-xl md:text-2xl max-w-xl mb-8 animate-fade-in opacity-0 text-white/90"
           style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Seavion leverer AI- og dataløsninger som driver vekst i enhver bransje.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0"
             style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-fit"
            onClick={scrollToContact}
          >
            Kom i gang <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent hover:bg-black/10 border-black text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-fit"
            onClick={scrollToWhy}
          >
            Les mer om oss
          </Button>
        </div>
      </div>
    </div>
  );
};