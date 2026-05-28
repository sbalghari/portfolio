import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, MapPin, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  About,
  socialLinks,
  educationData,
  experienceData,
  projectsData,
  skillsData,
  navSections,
} from "@/data/portfolio";

/* ------------------------------- Nav -------------------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const y = window.scrollY + 120;
      for (const s of navSections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(s.id);
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => go("home")}
          className="font-display text-sm tracking-tight text-primary"
        >
          &lt;{About.name.split(" ")[0].toLowerCase()}/&gt;
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm transition-colors",
                active === s.id
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {s.label}
            </button>
          ))}
          <div className="ml-2"><ThemeToggle /></div>
        </nav>

        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navSections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => go(s.id)}
                  className={cn(
                    "text-left px-3 py-2 rounded-md text-sm",
                    active === s.id
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ----------------------------- Section ------------------------------ */
function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-display text-sm text-primary mb-2">{eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

/* ------------------------------ Hero -------------------------------- */
function Hero() {
  const titles = Object.values(About.titles);
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % titles.length), 2400);
    return () => clearInterval(id);
  }, [titles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm text-primary mb-4">// hello world</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            I'm <span className="text-primary">{About.name}</span>,
          </h1>
          <div className="h-10 md:h-12 mt-3 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={i}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="text-2xl md:text-3xl font-light text-accent absolute"
              >
                {titles[i]}
              </motion.p>
            </AnimatePresence>
          </div>
          <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
            {About.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition"
            >
              Get in Touch
            </button>
            <div className="flex items-center gap-3 ml-2">
              {socialLinks.map(({ icon: Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="justify-self-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl" />
            <div className="relative size-64 md:size-80 rounded-full border-2 border-primary/40 overflow-hidden bg-secondary grid place-items-center">
              <img src={About.picture} alt={About.name} className="size-full object-cover opacity-70" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- AboutSection ------------------------- */
function AboutSection() {
  return (
    <Section id="about" eyebrow="// about me" title="A bit about who I am">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-6 rounded-2xl border border-border bg-card">
          <p className="leading-relaxed text-card-foreground">{About.description}</p>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="size-4 text-primary" />
            <span>Skardu, GB, Pakistan</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="size-4 text-primary" />
            <span className="text-muted-foreground">Available for collaboration</span>
          </div>
          <div className="pt-3 flex gap-3">
            {socialLinks.map(({ icon: Icon, link, label }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* --------------------------- Timeline-ish --------------------------- */
function CardList({
  items,
}: {
  items: { title: string; subtitle: string; meta: string; body: string }[];
}) {
  return (
    <div className="grid gap-4">
      {items.map((it, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <h3 className="text-lg font-medium">{it.title}</h3>
            <span className="font-display text-xs text-primary">{it.meta}</span>
          </div>
          <p className="text-sm text-accent mb-2">{it.subtitle}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{it.body}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ----------------------------- Projects ----------------------------- */
const FILTERS = ["All", "Web", "Desktop", "Others"];
function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projectsData : projectsData.filter((p) => p.filter === filter);

  return (
    <Section id="projects" eyebrow="// projects" title="Things I've built">
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm border transition-colors",
              filter === f
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {shown.map((p) => (
          <motion.a
            key={p.Name}
            href={p.Link}
            target="_blank"
            rel="noreferrer noopener"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/60 transition-all"
          >
            <div className="aspect-video bg-secondary overflow-hidden">
              <img
                src={p.screenshot}
                alt={p.Name}
                className="size-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-lg font-medium">{p.Name}</h3>
                <ArrowUpRight className="size-4 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
              </div>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{p.Description}</p>
              <p className="font-display text-xs text-accent">{p.Technologies_used}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ Skills ------------------------------ */
function Skills() {
  return (
    <Section id="skills" eyebrow="// skills" title="My toolbox">
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skillsData).map(([cat, items]) => (
          <div key={cat} className="p-6 rounded-2xl border border-border bg-card">
            <h3 className="font-display text-sm text-primary mb-4">// {cat}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="size-4" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- Contact ------------------------------ */
function Contact() {
  return (
    <Section id="contact" eyebrow="// contact" title="Let's build something together">
      <div className="p-8 md:p-12 rounded-2xl border border-border bg-card text-center">
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Have a project in mind, a question, or just want to say hi? My inbox and DMs are open.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {socialLinks.map(({ icon: Icon, link, label }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-sm"
            >
              <Icon className="size-4" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------ Page -------------------------------- */
export default function OnePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <AboutSection />
        <Section id="education" eyebrow="// education" title="Where I'm learning">
          <CardList
            items={educationData.map((e) => ({
              title: e.name,
              subtitle: e.institution,
              meta: e.year,
              body: e.description,
            }))}
          />
        </Section>
        <Section id="experience" eyebrow="// experience" title="What I've been doing">
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
      <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {About.name}. Built with React & TailwindCSS.
      </footer>
    </div>
  );
}
