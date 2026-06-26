"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const topicCards = [
  {
    title: "Squint and strabismus",
    text: "Assessment of eye alignment, vision, glasses power, and binocular function for children and adults.",
    tag: "Eye alignment"
  },
  {
    title: "Lazy eye",
    text: "Early diagnosis and follow-up for amblyopia, patching, glasses, and visual development.",
    tag: "Amblyopia"
  },
  {
    title: "Children's glasses",
    text: "Guidance for refractive error, spectacle use, headache, eye strain, and school vision concerns.",
    tag: "Refraction"
  },
  {
    title: "Premature baby retina screening",
    text: "Timely retinal screening advice for premature babies and families who need scheduled follow-up.",
    tag: "ROP screening"
  },
  {
    title: "Watering eyes in children",
    text: "Evaluation of blocked tear duct, allergy, infection, eyelid problems, and surface irritation.",
    tag: "Tear duct"
  },
  {
    title: "Red eye in children",
    text: "Practical guidance for allergy, infection, injury, pain, light sensitivity, and urgent warning signs.",
    tag: "Red eye"
  }
];

const credentials = [
  "Fellowship in Pediatric Ophthalmology and Strabismus Surgery, Lumbini Eye Institute and Research Centre, 2024",
  "MD Ophthalmology, Nepal Eye Hospital, National Academy of Medical Sciences, 2019",
  "MBBS and Internship, College of Medical Sciences, Bharatpur, 2015"
];

const memberships = [
  "Lifetime member, Nepal Medical Association",
  "Lifetime member, Nepal Ophthalmic Society",
  "Lifetime member, Nepal Pediatric Ophthalmology and Strabismus Society"
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [language, setLanguage] = useState<"en" | "np">("en");
  const nepali = language === "np";

  return (
    <main className={dark ? "site dark" : "site"}>
      <header className="topbar">
        <Link href="/" className="brand">
          <span className="brandMark">TD</span>
          <span>
            <strong>Dr Toshika Dahal</strong>
            <small>Pediatric Ophthalmologist</small>
          </span>
        </Link>

        <nav className="navLinks">
          <a href="#topics">Eye topics</a>
          <a href="#credentials">Credentials</a>
          <a href="#visit">Visit</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="headerButtons">
          <button type="button" onClick={() => setLanguage(nepali ? "en" : "np")}>
            {nepali ? "English" : "\u0928\u0947\u092a\u093e\u0932\u0940"}
          </button>
          <button type="button" onClick={() => setDark(!dark)}>
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="heroText">
          
          <h1>Dr Toshika Dahal</h1>
          <h2 className="heroSubhead">
            {nepali
              ? "बालबालिका र squint भएका बिरामीका लागि स्पष्ट आँखा सेवा"
              : "Pediatric Ophthalmologist and Strabismus Surgeon"}
          </h2>
          <p className="lead">
            {nepali
              ? "Lumbini Eye Institute, Bhairahawa मा बाल आँखा जाँच, squint, lazy eye, चस्मा, premature baby retina screening, र adult strabismus care."
              : "Clear eye care for children, families, and adults with squint. Her care focuses on child eye examination, strabismus, amblyopia, children’s glasses, premature baby retina screening, and adult strabismus."}
          </p>

          <div className="heroActions">
            <a className="primaryBtn" href="tel:+9779841740018">Call for appointment</a>
            <a className="ghostBtn" href="#topics">Read eye topics</a>
          </div>

          <div className="statRow">
            <article>
              <span>Fellowship</span>
              <strong>Pediatric Ophthalmology and Strabismus</strong>
            </article>
            <article>
              <span>Current work</span>
              <strong>Lumbini Eye Institute, Bhairahawa</strong>
            </article>
            <article>
              <span>Patient focus</span>
              <strong>Children, families, lazy eye, and squint care</strong>
            </article>
          </div>
        </div>

        <div className="heroImageWrap">
          <Image
            src="/images/dr-toshika-hero.jpg"
            alt="Dr Toshika Dahal"
            width={1050}
            height={1320}
            priority
            className="heroImage"
          />
        </div>
      </section>

      <section id="topics" className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Eye topics</p>
          <h2>Common reasons families visit</h2>
          <p>Patient-friendly cards for quick understanding before consultation.</p>
        </div>

        <div className="topicGrid">
          {topicCards.map((item) => (
            <article className="topicCard" key={item.title}>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="credentials" className="section credentialSection">
        <article className="largeCard">
          <p className="eyebrow">Credentials</p>
          <h2>Training and qualifications</h2>
          <ul>
            {credentials.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="largeCard">
          <p className="eyebrow">Membership</p>
          <h2>Professional associations</h2>
          <ul>
            {memberships.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>

      <section id="visit" className="section visitSection">
        <div>
          <p className="eyebrow">Visit</p>
          <h2>Lumbini Eye Institute, Bhairahawa</h2>
          <p>
            Bring previous prescriptions, glasses, medicines, eye reports, and old records.
            Call before visiting for appointment timing and availability.
          </p>
        </div>
        <a className="primaryBtn" href="tel:+9779841740018">Call now</a>
      </section>

      <section id="contact" className="section contactSection">
        <div className="contactPhotoWrap">
          <Image
            src="/images/dr-toshika-contact.png"
            alt="Dr Toshika Dahal contact section"
            width={720}
            height={900}
            className="contactPhoto"
          />
        </div>

        <div className="contactContent">
          <p className="eyebrow">Contact</p>
          <h2>For appointment and consultation</h2>
          <p>
            For appointment timing, clinic availability, or follow-up planning, please call before visiting.
          </p>

          <div className="contactGrid">
            <article>
              <span>Phone</span>
              <a href="tel:+9779841740018">+977-9841740018</a>
            </article>
            <article>
              <span>Email</span>
              <a href="mailto:toshikadahal2047@gmail.com">toshikadahal2047@gmail.com</a>
            </article>
            <article>
              <span>Location</span>
              <p>Lumbini Eye Institute, Bhairahawa, Nepal</p>
            </article>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Dr Toshika Dahal</span>
        <span>Pediatric Ophthalmology and Strabismus</span>
      </footer>
    </main>
  );
}

