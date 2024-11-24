import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Rocket, Timer, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Ocean Banner */}
      <div className="w-full h-[40vh] relative mb-16">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
          alt="Ocean waves"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center max-w-3xl mx-auto px-4">
            Transformér Din Bedrift med AI
          </h1>
        </div>
      </div>

      {/* Main content section */}
      <section className="container mx-auto px-4 pb-16">
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-center">
          Vi hjelper bedrifter å implementere AI-løsninger som øker effektiviteten og gir konkurransefortrinn i dagens digitale verden.
        </p>
        <div className="text-center">
          <Button className="bg-purple-800 hover:bg-purple-900 text-lg px-8 py-6">
            Kom i gang <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Hvorfor velge AI?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Timer className="text-purple-400" />
                Økt Effektivitet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Automatiser rutineoppgaver og frigjør verdifull tid for dine ansatte.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <TrendingUp className="text-purple-400" />
                Bedre Resultater
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Få dypere innsikt i data og ta bedre beslutninger med AI-drevet analyse.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Rocket className="text-purple-400" />
                Konkurransefortrinn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Hold deg foran konkurrentene med innovative AI-løsninger.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="container mx-auto px-4 py-16 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Slik kommer du i gang</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-gray-700 p-3 rounded-full">
              <Brain className="text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">1. Kartlegging</h3>
              <p className="text-gray-300">
                Vi analyserer din bedrifts behov og identifiserer områder hvor AI kan gi størst verdi.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gray-700 p-3 rounded-full">
              <Timer className="text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2. Implementering</h3>
              <p className="text-gray-300">
                Vi hjelper deg med å velge og implementere de rette AI-løsningene for din bedrift.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gray-700 p-3 rounded-full">
              <TrendingUp className="text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">3. Opplæring og Oppfølging</h3>
              <p className="text-gray-300">
                Vi sørger for at dine ansatte får den nødvendige opplæringen og støtten de trenger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Klar for å ta steget inn i fremtiden?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          La oss hjelpe deg med å utnytte kraften i AI for å transformere din bedrift.
        </p>
        <Button className="bg-purple-800 hover:bg-purple-900 text-lg px-8 py-6">
          Book en gratis konsultasjon <ArrowRight className="ml-2" />
        </Button>
      </section>
    </div>
  );
};

export default Index;