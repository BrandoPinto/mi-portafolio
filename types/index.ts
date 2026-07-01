export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
  repoHref?: string;
  featured?: boolean;
  year: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tooling" | "mobile" | "cloud";
  level: number; // 0-100
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number; // seconds
  cover: string;
  url: string; // path to audio file in /public/assets/music/
}

export interface NavItem {
  label: string;
  href: string;
}
