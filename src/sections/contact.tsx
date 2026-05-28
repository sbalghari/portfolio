/* ----------------------------- Contact ------------------------------ */
import { Mail, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { About, socialLinks } from "@/data/portfolio";
import { TAG_COLORS } from "@/lib/constants";
import { hashIdx } from "@/lib/utils";
import Section from "./shared/base";

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="// contact"
      title="Let's build something together"
    >
      <div className="p-8 md:p-12 rounded-2xl border border-border bg-card text-center">
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Have a project in mind, a question, or just want to say hi? Drop me a
          line — my inbox and DMs are open.
        </p>
        <a
          href={`mailto:${About.email}`}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/30 hover:opacity-90 transition mb-6"
        >
          <Mail className="size-4" />
          {About.email}
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
                TAG_COLORS[hashIdx(label)],
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
export default Contact;
