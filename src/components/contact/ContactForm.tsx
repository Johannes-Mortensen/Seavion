import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        type="text"
        name="name"
        placeholder="Navn"
        value={formData.name}
        onChange={handleChange}
        required
        className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-400 h-12"
      />
      <Input
        type="email"
        name="email"
        placeholder="E-post"
        value={formData.email}
        onChange={handleChange}
        required
        className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-400 h-12"
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Telefon"
        value={formData.phone}
        onChange={handleChange}
        required
        className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-400 h-12"
      />
      <Input
        type="text"
        name="company"
        placeholder="Bedrift"
        value={formData.company}
        onChange={handleChange}
        className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-400 h-12"
      />
      <Textarea
        name="message"
        placeholder="Din melding"
        value={formData.message}
        onChange={handleChange}
        required
        className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-400 min-h-[150px] resize-none"
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
      >
        {isSubmitting ? "Sender..." : "Send melding"}
      </Button>
    </form>
  );
};