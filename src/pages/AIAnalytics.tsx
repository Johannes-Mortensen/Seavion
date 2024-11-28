import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Brain, 
  LineChart, 
  MessageSquare, 
  Settings, 
  AlertTriangle, 
  Database, 
  Cpu, 
  Server,
  Leaf
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const AIAnalytics = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const services = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "Prediktiv Analyse",
      description: "Ved å bruke avanserte modeller og maskinlæring kan vi forutsi fremtidige resultater basert på historiske data. Dette hjelper bedrifter med å være proaktive i stedet for reaktive.",
      examples: [
        "Prediktivt vedlikehold i produksjon (redusere nedetid)",
        "Salgsprognoser basert på markedstrender",
        "Forutse kundeatferd for bedre målrettet markedsføring"
      ]
    },
    {
      icon: <LineChart className="w-12 h-12 text-green-500" />,
      title: "Avansert visualisering av data",
      description: "Gjør komplekse datasett enkle å forstå ved hjelp av visualiseringer som dashboards, grafer, og interaktive rapporter.",
      examples: [
        "Sanntidsmonitorering av produksjonslinjer",
        "Visualisering av logistikkflyt og lagerbevegelser",
        "Kundesegmentering basert på adferdsmønstre"
      ]
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-500" />,
      title: "Natural Language Processing (NLP)",
      description: "Automatiser prosesser ved å analysere og forstå tekstdata. Bruk språkanalyse til å generere innsikt eller forbedre kundeopplevelser.",
      examples: [
        "Chatbots for kundesupport",
        "Sentimentanalyse av kundeanmeldelser eller sosiale medier",
        "Automatisk klassifisering av e-poster og dokumenter"
      ]
    },
    {
      icon: <Settings className="w-12 h-12 text-orange-500" />,
      title: "Optimalisering og beslutningsstøtte",
      description: "Ved å bruke data til å simulere scenarier kan vi optimalisere ressursbruk og operasjoner.",
      examples: [
        "Optimalisering av produksjonslinjer for høyere effektivitet",
        "Ruteplanlegging i logistikk for lavere kostnader",
        "Anbefalingssystemer for produkter eller tjenester"
      ]
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-red-500" />,
      title: "Anomaly Detection (Avviksovervåking)",
      description: "Identifiser uvanlige mønstre i data for å oppdage problemer eller muligheter tidlig.",
      examples: [
        "Overvåking av sensordata i produksjon for å oppdage maskinfeil",
        "Avdekking av uvanlige transaksjoner for å hindre svindel",
        "Analyse av kundedata for å identifisere churn (kundeavgang)"
      ]
    },
    {
      icon: <Database className="w-12 h-12 text-cyan-500" />,
      title: "Datainnsamling og strukturering",
      description: "Vi hjelper bedrifter med å samle inn, rense og strukturere data for å sikre at de er klare for analyse.",
      examples: [
        "Integrasjon av data fra ulike kilder (CRM, ERP, sensorer)",
        "Oppsett av datastrukturer og pipelines for analyse",
        "Automatisert datainnsamling fra API-er eller sensorer"
      ]
    },
    {
      icon: <Cpu className="w-12 h-12 text-indigo-500" />,
      title: "AI-modellutvikling",
      description: "Skreddersydde AI-modeller for å løse spesifikke problemer i din virksomhet.",
      examples: [
        "Klassifisering av produkter eller tjenester for bedre sortimentstyring",
        "Automatiserte anbefalinger for kunder basert på tidligere kjøp",
        "Maskinlæring for å forbedre produksjonsutbytte"
      ]
    },
    {
      icon: <Server className="w-12 h-12 text-yellow-500" />,
      title: "Big Data-håndtering",
      description: "Vi gir deg verktøyene og infrastrukturen for å håndtere store datamengder effektivt.",
      examples: [
        "Skalerbar lagring og behandling av data for sanntidsanalyse",
        "Implementering av distribuerte dataplattformer som Hadoop eller Spark",
        "Effektiv dataoverføring og optimalisering av databruk"
      ]
    },
    {
      icon: <Leaf className="w-12 h-12 text-emerald-500" />,
      title: "Bærekraftsanalyse",
      description: "Bruk dataanalyse til å måle og redusere miljøpåvirkningen din.",
      examples: [
        "Analyse av karbonutslipp i produksjonskjeder",
        "Optimalisering av energibruk i driften",
        "Identifikasjon av leverandører med høye miljøkostnader"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          AI og Dataanalyse
        </h1>
        
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Vi kombinerer avansert teknologi med dyp fagkunnskap for å hjelpe din bedrift med å utnytte kraften i data og kunstig intelligens.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all group"
            >
              <CardHeader>
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-center text-xl text-white mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center leading-relaxed mb-4">
                  {service.description}
                </p>
                <Collapsible
                  open={openSection === service.title}
                  onOpenChange={() => setOpenSection(openSection === service.title ? null : service.title)}
                >
                  <CollapsibleTrigger className="w-full">
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      {openSection === service.title ? "Skjul eksempler" : "Vis eksempler"}
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4">
                    <ul className="space-y-2 text-gray-300">
                      {service.examples.map((example, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIAnalytics;