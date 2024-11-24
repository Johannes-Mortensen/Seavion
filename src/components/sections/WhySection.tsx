import { CheckSquare, Users, LineChart, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhySection = () => {
  const reasons = [
    {
      icon: <CheckSquare className="w-12 h-12 text-blue-500" />,
      title: "Tilpassede løsninger",
      description: "Løsninger som passer din bedrifts unike behov."
    },
    {
      icon: <Brain className="w-12 h-12 text-green-500" />,
      title: "Datadrevet innsikt",
      description: "Basert på avansert analyse og kunstig intelligens."
    },
    {
      icon: <LineChart className="w-12 h-12 text-purple-500" />,
      title: "Resultater som betyr noe",
      description: "Målbare forbedringer i produktivitet, kostnader og bærekraft."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Erfaring på tvers av bransjer",
      description: "Ekspertise som gir trygghet."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Din partner i vekst og innovasjon
        </h2>
        <p className="text-xl text-gray-300 text-center mb-4 max-w-3xl mx-auto">
          Vi leverer ikke bare løsninger, vi leverer resultater.
        </p>
        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          I en verden i rask endring trenger du en partner som ikke bare forstår dagens utfordringer, men som også kan hjelpe deg å forme morgendagens muligheter. Med vår unike kombinasjon av teknologisk ekspertise og bransjekunnskap, hjelper vi bedrifter med å oppnå målbare resultater gjennom innovative løsninger.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300 group cursor-pointer"
            >
              <CardHeader>
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <CardTitle className="text-center text-xl text-white mb-2">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};