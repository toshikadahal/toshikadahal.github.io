import Link from "next/link";
import { ThemeToggle } from "../components/ThemeToggle";

export default function ContactPage() {
  return (
    <main>
      <header className="navWrap">
        <Link href="/" className="brand"><span className="brandMark">TD</span><span><strong>Dr Toshika Dahal</strong><small>Contact</small></span></Link>
        <nav className="navLinks"><Link href="/about">About</Link><Link href="/topics">Eye topics</Link><ThemeToggle /></nav>
      </header>
      <section className="sectionShell pageHero">
        <p className="eyebrow">Contact</p>
        <h1>Contact Dr Toshika Dahal</h1>
        <p className="lead">For appointment details, eye checkup information, and professional communication.</p>
      </section>
      <section className="sectionShell gridTwo">
        <article className="glassCard">
          <h2>Email</h2>
          <p><a href="mailto:toshikadahal2047@gmail.com">toshikadahal2047@gmail.com</a></p>
        </article>
        <article className="glassCard">
          <h2>Phone</h2>
          <p><a href="tel:+9779841740018">+977-9841740018</a></p>
        </article>
      </section>
    </main>
  );
}
