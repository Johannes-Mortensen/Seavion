import { Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Kontakt oss</h3>
            <div className="space-y-3">
              <a href="mailto:kontakt@seavion.no" className="flex items-center hover:text-blue-500 transition-colors">
                <Mail className="w-5 h-5 mr-2 text-blue-500" />
                <span>kontakt@seavion.no</span>
              </a>
              <a href="tel:+4712345678" className="flex items-center hover:text-blue-500 transition-colors">
                <Phone className="w-5 h-5 mr-2 text-blue-500" />
                <span>+47 123 45 678</span>
              </a>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                <span>Karl Johans gate 1, Oslo</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Tjenester</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigate('/tjenester/ai-analyse')}
                  className="hover:text-blue-500 transition-colors"
                >
                  AI og analyse
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/tjenester/automatisering')}
                  className="hover:text-blue-500 transition-colors"
                >
                  Automatisering
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/tjenester/strategi')}
                  className="hover:text-blue-500 transition-colors"
                >
                  Strategisk rådgivning
                </button>
              </li>
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