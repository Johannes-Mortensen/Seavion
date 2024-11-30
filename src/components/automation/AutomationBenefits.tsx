import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  { title: "Økt produktivitet", description: "Reduser manuelle oppgaver og frigjør tid for ansatte til mer verdiskapende arbeid." },
  { title: "Lavere kostnader", description: "Effektivisering av arbeidsprosesser og bedre ressursutnyttelse." },
  { title: "Bedre nøyaktighet", description: "Reduser risikoen for feil med presise, automatiserte løsninger." },
  { title: "Skalerbarhet", description: "Bygg løsninger som vokser med virksomheten din." },
  { title: "Konkurransefortrinn", description: "Raskere og smartere prosesser gir deg et forsprang i markedet." }
];

export const AutomationBenefits = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <div 
          key={index}
          className="p-6 rounded-lg bg-gray-800/30 backdrop-blur border border-gray-700 hover:bg-gray-700/30 transition-all"
        >
          <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
          <p className="text-gray-300">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};