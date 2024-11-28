import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail } from "lucide-react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Melding mottatt!",
      description: "Vi vil kontakte deg så snart som mulig.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Kontakt oss
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Ta kontakt med oss for en uforpliktende prat om hvordan vi kan hjelpe din bedrift.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-6">
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

          {/* Contact Person */}
          <div className="flex flex-col items-center justify-center space-y-6 bg-gray-800/30 rounded-lg p-8">
            <div className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-6">
                <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Contact Person" />
                <AvatarFallback>CP</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-semibold text-white mb-2">Johannes Mortensen Flessen</h3>
              <p className="text-gray-400 mb-4">Kundeansvarlig</p>
              <div className="flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                <Mail className="h-5 w-5" />
                <a href="mailto:johannes@seavion.no" className="text-lg">johannes@seavion.no</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};