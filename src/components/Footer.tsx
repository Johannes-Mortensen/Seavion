import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Kontakt oss</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-500" />
                <span>kontakt@seavion.no</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-500" />
                <span>+47 123 45 678</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                <span>Karl Johans gate 1, Oslo</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Tjenester</h3>
            <ul className="space-y-2">
              <li>AI og dataanalyse</li>
              <li>Automatisering</li>
              <li>Strategisk rådgivning</li>
              <li>Digital transformasjon</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Selskap</h3>
            <ul className="space-y-2">
              <li>Om oss</li>
              <li>Karriere</li>
              <li>Personvern</li>
              <li>Vilkår</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 Seavion. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
};