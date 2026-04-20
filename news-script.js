/* ============================================================
   News Page – news-script.js
   ============================================================ */

const NEWS_ARTICLES = {
  news_1: {
    title: 'PEDS Lab Unveils Tracking and Real-time Characterisation Engine (TRACE) for Real-Time Solar PV Monitoring',
    date: 'April 20, 2026',
    tag: 'Lab news',
    tagClass: 'news-card__tag',
    image: 'images/pv_character.jpeg',
    excerpt: 'TRACE (Tracking and Real-time Characterisation Engine) ',
    fullContent: `
      <p>The PEDS Lab has developed TRACE (Tracking and Real-time Characterisation Engine), an innovative hardware-software system designed to reconstruct solar PV I–V and P–V characteristic curves in real time—without disconnecting the load.</p>
      <p> Unlike conventional offline methods that require system shutdown, TRACE operates continuously in the field, ensuring uninterrupted performance monitoring. The system leverages a controlled SEPIC DC-DC converter to emulate variable impedance at the panel output, enabling full curve synthesis under normal operating conditions.</p>
      `
  },
  news_2: {
    title: 'PEDS Lab Develops PV-Powered Fine Sand Solar Geyser for Low-Cost Domestic Hot Water Production',
    date: 'April 20, 2026',
    tag: 'Funding',
    tagClass: 'news-card__tag news-card__tag--funding',
    image: 'images/solar_geyser.jpeg',
    excerpt: '',
    fullContent: `
      <p>The PEDS Lab has developed a prototype focused on the design, and implementation of a PV-integrated Fine Sand Geyser (PFSG) for domestic hot water production.</p>
      <p>The system employs a direct coupling approach in which solar energy from a photovoltaic array is converted into heat through a nichrome resistive heating element, eliminating the need for inverters and battery storage. The generated thermal energy is stored in fine river-washed sand, which serves as a low-cost sensible thermal energy storage medium. Heat is subsequently transferred to water via a circular helical copper heat exchanger, enabling usable hot water output.</p>
            `
  },
  news_3: {
    title: 'New publication: Single Stage DC-AC Boost Inverter-Based Perturbation Technique for Online Impedance Spectroscopy Measurements of Photovoltaic Panels',
    date: 'March 03, 2026',
    tag: 'Publication',
    tagClass: 'news-card__tag news-card__tag--publication',
    image: 'images/SSBI_2.png',
    excerpt: '',
    fullContent: `
      <h3>Abstract</h3>
      <p>Traditional online impedance spectroscopy measurements of solar PV cells are achieved through two-stage DC-DC-AC power conversion topologies where the input DC-DC boost converter stage is utilized for power regulation and injecting small signal AC perturbations for Electrochemical Impedance Spectroscopy (EIS) measurements. It is easily achieved because the DC-DC boost converter can be simply controlled by small signal linear models. </p>
      
      <p>However, due to increased power losses, high weight and cost in the two-stage topologies, single stage boost DC-AC power conversion has become an increased subject of research area. Although the single stage topologies have gained popularity for their compactness, high voltage gain and efficiency, it has not been extended to include online EIS diagnostic functionality for the PV device as done in the two stage DC-DC-AC topology. </p>
      <br>
      <p>The full paper can be found <a href="https://ieeexplore.ieee.org/document/11419764" style="text-decoration: underline; color: blue;">here</a></p>
      <h3>Key Findings</h3>
      <p>The publication presents:</p>
      <ul>
        <li>A new online impedance spectroscopy (EIS) measurement approach for PV panels that does not rely on the conventional two-stage DC–DC + DC–AC topology.</li>
        <li>Highlights Simplified Split-Source Boost Inverter (SSSBI) advantages vs other single-stage boost inverters</li>
        <li>Diagnostic insight: Characteristic frequency (fc) shifts with PV condition</li>
        <li>Parameter extraction trends are consistent; single-sine is more accurate than multisine (BIS) in their setup</li>
        <li>Simulation and hardware indicate the inverter maintains compliance with EIS requirements (continuous input), but perturbations add ripples</li>
      </ul>
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
