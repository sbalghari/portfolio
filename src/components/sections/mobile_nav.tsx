/* ------------------------- Mobile bottom nav (sm) ----------------------- */
import { useEffect, useState } from "react";
import { Home as HomeIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { navSections } from "@/data/portfolio";
import { NAV_ICONS } from "@/lib/constants";

export default function MobileNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
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
    <div className="md:hidden fixed bottom-3 inset-x-3 z-50 flex items-center gap-1 px-2 py-2 rounded-2xl bg-card/80 backdrop-blur-xl border border-border shadow-2xl shadow-primary/10 overflow-x-auto">
      {navSections.map((s) => {
        const Icon = NAV_ICONS[s.id] ?? HomeIcon;
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            className={cn(
              "p-2 rounded-lg transition-colors",
              isActive
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60",
            )}
            aria-label={s.label}
          >
            <Icon className="size-4" />
          </button>
        );
      })}
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  );
}
