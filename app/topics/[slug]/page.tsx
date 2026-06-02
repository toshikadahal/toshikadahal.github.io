import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTopicBySlug, topicPages } from "@/data/topicPages";
import SubpageThemeToggle from "@/components/SubpageThemeToggle";

export function generateStaticParams() {
  return topicPages.map(topic => ({
    slug: topic.slug
  }));
}

function topicImage(slug: string) {
  return `/topic-visuals/${slug}.png`;
}

function humanIntroForSlug(slug: string, title: string) {
  const intros: Record<string, string> = {
    "ear-discharge-chronic-ear-disease": "Long-term ear discharge should not be ignored because it may affect hearing and sometimes needs detailed ear examination or imaging.",
    "thyroid-nodules-goiter": "Most thyroid swellings are not dangerous, but proper evaluation helps decide whether observation, medicine, testing, or surgery is needed.",
    "tympanic-membrane-perforation": "A hole in the eardrum may heal in some patients, but persistent discharge or hearing difficulty needs proper ear assessment.",
    "hearing-loss": "Hearing loss may be gradual or sudden, and early evaluation helps protect communication, learning, work, and quality of life.",
    "vertigo-dizziness-balance": "Dizziness can feel frightening, but a structured history and examination often help identify whether the inner ear is involved.",
    "nasal-blockage": "Blocked nose is common, but persistent one-sided blockage, bleeding, or smell change should be assessed carefully.",
    "sinusitis": "Facial pressure and nasal symptoms may have several causes, so treatment works best when the underlying pattern is clear.",
    "allergic-rhinitis": "Allergy symptoms often improve with the right routine, but repeated symptoms need a clear plan and follow-up.",
    "neck-lump": "A neck lump should be examined early because causes range from simple infection to conditions needing urgent treatment.",
    "head-neck-cancer-warning-signs": "Persistent mouth, throat, voice, swallowing, or neck symptoms deserve timely assessment.",
    "pediatric-ent": "Children may not describe ENT symptoms clearly, so family observations are important during evaluation.",
    "snoring-sleep-apnea": "Snoring with pauses in breathing, poor sleep, or daytime tiredness should be assessed rather than dismissed."
  };

  return intros[slug] ?? `${title} can have more than one cause, so careful history, examination, and follow-up help guide safe treatment.`;
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const topic = getTopicBySlug(params.slug);

  if (!topic) {
    return {
      title: "ENT topic | Dr. Anuj Devkota",
      description: "ENT patient education by Dr. Anuj Devkota.",
      alternates: {
        canonical: `/topics/${params.slug}/`
      }
    };
  }

  const description = `${topic.title} explained in patient-friendly language by Dr. Anuj Devkota, ENT, Head and Neck Surgeon and Assistant Professor at Teaching Hospital, Maharajgunj.`;

  return {
    title: `${topic.title} | Dr. Anuj Devkota | ENT-HNS`,
    description,
    alternates: {
      canonical: `/topics/${topic.slug}/`
    },
    openGraph: {
      title: `${topic.title} | Dr. Anuj Devkota`,
      description,
      type: "article",
      images: [
        {
          url: topicImage(topic.slug),
          alt: `${topic.title} patient education visual`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${topic.title} | Dr. Anuj Devkota`,
      description,
      images: [topicImage(topic.slug)]
    }
  };
}

function DetailSection({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="topic-detail-card rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:bg-white/[0.075] hover:shadow-[0_0_60px_rgba(103,232,249,0.13)] sm:rounded-[2rem] sm:p-7 md:p-9">
      <p className="topic-detail-eyebrow mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/38">
        {eyebrow}
      </p>

      <h2 className="topic-detail-heading text-[clamp(1.7rem,5.5vw,2.25rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
        {title}
      </h2>

      <div className="mt-6">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3">
      {items.map(item => (
        <p
          key={item}
          className="topic-detail-list-item rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/68 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/25 hover:bg-white/[0.075] hover:text-white hover:shadow-[0_0_35px_rgba(103,232,249,0.12)] sm:text-base"
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default function TopicDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const topic = getTopicBySlug(params.slug);

  if (!topic) {
    return (
      <main className="topic-detail-page min-h-screen overflow-x-hidden bg-[#121212] px-4 py-20 text-white sm:px-6">
        <SubpageThemeToggle />

        <Link
          href="/#topics"
          className="topic-fixed-back fixed left-4 top-24 z-[9998] inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2.5 text-xs font-extrabold text-white shadow-2xl ring-1 ring-white/15 backdrop-blur-2xl transition hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-black/85 hover:shadow-[0_0_45px_rgba(103,232,249,0.16)] sm:left-8 sm:top-28 sm:px-5 sm:py-3 sm:text-sm"
        >
          <span aria-hidden="true">←</span>
          Back to topics
        </Link>

        <div className="mx-auto max-w-3xl">
          <h1 className="topic-detail-heading text-4xl font-semibold">Topic not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="topic-detail-page min-h-screen overflow-x-hidden bg-[#121212] text-white">
      <SubpageThemeToggle />

      <Link
        href="/#topics"
        className="topic-fixed-back fixed left-4 top-24 z-[9998] inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2.5 text-xs font-extrabold text-white shadow-2xl ring-1 ring-white/15 backdrop-blur-2xl transition hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-black/85 hover:shadow-[0_0_45px_rgba(103,232,249,0.16)] sm:left-8 sm:top-28 sm:px-5 sm:py-3 sm:text-sm"
      >
        <span aria-hidden="true">←</span>
        Back to topics
      </Link>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-12">
        <div className="topic-detail-glow pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_62%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.82fr)] lg:items-start">
          <div>
            <p className="topic-detail-eyebrow mt-14 text-xs font-semibold uppercase tracking-[0.28em] text-white/40 sm:text-sm sm:tracking-[0.35em]">
              {topic.category}
            </p>

            <h1 className="topic-detail-heading mt-5 max-w-4xl text-[clamp(2.6rem,9vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-white">
              {topic.title}
            </h1>

            <p className="topic-detail-muted mt-6 max-w-3xl text-base leading-7 text-white/72 sm:mt-7 sm:text-xl sm:leading-9">
              {humanIntroForSlug(topic.slug, topic.title)}
            </p>

            <p className="topic-detail-muted mt-5 max-w-3xl text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
              {topic.overview}
            </p>

            <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6">
              <DetailSection eyebrow="01" title="Common symptoms">
                <List items={topic.symptoms} />
              </DetailSection>

              <DetailSection eyebrow="02" title="How ENT evaluation may be done">
                <List items={topic.evaluation} />
              </DetailSection>

              <DetailSection eyebrow="03" title="Treatment options">
                <List items={topic.treatment} />
              </DetailSection>

              <DetailSection eyebrow="04" title="Home care and preparation">
                <List items={topic.homeCare} />
              </DetailSection>

              <DetailSection eyebrow="05" title="Questions to ask during consultation">
                <List items={topic.questions} />
              </DetailSection>

              <section className="topic-detail-warning rounded-[1.5rem] border border-pink-400/20 bg-pink-500/[0.08] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-pink-200/40 hover:bg-pink-500/[0.12] hover:shadow-[0_0_65px_rgba(244,114,182,0.16)] sm:rounded-[2rem] sm:p-7 md:p-9">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-pink-200/70">
                  Warning signs
                </p>

                <h2 className="text-[clamp(1.7rem,5.5vw,2.25rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-pink-100">
                  When to seek urgent care
                </h2>

                <p className="mt-5 rounded-2xl border border-pink-200/10 bg-black/20 p-4 text-base leading-7 text-pink-50/78 transition duration-300 hover:border-pink-100/25 hover:bg-pink-200/[0.06] sm:mt-6 sm:p-5 sm:text-lg sm:leading-8">
                  {topic.urgent}
                </p>
              </section>

              <section className="topic-detail-card rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.075] hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] sm:rounded-[2rem] sm:p-7 md:p-9">
                <p className="topic-detail-muted text-sm leading-7 text-white/52">
                  This page is for general educational purposes only. It does not replace consultation with a qualified medical professional.
                </p>
              </section>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="topic-detail-side overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/35 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:bg-white/[0.075] hover:shadow-[0_0_70px_rgba(103,232,249,0.14)] sm:rounded-[2.25rem]">
              <img
                src={topicImage(topic.slug)}
                alt={`${topic.title} patient education visual`}
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="h-[min(22rem,62vw)] min-h-[15rem] w-full object-cover md:h-[30rem] lg:h-[34rem]"
              />

              <div className="p-5 sm:p-6">
                <p className="topic-detail-eyebrow text-xs font-semibold uppercase tracking-[0.35em] text-white/38">
                  Patient education
                </p>

                <h2 className="topic-detail-heading mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {topic.title}
                </h2>

                <p className="topic-detail-muted mt-4 leading-7 text-white/56">
                  Review symptoms, evaluation, treatment, home care, consultation questions, and warning signs.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}