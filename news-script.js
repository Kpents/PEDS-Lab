/* ============================================================
   News Page – news-script.js
   ============================================================ */

const NEWS_ARTICLES = {
  test_rig: {
    title: 'Capstone Project: Online Characterization of Solar PV panels using DC-DC power converters',
    date: 'April 20, 2026',
    tag: 'Lab news',
    tagClass: 'news-card__tag',
    image: 'images/pv_character.jpeg',
    excerpt: 'TRACE (Tracking and Real-time Characterisation Engine) ',
    fullContent: `
      <p>TRACE (Tracking and Real-time Characterisation Engine) is a hardware-software system that reconstructs solar PV I-V and P-V characteristic curves in real-time without disconnecting the load. It uses a controlled SEPIC DC-DC converter to emulate variable impedance at the panel output. Unlike offline methods that require system shutdown, TRACE performs full curve synthesis continuously in the field by utilising an architecture currently being deployed with MPPT controllers, enabling a device that can achieve both functions with minimal interruption.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Reconstruct I–V and P–V curves with minimal interruption </li>
        <li>Track Maximum Power Point via real-time control </li>
        <li>Log performance data over time for trend analysis </li>
        <li>Deliver real-time performance insights via dashboard</li>
      </ul>

      <h3>Key Findings</h3>
      <ul>
        <li>Impedance emulation validated in both simulation and hardware </li>
        <li> I-V and P-V curves reconstructed with load connected </li>
        <li> Full architecture designed, simulated, and prototyped </li>
        <li> MPPT tracking efficiency at 98.88% demonstrated in simulation </li>
        <li> Real-time dashboard operational for field monitoring </li>
      </ul>    `
  },
  consortium_grant: {
    title: 'Capstone Project: PV-powered fine sand solar geyser for domestic hot water',
    date: 'April 20, 2026',
    tag: 'Funding',
    tagClass: 'news-card__tag news-card__tag--funding',
    image: 'images/hiecs.webp',
    excerpt: 'A multi-institution consortium received funding to investigate converter reliability and lifetime extension methods for industrial applications.',
    fullContent: `
      <p>Insert Overview</p>
      <h3>Key Features</h3>
      <ul>
        <li>A </li>
        <li>B </li>
        <li>C </li>
        <li>D </li>
      </ul>

      <h3>Key Findings</h3>
      <ul>
        <li> A </li>
        <li> B </li>
        <li> C </li>
        <li> D </li>
        <li> E </li>
      </ul>   
  },
  liquid_cooling: {
    title: 'New publication: Single Stage DC-AC Boost Inverter-Based Perturbation Technique for Online Impedance Spectroscopy Measurements of Photovoltaic Panels',
    date: 'March 03, 2026',
    tag: 'Publication',
    tagClass: 'news-card__tag news-card__tag--publication',
    image: 'images/summer-image.webp',
    excerpt: '',
    fullContent: `
      <h3>Abstract</h3>
      <p>Traditional online impedance spectroscopy measurements of solar PV cells are achieved through two-stage DC-DC-AC power conversion topologies where the input DC-DC boost converter stage is utilized for power regulation and injecting small signal AC perturbations for Electrochemical Impedance Spectroscopy (EIS) measurements. It is easily achieved because the DC-DC boost converter can be simply controlled by small signal linear models. However, due to increased power losses, high weight and cost in the two-stage topologies, single stage boost DC-AC power conversion has become an increased subject of research area. Although the single stage topologies have gained popularity for their compactness, high voltage gain and efficiency, it has not been extended to include online EIS diagnostic functionality for the PV device as done in the two stage DC-DC-AC topology. </p>

      <p>The research was conducted by Dr. Awingot Richard Akparibo. The full paper is available through IEEE Xplore</p>
      <h3>Key Findings</h3>
      <p>The publication presents:</p>
      <ul>
        <li>Novel cooling channel designs for stator windings</li>
        <li>Thermal modeling and experimental validation</li>
        <li>Performance comparisons with traditional cooling methods</li>
        <li>Design guidelines for implementing direct liquid cooling</li>
      </ul>
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
