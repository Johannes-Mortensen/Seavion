import { Brain, Cpu, LineChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "AI og Analyse",
      description: "Gjør data om til innsikt som skaper verdi.",
      features: [
        "Prediktiv analyse",
        "Maskinlæring",
        "Datavisualisering",
        "Forretningsintelligens"
      ],
      path: "/tjenester/ai-analyse"
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      title: "Automatisering",
      description: "Strømlinjeform dine prosesser for økt effektivitet.",
      features: [
        "Prosessautomatisering",
        "Arbeidsflytoptimalisering",
        "Systemintegrasjon",
        "Robotprosessautomatisering"
      ],
      path: "/tjenester/automatisering"
    },
    {
      icon: <LineChart className="w-12 h-12 text-blue-500" />,
      title: "Rådgivning og strategi",
      description: "Få ekspertråd om hvordan du best kan implementere og utnytte teknologi i din virksomhet.",
      features: [
        "Digital transformasjon",
        "Teknologistrategi",
        "Implementeringsrådgivning",
        "Endringsledelse"
      ],
      path: "/tjenester/strategi"
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Våre Tjenester
        </h2>
        
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Vi leverer skreddersydde løsninger som hjelper din bedrift å utnytte potensialet i moderne teknologi.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-8 hover:bg-gray-700/50 transition-all"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="text-purple-500 mr-2">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => navigate(service.path)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Les mer
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => {
              const contactSection = document.querySelector('#contact-section');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
          >
            Kontakt oss for en uforpliktende prat
          </Button>
        </div>
      </div>
    </section>
  );
};