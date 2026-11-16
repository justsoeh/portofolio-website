"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Mahasiswa Teknik Komputer Telkom University",
  "IoT & Embedded Systems Enthusiast",
  "Network Engineering Learner",
  "Research Assistant — Security Laboratory",
  "Asisten Lab Rangkaian Listrik",
  "Pesilat Nasional 🥋",
];

export default function Typewriter() {
  const [text, setText] = useState("");

  useEffect(() => {
    let roleIdx = 0;
    let letterIdx = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = ROLES[roleIdx];
      if (!deleting) {
        letterIdx++;
        if (letterIdx === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
      } else {
        letterIdx--;
        if (letterIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % ROLES.length;
        }
      }
      setText(word.slice(0, letterIdx));
      timer = setTimeout(tick, deleting ? 35 : 70);
    };
    tick();

    return () => clearTimeout(timer);
  }, []);

  return (
    <span>
      {text}
      <span className="cursor">█</span>
    </span>
  );
}
