import Link from "next/link";
import { ThemeToggle } from "../components/ThemeToggle";
import { topics } from "./data";

export default function TopicsPage() {
  return (
    <main>
      <header className="navWrap">
        <Link href="/" className="brand"><span className="brandMark">TD</span><span><strong>Dr Toshika Dahal</strong><small>Eye topics</small></span></Link>
        <nav className="navLinks"><Link href="/about">About</Link><Link href="/contact">Contact</Link><ThemeToggle /></nav>
      </header>
      <section className="sectionShell pageHero">
        <p className="eyebrow">Patient education</p>
        <h1>Eye topics</h1>
        <p className="lead">Simple information for families about child eye care, squint, lazy eye, and common warning signs.</p>
      </section>
      <section className="sectionShell cardGrid">
        {topics.map((topic, index) => (
          <Link className="topicCard" href={`/topics/${topic.slug}`} key={topic.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{topic.title}</h2>
            <p>{topic.subtitle}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
