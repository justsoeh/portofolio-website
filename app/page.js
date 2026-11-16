import BootScreen from "../components/BootScreen";
import Typewriter from "../components/Typewriter";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";

const NAV = [
  ["./tentang", "#tentang"],
  ["./skill", "#skill"],
  ["./pengalaman", "#pengalaman"],
  ["./proyek", "#proyek"],
  ["./prestasi", "#prestasi"],
  ["./kontak", "#kontak"],
];

const SKILLS = [
  {
    icon: "⌨",
    title: "Software",
    items: [
      "Python (OOP, loop, function, library)",
      "Arduino IDE / C++ ESP32",
      "VS Code",
      "Integrasi API & MQTT",
    ],
    level: 85,
  },
  {
    icon: "🔌",
    title: "Hardware",
    items: [
      "ESP32, LED WS2812B, Lampu WiZ",
      "Power Supply, IC SN74HC245N",
      "Perancangan skematik (Wokwi)",
      "Perakitan & pemeliharaan perangkat IoT",
    ],
    level: 80,
  },
  {
    icon: "🌐",
    title: "Network",
    items: [
      "OSI & TCP/IP, IPv4/IPv6, subnetting",
      "Cisco Packet Tracer (VLAN, routing)",
      "DHCP, DNS, TCP, UDP, HTTP",
      "WiFi, router, IP & MAC mapping",
    ],
    level: 85,
  },
  {
    icon: "🐧",
    title: "Linux",
    items: [
      "Virtualisasi (VirtualBox, VM)",
      "Administrasi dasar & CLI",
      "ip, ping, traceroute, ssh, netstat",
      "Konfigurasi jaringan Linux",
    ],
    level: 75,
  },
];

const EXPERIENCES = [
  {
    badge: "SEMESTER 5",
    title: "Research Assistant — Security Laboratory",
    sub: "Riset keamanan IoT & kriptografi post-quantum",
    points: [
      'Memimpin penelitian "Implementasi dan Evaluasi Post-Quantum Cryptography untuk Mengamankan Komunikasi MQTT pada Perangkat IoT".',
      "Evaluasi overhead performa, latensi, dan efisiensi algoritma PQC pada perangkat IoT resource-constrained.",
    ],
  },
  {
    badge: "SEMESTER 5",
    title: "Asisten Laboratorium Rangkaian Listrik",
    sub: "Divisi Research & Development (RnD)",
    points: [
      "Membimbing praktikum rangkaian listrik AC/DC dan analisis komponen aktif-pasif.",
      "Produksi materi edukasi: video tutorial, rekapitulasi modul, desain sampul modul.",
      "Kolaborasi riset & peer learning antar asisten untuk menyempurnakan modul ajar.",
    ],
  },
  {
    badge: "SEMESTER 4",
    title: "PT PLN (Persero) UP3 Cimahi — Divisi IT (Teknisi)",
    sub: "Sistem indikator gudang berbasis IoT",
    points: [
      "Software: program sistem indikator gudang berbasis ESP32 + integrasi API data lokasi barang.",
      "Hardware: perancangan & perakitan ESP32, LED WS2812B, lampu WiZ, power supply, IC SN74HC245N.",
      "Network: konfigurasi WiFi, router, IP address, pemetaan perangkat berdasarkan IP & MAC.",
    ],
  },
  {
    badge: "SEMESTER 2–3",
    title: "Operator — Mitra Berlian Unggas (MBU)",
    sub: null,
    points: [
      "Integritas & kejujuran dalam pelaporan data sesuai fakta.",
      "Kepatuhan SOP & kualitas kerja di bawah tekanan waktu.",
      "Ketelitian, tanggung jawab, dan kerja sama tim.",
    ],
  },
  {
    badge: "SEMESTER 1",
    title: "PT Prima Geotex Indo",
    sub: null,
    points: [
      "Pengantaran barang dalam/luar kota menggunakan truk kontainer.",
      "Skill: kedisiplinan, kerja tim, manajemen waktu, ketelitian, leadership.",
    ],
  },
];

const SILAT = [
  "🥇 Juara 1 — Bandung Bedas Championship 2025 (Kelas A Dewasa Putra, Nasional) + Pesilat Terbaik",
  "🥇 Juara 1 — Jayakarta Championship 3 (Under A, Nasional)",
  "🥇 Juara 1 — Satria Bumi Pambungkas Open 5 (Kelas A, Nasional)",
  "🥇 Juara 1 — Bandung Lautan Api Championship 7 2026 (Under A, Nasional)",
  "🥇 Juara 1 — Paku Bumi Open Championship (Kelas A, Nasional)",
  "🥈 Juara 2 — SELEKDA POMNAS (Finalis)",
  "🥈 Juara 2 — Satria Bumi Pambungkas Open 6 (Kelas B, Nasional)",
  "🥉 Juara 3 — Seleksi PON Beladiri Pencak Silat (Finalis)",
];

const ORG = [
  ["Persinas ASAD Balaendah", "Ketua"],
  ["Asisten Lab Rangkaian Listrik", "Divisi RnD"],
  ["HIPMI PT Telkom", "Kader"],
  ["UKM Merpati Putih Telkom", "Atlet"],
  ["CCI (UKM Penalaran Komputer)", "Divisi Network"],
  ["Overclock (Ospek Jurusan TK)", "Divisi LAD"],
  ["Compile Tech Fest (CTF)", "Divisi Acara"],
  ["Penerimaan Mahasiswa Baru", "Divisi Logistik & Kakak Pembimbing"],
];

const CONTACTS = [
  {
    icon: "💼",
    label: "LinkedIn",
    value: "/in/soehferdydjulhaqi",
    href: "https://www.linkedin.com/in/soehferdydjulhaqi",
  },
  {
    icon: "📧",
    label: "Gmail",
    value: "msoehferdy@gmail.com",
    href: "mailto:msoehferdy@gmail.com",
  },
  {
    icon: "📷",
    label: "Instagram",
    value: "@soehh.ferdy",
    href: "https://instagram.com/soehh.ferdy",
  },
];

function SectionTitle({ children }) {
  return (
    <h2 className="section-title">
      <span className="title-prefix">$</span> {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <BootScreen />

      <header className="navbar">
        <a className="nav-logo" href="#tentang">
          &gt;_ soehferdy@telkom:~$
        </a>
        <nav>
          {NAV.map(([label, href]) => (
            <a key={href} className="nav-link" href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* ============ HERO ============ */}
      <section className="hero" id="tentang">
        <div>
          <p className="hero-hello">$ whoami</p>
          <h1 className="hero-name">
            MUHAMMAD SOEH
            <br />
            FERDY DJULHAQI
          </h1>
          <p className="hero-title">
            &gt; <Typewriter />
          </p>
          <p className="hero-desc">
            Mahasiswa S1 <b>Teknik Komputer, Telkom University</b>. Fokus pada{" "}
            <span className="hl">IoT</span>, <span className="hl">Networking</span>,
            dan <span className="hl">Embedded Systems</span>. Percaya bahwa
            pencapaian akademik harus diiringi organisasi, riset, dan kontribusi
            nyata.
          </p>
          <div className="hero-btns">
            <a href="#kontak" className="btn btn-primary">[ hubungi_saya ]</a>
            <a href="#proyek" className="btn">[ lihat_proyek ]</a>
          </div>
          <div className="status-line">
            <span className="blink-dot" /> STATUS: <b>ONLINE</b> — Semester 5, Teknik
            Komputer
          </div>
        </div>

        <div>
          <div className="terminal">
            <div className="terminal-bar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="terminal-title">ferdy@telkom — bash</span>
            </div>
            <div className="terminal-body">
              <p><span className="t-prompt">ferdy@telkom:~$</span> cat profil.txt</p>
              <p><span className="t-key">NIM</span>       : 101032400216</p>
              <p><span className="t-key">PRODI</span>     : Teknik Komputer</p>
              <p><span className="t-key">KAMPUS</span>    : Telkom University</p>
              <p><span className="t-key">EMAIL</span>     : msoehferdy@gmail.com</p>
              <p><span className="t-key">LINKEDIN</span>  : /in/soehferdydjulhaqi</p>
              <p><span className="t-key">INSTAGRAM</span> : @soehh.ferdy</p>
              <p><span className="t-key">FOKUS</span>     : IoT | Jaringan | Embedded</p>
              <p><span className="t-prompt">ferdy@telkom:~$</span> <span className="cursor">_</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SKILL ============ */}
      <section className="section" id="skill">
        <SectionTitle>ls skill/</SectionTitle>
        <div className="skill-grid">
          {SKILLS.map((s) => (
            <div className="skill-card" key={s.title}>
              <div className="skill-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="skill-bar">
                <div style={{ "--val": `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PENGALAMAN ============ */}
      <section className="section" id="pengalaman">
        <SectionTitle>cat pengalaman.log</SectionTitle>
        <div className="timeline">
          {EXPERIENCES.map((e) => (
            <div className="tl-item" key={e.title}>
              <div className="tl-dot" />
              <div className="tl-card">
                <div className="tl-badge">{e.badge}</div>
                <h3>{e.title}</h3>
                {e.sub && <p className="tl-sub">{e.sub}</p>}
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PROYEK (dari backend /api/projects) ============ */}
      <section className="section" id="proyek">
        <SectionTitle>./run --proyek &amp;&amp; curl /api/projects</SectionTitle>
        <Projects />
      </section>

      {/* ============ PRESTASI ============ */}
      <section className="section" id="prestasi">
        <SectionTitle>grep -i &quot;prestasi&quot; *</SectionTitle>
        <div className="achieve-grid">
          <div className="achieve-card">
            <h3>🥋 Pencak Silat — Non-Akademik</h3>
            <ul>
              {SILAT.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="achieve-card">
            <h3>👥 Organisasi &amp; Kepanitiaan</h3>
            <ul>
              {ORG.map(([nama, jabatan]) => (
                <li key={nama}>
                  <b>{nama}</b> — {jabatan}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ KONTAK ============ */}
      <section className="section" id="kontak">
        <SectionTitle>ping -c 1 kontak</SectionTitle>
        <div className="contact-grid">
          {CONTACTS.map((c) => (
            <a
              className="contact-card"
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">{c.icon}</span>
              <span className="contact-label">{c.label}</span>
              <span className="contact-value">{c.value}</span>
            </a>
          ))}
        </div>

        {/* Form -> POST ke backend /api/contact */}
        <ContactForm />

        <div className="footer">
          <p>
            &gt;_ © 2026 muhammad soeh ferdy djulhaqi — teknik komputer, telkom
            university
          </p>
          <p className="footer-dim">
            next.js frontend + api routes backend · shutdown -h now · terima kasih
            telah berkunjung
          </p>
        </div>
      </section>
    </>
  );
}
