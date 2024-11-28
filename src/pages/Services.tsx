import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Våre Tjenester
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div 
            className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-8 hover:bg-gray-700/50 transition-all cursor-pointer"
            onClick={() => navigate("/services/ai-analytics")}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              AI og Dataanalyse
            </h3>
            <p className="text-gray-300 mb-6">
              Utnytt kraften i kunstig intelligens og avansert dataanalyse for å drive din virksomhet fremover.
            </p>
            <Button 
              variant="outline"
              onClick={() => navigate("/services/ai-analytics")}
              className="text-blue-400 border-blue-400 hover:bg-blue-400/10"
            >
              Les mer
            </Button>
          </div>
          
          {/* Placeholder for fremtidige tjenester */}
          <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Kommer snart
            </h3>
            <p className="text-gray-300">
              Flere spennende tjenester er under utvikling.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;