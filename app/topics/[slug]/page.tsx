import Link from "next/link";
import { notFound } from "next/navigation";
import { ThemeToggle } from "../../components/ThemeToggle";
import { getTopic, topics } from "../data";

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export default async function TopicDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  return (
    <main>
      <header className="navWrap">
        <Link href="/" className="brand"><span className="brandMark">TD</span><span><strong>Dr Toshika Dahal</strong><small>Patient education</small></span></Link>
        <nav className="navLinks"><Link href="/topics">All topics</Link><Link href="/contact">Contact</Link><ThemeToggle /></nav>
      </header>
      <article className="sectionShell articleShell">
        <Link className="backLink" href="/topics">Back to topics</Link>
        <p className="eyebrow">Eye care guide</p>
        <h1>{topic.title}</h1>
        <p className="lead">{topic.subtitle}</p>
        <div className="articleCard">
          {topic.points.map((point) => <p key={point}>{point}</p>)}
          <div className="noticeBox">This page is for education only. Visit an ophthalmologist for examination and treatment advice.</div>
        </div>
      </article>
    </main>
  );
}
