"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            eyebrow="Testimonios"
            title="Lo que dicen los equipos con los que trabajé."
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="flex h-full flex-col justify-between p-7 transition-colors duration-300 hover:border-accent/20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.1 }}
                >
                  <Quote className="h-6 w-6 text-accent/60" />
                </motion.div>
                <p className="mt-5 font-body text-lg leading-relaxed text-ink">
                  "{testimonial.quote}"
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <motion.div
                    className="relative h-11 w-11 overflow-hidden rounded-full"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <p className="font-body text-sm font-medium text-ink">
                      {testimonial.name}
                    </p>
                    <p className="font-body text-xs text-ink-muted">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
