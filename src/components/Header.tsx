import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    // First, ensure we're on the home page
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const section = document.querySelector(sectionId);
        if (section) {
          const headerOffset = 100;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      // If already on home page, scroll directly
      const section = document.querySelector(sectionId);
      if (section) {
        const headerOffset = 100;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const NavLinks = () => (
    <>
      <button
        onClick={() => scrollToSection("#what-we-do-section")}
        className="text-sm text-white hover:text-blue-300 transition-colors whitespace-nowrap"
      >
        Hva gjør vi
      </button>
      <button
        onClick={() => scrollToSection("#services-section")}
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
    </>
  );

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
              className="h-24 w-auto md:h-28 transition-all duration-300"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900/95 backdrop-blur-sm w-[300px] p-6">
              <nav className="flex flex-col space-y-6 mt-8">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};