const memberships = [
  "Life Member, Society of Otolaryngology of Nepal (SOL)",
  "Life Member, Facial Aesthetics and Reconstructive Surgeons of Nepal",
  "Member, Young Confederation of European ORL-HNS (Reference No. 1178)",
  "Member, Asia-Pacific Society of Thyroid Surgery",
  "Senior Vice President, United National Medical Society of Nepal (2017 to date)"
];

const trainings = [
  {
    title: "33rd Hands-on Nepal Temporal Bone Dissection Workshop",
    place: "Institute of Medicine, Kathmandu",
    date: "15-17 October 2025",
    role: "Faculty"
  },
  {
    title: "13th Endoscopic Sinus and Skull Base Surgery Workshop, Hands-on Cadaver Dissection and Live Surgery",
    place: "Institute of Medicine, Kathmandu",
    date: "February 2025",
    role: "Faculty"
  },
  {
    title: "13th Head and Neck Cadaveric Dissection Workshop",
    place: "Institute of Medicine, Kathmandu",
    date: "December 2024",
    role: "Faculty"
  },
  {
    title: "Workshop on Surgical Control and Vascular Anastomosis Skills, Practical Approaches to Vascular Injuries",
    place: "Dhulikhel Hospital, Dhulikhel",
    date: "November 2024",
    role: "Delegate"
  },
  {
    title: "APOST Educational Scholarship, APOST Basic FESS Cadaver Training Course",
    place: "King Chulalongkorn Memorial Hospital, Bangkok",
    date: "March 2023",
    role: "Delegate"
  },
  {
    title: "First Green Pastures Hospital Temporal Bone Dissection and One Day Live Ear Surgery Demonstration Course",
    place: "INF Nepal Green Pasture Hospital, Pokhara",
    date: "February 2023",
    role: "Delegate"
  },
  {
    title: "6th AIIMS Head and Neck Cadaveric Dissection Course",
    place: "All India Institute of Medical Sciences, New Delhi",
    date: "December 2018",
    role: "Delegate"
  },
  {
    title: "First Basic Temporal Bone Dissection Workshop",
    place: "Lady Hardinge Otorhinolaryngology Research, New Delhi",
    date: "November 2018",
    role: "Delegate"
  }
];

export default function ProfessionalDevelopment() {
  return (
    <section
      id="professional-development"
      className="professional-development-section bg-[#050505] px-5 py-16 text-white sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/30 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-white/42">
            Professional development
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-[clamp(2.1rem,4.8vw,4.9rem)] font-semibold leading-[0.98] tracking-[-0.075em] text-white">
                Memberships and surgical skill training
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/62 sm:text-lg">
                Professional society memberships and hands-on surgical training reflect continued academic involvement,
                specialist practice, and ongoing development in ENT, head and neck surgery, otology, rhinology,
                skull base surgery, and thyroid surgery.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {["ENT-HNS", "Otology", "Rhinology", "Skull base", "Head and neck"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-bold text-white/66 transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-white/10"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="group rounded-[1.8rem] border border-white/10 bg-black/22 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.075] hover:shadow-2xl hover:shadow-white/10 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">
                    Professional memberships
                  </h3>

                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-white/50 transition duration-300 group-hover:bg-white group-hover:text-black">
                    Memberships
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {memberships.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-semibold leading-6 text-white/68 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white hover:text-black hover:shadow-xl hover:shadow-white/10"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="group rounded-[1.8rem] border border-white/10 bg-black/22 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.075] hover:shadow-2xl hover:shadow-white/10 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">
                    Surgical skill trainings attended
                  </h3>

                  <span className="w-fit rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-white/50 transition duration-300 group-hover:bg-white group-hover:text-black">
                    Selected workshops
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {trainings.map((item) => (
                    <article
                      key={`${item.title}-${item.date}`}
                      className="rounded-3xl border border-white/10 bg-white/[0.055] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-black hover:shadow-xl hover:shadow-white/10"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h4 className="text-base font-bold leading-6 tracking-[-0.025em] text-white/86 transition duration-300 group-hover:text-white">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-white/55 transition duration-300">
                            {item.place}
                          </p>

                          <p className="mt-1 text-sm font-semibold text-white/48 transition duration-300">
                            {item.date}
                          </p>
                        </div>

                        <span className="inline-flex w-fit rounded-full border border-white/10 bg-white px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-black transition duration-300">
                          {item.role}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-white/40">
          This section summarizes professional memberships and selected surgical training activities relevant to ENT and head and neck surgery.
        </p>
      </div>
    </section>
  );
}
