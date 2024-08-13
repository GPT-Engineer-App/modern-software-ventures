import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Code, ShoppingCart, Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <header className="p-4 bg-white shadow-sm">
        <nav className="container mx-auto flex justify-between items-center">
          <img src="/logo.svg" alt="EXWE Logo" className="h-8" />
          <div className="space-x-4">
            {['Unternehmen', 'Entwicklung', 'E-Commerce', 'Blog', 'Kontakt'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
            ))}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Softwareentwicklung,<br />Digitalisierung &<br />E-Commerce.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            EXWE ist Ihr überregionaler IT-Dienstleister mit Standorten in Dortmund und Düsseldorf
          </p>
          <div className="flex justify-center space-x-8">
            {[
              { title: '100 % Leidenschaft', description: 'Wir sind Ideengeber, Experten und Expertinnen, Menschen, Spielkinder, Problemfinder und Problemlöser. So definieren wir Leidenschaft, Tag für Tag neu.' },
              { title: '+7 Jahre Erfahrung', description: 'Unsere erfahrenen Softwareentwickler erkennen potenzielle Risiken und Fehler frühzeitig. Das gewährleistet die Sicherheit und Zuverlässigkeit unserer Systeme.' },
              { title: '+100 zufriedene Kunden', description: 'Jeder erfolgreiche GoLive ist auch für uns auch immer eine Herzensangelegenheit, denn hinter jedem Projekt steht immer ein Team aus Entwicklern, die für Ihr Projekt brennen.' },
            ].map((item) => (
              <Card key={item.title} className="w-1/3">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

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
              {/* Add project cards here */}
            </TabsContent>
            {/* Add other TabsContent for different categories */}
          </Tabs>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Mit EXWE haben Sie einen langfristigen Partner an Ihrer Seite</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Code className="h-12 w-12 mb-4" />, title: 'Software Entwicklung', description: 'Durch individuelle Softwareentwicklung kümmern wir uns um eine reibungslose Automatisierung Ihrer digitalen Geschäftsprozesse.' },
              { icon: <ShoppingCart className="h-12 w-12 mb-4" />, title: 'E-Commerce & Onlineshops', description: 'EXWE digitalisiert Ihren Vertriebskanal. So entwickelt, optimiert und betreut EXWE B2B & B2C-Shopsysteme mit Shopware.' },
              { icon: <Globe className="h-12 w-12 mb-4" />, title: 'Web-Applications & Webentwicklung', description: 'In einer agilen Verfahrensweise programmieren unsere Softwareentwickler in enger Zusammenarbeit mit Ihrem Unternehmen individuelle Softwarelösungen.' },
              { icon: <ArrowRight className="h-12 w-12 mb-4" />, title: 'Digital Consulting', description: 'Mit unserer Expertise im Bereich der digitalen Transformation ist Ihr Unternehmen Ihrer Branche immer einen Schritt voraus.' },
            ].map((service) => (
              <Card key={service.title} className="text-center">
                <CardContent>
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-8 text-center">Sie suchen eine Softwarelösung?</h2>
          <p className="text-center mb-8">Wir lösen selbst komplexe Projekte mit Freude - denn wir leben und lieben Software.</p>
          <form className="max-w-md mx-auto">
            <Input className="mb-4" placeholder="Ihr Name" />
            <Input className="mb-4" type="email" placeholder="Ihre E-Mailadresse" />
            <Input className="mb-4" type="tel" placeholder="Ihre Telefonnummer" />
            <Button className="w-full">Jetzt mit uns über Ihr Projekt sprechen!</Button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">EXWE Individualsoftware</h3>
              <p>info@exwe.de</p>
              <p>+49 231 93149827</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Öffnungszeiten</h3>
              <p>Mo-Fr 09:00 - 18:00</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Standorte</h3>
              <p>Dortmund: Leierweg 13, 44137 Dortmund</p>
              <p>Düsseldorf: Lierenfelder Str. 51, 40231 Düsseldorf</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 EXWE. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;