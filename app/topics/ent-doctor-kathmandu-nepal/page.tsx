import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ENT Doctor in Kathmandu, Nepal | Dr Anuj Devkota",
  description:
    "Dr. Anuj Devkota is an ENT Doctor in Kathmandu, Nepal and Head and Neck Surgery specialist. Learn when to visit an ENT specialist and where to find consultation information.",
  alternates: {
    canonical: "/topics/ent-doctor-kathmandu-nepal"
  },
  openGraph: {
    title: "ENT Doctor in Kathmandu, Nepal | Dr Anuj Devkota",
    description:
      "Patient friendly guide about ENT care in Kathmandu, Nepal, common ear, nose and throat symptoms, and consultation information for Dr. Anuj Devkota.",
    url: "https://anujdevkota.vercel.app/topics/ent-doctor-kathmandu-nepal",
    type: "article"
  }
};

const faqs = [
  {
    question: "Who is an ENT doctor?",
    answer:
      "An ENT doctor is a specialist who evaluates and treats ear, nose, throat, head and neck conditions."
  },
  {
    question: "When should I visit an ENT doctor in Kathmandu?",
    answer:
      "You should consider an ENT consultation for persistent ear discharge, hearing loss, tinnitus, vertigo, nasal blockage, sinus symptoms, recurrent throat infection, voice change, neck swelling, snoring, or suspected head and neck problems."
  },
  {
    question: "What problems does an ENT specialist treat?",
    answer:
      "ENT specialists treat ear disease, hearing problems, nasal and sinus disease, throat and voice problems, tonsil and adenoid problems, salivary gland conditions, thyroid and neck lumps, and selected head and neck surgical conditions."
  },
  {
    question: "How do I choose the best ENT doctor in Kathmandu?",
    answer:
      "Choose a doctor with ENT specialist training, clear patient communication, hospital or academic affiliation, transparent consultation information, and experience with the condition you need help with."
  },
  {
    question: "Where can I consult Dr. Anuj Devkota?",
    answer:
      "Consultation details, location, schedule, and contact information are listed on the official website."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export default function EntDoctorKathmanduNepalPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 py-24 text-white sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white hover:text-black"
        >
          Back to home
        </Link>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-white/45">
            ENT specialist Kathmandu
          </p>

          <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5.9rem)] font-semibold leading-[0.96] tracking-[-0.075em] text-white">
            ENT Doctor in Kathmandu, Nepal
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
            Dr. Anuj Devkota is an ENT Doctor in Kathmandu, Nepal and Head and Neck Surgery specialist.
            He works as Assistant Professor in the Department of ENT at Maharajgunj Medical Campus,
            TU Teaching Hospital, Institute of Medicine.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Ear, nose and throat care", "Head and neck conditions", "Patient education"].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-black/25 p-4 text-sm font-semibold text-white/70">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
              When to visit an ENT specialist
            </h2>

            <p className="mt-4 leading-8 text-white/65">
              Patients often search for an ENT specialist doctor in Kathmandu when symptoms continue,
              return frequently, or affect hearing, breathing, sleep, voice, swallowing, balance, or daily comfort.
            </p>

            <ul className="mt-5 space-y-3 text-white/68">
              {[
                "Ear discharge, ear pain, hearing loss, tinnitus, or dizziness",
                "Nasal blockage, allergy symptoms, sinus pain, smell loss, or nosebleed",
                "Throat pain, tonsil problems, snoring, voice change, or swallowing difficulty",
                "Neck lump, thyroid swelling, salivary gland swelling, or head and neck concerns"
              ].map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
              Consultation information
            </h2>

            <p className="mt-4 leading-8 text-white/65">
              This website provides patient education, common ENT topic pages, clinic schedule,
              and contact details for patients looking for ENT care in Kathmandu.
            </p>

            <div className="mt-6 space-y-3">
              <Link
                href="/#schedule"
                className="block rounded-full border border-white/10 bg-white px-5 py-3 text-center text-sm font-extrabold text-black transition hover:bg-white/85"
              >
                View appointment schedule
              </Link>

              <Link
                href="/#topics"
                className="block rounded-full border border-white/10 bg-white/10 px-5 py-3 text-center text-sm font-extrabold text-white/75 transition hover:bg-white hover:text-black"
              >
                Read ENT patient topics
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
            Frequently asked questions
          </h2>

          <div className="mt-5 space-y-4">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <h3 className="text-lg font-bold tracking-[-0.03em] text-white">
                  {item.question}
                </h3>
                <p className="mt-3 leading-7 text-white/65">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-6 text-sm leading-6 text-white/45">
          This page is for patient education and general information only. It does not replace in-person medical consultation.
        </p>
      </article>
    </main>
  );
}
