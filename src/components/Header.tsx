import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
        isScrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center"
          >
            <img 
              src="/logo.svg" 
              alt="Seavion Logo" 
              className="h-40 w-auto md:h-48 transition-all duration-300"
            />
          </button>

          <nav className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("#what-we-do")}
              className="text-sm text-white hover:text-blue-300 transition-colors whitespace-nowrap"
            >
              Hva gjør vi
            </button>
            <button
              onClick={() => navigate("/tjenester")}
              className="text-sm text-white hover:text-blue-300 transition-colors whitespace-nowrap"
            >
              Tjenester
            </button>
            <button
              onClick={() => scrollToSection("#about-section")}
              className="text-sm text-white hover:text-blue-300 transition-colors whitespace-nowrap"
            >
              Vår historie
            </button>
            <button
              onClick={() => scrollToSection("#contact-section")}
              className="text-sm text-white hover:text-blue-300 transition-colors whitespace-nowrap"
            >
              Kontakt oss
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};