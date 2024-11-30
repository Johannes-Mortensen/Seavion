import { Brain, Cpu, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const ServicesSection = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "AI og Dataanalyse",
      description: "Gjør data om til innsikt som skaper verdi."
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      title: "Automatisering",
      description: "Strømlinjeform dine prosesser for økt effektivitet."
    },
    {
      icon: <LineChart className="w-12 h-12 text-purple-500" />,
      title: "Rådgivning og strategi",
      description: "Få eksperthjelp til å implementere og optimalisere teknologi."
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Tjenester som transformerer virksomheter
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300 cursor-pointer"
              onClick={() => navigate(`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`)}
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
  );
};