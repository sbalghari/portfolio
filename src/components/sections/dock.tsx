/* ------------------------- Dock ----------------------- */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home as HomeIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { navSections } from "@/data/portfolio";
import { NAV_ICONS } from "@/lib/constants";

export default function Dock() {
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState<string | null>(null);
  const [showActiveLabel, setShowActiveLabel] = useState(true);

  useEffect(() => {
    setShowActiveLabel(true);
    const t = setTimeout(() => setShowActiveLabel(false), 1000);
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      // If user is near the bottom of the page, force-select the last section
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 80
      ) {
        setActive(navSections[navSections.length - 1].id);
        return;
      }
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
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

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
        const expanded = (isActive && showActiveLabel) || isHover;
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
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60",
            )}
          >
            <motion.span
              animate={{
                scale: isActive ? 1.25 : isHover ? 1.18 : 1,
                y: isActive || isHover ? -2 : 0,
              }}
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
                  className="pointer-events-none absolute left-full ml-2 px-2.5 py-1 rounded-md bg-card border border-border text-xs font-medium text-foreground whitespace-nowrap shadow-lg"
                >
                  {/* pointy arrow connecting to icon */}
                  <span
                    aria-hidden
                    className="absolute right-full top-1/2 -translate-y-1/2 size-2 rotate-45 bg-card border-l border-b border-border -mr-1"
                  />
                  {s.label}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        );
      })}

      <div className="h-px w-full bg-border my-1" />
      <div className="self-center">
        <ThemeToggle />
      </div>
    </motion.div>
  );
}
