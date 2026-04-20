/* ============================================================
   News Page – news-script.js
   ============================================================ */

const NEWS_ARTICLES = {
  news_1: {
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
      </ul>
      `
  },
  news_2: {
    title: 'Capstone Project: PV-powered fine sand solar geyser for domestic hot water',
    date: 'April 20, 2026',
    tag: 'Funding',
    tagClass: 'news-card__tag news-card__tag--funding',
    image: 'images/solar_geyser.jpeg',
    excerpt: '',
    fullContent: `
      <p>This project details the design, simulation, and hardware implementation of a PV integrated Fine sand Geyser (PFSG) for domestic hot water production. The system utilizes a direct coupling approach, where solar energy from a PV array is converted into heat via a nichrome resistive element without the need for inverters and batteries. This heat is stored in fine river washed sand, which serves as a low cost sensible thermal energy storage medium, and is later transferred to water through a circular helical copper heat exchanger. While the prototype successfully demonstrated the ability to to charge sand to high temperatures and provide usable hot water, significant overnight thermal losses were observed, this loss can be attributed two things the experiment was outdoor and I had no control over the ambient temperature it also highlighted the need for an enhanced insulation in future iterations.</p>
      <h3>Objectives</h3>
      <ul>
        <li>Directly Coupled Design: creating a PV - resistive heating system that operates without MPPT </li>
        <li>Analyzing the electrical - thermal interaction between the PV output and the resistive load</li>
        <li>Performance evaluation: Validating the system through both software simulations and physical experimentation.</li>
        <li>Economic assessment: Evaluate the cost-effectiveness of the PFSG compared to conventional water heaters. </li>
      </ul>

      <h3>Key Findings</h3>
      <ul>
        <li>The prototype successfully charged the sand bed to temperatures exceeding 300 degrees Celsius during peak sun hours</li>
        <li>The system delivered usable hot water with outlet temperatures reaching up to 65 degrees Celsius</li>
        <li>Thermal extraction efficiencies by a 2 L of water  were measured in the range of 23% to 50%, indicating moderate heat transfer performance.</li>
        <li>Simulations showed that outlet water temperature is strongly influenced by water flow rates and the pitch of the helical heat exchanger. A 30mm pitch and 0.5 L/min flow rate provided an optimal balance for domestic use. </li>
        <li>Significant heat loss occured overnight, with sand temperatures dropping from approximately 200 degrees Celsius in the evening (5:30pm) to 50 degrees Celsius by the following morning (7am)</li>
        <li>With an estimated fabrication cost of GHS 300, the system could save a typical household approximately GHS 360 per month in energy costs compared to a standard electric geyser</li>
      </ul>
      `
  },
  news_3: {
    title: 'New publication: Single Stage DC-AC Boost Inverter-Based Perturbation Technique for Online Impedance Spectroscopy Measurements of Photovoltaic Panels',
    date: 'March 03, 2026',
    tag: 'Publication',
    tagClass: 'news-card__tag news-card__tag--publication',
    image: 'images/solar_setup.jpg',
    excerpt: '',
    fullContent: `
      <h3>Abstract</h3>
      <p>Traditional online impedance spectroscopy measurements of solar PV cells are achieved through two-stage DC-DC-AC power conversion topologies where the input DC-DC boost converter stage is utilized for power regulation and injecting small signal AC perturbations for Electrochemical Impedance Spectroscopy (EIS) measurements. It is easily achieved because the DC-DC boost converter can be simply controlled by small signal linear models. </p>
      
      <p>However, due to increased power losses, high weight and cost in the two-stage topologies, single stage boost DC-AC power conversion has become an increased subject of research area. Although the single stage topologies have gained popularity for their compactness, high voltage gain and efficiency, it has not been extended to include online EIS diagnostic functionality for the PV device as done in the two stage DC-DC-AC topology. </p>
      <br>
      <p>The research was conducted by Dr. Awingot Richard Akparibo. The full paper is available through IEEE Xplore</p>
      <h3>Key Findings</h3>
      <p>The publication presents:</p>
      <ul>
        <li>A new online impedance spectroscopy (EIS) measurement approach for PV panels that does not rely on the conventional two-stage DC–DC + DC–AC topology.</li>
        <li>Highlights Simplified Split-Source Boost Inverter (SSSBI) advantages vs other single-stage boost inverters</li>
        <li>Diagnostic insight: Characteristic frequency (fc) shifts with PV condition</li>
        <li>Parameter extraction trends are consistent; single-sine is more accurate than multisine (BIS) in their setup</li>
        <li>Simulation and hardware show the inverter can stay “EIS-friendly” (continuous input), but perturbations add ripple/distortion<</li>
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
