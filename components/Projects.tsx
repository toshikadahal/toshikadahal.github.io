const projects = [
  {
    title: "Otology and ear surgery",
    description: "Ear discharge, chronic ear disease, hearing problems, tympanoplasty and mastoid disease."
  },
  {
    title: "Rhinology and sinus care",
    description: "Nasal blockage, allergy, sinusitis, nasal endoscopy and endoscopic sinus surgery guidance."
  },
  {
    title: "Throat, voice and thyroid",
    description: "Tonsil problems, voice change, thyroid swelling, neck lumps and head and neck evaluation."
  },
  {
    title: "Teaching and research",
    description: "ENT teaching, clinical research, surgical anatomy and digital patient education."
  }
];

export default function Projects() {
  return (
    <section className="relative bg-[#121212] px-6 py-28 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/40">
              Specialist areas
            </p>
            <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Modern ENT care with a cinematic digital presence.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-white/55">
            A trial portfolio page designed for high impact storytelling, patient confidence and professional presentation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group min-h-72 rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.09] hover:shadow-glow"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                  0{index + 1}
                </span>
                <span className="h-2 w-2 rounded-full bg-white/45 transition group-hover:bg-white" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-4 leading-7 text-white/55">{project.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 backdrop-blur-xl md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/40">Appointments</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Professional consultation details can sit here.
              </h3>
              <p className="mt-4 max-w-2xl text-white/55">
                Add your clinic schedule, WhatsApp number, hospital details and patient guidance without changing the scrollytelling section.
              </p>
            </div>
            <a
              href="https://wa.me/9779860319180"
              className="inline-flex justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-white/85"
            >
              WhatsApp 9860319180
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}