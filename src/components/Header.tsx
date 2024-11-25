import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
        isScrolled ? "bg-blue-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <button 
            onClick={scrollToTop}
            className="flex items-center"
          >
            <img 
              src="/logo.svg" 
              alt="Seavion Logo" 
              className="h-16 w-auto"
            />
          </button>

          <nav className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("#why-section")}
              className="text-white hover:text-blue-300 transition-colors"
            >
              Om oss
            </button>
            <button
              onClick={() => scrollToSection("#solutions-section")}
              className="text-white hover:text-blue-300 transition-colors"
            >
              Tjenester
            </button>
            <button
              onClick={() => scrollToSection("#contact-section")}
              className="text-white hover:text-blue-300 transition-colors"
            >
              Kontakt oss
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};