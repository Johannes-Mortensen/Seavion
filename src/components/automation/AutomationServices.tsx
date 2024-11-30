import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Workflow, Bot, Network, Gauge } from "lucide-react";

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

export const AutomationServices = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <Card 
          key={index}
          className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all group"
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
  );
};