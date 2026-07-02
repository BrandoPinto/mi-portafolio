"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-2xl font-medium text-ink">
              ¿Construimos algo juntos?
            </p>
            <motion.a
              href="mailto:bpintochecya@gmail.com"
              className="mt-2 inline-flex items-center gap-1.5 font-body text-ink-secondary transition-colors hover:text-accent"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.15 }}
            >
              bpintochecya@gmail.com
              <motion.span
                whileHover={{ x: 2, y: -2 }}
                transition={{ duration: 0.15 }}
                className="inline-flex"
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-6"
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="font-body text-sm text-ink-secondary transition-colors hover:text-ink"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, delay: 0.15 + i * 0.06 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col gap-2 border-t border-surface-border pt-6 font-mono text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between"
        >
          <span>© {new Date().getFullYear()} Brando Pinto. Todos los derechos reservados.</span>
        </motion.div>
      </div>
    </footer>
  );
}
