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
  position: "Assistant Professor, Department of ENT-HNS"
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
    callText: "Call Kalanki Polyclinic",
    mapText: "Map Kalanki Polyclinic",
    mapUrl: "https://maps.app.goo.gl/q8VWKNcavWUgd4TD9"
  },
  {
    title: "Nepal National Hospital",
    location: "Kalanki, Kathmandu",
    days: "Monday, Wednesday and Friday",
    time: "5:30 PM to 6:30 PM",
    phone: "015225101",
    callText: "Call Nepal National Hospital",
    mapText: "Map Nepal National Hospital",
    mapUrl: "https://maps.app.goo.gl/HAMDPyUMeAUnNpLGA"
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
            className="nav-contact-main flex shrink-0 items-center rounded-full border px-5 py-3 text-sm font-extrabold shadow-xl transition hover:-translate-y-0.5 md:px-6 md:text-base"
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
  return (
    <GlassCard>
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-white/38">Credentials</p>
      <div className="grid gap-3">
        {credentials.map((item, index) => (
          <p
            key={item}
            className={`leading-7 ${index === 0 ? "text-2xl font-semibold text-white" : "text-white/68"}`}
          >
            {item}
          </p>
        ))}
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
        <section id="about" className="mb-16 grid scroll-mt-28 gap-6 sm:mb-24 sm:scroll-mt-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/40 sm:mb-5 sm:text-sm sm:tracking-[0.35em]">{profile.title}</p>
            <h1 className="text-[clamp(2.75rem,9vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-white">{profile.headline}</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/66 sm:mt-6 sm:text-xl sm:leading-9">{profile.intro}</p>
            <p className="mt-5 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-base leading-7 text-white/68 sm:rounded-3xl sm:p-5">{profile.trust}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#schedule-contact" className="inline-flex justify-center rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-extrabold text-black transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(255,255,255,0.18)]">
                Confirm appointment schedule
              </a>
              <a href="#topics" className="inline-flex justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/18">
                Browse ENT topics
              </a>
            </div>
          </div>

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

        <section id="schedule-contact" className="mb-16 scroll-mt-28 sm:mb-24 sm:scroll-mt-32">
          <SectionHeader eyebrow="Schedule and contact" title="Consultation schedule and professional contact" body="Clinic timing and contact details are placed together so patients can confirm availability quickly before visiting." />

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-5">
              {schedule.map(clinic => (
                <GlassCard key={clinic.title}>
                  <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/38">Consultation clinic</p>
                  <h3 className="text-3xl font-semibold tracking-tight">{clinic.title}</h3>
                  <p className="mt-3 text-white/58">{clinic.location}</p>
                  <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-5">
                    <p className="text-lg font-semibold">{clinic.days}</p>
                    <p className="mt-2 text-white/60">{clinic.time}</p>
                  </div>
                                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href={`tel:${clinic.phone}`} className="inline-flex justify-center rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-extrabold text-black transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(255,255,255,0.16)]">{clinic.callText}</a>
                    <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-black">{clinic.mapText}</a>
                    <a href={`tel:${clinic.phone}`} className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/18">Phone {clinic.phone}</a>
                  </div>
                </GlassCard>
              ))}
            </div>

            <GlassCard>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/38">Confirm appointment schedule</p>
              <h3 className="text-3xl font-semibold tracking-tight">Professional contact and collaboration</h3>
              <p className="mt-4 leading-8 text-white/58">Please confirm appointment timing before visiting. For academic communication, collaboration, patient education projects, professional enquiries, or consultation schedule details, use the links below.</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="tel:015225073" className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-black">Call Kalanki Polyclinic</a>
                <a href="tel:015225101" className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-black">Call Nepal National Hospital</a>
                <a href="mailto:anujdevkota@gmail.com" className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-black">anujdevkota@gmail.com</a>
                <a href="mailto:anuj.devkota@mmc.tu.edu.np" className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-black">anuj.devkota@mmc.tu.edu.np</a>
                <a href="https://wa.me/9779860319180" className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-black">WhatsApp 9860319180</a>
                <a href="https://orcid.org/0000-0001-8188-399X" className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-black">ORCID</a>
                <a href="https://www.youtube.com/@anujdevkota" className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-black">YouTube</a>
              </div>

              <p className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-5 leading-8 text-white/56">Medical disclaimer. Information on this website is for general educational purposes only. It does not replace consultation with a qualified medical professional.</p>
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