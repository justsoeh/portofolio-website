import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// =====================================================
// BACKEND: POST /api/contact — simpan pesan pengunjung
// GET  /api/contact  — lihat pesan yang masuk (untuk pemilik)
// Data disimpan ke data/pesan.json di dalam proyek
// =====================================================

const DATA_FILE = path.join(process.cwd(), "data", "pesan.json");

async function readMessages() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeMessages(messages) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2), "utf-8");
}

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export async function POST(request) {
  try {
    const body = await request.json();
    const nama = String(body.nama ?? "").trim();
    const email = String(body.email ?? "").trim();
    const pesan = String(body.pesan ?? "").trim();

    if (!nama || !email || !pesan) {
      return NextResponse.json(
        { error: "field nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { error: "format email tidak valid." },
        { status: 400 }
      );
    }

    const messages = await readMessages();
    messages.push({
      id: Date.now(),
      nama,
      email,
      pesan,
      waktu: new Date().toISOString(),
    });
    await writeMessages(messages);

    return NextResponse.json({
      ok: true,
      reply: `Halo ${nama}! Pesan Anda diterima backend. Terima kasih sudah menghubungi.`,
      total: messages.length,
    });
  } catch {
    return NextResponse.json(
      { error: "terjadi kesalahan di server." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const messages = await readMessages();
  return NextResponse.json({ total: messages.length, messages });
}
