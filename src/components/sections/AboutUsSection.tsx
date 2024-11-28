import { Users, Target, Award, Globe } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const AboutUsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      number: "50+",
      label: "Dedikerte eksperter"
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      number: "95%",
      label: "Kundetilfredshet"
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      number: "10+",
      label: "Års erfaring"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      number: "100+",
      label: "Vellykkede prosjekter"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Vår historie
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Med base i teknologihovedstaden Trondheim, utnytter Seavion den unike nærheten til NTNU og det ledende teknologimiljøet. Vi bygger bro mellom akademisk ekspertise og praktiske forretningsløsninger.
          </p>
          <p className="text-gray-400">
            Vår lokasjon i hjertet av Trondheim gir oss direkte tilgang til Norges fremste teknologiske kompetanse. Ved å kombinere NTNUs forskningskompetanse med vår praktiske erfaring, leverer vi innovative løsninger som skaper reell verdi for våre kunder. Fra små bedrifter til store konsern, er vårt mål å gjøre avansert teknologi tilgjengelig og nyttig for alle.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300">
              <CardHeader className="flex items-center justify-center">
                {stat.icon}
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-gray-400">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};