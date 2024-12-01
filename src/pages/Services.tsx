import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesSection } from "@/components/sections/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      <div className="pt-24">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;