const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const topics = {
  ear: {
    title: "Ear discharge and chronic ear disease",
    body: "Ear discharge can occur due to infection of the ear canal, middle ear disease or chronic ear problems. ENT evaluation is important when discharge is persistent, foul smelling, painful or associated with hearing loss.",
    points: [
      "Avoid putting oil or unprescribed drops into the ear.",
      "Seek care if there is dizziness, bleeding, facial weakness or severe pain.",
      "Hearing testing or imaging may be required depending on the cause."
    ]
  },
  sinus: {
    title: "Sinusitis and nasal blockage",
    body: "Nasal blockage and sinus symptoms may be due to allergy, infection, deviated nasal septum, polyps or chronic rhinosinusitis. Proper diagnosis helps avoid unnecessary antibiotics and repeated self medication.",
    points: [
      "Persistent blockage, facial pressure or smell loss needs evaluation.",
      "Nasal irrigation may help some patients when advised correctly.",
      "Endoscopic examination or imaging may be needed in selected cases."
    ]
  },
  hearing: {
    title: "Hearing loss and ear evaluation",
    body: "Hearing loss can be temporary or permanent. It may be related to wax, infection, eardrum problems, inner ear conditions or age related causes.",
    points: [
      "Sudden hearing loss should be treated as urgent.",
      "A hearing test helps identify the type and severity of hearing loss.",
      "Early evaluation is important for children, older adults and working professionals."
    ]
  },
  throat: {
    title: "Throat, voice and tonsil symptoms",
    body: "Throat pain, recurrent tonsil symptoms, swallowing difficulty and voice change can have many causes. Persistent or repeated symptoms should be assessed properly.",
    points: [
      "Voice change lasting more than a few weeks needs ENT evaluation.",
      "Difficulty swallowing, bleeding or weight loss are warning symptoms.",
      "Treatment depends on the cause, not only the symptom."
    ]
  },
  neck: {
    title: "Neck swelling warning signs",
    body: "Neck swelling may come from lymph nodes, thyroid, salivary glands or other head and neck conditions. Some swellings are simple, but persistent swelling should not be ignored.",
    points: [
      "Seek evaluation if swelling persists or increases in size.",
      "Associated voice change, swallowing difficulty or weight loss needs attention.",
      "Ultrasound, endoscopy or biopsy may be advised depending on findings."
    ]
  }
};

const topicButtons = document.querySelectorAll(".topic");
const topicCard = document.getElementById("topic-card");

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    topicButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const topic = topics[button.dataset.topic];
    topicCard.innerHTML = `
      <span class="tag">For patients</span>
      <h3>${topic.title}</h3>
      <p>${topic.body}</p>
      <ul>${topic.points.map((point) => `<li>${point}</li>`).join("")}</ul>
    `;
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
