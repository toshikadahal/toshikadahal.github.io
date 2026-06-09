import Link from "next/link";

export default function SeoFooterLinks() {
  return (
    <section className="bg-[#050505] px-5 pb-10 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/topics/ent-doctor-kathmandu-nepal"
          className="group block rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 text-sm text-white/55 transition hover:border-white/25 hover:bg-white/[0.08]"
        >
          <span className="font-semibold text-white/70">
            Popular patient search
          </span>

          <span className="ml-2 font-bold text-white underline decoration-white/25 underline-offset-4 transition group-hover:text-white/75">
            ENT Doctor in Kathmandu, Nepal
          </span>
        </Link>
      </div>
    </section>
  );
}
