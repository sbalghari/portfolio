import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, MapPin, Mail, Github, ExternalLink,
  Home as HomeIcon, User, GraduationCap, Briefcase, FolderGit2, Wrench, MessageSquare,
} from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import Particles from "@/components/Particles";
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

const EMAIL = "sbalghari@proton.me";

/* Catppuccin accent palette for tags — darker text in light (Latte), softer in dark (Mocha) */
const TAG_COLORS = [
  // mauve
  "bg-[hsl(266_85%_58%/0.18)] text-[hsl(266_85%_28%)] border-[hsl(266_85%_42%/0.65)] dark:bg-[hsl(267_84%_81%/0.15)] dark:text-[hsl(267_84%_81%)] dark:border-[hsl(267_84%_81%/0.4)]",
  // sky / sapphire
  "bg-[hsl(197_97%_46%/0.18)] text-[hsl(197_97%_20%)] border-[hsl(197_97%_32%/0.65)] dark:bg-[hsl(189_71%_73%/0.15)] dark:text-[hsl(189_71%_73%)] dark:border-[hsl(189_71%_73%/0.4)]",
  // green
  "bg-[hsl(109_58%_40%/0.18)] text-[hsl(109_58%_18%)] border-[hsl(109_58%_28%/0.65)] dark:bg-[hsl(115_54%_76%/0.15)] dark:text-[hsl(115_54%_76%)] dark:border-[hsl(115_54%_76%/0.4)]",
  // pink
  "bg-[hsl(316_72%_50%/0.18)] text-[hsl(316_72%_26%)] border-[hsl(316_72%_38%/0.65)] dark:bg-[hsl(316_72%_86%/0.15)] dark:text-[hsl(316_72%_86%)] dark:border-[hsl(316_72%_86%/0.4)]",
  // yellow
  "bg-[hsl(35_77%_45%/0.2)] text-[hsl(35_90%_22%)] border-[hsl(35_77%_32%/0.65)] dark:bg-[hsl(41_86%_83%/0.15)] dark:text-[hsl(41_86%_83%)] dark:border-[hsl(41_86%_83%/0.4)]",
  // peach
  "bg-[hsl(22_99%_52%/0.18)] text-[hsl(22_99%_26%)] border-[hsl(22_99%_38%/0.65)] dark:bg-[hsl(23_92%_75%/0.15)] dark:text-[hsl(23_92%_75%)] dark:border-[hsl(23_92%_75%/0.4)]",
  // teal
  "bg-[hsl(183_74%_35%/0.18)] text-[hsl(183_74%_16%)] border-[hsl(183_74%_25%/0.65)] dark:bg-[hsl(170_57%_73%/0.15)] dark:text-[hsl(170_57%_73%)] dark:border-[hsl(170_57%_73%/0.4)]",
  // blue
  "bg-[hsl(220_91%_54%/0.18)] text-[hsl(220_91%_28%)] border-[hsl(220_91%_40%/0.65)] dark:bg-[hsl(217_92%_76%/0.15)] dark:text-[hsl(217_92%_76%)] dark:border-[hsl(217_92%_76%/0.4)]",
];
const hashIdx = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h % TAG_COLORS.length;
};

/* ----------------------------- Side Dock ----------------------------- */
const NAV_ICONS: Record<string, typeof HomeIcon> = {
  home: HomeIcon,
  about: User,
  education: GraduationCap,
  experience: Briefcase,
  projects: FolderGit2,
  skills: Wrench,
  contact: MessageSquare,
};

function Dock() {
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
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

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-start gap-1.5 p-2 rounded-2xl bg-card/70 backdrop-blur-xl border border-border shadow-2xl shadow-primary/10"
    >
      {navSections.map((s) => {
        const isActive = active === s.id;
        const isHover = hovered === s.id;
        const expanded = isActive || isHover;
        const Icon = NAV_ICONS[s.id] ?? HomeIcon;
        return (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "relative flex items-center justify-center size-11 rounded-xl transition-colors",
              isActive
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
            )}
          >
            <motion.span
              animate={{ scale: isActive ? 1.25 : isHover ? 1.18 : 1, y: isActive || isHover ? -2 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="grid place-items-center"
            >
              <Icon className="size-[18px]" />
            </motion.span>
            <AnimatePresence>
              {expanded && (
                <motion.span
                  key="label"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="pointer-events-none absolute left-full ml-3 px-2.5 py-1 rounded-md bg-card border border-border text-xs font-medium text-foreground whitespace-nowrap shadow-lg"
                >
                  {s.label}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        );
      })}

      <div className="h-px w-full bg-border my-1" />
      <div className="self-center"><ThemeToggle /></div>
    </motion.div>
  );
}

/* ------------------------- Mobile top nav (sm) ----------------------- */
function MobileNav() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <div className="md:hidden fixed top-3 inset-x-3 z-50 flex items-center gap-1 px-2 py-2 rounded-2xl bg-card/80 backdrop-blur-xl border border-border overflow-x-auto">
      {navSections.map((s) => {
        const Icon = NAV_ICONS[s.id] ?? HomeIcon;
        return (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60"
            aria-label={s.label}
          >
            <Icon className="size-4" />
          </button>
        );
      })}
      <div className="ml-auto"><ThemeToggle /></div>
    </div>
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
          <p className="font-display text-sm text-accent mb-2">{eyebrow}</p>
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
          <p className="font-display text-sm text-accent mb-4">// hello world</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            I'm{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-[hsl(316_72%_50%)] dark:to-[hsl(316_72%_86%)] bg-clip-text text-transparent">
              {About.name}
            </span>
            ,
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
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-lg shadow-primary/30"
            >
              View My Work
            </button>
            <a
              href={`mailto:${EMAIL}`}
              className="px-5 py-2.5 rounded-lg border border-accent/50 text-accent text-sm font-medium hover:bg-accent hover:text-accent-foreground transition inline-flex items-center gap-2"
            >
              <Mail className="size-4" /> Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="justify-self-center"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary/30 via-accent/30 to-[hsl(316_72%_86%/0.3)] blur-3xl animate-pulse" />
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
            <MapPin className="size-4 text-[hsl(22_99%_42%)] dark:text-[hsl(23_92%_75%)]" />
            <span>Skardu, GB, Pakistan</span>
          </div>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
            <Mail className="size-4 text-accent" />
            <span className="truncate">{EMAIL}</span>
          </a>
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

/* ---------------------------- Timeline ------------------------------ */
function Timeline({
  items,
}: {
  items: { title: string; subtitle: string; meta: string; body: string }[];
}) {
  return (
    <div className="relative pl-8 md:pl-10">
      {/* vertical line */}
      <div className="absolute left-2.5 md:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
      <div className="space-y-6">
        {items.map((it, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="relative"
          >
            {/* dot */}
            <span className="absolute -left-[26px] md:-left-[30px] top-5 grid place-items-center">
              <span className="size-3 rounded-full bg-primary ring-4 ring-primary/20" />
            </span>
            <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-lg font-medium">{it.title}</h3>
                <span className="font-display text-xs px-2 py-1 rounded-md bg-accent/15 text-accent border border-accent/30">
                  {it.meta}
                </span>
              </div>
              <p className="text-sm text-primary mb-2">{it.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- Card list ------------------------------ */
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
            <span className="font-display text-xs px-2 py-1 rounded-md bg-accent/15 text-accent">{it.meta}</span>
          </div>
          <p className="text-sm text-primary mb-2">{it.subtitle}</p>
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
          <motion.div
            key={p.Name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/60 transition-all"
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
                <a
                  href={p.Link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`View ${p.Name} source code`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium shadow-md shadow-primary/30 hover:opacity-90 hover:-translate-y-0.5 transition-all"
                >
                  <Github className="size-3.5" />
                  Source
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.Description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.Technologies_used.split(",").map((t) => {
                  const label = t.trim();
                  return (
                    <span
                      key={label}
                      className={cn(
                        "font-display text-[11px] px-2 py-1 rounded-md border",
                        TAG_COLORS[hashIdx(label)]
                      )}
                    >
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ Skills ------------------------------ */
const CAT_ACCENTS = [
  "text-[hsl(266_85%_42%)] dark:text-[hsl(267_84%_81%)]",
  "text-[hsl(197_97%_32%)] dark:text-[hsl(189_71%_73%)]",
  "text-[hsl(109_58%_28%)] dark:text-[hsl(115_54%_76%)]",
  "text-[hsl(22_99%_38%)] dark:text-[hsl(23_92%_75%)]",
];
function Skills() {
  return (
    <Section id="skills" eyebrow="// skills" title="My toolbox">
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skillsData).map(([cat, items], idx) => (
          <div key={cat} className="p-6 rounded-2xl border border-border bg-card">
            <h3 className={cn("font-display text-sm mb-4", CAT_ACCENTS[idx % CAT_ACCENTS.length])}>// {cat}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors",
                    TAG_COLORS[hashIdx(label)]
                  )}
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
          Have a project in mind, a question, or just want to say hi? Drop me a line — my inbox and DMs are open.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/30 hover:opacity-90 transition mb-6"
        >
          <Mail className="size-4" />
          {EMAIL}
          <ExternalLink className="size-3.5" />
        </a>
        <div className="flex flex-wrap justify-center items-center gap-3">
          {socialLinks.map(({ icon: Icon, link, label }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm transition-colors",
                TAG_COLORS[hashIdx(label)]
              )}
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
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Particles />
      <Dock />
      <MobileNav />
      <main className="pb-24 md:pl-20">
        <Hero />
        <AboutSection />
        <Section id="education" eyebrow="// education" title="Where I'm learning">
          <Timeline
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
      <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground md:pl-20">
        © {new Date().getFullYear()} {About.name} ·{" "}
        <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">{EMAIL}</a>
      </footer>
    </div>
  );
}
