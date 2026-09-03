"use client";

import { useState } from "react";
import {
  ExternalLink,
  Download,
  Smartphone,
  Globe,
  Briefcase,
  GraduationCap,
  Star,
  Mail,
  MapPin,
  Phone,
  Lock,
  Hammer,
  ArrowRight,
} from "lucide-react";

// ── Types ──
interface Project {
  title: string;
  subtitle: string;
  desc: string;
  url?: string;
  icon?: string;
  shot?: string;
  shotW?: number;
  shotH?: number;
  mono?: string;
  rating?: number;
  ratings?: string;
  audience: "Public" | "Internal";
  company: string;
  /** What I personally owned — the single most important line on a card. */
  role: string;
  /** Who I built it with. */
  scope?: string;
  /** TODO: fill from Sentry (crash-free rate), Datadog (start time / API p95),
   *  App Store Connect + Play Console (MAU, ANR, rating trend), CI (coverage,
   *  Maestro runtime, release cadence). Renders only when set. */
  impact?: string;
  /** Shows a "Full rebuild in progress" badge and labels the screenshot. */
  rebuilding?: boolean;
  techs: string[];
}

interface Experience {
  role: string;
  company: string;
  period: string;
  summary: string;
  points: string[];
}

// ── Data ──
const stats = [
  { value: "4+", label: "Years experience" },
  { value: "6", label: "Production apps" },
  { value: "2", label: "Public on App Store" },
  { value: "2", label: "Full rebuilds underway" },
];

const experience: Experience[] = [
  {
    role: "Frontend Developer (React Native)",
    company: "PT Astra International Tbk",
    period: "Oct 2022 — Present",
    summary:
      "Building and maintaining 6 React Native applications in production — including 2 public apps live on the Apple App Store — serving Astra International's automotive retail and internal operations divisions.",
    points: [
      "Implemented Auto2000 Digiroom's customer journey (personalized homepage, catalog, checkout, and payment integration), a public digital showroom app for Toyota Indonesia, working closely with design, product, and backend teams.",
      "Implemented push notification flows via Firebase Messaging for distinct business cases — service booking reminders, discount/approval workflow alerts, and loyalty and promotional campaigns.",
      "Implemented security and reliability features across apps including SSL Pinning, OAuth2 authentication, and OTA updates to reduce release friction.",
      "Debugged cross-platform issues using native-level tooling (Xcode console logs on iOS, Logcat on Android) alongside JS-level debugging, and profiled performance using React DevTools Profiler and Datadog Performance Explorer.",
      "Integrated analytics and monitoring tooling (GA4, Datadog, Sentry, Power BI Client) to track app performance, usage, and crash reporting across the app portfolio.",
      "Wrote unit and component tests with Jest and React Native Testing Library, and end-to-end tests with Maestro; distributed QA/internal builds via EAS Build for the PQA team ahead of release.",
      "Worked within large, cross-functional squads — BPA, PQA, Product Managers, and DevSecOps engineers — following Agile/Scrum practices to translate business requirements into technical specs.",
      "Used MobX State Tree or Redux Toolkit for state management across apps with complex, multi-screen business logic.",
      "Managed source control and release workflows using Git and TFS (Team Foundation Server) across multiple app repositories.",
    ],
  },
  {
    role: "Fullstack Developer (Prohire Programmer)",
    company: "PT Waskita Karya (Persero)",
    period: "Sep 2020 — Dec 2021",
    summary:
      "Developed and deployed internal web and mobile applications to optimize company operations, managing the full stack with PHP Laravel on the backend and React on the frontend.",
    points: [
      "Built Smartopname (attendance data entry/management) and Harsa (construction cost estimation) using React Native, React Navigation, Redux Toolkit, and Axios.",
      "Built and maintained REST APIs consumed by both web and mobile clients, ensuring consistent data across platforms.",
    ],
  },
];

const education = [
  {
    school: "Trilogi University",
    degree: "B.S. Information System",
    period: "2023 — Present",
    gpa: "3.71",
  },
  {
    school: "CCIT Fakultas Teknik Universitas Indonesia",
    degree: "Diploma, Information Technology (Software Engineering)",
    period: "2020 — 2022",
    gpa: "3.53",
  },
];

const awards = [
  {
    title: "Certificate of Competence — Programmer",
    issuer: "Indonesian Professional Certification Authority (BNSP)",
    date: "December 2022",
  },
  {
    title: "2nd Place — Programming Competition",
    issuer: "STMIK AntarBangsa",
    date: "April 2020",
  },
];

const skillGroups = [
  {
    title: "Core — daily, in production",
    skills: [
      "React Native",
      "TypeScript",
      "Expo",
      "Expo Router",
      "React Navigation",
      "MobX State Tree",
      "Redux Toolkit",
      "Jest",
      "React Native Testing Library",
      "Maestro (E2E)",
      "Firebase Messaging",
      "Firebase Remote Config",
      "SSL Pinning",
      "OTA Updates",
      "OAuth2",
      "EAS Build",
      "Git",
    ],
  },
  {
    title: "Working knowledge",
    skills: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Node.js (Express, AdonisJS)",
      "PHP (Laravel)",
      "Realm",
      "Expo Camera",
      "Datadog",
      "Sentry",
      "Google Analytics 4",
      "REST API design",
      "CI/CD",
    ],
  },
  {
    title: "Familiar",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Microsoft SQL Server",
      "Docker",
      "Figma",
      "TFS",
      "Power BI Client",
      "SAP Emarsys",
      "MoEngage",
    ],
  },
];

const SQUAD = "Cross-functional squad — PM, BPA, PQA, DevSecOps";

const mobileProjects: Project[] = [
  {
    title: "AUTO2000 Digiroom",
    subtitle: "Toyota Indonesia · Digital showroom",
    desc: "Public digital showroom app for Auto2000/Toyota Indonesia — browse vehicles, schedule test drives, and manage car service appointments. Now being rebuilt from the ground up: new architecture, new design system, and reworked business logic, shipped while the existing app stays live for its users.",
    role: "Feature owner — the customer journey end to end: personalized homepage, catalog, checkout, and payment integration",
    scope: SQUAD,
    rebuilding: true,
    url: "https://apps.apple.com/id/app/auto2000-digiroom/id421805050",
    icon: "/apps/digiroom-icon.jpg",
    shot: "/apps/digiroom-shot.jpg",
    shotW: 606,
    shotH: 1400,
    rating: 4.5,
    ratings: "876 ratings",
    audience: "Public",
    company: "PT Astra International Tbk",
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
      "GA4",
      "Datadog",
    ],
  },
  {
    title: "DaihatsuKu",
    subtitle: "Daihatsu Indonesia · Owner app",
    desc: "Official Daihatsu Indonesia app for vehicle information, service booking, and customer engagement. Currently a full ground-up rebuild — reimplemented screens, restyled UI, and revised business logic — released incrementally without disrupting existing owners.",
    role: "Vehicle information, service booking, and the push notification flows behind service reminders and promotional campaigns",
    scope: SQUAD,
    rebuilding: true,
    url: "https://apps.apple.com/id/app/daihatsuku/id1265062687",
    icon: "/apps/daihatsuku-icon.jpg",
    shot: "/apps/daihatsuku-shot.jpg",
    shotW: 612,
    shotH: 1400,
    rating: 4.3,
    ratings: "262 ratings",
    audience: "Public",
    company: "PT Astra International Tbk",
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
      "Sentry",
    ],
  },
  {
    title: "Auto Intelligence",
    subtitle: "Toyota staff · Analytics & approvals",
    desc: "Internal analytics app for Toyota staff — discount approval workflows, sales analytics, and staff performance tracking.",
    role: "Discount approval workflows and Power BI-backed sales analytics, behind OAuth2 and SSL pinning",
    mono: "AI",
    audience: "Internal",
    company: "PT Astra International Tbk",
    techs: [
      "React Native",
      "TypeScript",
      "Expo",
      "Expo Router",
      "Firebase Messaging",
      "Power BI Client",
      "OAuth2",
      "MobX State Tree",
      "SSL Pinning",
      "Datadog",
    ],
  },
  {
    title: "SmartApps",
    subtitle: "Astra International · Asset management",
    desc: "Internal asset management app including STO Asset, a QR/barcode-based asset tracking counter for Astra International.",
    role: "STO Asset — offline-capable QR/barcode asset counting with Realm local storage",
    mono: "SA",
    audience: "Internal",
    company: "PT Astra International Tbk",
    techs: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "Expo Camera",
      "Realm",
      "Firebase Remote Config",
      "MobX State Tree",
      "SSL Pinning",
      "Sentry",
    ],
  },
  {
    title: "Smartopname",
    subtitle: "Waskita Karya · Attendance",
    desc: "Internal app for attendance data entry and management across company sites.",
    role: "Attendance data entry and management flows",
    mono: "SO",
    audience: "Internal",
    company: "PT Waskita Karya (Persero)",
    techs: ["React Native", "React Navigation", "Redux Toolkit", "Axios"],
  },
  {
    title: "Harsa",
    subtitle: "Waskita Karya · Cost estimation",
    desc: "Internal app for checking building construction prices and producing cost estimations.",
    role: "Construction price lookup and cost estimation flows",
    mono: "HA",
    audience: "Internal",
    company: "PT Waskita Karya (Persero)",
    techs: ["React Native", "React Navigation", "Redux Toolkit", "Axios"],
  },
];

const webProjects = [
  {
    title: "Quiz App",
    desc: "Educational web app to create interactive quizzes for online learning and evaluation.",
    url: "https://github.com/Lutfialam/quiz-nextjs",
    stack: "Next.js",
  },
  {
    title: "Yayasan Indagi",
    desc: "Donation collection platform for a charitable foundation.",
    url: "",
    stack: "Laravel",
  },
  {
    title: "Pengaduan Masyarakat",
    desc: "Public complaint reporting system for managing and triaging community reports.",
    url: "",
    stack: "Laravel",
  },
];

// ── Primitives ──
const PRIMARY = "#6366f1";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
      {children}
    </p>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 text-[11px] font-medium rounded-md border border-indigo-100 dark:border-indigo-500/20 bg-indigo-50/70 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300">
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  lead,
  icon,
  children,
  tone = "base",
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  tone?: "base" | "muted";
}) {
  return (
    <section
      id={id}
      className={
        "scroll-mt-20 py-24 px-6 md:px-16 lg:px-24 " +
        (tone === "muted"
          ? "bg-gray-50/70 dark:bg-gray-900/40 border-y border-gray-100 dark:border-gray-800"
          : "")
      }
    >
      <div className="max-w-5xl mx-auto">
        <header className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            {icon && (
              <span className="w-9 h-9 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20">
                {icon}
              </span>
            )}
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          {lead && (
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {lead}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

// ── Project cards ──
function AppleLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-3 h-3 shrink-0"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.05 12.54c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.62-1.7-3.19-1.72-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.87-.76-1.48.02-2.84.86-3.6 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.25 2.74 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.7.71 2.87.69 1.18-.02 1.93-1.07 2.65-2.13.83-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.32-3.5zM14.88 5.9c.6-.73 1.01-1.75.9-2.77-.87.04-1.93.58-2.56 1.31-.56.65-1.06 1.69-.93 2.69.97.07 1.97-.49 2.59-1.23z" />
    </svg>
  );
}

function StoreBadge({ project }: { project: Project }) {
  if (project.audience === "Internal") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-500 dark:text-gray-400 px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <Lock size={11} />
        Internal project
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-700 dark:text-gray-200 px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <AppleLogo />
      App Store
      {project.rating && (
        <>
          <span className="text-gray-300 dark:text-gray-600">·</span>
          <Star size={11} className="fill-amber-400 text-amber-400" />
          {project.rating.toFixed(1)}
        </>
      )}
    </span>
  );
}

function RebuildBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-400/10 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-400/25">
      <Hammer size={11} />
      Full rebuild in progress
    </span>
  );
}

/** Role / Scope / Impact — what I owned, not just what the app does. */
function Ownership({ project }: { project: Project }) {
  return (
    <dl className="space-y-2.5 mb-5 pl-4 border-l-2 border-indigo-100 dark:border-indigo-500/25">
      <div>
        <dt className="text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-600 dark:text-indigo-400 mb-1">
          My role
        </dt>
        <dd className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.role}
        </dd>
      </div>
      {project.scope && (
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-1">
            Team
          </dt>
          <dd className="text-sm text-gray-600 dark:text-gray-400">
            {project.scope}
          </dd>
        </div>
      )}
      {project.impact && (
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-1">
            Impact
          </dt>
          <dd className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.impact}
          </dd>
        </div>
      )}
    </dl>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 transition-all duration-300 hover:border-indigo-200 dark:hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5">
      <div className="grid sm:grid-cols-[190px_1fr] gap-0">
        {/* Screenshot rail — App Store artwork at its native 9:16 ratio */}
        <div className="relative hidden sm:flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-700 p-5 overflow-hidden">
          <img
            src={project.shot}
            alt={`${project.title} — app screenshot`}
            loading="lazy"
            width={project.shotW}
            height={project.shotH}
            className="h-[300px] w-auto shrink-0 rounded-xl shadow-2xl ring-1 ring-black/20 transition-transform duration-500 group-hover:-translate-y-1.5"
          />
          {project.rebuilding && (
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-[10px] font-medium text-white whitespace-nowrap">
              New design
            </span>
          )}
        </div>
        {/* Body */}
        <div className="p-6 md:p-7">
          <div className="flex items-start gap-4 mb-4">
            <img
              src={project.icon}
              alt={`${project.title} app icon`}
              className="w-14 h-14 rounded-xl object-cover ring-1 ring-black/5 dark:ring-white/10 shadow-sm shrink-0"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                  {project.title}
                </h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} on the App Store`}
                  className="shrink-0 text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  <ExternalLink size={17} />
                </a>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <StoreBadge project={project} />
            {project.ratings && (
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {project.ratings}
              </span>
            )}
            {project.rebuilding && <RebuildBadge />}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
            {project.desc}
          </p>
          <Ownership project={project} />
          <div className="flex flex-wrap gap-1.5">
            {project.techs.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function CompactProject({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 transition-all duration-300 hover:border-indigo-200 dark:hover:border-indigo-500/40 hover:shadow-lg hover:-translate-y-0.5">
      <div className="flex items-start gap-3.5 mb-4">
        <span
          className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-white text-sm font-bold tracking-tight shadow-sm"
          style={{
            background: `linear-gradient(135deg, ${PRIMARY} 0%, #4f46e5 100%)`,
          }}
          aria-hidden="true"
        >
          {project.mono}
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-tight">
            {project.title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {project.subtitle}
          </p>
        </div>
      </div>
      <div className="mb-3">
        <StoreBadge project={project} />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
        {project.desc}
      </p>
      <div className="mb-5 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-600 dark:text-indigo-400 mb-1">
          My role
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.role}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {project.techs.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </article>
  );
}

// ── Main Page ──
export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const featured = mobileProjects.filter((p) => p.audience === "Public");
  const internal = mobileProjects.filter((p) => p.audience === "Internal");
  const visibleInternal = showAll ? internal : internal.slice(0, 2);
  return (
    <>
      {/* ─────── HERO ─────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-900"
      >
        <div className="hero-rectangle" />
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-24">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center gap-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-7 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500" />
                </span>
                React Native &amp; Mobile App Developer
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05] mb-6">
                Lutfi <span style={{ color: PRIMARY }}>Alamsyah</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
                React Native developer with{" "}
                <strong className="font-semibold text-gray-900 dark:text-white">
                  4+ years
                </strong>{" "}
                building production mobile apps end-to-end. Currently rebuilding{" "}
                <strong className="font-semibold text-gray-900 dark:text-white">
                  two of Astra&apos;s public automotive apps from the ground up
                </strong>{" "}
                — new architecture, new design system, reworked business logic —
                while both stay live on the App Store for their existing users.
              </p>
              <div className="flex flex-wrap gap-3 mb-14">
                <a
                  href="#mobile-projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  style={{ backgroundColor: PRIMARY }}
                >
                  <Smartphone size={17} />
                  View my work
                </a>
                <a
                  href="#cv"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:-translate-y-0.5"
                >
                  <Download size={17} />
                  Download CV
                </a>
              </div>
              {/* Stats */}
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 max-w-lg">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                      {s.value}
                    </dd>
                    <p className="text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                      {s.label}
                    </p>
                  </div>
                ))}
              </dl>
            </div>

            {/* App showcase — the two public App Store releases */}
            <div className="hidden lg:block relative w-[356px] h-[470px] shrink-0">
              {featured.map((p, i) => (
                <figure
                  key={p.title}
                  className={
                    "absolute transition-transform duration-500 hover:-translate-y-2 " +
                    (i === 0
                      ? "left-0 top-0 -rotate-6 z-20"
                      : "right-0 top-28 rotate-6 z-10")
                  }
                >
                  <img
                    src={p.shot}
                    alt={`${p.title} — app screenshot`}
                    width={p.shotW}
                    height={p.shotH}
                    className="block h-[340px] w-auto rounded-2xl shadow-2xl ring-1 ring-black/20 dark:ring-white/10"
                  />
                  <figcaption
                    className={
                      "absolute -bottom-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 dark:ring-white/10 whitespace-nowrap " +
                      (i === 0 ? "left-0" : "right-0")
                    }
                  >
                    <img
                      src={p.icon}
                      alt=""
                      className="w-4 h-4 rounded object-cover"
                    />
                    <span className="text-[10px] font-semibold text-gray-800 dark:text-gray-100">
                      {p.title}
                    </span>
                    <Star
                      size={9}
                      className="fill-amber-400 text-amber-400 shrink-0"
                    />
                    <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">
                      {p.rating?.toFixed(1)}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ─────── ABOUT ─────── */}
      <Section id="about" eyebrow="About" title="Profile">
        <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-14 items-start">
          <div className="order-2 md:order-1 space-y-5">
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              I build production mobile apps end-to-end. My work spans six
              production applications — including two public apps on the Apple
              App Store,{" "}
              <strong className="font-medium text-gray-900 dark:text-white">
                AUTO2000 Digiroom
              </strong>{" "}
              and{" "}
              <strong className="font-medium text-gray-900 dark:text-white">
                DaihatsuKu
              </strong>{" "}
              — built alongside cross-functional teams including PM, PQA, and
              DevSecOps.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              I bring a full-stack foundation in PHP Laravel and Node.js,
              hands-on experience in native-level debugging, and a habit of
              using AI tools like Claude Code as a productivity booster — while
              staying the one who reviews and owns the final call on my own
              code.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-3 text-sm">
              <li className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400">
                <MapPin size={15} className="text-indigo-500 shrink-0" />
                Depok, Jawa Barat, Indonesia
              </li>
              <li className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400">
                <Mail size={15} className="text-indigo-500 shrink-0" />
                <a
                  href="mailto:lutfialamsyah1003@gmail.com"
                  className="hover:text-indigo-500 transition-colors truncate"
                >
                  lutfialamsyah1003@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400">
                <Phone size={15} className="text-indigo-500 shrink-0" />
                +62 838 7992 6883
              </li>
              <li className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400">
                <Briefcase size={15} className="text-indigo-500 shrink-0" />
                PT Astra International Tbk
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex md:block justify-center">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-3xl opacity-10 blur-2xl"
                style={{ backgroundColor: PRIMARY }}
                aria-hidden="true"
              />
              <img
                src="/profile.png"
                alt="Lutfi Alamsyah"
                className="relative w-52 h-52 md:w-full md:h-auto md:aspect-square rounded-2xl object-cover ring-1 ring-gray-200 dark:ring-gray-700 shadow-xl"
              />
            </div>
          </div>
        </div>
      </Section>
      {/* ─────── EXPERIENCE ─────── */}
      <Section
        id="experience"
        eyebrow="Career"
        title="Experience"
        icon={<Briefcase size={17} />}
        tone="muted"
      >
        <div className="space-y-6">
          {experience.map((exp) => (
            <article
              key={exp.company}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 p-6 md:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5 pb-5 border-b border-gray-100 dark:border-gray-800">
                {exp.summary}
              </p>
              <ul className="space-y-3">
                {exp.points.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: PRIMARY }}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      {/* ─────── SKILLS ─────── */}
      <Section
        id="skills"
        eyebrow="Toolkit"
        title="Skills"
        lead="The stack I work in day to day, grouped the way I actually use it."
      >
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-3.5">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-indigo-100 dark:border-indigo-500/20 bg-indigo-50/60 dark:bg-indigo-500/5 p-6">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            AI-Assisted Development
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Claude Code and multi-model workflows (Hermes, 9Router across Claude
            and DeepSeek) are part of my day-to-day loop for faster development,
            debugging, and code review.
          </p>
        </div>
      </Section>
      {/* ─────── MOBILE PROJECTS ─────── */}
      <Section
        id="mobile-projects"
        eyebrow="Selected work"
        title="Mobile Applications"
        lead="Six production React Native apps built at PT Astra International Tbk and PT Waskita Karya. The two public apps are mid-rebuild — reimplemented screens, restyled UI, and revised business logic, shipped incrementally against a live user base."
        icon={<Smartphone size={17} />}
        tone="muted"
      >
        <div className="space-y-6">
          {featured.map((p) => (
            <FeaturedProject key={p.title} project={p} />
          ))}
        </div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mt-14 mb-6">
          Internal applications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {visibleInternal.map((p) => (
            <CompactProject key={p.title} project={p} />
          ))}
        </div>
        {internal.length > 2 && (
          <button
            onClick={() => setShowAll((v) => !v)}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all"
          >
            {showAll
              ? "Show fewer"
              : `Show ${internal.length - 2} more internal ${
                  internal.length - 2 === 1 ? "app" : "apps"
                }`}
            <ArrowRight size={15} />
          </button>
        )}
      </Section>
      {/* ─────── WEB PROJECTS ─────── */}
      <Section
        id="web-projects"
        eyebrow="Before mobile"
        title="Earlier Web Work"
        lead="Earlier full-stack work, before I specialised in mobile."
        icon={<Globe size={17} />}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {webProjects.map((p) => {
            const Tag = p.url ? "a" : "div";
            const linkProps = p.url
              ? {
                  href: p.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};
            return (
              <Tag
                key={p.title}
                {...linkProps}
                className="group flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 transition-all duration-300 hover:border-indigo-200 dark:hover:border-indigo-500/40 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="w-10 h-10 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20">
                    <Globe size={17} />
                  </span>
                  {p.url && (
                    <ExternalLink
                      size={15}
                      className="text-gray-400 group-hover:text-indigo-500 transition-colors mt-1"
                    />
                  )}
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1.5">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                  {p.desc}
                </p>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  {p.stack}
                </p>
              </Tag>
            );
          })}
        </div>
      </Section>
      {/* ─────── EDUCATION ─────── */}
      <Section
        id="education"
        eyebrow="Background"
        title="Education & Awards"
        icon={<GraduationCap size={17} />}
        tone="muted"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 p-6"
            >
              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                {edu.degree}
              </p>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
                {edu.school}
              </h3>
              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                <span>{edu.period}</span>
                <span className="text-gray-300 dark:text-gray-600">·</span>
                <span>GPA {edu.gpa}</span>
              </div>
            </div>
          ))}
          {awards.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 p-6"
            >
              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                Certification / Award
              </p>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
                {a.title}
              </h3>
              <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {a.issuer}
                <span className="text-gray-300 dark:text-gray-600"> · </span>
                {a.date}
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* ─────── CV ─────── */}
      <Section id="cv" eyebrow="Resume" title="Download my CV">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1.5">
              Lutfi Alamsyah — Mobile Developer
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Full experience, project stacks, and skills in one page. PDF ·
              Updated 2026.
            </p>
          </div>
          <a
            href="/resources/Lutfi-Alamsyah-Mobile-Developer-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
            style={{ backgroundColor: PRIMARY }}
          >
            <Download size={17} />
            Download CV
          </a>
        </div>
      </Section>
      {/* ─────── CONTACT ─────── */}
      <section
        id="contact"
        className="scroll-mt-20 py-24 px-6 md:px-16 lg:px-24 border-t border-gray-100 dark:border-gray-800"
      >
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mt-3 mb-4">
            Get in touch
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
            Open to conversations about React Native, mobile platform work, and
            interesting product teams.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="mailto:lutfialamsyah1003@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800/50 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/lutfialamsyah/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800/50 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://wa.me/6283879926883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800/50 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-100 dark:border-gray-800">
        <p className="text-center text-xs text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Lutfi Alamsyah · Built with Next.js
          &amp; Tailwind CSS
        </p>
      </footer>
    </>
  );
}
