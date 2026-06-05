"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { topicPages } from "@/data/topicPages";

const profile = {
  title: "ENT Head and Neck Surgeon",
  headline: "Clear ENT care, focused patient education, and academic surgical practice.",
  intro:
    "Dr. Anuj Devkota is an ENT, Head and Neck Surgeon and Assistant Professor at Teaching Hospital, Maharajgunj. This website gives a short overview first, then detailed topic pages for patients who want to read more.",
  trust:
    "Patient-focused ENT care with clear explanations, evidence-based treatment, and careful follow-up.",
  institution: "Teaching Hospital, Maharajgunj",
  position: "Assistant Professor, Department of ENT-HNS",
  experience: "7+ years of experience in ENT practice"
};

const credentials = [
  "Dr. Anuj Devkota",
  "ENT, Head and Neck Surgeon",
  "Assistant Professor, Department of ENT-HNS",
  "Teaching Hospital, Maharajgunj",
  "MBBS, MS ENT-HNS",
  "NMC Registration No. 15288"
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Topics", href: "#topics" },
  { label: "Schedule & Contact", href: "#schedule-contact" },
  { label: "Research", href: "#research" }
];

const categories = ["All", "Ear", "Nose", "Throat", "Voice", "Head and neck", "Children", "Balance", "Sleep", "Advanced ENT", "Surgery"];

const schedule = [
  {
    title: "Kalanki Polyclinic",
    location: "Kalanki, Kathmandu",
    days: "Sunday, Tuesday and Thursday",
    time: "5:30 PM to 6:30 PM",
    phone: "015225073",
    phoneDisplay: "01-5225073",
    callText: "Call Kalanki Polyclinic",
    mapText: "Map location",
    mapUrl: "https://maps.app.goo.gl/q8VWKNcavWUgd4TD9"
  },
  {
    title: "Nepal National Hospital",
    location: "Kalanki, Kathmandu",
    days: "Monday, Wednesday and Friday",
    time: "5:30 PM to 6:30 PM",
    phone: "015225101",
    phoneDisplay: "01-5225101",
    callText: "Call Nepal National Hospital",
    mapText: "Map location",
    mapUrl: "https://maps.app.goo.gl/HAMDPyUMeAUnNpLGA"
  },
  {
    title: "Teaching Hospital (ENT EHS service)",
    location: "Maharajgunj, Kathmandu",
    days: "Tuesday and Thursday",
    time: "4:00 PM to 5:00 PM",
    phone: "014513917",
    phoneDisplay: "01-4513917",
    callText: "Call Teaching Hospital EHS",
    mapText: "Map location",
    mapUrl: "https://maps.app.goo.gl/EXQ37tLGFQppmnPM9"
  }
];

const research = [
  "Chronic otitis media, mastoid anatomy, tympanoplasty, and temporal bone surgical education.",
  "Rhinology, nasal irrigation, sinus symptoms, and patient-friendly ENT education.",
  "Paediatric airway, head and neck case-based learning, and academic collaboration."
];

function topicImage(slug: string) {
  return `/topic-visuals/${slug}.png`;
}

function StickyNav() {
  const [showNav, setShowNav] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("site-theme");
    const initialTheme = saved === "light" ? "light" : "dark";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 1.15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    window.localStorage.setItem("site-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  };

  const rightNavItems = [
    { label: "About", href: "#about" },
    { label: "Topics", href: "#topics" },
    { label: "Research", href: "#research" }
  ];

  return (
    <div className={`fixed left-0 right-0 top-3 z-[9999] px-3 transition-all duration-500 md:px-6 ${showNav ? "translate-y-0 opacity-100" : "-translate-y-8 pointer-events-none opacity-0"}`}>
      <nav className="mx-auto max-w-7xl rounded-full border border-white/20 bg-black/45 px-3 py-3 text-white shadow-2xl shadow-black/40 ring-1 ring-white/15 backdrop-blur-2xl md:px-5">
        <div className="flex w-full items-center gap-3 overflow-x-auto whitespace-nowrap pr-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            data-theme-toggle="true"
            className={`theme-mode-toggle flex shrink-0 items-center gap-2 rounded-full border px-2 py-2 text-xs font-extrabold uppercase tracking-[0.18em] shadow-2xl backdrop-blur-2xl transition ${
              theme === "dark"
                ? "border-white/25 bg-black/65 text-white ring-1 ring-white/20 hover:bg-black/85"
                : "border-slate-950/25 bg-white/95 text-slate-950 ring-1 ring-slate-950/10 hover:bg-white"
            }`}
          >
            <span
              className={`grid h-9 w-9 place-items-center rounded-full transition ${
                theme === "dark"
                  ? "bg-amber-300 text-slate-950 shadow-[0_0_30px_rgba(252,211,77,0.75)]"
                  : "bg-slate-950 text-white shadow-[0_0_26px_rgba(15,23,42,0.50)]"
              }`}
            >
              {theme === "dark" ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="M4.93 4.93l1.41 1.41" />
                  <path d="M17.66 17.66l1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="M6.34 17.66l-1.41 1.41" />
                  <path d="M19.07 4.93l-1.41 1.41" />
                  <circle cx="12" cy="12" r="4.3" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
                  <path d="M21.2 14.15c-1.15.55-2.43.85-3.79.85A8.42 8.42 0 0 1 9 6.59c0-1.36.3-2.64.85-3.79A9.53 9.53 0 1 0 21.2 14.15Z" />
                  <circle cx="16.4" cy="6.1" r="1.1" fill="white" opacity="0.85" />
                  <circle cx="19.2" cy="9.1" r="0.75" fill="white" opacity="0.75" />
                </svg>
              )}
            </span>

            <span className="theme-mode-label hidden sm:inline">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>

          <a
            href="#schedule-contact"
            className="nav-contact-main flex shrink-0 items-center rounded-full border px-4 py-2.5 text-xs font-extrabold shadow-xl transition hover:-translate-y-0.5 md:px-6 md:text-base"
          >
            Contact Dr. Anuj Devkota
          </a>

          <div className="ml-auto flex shrink-0 items-center gap-2 md:gap-5 lg:gap-7">
            {rightNavItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full px-3 py-2 text-sm font-extrabold text-white/90 drop-shadow transition hover:bg-white/15 hover:text-white md:px-4 md:text-base"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="section-header mb-8 sm:mb-10">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/40">{eyebrow}</p>
      <h2 className="max-w-4xl text-[clamp(2.25rem,7vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white">{title}</h2>
      {body && <p className="mt-5 max-w-3xl text-base leading-7 text-white/62 sm:text-lg sm:leading-8">{body}</p>}
    </div>
  );
}

function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`fluid-card rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition duration-300 hover:border-white/25 hover:bg-white/[0.085] hover:shadow-glow sm:rounded-[2rem] sm:p-7 ${className}`}>
      {children}
    </div>
  );
}

function CredentialsBlock() {
  const experienceItem =
    credentials.find((item) => item.includes("7+ years")) ||
    "7+ years of experience in ENT practice";

  return (
    <GlassCard className="relative overflow-hidden !p-6 sm:!p-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-44 w-44 rounded-full bg-white/[0.05] blur-3xl" />

      <div className="relative">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-white/38">
          Credentials
        </p>

        <div className="rounded-[1.8rem] border border-white/15 bg-white/[0.075] p-5 shadow-inner shadow-black/20 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="grid h-24 w-24 shrink-0 place-items-center rounded-[1.55rem] bg-white text-4xl font-black tracking-tight text-black shadow-[0_0_45px_rgba(255,255,255,0.15)]">
              7+
            </div>

            <div>
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-white/42">
                Years in ENT practice
              </p>
              <p className="mt-2 text-xl font-semibold leading-8 text-white sm:text-2xl">
                {experienceItem}
              </p>
              <p className="mt-2 text-sm leading-7 text-white/58">
                Clinical ENT care, surgical work, teaching, and academic service.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          <div className="rounded-3xl border border-white/15 bg-white/[0.075] p-5 shadow-inner shadow-black/20">
            <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Dr. Anuj Devkota
            </p>
            <p className="mt-2 text-base leading-7 text-white/62">
              ENT, Head and Neck Surgeon
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <p className="text-base leading-7 text-white/78">
                Assistant Professor, Department of ENT-HNS
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <p className="text-base leading-7 text-white/78">
                MBBS, MS ENT-HNS
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <p className="text-base leading-7 text-white/78">
                NMC Registration No. 15288
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <p className="text-base leading-7 text-white/78">
                ENT, head and neck surgery, teaching, and patient education
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
            <div className="flex flex-wrap gap-2.5">
              {["ENT care", "Head and neck", "Surgery", "Teaching", "Patient education"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold text-white/66"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function UrgentCareBlock() {
  return (
    <section className="urgent-care-block mb-16 rounded-[1.5rem] border border-rose-300/20 bg-rose-500/[0.08] p-5 shadow-2xl shadow-rose-950/20 backdrop-blur-xl sm:mb-24 sm:rounded-[2rem] sm:p-7 md:p-9">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-rose-100/70">Urgent ENT care</p>
      <h2 className="text-[clamp(1.8rem,6vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">Seek urgent ENT care when symptoms are severe or sudden.</h2>
      <p className="mt-5 max-w-5xl text-base leading-7 text-rose-50/78 sm:text-lg sm:leading-8">
        Seek urgent ENT care for sudden hearing loss, breathing difficulty, severe bleeding, facial weakness, severe throat pain, or a rapidly increasing neck swelling.
      </p>
    </section>
  );
}

export default function FinalContent() {
  const [category, setCategory] = useState("All");

  const visibleTopics = useMemo(() => {
    if (category === "All") {
      return topicPages;
    }

    return topicPages.filter(topic => topic.category === category);
  }, [category]);

  return (
    <div id="top-content" className="site-main-content relative overflow-x-hidden bg-[#121212] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.13),transparent_62%)]" />
      <StickyNav />

      <div className="responsive-shell relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-28 md:px-12">
        <section id="about" className="mb-16 grid scroll-mt-28 gap-6 sm:mb-24 sm:scroll-mt-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <GlassCard className="relative overflow-hidden !p-6 sm:!p-8">
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/[0.08] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-10 h-44 w-44 rounded-full bg-white/[0.05] blur-3xl" />

            <div className="relative">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-white/38">
                {profile.title}
              </p>

              <div className="rounded-[1.8rem] border border-white/15 bg-white/[0.075] p-5 shadow-inner shadow-black/20 sm:p-6">
                <h1 className="text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[0.98] tracking-[-0.08em] text-white">
                  {profile.headline}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                  {profile.intro}
                </p>
              </div>

              <div className="mt-4 rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7 text-white/68">
                  {profile.trust}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#schedule-contact"
                  className="rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-extrabold text-black transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(255,255,255,0.18)]"
                >
                  Confirm appointment schedule
                </a>

                <a
                  href="#topics"
                  className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/18"
                >
                  Browse ENT topics
                </a>
              </div>
            </div>
          </GlassCard>

<CredentialsBlock />
        </section>

        <UrgentCareBlock />

        <section id="topics" className="mb-16 scroll-mt-28 sm:mb-24 sm:scroll-mt-32">
          <SectionHeader
            eyebrow="ENT library"
            title="Short cards first. Detailed pages on click."
            body="Browse common ENT concerns through simple, patient-friendly education pages."
          />

          <div className="category-strip mb-8 flex snap-x gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map(item => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`snap-start whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${category === item ? "border-white bg-white text-black" : "border-white/10 bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"}`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="responsive-topic-grid grid gap-4">
            {visibleTopics.map((topic, index) => (
              <Link key={topic.slug} href={`/topics/${topic.slug}`} className="group block h-full">
                <GlassCard className="ent-topic-card flex h-full min-h-[19.5rem] flex-col">
                  <div className="mb-5 overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/20 sm:mb-6 sm:rounded-[1.5rem]">
                    <img
                      src={topicImage(topic.slug)}
                      alt={`${topic.title} patient education visual`}
                      className="ent-topic-image h-32 w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    />
                  </div>

                  <div className="mb-6 flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{topic.category}</span>
                    <span className="text-xs text-white/30">{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <h3 className="ent-topic-title text-xl font-semibold tracking-tight transition group-hover:text-white">{topic.title}</h3>
                  <p className="ent-topic-short mt-3 text-sm leading-6 text-white/58">{topic.short}</p>
                  <p className="ent-topic-open mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/40 transition group-hover:text-white/80">Open detailed page</p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>

        <section id="schedule-contact" className="mb-24 scroll-mt-32">
          <SectionHeader
            eyebrow="Schedule and contact"
            title="Consultation schedule and professional contact"
            body="Clinic timing and contact details are grouped into clear cards so patients can confirm availability before visiting."
          />

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-5">
              {schedule.map((clinic, index) => (
                <GlassCard key={clinic.title} className="relative overflow-hidden !p-5 sm:!p-6">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/[0.08] blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-20 left-8 h-32 w-32 rounded-full bg-white/[0.05] blur-2xl" />

                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-white/10 text-xs font-extrabold text-white/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/45">
                          Consultation clinic
                        </span>
                      </div>

                      <h3 className="text-[clamp(1.35rem,2vw,1.9rem)] font-semibold tracking-tight text-white">
                        {clinic.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/58">
                        {clinic.location}
                      </p>
                    </div>

                    <div className="shrink-0 rounded-3xl border border-white/10 bg-black/25 px-4 py-3 text-left shadow-inner shadow-black/20 sm:min-w-[11rem]">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/36">
                        Time
                      </p>
                      <p className="mt-1 text-base font-semibold text-white">
                        {clinic.time}
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-5 rounded-3xl border border-white/10 bg-white/[0.055] p-4">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/36">
                      Available days
                    </p>
                    <p className="mt-1 text-base font-semibold leading-7 text-white/82">
                      {clinic.days}
                    </p>
                  </div>

                  <div className="relative mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                    <a
                      href={`tel:${clinic.phone}`}
                      className="inline-flex justify-center rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-extrabold text-black transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(255,255,255,0.16)]"
                    >
                      {clinic.callText}
                    </a>

                    <a
                      href={clinic.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-black"
                    >
                      {clinic.mapText}
                    </a>

                    <a
                      href={`tel:${clinic.phone}`}
                      className="inline-flex justify-center rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/12"
                    >
                      Phone {clinic.phoneDisplay}
                    </a>
                  </div>
                </GlassCard>
              ))}
            </div>

            <GlassCard className="relative overflow-hidden !p-5 sm:!p-6 lg:sticky lg:top-28 lg:self-start">
              <div className="pointer-events-none absolute -right-14 top-8 h-44 w-44 rounded-full bg-white/[0.08] blur-3xl" />

              <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-white/38">
                Quick contact
              </p>

              <h3 className="text-[clamp(1.35rem,2vw,1.9rem)] font-semibold tracking-tight">
                Confirm before visiting
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/58">
                Appointment times can change during holidays, emergency duties, academic programs, or hospital schedule changes. Please call before visiting.
              </p>

              <div className="mt-5 grid gap-2">
                <a href="tel:015225073" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-black">
                  Kalanki Polyclinic 01-5225073
                </a>
                <a href="tel:015225101" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-black">
                  Nepal National Hospital 01-5225101
                </a>
                <a href="tel:014513917" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-black">
                  Teaching Hospital EHS 01-4513917
                </a>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                <a href="mailto:anujdevkota@gmail.com" className="rounded-full border border-white/10 bg-black/20 px-4 py-2.5 text-center text-xs font-semibold text-white/70 transition hover:bg-white hover:text-black">
                  Gmail
                </a>
                <a href="mailto:anuj.devkota@mmc.tu.edu.np" className="rounded-full border border-white/10 bg-black/20 px-4 py-2.5 text-center text-xs font-semibold text-white/70 transition hover:bg-white hover:text-black">
                  Academic email
                </a>
                <a href="https://wa.me/9779860319180" className="rounded-full border border-white/10 bg-black/20 px-4 py-2.5 text-center text-xs font-semibold text-white/70 transition hover:bg-white hover:text-black">
                  WhatsApp
                </a>
                <a href="https://orcid.org/0000-0001-8188-399X" className="rounded-full border border-white/10 bg-black/20 px-4 py-2.5 text-center text-xs font-semibold text-white/70 transition hover:bg-white hover:text-black">
                  ORCID
                </a>
              </div>

              <p className="mt-5 rounded-3xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/56">
                Medical disclaimer. Information on this website is for general educational purposes only. It does not replace consultation with a qualified medical professional.
              </p>
            </GlassCard>
          </div>
        </section>

        <section id="research" className="mb-16 scroll-mt-28 sm:mb-24 sm:scroll-mt-32">
          <SectionHeader eyebrow="Research and teaching" title="Academic interests" body="Research and teaching are kept concise here. Detailed academic pages can be added later." />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {research.map((item, index) => (
              <GlassCard key={item}>
                <p className="mb-8 text-sm font-semibold text-white/38">{String(index + 1).padStart(2, "0")}</p>
                <p className="text-lg leading-8 text-white/62">{item}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <footer className="mt-16 border-t border-white/10 pt-8 text-sm leading-7 text-white/45 sm:mt-20">
          <p>Copyright 2026 Dr. Anuj Devkota. All rights reserved.</p>
          <p className="mt-2">ENT, Head and Neck Surgeon | Teaching Hospital, Maharajgunj | Patient education and academic information.</p>
        </footer>
      </div>
    </div>
  );
}
