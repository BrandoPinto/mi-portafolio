import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-01",
    title: "Nimbus — Analytics Dashboard",
    description:
      "Panel de analítica en tiempo real para equipos de producto, con visualizaciones interactivas y alertas configurables sobre métricas clave.",
    image: "/assets/images/mock-project-1.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    href: "#",
    repoHref: "#",
    featured: true,
    year: "2025",
  },
  {
    id: "proj-02",
    title: "Fielda — App de campo",
    description:
      "Aplicación móvil offline-first para equipos de inspección técnica, con sincronización automática y captura de evidencia geolocalizada.",
    image: "/assets/images/mock-project-2.svg",
    tags: ["React Native", "SQLite", "Node.js"],
    href: "#",
    repoHref: "#",
    featured: true,
    year: "2024",
  },
  {
    id: "proj-03",
    title: "Cadence — Plataforma de música",
    description:
      "Plataforma de streaming para artistas independientes con reproductor personalizado, colas dinámicas y recomendaciones basadas en escucha.",
    image: "/assets/images/mock-project-3.svg",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    href: "#",
    repoHref: "#",
    featured: true,
    year: "2024",
  },
  {
    id: "proj-04",
    title: "Ledger — Gestor financiero",
    description:
      "Herramienta de finanzas personales con proyecciones automáticas, categorización inteligente de gastos y reportes exportables.",
    image: "/assets/images/mock-project-4.svg",
    tags: ["TypeScript", "GraphQL", "Prisma"],
    href: "#",
    repoHref: "#",
    featured: false,
    year: "2023",
  },
];
