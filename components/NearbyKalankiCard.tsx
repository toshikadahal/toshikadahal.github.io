export default function NearbyKalankiCard() {
  const areas = [
    "Kalanki",
    "Kuleshwor",
    "Balkhu",
    "Thankot",
    "Chandragiri",
    "Naikap",
    "Satungal",
    "Syuchatar",
    "Ravi Bhawan",
    "Kalimati",
    "Soalteemode",
    "Tahachal",
    "Teku",
    "Kirtipur",
    "Tinthana",
    "Matatirtha",
    "Balambu",
    "Gurjudhara",
    "Sitapaila",
    "Swayambhu"
  ];

  return (
    <section id="kalanki-nearby" className="nearby-kalanki-section mt-8 text-white">
      <div className="nearby-kalanki-card rounded-[2rem] border p-6 shadow-2xl sm:p-8">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="nearby-kalanki-eyebrow text-sm font-bold uppercase tracking-[0.3em]">
              Nearby patient areas
            </p>

            <h2 className="mt-4 text-[clamp(2rem,4.5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.07em]">
              Patients from Kalanki and nearby areas
            </h2>

            <p className="nearby-kalanki-text mt-5 max-w-xl text-base leading-8 sm:text-lg">
              Patients from Kalanki and nearby areas can contact Dr. Anuj Devkota for ENT consultation information,
              appointment schedule, clinic location, and patient education.
            </p>
          </div>

          <div className="nearby-kalanki-area-box rounded-[1.6rem] border p-4 sm:p-5">
            <p className="nearby-kalanki-subtitle text-sm font-bold uppercase tracking-[0.22em]">
              Areas covered
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {areas.map((area) => (
                <span
                  key={area}
                  className="nearby-kalanki-chip rounded-full border px-3.5 py-2 text-sm font-bold transition duration-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
