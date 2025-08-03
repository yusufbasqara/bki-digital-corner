document.addEventListener('DOMContentLoaded', () => {
  // elemen
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu   = document.getElementById('mobile-menu');
  const expandBtns   = document.querySelectorAll('.expand-btn');

  // toggle mobile menu dropdown
  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
  });

  // accordion untuk setiap expand-btn
  expandBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      const parent  = e.currentTarget.closest('.mobile-nav-item');
      const submenu = parent.querySelector('.submenu');
      // toggle
      const isOpen = submenu.style.display === 'block';
      submenu.style.display = isOpen ? 'none' : 'block';
      e.currentTarget.querySelector('span').textContent = isOpen ? '+' : '−';
    });
  });

  // tema toggle & modal barcode (sama seperti sebelumnya)…
  const themeToggle  = document.getElementById('themeToggle');
  const barcodeBtn   = document.querySelector('.barcode-button');
  const barcodeModal = document.getElementById('barcode-modal');
  const closeModalBtn= document.getElementById('close-modal-btn');

  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
  });

  barcodeBtn.addEventListener('click', () => {
    barcodeModal.classList.add('active');
  });
  closeModalBtn.addEventListener('click', () => {
    barcodeModal.classList.remove('active');
  });
  barcodeModal.addEventListener('click', e => {
    if (e.target === barcodeModal) barcodeModal.classList.remove('active');
  });

  // rendering app links (sama seperti awal)
  const appLinks = [
    { name: 'General',          url: '#', color: 'blue',   category: 'General'  },
    { name: 'Seagoing Ship',    url: '#', color: 'blue',   category: 'General'  },
    { name: 'Inland Waterway',  url: '#', color: 'blue',   category: 'General'  },
    { name: 'Special Ships',    url: '#', color: 'blue',   category: 'General'  },
    { name: 'Special Equipment',url: '#', color: 'green',  category: 'Seasonal'},
    { name: 'Offshore Tech',    url: '#', color: 'green',  category: 'Seasonal'},
    { name: 'Statutory',        url: '#', color: 'green',  category: 'Seasonal'},
    { name: 'Class Notation',   url: '#', color: 'green',  category: 'Seasonal'},
    { name: 'Domestic Ships',   url: '#', color: 'orange', category: 'Industry'},
    { name: 'Naval Ship Tech',  url: '#', color: 'orange', category: 'Industry'},
    { name: 'Industry',         url: '#', color: 'orange', category: 'Industry'}
  ];
  const appContainer = document.getElementById('app-container');
  const grouped = appLinks.reduce((acc, l) => {
    (acc[l.category] = acc[l.category]||[]).push(l);
    return acc;
  }, {});
  Object.keys(grouped).forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `<h2 class="category-title">${cat}</h2>`;
    const grid = document.createElement('div');
    grid.className = 'grid';
    grouped[cat].forEach(link => {
      const initials = link.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
      grid.insertAdjacentHTML('beforeend', `
        <a href="${link.url}" target="_blank" class="icon-item">
          <div class="icon-bg bg-${link.color}">${initials}</div>
          <div class="icon-name">${link.name}</div>
        </a>
      `);
    });
    card.appendChild(grid);
    appContainer.appendChild(card);
  });
});
