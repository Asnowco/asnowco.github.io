(() => {
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const stickyCta = document.querySelector('.sticky-cta');
  const footer = document.querySelector('footer.site-footer');
  if (stickyCta && footer && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        stickyCta.classList.toggle('is-hidden', Boolean(entry && entry.isIntersecting));
      },
      { threshold: 0.01 }
    );
    io.observe(footer);
  }

  const nav = document.querySelector('[data-nav]');
  const toggle = document.querySelector('[data-nav-toggle]');
  if (nav && toggle) {
    const close = () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.addEventListener('click', (e) => {
      const t = e.target;
      if (t instanceof HTMLAnchorElement) close();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) close();
    });
  }

  const posts = [
    {
      slug: 'clean-timelines-in-wholesale-deals',
      title: 'Clean Timelines for a Cash Sale',
      date: '2026-03-01',
      category: 'Cash Offers',
      excerpt: 'A simple framework for keeping the sale moving: intake, clarity, and documentation checkpoints.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=70',
      content: [
        'Speed is useful only when it stays organized. The best cash-sale execution is predictable: what happens next, when it happens, and who owns it.',
        `## A simple timeline
1) Intake: gather only what changes the decision.
2) Underwrite: confirm price, constraints, and exit.
3) Execute: communicate the next step before it is needed.`,
        'Documentation is not overhead—it is how you keep momentum without confusion.'
      ]
    },
    {
      slug: 'probate-what-to-expect',
      title: 'Probate: What to Expect (and What We Need)',
      date: '2026-03-08',
      category: 'Probate',
      excerpt: 'Probate scenarios need discretion and clarity. Here is what we typically ask for to move responsibly.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=70',
      content: [
        'Probate timelines vary. The goal is to reduce uncertainty for everyone involved while staying respectful and accurate.',
        `## What helps us move
- Basic property details
- Stakeholder context
- Known timeline constraints
- Preferred communication channel`,
        'We keep the process direct and documentation-first.'
      ]
    },
    {
      slug: 'ai-automation-without-chaos',
      title: 'AI Automation Without Chaos',
      date: '2026-03-15',
      category: 'Operations',
      excerpt: 'Practical automation is about stable workflows. Start small, measure impact, and protect reputation by default.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=70',
      content: [
        'Most automation projects fail because the workflow is unclear. Pick one process, define the input, define the output, and enforce the rules.',
        `## Starting point
Automate a single repetitive step: triage, drafting, or summarization. Keep humans in the loop until accuracy is consistent.`,
        'Reputation protection starts with consistency: clear messaging, good hygiene, and fast response.'
      ]
    }
  ];

  const formatDate = (iso) => {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
  };

  const card = (p) => {
    const el = document.createElement('article');
    el.className = 'card blog-card';
    el.innerHTML = `
      <div class="blog-card-media" aria-hidden="true">
        <img src="${p.image || ''}" alt="" loading="lazy" />
      </div>
      <div class="kicker">${p.category} • ${formatDate(p.date)}</div>
      <h3>${p.title}</h3>
      <p>${p.excerpt}</p>
      <a class="btn btn-primary" href="./post.html?slug=${encodeURIComponent(p.slug)}">Read publication</a>
    `.trim();
    return el;
  };

  const preview = document.querySelector('[data-publications-preview]');
  if (preview) {
    posts.slice(0, 3).forEach((p) => preview.appendChild(card(p)));
  }

  const list = document.querySelector('[data-publications-list]');
  if (list) {
    posts.forEach((p) => list.appendChild(card(p)));
  }

  const postRoot = document.querySelector('[data-post]');
  if (postRoot) {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    const p = posts.find((x) => x.slug === slug) || posts[0];

    const titleEl = document.querySelector('[data-post-title]');
    const metaEl = document.querySelector('[data-post-meta]');
    const contentEl = document.querySelector('[data-post-content]');

    if (titleEl) titleEl.textContent = p.title;
    if (metaEl) metaEl.textContent = `${p.category} • ${formatDate(p.date)}`;

    if (contentEl) {
      contentEl.innerHTML = p.content
        .map((block) => {
          if (block.startsWith('## ')) {
            const h = block.replace(/^##\s+/, '');
            return `<h2>${h}</h2>`;
          }
          if (block.includes('\n')) {
            const lines = block.split('\n');
            if (lines[0].startsWith('## ')) {
              const h = lines[0].replace(/^##\s+/, '');
              const rest = lines.slice(1).join('\n');
              return `<h2>${h}</h2><p>${rest.replace(/\n/g, '<br />')}</p>`;
            }
            if (lines[0].match(/^\d+\)\s/)) {
              return `<p>${block.replace(/\n/g, '<br />')}</p>`;
            }
          }
          if (block.startsWith('- ')) {
            const items = block.split('\n').filter((x) => x.startsWith('- ')).map((x) => x.slice(2));
            return `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
          }
          return `<p>${block}</p>`;
        })
        .join('');
    }

    document.title = `${p.title} — Asnowco`;
  }
})();
