import { StrategyHero } from "@/components/strategy/StrategyHero";
import { StrategyProcess } from "@/components/strategy/StrategyProcess";
import { StrategyServices } from "@/components/strategy/StrategyServices";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";

const Strategy = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact-section");
    if (contactSection) {
      const headerHeight = 80;
      const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      <StrategyHero scrollToContact={scrollToContact} />
      <StrategyProcess />
      <StrategyServices />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Strategy;