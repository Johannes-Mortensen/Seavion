import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Brain, ChartBar, Database, Lock } from "lucide-react";

const AIAnalytics = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "Maskinlæring og AI",
      description: "Skreddersydde AI-modeller som lærer fra dine data og gir verdifull innsikt."
    },
    {
      icon: <ChartBar className="w-12 h-12 text-green-500" />,
      title: "Avansert Dataanalyse",
      description: "Omfattende analyse av store datamengder for å avdekke mønstre og trender."
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: "Dataintegrasjon",
      description: "Sømløs integrasjon av data fra ulike kilder for helhetlig analyse."
    },
    {
      icon: <Lock className="w-12 h-12 text-orange-500" />,
      title: "Sikker Datahåndtering",
      description: "Robust sikkerhet og personvern i alle ledd av datahåndteringen."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          AI og Dataanalyse
        </h1>
        
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Vi hjelper din bedrift med å utnytte kraften i kunstig intelligens og dataanalyse for å ta bedre beslutninger og oppnå konkurransefortrinn.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-8 hover:bg-gray-700/50 transition-all"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white text-center mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIAnalytics;