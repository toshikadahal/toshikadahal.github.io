
(() => {
  const canvas = document.getElementById("fluid-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const DPR = Math.max(1, window.devicePixelRatio || 1);

  const labels = [
    "ENT", "Ear Care", "Nose", "Throat", "Sinus", "Hearing",
    "Otology", "Rhinology", "Mastoid", "Airway", "Temporal Bone", "Head & Neck"
  ];

  let width = 0;
  let height = 0;
  let blobs = [];
  let pills = [];
  let raf = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * DPR);
    canvas.height = Math.floor(height * DPR);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    seed();
  }

  function seed() {
    const blobCount = Math.max(10, Math.floor(width / 140));
    const pillCount = Math.max(12, Math.floor(width / 110));
    blobs = Array.from({ length: blobCount }, (_, i) => makeBlob(i, true));
    pills = Array.from({ length: pillCount }, (_, i) => makePill(i, true));
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function makeBlob(i, randomY = false) {
    return {
      x: rand(0, width),
      y: randomY ? rand(0, height) : height + rand(20, 180),
      r: rand(44, 120),
      vx: rand(-0.14, 0.14),
      vy: rand(0.18, 0.6),
      phase: rand(0, Math.PI * 2),
      hue: i % 3 === 0 ? 175 : i % 3 === 1 ? 205 : 42,
      alpha: rand(0.08, 0.18)
    };
  }

  function makePill(i, randomY = false) {
    const label = labels[i % labels.length];
    const w = 70 + label.length * 8;
    return {
      label,
      x: rand(10, Math.max(20, width - w - 10)),
      y: randomY ? rand(0, height) : height + rand(30, 250),
      w,
      h: 34,
      vx: rand(-0.18, 0.18),
      vy: rand(0.35, 0.95),
      phase: rand(0, Math.PI * 2),
      hue: i % 2 ? 174 : 208,
      alpha: rand(0.72, 0.9)
    };
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

  function drawBlob(b, time) {
    const offsetX = Math.sin(time * 0.0006 + b.phase) * 18;
    const offsetY = Math.cos(time * 0.0007 + b.phase) * 10;
    const x = b.x + offsetX;
    const y = b.y + offsetY;
    const grad = ctx.createRadialGradient(x - b.r * 0.24, y - b.r * 0.28, b.r * 0.2, x, y, b.r);
    grad.addColorStop(0, `hsla(${b.hue}, 72%, 70%, ${b.alpha + 0.08})`);
    grad.addColorStop(0.55, `hsla(${b.hue}, 74%, 62%, ${b.alpha})`);
    grad.addColorStop(1, `hsla(${b.hue}, 78%, 60%, 0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, b.r, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawPill(p, time) {
    const wobbleX = Math.sin(time * 0.001 + p.phase) * 12;
    const wobbleR = Math.sin(time * 0.0014 + p.phase) * 0.02;
    const x = p.x + wobbleX;
    const y = p.y;

    ctx.save();
    ctx.translate(x + p.w / 2, y + p.h / 2);
    ctx.rotate(wobbleR);
    ctx.translate(-(x + p.w / 2), -(y + p.h / 2));

    ctx.shadowColor = 'rgba(15, 23, 42, 0.08)';
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 8;
    roundedRect(x, y, p.w, p.h, 17);
    ctx.fillStyle = `hsla(0, 0%, 100%, ${p.alpha})`;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = `hsla(${p.hue}, 74%, 45%, 0.24)`;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x + 13, y + p.h / 2, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${p.hue}, 78%, 42%, 0.75)`;
    ctx.fill();

    ctx.fillStyle = 'rgba(11, 23, 40, 0.82)';
    ctx.font = '700 13px Inter, Arial, sans-serif';
    ctx.textBaseline = 'middle';
    ctx.fillText(p.label, x + 24, y + p.h / 2 + 0.5);
    ctx.restore();
  }

  function update() {
    for (const b of blobs) {
      b.y -= b.vy;
      b.x += b.vx;
      if (b.y < -b.r - 40) Object.assign(b, makeBlob(0, false));
      if (b.x < -160) b.x = width + 120;
      if (b.x > width + 160) b.x = -120;
    }
    for (const p of pills) {
      p.y -= p.vy;
      p.x += p.vx;
      if (p.y < -p.h - 20) Object.assign(p, makePill(Math.floor(Math.random() * labels.length), false));
      if (p.x < -p.w) p.x = width + 18;
      if (p.x > width + 18) p.x = -p.w;
    }
  }

  function render(time) {
    ctx.clearRect(0, 0, width, height);
    for (const b of blobs) drawBlob(b, time);
    for (const p of pills) drawPill(p, time);
    update();
    raf = requestAnimationFrame(render);
  }

  window.addEventListener('resize', resize);
  resize();
  cancelAnimationFrame(raf);
  render(0);
})();
