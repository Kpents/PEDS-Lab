/* ============================================================
   People / Leadership Page – people-script.js
   ============================================================ */

const PEOPLE = {
  richard: {
    name: 'Awingot Richard Akparibo (PhD)',
    role: 'Lead Researcher, Electrical Engineering',
    image: 'images/Awingot-Akparibo.webp',
    email: 'rakparibo@ashesi.edu.gh',
    bio: 'Awingot Akparibo is a Lecturer in the Engineering Department of Ashesi University. For the past eight years, he has taught several courses in the Department, including Electrical Machines, Power Electronics, Power Engineering, and Power Systems Analysis. He previously taught Electric Motor Drives at the Regional Maritime University, Nungua, Accra, Ghana'
  },
  bright: {
    name: 'Bright Tetteh',
    role: 'Lecturer and Researcher',
    image: 'images/bright-tetteh.jpg',
    email: 'btetteh@ashesi.edu.gh',
    bio: "Bright's journey as an Electrical Engineer began at the Kwame Nkrumah University of Science and Technology. He obtained his Master of Science (MSc.) degree at the University of Cape Town, where he is currently pursuing his PhD. He is also a lecturer at Ashesi University."

  },
  
  bridget: {
    name: 'Bridget Nana Berniah Kwofie',
    role: 'Research Assistant and Teaching Assistant',
    image: 'images/Bridget-Kwofie.jpeg',
    email: 'bridget.kwofie@ashesi.edu.gh',
    bio: 'Bridget Nana Berniah Kwofie is a Thermal Analyst specializing in cooling system design for high-power-density electrical machines and integrated motor-drives. Her research focuses on direct liquid cooling methods and calorimetric loss measurement techniques.'
  },
  allen: {
    name: 'Allen Kpentey',
    role: 'Research Assistant and Teaching Assistant',
    image: 'images/Allen-Kpentey.jpg',
    email: 'allen.kpentey@ashesi.edu.gh',
    bio: 'Allen Kpentey is a Teaching Assistant and Research Assistant at Ashesi University. He holds a Bachelor’s degree in Electrical Engineering from Ashesi University, with a strong focus on power systems and electric mobility.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('person-modal');
  const backdrop = document.getElementById('person-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-person');
  const bioEl = document.getElementById('person-bio');

  function openPersonModal(key) {
    const person = PEOPLE[key];
    if (!person) return;

    bioEl.innerHTML = `
      <div class="bio-header">
        <img class="bio-avatar" src="${person.image}" alt="${person.name}">
        <div>
          <h2 class="bio-name">${person.name}</h2>
          <p class="bio-role">${person.role}</p>
        </div>
      </div>
      <p class="bio-text">${person.bio}</p>
      <a href="mailto:${person.email}" class="bio-email">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00854a" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
        ${person.email}
      </a>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Card click handlers
  document.querySelectorAll('.leadership-card').forEach(card => {
    const handler = () => openPersonModal(card.dataset.person);
    card.addEventListener('click', handler);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } });
  });

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});
