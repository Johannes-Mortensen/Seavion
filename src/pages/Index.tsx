import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Index = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const rotationRef = useRef({ x: 45, y: 45 });

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhatWeDo = () => {
    const whatWeDoSection = document.querySelector('#what-we-do-section');
    whatWeDoSection?.scrollIntoView({ behavior: 'smooth' });
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      <div className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
            alt="Ocean waves"
            className="w-full h-full object-cover brightness-[0.3] scale-125 transform transition-transform duration-[2s] hover:scale-130"
          />
        </div>

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
              <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent" style={{ transform: `translateZ(${window.innerWidth >= 768 ? '250px' : '100px'})`, border: '1px solid rgba(34, 211, 238, 0.3)', boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)', backfaceVisibility: 'visible' }} />
              <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent" style={{ transform: `translateZ(${window.innerWidth >= 768 ? '-250px' : '-100px'}) rotateY(180deg)`, border: '1px solid rgba(34, 211, 238, 0.3)', boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)', backfaceVisibility: 'visible' }} />
              <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent" style={{ transform: `rotateY(90deg) translateZ(${window.innerWidth >= 768 ? '250px' : '100px'})`, border: '1px solid rgba(34, 211, 238, 0.3)', boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)', backfaceVisibility: 'visible' }} />
              <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent" style={{ transform: `rotateY(-90deg) translateZ(${window.innerWidth >= 768 ? '250px' : '100px'})`, border: '1px solid rgba(34, 211, 238, 0.3)', boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)', backfaceVisibility: 'visible' }} />
              <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent" style={{ transform: `rotateX(90deg) translateZ(${window.innerWidth >= 768 ? '250px' : '100px'})`, border: '1px solid rgba(34, 211, 238, 0.3)', boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)', backfaceVisibility: 'visible' }} />
              <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent" style={{ transform: `rotateX(-90deg) translateZ(${window.innerWidth >= 768 ? '250px' : '100px'})`, border: '1px solid rgba(34, 211, 238, 0.3)', boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)', backfaceVisibility: 'visible' }} />
            </div>
          </div>
        </div>

        <div className="relative z-10 h-full flex items-center px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Vi skaper verdi med data og kunstig intelligens
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
                Fra innsikt til handling – smartere løsninger for enhver bedrift.
              </h2>
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
                  onClick={scrollToWhatWeDo}
                >
                  Les mer om oss
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatWeDoSection />
      <ServicesSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;