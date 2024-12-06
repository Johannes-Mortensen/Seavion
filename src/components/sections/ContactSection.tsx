import { ContactForm } from "@/components/contact/ContactForm";
import { ContactCard } from "@/components/contact/ContactCard";

export const ContactSection = () => {
  return (
    <section id="contact-section" className="relative py-24 overflow-hidden bg-[#1a1f2c]">
      <div className="container relative mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Kontakt oss
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="bg-white/[0.02] backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
              <ContactForm />
            </div>

            {/* Contact Card */}
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
};