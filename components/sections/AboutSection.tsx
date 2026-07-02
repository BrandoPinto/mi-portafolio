"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const facts = [
  { icon: MapPin, label: "Arequipa, Perú · Remoto" },
  { icon: Briefcase, label: "Full Stack Developer, +4 años" },
  { icon: GraduationCap, label: "Ing. de Software" },
];

const factsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const factItem = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-xs"
          >
            <Card className="group relative aspect-square overflow-hidden p-0">
              <Image
                src="/assets/images/me.webp"
                alt="Retrato de Brando Pinto"
                fill
                sizes="320px"
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Card>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 8 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
              className="absolute -bottom-5 -right-5 rounded-xl2 border border-surface-border bg-surface px-4 py-3 shadow-soft"
            >
              <p className="font-mono text-[11px] text-ink-muted">status</p>
              <p className="font-body text-sm font-medium text-accent">
                Building in public
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              eyebrow="Sobre mí"
              title="Ingeniería con criterio de producto."
            />
            <div className="mt-6 flex flex-col gap-4 font-body text-base leading-relaxed text-ink-secondary">
              <p>
                Soy desarrollador full stack con foco en construir productos
                que se sienten tan bien como funcionan. Trabajo de cerca con
                equipos de diseño y producto para llevar ideas desde el
                boceto hasta producción, sin perder calidad en el camino.
              </p>
              <p>
                Me especializo en dashboards, sistemas de gestión y ERPs a
                medida: desde paneles de analítica en tiempo real hasta
                plataformas administrativas completas para distintos rubros
                e industrias.
              </p>
            </div>

            <motion.ul
              className="mt-8 flex flex-col gap-3"
              variants={factsContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {facts.map(({ icon: Icon, label }) => (
                <motion.li
                  key={label}
                  variants={factItem}
                  className="flex items-center gap-3 font-body text-sm text-ink"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-surface-border bg-surface text-accent transition-colors duration-300 hover:border-accent/40 hover:bg-accent/10">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
