import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { AutomationBenefits } from "@/components/automation/AutomationBenefits";
import { AutomationProcess } from "@/components/automation/AutomationProcess";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Automation = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact-section");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Automatisering for fremtidens bedrifter
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Vi hjelper virksomheter med å implementere smarte automatiseringsløsninger 
            som effektiviserer arbeidsprosesser, reduserer kostnader og frigjør 
            verdifull tid for dine ansatte.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg group"
          >
            Kom i gang med automatisering
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Fordeler med automatisering
          </h2>
          <AutomationBenefits />
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Vår prosess
          </h2>
          <AutomationProcess />
        </section>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Automation;