/* ----------------------------- Projects ----------------------------- */
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { projectsData } from "@/data/portfolio";
import Section from "../shared/base";
import { TAG_COLORS } from "@/lib/constants";
import { hashIdx } from "@/lib/utils";

const FILTERS = ["All", "Developer Tools", "Linux", "Others"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.filter === filter);

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
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="max-h-[900px] overflow-y-auto pr-2 -mr-2 scroll-smooth rounded-xl">
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
                    <FaGithub className="size-3.5" />
                    Source
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {p.Description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.Technologies_used.split(",").map((t) => {
                    const label = t.trim();
                    return (
                      <span
                        key={label}
                        className={cn(
                          "font-display text-[11px] px-2 py-1 rounded-md border",
                          TAG_COLORS[hashIdx(label)],
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
      </div>
    </Section>
  );
}
