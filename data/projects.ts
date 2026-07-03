import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-01",
    title: "UPJAS AQP — IRAP",
    description:
      "Web app para el Instituto de Religión de Arequipa. Gestión de eventos, suscripciones, clases, registro de alumnos e informes de asistencia.",
    image: "/assets/images/projects/upjas-aqp.webp",
    tags: ["React", "Firebase", "Firestore", "Auth"],
    href: "https://upjas-aqp.web.app/",
    featured: true,
    year: "2026",
  },
  {
    id: "proj-02",
    title: "MiTaxi — Plataforma de transporte",
    description:
      "Web app para empresa de taxis arequipeña. Reserva de viajes, seguimiento de conductores y panel administrativo para gestión de flota y reportes.",
    image: "/assets/images/projects/mitaxi_1.webp",
    tags: ["React", "PHP", "JavaScript", "HTML", "CSS"],
    href: "https://mitaxi.com.pe",
    featured: true,
    year: "2026",
  },
  {
    id: "proj-03",
    title: "Constructora Rivera — Web corporativa",
    description:
      "Sitio web administrable para arquitecta arequipeña. Panel para gestionar proyectos, galería de obras e información de la empresa desde un CMS propio.",
    image: "/assets/images/projects/c_rivera.webp",
    tags: ["Laravel", "Livewire", "Tailwind", "Bootstrap", "JavaScript"],
    href: "https://constructorarivera.com.pe",
    featured: true,
    year: "2026",
  },
  {
    id: "proj-05",
    title: "Aura Parfum — Sistema de stock",
    description:
      "Sistema web para empresa de perfumes que permite gestionar y visualizar el inventario de productos en tiempo real, con control de stock y reportes.",
    image: "/assets/images/projects/auraparfum.webp",
    tags: ["Laravel", "Livewire", "PHP"],
    href: "https://sistema.auraparfumoficial.com",
    featured: true,
    year: "2024",
  },
  {
    id: "proj-04",
    title: "SUIT — Plataforma de venta de terrenos",
    description:
      "Sistema para inmobiliaria donde asesores se registran, gestionan su cartera y venden terrenos. Incluye panel de control por asesor e informes de ventas.",
    image: "/assets/images/projects/suit.webp",
    tags: ["Laravel", "Tailwind", "JavaScript", "CSS"],
    href: "https://suit.com.pe",
    featured: true,
    year: "2024",
  },
];
