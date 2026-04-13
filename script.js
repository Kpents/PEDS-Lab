/* ============================================================
   LUT University Replica – script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Navigation scroll effect ---------- */
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  /* ---------- Mobile menu ---------- */
  const mobileMenu = document.getElementById('mobile-menu');
  const openMenuBtn = document.getElementById('open-menu');
  const closeMenuBtn = document.getElementById('close-menu');

  openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });

  // Mobile menu submenu toggles
  document.querySelectorAll('.mobile-menu__toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const submenu = toggle.nextElementSibling;
      const isOpen = submenu.classList.contains('open');
      
      // Close all other submenus first
      document.querySelectorAll('.mobile-menu__submenu').forEach(sub => {
        sub.classList.remove('open');
      });
      document.querySelectorAll('.mobile-menu__toggle').forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Toggle the clicked one
      if (!isOpen) {
        submenu.classList.add('open');
        toggle.classList.add('active');
      }
    });
  });

  /* ---------- Navigation active state ---------- */
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'index.html';

  // Find the active nav button by checking the href of links inside buttons
  document.querySelectorAll('.nav__item-btn a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.closest('.nav__item-btn').classList.add('nav__item-btn--active');
    }
  });

  /* ---------- Language toggle ---------- */
  let currentLang = 'FR'; // Start with FR as shown in HTML
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'FR' ? 'EN' : 'FR';
      document.querySelectorAll('.lang-toggle').forEach(b => {
        b.textContent = currentLang;
      });
    });
  });

  /* ---------- Search modal ---------- */
  const searchBtn = document.querySelector('.nav__search-btn');
  const searchModal = document.getElementById('search-modal');
  const searchModalBackdrop = document.getElementById('search-modal-backdrop');
  const searchModalClose = document.getElementById('modal-close-search');
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('.search-input');

  if (searchBtn && searchModal) {
    // Open search modal
    searchBtn.addEventListener('click', () => {
      searchModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      // Focus the search input
      setTimeout(() => searchInput.focus(), 100);
    });

    // Close search modal functions
    const closeSearchModal = () => {
      searchModal.classList.remove('open');
      document.body.style.overflow = '';
      searchInput.value = ''; // Clear search input
    };

    // Close on backdrop click
    searchModalBackdrop.addEventListener('click', closeSearchModal);

    // Close on close button click
    searchModalClose.addEventListener('click', closeSearchModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchModal.classList.contains('open')) {
        closeSearchModal();
      }
    });

    // Handle search form submission
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        // For now, just log the search query
        // In a real implementation, this would perform the search
        console.log('Search query:', query);
        // You could redirect to a search results page or filter content
        // For example: window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        alert(`Searching for: "${query}"\n\n(This is a placeholder. In a real implementation, this would search the site content.)`);
        closeSearchModal();
      }
    });
  }

  /* ---------- Main content accordions ---------- */
  document.querySelectorAll('.accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.parentElement;
      const panel = trigger.nextElementSibling;
      const isActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.accordion__item').forEach(i => {
        i.classList.remove('active');
        const p = i.querySelector('.accordion__panel');
        if (p) p.style.maxHeight = null;
      });

      // Open clicked if it was closed
      if (!isActive) {
        item.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Staff filter ---------- */
  const staffFilter = document.getElementById('staff-filter');
  if (staffFilter) {
    staffFilter.addEventListener('change', (e) => {
      const value = e.target.value;
      document.querySelectorAll('.staff-card').forEach(card => {
        if (value === 'all' || card.dataset.area === value) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

});
