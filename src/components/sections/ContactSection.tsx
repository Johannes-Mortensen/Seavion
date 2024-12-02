import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle } from "lucide-react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isSupabaseConfigured()) {
      toast({
        title: "Systemfeil",
        description: "Kontaktskjemaet er ikke konfigurert ennå. Vennligst kontakt oss direkte via e-post eller telefon.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      toast({
        title: "Melding sendt!",
        description: "Vi tar kontakt med deg så snart som mulig.",
        duration: 5000,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Noe gikk galt",
        description: "Vennligst prøv igjen senere eller kontakt oss direkte.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const showConfigWarning = !isSupabaseConfigured();

  return (
    <section id="contact-section" className="py-20 bg-[#1a1f2c]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Kontakt oss
          </h2>
          
          {showConfigWarning && (
            <div className="mb-8 p-4 bg-yellow-900/20 border border-yellow-600/50 rounded-lg">
              <div className="flex items-center gap-2 text-yellow-500 mb-2">
                <AlertCircle className="h-5 w-5" />
                <p className="font-semibold">Utvikler-notat</p>
              </div>
              <p className="text-yellow-400/90 text-sm">
                Supabase er ikke konfigurert. Vennligst sett opp VITE_SUPABASE_URL og VITE_SUPABASE_ANON_KEY miljøvariabler.
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Navn"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#1E2432]/50 border-[#2A303C] text-white placeholder:text-gray-400 h-12 text-base"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="E-post"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#1E2432]/50 border-[#2A303C] text-white placeholder:text-gray-400 h-12 text-base"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-[#1E2432]/50 border-[#2A303C] text-white placeholder:text-gray-400 h-12 text-base"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Bedrift"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-[#1E2432]/50 border-[#2A303C] text-white placeholder:text-gray-400 h-12 text-base"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Din melding"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-[#1E2432]/50 border-[#2A303C] text-white placeholder:text-gray-400 min-h-[150px] text-base resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base font-medium transition-all duration-200 ease-in-out transform hover:translate-y-[-2px]"
              >
                {isSubmitting ? "Sender..." : "Send melding"}
              </Button>
            </form>

            {/* Contact Person */}
            <div className="flex flex-col items-center justify-center text-center space-y-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-[#1E2432]/80 border-2 border-blue-500/20" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Johannes Mortensen Flessen
                </h3>
                <p className="text-gray-400 mb-2">Daglig leder</p>
                <a 
                  href="mailto:johannesflessen@hotmail.no" 
                  className="text-gray-300 hover:text-blue-400 transition-colors block mb-2"
                >
                  johannesflessen@hotmail.no
                </a>
                <a 
                  href="tel:+47400599901" 
                  className="text-gray-300 hover:text-blue-400 transition-colors block"
                >
                  +47 400 59 901
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};