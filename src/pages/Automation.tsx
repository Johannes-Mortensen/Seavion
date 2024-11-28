import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RocketIcon, Bot, Workflow, Factory, Gauge, Network, Binary, Shield, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Automation = () => {
  const navigate = useNavigate();

  const benefits = [
    { title: "Økt produktivitet", description: "Reduser manuelle oppgaver og frigjør tid for ansatte til mer verdiskapende arbeid." },
    { title: "Lavere kostnader", description: "Effektivisering av arbeidsprosesser og bedre ressursutnyttelse." },
    { title: "Bedre nøyaktighet", description: "Reduser risikoen for feil med presise, automatiserte løsninger." },
    { title: "Skalerbarhet", description: "Bygg løsninger som vokser med virksomheten din." },
    { title: "Konkurransefortrinn", description: "Raskere og smartere prosesser gir deg et forsprang i markedet." }
  ];

  const services = [
    {
      icon: <Factory className="w-12 h-12 text-blue-500" />,
      title: "Automatisering av produksjonsprosesser",
      description: "Optimalisering av produksjonslinjer og prediktivt vedlikehold."
    },
    {
      icon: <Workflow className="w-12 h-12 text-green-500" />,
      title: "Intelligente arbeidsflyter",
      description: "Automatisering av administrative oppgaver og RPA-løsninger."
    },
    {
      icon: <Bot className="w-12 h-12 text-purple-500" />,
      title: "Automatisering av kundeservice",
      description: "AI-drevne chatbots og automatiserte kundehenvendelser."
    },
    {
      icon: <Network className="w-12 h-12 text-orange-500" />,
      title: "Logistikk og lagerstyring",
      description: "Automatiserte systemer for lagerhåndtering og ruteoptimalisering."
    },
    {
      icon: <Gauge className="w-12 h-12 text-cyan-500" />,
      title: "Integrering av IoT-enheter",
      description: "Sanntidsovervåking og automatiserte reaksjoner basert på sensordata."
    }
  ];

  const process = [
    { title: "Kartlegging av behov", description: "Vi starter med en grundig analyse av virksomheten din for å identifisere hvilke prosesser som kan automatiseres." },
    { title: "Design og utvikling", description: "Vi utvikler skreddersydde løsninger basert på din bransje, arbeidsflyt og mål." },
    { title: "Implementering", description: "Våre eksperter sørger for en sømløs integrering i dine eksisterende systemer." },
    { title: "Testing og optimalisering", description: "Vi tester løsningene nøye for å sikre at de fungerer som forventet, og optimaliserer dem for maksimal ytelse." },
    { title: "Oppfølging og støtte", description: "Vi tilbyr kontinuerlig støtte og vedlikehold for å sikre at løsningene leverer over tid." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-lg mb-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              alt="Automation Hero"
              className="w-full h-full object-cover brightness-[0.3] scale-105"
            />
          </div>
          <div className="relative z-10 px-8 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Automatisering – Skap effektivitet og frigjør ressurser
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in">
              Vi hjelper deg å automatisere prosesser for smartere og mer effektiv drift.
            </p>
            <Button 
              size="lg"
              onClick={() => {
                const contactSection = document.querySelector("#contact-section");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white animate-fade-in"
            >
              Start reisen mot smartere drift
            </Button>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-20 text-center">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            I dagens konkurransedrevne verden er automatisering nøkkelen til å redusere kostnader, 
            øke produktivitet og forbedre nøyaktigheten i arbeidsflyten. Enten du vil strømlinje 
            produksjonsprosesser, automatisere repetitive oppgaver, eller forbedre kundeservice med AI, 
            leverer vi skreddersydde løsninger som passer til dine behov.
          </p>
        </div>

        {/* Services Grid */}
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Hva vi tilbyr innen automatisering
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300 group"
            >
              <CardHeader>
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-center text-xl text-white mb-2">
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

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Fordelene med automatisering
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-gray-800/30 backdrop-blur border border-gray-700 hover:bg-gray-700/30 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Slik jobber vi med automatisering
          </h2>
          <div className="space-y-8">
            {process.map((step, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg bg-gray-800/30 backdrop-blur border border-gray-700"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Stories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Kundehistorier
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-gray-800/30 backdrop-blur border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Produksjonsbedrift</h3>
              <p className="text-gray-300 italic">
                "Vi reduserte nedetiden med 30 % ved å implementere prediktivt vedlikehold i produksjonslinjen vår."
              </p>
            </div>
            <div className="p-8 rounded-lg bg-gray-800/30 backdrop-blur border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Logistikkfirma</h3>
              <p className="text-gray-300 italic">
                "Ruteoptimalisering og lagerautomatisering har spart oss hundretusenvis av kroner i året."
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Automation;