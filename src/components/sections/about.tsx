/* ----------------------------- AboutSection ------------------------- */
import { MapPin, Mail } from "lucide-react";
import { About, socialLinks } from "@/data/portfolio";

import Section from "../shared/base";

function AboutSection() {
  return (
    <Section id="about" eyebrow="// whoami" title="A bit about me">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-6 rounded-2xl border border-border bg-card">
          <ul className="space-y-3 text-card-foreground">
            {About.about_texts.map((b) => (
              <li key={b} className="flex items-start gap-3 leading-relaxed">
                <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="size-4 text-[hsl(22_99%_42%)] dark:text-[hsl(23_92%_75%)]" />
            <span>Skardu, GB, Pakistan</span>
          </div>
          <a
            href={`mailto:${About.email}`}
            className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
          >
            <Mail className="size-4 text-accent" />
            <span className="truncate">{About.email}</span>
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
export default AboutSection;
