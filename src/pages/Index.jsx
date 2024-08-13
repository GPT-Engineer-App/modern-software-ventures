import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Code, ShoppingCart, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Produktkonfigurator & Vertriebstool",
      company: "Atlas Copco Kompressoren",
      description: "Für einen international agierenden Hersteller von Kompressor-Technik haben wir ein modernes, webbasiertes Softwaretool entwickelt, das die internen Vertriebsprozesse vereinfacht. Highlight unserer individuellen Multi-User System Software ist der Anlagenkonfigurator, der die Zusammenstellung passender Komponenten komfortabel ermöglicht.",
      image: "https://www.exwe.de/assets/testimonials/atlas_copco_kompressoren_vertriebstool_mockup.jpg"
    },
    {
      title: "Intranet Plattform",
      company: "DECATHLON Deutschland",
      description: "DECATHLON hat uns mit der Umsetzung einer Intranet Kommunikationsplattform beauftragt. Das Tool regt zum Dialog zwischen allen Mitarbeitern in ganz Deutschland an und fördert damit sowohl den Erfahrungsaustausch als auch das Betriebsklima.",
      image: "https://www.exwe.de/assets/sportfachgeschaeft_startseite_blogartikel_mockup_tablet%20Kopie.jpg?k=softwareentwicklung"
    },
    {
      title: "Vergabeplattform für die Regionale 2025",
      company: "Südwestfalenagentur",
      description: "Durch die Entwicklung einer Qualifizierungsplattform für die Südwestfalen Agentur GmbH können Projektanträge ganz einfach eingereicht, bearbeitet und geprüft werden. Gleichzeitig funktioniert unsere Individualsoftware als Kommunikationsplattform für Agentur und Projektpartner.",
      image: "https://www.exwe.de/assets/testimonials/regionale_2025_startseite_mockup_tablet_phone_shadow.jpg"
    },
    {
      title: "Dashboard für Gebäudeprüfungen",
      company: "DPS - Das Prüfunternehmen",
      description: "Die Deutsche Prüfservice GmbH, kurz DPS genannt, ist der führende Technologiedienstleister für elektrische Betriebssicherheit und Arbeitsschutz. Wir haben speziell für DPS ein Dashboard für die Gebäudeprüfung programmiert.",
      image: "https://www.exwe.de/assets/testimonials/das_pruefunternehmen_dps_tool_mockup.jpg"
    },
    {
      title: "Seminartool",
      company: "TU Dortmund",
      description: "Für die Fakultät Wirtschaftswissenschaften der Technische Universität Dortmund haben wir ein faires und effizientes Seminartool entwickelt, welches die Auslosungen der Seminare im Vergleich zum vorherigen händischen Prozess, vereinfacht und beschleunigt.",
      image: "https://www.exwe.de/assets/testimonials/tu_dortmund_seminarverwatung_tool_anmeldung_mockup.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      {/* Header and navigation remain the same */}
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero section remains the same */}
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Unsere Referenzen - Ein Auszug aktueller Projekte</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">Alle</TabsTrigger>
              <TabsTrigger value="software">Software</TabsTrigger>
              <TabsTrigger value="ecommerce">E-Commerce</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="animate-on-scroll opacity-0 transition-all duration-500 ease-out transform translate-y-10">
                    <CardContent className="p-0">
                      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-2">{project.company}</p>
                        <p className="text-sm">{project.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            {/* Add other TabsContent for different categories */}
          </Tabs>
        </section>

        {/* Services section remains the same */}
        
        {/* Contact form section remains the same */}
      </main>

      {/* Footer remains the same */}
    </div>
  );
};

export default Index;