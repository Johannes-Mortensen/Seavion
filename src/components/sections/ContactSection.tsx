import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Her kan du legge til logikk for å sende skjemadata
    toast({
      title: "Melding mottatt!",
      description: "Vi vil kontakte deg så snart som mulig.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Kontakt oss
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Ta kontakt med oss for en uforpliktende prat om hvordan vi kan hjelpe din bedrift.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Ditt navn"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Din e-postadresse"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
                required
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Din melding"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 min-h-[150px]"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
            >
              Send melding
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};