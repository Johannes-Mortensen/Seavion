import { Brain, Settings, Shield, LineChart, Users, ArrowRight, ChartBar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const StrategyServices = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "Teknologistrategi",
      description: "Vi hjelper deg med å definere og implementere en teknologisk strategi som er i tråd med dine forretningsmål.",
      examples: [
        "Identifisere hvor kunstig intelligens kan gi størst verdi",
        "Utvikle en datadrevet beslutningskultur i bedriften",
        "Planlegging av teknologiinvesteringer for langsiktig vekst"
      ]
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-500" />,
      title: "Prosessoptimalisering",
      description: "Analyser og forbedr eksisterende prosesser for å øke effektiviteten og redusere kostnader.",
      examples: [
        "Kartlegging av ineffektive arbeidsflyter",
        "Design og implementering av nye, automatiserte prosesser",
        "Kontinuerlig forbedring for å holde deg konkurransedyktig"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Implementeringsstøtte",
      description: "Overgangen til ny teknologi kan være utfordrende. Vi gir veiledning og støtte gjennom hele implementeringsprosessen.",
      examples: [
        "Integrering av AI-løsninger i eksisterende systemer",
        "Oppfølging og opplæring for ansatte",
        "Håndtering av endringsmotstand i organisasjonen"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          Hvordan vi kan hjelpe deg
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-white text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-center">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.examples.map((example, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-gray-400">
                      <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-purple-500" />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};