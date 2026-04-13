/* ============================================================
   News Page – news-script.js
   ============================================================ */

const NEWS_ARTICLES = {
  test_rig: {
    title: 'New test rig commissioned for high-speed motor experiments',
    date: 'January 10, 2026',
    tag: 'Lab news',
    tagClass: 'news-card__tag',
    image: 'images/high-speed-machine.webp',
    excerpt: 'A new low-voltage test rig capable of 2 MW and 16,000 rpm has been commissioned to support high-speed machine testing and prototype validation.',
    fullContent: `
      <p>The Power Energy and Drives Systems Lab is excited to announce the commissioning of a state-of-the-art test rig designed specifically for high-speed motor experiments. This new facility represents a significant advancement in our research capabilities.</p>

      <h3>Key Features</h3>
      <ul>
        <li>2 MW power capacity for high-power testing</li>
        <li>16,000 rpm maximum speed capability</li>
        <li>Low-voltage design for enhanced safety</li>
        <li>Advanced data acquisition and control systems</li>
        <li>Integrated cooling and vibration monitoring</li>
      </ul>

      <p>The test rig will enable our researchers to validate prototypes, conduct performance testing, and develop new methodologies for high-speed electrical machines. This investment underscores our commitment to advancing the field of electrical engineering and supporting industry partners in their innovation efforts.</p>

      <p>The commissioning ceremony was attended by lab members, university leadership, and industry representatives. The facility is now operational and ready to support ongoing and future research projects.</p>
    `
  },
  consortium_grant: {
    title: 'Research consortium grant awarded for converter reliability',
    date: 'November 5, 2025',
    tag: 'Funding',
    tagClass: 'news-card__tag news-card__tag--funding',
    image: 'images/hiecs.webp',
    excerpt: 'A multi-institution consortium received funding to investigate converter reliability and lifetime extension methods for industrial applications.',
    fullContent: `
      <p>The Power Energy and Drives Systems Lab, in collaboration with several European universities and industry partners, has been awarded a significant research grant to investigate converter reliability and develop lifetime extension methods for industrial applications.</p>

      <h3>Project Overview</h3>
      <p>This three-year project will focus on:</p>
      <ul>
        <li>Advanced reliability modeling of power electronic converters</li>
        <li>Development of predictive maintenance algorithms</li>
        <li>Investigation of novel materials and cooling techniques</li>
        <li>Field testing and validation in industrial environments</li>
      </ul>

      <h3>Consortium Partners</h3>
      <p>The project brings together expertise from:</p>
      <ul>
        <li>Ashesi University (Lead)</li>
        <li>Technical University of Denmark</li>
        <li>RWTH Aachen University</li>
        <li>Industry partners including ABB and Siemens</li>
      </ul>

      <p>This collaborative effort will address critical challenges in power electronics reliability, contributing to more sustainable and cost-effective industrial systems. The project is expected to begin in early 2026 with the first results anticipated within 18 months.</p>
    `
  },
  liquid_cooling: {
    title: 'New publication: Direct liquid cooling in compact machines',
    date: 'June 20, 2025',
    tag: 'Publication',
    tagClass: 'news-card__tag news-card__tag--publication',
    image: 'images/summer-image.webp',
    excerpt: 'A new journal article covering direct liquid cooling arrangements for compact machines has been published.',
    fullContent: `
      <p>Researchers from the Power Energy and Drives Systems Lab have published a comprehensive study on direct liquid cooling techniques for compact electrical machines in the IEEE Transactions on Industry Applications.</p>

      <h3>Key Findings</h3>
      <p>The publication presents:</p>
      <ul>
        <li>Novel cooling channel designs for stator windings</li>
        <li>Thermal modeling and experimental validation</li>
        <li>Performance comparisons with traditional cooling methods</li>
        <li>Design guidelines for implementing direct liquid cooling</li>
      </ul>

      <h3>Abstract</h3>
      <p>"Direct liquid cooling of electrical machines offers significant advantages in terms of power density and efficiency. This paper investigates various cooling channel configurations and presents experimental results demonstrating up to 40% improvement in thermal performance compared to conventional air cooling methods."</p>

      <p>The research was conducted by Dr. Richard Awingot and his team, with contributions from industry collaborators. The full paper is available through IEEE Xplore and has already received attention from the international research community.</p>

      <p>This work contributes to the development of more compact and efficient electrical machines, which are essential for applications ranging from electric vehicles to renewable energy systems.</p>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('news-modal');
  const backdrop = document.getElementById('news-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-news');
  const contentEl = document.getElementById('news-detail');

  function openNewsModal(key) {
    const article = NEWS_ARTICLES[key];
    if (!article) return;

    contentEl.innerHTML = `
      <div class="news-modal-header">
        <img class="news-modal-image" src="${article.image}" alt="${article.title}">
        <div class="news-modal-meta">
          <time datetime="${article.date.replace(/\s/g, '-').toLowerCase()}">${article.date}</time>
          <span class="${article.tagClass}">${article.tag}</span>
        </div>
        <h2 class="news-modal-title">${article.title}</h2>
      </div>
      <div class="news-modal-content">
        ${article.fullContent}
      </div>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Card click handlers
  document.querySelectorAll('.news-card').forEach(card => {
    const handler = (e) => {
      e.preventDefault();
      openNewsModal(card.dataset.article);
    };
    card.addEventListener('click', handler);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handler(e);
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});