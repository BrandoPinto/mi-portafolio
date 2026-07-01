"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Song } from "@/types";

interface AudioContextValue {
  songs: Song[];
  currentIndex: number;
  isPlaying: boolean;
  elapsed: number;
  duration: number;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  selectById: (id: string) => void;
}

const AudioCtx = createContext<AudioContextValue | null>(null);

export function AudioProvider({
  songs,
  children,
}: {
  songs: Song[];
  children: React.ReactNode;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(songs[0].duration);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;
    audio.volume = 0.35;

    const onTimeUpdate = () => setElapsed(Math.floor(audio.currentTime));
    const onLoadedMetadata = () => setDuration(Math.floor(audio.duration));
    const onEnded = () => {
      setCurrentIndex((i) => (i + 1) % songs.length);
      setElapsed(0);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.src = "";
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load new song when index changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = songs[currentIndex].url;
    audio.currentTime = 0;
    setElapsed(0);
    setDuration(songs[currentIndex].duration);
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, songs]);

  // Play or pause when isPlaying toggles
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !audio.src) return;
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const toggle = useCallback(() => setIsPlaying((p) => !p), []);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % songs.length);
    setElapsed(0);
  }, [songs.length]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + songs.length) % songs.length);
    setElapsed(0);
  }, [songs.length]);

  const selectById = useCallback(
    (id: string) => {
      const found = songs.findIndex((s) => s.id === id);
      if (found === -1) return;
      if (found === currentIndex) {
        toggle();
      } else {
        setCurrentIndex(found);
        setElapsed(0);
        setIsPlaying(true);
      }
    },
    [songs, currentIndex, toggle]
  );

  return (
    <AudioCtx.Provider
      value={{ songs, currentIndex, isPlaying, elapsed, duration, toggle, next, prev, selectById }}
    >
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudioPlayer() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudioPlayer must be used within AudioProvider");
  return ctx;
}
