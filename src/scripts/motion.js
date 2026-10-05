const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- countdown ---------- */
const cd = document.querySelector('[data-countdown]');
if (cd) {
  const target = new Date(cd.dataset.countdown).getTime();
  const set = (unit, value) => {
    const el = cd.querySelector(`[data-unit="${unit}"]`);
    const text = String(value).padStart(2, '0');
    if (el.textContent === text) return;
    el.textContent = text;
    if (!reduce) {
      el.classList.remove('tick');
      void el.offsetWidth; // restart the animation
      el.classList.add('tick');
    }
  };
  const tick = () => {
    const diff = Math.max(0, target - Date.now());
    set('d', Math.floor(diff / 864e5));
    set('h', Math.floor((diff / 36e5) % 24));
    set('m', Math.floor((diff / 6e4) % 60));
    set('s', Math.floor((diff / 1e3) % 60));
  };
  tick();
  setInterval(tick, 1000);
}

/* ---------- nav shadow on scroll ---------- */
const nav = document.querySelector('.nav, .bnav');
const onScroll = () => nav?.classList.toggle('nav--scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- count up ---------- */
const countUp = (el) => {
  const end = Number(el.dataset.count);
  if (reduce || !end) return;
  const start = performance.now();
  const dur = 1400;
  const step = (now) => {
    const t = Math.min(1, (now - start) / dur);
    el.textContent = Math.round(end * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(step);
  };
  el.textContent = '0';
  requestAnimationFrame(step);
};

/* ---------- scroll reveal ---------- */
const revealSelectors = [
  '[data-reveal]',
  '.infobar__line',
  '.cbw__half',
  '.why__text',
  '.path__step',
  '.journey__photo',
  '.reel',
  '.bigstat',
  '.tracks__head',
  '.track',
  '.sched__head',
  '.tt__row',
  '.legend',
  '.section__head',
  '.badge',
  '.next-up',
  '.gala__inner > *',
  '.tix__head',
  '.pass',
  '.convened',
  '.slot',
  '.moment',
  '.reach > *',
  '.venue > *',
  '.faq__list details',
  '.faq > h2',
];

if (!reduce && 'IntersectionObserver' in window) {
  const targets = document.querySelectorAll(revealSelectors.join(','));
  targets.forEach((el) => {
    // stagger siblings of the same kind
    const sibs = [...el.parentElement.children].filter((c) => c.tagName === el.tagName);
    el.style.setProperty('--i', Math.min(sibs.indexOf(el), 8));
    el.classList.add('reveal');
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        e.target.querySelectorAll('[data-count]').forEach(countUp);
        io.unobserve(e.target);
      });
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.05 }
  );
  targets.forEach((el) => io.observe(el));

  // hero numbers count up after the entrance animation
  document.querySelectorAll('.infobar [data-count]').forEach((el) => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { countUp(el); o.disconnect(); } });
    o.observe(el);
  });
}

/* ---------- agenda progress rail ---------- */
const agenda = document.querySelector('.agenda');
if (agenda) {
  const update = () => {
    const r = agenda.getBoundingClientRect();
    const mid = window.innerHeight * 0.6;
    const p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
    agenda.style.setProperty('--p', p.toFixed(3));
    agenda.querySelectorAll('.agenda__row').forEach((row) => {
      row.classList.toggle('passed', row.getBoundingClientRect().top < mid);
    });
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

/* ---------- hero network: signals travelling between nodes ---------- */
const canvas = document.querySelector('.hero__net');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const LINK = 140;
  let w = 0;
  let h = 0;
  let nodes = [];
  let pulses = [];
  let running = true;

  const resize = () => {
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(80, Math.round((w * h) / 16000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      hub: Math.random() < 0.12,
    }));
    pulses = [];
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    const links = [];
    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) {
          links.push([a, b]);
          ctx.strokeStyle = `rgba(79,179,255,${(1 - d / LINK) * 0.28})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    for (const n of nodes) {
      ctx.fillStyle = n.hub ? 'rgba(141,198,63,.9)' : 'rgba(255,255,255,.45)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.hub ? 2.6 : 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
    // spawn signals along live links
    if (links.length && pulses.length < 14 && Math.random() < 0.08) {
      const [a, b] = links[Math.floor(Math.random() * links.length)];
      pulses.push({ a, b, t: 0, speed: 0.008 + Math.random() * 0.01 });
    }
    pulses = pulses.filter((p) => p.t <= 1);
    for (const p of pulses) {
      p.t += p.speed;
      const x = p.a.x + (p.b.x - p.a.x) * p.t;
      const y = p.a.y + (p.b.y - p.a.y) * p.t;
      const g = ctx.createRadialGradient(x, y, 0, x, y, 9);
      g.addColorStop(0, 'rgba(0,166,81,.95)');
      g.addColorStop(1, 'rgba(0,166,81,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const loop = () => {
    if (!running) return;
    draw();
    requestAnimationFrame(loop);
  };

  resize();
  window.addEventListener('resize', resize);
  if (reduce) {
    draw();
  } else {
    new IntersectionObserver(([e]) => {
      const was = running;
      running = e.isIntersecting;
      if (running && !was) loop();
    }).observe(canvas);
    loop();
  }
}
