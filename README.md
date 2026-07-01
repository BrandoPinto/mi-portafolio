# Portafolio — Alex Rivera

Landing page premium para un desarrollador full stack. Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide React.

## Empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/                  # App Router: layout, page, estilos globales
components/
  layout/             # Navbar, Footer
  sections/           # Hero, Proyectos, Sobre mí, Skills, Testimonios
  music/               # Reproductor de música (desktop + compacto mobile)
  projects/            # Card de proyecto
  ui/                   # Button, SectionTitle, Badge, Card
data/                  # Datos mockeados (proyectos, skills, testimonios, playlist, nav)
types/                 # Tipos compartidos
lib/                   # Utilidades (cn, formatTime)
assets/images/         # Fuente de los mocks (SVG); copiados a /public para servirse
public/assets/images/  # Copia servida por Next.js
```

## Personalizar

- **Contenido**: edita los archivos en `data/*.ts`. Ningún componente tiene datos hardcodeados.
- **Imágenes reales**: reemplaza los SVG en `public/assets/images/` por tus fotos/mockups (mismo nombre de archivo, o actualiza las rutas en `data/*.ts`).
- **Colores/tipografía**: tokens de diseño en `tailwind.config.ts` (paleta `bg`, `surface`, `accent`, `ink`) y fuentes en `app/layout.tsx`.
- **Reproductor de música**: la lista de canciones vive en `data/music.ts`. Es un reproductor simulado (sin audio real) pensado para mostrarse como pieza de diseño; si quieres audio real, agrega un elemento `<audio>` controlado por el mismo estado en `MusicPlayer.tsx` / `MusicPlayerCompact.tsx`.

## Notas

- El reproductor compacto (`MusicPlayerCompact`) queda fijo en la parte inferior en mobile (`lg:hidden`) y el layout añade `padding-bottom` al `<main>` para que no tape contenido.
- El reproductor grande (`MusicPlayer`) se muestra junto al hero en desktop (`lg:flex`).
- `prefers-reduced-motion` está respetado globalmente en `globals.css`.
