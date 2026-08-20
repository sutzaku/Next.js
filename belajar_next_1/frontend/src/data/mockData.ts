export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
  quote: string;
}

// 1. Data Projects
const projects: Project[] = [
  {
    id: 1,
    title: "Telkom Smart Attendance & Permission System",
    category: "Web Dev",
    description: "Aplikasi web presensi siswa dan pengajuan izin berbasis QR Code Scan dan GPS Geolocation khusus lingkungan SMK Telkom Makassar.",
    tech: ["Next.js", "React", "Tailwind CSS", "Express.js", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/sutzaku",
  },
  {
    id: 2,
    title: "DigiLab RPL - Asset & Equipment Manager",
    category: "Web Dev",
    description: "Sistem manajemen inventaris laboratorium komputer RPL, peminjaman peralatan praktikum, dan pencatatan riwayat maintenance hardware.",
    tech: ["React.js", "Express.js", "Prisma", "MySQL", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/sutzaku",
  },
  {
    id: 3,
    title: "School E-Learning & Quiz Portal",
    category: "Web Dev",
    description: "Platform belajar interaktif jurusan RPL untuk pengerjaan kuis koding, pengumpulan modul praktikum, serta forum diskusi siswa.",
    tech: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/sutzaku",
  },
  {
    id: 4,
    title: "Redesign Portal Web SMK Telkom Makassar",
    category: "UI/UX",
    description: "Modernisasi antarmuka portal utama sekolah dan sistem PPDB online berfokus pada kecepatan akses dan responsivitas mobile.",
    tech: ["Figma", "UI/UX Design", "Prototyping", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/sutzaku",
  },
  {
    id: 5,
    title: "EduCanteen - E-Wallet & Ordering App",
    category: "Mobile App",
    description: "Aplikasi mobile pemesanan makanan dan minuman kantin sekolah secara online untuk memangkas waktu antrean saat jam istirahat.",
    tech: ["React Native", "Expo", "Express.js", "REST API"],
    demoUrl: "#",
    githubUrl: "https://github.com/sutzaku",
  },
  {
    id: 6,
    title: "Personal Interactive Portfolio Site",
    category: "Web Dev",
    description: "Website portofolio pribadi performa tinggi berkonsep tema gelap modern, sistem Server/Client components Next.js 14, dan animasi UI.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "https://github.com/sutzaku",
  },
];

// 2. Data Skills
const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "Next.js (App Router)", level: "Advanced", percentage: 88 },
      { name: "React.js & TypeScript", level: "Advanced", percentage: 85 },
      { name: "Tailwind CSS", level: "Advanced", percentage: 92 },
      { name: "JavaScript (ES6+)", level: "Advanced", percentage: 88 },
      { name: "HTML5 & Modern CSS", level: "Expert", percentage: 95 },
    ],
  },
  {
    title: "Backend & Database",
    icon: "🗄️",
    skills: [
      { name: "Node.js & Express.js", level: "Intermediate", percentage: 80 },
      { name: "RESTful API Architecture", level: "Advanced", percentage: 85 },
      { name: "MySQL & PostgreSQL", level: "Intermediate", percentage: 78 },
      { name: "Prisma ORM & JWT Auth", level: "Intermediate", percentage: 75 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: "Advanced", percentage: 90 },
      { name: "Figma (UI/UX Prototyping)", level: "Intermediate", percentage: 78 },
      { name: "Postman API Testing", level: "Advanced", percentage: 85 },
      { name: "VS Code & Vercel Deployment", level: "Expert", percentage: 95 },
    ],
  },
];

// 3. Data Sertifikat
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Januari 2025",
    credentialId: "EYX418055PDL",
    verificationUrl: "https://www.dicoding.com/certificates/EYX418055PDL",
  },
  {
    id: 2,
    title: "Belajar Membuat Aplikasi Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Februari 2025",
    credentialId: "MRZMDW831PY1",
    verificationUrl: "https://www.dicoding.com/certificates/MRZMDW831PY1",
  },
  {
    id: 3,
    title: "Belajar Membuat Aplikasi Back-End Pemula",
    issuer: "Dicoding Indonesia",
    date: "Maret 2025",
    credentialId: "N9ZO97M80X5D",
    verificationUrl: "https://www.dicoding.com/certificates/N9ZO97M80X5D",
  },
  {
    id: 4,
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "April 2025",
    credentialId: "FCC-RWD-AFIQRI",
    verificationUrl: "https://www.freecodecamp.org/certification/afiqriramdhn/responsive-web-design",
  },
  {
    id: 5,
    title: "Junior Web Developer (JWD)",
    issuer: "BNSP / LSP Informatika",
    date: "Mei 2025",
    credentialId: "REG.INA.50321.2025",
    verificationUrl: "https://lsp-informatika.id/sertifikat/verify",
  },
];

// 4. Data Testimoni
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ir. Muhammad Hatta, S.T., M.Kom.",
    role: "Guru Produktif RPL",
    company: "SMK Telkom Makassar",
    avatar: "👨‍🏫",
    stars: 5,
    quote:
      "Afiqri memiliki pemahaman logika pemrograman dan arsitektur web Next.js yang sangat kuat di kelas XII RPL 1. Proyek-proyek praktikum yang dia kerjakan selalu rapi, terstruktur, dan diselesaikan tepat waktu.",
  },
  {
    id: 2,
    name: "Ahmad Fauzan",
    role: "Ketua Kelas / Rekan Tim Project RPL",
    company: "XII RPL 1 - SMK Telkom Makassar",
    avatar: "🧑",
    stars: 5,
    quote:
      "Bekerja sama dalam tim project bareng Afiqri sangat menyenangkan. Dia tidak hanya jago slicing UI dengan Tailwind dan Next.js, tapi juga sabar membantu teman-teman saat solving bug di backend Express.",
  },
  {
    id: 3,
    name: "Nurlaila, S.Pd.",
    role: "Pembimbing Project Kreatif & Kewirausahaan",
    company: "SMK Telkom Makassar",
    avatar: "👩‍🏫",
    stars: 5,
    quote:
      "Inisiatif Afiqri dalam mengembangkan aplikasi digital sekolah sangat solutif. Kemampuan problem-solving dan dedikasinya dalam berkolaborasi tim layak diapresiasi tinggi.",
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProjects(): Promise<Project[]> {
  await delay(1200);
  return projects;
}

export async function getSkills(): Promise<SkillGroup[]> {
  await delay(1000);
  return skillGroups;
}

export async function getCertificates(): Promise<Certificate[]> {
  await delay(1200);
  return certificates;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(800);
  return testimonials;
}