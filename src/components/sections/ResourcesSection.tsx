import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Book, FileText, Mail } from "lucide-react";

export const ResourcesSection = () => {
  const { toast } = useToast();
  
  const resources = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "Hvordan AI transformerer produksjonsindustrien",
      type: "Artikkel"
    },
    {
      icon: <Book className="w-8 h-8 text-green-500" />,
      title: "5 måter dataanalyse kan gi konkurransefortrinn",
      type: "E-bok"
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Takk for påmeldingen!",
      description: "Du vil nå motta vårt nyhetsbrev med innsikt og nyheter.",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Ressurser
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all cursor-pointer"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                {resource.icon}
                <div>
                  <CardTitle className="text-white">{resource.title}</CardTitle>
                  <p className="text-sm text-gray-400">{resource.type}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Meld deg på vårt nyhetsbrev
            </h3>
            <p className="text-gray-300">
              Få innsikt og nyheter direkte i innboksen din
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="flex gap-4">
            <Input 
              type="email" 
              placeholder="Din e-postadresse" 
              className="bg-gray-800/50 border-gray-700 text-white"
              required
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              Meld på
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};