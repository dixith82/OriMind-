import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import AboutProduct from "./pages/AboutProduct";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PostEditor from "./pages/admin/PostEditor";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => ( <HelmetProvider> <QueryClientProvider client={queryClient}> <TooltipProvider>

    <Helmet>

      <title>OriMind – Autonomous Intelligence Systems</title>

      <meta
        name="description"
        content="OriMind is a research and innovation company building autonomous AI systems like infinall.ai."
      />

      <meta property="og:title" content="OriMind AI Research" />
      <meta
        property="og:description"
        content="Discover infinall.ai – the autonomous AI execution engine."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://orimind.com" />
      <meta property="og:image" content="/og-image.png" />

      {/* Structured SEO Data */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "OriMind",
          "url": "https://orimind.com",
          "logo": "https://orimind.com/logo.png",
          "description": "OriMind is a research and innovation company building autonomous AI systems like infinall.ai.",
          "sameAs": [
            "https://twitter.com",
            "https://linkedin.com"
          ]
        }
        `}
      </script>

    </Helmet>

    <Toaster />
    <Sonner />

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Index />} />

        <Route path="/product" element={<AboutProduct />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/:slug" element={<BlogPost />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/admin/posts/:id" element={<PostEditor />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>

  </TooltipProvider>
</QueryClientProvider>

  </HelmetProvider>
);

export default App;
