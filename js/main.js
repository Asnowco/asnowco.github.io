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
      slug: 'why-sell-inherited-property-sooner',
      title: 'Why I Believe Inherited Property Owners Should Sell Sooner Rather Than Later',
      date: '2026-03-14',
      category: 'Inherited Property',
      excerpt:
        'Inherited property is not just an asset. It is a cost center, a risk, and a timing decision. Here is why I believe many inherited homeowners should sell sooner rather than later.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=70',
      content: [
        '**By Chris Pachuilo, Asnowco**',
        'A lot of people inherit a house and immediately assume waiting is the smart move. I do not agree with that. Inherited property is not just an asset sitting there getting more valuable on its own. It is a property carrying costs, risk, uncertainty, and exposure to a market that is no longer moving the way people got used to over the last few years.',
        'My view is simple. I do not think homeowners with inherited property should assume they can sit on it for a year or two and come out ahead. The national housing market is not showing the kind of upside that makes waiting an easy bet. Inventory has been rising. Price growth has slowed down. More inherited homes are already entering the market. At the same time, a large share of housing wealth is still concentrated in older homeowners, which means turnover is going to keep building over time. That does not automatically mean a crash. It does mean more future competition, more supply pressure, and more reason to make a decision before the market makes one for you.',
        'That is the part a lot of sellers miss. Even if prices do not fall dramatically, you can still lose money by waiting. Taxes continue. Insurance continues. Maintenance continues. Utilities continue. Deferred repairs get worse. Vacancy creates more exposure. Family disagreements drag out longer. And all of that starts eating into what you actually walk away with at closing.',
        'The data backs up the idea that the market is normalizing, not exploding upward. Existing home sales in February 2026 were running at a 4.09 million annual pace, inventory was up to 1.29 million homes, and the median existing home price was $398,000, only 0.3% higher than a year before. That is not the kind of market where I would tell someone to blindly hold inherited property and hope for a major payoff.',
        'Forecasts are pointing in the same direction. Zillow’s March 2026 outlook projected home values to rise just 0.7% this year. That is not a collapse, but it is a weak enough growth outlook that holding costs can easily outrun appreciation on a house you do not want to keep. In plain terms, waiting may not buy you enough upside to justify the risk.',
        'I also think people overstate the idea that there will be one giant moment where older homeowners dump everything at once. The research does not support that. Freddie Mac’s work points to a gradual decline in Boomer homeowner households through 2035, not a sudden wave. But gradual still matters. A slow increase in turnover is still turnover. If more homes keep flowing into the market over time, inherited sellers who wait too long may be competing in a more crowded environment than they would today.',
        'There is another important piece here. Inherited homes are already becoming a larger share of property transfers. Cotality reported that about 340,000 U.S. properties were transferred through inheritance in the 12 months ending in August 2025, which represented 7% of all property transfers, the highest share they have recorded. That matters because inherited homes are no longer some side category. They are becoming a real part of housing supply.',
        'On top of that, older Americans now control a significant share of national real estate wealth. So when I look at the bigger picture, I do not see a strong case for inherited sellers waiting around and assuming scarcity will protect them forever. I see a market where timing matters, where supply dynamics are shifting, and where hesitation can quietly chip away at equity.',
        'That is why I believe inherited property owners should move with urgency. Not panic. Not fear. Just urgency. If the house needs repairs, has probate complications, is sitting vacant, or is becoming a burden on the family, delaying the sale can become more expensive than most people realize. The longer you hold a property you do not want, the more chances you give the market, the house, and the situation itself to turn against you.',
        'At Asnowco, that is how I look at inherited property. It is not just about what the home might be worth someday. It is about what it is costing you right now, what risk you are carrying, and whether waiting is actually serving you. In a market with slower appreciation, rising inventory, and growing long term turnover, sooner is often smarter.',
        '## Sources',
        'National Association of Realtors. “Existing Home Sales Report Shows 1.7% Increase in February.”\nhttps://www.nar.realtor/newsroom/nar-existing-home-sales-report-shows-1-7-increase-in-february',
        'Zillow. “Home Value and Home Sales Forecast, March 2026.”\nhttps://www.zillow.com/research/home-value-sales-forecast-33822/',
        'Freddie Mac. “Aging Boomers and the Impact on the Housing Market.”\nhttps://www.freddiemac.com/research/insight/baby-boomers-impact',
        'Cotality. “A Frozen Tsunami: Why Inherited Homes Won’t Solve the Housing Crisis.”\nhttps://www.cotality.com/insights/articles/why-inherited-homes-wont-solve-the-housing-crisis'
      ]
    },
    {
      slug: 'why-chasing-peak-price-can-backfire',
      title: 'Why Chasing Peak Price Can Backfire in a Slower Housing Market',
      date: '2026-02-22',
      category: 'Market Analysis',
      excerpt:
        'When inventory rises, days on market stretch, and price growth slows, waiting for the perfect retail outcome can cost more than most sellers expect.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=70',
      content: [
        '**By Carson Wais, Asnowco**',
        'A lot of sellers still think about the housing market like it is 2021. They assume the property will keep getting more valuable, buyers will keep competing hard, and waiting a little longer will probably pay off. The numbers do not really support that mindset anymore.',
        'The current market is not collapsing, but it is slower, more balanced, and less forgiving than the last few years. That matters because in a slower market, the decision is not just about what price a seller might get. It is about how long the property sits, what it costs to hold, and whether the extra time actually creates more net profit.',
        'The first number I look at is price growth. Zillow’s March 2026 forecast projected U.S. home values to rise just 0.7% by year end. That is a very different environment from the rapid appreciation sellers got used to earlier in the cycle. If values are moving that slowly, there is much less margin for error. A seller who waits six months hoping for a materially higher price may not get enough appreciation to offset taxes, insurance, utilities, maintenance, or repair exposure during that time.',
        'The second number I look at is inventory. According to the National Association of Realtors, February 2026 ended with 1.29 million existing homes on the market and a 3.8 month supply. That inventory level was up 4.9% from a year earlier. Rising inventory does not automatically mean values crash, but it does usually mean sellers lose some leverage. More competition changes how pricing works. Homes have to stand out more. Buyers get more selective. Deals get less automatic.',
        'The third number is time. Zillow reported that homes took a median of 28 days to go pending in February 2026, which was four days longer than a year earlier. That may not sound dramatic at first, but the direction matters. A slower pending timeline means more holding time, more uncertainty, and more exposure for a seller. If the property is inherited, distressed, vacant, outdated, or carrying deferred maintenance, extra time is rarely free. It usually means more cost and more risk.',
        'I also pay attention to pricing power indicators. Zillow reported that 20.4% of homes sold above list price in the most recent data, which was lower than a year earlier. That tells me buyers are still active, but sellers are not getting the same kind of easy momentum they could expect when the market was moving hotter. In a more selective environment, chasing top dollar can lead to overpricing, stale listings, price cuts, and weaker final outcomes.',
        'The profit side tells a similar story. ATTOM’s year end 2025 report showed the typical home sale still generated a strong gross profit, but seller margins fell from 55% in 2024 to 49% in 2025. That is the third straight year of declining margins. So even though headline prices remain high, the easy upside has been compressing. Sellers who assume the market will carry them to a better result just by waiting are relying on a trend that has already been weakening.',
        'This is where I think a lot of people make the wrong calculation. They compare a possible retail sale price against a direct or wholesale offer and stop there. That is incomplete math. The better comparison is retail price minus commissions, concessions, repair costs, prep costs, carrying costs, time risk, and deal fallout risk versus a cleaner direct number with less friction. Those are two very different equations.',
        'That matters even more for inherited homes, vacant properties, distress situations, landlord fatigue, or houses with condition issues. In those cases, speed and certainty can have real economic value. A seller does not need to lose money for delay to be expensive. They just need to spend months carrying a property in a market where appreciation is weak and competition is increasing. In that setup, the supposed upside of waiting can disappear fast.',
        'From my perspective, the market right now rewards realism more than optimism. If a property is clean, updated, retail ready, and the owner has time, listing may still make sense. But if the property needs work, carries risk, or the seller values certainty, the data supports moving earlier rather than later. In a market with slower value growth, longer market times, and rising inventory, waiting for the perfect number can become the reason a seller nets less.',
        'That is why I look at wholesaling and direct buying as a math decision, not just a convenience decision. In the right situation, the faster exit is not the compromise. It is the stronger move.',
        '## Sources',
        'Zillow Research. “Zillow Home Value and Home Sales Forecast, March 2026.”\nhttps://www.zillow.com/research/home-value-sales-forecast-33822/',
        'National Association of Realtors. “Existing Home Sales Report Shows 1.7% Increase in February.”\nhttps://www.nar.realtor/newsroom/nar-existing-home-sales-report-shows-1-7-increase-in-february',
        'Zillow. “Zillow’s February Market Report Points to Spring Rebound.”\nhttps://zillow.mediaroom.com/2026-03-04-Zillows-February-Market-Report-points-to-spring-rebound',
        'ATTOM. “Year End 2025 U.S. Home Sales Report.”\nhttps://www.attomdata.com/news/market-trends/home-sales-prices/2025-year-end-home-sales-report/'
      ]
    },
    {
      slug: 'why-some-sellers-skip-agents-and-sell-direct',
      title: 'Why Some Sellers Skip the Agent Route and Sell Direct Instead',
      date: '2026-01-28',
      category: 'Selling Options',
      excerpt:
        'For some homeowners, listing with an agent is not the best fit. Here is why direct selling can make more sense when speed, simplicity, and certainty matter more than the traditional process.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=70',
      content: [
        '**By Chris Pachuilo, Asnowco**',
        'A lot of homeowners are told the same thing right away. Call an agent, list the house, clean everything up, make repairs, stage it, wait for showings, negotiate, and hope the process works out. For some properties, that makes sense. For a lot of others, it does not.',
        'I think too many sellers are pushed toward the traditional listing route as if it is automatically the smartest option. It is not. In plenty of situations, it is slower, more expensive, more invasive, and more uncertain than people expect. Sellers are not just paying for expertise. They are usually stepping into a full process with commissions, prep costs, buyer demands, inspection issues, appraisal risk, and a timeline that can drag longer than they were led to believe.',
        'That is where a lot of frustration starts. The agent model is built around maximizing a listing process. My model is built around solving a seller’s problem. Those are not always the same thing.',
        'If a house is outdated, inherited, damaged, tenant occupied, full of belongings, tied up in family stress, or just something the owner wants gone fast, listing can turn into a burden. Suddenly the seller is being told to spend money before making money. Clean this. Fix that. Paint this room. Replace that floor. Deal with contractors. Leave the house for showings. Wait for offers. Renegotiate after inspection. Hope the buyer’s financing holds together. That is a lot of moving parts for someone who may not even want to be in the process to begin with.',
        'Then there are the fees. A lot of sellers focus on sale price without thinking hard enough about net proceeds. Commission comes off the top. Closing costs may still be there. Repair credits get negotiated. Concessions get asked for. Time carries its own cost too. Mortgage payments, taxes, insurance, utilities, cleanup, and maintenance do not pause just because a property is listed. So even if the top line number looks higher on paper, that does not always mean the seller actually comes out ahead in a meaningful way.',
        'That is why I think the traditional route gets oversold. It works best when the property shows well, the seller has time, the house is retail ready, and the owner is willing to deal with the full process. But a lot of real world sellers are not in that position. They are dealing with pressure, not theory. They want speed. They want clarity. They want fewer people involved. They want a real number and a real path to closing.',
        'That is where direct buyers and wholesalers come in. We are not pretending to be the perfect fit for every property. We are the fit for sellers who value certainty, speed, convenience, and simplicity over putting a house through the retail machine. We buy based on the condition and situation as it exists. We solve the transaction without requiring the seller to become a project manager first.',
        'The biggest difference is alignment. A traditional listing often asks, “How do we market this house?” I ask, “What does this owner need, and what is the fastest cleanest way to get there?” Sometimes that means a direct purchase. Sometimes it means a creative solution. Sometimes it means helping a seller avoid months of wasted time.',
        'I am not anti agent. I am anti pretending that every seller should follow the same script. Some homeowners do not need open houses, listings, and commissions. Some need a serious buyer who can move quickly and cut the noise out of the deal.',
        'That is how I look at it at Asnowco. We are here for the sellers who do not want the standard process, do not want the delays, and do not want their situation turned into a long drawn out transaction. For the right property and the right seller, direct is not the backup plan. It is the smarter one.'
      ]
    },
    {
      slug: 'clean-timelines-in-wholesale-deals',
      title: 'Clean Timelines for a Cash Sale',
      date: '2026-01-10',
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
      date: '2025-12-18',
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
      date: '2026-02-04',
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
    const imageEl = document.querySelector('[data-post-image]');

    if (titleEl) titleEl.textContent = p.title;
    if (metaEl) metaEl.textContent = `${p.category} • ${formatDate(p.date)}`;
    if (imageEl && p.image) imageEl.setAttribute('src', p.image);

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
