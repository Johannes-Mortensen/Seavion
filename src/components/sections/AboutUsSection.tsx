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
            Seavion ble grunnlagt med en visjon om å bygge bro mellom teknologi og menneskelige behov. Vi har siden vokst til å bli en betrodd partner for bedrifter som ønsker å ligge foran i en stadig mer datadrevet verden.
          </p>
          <p className="text-gray-400">
            Fra små bedrifter til store konsern, leverer vi skreddersydde løsninger som skaper verdi. Med et team av eksperter innen teknologi og forretningsutvikling, er vårt mål å gjøre data til din største konkurransefordel.
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