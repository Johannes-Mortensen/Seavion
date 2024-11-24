import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Rocket, Timer, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler en kort lastetid
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="w-24 h-24 border-t-2 border-purple-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
      {/* Ocean Banner with Parallax Effect */}
      <div className="w-full h-[50vh] relative mb-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
          alt="Ocean waves"
          className="w-full h-full object-cover brightness-50 scale-105 hover:scale-100 transition-transform duration-700"
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
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed hover:text-white transition-colors duration-300">
          Vi hjelper bedrifter å implementere AI-løsninger som øker effektiviteten og gir konkurransefortrinn i dagens digitale verden.
        </p>
        <div className="text-center">
          <Button className="bg-purple-800 hover:bg-purple-900 text-lg px-8 py-6 shadow-lg shadow-purple-800/30 transition-all hover:scale-105 duration-300">
            Kom i gang <ArrowRight className="ml-2 animate-pulse" />
          </Button>
        </div>
      </section>

      {/* Benefits Section with Hover Effects */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-white hover:text-purple-300 transition-colors duration-300">
          Hvorfor velge AI?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Timer className="text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
                Økt Effektivitet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                Automatiser rutineoppgaver og frigjør verdifull tid for dine ansatte.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <TrendingUp className="text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
                Bedre Resultater
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                Få dypere innsikt i data og ta bedre beslutninger med AI-drevet analyse.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-700/50 transition-all hover:scale-105 duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Rocket className="text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
                Konkurransefortrinn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                Hold deg foran konkurrentene med innovative AI-løsninger.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Get Started with Glassmorphism */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-12 shadow-xl hover:bg-gray-700/50 transition-all duration-500">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Slik kommer du i gang</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
              <div className="bg-purple-800/20 p-4 rounded-xl group-hover:bg-purple-800/30 transition-colors duration-300">
                <Brain className="text-purple-400 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">1. Kartlegging</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  Vi analyserer din bedrifts behov og identifiserer områder hvor AI kan gi størst verdi.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
              <div className="bg-purple-800/20 p-4 rounded-xl group-hover:bg-purple-800/30 transition-colors duration-300">
                <Timer className="text-purple-400 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">2. Implementering</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  Vi hjelper deg med å velge og implementere de rette AI-løsningene for din bedrift.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
              <div className="bg-purple-800/20 p-4 rounded-xl group-hover:bg-purple-800/30 transition-colors duration-300">
                <TrendingUp className="text-purple-400 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">3. Opplæring og Oppfølging</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  Vi sørger for at dine ansatte får den nødvendige opplæringen og støtten de trenger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white hover:text-purple-300 transition-colors duration-300">
          Klar for å ta steget inn i fremtiden?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
          La oss hjelpe deg med å utnytte kraften i AI for å transformere din bedrift.
        </p>
        <Button className="bg-purple-800 hover:bg-purple-900 text-lg px-8 py-6 shadow-lg shadow-purple-800/30 transition-all hover:scale-105 duration-300">
          Book en gratis konsultasjon <ArrowRight className="ml-2 animate-pulse" />
        </Button>
      </section>
    </div>
  );
};

export default Index;