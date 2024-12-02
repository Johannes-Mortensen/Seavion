import { LineChart, Brain, Workflow, ChartBar } from "lucide-react";

export const StrategyProcess = () => {
  const workProcess = [
    {
      icon: <LineChart className="w-8 h-8 text-purple-500" />,
      title: "Analyse",
      description: "Vi starter med å forstå dine mål, utfordringer og muligheter."
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "Utvikling av strategi",
      description: "Basert på innsikten, utvikler vi en detaljert plan som dekker dine behov."
    },
    {
      icon: <Workflow className="w-8 h-8 text-green-500" />,
      title: "Implementering",
      description: "Vi hjelper med å implementere strategien, fra teknologi til prosesser."
    },
    {
      icon: <ChartBar className="w-8 h-8 text-yellow-500" />,
      title: "Oppfølging",
      description: "Vi evaluerer resultatene og justerer strategien for å sikre at den leverer på lang sikt."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          Slik jobber vi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {workProcess.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center space-y-4 bg-gray-800/30 p-6 rounded-lg hover:bg-gray-700/30 transition-colors">
                <div className="flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};