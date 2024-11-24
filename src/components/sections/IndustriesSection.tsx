import { Factory, ShoppingCart, Cpu, Truck, Fish } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const IndustriesSection = () => {
  const industries = [
    {
      icon: <Factory className="w-12 h-12 text-blue-500" />,
      title: "Produksjon",
      description: "Optimalisering av driften med AI-baserte løsninger."
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-green-500" />,
      title: "Detaljhandel",
      description: "Økt salg og bedre kundereise gjennom datadrevet innsikt."
    },
    {
      icon: <Cpu className="w-12 h-12 text-purple-500" />,
      title: "Teknologi",
      description: "Innovative systemer for fremtidens bedrifter."
    },
    {
      icon: <Truck className="w-12 h-12 text-orange-500" />,
      title: "Logistikk",
      description: "Effektiviser og automatiser transport og lagring."
    },
    {
      icon: <Fish className="w-12 h-12 text-cyan-500" />,
      title: "Havbruk",
      description: "Optimalisering av oppdrettsanlegg og havbruk med AI-løsninger."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Løsninger tilpasset din bransje
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {industries.slice(0, 3).map((industry, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300 group cursor-pointer"
            >
              <CardHeader>
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <CardTitle className="text-center text-xl text-white mb-2">
                  {industry.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {industries.slice(3).map((industry, index) => (
            <Card 
              key={index + 3}
              className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300 group cursor-pointer"
            >
              <CardHeader>
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <CardTitle className="text-center text-xl text-white mb-2">
                  {industry.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};