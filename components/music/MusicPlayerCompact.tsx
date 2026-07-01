"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Pause, SkipForward, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { formatTime } from "@/lib/utils";
import { useAudioPlayer } from "@/context/AudioContext";
import MusicPlayerQueue from "@/components/music/MusicPlayerQueue";

export default function MusicPlayerCompact() {
  const { songs, currentIndex, isPlaying, elapsed, duration, toggle, next, selectById } =
    useAudioPlayer();
  const [expanded, setExpanded] = useState(false);

  const current = songs[currentIndex];
  const progress = duration > 0 ? Math.min(100, (elapsed / duration) * 100) : 0;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="mx-3 mb-2 rounded-xl2 border border-surface-border bg-surface/95 p-4 backdrop-blur-xl shadow-soft"
          >
            <MusicPlayerQueue
              songs={songs}
              currentId={current.id}
              isPlaying={isPlaying}
              onSelect={selectById}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="border-t border-surface-border bg-bg/90 backdrop-blur-xl px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2.5">
        <div className="relative mb-2 h-1 w-full overflow-hidden rounded-full bg-surface-elevated">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-accent transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
            <Image
              src={current.cover}
              alt={`Portada de ${current.title}`}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="min-w-0 flex-1 text-left"
            aria-label="Ver lista de canciones"
          >
            <p className="truncate font-body text-sm font-medium text-ink">
              {current.title}
            </p>
            <p className="truncate font-mono text-[11px] text-ink-muted">
              {formatTime(elapsed)} / {formatTime(duration)}
            </p>
          </button>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              aria-label={isPlaying ? "Pausar" : "Reproducir"}
              onClick={toggle}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-bg"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" fill="currentColor" />
              ) : (
                <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
              )}
            </button>
            <button
              type="button"
              aria-label="Siguiente canción"
              onClick={next}
              className="flex h-9 w-9 items-center justify-center text-ink-secondary"
            >
              <SkipForward className="h-4 w-4" fill="currentColor" />
            </button>
            <button
              type="button"
              aria-label={expanded ? "Ocultar lista" : "Mostrar lista"}
              onClick={() => setExpanded((e) => !e)}
              className="flex h-9 w-9 items-center justify-center text-ink-secondary"
            >
              {expanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronUp className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
