"use client";

import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => setProjects(data.projects ?? []))
      .catch(() => setError(true));
  }, []);

  return (
    <div className="project-grid">
      {error && (
        <p style={{ color: "var(--red)" }}>
          [ ERROR ] gagal memuat /api/projects — jalankan `npm run dev`.
        </p>
      )}
      {projects.map((p) => (
        <article className="project-card" key={p.id}>
          <div className="project-top">
            <span className="project-folder">📁 {p.folder}</span>
            <span className="project-tag">{p.tag}</span>
          </div>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="project-stack">
            {p.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          {p.link && (
            <div className="project-link">
              🔗 terhubung: <code>{p.link}</code>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
