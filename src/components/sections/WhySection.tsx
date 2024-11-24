import { CheckSquare, Users, LineChart, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhySection = () => {
  const values = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "Innovasjon som drivkraft",
      description: "Vi utnytter cutting-edge teknologi for å skape smartere løsninger."
    },
    {
      icon: <CheckSquare className="w-12 h-12 text-green-500" />,
      title: "Bærekraft i praksis",
      description: "Våre løsninger bidrar til en mer ansvarlig og effektiv drift."
    },
    {
      icon: <LineChart className="w-12 h-12 text-purple-500" />,
      title: "Resultater som teller",
      description: "Vi fokuserer på målbare forbedringer som styrker din virksomhet."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Mennesker i sentrum",
      description: "Vi bygger bro mellom teknologi og menneskelige behov."
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Hva vi står for
        </h2>
        <p className="text-xl text-gray-300 text-center mb-4 max-w-3xl mx-auto">
          Hos Seavion tror vi på å skape verdi gjennom innovasjon og bærekraftige løsninger.
        </p>
        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          Seavion er et ledende konsulentfirma som spesialiserer seg på datadrevne løsninger og kunstig intelligens. Vi hjelper bedrifter i alle bransjer med å transformere sine prosesser, optimalisere ressursbruken og oppnå bærekraftige resultater.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300 group cursor-pointer"
            >
              <CardHeader>
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <CardTitle className="text-center text-xl text-white mb-2">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};