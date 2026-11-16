// Data portofolio — dipakai oleh backend API (/api/projects)

export const projects = [
  {
    id: 1,
    folder: "proyek_jurnal/",
    tag: "SINTA 3",
    title: "IoT-Based Warehouse Item Location Using ESP32 & Smart Lighting",
    desc: "Sistem indikator lokasi barang berbasis IoT di gudang PT PLN UP3 Cimahi. Berkontribusi pada software, hardware, dan jaringan: program ESP32 via Arduino IDE, integrasi API, perancangan perangkat (WS2812B, lampu WiZ, IC SN74HC245N), serta konfigurasi jaringan & pemetaan IP/MAC.",
    stack: ["ESP32", "Arduino IDE", "MQTT", "API", "Networking"],
    link: null,
  },
  {
    id: 2,
    folder: "semester 5 / hand-counter/",
    tag: "COMPUTER VISION",
    title: "Hand Finger Counter",
    desc: "Deteksi jumlah jari (1-5) secara real-time melalui kamera menggunakan MediaPipe Hand Landmark (21 titik per tangan), dilengkapi multi-kamera otomatis dan logging CSV.",
    stack: ["Python", "OpenCV", "MediaPipe"],
    link: "semester 5/hand-counter/",
  },
  {
    id: 3,
    folder: "semester 5 / TA_Soeh_rev/",
    tag: "TA",
    title: "TA#1 — ESP32 Slave",
    desc: "Tugas akhir tahap 1: perancangan perangkat ESP32 sebagai node slave pada sistem terdistribusi.",
    stack: ["ESP32", "Embedded", "C++"],
    link: "semester 5/TA_Soeh_rev/",
  },
  {
    id: 4,
    folder: "ukm_cyber_academy/",
    tag: "IoT",
    title: "Monitoring Server — Proyek Tugas Besar CPS Lab",
    desc: "Integrasi berbagai sensor dengan output MQTT, pemrograman di VS Code, perancangan skematik di Wokwi, diakhiri proyek tugas besar sistem monitoring server secara berkelompok.",
    stack: ["MQTT", "Wokwi", "VS Code", "Sensor"],
    link: null,
  },
];

