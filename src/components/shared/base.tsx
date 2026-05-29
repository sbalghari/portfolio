/* ------------------------- Base section function ----------------------- */
import { motion } from "framer-motion";

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-0 md:scroll-mt-10 lg:scroll-mt-20 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-display text-sm text-accent mb-2">{eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
