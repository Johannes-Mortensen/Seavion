import { Brain, Cpu, LineChart, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const WhatWeDoSection = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: <LineChart className="w-12 h-12 text-blue-500" />,
      title: "Analyse",
      description: "Vi analyserer data for å avdekke innsikt og muligheter."
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "AI-utvikling",
      description: "Skreddersydde AI-løsninger for din virksomhet."
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      title: "Automatisering",
      description: "Effektivisering av prosesser og arbeidsflyt."
    },
    {
      icon: <Settings className="w-12 h-12 text-orange-500" />,
      title: "Optimalisering",
      description: "Kontinuerlig forbedring av ytelse og resultater."
    }
  ];

  return (
    <section id="what-we-do-section" className="py-20 bg-[#1a1f2c]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hva gjør vi?
          </h2>
          <p className="text-xl text-gray-300">
            Vi hjelper bedrifter med å utnytte kraften i data og kunstig intelligens for å skape målbare resultater og konkurransefortrinn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-6 text-center hover:bg-gray-700/50 transition-all"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate("/services")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Les mer om våre tjenester
          </Button>
        </div>
      </div>
    </section>
  );
};
