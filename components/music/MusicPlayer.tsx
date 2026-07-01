"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Music2 } from "lucide-react";
import { cn, formatTime } from "@/lib/utils";
import { useAudioPlayer } from "@/context/AudioContext";
import MusicPlayerQueue from "@/components/music/MusicPlayerQueue";

interface MusicPlayerProps {
  className?: string;
}

export default function MusicPlayer({ className }: MusicPlayerProps) {
  const { songs, currentIndex, isPlaying, elapsed, duration, toggle, next, prev, selectById } =
    useAudioPlayer();

  const current = songs[currentIndex];
  const progress = duration > 0 ? Math.min(100, (elapsed / duration) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className={cn(
        "w-full max-w-sm rounded-xl3 border border-surface-border bg-surface/80 p-5 backdrop-blur-xl shadow-soft",
        className
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
          <Music2 className="h-3.5 w-3.5 text-accent" />
          Now playing
        </span>
        <div className="flex items-end gap-[3px] h-3">
          {isPlaying ? (
            <>
              <span className="w-[3px] rounded-full bg-accent animate-bar1" />
              <span className="w-[3px] rounded-full bg-accent animate-bar2" />
              <span className="w-[3px] rounded-full bg-accent animate-bar3" />
            </>
          ) : (
            <span className="h-[3px] w-4 rounded-full bg-ink-muted/50" />
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl2 shadow-card">
          <Image
            src={current.cover}
            alt={`Portada de ${current.title}`}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-lg font-medium text-ink">
            {current.title}
          </p>
          <p className="truncate font-body text-sm text-ink-secondary">
            {current.artist} · {current.album}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-surface-elevated">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-accent transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-1.5 flex justify-between font-mono text-[11px] text-ink-muted">
          <span>{formatTime(elapsed)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Canción anterior"
          onClick={prev}
          className="text-ink-secondary transition-colors hover:text-ink"
        >
          <SkipBack className="h-5 w-5" fill="currentColor" />
        </button>
        <button
          type="button"
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
          onClick={toggle}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-bg transition-transform hover:scale-105"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" fill="currentColor" />
          ) : (
            <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
          )}
        </button>
        <button
          type="button"
          aria-label="Siguiente canción"
          onClick={next}
          className="text-ink-secondary transition-colors hover:text-ink"
        >
          <SkipForward className="h-5 w-5" fill="currentColor" />
        </button>
      </div>

      <div className="mt-5 border-t border-surface-border pt-3">
        <MusicPlayerQueue
          songs={songs}
          currentId={current.id}
          isPlaying={isPlaying}
          onSelect={selectById}
        />
      </div>
    </motion.div>
  );
}
