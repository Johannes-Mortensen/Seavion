import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Ved hjelp av AI-løsningene har vi økt effektiviteten med 40% i produksjonen.",
      author: "Produksjonsleder",
      company: "Ledende produksjonsbedrift",
      rating: 5
    },
    {
      quote: "Skreddersydde løsninger som virkelig forstår våre behov i havbruksnæringen.",
      author: "Daglig leder",
      company: "Innovativt oppdrettsselskap",
      rating: 5
    },
    {
      quote: "Automatiseringen har revolusjonert måten vi håndterer logistikken på.",
      author: "Logistikksjef",
      company: "Stor transportbedrift",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Hva våre kunder sier
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Vi er stolte av å ha hjulpet mange bedrifter med deres digitale transformasjon. Her er noen av deres historier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300"
            >
              <CardHeader className="relative">
                <Quote className="w-10 h-10 text-blue-500 absolute -top-4 -left-2" />
                <div className="flex space-x-1 mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};