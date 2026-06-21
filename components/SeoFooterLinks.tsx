import Link from "next/link";

export default function SeoFooterLinks() {
  return (
    <section className="seo-footer-links-section px-5 pb-10 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/topics/ent-doctor-kathmandu-nepal"
          className="seo-footer-card group block rounded-[1.75rem] border p-5 text-sm transition duration-300"
        >
          <span className="seo-footer-label font-semibold">
            Popular patient search
          </span>

          <span className="seo-footer-link ml-2 font-bold underline underline-offset-4 transition duration-300">
            ENT Doctor in Kathmandu, Nepal
          </span>
        </Link>
      </div>
    </section>
  );
}
