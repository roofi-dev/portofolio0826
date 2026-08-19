export type DivisionId = "apps" | "systems" | "client" | "tools";

export interface Division {
    id: DivisionId;
    index: string;
    title: string;
    tagline: string;
    color: string;
    textColor: string;
}

/** The four divisions every project belongs to — ordered as displayed. */
export const divisions: Division[] = [
    {
        id: "apps",
        index: "01",
        title: "Enterprise Systems",
        tagline: "Internal ERP and business applications built for real manufacturing and HR operations.",
        color: "bg-acid",
        textColor: "text-ink",
    },
    {
        id: "systems",
        index: "02",
        title: "IoT & Integrations",
        tagline: "Hardware bridges, third-party API integrations, and realtime data pipelines.",
        color: "bg-electric",
        textColor: "text-cream",
    },
    {
        id: "client",
        index: "03",
        title: "Freelance Builds",
        tagline: "Commissioned systems shipped for real clients, end-to-end.",
        color: "bg-hotpink",
        textColor: "text-cream",
    },
    {
        id: "tools",
        index: "04",
        title: "DevOps & Automation",
        tagline: "Infrastructure, deployment scripts, and tooling that keeps production running.",
        color: "bg-vivid",
        textColor: "text-cream",
    },
];

export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    metrics: { label: string; value: string }[];
    color: string;
    textColor: string;
    /** GitHub repo URL (or wherever the source canonically lives). */
    link: string;
    /** Live demo / production URL (Vercel, GH Pages, App Store, etc.). */
    liveDemo?: string;
    /** Apple App Store listing URL. */
    appStore?: string;
    /** Private commercial repo — hides the "View Code" link. */
    private?: boolean;
    /** Which of the four divisions this project belongs to. */
    division: DivisionId;
    /** Real product screenshot under /public/projects (optional). */
    image?: string;
    /** Portrait phone screenshots letterbox with object-contain instead of cropping. */
    imageFit?: "contain";
    /** Built as a commission for a named client. */
    clientWork?: boolean;
    category: string;
    problem: string;
    solution: string;
    outcomes: string[];
}

// All entries reflect real production work for PT Ladang Sehat Indonesia,
// BSPSJ, and freelance clients. Internal systems are marked private.

export const projects: Project[] = [
    /* ─────────── TIER A · ENTERPRISE SYSTEMS ─────────── */

    {
        id: "001",
        slug: "pondasi",
        division: "apps",
        title: "Pondasi",
        description: "Enterprise Management System (Internal Manufacturing ERP) — 15+ modul bisnis (Produksi, QAQC, HRGA, PRF/RAB) dengan role & permission granular. Laravel 10, Vue 3, Inertia.js, Docker, MQTT, MySQL 8.0.",
        longDescription: "Pondasi adalah aplikasi web internal manufaktur makanan yang mengelola 15+ modul bisnis meliputi Produksi, QAQC, HRGA, dan PRF/RAB dengan role & permission granular berbasis Spatie. Dibangun di atas Laravel 10 + Vue 3 + Inertia.js dengan arsitektur SPA, realtime monitoring via WebSocket (Laravel Reverb), dan integrasi IoT Timbangan Digital berbasis PLC/HMI menggunakan protokol MQTT (Mosquitto Broker). Modul pengajuan anggaran menggunakan multi-level approval engine reusable, dan seluruh infrastruktur berjalan pada multi-VM (1 VPS, 2 VM) berbasis Docker dengan script automasi deployment.",
        tech: ["Laravel 10", "Vue 3", "Inertia.js", "TailwindCSS", "Docker", "MQTT", "MySQL 8.0", "Spatie", "Laravel Reverb"],
        metrics: [
            { label: "Modules", value: "15+" },
            { label: "Realtime", value: "WebSocket" },
            { label: "Infra", value: "Multi-VM Docker" },
        ],
        color: "bg-acid",
        textColor: "text-ink",
        link: "https://github.com/roofi-dev",
        private: true,
        category: "Enterprise ERP",
        problem: "Operasional manufaktur makanan multi-lokasi (Surabaya & Pasuruan) tersebar across spreadsheet, paper, dan sistem terpisah. Tidak ada visibilitas realtime produksi, kontrol anggaran berjenjang, dan data timbangan pabrik terisolasi di PLC/HMI lokal.",
        solution: "Satu aplikasi web internal modular dengan role & permission granular (Spatie) menangani 15+ modul bisnis. Integrasi IoT Timbangan Digital via MQTT + WebSocket memberi monitoring realtime, multi-level approval engine reusable mengatur pengajuan anggaran, dan REST API terstruktur menyinkronkan data antar lokasi operasional.",
        outcomes: [
            "15+ modul bisnis terintegrasi dalam satu sistem dengan role & permission granular",
            "Realtime monitoring produksi via WebSocket (Laravel Reverb) + MQTT Timbangan Digital",
            "Multi-level approval engine reusable pada modul pengajuan anggaran",
            "Infrastruktur multi-VM (1 VPS, 2 VM) berbasis Docker dengan automasi deployment",
        ],
    },
    {
        id: "002",
        slug: "karir",
        division: "apps",
        title: "Karir",
        description: "Sistem Rekrutmen, Ujian SKD Online & Onboarding (Job Portal) — siklus lowongan, pendaftaran kandidat, penilaian HR, hingga onboarding. Laravel 10, Vue 3, Inertia.js, Livewire 3, MySQL, PHPUnit.",
        longDescription: "Karir adalah portal rekrutmen end-to-end yang menangani siklus lowongan, pendaftaran kandidat, penilaian HR, hingga onboarding karyawan baru dengan arsitektur SPA Inertia.js. Sistem Ujian SKD Online berbasis timer server-side dengan proteksi rate limiting anti-brute force, auto-rejection berbasis kriteria pengalaman, dan export hasil ke PDF. Security hardening komprehensif (CSRF, XSS, SQL Injection prevention, upload mime validation) mencapai skor audit keamanan 8.5/10 siap deployment.",
        tech: ["Laravel 10", "Vue 3", "Inertia.js", "Livewire 3", "TailwindCSS", "MySQL", "PHPUnit"],
        metrics: [
            { label: "Flow", value: "End-to-end" },
            { label: "Exam", value: "Server-side timer" },
            { label: "Security", value: "8.5/10 audit" },
        ],
        color: "bg-hotpink",
        textColor: "text-cream",
        link: "https://github.com/roofi-dev",
        private: true,
        category: "Job Portal",
        problem: "Proses rekrutmen manual tersebar antar email, spreadsheet, dan ujian offline yang rentan kecurangan. Tidak ada auto-rejection berbasis kriteria, timer ujian tidak terkontrol server-side, dan hasil penilaian sulit diekspor untuk pelaporan.",
        solution: "Portal rekrutmen end-to-end dengan SPA Inertia.js menangani seluruh siklus dari lowongan hingga onboarding. Ujian SKD Online berbasis timer server-side dengan rate limiting anti-brute force, auto-rejection berbasis kriteria pengalaman, export PDF hasil, dan security hardening komprehensif mencapai skor audit 8.5/10.",
        outcomes: [
            "Portal rekrutmen end-to-end: lowongan → pendaftaran → penilaian HR → onboarding",
            "Ujian SKD Online dengan timer server-side + rate limiting anti-brute force",
            "Auto-rejection berbasis kriteria pengalaman + export hasil ke PDF",
            "Security hardening komprehensif (CSRF, XSS, SQLi, mime validation) — skor audit 8.5/10",
        ],
    },

    /* ─────────── TIER B · IoT & INTEGRATIONS ─────────── */

    {
        id: "003",
        slug: "mqtt-timbangan-iot",
        division: "systems",
        title: "MQTT Timbangan Digital",
        description: "Integrasi IoT Timbangan Digital berbasis PLC/HMI menggunakan protokol MQTT (Mosquitto Broker) dengan realtime monitoring via WebSocket (Laravel Reverb). Sinkronisasi data antar lokasi operasional.",
        longDescription: "Integrasi perangkat keras pabrik ke sistem web internal via MQTT. Timbangan Digital yang terhubung ke PLC/HMI mempublish data berat ke Mosquitto Broker, yang kemudian dikonsumsi oleh Laravel worker dan dipublikasikan ke frontend via WebSocket (Laravel Reverb) untuk monitoring realtime. REST API terstruktur dirilis untuk sinkronisasi data antar lokasi operasional (Surabaya & Pasuruan). Bagian terintegrasi dari sistem Pondasi.",
        tech: ["MQTT", "Mosquitto Broker", "PLC/HMI", "Laravel Reverb", "WebSocket", "Laravel 10"],
        metrics: [
            { label: "Protocol", value: "MQTT" },
            { label: "Realtime", value: "WebSocket" },
            { label: "Sites", value: "Surabaya · Pasuruan" },
        ],
        color: "bg-electric",
        textColor: "text-cream",
        link: "https://github.com/roofi-dev",
        private: true,
        category: "IoT / Hardware",
        problem: "Data timbangan pabrik terkunci di PLC/HMI lokal tanpa cara untuk masuk ke sistem web. Tidak ada monitoring realtime dan tidak ada sinkronisasi data produksi antar lokasi operasional yang berjauhan.",
        solution: "Bridge MQTT dari PLC/HMI ke Mosquitto Broker, dikonsumsi Laravel worker, lalu dipublikasikan ke frontend via WebSocket (Laravel Reverb) untuk monitoring realtime. REST API terstruktur menyinkronkan data antar Surabaya & Pasuruan.",
        outcomes: [
            "Realtime monitoring timbangan pabrik via WebSocket (Laravel Reverb)",
            "Bridge PLC/HMI → MQTT (Mosquitto) → Laravel worker → frontend",
            "REST API terstruktur untuk sinkronisasi data antar lokasi operasional",
            "Data produksi harian terpusat, tidak lagi terisolasi di PLC/HMI lokal",
        ],
    },
    {
        id: "004",
        slug: "accurate-id-integration",
        division: "systems",
        title: "Accurate.id API Integration",
        description: "Integrasi 2 arah dengan Accurate.id API via OAuth 2.0 & Queue Jobs dilengkapi idempotency guard untuk sinkronisasi transaksi akuntansi tanpa duplikasi. Bagian dari sistem Inventory & Production.",
        longDescription: "Integrasi 2 arah antara sistem manajemen produksi pupuk dan Accurate.id (sistem akuntansi pihak ketiga) via OAuth 2.0 & Queue Jobs. Setiap transaksi stok dan produksi disinkronkan ke Accurate.id dengan idempotency guard yang mencegah duplikasi transaksi akuntansi. Queue Jobs menangani retry dan async processing sehingga UI tidak terblokir. Bagian terintegrasi dari sistem Inventory & Production Management.",
        tech: ["Laravel 11", "Accurate.id API", "OAuth 2.0", "Queue Jobs", "MySQL"],
        metrics: [
            { label: "Direction", value: "2-way sync" },
            { label: "Auth", value: "OAuth 2.0" },
            { label: "Guard", value: "Idempotency" },
        ],
        color: "bg-hotpink",
        textColor: "text-cream",
        link: "https://github.com/roofi-dev",
        private: true,
        category: "API Integration",
        problem: "Transaksi stok dan produksi pupuk harus dicatat manual kedua kalinya di Accurate.id (sistem akuntansi), rawan duplikasi dan human error. Tidak ada sinkronisasi otomatis antara sistem produksi dan akuntansi.",
        solution: "Integrasi 2 arah via OAuth 2.0 & Queue Jobs dengan idempotency guard — setiap transaksi disinkronkan ke Accurate.id tepat satu kali, retry ditangani Queue Jobs tanpa memblokir UI.",
        outcomes: [
            "Sinkronisasi transaksi akuntansi 2 arah tanpa duplikasi (idempotency guard)",
            "OAuth 2.0 flow dengan Queue Jobs untuk async processing + retry",
            "UI tidak terblokir saat sinkronisasi berjalan",
            "Eliminasi pencatatan manual ganda antara sistem produksi dan akuntansi",
        ],
    },

    /* ─────────── TIER C · FREELANCE BUILDS ─────────── */

    {
        id: "005",
        slug: "inventory-production",
        division: "client",
        clientWork: true,
        title: "Inventory & Production Management",
        description: "Sistem manajemen produksi berbasis Modern Monolith (Laravel + React 18) untuk 3 kategori produk pupuk (NPK, Granul Phospat, Dolomit) dengan isolasi stok. Integrasi Accurate.id API, HPP, Neraca Massa, 16+ Artisan Commands.",
        longDescription: "Sistem manajemen produksi multi-kategori pupuk yang dibangun sebagai freelance commission. Modern Monolith dengan Laravel 11 + React 18 + Inertia.js mengelola 3 kategori produk (NPK, Granul Phospat, Dolomit) dengan isolasi stok per kategori. Integrasi 2 arah dengan Accurate.id API via OAuth 2.0 & Queue Jobs dilengkapi idempotency guard untuk sinkronisasi transaksi akuntansi tanpa duplikasi. Modul kalkulasi HPP, Neraca Massa (WIP/FP), approval stock transfer, dan 16+ custom Artisan Commands untuk audit dan rekonsiliasi data stok.",
        tech: ["Laravel 11", "React 18", "Inertia.js", "TailwindCSS", "MySQL", "Queue Jobs", "Accurate.id API"],
        metrics: [
            { label: "Categories", value: "3 pupuk" },
            { label: "Commands", value: "16+ Artisan" },
            { label: "Sync", value: "Accurate.id 2-way" },
        ],
        color: "bg-hotpink",
        textColor: "text-cream",
        link: "https://github.com/roofi-dev",
        private: true,
        category: "Freelance / Manufacturing",
        problem: "Manajemen produksi pupuk multi-kategori (NPK, Granul Phospat, Dolomit) tercampur tanpa isolasi stok. Kalkulasi HPP manual, neraca massa WIP/FP tidak terlacak, dan transaksi akuntansi harus dicatat ulang di Accurate.id rawan duplikasi.",
        solution: "Modern Monolith Laravel 11 + React 18 dengan isolasi stok per kategori produk. Modul kalkulasi HPP, Neraca Massa (WIP/FP), approval stock transfer, integrasi 2 arah Accurate.id dengan idempotency guard, dan 16+ custom Artisan Commands untuk audit dan rekonsiliasi.",
        outcomes: [
            "3 kategori produk pupuk (NPK, Granul Phospat, Dolomit) dengan isolasi stok",
            "Integrasi 2 arah Accurate.id API via OAuth 2.0 & Queue Jobs + idempotency guard",
            "Modul HPP, Neraca Massa (WIP/FP), dan approval stock transfer",
            "16+ custom Artisan Commands untuk audit dan rekonsiliasi data stok",
        ],
    },

    /* ─────────── TIER D · DEVOPS & AUTOMATION ─────────── */

    {
        id: "006",
        slug: "multi-vm-docker",
        division: "tools",
        title: "Multi-VM Docker Infrastructure",
        description: "Infrastruktur multi-VM (1 VPS, 2 VM) berbasis Docker + docker-compose dengan Nginx, script automasi deployment (deploy.sh), dan security audit & hardening pada Ubuntu Server.",
        longDescription: "Infrastruktur deployment untuk sistem internal manufaktur yang dirancang untuk menangani lalu lintas data produksi harian dan transaksi internal. Satu VPS menjalankan 2 VM terpisah via Docker + docker-compose, masing-masing dengan Nginx reverse proxy, isolasi layanan, dan script automasi deployment (deploy.sh) untuk zero-downtime update. Security audit & hardening komprehensif pada Ubuntu Server mencakup firewall, SSH hardening, fail2ban, dan patching rutin.",
        tech: ["Docker", "docker-compose", "Nginx", "Ubuntu Server", "Shell Scripting", "fail2ban"],
        metrics: [
            { label: "Topology", value: "1 VPS · 2 VM" },
            { label: "Deploy", value: "deploy.sh auto" },
            { label: "Hardening", value: "Security audit" },
        ],
        color: "bg-vivid",
        textColor: "text-cream",
        link: "https://github.com/roofi-dev",
        private: true,
        category: "DevOps / Infrastructure",
        problem: "Sistem internal manufaktur butuh infrastruktur yang menangani lalu lintas data produksi harian dan transaksi internal tanpa downtime saat update, dengan isolasi layanan dan security hardening yang serius — bukan shared hosting generik.",
        solution: "Multi-VM (1 VPS, 2 VM) berbasis Docker + docker-compose dengan Nginx reverse proxy, isolasi layanan per container, script automasi deployment (deploy.sh) untuk zero-downtime update, dan security audit & hardening pada Ubuntu Server.",
        outcomes: [
            "Topologi multi-VM (1 VPS, 2 VM) dengan isolasi layanan via Docker",
            "Automasi deployment zero-downtime via deploy.sh",
            "Security audit & hardening: firewall, SSH hardening, fail2ban, patching rutin",
            "Nginx reverse proxy menangani routing antar layanan internal",
        ],
    },
];

/* ─────────── Derived data — single source of truth ───────────
   Never hardcode these counts in components; import them. */

export const projectCount = projects.length;
export const appStoreCount = projects.filter((p) => p.appStore).length;
export const macAppCount = projects.filter((p) => p.category === "macOS").length;
export const clientWorkCount = projects.filter((p) => p.clientWork).length;

export function getProjectsByDivision(id: DivisionId): Project[] {
    return projects.filter((p) => p.division === id);
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
