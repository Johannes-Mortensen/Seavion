import { StrategyHero } from "@/components/strategy/StrategyHero";
import { StrategyProcess } from "@/components/strategy/StrategyProcess";
import { StrategyServices } from "@/components/strategy/StrategyServices";
import { StrategyCTA } from "@/components/strategy/StrategyCTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Strategy = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      <StrategyHero scrollToContact={scrollToContact} />
      <StrategyProcess />
      <StrategyServices />
      <StrategyCTA />
      <Footer />
    </div>
  );
};

export default Strategy;