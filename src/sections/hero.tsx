/* ------------------------------ Hero -------------------------------- */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { About } from "@/data/portfolio";

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
              href={`mailto:${About.email}`}
              className="px-5 py-2.5 rounded-lg border border-accent/50 text-accent text-sm font-medium hover:bg-accent hover:text-accent-foreground transition inline-flex items-center gap-2"
            >
              <Mail className="size-4" /> Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;