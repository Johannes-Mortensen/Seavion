import { StrategyHero } from "@/components/strategy/StrategyHero";
import { StrategyProcess } from "@/components/strategy/StrategyProcess";
import { StrategyServices } from "@/components/strategy/StrategyServices";
import { StrategyCTA } from "@/components/strategy/StrategyCTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Strategy = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate("/");
    // Wait for navigation to complete before scrolling
    setTimeout(() => {
      const contactSection = document.querySelector("#contact-section");
      if (contactSection) {
        const headerHeight = 80;
        const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      <StrategyHero scrollToContact={scrollToContact} />
      <StrategyProcess />
      <StrategyServices />
      <StrategyCTA scrollToContact={scrollToContact} />
      <Footer />
    </div>
  );
};

export default Strategy;