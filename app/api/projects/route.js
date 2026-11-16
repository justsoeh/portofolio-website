import { NextResponse } from "next/server";
import { projects } from "../../../lib/data";

// GET /api/projects — daftar semua proyek
export async function GET() {
  return NextResponse.json({ projects, total: projects.length });
}
