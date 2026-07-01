"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/data/skills";

const categoryLabel: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tooling: "Tooling",
  mobile: "Mobile",
  cloud: "Cloud",
};

export default function SkillsSection() {
  return (
    <section id="stack" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            eyebrow="Stack técnico"
            title="Herramientas que domino a diario."
            description="Un stack moderno enfocado en velocidad de desarrollo, tipado fuerte y experiencias de usuario cuidadas."
          />
        </motion.div>

        <div className="mt-14 flex flex-col gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="flex w-full items-center justify-between sm:w-56 sm:shrink-0">
                <span className="font-body text-sm font-medium text-ink">
                  {skill.name}
                </span>
                <span className="font-mono text-xs text-ink-muted sm:hidden">
                  {skill.level}%
                </span>
              </div>
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-surface">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.06, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 rounded-full bg-accent"
                />
              </div>
              <span className="hidden w-12 shrink-0 text-right font-mono text-xs text-ink-muted sm:block">
                {skill.level}%
              </span>
              <span className="hidden w-20 shrink-0 font-mono text-[11px] uppercase tracking-wide text-ink-muted lg:block">
                {categoryLabel[skill.category]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
