/* ------------------------------ Skills ------------------------------ */
import { cn } from "@/lib/utils";
import { skillsData } from "@/data/portfolio";

import Section from "../shared/base";
import { TAG_COLORS, CAT_ACCENTS } from "@/lib/constants";
import { hashIdx } from "@/lib/utils";

function Skills() {
  return (
    <Section id="skills" eyebrow="// skills" title="My toolbox">
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skillsData).map(([cat, items], idx) => (
          <div
            key={cat}
            className="p-6 rounded-2xl border border-border bg-card"
          >
            <h3
              className={cn(
                "font-display text-sm mb-4",
                CAT_ACCENTS[idx % CAT_ACCENTS.length],
              )}
            >
              // {cat}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors",
                    TAG_COLORS[hashIdx(label)],
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
export default Skills;
