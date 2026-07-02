"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkle } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import MusicPlayer from "@/components/music/MusicPlayer";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface/60 px-3.5 py-1.5 font-mono text-xs text-ink-secondary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Disponible para nuevos proyectos
          </motion.div>

          <motion.p
            variants={item}
            className="mb-4 flex items-center gap-2.5 font-body text-lg text-ink-secondary"
          >
            <motion.span
              animate={{ rotate: [0, 22, -8, 22, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              className="inline-block text-2xl"
              style={{ transformOrigin: "70% 70%" }}
            >
              👋
            </motion.span>
            Hola, soy Brando
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[3.75rem]"
          >
            Construyo experiencias
            <br />
            digitales con{" "}
            <span className="relative inline-block text-accent">
              impacto real.
              <Sparkle className="absolute -right-7 -top-2 h-5 w-5 text-accent/70" />
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg font-body text-lg text-ink-secondary"
          >
            Full Stack Developer especializado en productos web y móviles
            modernos. Diseño y construyo interfaces rápidas, escalables y
            cuidadas hasta el último detalle.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <LinkButton href="#proyectos" size="lg">
              Ver proyectos
              <ArrowUpRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton href="/assets/documents/cv_brandopinto.pdf" variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
              Ver CV
              <ArrowUpRight className="h-4 w-4" />
            </LinkButton>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 grid w-full max-w-md grid-cols-3 gap-6 border-t border-surface-border pt-8"
          >
            <div>
              <p className="font-display text-2xl font-medium text-ink">+4</p>
              <p className="mt-1 font-body text-xs text-ink-muted">
                Años de experiencia
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-medium text-ink">40+</p>
              <p className="mt-1 font-body text-xs text-ink-muted">
                Proyectos entregados
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-medium text-ink">12</p>
              <p className="mt-1 font-body text-xs text-ink-muted">
                Equipos acompañados
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="hidden justify-self-center lg:flex lg:justify-self-end">
          <MusicPlayer />
        </div>
      </div>
    </section>
  );
}
