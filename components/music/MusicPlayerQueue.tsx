"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { Song } from "@/types";
import { cn, formatTime } from "@/lib/utils";

interface MusicPlayerQueueProps {
  songs: Song[];
  currentId: string;
  isPlaying: boolean;
  onSelect: (id: string) => void;
}

export default function MusicPlayerQueue({
  songs,
  currentId,
  isPlaying,
  onSelect,
}: MusicPlayerQueueProps) {
  return (
    <ul className="flex flex-col gap-1">
      {songs.map((song, i) => {
        const active = song.id === currentId;
        return (
          <motion.li
            key={song.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: i * 0.04 }}
          >
            <motion.button
              type="button"
              onClick={() => onSelect(song.id)}
              whileHover={{ x: 2 }}
              transition={{ duration: 0.15 }}
              className={cn(
                "group flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left transition-colors",
                active ? "bg-accent/10" : "hover:bg-surface-elevated"
              )}
            >
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={song.cover}
                  alt={`Portada de ${song.title}`}
                  fill
                  sizes="36px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <span
                  className={cn(
                    "absolute inset-0 flex items-center justify-center bg-bg/60 opacity-0 transition-opacity group-hover:opacity-100",
                    active && "opacity-100"
                  )}
                >
                  {active && isPlaying ? (
                    <Pause className="h-3.5 w-3.5 text-accent" fill="currentColor" />
                  ) : (
                    <Play className="h-3.5 w-3.5 text-ink" fill="currentColor" />
                  )}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className={cn(
                    "truncate font-body text-sm font-medium",
                    active ? "text-accent" : "text-ink"
                  )}
                >
                  {song.title}
                </p>
                <p className="truncate font-body text-xs text-ink-muted">
                  {song.artist}
                </p>
              </div>
              <span className="shrink-0 font-mono text-[11px] text-ink-muted">
                {formatTime(song.duration)}
              </span>
            </motion.button>
          </motion.li>
        );
      })}
    </ul>
  );
}
