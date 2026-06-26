import Link from "next/link";
import { topics } from "./topicData";

export const metadata = {
  title: "Eye Topics"
};

export default function TopicsPage() {
  return (
    <main className="site">
      <section className="section">
        <p className="eyebrow">Eye health topics</p>
        <h1>Patient education for common eye problems</h1>
        <div className="topic-grid">
          {topics.map((topic) => (
            <Link className="topic-card" href={`/topics/${topic.slug}`} key={topic.slug}>
              <h3>{topic.title}</h3>
              <p>{topic.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
