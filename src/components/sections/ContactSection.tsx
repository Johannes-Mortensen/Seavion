import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

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

      // Reset form
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
        description: "Vennligst prøv igjen senere.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Kontakt oss
          </h2>
          
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
                  className="bg-gray-800/30 border-gray-700 text-white placeholder:text-gray-400"
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
                  className="bg-gray-800/30 border-gray-700 text-white placeholder:text-gray-400"
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
                  className="bg-gray-800/30 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Bedrift"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-gray-800/30 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Din melding"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/30 border-gray-700 text-white placeholder:text-gray-400 min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isSubmitting ? "Sender..." : "Send melding"}
              </Button>
            </form>

            {/* Contact Person */}
            <div className="flex flex-col items-center justify-center space-y-6 bg-gray-800/30 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Johannes Mortensen Flessen
                </h3>
                <div className="flex flex-col items-center space-y-2">
                  <p className="text-gray-300">Daglig leder</p>
                  <p className="text-gray-300">johannesflessen@hotmail.no</p>
                  <p className="text-gray-300">+47 400 59 901</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};