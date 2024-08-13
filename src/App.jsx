import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Entwicklung from "./pages/Entwicklung";
import ECommerce from "./pages/ECommerce";
import Blog from "./pages/Blog";
import Kontakt from "./pages/Kontakt";

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
            <Route path="/e-commerce" element={<ECommerce />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;