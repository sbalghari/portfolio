/* --------------------------- Card list ------------------------------ */
import { motion } from "framer-motion";

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
            <span className="font-display text-xs px-2 py-1 rounded-md bg-accent/15 text-accent">
              {it.meta}
            </span>
          </div>
          <p className="text-sm text-primary mb-2">{it.subtitle}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {it.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
export default CardList;
