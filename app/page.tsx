"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { topics } from "./topics/data";

const copy = {
  en: {
    label: "NP",
    eyebrow: "Pediatric Ophthalmology and Strabismus Surgery",
    title: "Dr Toshika Dahal",
    subtitle: "Pediatric Ophthalmologist and Strabismus Surgeon",
    description:
      "Focused eye care for children, squint, lazy eye, pediatric cataract, childhood refractive error, and family centered patient education.",
    primary: "View eye topics",
    secondary: "Contact",
    scheduleTitle: "Current practice",
    scheduleText:
      "Pediatric Ophthalmologist and Strabismus Surgeon at Lumbini Eye Institute. Ophthalmology Consultant at Lumbini Eye Institute, Bhairahawa.",
    aboutTitle: "Clear eye care for children and families",
    aboutText:
      "The website is designed as a simple profile and patient education platform for families who need reliable information about pediatric eye care and squint treatment.",
    trainingTitle: "Training and qualifications",
    contactTitle: "Contact",
    email: "Email",
    phone: "Phone"
  },
  np: {
    label: "EN",
    eyebrow: "बाल नेत्र रोग तथा स्क्विन्ट शल्यक्रिया",
    title: "डा तोषिका दाहाल",
    subtitle: "बाल नेत्र रोग विशेषज्ञ तथा स्क्विन्ट सर्जन",
    description:
      "बालबालिकाको आँखा, स्क्विन्ट, lazy eye, चश्माको समस्या, बाल मोतिबिन्दु र परिवारका लागि सरल नेत्र शिक्षा।",
    primary: "आँखा सम्बन्धी विषय",
    secondary: "सम्पर्क",
    scheduleTitle: "हालको कार्यक्षेत्र",
    scheduleText:
      "Lumbini Eye Institute मा Pediatric Ophthalmologist and Strabismus Surgeon। Lumbini Eye Institute, Bhairahawa मा Ophthalmology Consultant।",
    aboutTitle: "बालबालिका र परिवारका लागि स्पष्ट नेत्र सेवा",
    aboutText:
      "यो वेबसाइट Dr Toshika Dahal को प्रोफाइल र बिरामी शिक्षाका लागि बनाइएको हो।",
    trainingTitle: "तालिम र योग्यता",
    contactTitle: "सम्पर्क",
    email: "इमेल",
    phone: "फोन"
  }
};

const qualifications = [
  "Fellowship in Pediatric Ophthalmology and Strabismus Surgery, Lumbini Eye Institute and Research Centre, 2024",
  "MD Ophthalmology, Nepal Eye Hospital and National Academy of Medical Sciences, 2019",
  "MBBS and Internship, College of Medical Sciences, Bharatpur, Kathmandu University, 2015"
];

const highlights = [
  "Pediatric ophthalmology",
  "Strabismus and squint surgery",
  "Amblyopia and child vision care",
  "Patient education for families"
];

const memberships = [
  "Lifetime member of Nepal Medical Association",
  "Lifetime member of Nepal Ophthalmic Society",
  "Lifetime member of Nepal Pediatric Ophthalmology and Strabismus Society"
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "np">("en");
  const t = copy[lang];

  return (
    <main>
      <header className="navWrap">
        <Link href="/" className="brand">
          <span className="brandMark">TD</span>
          <span>
            <strong>Dr Toshika Dahal</strong>
            <small>Eye Care</small>
          </span>
        </Link>
        <nav className="navLinks">
          <Link href="/about">About</Link>
          <Link href="/topics">Eye topics</Link>
          <Link href="/contact">Contact</Link>
          <button className="iconButton" onClick={() => setLang(lang === "en" ? "np" : "en")}>{t.label}</button>
          <ThemeToggle />
        </nav>
      </header>

      <section className="hero sectionShell">
        <div className="heroText reveal">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <h2>{t.subtitle}</h2>
          <p className="lead">{t.description}</p>
          <div className="heroActions">
            <Link href="/topics" className="button primary">{t.primary}</Link>
            <Link href="/contact" className="button ghost">{t.secondary}</Link>
          </div>
          <div className="statGrid">
            <div><strong>2024</strong><span>Fellowship</span></div>
            <div><strong>2019</strong><span>MD Ophthalmology</span></div>
            <div><strong>3</strong><span>Lifetime memberships</span></div>
          </div>
        </div>
        <div className="heroPhoto cardGlow reveal delay1">
          <img src="/images/dr-toshika-hero.jpg" alt="Dr Toshika Dahal" />
        </div>
      </section>

      <section className="sectionShell gridTwo">
        <article className="glassCard reveal">
          <p className="eyebrow">Profile</p>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
          <div className="pillWrap">
            {highlights.map((item) => <span className="pill" key={item}>{item}</span>)}
          </div>
        </article>
        <article className="glassCard reveal delay1">
          <p className="eyebrow">Clinic</p>
          <h2>{t.scheduleTitle}</h2>
          <p>{t.scheduleText}</p>
          <div className="contactMini">
            <a href="mailto:toshikadahal2047@gmail.com">{t.email}: toshikadahal2047@gmail.com</a>
            <a href="tel:+9779841740018">{t.phone}: +977-9841740018</a>
          </div>
        </article>
      </section>

      <section className="sectionShell">
        <div className="sectionHead reveal">
          <p className="eyebrow">Patient education</p>
          <h2>Eye topics for families</h2>
          <Link href="/topics">See all topics</Link>
        </div>
        <div className="cardGrid">
          {topics.slice(0, 6).map((topic, index) => (
            <Link className="topicCard reveal" href={`/topics/${topic.slug}`} key={topic.slug} style={{ animationDelay: `${index * 70}ms` }}>
              <span>0{index + 1}</span>
              <h3>{topic.title}</h3>
              <p>{topic.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="sectionShell gridTwo alignCenter">
        <div className="portraitCard reveal">
          <img src="/images/dr-toshika-portrait.png" alt="Dr Toshika Dahal portrait" />
        </div>
        <div className="reveal delay1">
          <p className="eyebrow">Academic profile</p>
          <h2>{t.trainingTitle}</h2>
          <ul className="checkList">
            {qualifications.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <h3>Memberships</h3>
          <ul className="checkList compact">
            {memberships.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>Copyright {new Date().getFullYear()} Dr Toshika Dahal. All rights reserved.</p>
      </footer>
    </main>
  );
}
