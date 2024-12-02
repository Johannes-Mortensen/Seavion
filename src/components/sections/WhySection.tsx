import { Brain, Sliders, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const WhySection = () => {
  const values = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "Ekspertise",
      description: "Vårt team består av spesialister innen dataanalyse, AI og bedriftsoptimalisering."
    },
    {
      icon: <Sliders className="w-12 h-12 text-green-500" />,
      title: "Tilpasning",
      description: "Vi skreddersyr hver løsning til dine spesifikke behov."
    },
    {
      icon: <LineChart className="w-12 h-12 text-purple-500" />,
      title: "Målbar verdi",
      description: "Vi leverer resultater som kan spores i økt produktivitet, reduserte kostnader og bærekraftige gevinster."
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact-section");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-section" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Hvorfor velge oss?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
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

        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Bli kjent med oss
          </h3>
          <p className="text-gray-300 mb-8">
            Vi ser frem til å bli din partner på reisen mot smartere løsninger og bedre resultater. 
            Ta kontakt med oss for å lære mer om hvordan vi kan hjelpe deg å lykkes.
          </p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={scrollToContact}
          >
            Kontakt oss
          </Button>
        </div>
      </div>
    </section>
  );
};