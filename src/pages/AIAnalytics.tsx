import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";

const AIAnalytics = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact-section");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          AI og Analyse
        </h1>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 mb-8">
            Vi hjelper din bedrift med å utnytte kraften i kunstig intelligens og avansert dataanalyse 
            for å ta bedre beslutninger og oppnå konkurransefortrinn.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Kontakt oss
          </Button>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default AIAnalytics;