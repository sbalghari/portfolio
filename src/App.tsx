import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";

import Dock from "./sections/dock";
import MobileNav from "./sections/mobile_nav";
import Hero from "./sections/hero";
import AboutSection from "./sections/about";
import Section from "./sections/shared/base";
import CardList from "./sections/shared/cardsList";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Contact from "./sections/contact";

import { About, educationData, experienceData } from "@/data/portfolio";

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
              <Section
                id="education"
                eyebrow="// education"
                title="Where I'm learning"
              >
                <CardList
                  items={educationData.map((e) => ({
                    title: e.name,
                    subtitle: e.institution,
                    meta: e.year,
                    body: e.description,
                  }))}
                />
              </Section>
              <Section
                id="experience"
                eyebrow="// experience"
                title="What I've been doing"
              >
                <CardList
                  items={experienceData.map((e) => ({
                    title: e.position,
                    subtitle: e.company,
                    meta: e.year,
                    body: e.description,
                  }))}
                />
              </Section>
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
