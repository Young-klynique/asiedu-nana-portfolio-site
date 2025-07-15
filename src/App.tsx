
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FinancialLiteracyProject from "./pages/FinancialLiteracyProject";
import TextbookAnalysisProject from "./pages/TextbookAnalysisProject";
import BookCoverDesigns from "./pages/BookCoverDesigns";
import LayoutSamples from "./pages/LayoutSamples";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/financial-literacy" element={<FinancialLiteracyProject />} />
          <Route path="/projects/textbook-analysis" element={<TextbookAnalysisProject />} />
          <Route path="/book-covers" element={<BookCoverDesigns />} />
          <Route path="/layout-samples" element={<LayoutSamples />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
