document.addEventListener('DOMContentLoaded', () => {
  /* ---------- DATA & RENDERING ---------- */  const appLinks = [
    { name: 'Part 0.General',           url: '#', color: 'blue',   category: 'General'  },
    { name: 'Part 1.Seagoing Ship',     url: '#', color: 'blue',   category: 'General'  },
    { name: 'Part 2.Inland Waterway',   url: '#', color: 'blue',   category: 'General'  },
    { name: 'Part 3.Special Ships',     url: '#', color: 'blue',   category: 'General'  },
    { name: 'Part 4.Special Equipment', url: '#', color: 'green',  category: 'Seasonal'},
    { name: 'Part 5.Offshore Tech',     url: '#', color: 'green',  category: 'Seasonal'},
    { name: 'Part 6.Statutory',         url: '#', color: 'green',  category: 'Seasonal'},
    { name: 'Part 7.Class Notation',    url: '#', color: 'green',  category: 'Seasonal'},
    { name: 'Part 8.Domestic Ships',    url: '#', color: 'orange', category: 'Industry'},
    { name: 'Part 9.Naval Ship Tech',   url: '#', color: 'orange', category: 'Industry'},
    { name: 'Part 10.Industry',          url: '#', color: 'orange', category: 'Industry'}
  ];
  const appContainer = document.getElementById('app-container');
  const grouped = appLinks.reduce((acc, link) => {
    (acc[link.category] = acc[link.category] || []).push(link);
    return acc;
  }, {});
  if (false) {
Object.keys(grouped).forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `<h2 class="category-title">${cat}</h2>`;
    const grid = document.createElement('div');
    grid.className = 'grid';
    grouped[cat].forEach(link => {
      const initials = link.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
      grid.insertAdjacentHTML('beforeend', `
        <a href="${link.url}" target="_blank" class="icon-item">
          <div class="icon-bg bg-${link.color}">${initials}</div>
          <div class="icon-name">${link.name}</div>
        </a>
      `);
    });
    card.appendChild(grid);
    }

    //aappLinks
    // ppContainer.appendChild(card);*/
 }

  /* ---------- ELEMENT REFERENCES ---------- */
  const themeToggle            = document.getElementById('themeToggle');
  const hamburgerBtn           = document.getElementById('hamburger-btn');
  const mobileMenu             = document.getElementById('mobile-menu');
  const navOverlay             = document.getElementById('nav-overlay');
  const mobileResourcesBtn     = document.getElementById('mobile-resources-btn');
  const mobileResourcesContent = document.getElementById('mobile-resources-content');
  const barcodeBtn             = document.querySelector('.barcode-button');
  const barcodeModal           = document.getElementById('barcode-modal');
  const closeModalBtn          = document.getElementById('close-modal-btn');

  let scrollPosition = 0;

  /* ---------- THEME TOGGLE ---------- */
  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
  });

  /* ---------- MOBILE MENU LOGIC ---------- */
  function openMobileMenu() {
    scrollPosition = window.pageYOffset;
    document.body.style.top = `-${scrollPosition}px`;
    document.body.classList.add('no-scroll');
    hamburgerBtn.classList.add('active');
    mobileMenu.classList.add('active');
    navOverlay.classList.add('active');
  }

  function closeMobileMenu() {
    document.body.classList.remove('no-scroll');
    document.body.style.removeProperty('top');
    window.scrollTo(0, scrollPosition);
    hamburgerBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    mobileResourcesContent.style.display = 'none';
  }

  // Toggle menu open/close
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('active');
    isOpen ? closeMobileMenu() : openMobileMenu();
  });

  // Klik overlay untuk menutup menu
  navOverlay.addEventListener('click', closeMobileMenu);

  // Toggle submenu RESOURCES
  mobileResourcesBtn.addEventListener('click', e => {
    e.preventDefault();
    const isSubOpen = mobileResourcesContent.style.display === 'flex';
    mobileResourcesContent.style.display = isSubOpen ? 'none' : 'flex';
  });

  /* ---------- BARCODE MODAL ---------- */
  const closeModal = () => barcodeModal.classList.remove('active');
  barcodeBtn.addEventListener('click', () => barcodeModal.classList.add('active'));
  closeModalBtn.addEventListener('click', closeModal);
  barcodeModal.addEventListener('click', e => {
    if (e.target === barcodeModal) closeModal();
  });
});
