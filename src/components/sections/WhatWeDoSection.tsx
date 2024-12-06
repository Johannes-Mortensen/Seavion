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

  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services-section');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="what-we-do-section" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hva gjør vi?
          </h2>
          <p className="text-xl text-gray-300">
            Vi hjelper bedrifter med å utnytte kraften i data og kunstig intelligens for å skape målbare resultater og konkurransefortrinn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-8 text-center hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Button
            size="lg"
            onClick={scrollToServices}
            className="bg-blue-600 hover:bg-blue-700 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Les mer om våre tjenester
          </Button>
        </div>
      </div>
    </section>
  );
};