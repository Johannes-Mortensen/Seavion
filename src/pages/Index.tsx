import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Rocket, Timer, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Ocean Banner */}
      <div className="w-full h-[50vh] relative mb-20">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
          alt="Ocean waves"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-6xl font-bold text-white text-center mb-6">
              Transformér Din Bedrift med AI
            </h1>
            <p className="text-xl text-gray-200 text-center">
              Utnytt kraften i kunstig intelligens for å drive din virksomhet fremover
            </p>
          </div>
        </div>
      </div>

      {/* Main content section */}
      <section className="container mx-auto px-4 pb-20">
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed">
          Vi hjelper bedrifter å implementere AI-løsninger som øker effektiviteten og gir konkurransefortrinn i dagens digitale verden.
        </p>
        <div className="text-center">
          <Button className="bg-purple-800 hover:bg-purple-900 text-lg px-8 py-6 shadow-lg shadow-purple-800/30 transition-all hover:scale-105">
            Kom i gang <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Hvorfor velge AI?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Timer className="text-purple-400 group-hover:scale-110 transition-transform" />
                Økt Effektivitet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Automatiser rutineoppgaver og frigjør verdifull tid for dine ansatte. La AI håndtere repetitive oppgaver mens teamet ditt fokuserer på strategisk arbeid.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <TrendingUp className="text-purple-400 group-hover:scale-110 transition-transform" />
                Bedre Resultater
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Få dypere innsikt i data og ta bedre beslutninger med AI-drevet analyse. Utnytt maskinlæring for å avdekke skjulte mønstre og muligheter.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Rocket className="text-purple-400 group-hover:scale-110 transition-transform" />
                Konkurransefortrinn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Hold deg foran konkurrentene med innovative AI-løsninger. Vær først ute med å implementere fremtidens teknologi i din bransje.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-12 shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Slik kommer du i gang</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="flex items-start gap-6 group">
              <div className="bg-purple-800/20 p-4 rounded-xl">
                <Brain className="text-purple-400 w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">1. Kartlegging</h3>
                <p className="text-gray-300 leading-relaxed">
                  Vi analyserer din bedrifts behov og identifiserer områder hvor AI kan gi størst verdi. Sammen utvikler vi en skreddersydd strategi for din virksomhet.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-purple-800/20 p-4 rounded-xl">
                <Timer className="text-purple-400 w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">2. Implementering</h3>
                <p className="text-gray-300 leading-relaxed">
                  Vi hjelper deg med å velge og implementere de rette AI-løsningene for din bedrift. Vårt team sørger for en smidig overgang til nye systemer.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-purple-800/20 p-4 rounded-xl">
                <TrendingUp className="text-purple-400 w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">3. Opplæring og Oppfølging</h3>
                <p className="text-gray-300 leading-relaxed">
                  Vi sørger for at dine ansatte får den nødvendige opplæringen og støtten de trenger. Kontinuerlig oppfølging sikrer optimal utnyttelse av AI-verktøyene.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Klar for å ta steget inn i fremtiden?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          La oss hjelpe deg med å utnytte kraften i AI for å transformere din bedrift. Ta kontakt for en uforpliktende samtale.
        </p>
        <Button className="bg-purple-800 hover:bg-purple-900 text-lg px-8 py-6 shadow-lg shadow-purple-800/30 transition-all hover:scale-105">
          Book en gratis konsultasjon <ArrowRight className="ml-2" />
        </Button>
      </section>
    </div>
  );
};

export default Index;