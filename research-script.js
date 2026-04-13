/* ============================================================
   Research Projects Page – research-script.js
   ============================================================ */

const PROJECTS = [
  {
    id: 'p1',
    categories: ['power-electronics'],
    image: 'images/interleaved.jpg',
    title: 'Design of an Interleaved Boost Converter (IBC) with current sharing control mechanism for Solar PV applications',
    desc: 'Designing an Interleaved Boost Converter (IBC) for Solar PV applications requires careful consideration of the PV arrays variable characteristics and the need for efficient, balanced operation.',
    detail: 'Designing an Interleaved Boost Converter (IBC) for Solar PV applications requires careful consideration of the PV arrays variable characteristics and the need for efficient, balanced operation. An IBC splits the input current among multiple parallel-connected boost converter phases, which reduces current ripple, minimizes the size of passive components, and improves thermal performance. A current sharing control mechanism is vital for ensuring equal load distribution among the phases, which prevents stress on individual components and maximizes overall efficiency. ',
    team: 'Dr. Awingot Richard Akparibo, Bridget Nana Berniah Kwofie',
  },
  {
    id: 'p2',
    categories: ['power-electronics'],
    image: 'images/pv_character.jpeg',
    title: 'Online Characterization of Solar PV panels using DC-DC power converters',
    desc: "Online characterization of solar PV panels using DC-DC power converters involves using the converter's control system to dynamically alter its duty cycle and inject slight variations in voltage or current, which allows for the real-time measurement of the PV panel's current-voltage characteristics without disconnecting the system.",
    detail: "Online characterization of solar PV panels using DC-DC power converters involves using the converter's control system to dynamically alter its duty cycle and inject slight variations in voltage or current, which allows for the real-time measurement of the PV panel's current-voltage (I-V) characteristics without disconnecting the system. This method offers a low-cost, simple, scalable, and non-intrusive approach for performance monitoring and comparison with manufacturer specifications real-time. ",
    team: 'Dr. Awingot Richard Akparibo, Kaare TieTaah',
  },
  {
    id: 'p3',
    categories: ['power-electronics', 'renewable-energy'],
    image: 'images/solar_geyser.jpeg',
    title: 'PV-powered fine sand solar geyser for domestic hot water',
    desc: 'A PV-powered fine sand solar geyser is an innovative, cost-effective domestic water heating system',
    detail: "A PV-powered fine sand solar geyser is an innovative, cost-effective domestic water heating system that uses photovoltaic (PV) solar panels to power a heating element submerged in fine sand. The sand stores the thermal energy, which is then transferred to water via a heat exchanger. This system addresses the intermittency of solar energy and offers significant economic benefits with low operating costs and a long lifespan, making it a promising solution for sustainable hot water.  ",
    team: 'Dr. Awingot Richard Akparibo, Obadiah Safi',
  },
  {
    id: 'p4',
    categories: ['electrical-machines','condition-monitoring'],
    image: 'images/motor.png',
    title: 'Condition Monitoring of Three Phase Induction Motors Using Impedance Spectroscopy Measurement Data',
    desc: 'Developing a condition monitoring approach for three-phase induction motors using impedance spectroscopy measurement data to assess winding health.',
    detail: 'Understanding the impedance of a three-phase motor can be of importance for maintaining performance and efficiency. Measuring the impedance of the windings can help detect issues such as short circuits, insulation problems, or damage to the windings.',
    team: 'Dr. Awingot Richard Akparibo',
  },
  {
    id: 'p5',
    categories: ['electrical-machines', 'condition-monitoring'],
    image: 'images/induction.webp',
    title: 'Condition Monitoring of an Induction Motor-Drive System Using Impedance Spectroscopy Measurement Data ',
    desc: 'Developing a condition monitoring method for an induction motor–drive system using impedance spectroscopy to analyze high-frequency behavior of inverter-driven motors.',
    detail: 'Power semiconductor modules and DC-link capacitors are the most failure-prone components in industrial drives. This project uses accelerated aging tests, physics-of-failure models, and machine-learning prognostics to predict remaining useful life. Results feed into design guidelines for improved converter reliability.',
    team: 'Dr. Awingot Richard Akparibo',
  },
  {
    id: 'p6',
    categories: ['power-electronics'],
    image: 'images/control.jpeg',
    title: 'Output Impedance measurements of DC-DC power converters for Control-Loop  Stability Studies',
    desc: 'Analyzing the output impedance characteristics of DC-DC converters to evaluate control-loop stability and dynamic performance.',
    detail: "The output impedance of a voltage regulator or DC/DC converter contains information about the control-loop stability as well as information about the decoupling network. ",
    team: 'Dr. Awingot Richard Akparibo',
  },
  {
    id: 'p7',
    categories: ['power-electronics'],
    image: 'images/capacitor.jpeg',
    title: 'DC-Link Capacitor ESR Measurement in Power Converters ',
    desc: 'Developed a method to measure the Equivalent Series Resistance (ESR) of DC-link capacitors in power converters across varying frequencies.',
    detail: 'DC-Link capacitors play an important role in power electronic applications like inverters. The ESR of such a DC-Link capacitor is an important parameter that is difficult to characterize. It depends strongly on the internal construction of the device and can show significant dependency on the frequency. Excessive ESR can increase heat dissipation and power loss in a DC-Link capacitor and can degrade the filtering capability causing more voltage ripple. ',
    team: 'Dr. Awingot Richard Akparibo',
  },
 
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('projects-grid');
  const modal = document.getElementById('project-modal');
  const backdrop = document.getElementById('project-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-project');
  const detailEl = document.getElementById('project-detail');

  function normalizeCategories(categories) {
    if (!categories) return [];
    return Array.isArray(categories) ? categories : [categories];
  }

  function formatCategoryLabel(categories) {
    return normalizeCategories(categories).map(cat => cat.replace('-', ' ')).join(', ');
  }

  function renderProjects(filter) {
    const filtered = filter === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => normalizeCategories(p.categories).includes(filter));
    grid.innerHTML = filtered.map(p => `
      <div class="project-card-item" data-id="${p.id}">
        <div class="project-card-item__image"><img src="${p.image}" alt="${p.title}"></div>
        <div class="project-card-item__body">
          <span class="project-card-item__category">${formatCategoryLabel(p.categories)}</span>
          <h3 class="project-card-item__title">${p.title}</h3>
          <p class="project-card-item__desc">${p.desc}</p>
        </div>
      </div>
    `).join('');

    // Card click handlers
    grid.querySelectorAll('.project-card-item').forEach(card => {
      card.addEventListener('click', () => {
        const project = PROJECTS.find(p => p.id === card.dataset.id);
        if (project) openProjectModal(project);
      });
    });
  }

  function openProjectModal(p) {
    detailEl.innerHTML = `
      <img class="detail-image" src="${p.image}" alt="${p.title}">
      <span class="detail-category">${formatCategoryLabel(p.categories)}</span>
      <h2 class="detail-title">${p.title}</h2>
      <p class="detail-desc">${p.detail}</p>
      <div class="detail-meta">
        <p><strong>Team:</strong> ${p.team}</p>
      </div>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active', 'active'));
      btn.classList.add('filter-btn--active', 'active');
      renderProjects(btn.dataset.filter);
    });
  });

  // Initial render
  renderProjects('all');
});
