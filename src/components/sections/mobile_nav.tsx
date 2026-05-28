/* ------------------------- Mobile top nav (sm) ----------------------- */
import { Home as HomeIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navSections } from "@/data/portfolio";

import { NAV_ICONS } from "@/lib/constants";

function MobileNav() {
  const go = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  );
}
export default MobileNav;
