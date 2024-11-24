import { Brain, Cpu, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "AI og dataanalyse",
      description: "Vi bruker data for å avdekke muligheter og forbedre ytelsen i hele verdikjeden."
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      title: "Automatisering",
      description: "Automatiser repeterende oppgaver og øk effektiviteten i din virksomhet."
    },
    {
      icon: <LineChart className="w-12 h-12 text-orange-500" />,
      title: "Strategisk rådgivning",
      description: "Skap bærekraftige og fremtidsrettede løsninger med vår ekspertise."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Smartere løsninger for smartere bedrifter
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300 group"
            >
              <CardHeader>
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <CardTitle className="text-center text-xl text-white mb-2">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};