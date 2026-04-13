/* ============================================================
   Publications Page – publications-script.js
   ============================================================ */

const PUBLICATIONS = [
  {
    id: 1,
    year: 2026,
    type: 'journal',
    typeLabel: 'A1 Journal article (refereed)',
    title: 'Single Stage DC-AC Boost Inverter-Based Perturbation Technique for Online Impedance Spectroscopy Measurements of Photovoltaic Panels',
    authors: 'A. Akparibo and P. Barendse',
    journal: 'IEEE Open Journal of Power Electronics, vol. 7, pp. 928-944, 2026',
    doi: '10.1109/OJPEL.2026.3670037',
    keywords: ['impedance spectroscopy', 'PV panels', 'boost inverter', 'power electronics']
  },
  {
    id: 2,
    year: 2024,
    type: 'conference',
    typeLabel: 'A4 Article in conference proceedings',
    title: 'A Hybrid Perturbation Technique for Wideband Online Impedance Spectroscopy Measurements of PV Panels Using a DC-DC Boost Converter',
    authors: 'A. Akparibo and P. Barendse',
    journal: '2024 IEEE Energy Conversion Congress and Exposition (ECCE), Phoenix, Arizona, USA',
    doi: '10.1109/ECCE53617.2023.10361950',
    keywords: ['impedance spectroscopy', 'PV panels', 'DC-DC boost', 'wideband']
  },
  {
    id: 3,
    year: 2023,
    type: 'conference',
    typeLabel: 'A4 Article in conference proceedings',
    title: 'Broadband Electrochemical Impedance Spectroscopy of Photovoltaic Cells Based on Converter Switching Ripple Control',
    authors: 'A. Akparibo and P. Barendse',
    journal: '2023 IEEE Energy Conversion Congress and Exposition (ECCE), Nashville, TN, USA, pp. 19-26',
    doi: '10.1109/ECCE53617.2023.10361950',
    keywords: ['impedance spectroscopy', 'photovoltaic cells', 'converter switching', 'ripple control']
  },
  {
    id: 4,
    year: 2023,
    type: 'conference',
    typeLabel: 'A4 Article in conference proceedings',
    title: 'Conservation Voltage Reduction in Low Voltage Distribution Networks',
    authors: 'N. A. Badger, B. Tetteh and R. A. Akparibo',
    journal: '2023 IEEE PES/IAS PowerAfrica, Marrakech, Morocco, pp. 1-5',
    doi: '10.1109/PowerAfrica57932.2023.10363234',
    keywords: ['conservation voltage reduction', 'low voltage', 'distribution networks', 'power quality']
  },
  {
    id: 5,
    year: 2022,
    type: 'conference',
    typeLabel: 'A4 Article in conference proceedings',
    title: 'A Multifunctional Automatic Dog-Feeder with Bluetooth and Wi-Fi Connectivity',
    authors: 'M. A. Boateng and A. R. Akparibo',
    journal: '2022 IEEE 2nd International Conference on Mobile Networks and Wireless Communications (ICMNWC), Tumkur, Karnataka, India, pp. 1-6',
    doi: '10.1109/ICMNWC56175.2022.10031807',
    keywords: ['automatic dog feeder', 'Bluetooth', 'Wi-Fi', 'IoT']
  },
  {
    id: 6,
    year: 2019,
    type: 'conference',
    typeLabel: 'A4 Article in conference proceedings',
    title: 'Power System Protection Evolutions from Traditional to Smart Grid Protection',
    authors: 'Tetteh and K. Awodele',
    journal: '2019 IEEE 7th International Conference on Smart Energy Grid Engineering (SEGE), Oshawa, ON, Canada, pp. 12-16',
    doi: '10.1109/SEGE.2019.8859874',
    keywords: ['smart grid protection', 'power system protection', 'SEGE', 'grid evolution']
  },
  {
    id: 7,
    year: 2021,
    type: 'conference',
    typeLabel: 'A4 Article in conference proceedings',
    title: 'Fault Location on Power System Transmission Lines using Synchronized and Unsychronized Data',
    authors: 'Ndamase, K. Awodele and B. Tetteh',
    journal: '2021 IEEE PES/IAS PowerAfrica, Nairobi, Kenya, pp. 1-5',
    doi: '10.1109/PowerAfrica52236.2021.9543219',
    keywords: ['fault location', 'transmission lines', 'synchronized data', 'unsynchronized data']
  },
  {
    id: 8,
    year: 2020,
    type: 'conference',
    typeLabel: 'A4 Article in conference proceedings',
    title: 'Inter-Turn Fault Detection Using Wavelet Analysis and Adaptive Neuro-Fuzzy Inference System',
    authors: 'A. Frimpong, T. Bright, B. Kojo and T. A. Michael',
    journal: '2020 IEEE PES/IAS PowerAfrica, Nairobi, Kenya, pp. 1-5',
    doi: '10.1109/PowerAfrica49420.2020.9219856',
    keywords: ['fault detection', 'wavelet analysis', 'adaptive neuro-fuzzy', 'power systems']
  },
  {
    id: 9,
    year: 2023,
    type: 'conference',
    typeLabel: 'A4 Article in conference proceedings',
    title: 'Experimental Validation of a Flywheel Energy Storage System for Smart Grid Research Lab',
    authors: 'K. Okai-Mensah and B. Tetteh',
    journal: '2023 IEEE 11th International Conference on Smart Energy Grid Engineering (SEGE), Oshawa, ON, Canada, pp. 81-87',
    doi: '10.1109/SEGE59172.2023.10274536',
    keywords: ['flywheel energy storage', 'smart grid', 'experimental validation', 'research lab']
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const listEl = document.getElementById('publications-list');
  const searchInput = document.getElementById('pub-search');
  const yearFilter = document.getElementById('pub-year-filter');
  const typeFilter = document.getElementById('pub-type-filter');
  const statTotal = document.getElementById('stat-total');
  const statJournal = document.getElementById('stat-journal');
  const statConference = document.getElementById('stat-conference');
  const statReview = document.getElementById('stat-review');

  // Populate year filter
  const years = [...new Set(PUBLICATIONS.map(p => p.year))].sort((a, b) => b - a);
  years.forEach(y => {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    yearFilter.appendChild(opt);
  });

  // Stats
  function updateStats(pubs) {
    statTotal.textContent = pubs.length;
    statJournal.textContent = pubs.filter(p => p.type === 'journal').length;
    statConference.textContent = pubs.filter(p => p.type === 'conference').length;
    statReview.textContent = pubs.filter(p => p.type === 'review').length;
  }

  function getTypeColor(type) {
    switch (type) {
      case 'journal': return '';
      case 'conference': return 'pub-item__type--conference';
      case 'review': return 'pub-item__type--review';
      default: return '';
    }
  }

  function render() {
    const query = searchInput.value.toLowerCase().trim();
    const yearVal = yearFilter.value;
    const typeVal = typeFilter.value;

    let filtered = PUBLICATIONS;

    if (yearVal !== 'all') filtered = filtered.filter(p => p.year === parseInt(yearVal));
    if (typeVal !== 'all') filtered = filtered.filter(p => p.type === typeVal);
    if (query) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.authors.toLowerCase().includes(query) ||
        p.journal.toLowerCase().includes(query) ||
        p.keywords.some(k => k.toLowerCase().includes(query))
      );
    }

    updateStats(filtered);

    if (filtered.length === 0) {
      listEl.innerHTML = '<div class="pub-empty"><p>No publications match your filters.</p></div>';
      return;
    }

    // Group by year
    const grouped = {};
    filtered.forEach(p => {
      if (!grouped[p.year]) grouped[p.year] = [];
      grouped[p.year].push(p);
    });

    const sortedYears = Object.keys(grouped).sort((a, b) => b - a);

    listEl.innerHTML = sortedYears.map(year => `
      <div class="pub-year-group">
        <h3 class="pub-year-heading">${year}</h3>
        ${grouped[year].map(p => `
          <div class="pub-item">
            <div class="pub-item__left">
              <h4 class="pub-item__title"><a href="#">${p.title}</a></h4>
              <p class="pub-item__authors">${p.authors}</p>
              <p class="pub-item__journal">${p.journal}</p>
              <div class="pub-item__keywords">
                ${p.keywords.map(k => `<span class="pub-keyword">${k}</span>`).join('')}
              </div>
            </div>
            <div class="pub-item__right">
              <a href="https://doi.org/${p.doi}" target="_blank" rel="noopener" class="pub-doi" title="View DOI">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                DOI
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  searchInput.addEventListener('input', render);
  yearFilter.addEventListener('change', render);
  typeFilter.addEventListener('change', render);

  // Initial render
  render();
});
