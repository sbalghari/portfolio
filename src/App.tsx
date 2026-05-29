import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";

import Dock from "./components/sections/dock";
import MobileNav from "./components/sections/mobile_nav";
import Hero from "./components/sections/hero";
import AboutSection from "./components/sections/about";
import Projects from "./components/sections/projects";
import Skills from "./components/sections/skills";
import Contact from "./components/sections/contact";
import Education from "./components/sections/education";
import Experience from "./components/sections/experience";

import ParticlesBackground from "./components/ParticlesBackground";

import { About } from "@/data/portfolio";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
            <Dock />
            <MobileNav />
            <main className="pb-24 md:pl-20">
              <Hero />
              <AboutSection />
              <Education />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </main>
            <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground md:pl-20">
              © {new Date().getFullYear()} {About.name} ·{" "}
              <a
                href={`mailto:${About.email}`}
                className="hover:text-primary transition-colors"
              >
                {About.email}
              </a>
            </footer>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
