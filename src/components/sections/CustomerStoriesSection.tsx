import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const CustomerStoriesSection = () => {
  const stories = [
    {
      company: "Produksjonsbedrift",
      quote: "Vi reduserte nedetiden med 30% ved å implementere prediktivt vedlikehold i produksjonslinjen vår."
    },
    {
      company: "Logistikkfirma",
      quote: "Ruteoptimalisering og lagerautomatisering har spart oss hundretusenvis av kroner i året."
    }
  ];

  return (
    <section id="customer-stories" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Kundehistorier
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Slik har vi hjulpet våre kunder å oppnå suksess
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stories.map((story, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <h3 className="text-xl font-semibold text-white">{story.company}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 italic">"{story.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};