export const AutomationProcess = () => {
  const process = [
    { title: "Kartlegging av behov", description: "Vi starter med en grundig analyse av virksomheten din for å identifisere hvilke prosesser som kan automatiseres." },
    { title: "Design og utvikling", description: "Vi utvikler skreddersydde løsninger basert på din bransje, arbeidsflyt og mål." },
    { title: "Implementering", description: "Våre eksperter sørger for en sømløs integrering i dine eksisterende systemer." },
    { title: "Testing og optimalisering", description: "Vi tester løsningene nøye for å sikre at de fungerer som forventet, og optimaliserer dem for maksimal ytelse." },
    { title: "Oppfølging og støtte", description: "Vi tilbyr kontinuerlig støtte og vedlikehold for å sikre at løsningene leverer over tid." }
  ];

  return (
    <div className="space-y-8">
      {process.map((step, index) => (
        <div 
          key={index}
          className="flex items-start space-x-4 p-6 rounded-lg bg-gray-800/30 backdrop-blur border border-gray-700"
        >
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            {index + 1}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};