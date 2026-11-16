import "./globals.css";

export const metadata = {
  title: "Muhammad Soeh Ferdy Djulhaqi | Computer Engineering",
  description:
    "Portofolio Muhammad Soeh Ferdy Djulhaqi — Mahasiswa Teknik Komputer Telkom University. IoT, Networking, dan Embedded Systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
        <div className="crt-overlay" />
      </body>
    </html>
  );
}
