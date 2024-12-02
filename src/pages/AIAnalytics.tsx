import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { Brain, ChartBar, Database, LineChart, Server, BrainCircuit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AIAnalytics = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact-section");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "Maskinlæring",
      description: "Implementer avanserte ML-modeller for å automatisere beslutningsprosesser og forbedre effektiviteten."
    },
    {
      icon: <ChartBar className="w-12 h-12 text-blue-500" />,
      title: "Prediktiv Analyse",
      description: "Forutse trender og mønstre i dine data for bedre strategiske beslutninger."
    },
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: "Databehandling",
      description: "Effektiv håndtering og analyse av store datamengder for verdifull innsikt."
    },
    {
      icon: <LineChart className="w-12 h-12 text-orange-500" />,
      title: "Forretningsintelligens",
      description: "Transformere rådata til handlingbar innsikt for bedre beslutninger."
    },
    {
      icon: <Server className="w-12 h-12 text-red-500" />,
      title: "Data Infrastruktur",
      description: "Bygge robuste systemer for datainnsamling, lagring og analyse."
    },
    {
      icon: <BrainCircuit className="w-12 h-12 text-yellow-500" />,
      title: "AI Optimalisering",
      description: "Forbedre eksisterende prosesser med skreddersydde AI-løsninger."
    }
  ];

  const benefits = [
    "Økt effektivitet og produktivitet",
    "Bedre beslutningsgrunnlag",
    "Reduserte kostnader",
    "Konkurransefortrinn",
    "Automatiserte prosesser",
    "Skalerbare løsninger"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            AI og Analyse Tjenester
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in [animation-delay:200ms]">
            Utnytt kraften i kunstig intelligens og avansert dataanalyse for å drive din virksomhet fremover
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white animate-fade-in [animation-delay:400ms]"
          >
            Kom i gang
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Våre AI og Analyse Tjenester
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-center text-xl text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Fordeler med AI og Analyse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-gray-800/30 p-4 rounded-lg"
              >
                <div className="h-2 w-2 bg-purple-500 rounded-full" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default AIAnalytics;