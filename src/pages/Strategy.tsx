import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Settings, Shield, LineChart, Users, ArrowRight, ChartBar, Workflow } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Strategy = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "Teknologistrategi",
      description: "Vi hjelper deg med å definere og implementere en teknologisk strategi som er i tråd med dine forretningsmål.",
      examples: [
        "Identifisere hvor kunstig intelligens kan gi størst verdi",
        "Utvikle en datadrevet beslutningskultur i bedriften",
        "Planlegging av teknologiinvesteringer for langsiktig vekst"
      ]
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-500" />,
      title: "Prosessoptimalisering",
      description: "Analyser og forbedr eksisterende prosesser for å øke effektiviteten og redusere kostnader.",
      examples: [
        "Kartlegging av ineffektive arbeidsflyter",
        "Design og implementering av nye, automatiserte prosesser",
        "Kontinuerlig forbedring for å holde deg konkurransedyktig"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Implementeringsstøtte",
      description: "Overgangen til ny teknologi kan være utfordrende. Vi gir veiledning og støtte gjennom hele implementeringsprosessen.",
      examples: [
        "Integrering av AI-løsninger i eksisterende systemer",
        "Oppfølging og opplæring for ansatte",
        "Håndtering av endringsmotstand i organisasjonen"
      ]
    },
    {
      icon: <ChartBar className="w-12 h-12 text-yellow-500" />,
      title: "Strategisk planlegging for bærekraft",
      description: "Skap en bærekraftig fremtid med løsninger som tar hensyn til både miljø og lønnsomhet.",
      examples: [
        "Analyse av karbonfotavtrykk og tiltak for å redusere utslipp",
        "Optimalisering av ressursbruk gjennom datadrevne løsninger",
        "Forberedelse på fremtidige reguleringer og krav"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Risikoanalyse og beslutningsstøtte",
      description: "Ta informerte beslutninger ved å bruke dataanalyse og simuleringer for å vurdere risiko og muligheter.",
      examples: [
        "Modellering av ulike scenarier for å vurdere langsiktig påvirkning",
        "Identifikasjon av kritiske risikoer og utvikling av risikoreduserende tiltak"
      ]
    }
  ];

  const workProcess = [
    {
      icon: <LineChart className="w-8 h-8 text-purple-500" />,
      title: "Analyse",
      description: "Vi starter med å forstå dine mål, utfordringer og muligheter."
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "Utvikling av strategi",
      description: "Basert på innsikten, utvikler vi en detaljert plan som dekker dine behov."
    },
    {
      icon: <Workflow className="w-8 h-8 text-green-500" />,
      title: "Implementering",
      description: "Vi hjelper med å implementere strategien, fra teknologi til prosesser."
    },
    {
      icon: <ChartBar className="w-8 h-8 text-yellow-500" />,
      title: "Oppfølging",
      description: "Vi evaluerer resultatene og justerer strategien for å sikre at den leverer på lang sikt."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rådgivning og strategi
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Din strategiske partner for fremtidens utfordringer
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Hva vi tilbyr
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Effektive løsninger starter med gode strategier. Hos Seavion hjelper vi bedrifter med å navigere komplekse beslutninger og bygge bærekraftige strategier for vekst.
            </p>
            <p className="text-lg text-gray-300">
              Vi forstår at hver bedrift er unik, og derfor leverer vi rådgivning og strategiske tjenester som er skreddersydd dine behov. Med ekspertise innen dataanalyse, AI og teknologi hjelper vi deg med å ta smartere valg og implementere løsninger som virkelig gjør en forskjell.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Hvordan vi kan hjelpe deg
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-center">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.examples.map((example, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-gray-400">
                        <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-purple-500" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Hvorfor velge oss?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Tverrfaglig ekspertise", description: "Vi kombinerer teknologisk og forretningsmessig kompetanse for helhetlige løsninger." },
              { title: "Tilpassede strategier", description: 'Ingen "one-size-fits-all". Vi skreddersyr våre løsninger for din bedrift.' },
              { title: "Målbare resultater", description: "Våre strategier er designet for å gi konkrete, målbare forbedringer." },
              { title: "Langsiktig samarbeid", description: "Vi jobber tett med deg for å sikre implementering og varig suksess." }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/30 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Slik jobber vi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {workProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
                {index < workProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Er du klar for å ta neste steg?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Kontakt oss for en strategisamtale
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/services")}
              className="border-white text-white hover:bg-white/10"
            >
              Utforsk hvordan vi kan hjelpe din bedrift
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Strategy;