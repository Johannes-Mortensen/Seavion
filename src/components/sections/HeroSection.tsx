import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/ocean-bg.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 3D Cube */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] border-[2px] border-blue-400/30 transform rotate-[20deg] perspective-[1000px]">
          <div className="w-full h-full border-[2px] border-blue-400/30 transform -translate-z-[300px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl mb-6">
          Vi skaper verdi med data og kunstig intelligens
        </h1>
        <p className="text-gray-200 text-xl md:text-2xl mb-8 max-w-2xl">
          Fra innsikt til handling – smartere løsninger for enhver bedrift.
        </p>
        <div className="flex gap-4">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
          >
            Kom i gang
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent border-2 border-gray-300 text-white hover:bg-white/10 px-8 py-6 text-lg"
          >
            Les mer om oss
          </Button>
        </div>
      </div>
    </div>
  );
};