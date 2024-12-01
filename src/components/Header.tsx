import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
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
              className="h-24 w-auto md:h-32 transition-all duration-300"
            />
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-900/95 backdrop-blur-sm py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("#what-we-do")}
                className="text-sm text-white hover:text-blue-300 transition-colors py-2"
              >
                Hva gjør vi
              </button>
              <button
                onClick={() => navigate("/tjenester")}
                className="text-sm text-white hover:text-blue-300 transition-colors py-2"
              >
                Tjenester
              </button>
              <button
                onClick={() => scrollToSection("#about-section")}
                className="text-sm text-white hover:text-blue-300 transition-colors py-2"
              >
                Vår historie
              </button>
              <button
                onClick={() => scrollToSection("#contact-section")}
                className="text-sm text-white hover:text-blue-300 transition-colors py-2"
              >
                Kontakt oss
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};