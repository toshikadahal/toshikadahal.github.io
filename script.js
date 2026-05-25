const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const topicData = {
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
    title: "Sinus symptoms and nasal blockage",
    body: "Nasal blockage and sinus symptoms may be due to allergy, infection, deviated nasal septum, polyps or chronic rhinosinusitis. Proper diagnosis helps avoid unnecessary antibiotics and repeated self medication.",
    points: [
      "Persistent blockage, smell loss or facial pressure needs evaluation.",
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

const buttons = document.querySelectorAll(".topic");
const topicPanel = document.getElementById("topicPanel");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const topic = topicData[button.dataset.topic];
    topicPanel.innerHTML = `
      <span class="eyebrow">For patients</span>
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

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

(() => {
  const canvas = document.getElementById("ent-fluid-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  let width = 0;
  let height = 0;
  let blobs = [];
  let labels = [];
  let raf = 0;

  const words = [
    "ENT", "Otology", "Rhinology", "Sinus", "Ear Care", "Hearing",
    "Mastoid", "Airway", "Temporal Bone", "Endoscopy", "Research", "Patient Education"
  ];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }

  function makeBlob(index, randomY = true) {
    return {
      x: random(-100, width + 100),
      y: randomY ? random(-100, height + 100) : height + random(60, 220),
      r: random(90, 240),
      vx: random(-0.18, 0.18),
      vy: random(0.12, 0.45),
      hue: index % 4 === 0 ? 174 : index % 4 === 1 ? 215 : index % 4 === 2 ? 42 : 330,
      phase: random(0, Math.PI * 2),
      alpha: random(0.06, 0.16)
    };
  }

  function makeLabel(index, randomY = true) {
    const word = words[index % words.length];
    return {
      word,
      x: random(0, width - 120),
      y: randomY ? random(0, height) : height + random(30, 260),
      vx: random(-0.25, 0.25),
      vy: random(0.24, 0.8),
      phase: random(0, Math.PI * 2),
      hue: index % 2 === 0 ? 174 : 42
    };
  }

  function seed() {
    const blobCount = Math.max(10, Math.floor(width / 135));
    const labelCount = Math.max(12, Math.floor(width / 130));
    blobs = Array.from({ length: blobCount }, (_, index) => makeBlob(index, true));
    labels = Array.from({ length: labelCount }, (_, index) => makeLabel(index, true));
  }

  function roundedRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function drawBlob(blob, time) {
    const x = blob.x + Math.sin(time * 0.00055 + blob.phase) * 28;
    const y = blob.y + Math.cos(time * 0.0005 + blob.phase) * 18;

    const gradient = ctx.createRadialGradient(
      x - blob.r * 0.22,
      y - blob.r * 0.25,
      blob.r * 0.08,
      x,
      y,
      blob.r
    );

    gradient.addColorStop(0, `hsla(${blob.hue}, 88%, 70%, ${blob.alpha + 0.08})`);
    gradient.addColorStop(0.45, `hsla(${blob.hue}, 86%, 60%, ${blob.alpha})`);
    gradient.addColorStop(1, `hsla(${blob.hue}, 88%, 54%, 0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, blob.r, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawLabel(item, time) {
    const x = item.x + Math.sin(time * 0.001 + item.phase) * 16;
    const y = item.y;
    const padX = 16;
    const h = 36;
    ctx.font = "800 13px Inter, Arial, sans-serif";
    const w = ctx.measureText(item.word).width + padX * 2 + 18;

    ctx.save();
    ctx.translate(x + w / 2, y + h / 2);
    ctx.rotate(Math.sin(time * 0.001 + item.phase) * 0.035);
    ctx.translate(-(x + w / 2), -(y + h / 2));

    ctx.shadowColor = "rgba(0, 0, 0, 0.24)";
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = 10;

    roundedRect(x, y, w, h, 18);
    ctx.fillStyle = "rgba(255,255,255,0.10)";
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.strokeStyle = `hsla(${item.hue}, 86%, 70%, 0.32)`;
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = `hsla(${item.hue}, 86%, 70%, 0.92)`;
    ctx.beginPath();
    ctx.arc(x + 15, y + h / 2, 4.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgba(248,250,252,0.82)";
    ctx.fillText(item.word, x + 27, y + h / 2 + 4);
    ctx.restore();
  }

  function update() {
    blobs.forEach((blob, index) => {
      blob.y -= blob.vy;
      blob.x += blob.vx;
      if (blob.y < -blob.r - 60) {
        blobs[index] = makeBlob(index, false);
      }
      if (blob.x < -blob.r - 80) blob.x = width + blob.r;
      if (blob.x > width + blob.r + 80) blob.x = -blob.r;
    });

    labels.forEach((label, index) => {
      label.y -= label.vy;
      label.x += label.vx;
      if (label.y < -60) {
        labels[index] = makeLabel(index + Math.floor(Math.random() * words.length), false);
      }
      if (label.x < -190) label.x = width + 20;
      if (label.x > width + 20) label.x = -190;
    });
  }

  function render(time) {
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "source-over";
    blobs.forEach((blob) => drawBlob(blob, time));
    labels.forEach((label) => drawLabel(label, time));
    update();
    raf = requestAnimationFrame(render);
  }

  window.addEventListener("resize", resize);
  resize();
  cancelAnimationFrame(raf);
  render(0);
})();
