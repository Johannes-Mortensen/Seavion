import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUsSection = () => {
  return (
    <section id="about-section" className="py-20 bg-[#1a1f2c]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Vår historie
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Seavion ble grunnlagt av studenter fra NTNU, Norges fremste teknologiske universitet, med en visjon om å bruke den omfattende kompetansen fra ulike fagfelt ved NTNU for å løse komplekse problemstillinger og hjelpe bedrifter å implementere kraften i kunstig intelligens.
          </p>
          <p className="text-gray-400 mb-8">
            Med vår base i teknologihovedstaden Trondheim, utnytter vi nærhet til verdensledende forskningsmiljøer og banebrytende teknologi for å levere innovative AI-løsninger. Gjennom tverrfaglig samarbeid og tilgang til NTNU sitt brede spekter av ekspertise, utvikler vi løsninger som ikke bare adresserer dagens utfordringer, men også skaper varige verdier for fremtiden.
          </p>
          <p className="text-gray-400">
            Vårt mål er enkelt: å kombinere akademisk dybde med praktisk anvendelse for å hjelpe bedrifter å utnytte fantastisk teknologi som kunstig intelligens, og nå nye høyder gjennom smartere, mer effektive løsninger.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300">
          <CardContent className="p-8">
            <Quote className="w-12 h-12 text-blue-500 mb-6 mx-auto" />
            <blockquote className="text-xl text-gray-300 text-center italic mb-6">
              "Vi startet Seavion for å hjelpe bedrifter med å implementere og utnytte kraften i fantastisk teknologi som kunstig intelligens, for å skape smartere, mer effektive og fremtidsrettede løsninger."
            </blockquote>
            <p className="text-gray-400 text-center">
              - Grunnleggerne av Seavion
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};