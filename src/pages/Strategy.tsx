import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StrategyHero } from "@/components/strategy/StrategyHero";
import { StrategyServices } from "@/components/strategy/StrategyServices";
import { StrategyProcess } from "@/components/strategy/StrategyProcess";
import { StrategyCTA } from "@/components/strategy/StrategyCTA";

const Strategy = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      <StrategyHero scrollToContact={scrollToContact} />
      <StrategyServices />
      <StrategyProcess />
      <StrategyCTA scrollToContact={scrollToContact} />
      <Footer />
    </div>
  );
};

export default Strategy;