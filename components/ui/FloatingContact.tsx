"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-[84px] right-4 z-40 lg:bottom-8 lg:right-8">
      <div className="relative h-12 w-12 lg:h-14 lg:w-14">
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
        <span className="absolute inset-0 scale-125 rounded-full bg-accent/10 animate-ping [animation-delay:0.4s]" />

        <motion.a
          href="mailto:bpintochecya@gmail.com"
          aria-label="Enviar correo a Brando Pinto"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.15, y: 0 }}
          whileTap={{ scale: 0.92 }}
          className="relative flex h-full w-full items-center justify-center rounded-full bg-accent text-bg shadow-glow transition-shadow duration-300 hover:shadow-[0_0_40px_-4px_rgba(59,130,246,0.6)]"
        >
          <Mail className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={2} />
        </motion.a>
      </div>
    </div>
  );
}
