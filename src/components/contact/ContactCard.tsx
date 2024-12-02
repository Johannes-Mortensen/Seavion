export const ContactCard = () => {
  return (
    <div className="relative group">
      <div className="relative z-10 bg-white/[0.02] backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl transition-transform duration-300 group-hover:translate-y-[-4px]">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-white/10">
            <img 
              src="/lovable-uploads/969f07e9-583a-4fff-b8c9-b0d4a94b8246.png"
              alt="Johannes Mortensen Flessen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2c]/80 to-transparent" />
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-white">
              Johannes Mortensen Flessen
            </h3>
            <p className="text-blue-400 font-medium">Daglig leder</p>
            <a 
              href="mailto:johannesflessen@hotmail.no" 
              className="text-gray-300 hover:text-blue-400 transition-colors block"
            >
              johannesflessen@hotmail.no
            </a>
            <a 
              href="tel:+47400599901" 
              className="text-gray-300 hover:text-blue-400 transition-colors block"
            >
              +47 400 59 901
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl transition-all duration-300 group-hover:scale-105" />
    </div>
  );
};