import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Cpu, Workflow, Zap, Binary, Network, Factory, Gauge, Shield } from "lucide-react";

const Automation = () => {
  const services = [
    {
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      title: "Robotprosessautomatisering (RPA)",
      description: "Automatiser repeterende oppgaver og frigjør verdifull arbeidstid ved hjelp av programvareroboter.",
      examples: [
        "Automatisering av fakturahåndtering",
        "Dataoverføring mellom systemer",
        "Automatisk rapportgenerering"
      ]
    },
    {
      icon: <Workflow className="w-12 h-12 text-green-500" />,
      title: "Arbeidsflytautomatisering",
      description: "Strømlinjeform prosesser og reduser manuelle operasjoner med intelligent arbeidsflyt.",
      examples: [
        "Automatiserte godkjenningsprosesser",
        "Dokumenthåndtering og arkivering",
        "Kundehenvendelser og oppfølging"
      ]
    },
    {
      icon: <Cpu className="w-12 h-12 text-purple-500" />,
      title: "Intelligent Prosessautomatisering",
      description: "Kombiner AI og automatisering for smartere beslutninger og effektiv drift.",
      examples: [
        "Prediktiv vedlikeholdsplanlegging",
        "Automatisk kvalitetskontroll",
        "Intelligent dokumentanalyse"
      ]
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "API-integrasjon",
      description: "Koble sammen systemer og applikasjoner for sømløs datautveksling.",
      examples: [
        "Systemintegrasjon mellom CRM og ERP",
        "Automatisk datasynkronisering",
        "Sanntids informasjonsutveksling"
      ]
    },
    {
      icon: <Binary className="w-12 h-12 text-red-500" />,
      title: "Forretningslogikkautomatisering",
      description: "Implementer komplekse forretningsregler og beslutningsprosesser automatisk.",
      examples: [
        "Automatisk prisberegning",
        "Regeletterlevelse og compliance",
        "Kundesegmentering og målretting"
      ]
    },
    {
      icon: <Network className="w-12 h-12 text-indigo-500" />,
      title: "Nettverksautomatisering",
      description: "Effektiviser IT-infrastruktur og nettverksdrift gjennom automatisering.",
      examples: [
        "Automatisk nettverkskonfigurasjon",
        "Sikkerhetsoppdateringer",
        "Overvåking og feilretting"
      ]
    },
    {
      icon: <Factory className="w-12 h-12 text-orange-500" />,
      title: "Industriell Automatisering",
      description: "Moderniser produksjon og industriprosesser med smart automatisering.",
      examples: [
        "Produksjonslinjeoptimalisering",
        "Kvalitetskontroll og testing",
        "Energieffektivisering"
      ]
    },
    {
      icon: <Gauge className="w-12 h-12 text-cyan-500" />,
      title: "Ytelsesoptimalisering",
      description: "Automatiser overvåking og optimalisering av systemer og prosesser.",
      examples: [
        "Automatisk ressursallokering",
        "Ytelsesmåling og rapportering",
        "Kapasitetsplanlegging"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-emerald-500" />,
      title: "Sikkerhetsautomatisering",
      description: "Styrk cybersikkerheten med automatiserte sikkerhetsrutiner og overvåking.",
      examples: [
        "Automatisk trusselhåndtering",
        "Sikkerhetsrevisjoner",
        "Tilgangskontroll og logging"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Automatisering
        </h1>
        
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Vi hjelper din bedrift med å automatisere prosesser og øke effektiviteten gjennom innovative løsninger og moderne teknologi.
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
                <ul className="space-y-2 text-gray-300">
                  {service.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Automation;