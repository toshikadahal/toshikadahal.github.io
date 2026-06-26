import Link from "next/link";
import { ThemeToggle } from "../components/ThemeToggle";

const timeline = [
  "Pediatric Ophthalmologist and Strabismus Surgeon at Lumbini Eye Institute, May 2024 to present",
  "Ophthalmology Consultant at Lumbini Eye Institute, Bhairahawa, December 2019 to present",
  "Fellowship in Pediatric Ophthalmology and Strabismus Surgery, 2024",
  "MD Ophthalmology, Nepal Eye Hospital and National Academy of Medical Sciences, 2019",
  "MBBS and Internship, College of Medical Sciences, Bharatpur, 2015"
];

export default function AboutPage() {
  return (
    <main>
      <header className="navWrap">
        <Link href="/" className="brand"><span className="brandMark">TD</span><span><strong>Dr Toshika Dahal</strong><small>About</small></span></Link>
        <nav className="navLinks"><Link href="/topics">Eye topics</Link><Link href="/contact">Contact</Link><ThemeToggle /></nav>
      </header>
      <section className="sectionShell pageHero">
        <p className="eyebrow">About</p>
        <h1>Dr Toshika Dahal</h1>
        <p className="lead">Pediatric Ophthalmologist and Strabismus Surgeon with clinical focus on child eye care, squint, amblyopia, and family centered eye health education.</p>
      </section>
      <section className="sectionShell gridTwo alignCenter">
        <div className="portraitCard"><img src="/images/dr-toshika-portrait.png" alt="Dr Toshika Dahal" /></div>
        <div className="glassCard"><h2>Professional profile</h2><ul className="checkList">{timeline.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>
    </main>
  );
}
