import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Brain, Cpu, LineChart, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Tjenester = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "AI og Analyse",
      description: "Gjør data om til innsikt som skaper verdi.",
      link: "/tjenester/ai-analyse",
      features: [
        "Prediktiv analyse",
        "Maskinlæring",
        "Datavisualisering",
        "Forretningsintelligens"
      ]
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      title: "Automatisering",
      description: "Strømlinjeform dine prosesser for økt effektivitet.",
      link: "/tjenester/automatisering",
      features: [
        "Prosessautomatisering",
        "Arbeidsflytoptimalisering",
        "Systemintegrasjon",
        "Robotprosessautomatisering"
      ]
    },
    {
      icon: <LineChart className="w-12 h-12 text-blue-500" />,
      title: "Rådgivning og strategi",
      description: "Få ekspertråd om hvordan du best kan implementere og utnytte teknologi i din virksomhet.",
      link: "/tjenester/strategi",
      features: [
        "Digital transformasjon",
        "Teknologistrategi",
        "Implementeringsrådgivning",
        "Endringsledelse"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Våre Tjenester
          </h1>
          <p className="text-xl text-gray-300">
            Vi leverer skreddersydde løsninger som hjelper din bedrift å utnytte 
            potensialet i moderne teknologi.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-white text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => navigate(service.link)}
                  className="w-full mt-4 bg-purple-600 hover:bg-purple-700"
                >
                  Les mer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => {
              const contactSection = document.querySelector('#contact-section');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
          >
            Kontakt oss for en uforpliktende prat
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tjenester;