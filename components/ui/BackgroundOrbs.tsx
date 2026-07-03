"use client";

import { useEffect, useRef } from "react";

export default function BackgroundOrbs() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);
  const orb3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (orb1.current) orb1.current.style.transform = `translateY(${p * -240}px)`;
      if (orb2.current) orb2.current.style.transform = `translateY(${p * 200}px)`;
      if (orb3.current) orb3.current.style.transform = `translateY(${p * -150}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: 10,
        pointerEvents: "none",
        mixBlendMode: "screen",
      }}
    >
      {/* Superior derecha */}
      <div
        ref={orb1}
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          top: "4%",
          right: "-8%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.55) 0%, rgba(59,130,246,0.18) 45%, transparent 70%)",
        }}
      />

      {/* Inferior izquierda */}
      <div
        ref={orb2}
        style={{
          position: "absolute",
          width: 650,
          height: 650,
          top: "55%",
          left: "-6%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.50) 0%, rgba(37,99,235,0.15) 45%, transparent 70%)",
        }}
      />

      {/* Centro — tono más claro */}
      <div
        ref={orb3}
        style={{
          position: "absolute",
          width: 480,
          height: 480,
          top: "35%",
          left: "38%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(96,165,250,0.35) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
