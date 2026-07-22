"use client";

import {
  ExternalLink,
  Download,
  Smartphone,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

// ── Types ──
interface Project {
  title: string;
  desc: string;
  url: string;
  store?: "apple" | "google";
  techs?: string[];
}

interface Experience {
  role: string;
  company: string;
  period: string;
  desc: string;
}

interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
}

// ── Data ──
const experience: Experience[] = [
  {
    role: "Frontend Developer",
    company: "PT Astra International Tbk",
    period: "Oct 2022 - Present",
    desc: "Functioning as a Frontend Developer with a sharp focus on high-impact mobile application development for PT Astra International. My role involves the end-to-end implementation of user-facing features, complex business logic, and seamless integration with backend services. I was the primary developer for the full customer journey on our e-commerce platform, including the personalized homepage, catalog, checkout, and payment integration. This involved collaborating with other teams to turn business needs into reliable React Native code, with a constant focus on optimizing performance and user experience across all applications.",
  },
  {
    role: "Fullstack Developer",
    company: "PT Waskita Karya (Persero)",
    period: "Sep 2020 - Dec 2021",
    desc: "Functioned as a Prohire Programmer, developing and deploying internal web and mobile applications designed to optimize company operations. Managed the full stack for applications, utilizing PHP Laravel for the backend and React for the frontend.",
  },
];

const education: Education[] = [
  {
    school: "Trilogi University",
    degree: "Information System - Software Engineering",
    period: "2023 - Present",
    gpa: "3.71",
  },
  {
    school: "CCIT Fakultas Teknik Universitas Indonesia",
    degree: "Information Technology",
    period: "2020 - 2022",
    gpa: "3.53",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "JavaScript",
      "TypeScript",
      "React JS",
      "Next JS",
      "React Native",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js (Express, Adonis)", "PHP (CodeIgniter, Laravel)"],
  },
  {
    title: "Database",
    skills: ["Microsoft SQL Server", "PostgreSQL", "MySQL"],
  },
  {
    title: "Other",
    skills: ["Figma", "Git (GitHub, GitLab)", "Docker"],
  },
];

const mobileProjects: Project[] = [
  {
    title: "Auto2000 DigiRoom",
    desc: "Digital showroom app for Auto2000 - explore Toyota vehicles, schedule test drives, and manage car service appointments.",
    url: "https://apps.apple.com/id/app/auto2000-digiroom/id421805050",
    store: "apple",
    techs: [
      "React Native",
      "TypeScript",
      "Expo",
      "Expo Router",
      "Firebase Geolocation",
      "Firebase Messaging",
      "Firebase Remote Config",
      "SAP Emarsys",
      "MobX State Tree",
      "SSL Pinning",
      "Axios",
      "OTA Updates",
      "GA4",
      "Datadog",
    ],
  },
  {
    title: "Auto Intelligence",
    desc: "Internal app for Toyota staff activity - discount approval, sales analytics, and staff performance tracking.",
    url: "",
    techs: [
      "React Native",
      "TypeScript",
      "Expo",
      "Expo Router",
      "Firebase Messaging",
      "Firebase Remote Config",
      "MobX State Tree",
      "SSL Pinning",
      "OAuth2 Authentication",
      "Power BI Client",
      "Axios",
      "Datadog",
    ],
  },
  {
    title: "DaihatsuKu",
    desc: "Official Daihatsu Indonesia app - vehicle information, services, and customer engagement on mobile.",
    url: "https://apps.apple.com/id/app/daihatsuku/id1265062687",
    store: "apple",
    techs: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "Firebase Geolocation",
      "Firebase Messaging",
      "Firebase Remote Config",
      "MoEngage",
      "GA4",
      "MobX State Tree",
      "SSL Pinning",
      "Axios",
      "Sentry",
    ],
  },
  {
    title: "SmartApps",
    desc: "Internal app for Astra International. Features include STO Asset, an asset counter for tracking Astra International assets using QR and barcode scanning.",
    url: "",
    techs: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "Firebase Remote Config",
      "MobX State Tree",
      "SSL Pinning",
      "Axios",
      "Expo Camera",
      "Realm",
      "Sentry",
    ],
  },
  {
    title: "Smartopname",
    desc: "Internal app for attendance data entry and management (Private application).",
    url: "",
    techs: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "Redux Toolkit",
      "Axios",
    ],
  },
  {
    title: "Harsa",
    desc: "Internal app for checking building construction prices and cost estimation (Private application).",
    url: "",
    techs: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "Redux Toolkit",
      "Axios",
    ],
  },
];

const webProjects: Project[] = [
  {
    title: "Quiz App",
    desc: "Educational web to create interactive quizzes for online learning and learning evaluation. Built with Next.js.",
    url: "https://github.com/Lutfialam/quiz-nextjs",
  },
  {
    title: "Lumah Shop",
    desc: "Shoe store website featuring sales of various shoes - sports, daily, school, and others. Built with Java web, Hibernate, JSF, and Bootstrap.",
    url: "",
  },
  {
    title: "Enjoy Travel",
    desc: "Website containing information about destinations in Indonesia. Built with Java Servlet and Tailwind CSS.",
    url: "",
  },
  {
    title: "Yayasan Indagi",
    desc: "Donation collection web application for charitable foundation. Built with Laravel.",
    url: "",
  },
  {
    title: "TextFromVid",
    desc: "Web app to search text from YouTube videos using external API. Built with Vue.js and Vuetify.",
    url: "",
  },
  {
    title: "Pengaduan Masyarakat",
    desc: "Public complaint reporting system for managing community reports. Built with Laravel.",
    url: "",
  },
];

// ── Project Card ──
function ProjectCard({ project }: { project: Project }) {
  const Tag = project.url ? "a" : "div";
  const linkProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      {...linkProps}
      className="group block p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
          style={{ backgroundColor: "#6366f1" }}
        >
          {project.store ? <Smartphone size={18} /> : <Globe size={18} />}
        </div>
        {project.url && (
          <ExternalLink
            size={16}
            className="text-gray-400 group-hover:text-indigo-500 transition-colors"
          />
        )}
      </div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
        {project.title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {project.desc}
      </p>
      {project.techs && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.techs.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
            >
              {t}
            </span>
          ))}
        </div>
      )}
      {project.store && (
        <span className="inline-block mt-3 text-xs font-medium text-indigo-500 dark:text-indigo-400">
          {project.store === "apple" ? "App Store" : "Google Play"}
        </span>
      )}
      {!project.store && !project.url && (
        <span className="inline-block mt-3 text-xs font-medium text-gray-400 dark:text-gray-500">
          Internal Project
        </span>
      )}
    </Tag>
  );
}

// ── Section Wrapper ──
function Section({
  id,
  title,
  icon,
  children,
  className = "",
}: {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={
        "py-20 px-6 md:px-16 lg:px-24 border-b border-gray-100 dark:border-gray-800 " +
        className
      }
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          {icon && (
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: "#6366f1" }}
            >
              {icon}
            </div>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

// ── Main Page ──
export default function Home() {
  const primary = "#6366f1";

  return (
    <>
      {/* ─────── HERO ─────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-900"
      >
        <div className="hero-rectangle" />
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-4">
                Frontend Developer
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Lutfi <span style={{ color: primary }}>Alamsyah</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                React Native &amp; Frontend Developer with experience building,
                deploying, and optimizing scalable digital experiences across
                web and mobile platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#mobile-projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: primary }}
                >
                  <Smartphone size={18} />
                  View My Work
                </a>
                <a
                  href="#cv"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 text-sm font-medium transition-all duration-300"
                  style={{ borderColor: primary, color: primary }}
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── ABOUT ─────── */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image first on mobile */}
          <div className="flex justify-center md:order-2">
            <img
              src="/profile.png"
              alt="Lutfi Alamsyah"
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div className="md:order-1">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I am an eager and resourceful Frontend Developer who thrives on
              building, deploying, and optimizing scalable digital experiences
              across web and mobile platforms. I actively seek out new
              technology and best practices, focusing on continuous learning to
              deliver high-quality, maintainable code.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Based in Depok, Jawa Barat, Indonesia. Currently working as a
              Frontend Developer at PT Astra International Tbk (Sunter, Jakarta
              Utara placement), with a sharp focus on high-impact mobile
              application development using React Native.
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                📍
              </span>{" "}
              Depok, Jawa Barat
              <span className="mx-2">·</span>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                📧
              </span>{" "}
              lutfialamsyah1003@gmail.com
            </div>
          </div>
        </div>
      </Section>

      {/* ─────── EXPERIENCE ─────── */}
      <Section
        id="experience"
        title="Experience"
        icon={<Briefcase size={20} />}
      >
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-800" />
          {experience.map((exp) => (
            <div key={exp.company} className="relative pl-10 pb-12 last:pb-0">
              {/* Dot on timeline */}
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white dark:border-gray-900 z-10" />
              {/* Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3 gap-1">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-gray-400 dark:text-gray-500 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────── MOBILE PROJECTS ─────── */}
      <Section
        id="mobile-projects"
        title="Mobile Applications"
        icon={<Smartphone size={20} />}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mobileProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>

      {/* ─────── WEB PROJECTS ─────── */}
      <Section
        id="web-projects"
        title="Web Projects"
        icon={<Globe size={20} />}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((p) => {
            const Tag = p.url ? "a" : "div";
            const linkProps = p.url
              ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Tag
                key={p.title}
                {...linkProps}
                className="group block p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: "#6366f1" }}
                  >
                    <Globe size={18} />
                  </div>
                  {p.url && (
                    <ExternalLink
                      size={16}
                      className="text-gray-400 group-hover:text-indigo-500 transition-colors"
                    />
                  )}
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
                {!p.url && (
                  <span className="inline-block mt-3 text-xs font-medium text-gray-400 dark:text-gray-500">
                    Archived Project
                  </span>
                )}
              </Tag>
            );
          })}
        </div>
      </Section>

      {/* ─────── EDUCATION ─────── */}
      <Section
        id="education"
        title="Education & Certification"
        icon={<GraduationCap size={20} />}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
            >
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                {edu.school}
              </h3>
              <p className="text-sm text-indigo-500 dark:text-indigo-400 font-medium mb-2">
                {edu.degree}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
                <span>{edu.period}</span>
                <span>GPA: {edu.gpa}</span>
              </div>
            </div>
          ))}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
              BNSP Certification
            </h3>
            <p className="text-sm text-indigo-500 dark:text-indigo-400 font-medium mb-2">
              Certificate of Competence - Programmer
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Indonesian Professional Certification Authority (BNSP) · December
              2022
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
              2nd Place - Programming Competition
            </h3>
            <p className="text-sm text-indigo-500 dark:text-indigo-400 font-medium mb-2">
              STMIK
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              April 2020
            </p>
          </div>
        </div>
      </Section>

      {/* ─────── CV ─────── */}
      <Section id="cv" title="Resume / CV">
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
            Download my resume to learn more about my professional experience,
            skills, and education background.
          </p>
          <a
            href="/resources/Frontend-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white text-base font-medium transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
            style={{ backgroundColor: primary }}
          >
            <Download size={20} />
            Download CV
          </a>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
            PDF format · Updated 2024
          </p>
        </div>
      </Section>

      {/* ─────── CONTACT ─────── */}
      <section id="contact" className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Have a project in mind or just want to say hi? Let&apos;s connect.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:lutfialamsyah1003@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/lutfialamsyah/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://wa.me/6283879926883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
        <p className="text-center text-xs text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Lutfi Alamsyah. Built with Next.js
          &amp; Tailwind CSS.
        </p>
      </footer>
    </>
  );
}
