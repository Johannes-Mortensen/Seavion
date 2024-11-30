import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AutomationServices } from "@/components/automation/AutomationServices";
import { AutomationBenefits } from "@/components/automation/AutomationBenefits";
import { AutomationProcess } from "@/components/automation/AutomationProcess";

const Automation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Automatisering
        </h1>
        
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Vi hjelper deg å automatisere prosesser for smartere og mer effektiv drift.
        </p>
        
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Våre automatiseringstjenester
          </h2>
          <AutomationServices />
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Fordeler med automatisering
          </h2>
          <AutomationBenefits />
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Vår prosess
          </h2>
          <AutomationProcess />
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Er du klar for å automatisere din virksomhet?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ta kontakt med oss i dag for en gratis konsultasjon.
          </p>
          <Button 
            size="lg"
            onClick={() => {
              const contactSection = document.querySelector("#contact-section");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Start reisen mot smartere drift
          </Button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Automation;