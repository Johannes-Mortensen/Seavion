import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const StrategyCTA = ({ scrollToContact }: { scrollToContact: () => void }) => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8 animate-fade-in">
          Er du klar for å ta neste steg?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:200ms]">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Kontakt oss for en strategisamtale
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/tjenester")}
            className="border-white text-white hover:bg-white/10"
          >
            Utforsk hvordan vi kan hjelpe din bedrift
          </Button>
        </div>
      </div>
    </section>
  );
};