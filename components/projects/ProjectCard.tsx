"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/types";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
    >
      <Card hoverable className="group flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`Vista previa de ${project.title}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
          <span className="absolute right-3 top-3 rounded-full bg-bg/70 px-2.5 py-1 font-mono text-[11px] text-ink-secondary backdrop-blur">
            {project.year}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="font-display text-lg font-medium text-ink">
            {project.title}
          </h3>
          <p className="font-body text-sm leading-relaxed text-ink-secondary">
            {project.description}
          </p>

          <div className="mt-1 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-4 pt-3">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              Ver proyecto
              <ArrowUpRight className="h-4 w-4" />
            </a>
            {project.repoHref && (
              <a
                href={project.repoHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Repositorio en GitHub"
                className="inline-flex items-center gap-1.5 font-body text-sm text-ink-secondary transition-colors hover:text-ink"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
