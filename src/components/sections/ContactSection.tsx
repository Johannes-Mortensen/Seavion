import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Image } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact-section" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Kontakt oss
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Navn"
                  className="bg-gray-800/30 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="E-post"
                  className="bg-gray-800/30 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Telefon"
                  className="bg-gray-800/30 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Bedrift"
                  className="bg-gray-800/30 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Din melding"
                  className="bg-gray-800/30 border-gray-700 text-white placeholder:text-gray-400 min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Send melding
              </Button>
            </div>

            {/* Contact Person */}
            <div className="flex flex-col items-center justify-center space-y-6 bg-gray-800/30 rounded-lg p-8">
              <div className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-6">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="Johannes Mortensen Flessen" />
                  <AvatarFallback>JMF</AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-semibold text-white mb-2 flex items-center justify-center gap-2">
                  Johannes Mortensen Flessen
                  <Image className="w-6 h-6 text-blue-500" />
                </h3>
                <div className="flex flex-col items-center space-y-2">
                  <p className="text-gray-300">Daglig leder</p>
                  <p className="text-gray-300">johannes@seavion.no</p>
                  <p className="text-gray-300">+47 922 90 601</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};