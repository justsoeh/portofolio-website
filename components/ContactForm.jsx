"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(""); // "", "ok", "error", "sending"
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const payload = {
      nama: form.nama.value.trim(),
      email: form.email.value.trim(),
      pesan: form.pesan.value.trim(),
    };

    if (!payload.nama || !payload.email || !payload.pesan) {
      setStatus("error");
      setMessage("[ ERROR ] semua field harus diisi.");
      return;
    }

    setStatus("sending");
    setMessage("> mengirim paket data...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("ok");
        setMessage(`[ OK ] ${data.reply}`);
        form.reset();
      } else {
        setStatus("error");
        setMessage(`[ ERROR ] ${data.error ?? "gagal mengirim pesan."}`);
      }
    } catch {
      setStatus("error");
      setMessage("[ ERROR ] koneksi ke server terputus.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>$ ./kirim_pesan.sh — masuk ke backend /api/contact</h3>
      <label htmlFor="nama">--nama</label>
      <input id="nama" name="nama" type="text" placeholder="Nama Anda" />
      <label htmlFor="email">--email</label>
      <input id="email" name="email" type="email" placeholder="email@contoh.com" />
      <label htmlFor="pesan">--pesan</label>
      <textarea id="pesan" name="pesan" placeholder="Tulis pesan Anda..." />
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "mengirim..." : "[ kirim_pesan ]"}
      </button>
      <p className={`form-status ${status === "error" ? "error" : ""}`}>{message}</p>
    </form>
  );
}
