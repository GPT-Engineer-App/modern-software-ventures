import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Entwicklung from "./pages/Entwicklung";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
          <header className="p-4 bg-white shadow-sm">
            <nav className="container mx-auto flex justify-between items-center">
              <img src="/logo.svg" alt="EXWE Logo" className="h-8" />
              <div className="space-x-4">
                <Link to="/" className="text-gray-600 hover:text-gray-900">Unternehmen</Link>
                <Link to="/entwicklung" className="text-gray-600 hover:text-gray-900">Entwicklung</Link>
                <Link to="/e-commerce" className="text-gray-600 hover:text-gray-900">E-Commerce</Link>
                <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
                <Link to="/kontakt" className="text-gray-600 hover:text-gray-900">Kontakt</Link>
              </div>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/entwicklung" element={<Entwicklung />} />
            <Route path="/e-commerce" element={<UnderConstruction />} />
            <Route path="/blog" element={<UnderConstruction />} />
            <Route path="/kontakt" element={<UnderConstruction />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const UnderConstruction = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold mb-4">Under Construction</h1>
    <p className="text-xl">This page is coming soon. Please check back later!</p>
  </div>
);

export default App;