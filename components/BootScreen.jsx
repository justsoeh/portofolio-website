"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  "FERDY-BIOS v5.0 (Next.js Edition) — Initializing...",
  "CPU: Teknik Komputer @ Telkom University .... [ OK ]",
  "Loading RAM: pengalaman.log ................. [ OK ]",
  "Mounting /dev/skill: IoT, Network, Linux .... [ OK ]",
  "Connecting backend: /api/projects ........... [ OK ]",
  "Starting portofolio.service ................. [ OK ]",
  "",
  "Welcome, visitor. Booting portofolio...",
];

export default function BootScreen() {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let current = "";
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      if (lineIdx >= BOOT_LINES.length) {
        setTimeout(() => setDone(true), 500);
        return;
      }
      const line = BOOT_LINES[lineIdx];
      if (charIdx < line.length) {
        current += line[charIdx++];
        setText(current);
        setTimeout(tick, 12);
      } else {
        current += "\n";
        lineIdx++;
        charIdx = 0;
        setText(current);
        setTimeout(tick, 180);
      }
    };
    tick();

    return () => { cancelled = true; };
  }, []);

  return (
    <div className={`boot-screen ${done ? "done" : ""}`} aria-hidden={done}>
      <div className="boot-text">{text}</div>
    </div>
  );
}
