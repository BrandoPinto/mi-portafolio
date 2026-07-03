"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-24 right-4 z-40 lg:bottom-8 lg:right-8">
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
      <span className="absolute inset-0 scale-125 rounded-full bg-accent/10 animate-ping [animation-delay:0.4s]" />

      <motion.a
        href="mailto:bpintochecya@gmail.com"
        aria-label="Enviar correo a Brando Pinto"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15, y: 0 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-bg shadow-glow transition-shadow duration-300 hover:shadow-[0_0_40px_-4px_rgba(59,130,246,0.6)]"
      >
        <Mail className="h-6 w-6" strokeWidth={2} />
      </motion.a>
    </div>
  );
}
