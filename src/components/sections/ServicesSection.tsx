import { Brain, Cpu, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Tjenester som transformerer virksomheter
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-center text-2xl text-white mb-4">
                  {service.title}
                </CardTitle>
                <p className="text-gray-300 text-center mb-6">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{feature}</span>
                  </div>
                ))}
                <button
                  onClick={() => navigate(service.path)}
                  className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md transition-colors duration-300"
                >
                  Les mer
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};