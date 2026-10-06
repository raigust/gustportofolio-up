import avatar from "@/assets/avatar.jpg";
import figmaProject from "@/assets/figma.jpg";
import tiktokProject from "@/assets/tiktok.jpg";
import graphicProject from "@/assets/graphic.jpg";
import banjararumProject from "@/assets/banjararum.jpg";
import n8nProject from "@/assets/n8n.jpg";
import kantinAdminHomepage from "@/assets/kantinadmin-homepage.png";
import kantinAdminMenu from "@/assets/kantinadmin-menu.png";
import kantinAdminPesanan from "@/assets/kantinadmin-pesanan.png";
import kantinAdminRiwayat from "@/assets/kantinadmin-riwayat.png";
import kantinAdminDiskon from "@/assets/kantinadmin-diskon.png";
import kantinSiswaHomepage from "@/assets/kantinsiswa-homepage.png";
import kantinSiswaMenu from "@/assets/kantinsiswa-menu.png";
import kantinSiswaPesanan from "@/assets/kantinsiswa-pesanan.png";
import kantinSiswaPopup from "@/assets/kantinsiswa-popup.png";
import kantinSiswaProfile from "@/assets/kantinsiswa-profile.png";
import kantinSiswaRiwayat from "@/assets/kantinsiswa-riwayatpesanan.png";
import myApparelHomepage from "@/assets/myapparel-homepage.png";
import myApparelLogin from "@/assets/myapparel-login.png";
import myApparelCart from "@/assets/myapparel-carthomepage.png";
import myApparelOrder from "@/assets/myapparel-order.png";
import myApparelProfile from "@/assets/myapparel-profile.png";
<<<<<<< HEAD
import madingUbImg from "@/assets/mading-ub.png";
import malangFestImg from "@/assets/malangfestival.png";
import serbaOtomasiImg from "@/assets/serbaotomasi.png";
=======
>>>>>>> a3b46a5e338e404a84131df6c3c725feacd87bb7

export const profile = {
  name: "Raihan Gusti Anugrah",
  role: "Student of Brawijaya University",
  avatar,
  email: "gustifc066@gmail.com",
  phone: "+62 813-5884-1769",
  location: "Malang, East Java, Indonesia",
};

export const linkedinUrl = "https://www.linkedin.com/in/raihan-gusti-anugrah-325a13370/";

export type Category = "Web Developer" | "Digital Marketing" | "Graphic Design";

export type Screenshot = {
  id: string;
  label: string;
  src: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  title: string;
  category: Category;
  year: string;
  src: string;
  width: number;
  height: number;
  client: string;
  summary: string;
  details: string;
  link: string;
  screenshots: Screenshot[];
};

export type Education = {
  institution: string;
  major?: string;
  period?: string;
  result?: string;
  skills?: string[];
};

export type Certification = {
  name: string;
  issuer?: string;
  date?: string;
  credentialId?: string;
  description?: string;
  link?: string;
  image?: string;
};

export const projects: Project[] = [
  {
<<<<<<< HEAD
    id: "mading-ub",
    title: "Mading Ub Pusat Informasi",
    category: "Web Developer",
    year: "2026",
    src: madingUbImg,
    width: 1600,
    height: 900,
    client: "Universitas Brawijaya",
    summary: "Pusat informasi dan majalah dinding digital kampus Universitas Brawijaya untuk pengumuman, agenda kegiatan, dan berita mahasiswa.",
    details:
      "Platform mading digital terpadu untuk sivitas akademika Universitas Brawijaya (UB). Memudahkan mahasiswa mengakses informasi kegiatan kampus, event organisasi, info beasiswa, pengumuman akademik, dan berita terkini secara real-time dengan tampilan modern dan responsif.",
    link: "https://mading-ub.vercel.app/",
    screenshots: [
      { id: "cover", label: "Portal Mading UB", src: madingUbImg, width: 1600, height: 900 },
    ],
  },
  {
    id: "malang-festival",
    title: "Informasi Pertunjukan & konser Malang Raya",
    category: "Web Developer",
    year: "2026",
    src: malangFestImg,
    width: 1600,
    height: 900,
    client: "Malang Festival Community",
    summary: "Website kurasi dan pusat informasi jadwal pertunjukan seni, gigs musik, serta konser di kawasan Malang Raya.",
    details:
      "Direktori informasi pertunjukan, gigs, dan konser musik terupdate di Malang Raya. Membantu penikmat musik dan seni menemukan jadwal event, lineup musisi/artis, informasi tiket, dan detail lokasi acara dalam satu platform yang atraktif dan user-friendly.",
    link: "https://malangfestival.vercel.app/",
    screenshots: [
      { id: "cover", label: "Katalog Event & Konser", src: malangFestImg, width: 1600, height: 900 },
    ],
  },
  {
    id: "serba-otomasi",
    title: "Website promosi untuk Cendana Teknika Utama",
    category: "Web Developer",
    year: "2026",
    src: serbaOtomasiImg,
    width: 1600,
    height: 900,
    client: "PT. Cendana Teknika Utama (Partner: Fahmi Ahmadhika Ramadhan)",
    summary: "Website promosi solusi otomatisasi bisnis, alur kerja cerdas, dan integrasi digital modern untuk PT. Cendana Teknika Utama.",
    details:
      "Website promosi resmi solusi otomasi bisnis yang dikembangkan bersama web partner Fahmi Ahmadhika Ramadhan untuk PT. Cendana Teknika Utama. Menampilkan portofolio integrasi n8n, automated customer workflows, efisiensi operasional perusahaan, dan solusi transformasi digital enterprise.",
    link: "https://serbaotomasi.vercel.app/",
    screenshots: [
      { id: "cover", label: "Showcase Solusi Otomasi", src: serbaOtomasiImg, width: 1600, height: 900 },
    ],
  },
  {
=======
>>>>>>> a3b46a5e338e404a84131df6c3c725feacd87bb7
    id: "figma-jersey",
    title: "Figma Jersey Design App",
    category: "Graphic Design",
    year: "2023",
    src: figmaProject,
    width: 900,
    height: 1200,
    client: "Grade 10 UI/UX Project",
    summary: "First UI/UX design project for a jersey customization application using Figma.",
    details: "A first interface design exercise focused on creating a clear and useful jersey customization experience in Figma.",
    link: "",
    screenshots: [{ id: "cover", label: "Project preview", src: figmaProject, width: 900, height: 1200 }],
  },
  {
    id: "tiktok-carousel",
    title: "TikTok Carousel Content Design",
    category: "Digital Marketing",
    year: "2026",
    src: tiktokProject,
    width: 900,
    height: 900,
    client: "Internship Project",
    summary: "Creative content project for TikTok using Canva and Figma, covering informative topics about Indonesian culture and popular movies.",
    details: "Informative TikTok content covering Indonesian culture and popular movies, designed with Canva and Figma.",
    link: "",
    screenshots: [{ id: "cover", label: "Project preview", src: tiktokProject, width: 900, height: 900 }],
  },
  {
    id: "digital-graphic-portfolio",
    title: "Digital Graphic Designer Portfolio",
    category: "Graphic Design",
    year: "2025",
    src: graphicProject,
    width: 900,
    height: 1100,
    client: "Telkom DigiUp",
    summary: "Re-designing food brand logos and creating official project briefs.",
    details: "Redesigned food brand logos and created official project briefs as part of the Telkom DigiUp graphic design program.",
    link: "",
    screenshots: [{ id: "cover", label: "Project preview", src: graphicProject, width: 900, height: 1100 }],
  },
  {
    id: "banjararum-community",
    title: "Community Service Project",
    category: "Graphic Design",
    year: "2025",
    src: banjararumProject,
    width: 900,
    height: 1000,
    client: "Banjararum Village",
    summary: "Designed posters and visual materials for village activity reports and training events.",
    details: "Created visual materials and posters for village activity reports and community training events in Banjararum Village.",
    link: "",
    screenshots: [{ id: "cover", label: "Project preview", src: banjararumProject, width: 900, height: 1000 }],
  },
  {
    id: "n8n-automation",
    title: "Customer Service Automation with n8n",
    category: "Web Developer",
    year: "2026",
    src: n8nProject,
    width: 900,
    height: 1000,
    client: "PT. Cendana Teknika Utama",
    summary: "Built and tested customer service workflows using n8n integration tools.",
    details: "Built and tested customer service automation workflows during the internship at PT. Cendana Teknika Utama.",
    link: "",
    screenshots: [{ id: "cover", label: "Project preview", src: n8nProject, width: 900, height: 1000 }],
  },
  {
    id: "kantin-admin",
    title: "Kantin Admin",
    category: "Web Developer",
    year: "2026",
    src: kantinAdminHomepage,
    width: 1600,
    height: 900,
    client: "DOT Indonesia",
    summary: "Admin dashboard for school canteen management and certificate project from DOT Indonesia.",
    details:
      "This project was developed for the DOT Indonesia certification program in 2026. The admin app manages menu data, orders, discounts, sales history, and transaction monitoring for the canteen system.",
    link: "",
    screenshots: [
      { id: "homepage", label: "Homepage", src: kantinAdminHomepage, width: 1600, height: 900 },
      { id: "menu", label: "Menu management", src: kantinAdminMenu, width: 1600, height: 900 },
      { id: "pesanan", label: "Order management", src: kantinAdminPesanan, width: 1600, height: 900 },
      { id: "riwayat", label: "Transaction history", src: kantinAdminRiwayat, width: 1600, height: 900 },
      { id: "diskon", label: "Discount feature", src: kantinAdminDiskon, width: 1600, height: 900 },
    ],
  },
  {
    id: "kantin-siswa",
    title: "Kantin Siswa",
    category: "Web Developer",
    year: "2026",
    src: kantinSiswaHomepage,
    width: 1600,
    height: 900,
    client: "DOT Indonesia",
    summary: "Student canteen website for ordering food and managing purchases from the school canteen.",
    details:
      "Built as part of the same DOT Indonesia certification project, the student app supports browsing menus, placing orders, tracking order status, viewing profiles, and managing purchase history.",
    link: "",
    screenshots: [
      { id: "homepage", label: "Homepage", src: kantinSiswaHomepage, width: 1600, height: 900 },
      { id: "menu", label: "Menu list", src: kantinSiswaMenu, width: 1600, height: 900 },
      { id: "pesanan", label: "Order status", src: kantinSiswaPesanan, width: 1600, height: 900 },
      { id: "popup", label: "Order popup", src: kantinSiswaPopup, width: 1600, height: 900 },
      { id: "profile", label: "Profile", src: kantinSiswaProfile, width: 1600, height: 900 },
      { id: "riwayat", label: "Order history", src: kantinSiswaRiwayat, width: 1600, height: 900 },
    ],
  },
  {
    id: "my-apparel",
    title: "My Apparel",
    category: "Web Developer",
    year: "2025",
    src: myApparelHomepage,
    width: 1600,
    height: 900,
    client: "Final Project",
    summary: "Apparel storefront and order system built as the final project for 2025.",
    details:
      "My Apparel is my final project in 2025. The application focuses on an apparel shopping experience with login, homepage, cart, order flow, and profile management using a modern web stack.",
    link: "",
    screenshots: [
      { id: "homepage", label: "Homepage", src: myApparelHomepage, width: 1600, height: 900 },
      { id: "login", label: "Login", src: myApparelLogin, width: 1600, height: 900 },
      { id: "cart", label: "Cart", src: myApparelCart, width: 1600, height: 900 },
      { id: "order", label: "Order", src: myApparelOrder, width: 1600, height: 900 },
      { id: "profile", label: "Profile", src: myApparelProfile, width: 1600, height: 900 },
    ],
  },
];

export const clients = [
  "PT. CENDANA TEKNIKA UTAMA",
  "SMK TELKOM MALANG",
  "TELKOM DIGIUP",
];

export const stats = [
  { value: "89.575", label: "Grade at SMK Telkom Malang" },
  { value: "640", label: "TOEIC score" },
  { value: "575", label: "UKBI score" },
<<<<<<< HEAD
  { value: "11", label: "Selected projects" },
=======
  { value: "8", label: "Selected projects" },
>>>>>>> a3b46a5e338e404a84131df6c3c725feacd87bb7
];

export const services = [
  {
    title: "Web Development",
    items: ["Next.js", "Node.js", "Express.js", "Prisma", "MySQL"],
  },
  {
    title: "Graphic Design",
    items: ["Figma", "Canva", "Photoshop", "UI/UX design"],
  },
  {
    title: "Digital Marketing",
    items: ["Content design", "Video editing", "Customer service", "n8n automation"],
  },
];

export const stack = [
  { name: "Figma", use: "UI/UX design", mark: "F", color: "#f24e1e" },
  { name: "Next.js", use: "Frontend development", mark: "N", color: "#ffffff" },
  { name: "Node.js", use: "Backend runtime", mark: "JS", color: "#8cc84b" },
  { name: "Express.js", use: "API server", mark: "E", color: "#d6d3d1" },
  { name: "Prisma", use: "ORM & database access", mark: "P", color: "#2d3748" },
  { name: "MySQL", use: "Database", mark: "SQL", color: "#f29111" },
  { name: "Canva", use: "Graphic design", mark: "C", color: "#00c4cc" },
  { name: "Photoshop", use: "Image editing", mark: "Ps", color: "#31a8ff" },
  { name: "n8n", use: "Automation workflow", mark: "n8n", color: "#ff6d5a" },
];

export const experience = [
  {
    role: "Web Developer & Digital Marketing Intern",
    company: "PT. Cendana Teknika Utama (On-site)",
    year: "2026",
    description:
      "Learned that digital marketing needs strategy, creativity, and teamwork, not just social media posts. Sawojajar, Malang. Skills: Video Editing, Web Development, Customer Service.",
  },
];

export const education: Education[] = [
  {
    institution: "SMK Telkom Malang",
    major: "Informatics / Software Engineering",
    period: "2023 — 2026",
    result: "Grade: 89.575",
    skills: ["Node.js", "Graphic Design"],
  },
  { institution: "Universitas Brawijaya (University of Brawijaya)" },
];

export const certifications: Certification[] = [
  { name: "Personal Branding & Achievement Masterclass Seminar", issuer: "Microtech Computer Academy", date: "August 2024", credentialId: "322/MCT-CERT/SMS-VIII-2026", link: "https://www.linkedin.com/in/raihan-gusti-anugrah-325a13370/overlay/Certifications/327569836/treasury/?profileId=ACoAAFv8nw0BMPt3MQkZtxkvWb7BsBvN0T474n8" },
  { name: "Soft Skills Certificate of Participation", issuer: "Microtech Computer Academy", link: "https://www.linkedin.com/in/raihan-gusti-anugrah-325a13370/overlay/Certifications/327569836/treasury/?profileId=ACoAAFv8nw0BMPt3MQkZtxkvWb7BsBvN0T474n8" },
  { name: "Digital Graphic Designer Certificate", issuer: "PT Telkom Prima Cipta Certifia (Telkom DigiUp)", credentialId: "IC-0230740", link: "https://www.linkedin.com/in/raihan-gusti-anugrah-325a13370/overlay/Certifications/424104106/treasury/?profileId=ACoAAFv8nw0BMPt3MQkZtxkvWb7BsBvN0T474n8" },
  { name: "Indonesian Language Proficiency Test (UKBI)", issuer: "Language Development and Fostering Agency", date: "July 2024", description: "Intermediate (MADYA) — Score: 575", link: "https://www.linkedin.com/in/raihan-gusti-anugrah-325a13370/overlay/Certifications/421109396/treasury/?profileId=ACoAAFv8nw0BMPt3MQkZtxkvWb7BsBvN0T474n8" },
  { name: "TOEIC", issuer: "International Test Center (DOT Indonesia)", date: "April 2026", description: "Score: 640", link: "https://www.linkedin.com/in/raihan-gusti-anugrah-325a13370/overlay/Certifications/419612535/treasury/?profileId=ACoAAFv8nw0BMPt3MQkZtxkvWb7BsBvN0T474n8" },
  { name: "Fullstack Website Development Competency Assessment", issuer: "DOT Indonesia", date: "April 2026", credentialId: "ID/DOT/20260405/0002_530", description: "School food ordering app using Next.js, Node.js, Express, and MySQL.", link: "https://www.linkedin.com/in/raihan-gusti-anugrah-325a13370/overlay/Certifications/419336895/treasury/?profileId=ACoAAFv8nw0BMPt3MQkZtxkvWb7BsBvN0T474n8" },
  { name: "IT Specialist — Software Development", date: "April 2026", link: "https://www.linkedin.com/in/raihan-gusti-anugrah-325a13370/overlay/Certifications/1679111333/treasury/?profileId=ACoAAFv8nw0BMPt3MQkZtxkvWb7BsBvN0T474n8" },
  { name: "DigiUp Graphic Design Certification", issuer: "Lembaga Sertifikasi Profesi Teknologi Digital", date: "September 2025", link: "https://www.linkedin.com/in/raihan-gusti-anugrah-325a13370/overlay/Certifications/215608353/treasury/?profileId=ACoAAFv8nw0BMPt3MQkZtxkvWb7BsBvN0T474n8" },
];

export const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/raihan-gusti-anugrah-325a13370/",
  },
];
