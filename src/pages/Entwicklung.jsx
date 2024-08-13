import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Entwicklung = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Softwareentwicklung</h1>
      <p className="text-xl text-gray-600 mb-12 text-center">
        Durch individuelle Softwareentwicklung kümmern wir uns um eine reibungslose Automatisierung Ihrer digitalen Geschäftsprozesse.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Webapps', description: 'Moderne, skalierbare Webanwendungen für Ihr Unternehmen.' },
          { title: 'Cloudengineering', description: 'Effiziente Cloud-Lösungen für maximale Flexibilität und Skalierbarkeit.' },
          { title: 'Containerisierung', description: 'Optimierte Anwendungsbereitstellung mit Docker und Kubernetes.' },
          { title: 'CI/CD', description: 'Automatisierte Entwicklungs- und Bereitstellungsprozesse für schnellere Markteinführung.' },
          { title: 'Individuelle Lösungen', description: 'Maßgeschneiderte Softwarelösungen für Ihre spezifischen Anforderungen.' },
          { title: 'Technologie-Beratung', description: 'Expertenwissen zur Auswahl und Implementierung der richtigen Technologien.' },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Entwicklung;