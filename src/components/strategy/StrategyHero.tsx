import { Button } from "@/components/ui/button";

export const StrategyHero = ({ scrollToContact }: { scrollToContact: () => void }) => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
          Rådgivning og strategi
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in [animation-delay:200ms]">
          Din strategiske partner for fremtidens utfordringer
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in [animation-delay:400ms]">
          Vi hjelper bedrifter med å navigere komplekse beslutninger og bygge bærekraftige strategier for vekst gjennom datadrevet innsikt og teknologisk ekspertise.
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white animate-fade-in [animation-delay:600ms]"
        >
          Start din digitale reise i dag
        </Button>
      </div>
    </section>
  );
};