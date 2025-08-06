// ========================================
// POJOK BKI 4.0 - COMPLETE JAVASCRIPT
// ========================================

// Anti-cache timestamp
const CACHE_BUSTER = new Date().getTime();
console.log('Anti-cache timestamp initialized:', CACHE_BUSTER);

// Function to add cache buster to URLs
function addCacheBuster(url) {
  if (url === '#') return url;
  if (url.includes('http')) return url; // Skip external URLs
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}v=${CACHE_BUSTER}`;
}

// ========================================
// DATA CONFIGURATION
// ========================================

const partData = {
  'Part 0. General': [
    {
      title: 'Vol B – Guidance for Class Notations',
      edition: 'edisi Des 2025',
      link: 'assets/docs/general/guidance.pdf'
    }
  ],
  'Part 1. Seagoing Ship': [
    {
      title: 'Vol I – Rules for Classification & Surveys (ID)',
      edition: 'edisi Sep 2022',
      link: 'assets/docs/seagoing-ship/classification.pdf'
    },
    {
      title: 'Vol II – Rules for Hull (ID)',
      edition: 'edisi Nov 2022',
      link: 'assets/docs/seagoing-ship/hull.pdf'
    },
    {
      title: 'Vol II – Rules for Hull',
      edition: 'edisi Mei 2025',
      link: 'assets/docs/seagoing-ship/hull2025.pdf'
    },
    {
      title: 'Vol III – Rules for Machinery Installations (ID)',
      edition: 'edisi Sep 2022',
      link: 'assets/docs/seagoing-ship/machinery.pdf'
    },
    {
      title: 'Vol III – Rules for Machinery Installations',
      edition: 'edisi Mei 2025',
      link: 'assets/docs/seagoing-ship/machinery2025.pdf'
    },
    {
      title: 'Vol IV – Rules for Electrical Installations',
      edition: 'edisi Mei 2025',
      link: 'assets/docs/seagoing-ship/electrical.pdf'
    },
    {
      title: 'Vol V – Rules for Materials',
      edition: 'edisi Nov 2025',
      link: 'assets/docs/seagoing-ship/materials.pdf'
    },
    {
      title: 'Vol V – Corrigenda',
      edition: 'edisi Apr 2025',
      link: 'assets/docs/seagoing-ship/corrigenda.pdf'
    },
    {
      title: 'Vol VI – Rules for Welding (ID)',
      edition: 'edisi Sep 2022',
      link: 'assets/docs/seagoing-ship/welding.pdf'
    },
    {
      title: 'Vol VI – Rules for Welding',
      edition: 'edisi Des 2024',
      link: 'assets/docs/seagoing-ship/welding2024.pdf'
    },
    {
      title: 'Vol VII – Rules for Automation',
      edition: 'memuat pedoman otomasi (edisi 2013/2014)',
      link: 'assets/docs/seagoing-ship/automation.pdf'
    },
    {
      title: 'Vol VIII – Rules for Refrigerating Installation',
      edition: 'edisi Feb 2018',
      link: 'assets/docs/seagoing-ship/refrigerating.pdf'
    },
    {
      title: 'Vol IX – Rules for Liquefied Gases',
      edition: 'beberapa dokumen, termasuk edisi 2019 dan 2024, serta amandemen',
      link: 'assets/docs/seagoing-ship/liquefied.pdf'
    },
    {
      title: 'Vol X – Dangerous Chemicals in Bulk',
      edition: 'panduan muatan kimia berbahaya',
      link: 'assets/docs/seagoing-ship/chemicals.pdf'
    },
    {
      title: 'Vol XI – Approval of Manufacturers & Service Suppliers',
      edition: 'pedoman persetujuan',
      link: 'assets/docs/seagoing-ship/approval.pdf'
    },
    {
      title: 'Vol XII – Fishing Vessels',
      edition: 'peraturan kapal penangkap ikan',
      link: 'assets/docs/seagoing-ship/fishing.pdf'
    }
  ],
  'Part 2. Inland Waterway': [
    {
      title: 'Vol I – Rules for Inland Waterway Classification & Surveys',
      edition: 'edisi Jul 2015',
      link: 'assets/docs/inland-waterway/classification.pdf'
    },
    {
      title: 'Vol II – Rules for Inland Waterway Vessels – Hull Construction',
      edition: 'edisi Jul 2015',
      link: 'assets/docs/inland-waterway/hull.pdf'
    }
  ],
  'Part 3. Special Ships': [
    {
      title: 'Vol I – Rules for Oil Recovery Vessels',
      edition: 'edisi Mar 2005',
      link: 'assets/docs/special-ships/recovery.pdf'
    },
    {
      title: 'Vol II – Rules for Floating Dock',
      edition: 'edisi Apr 2019',
      link: 'assets/docs/special-ships/dock.pdf'
    },
    {
      title: 'Vol III – Rules for High-Speed Craft',
      edition: 'edisi Agu 2022; plus Amendment – Apr 2023',
      link: 'assets/docs/special-ships/highspeed.pdf'
    },
    {
      title: 'Vol V – Rules for Fiberglass-Reinforced Plastics Ships',
      edition: 'edisi Mar 2021',
      link: 'assets/docs/special-ships/fiberglass.pdf'
    },
    {
      title: 'Vol VI – Peraturan Kapal Kayu',
      edition: 'edisi Apr 2023',
      link: 'assets/docs/special-ships/kayu.pdf'
    },
    {
      title: 'Vol VI – Rules for Mobile Offshore Units',
      edition: 'edisi Nov 2025',
      link: 'assets/docs/special-ships/mobile.pdf'
    }
  ],
  'Part 4. Special Equipment': [
    {
      title: 'Vol I – Rules for Stowage & Lashing of Containers',
      edition: 'edisi Nov 2025',
      link: 'assets/docs/special-equipment/stowage.pdf'
    },
    {
      title: 'Vol II – Rules for Dynamic Positioning Systems',
      edition: 'edisi Mar 2011',
      link: 'assets/docs/special-equipment/positioning.pdf'
    },
    {
      title: 'Vol III – Guidance for Safety Equipment and Systems',
      edition: 'edisi 2011-2025',
      link: 'assets/docs/special-equipment/safety.pdf'
    },
    {
      title: 'Vol IV – Guidance for Special Installations',
      edition: 'edisi 2011-2025',
      link: 'assets/docs/special-equipment/installations.pdf'
    }
  ],
  'Part 5. Offshore Tech': [
    {
      title: 'Vol I – Rules for Classification & Surveys',
      edition: 'edisi Des 2024',
      link: 'assets/docs/offshore-tech/classification.pdf'
    },
    {
      title: 'Vol II – Rules for Structures',
      edition: 'edisi Mar 2011',
      link: 'assets/docs/offshore-tech/structures.pdf'
    },
    {
      title: 'Vol IV – Rules for Machinery Installations',
      edition: 'edisi Mar 2011',
      link: 'assets/docs/offshore-tech/machinery.pdf'
    },
    {
      title: 'Vol V – Rules for Electrical Installations',
      edition: 'edisi Mar 2011',
      link: 'assets/docs/offshore-tech/electrical.pdf'
    },
    {
      title: 'Vol VI – Rules for Mobile Offshore Units',
      edition: 'edisi Nov 2025',
      link: 'assets/docs/offshore-tech/mobile.pdf'
    }
  ],
  'Part 6. Statutory': [
    {
      title: 'Vol II – Rules for the Verification & Registration of Ship Security Management Systems (bilingual)',
      edition: 'edisi Mar 2004',
      link: 'assets/docs/statutory/verification.pdf'
    },
    {
      title: 'Vol 1 – Guidelines for the Preparation Damage Stability Calculation & Damage Control Documentation',
      edition: 'edisi Mar 2005',
      link: 'assets/docs/statutory/damage.pdf'
    },
    {
      title: 'Vol 3 – Guidelines on Intact Stability',
      edition: 'edisi Jul 2025',
      link: 'assets/docs/statutory/intact.pdf'
    },
    {
      title: 'Vol 4 – Guidelines on Crew Accommodation',
      edition: 'edisi Mar 2016',
      link: 'assets/docs/statutory/crew.pdf'
    },
    {
      title: 'Vol 5 – Guidelines for Determination of Energy-Efficiency Design Index',
      edition: 'edisi Aug 2023; ada pula Amendment – Des 2024',
      link: 'assets/docs/statutory/energy.pdf'
    },
    {
      title: 'Vol 6 – Guidelines for the Audit & Registration Safety Management Systems',
      edition: 'terdapat versi bahasa Indonesia dan Inggris, keduanya edisi Mar 2017',
      link: 'assets/docs/statutory/audit.pdf'
    }
  ],
  'Part 7. Class Notation': [
    {
      title: 'Vol 2 – Guidelines for Dynamic Loading Approach',
      edition: 'edisi Mar 2013',
      link: 'assets/docs/class-notation/dynamic.pdf'
    },
    {
      title: 'Vol 3 – Guidelines for Spectral-Based Fatigue Analysis',
      edition: 'edisi Mar 2013',
      link: 'assets/docs/class-notation/spectral.pdf'
    },
    {
      title: 'Vol 4 – Guidelines for Livestock Carriers',
      edition: 'edisi Des 2015',
      link: 'assets/docs/class-notation/livestock.pdf'
    },
    {
      title: 'Vol A – Guidance for Helicopter Deck & Facilities (HELIL/HELIL(SRF))',
      edition: 'edisi Mar 2013',
      link: 'assets/docs/class-notation/helicopter.pdf'
    },
    {
      title: 'Vol B – Guidance for Crew Habitability On Ship',
      edition: 'edisi Apr 2025',
      link: 'assets/docs/class-notation/habitability.pdf'
    },
    {
      title: 'Vol C – Guidance for Crew Habitability on Offshore Installation',
      edition: 'edisi Mar 2014',
      link: 'assets/docs/class-notation/offshore.pdf'
    },
    {
      title: 'Vol D – Guidance for Hull Inspection & Maintenance Program',
      edition: 'edisi Mar 2013',
      link: 'assets/docs/class-notation/hull.pdf'
    },
    {
      title: 'Vol E – Guidance for Planned Maintenance Program',
      edition: 'edisi Mar 2013',
      link: 'assets/docs/class-notation/maintenance.pdf'
    },
    {
      title: 'Vol F – Guidance for the Environmental Service Systems (ships/offshore/liftboats)',
      edition: 'edisi Mar 2013',
      link: 'assets/docs/class-notation/environmental.pdf'
    },
    {
      title: 'Vol G – Guidance on Intact Stability',
      edition: 'edisi Mar 2014',
      link: 'assets/docs/class-notation/stability.pdf'
    },
    {
      title: 'Vol H – Guidance for the Class Notation Emergency Response Service',
      edition: 'edisi Mar 2013',
      link: 'assets/docs/class-notation/emergency.pdf'
    },
    {
      title: 'Vol I – Guidance for Survey Based on Reliability-Centered Maintenance',
      edition: 'edisi Mar 2012',
      link: 'assets/docs/class-notation/reliability.pdf'
    }
  ],
  'Part 8. Domestic Ships': [
    {
      title: 'Vol I – Peraturan Domestik (Domestic Regulations)',
      edition: 'edisi Feb 2022',
      link: 'assets/docs/domestic-ships/peraturan.pdf'
    },
    {
      title: 'Vol 1 – Pedoman Kapal Sungai dan Danau (Guidelines for River & Lake Vessels)',
      edition: 'edisi Des 2022',
      link: 'assets/docs/domestic-ships/pedoman.pdf'
    },
    {
      title: 'Vol A – Petunjuk Penilaian Risiko Kapal Domestik (Guidance for Domestic Ship Risk Assessment)',
      edition: 'edisi Apr 2023',
      link: 'assets/docs/domestic-ships/risiko.pdf'
    }
  ],
  'Part 9. Naval Ship Tech': [
    {
      title: 'Vol 1 – Guidelines for Classification & Surveys',
      edition: 'edisi Mar 2020',
      link: 'assets/docs/naval-ship-tech/classification.pdf'
    },
    {
      title: 'Vol 2 – Guidelines for Hull Structures & Ship Equipment',
      edition: 'edisi Mar 2020',
      link: 'assets/docs/naval-ship-tech/hull.pdf'
    },
    {
      title: 'Vol 3 – Guidelines for Propulsion Plants',
      edition: 'edisi Mar 2020',
      link: 'assets/docs/naval-ship-tech/propulsion.pdf'
    },
    {
      title: 'Vol 4 – Guidelines for Electrical Installations',
      edition: 'edisi Mar 2020',
      link: 'assets/docs/naval-ship-tech/electrical.pdf'
    },
    {
      title: 'Vol 5 – Guidelines for Naval Ship Materials',
      edition: 'edisi Mar 2020',
      link: 'assets/docs/naval-ship-tech/materials.pdf'
    },
    {
      title: 'Vol 6 – Guidelines for Ship Operation Installations & Auxiliary Systems',
      edition: 'edisi Mar 2020',
      link: 'assets/docs/naval-ship-tech/operations.pdf'
    },
    {
      title: 'Vol 7 – Guidelines for Automations',
      edition: 'edisi Mar 2020',
      link: 'assets/docs/naval-ship-tech/automations.pdf'
    }
  ],
  'Part 10. Industry': [
    {
      title: 'Vol 1 – Guidelines for Medical Hyperbaric Chamber Facilities',
      edition: 'edisi Apr 2020',
      link: 'assets/docs/industry/hyperbaric.pdf'
    },
    {
      title: 'Vol 2 – Guidelines for Offshore Concrete Structures',
      edition: 'edisi Apr 2020',
      link: 'assets/docs/industry/concrete.pdf'
    },
    {
      title: 'Vol A – Petunjuk Konstruksi dan Fasilitas Pelabuhan (Guidance for Port Construction & Facilities)',
      edition: 'edisi Jan 2020',
      link: 'assets/docs/industry/pelabuhan.pdf' 
    }
  ]
};

// Mapping untuk nama bersih - TIDAK DIUBAH
const nameMapping = {
  'General': 'Part 0. General',
  'Seagoing Ship': 'Part 1. Seagoing Ship',
  'Inland Waterway': 'Part 2. Inland Waterway',
  'Special Ships': 'Part 3. Special Ships',
  'Special Equipment': 'Part 4. Special Equipment',
  'Offshore Tech': 'Part 5. Offshore Tech',
  'Statutory': 'Part 6. Statutory',
  'Class Notation': 'Part 7. Class Notation',
  'Domestic Ships': 'Part 8. Domestic Ships',
  'Naval Ship Tech': 'Part 9. Naval Ship Tech',
  'Industry': 'Part 10. Industry'
};

document.addEventListener('DOMContentLoaded', () => {
  // Log cache buster untuk debugging - DITAMBAHKAN
  console.log('Anti-cache timestamp:', CACHE_BUSTER);
  
  // App links configuration dengan nama bersih - TIDAK DIUBAH
const appLinks = [
  { 
    name: 'General',           
    color: 'blue',   
    category: 'General',
    icon: 'assets/icons/general.png' 
  },
  { 
    name: 'Seagoing Ship',     
    color: 'blue',   
    category: 'General',
    icon: 'assets/icons/seagoing-ship.jpg'
  },
  { 
    name: 'Inland Waterway',   
    color: 'blue',   
    category: 'General',
    icon: 'assets/icons/inland-waterway.webp'
  },
  { 
    name: 'Special Ships',     
    color: 'blue',   
    category: 'General',
    icon: 'assets/icons/special-ships.png'
  },
  { 
    name: 'Special Equipment', 
    color: 'green',  
    category: 'Seasonal',
    icon: 'assets/icons/special-equipment.jpg'
  },
  { 
    name: 'Offshore Tech',     
    color: 'green',  
    category: 'Seasonal',
    icon: 'assets/icons/offshore-tech.jpg'
  },
  { 
    name: 'Statutory',         
    color: 'green',  
    category: 'Seasonal',
    icon: 'assets/icons/statutory.jpg'
  },
  { 
    name: 'Class Notation',    
    color: 'green',  
    category: 'Seasonal',
    icon: 'assets/icons/class-notation.jpg'
  },
  { 
    name: 'Domestic Ships',    
    color: 'orange', 
    category: 'Industry',
    icon: 'assets/icons/domestic-ships.png'
  },
  { 
    name: 'Naval Ship Tech',   
    color: 'orange', 
    category: 'Industry',
    icon: 'assets/icons/naval-ship-tech.png'
  },
  { 
    name: 'Industry',          
    color: 'orange', 
    category: 'Industry',
    icon: 'assets/icons/industry.jpg'
  }
];


  // Element references - TIDAK DIUBAH
  const appContainer = document.getElementById('app-container');
  const themeToggle = document.getElementById('themeToggle');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navOverlay = document.getElementById('nav-overlay');
  const mobileResourcesBtn = document.getElementById('mobile-resources-btn');
  const mobileResourcesContent = document.getElementById('mobile-resources-content');

  let scrollPosition = 0;

  // Function to show home page - TIDAK DIUBAH
  window.showHomePage = function() {
    console.log('Showing home page...'); // Debug log
    
    const grouped = appLinks.reduce((acc, link) => {
      (acc[link.category] = acc[link.category] || []).push(link);
      return acc;
    }, {});

    console.log('Grouped data:', grouped); // Debug log

    // Clear container
    appContainer.innerHTML = '';

    // Create category cards
    Object.keys(grouped).forEach(cat => {
      console.log('Creating category:', cat); // Debug log
      
      const card = document.createElement('div');
      card.className = 'category-card';
      
      if (cat === "General") {
        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = cat;
        card.appendChild(title);
      }
      
      const grid = document.createElement('div');
      grid.className = 'grid';
      
      grouped[cat].forEach(link => {
        console.log('Creating icon for:', link.name); // Debug log
        
        const initials = link.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
        
        const iconItem = document.createElement('div');
        iconItem.className = 'icon-item';
        iconItem.onclick = () => showPartDetail(link.name);

        const iconImg = document.createElement('img');
        iconImg.className = 'icon-img';
        iconImg.src = link.icon;
        iconImg.alt = link.name;
        iconItem.appendChild(iconImg);

        const iconName = document.createElement('div');
        iconName.className = 'icon-name';
        iconName.textContent = link.name;

        iconItem.appendChild(iconName);
        grid.appendChild(iconItem);

      });
      
      card.appendChild(grid);
      appContainer.appendChild(card);
    });
    
    console.log('Home page created successfully'); // Debug log
  closeMobileMenu();
  }

  // Function to show part detail dengan mapping dan anti-cache - TIDAK DIUBAH LOGICNYA
  window.showPartDetail = function(partName) {
    console.log('Showing detail for:', partName); // Debug log
    
    // Gunakan mapping untuk mendapatkan key yang benar
    const mappedName = nameMapping[partName] || partName;
    const data = partData[mappedName] || [];
    
    appContainer.innerHTML = `
      <button class="back-button" onclick="showHomePage()">
        ← Kembali
      </button>
      <div class="category-card">
        <h2 class="category-title">${partName}</h2>
        <div class="rules-list">
          ${data.map(item => `
            <a href="javascript:void(0)" class="rule-link" onclick="openPdfModal('${item.title.replace(/'/g, "\\'")}', '${item.link}')">
              <div class="rule-title">${item.title}</div>
              ${item.edition ? `<div class="rule-edition">${item.edition}</div>` : ''}
            </a>
          `).join('')}
        </div>
      </div>
    `;
    closeMobileMenu();
  };

  // Theme toggle - TIDAK DIUBAH
  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Mobile menu functions - TIDAK DIUBAH
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

  // Toggle menu open/close - TIDAK DIUBAH
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('active');
    isOpen ? closeMobileMenu() : openMobileMenu();
  });

  // Click overlay to close menu - TIDAK DIUBAH
  navOverlay.addEventListener('click', closeMobileMenu);

  // Toggle submenu RESOURCES - TIDAK DIUBAH
  mobileResourcesBtn.addEventListener('click', e => {
    e.preventDefault();
    const isSubOpen = mobileResourcesContent.style.display === 'flex';
    mobileResourcesContent.style.display = isSubOpen ? 'none' : 'flex';
  });

  // ========================================
  // TAMBAHAN SECURITY FEATURES UNTUK PDF
  // Letakkan SETELAH mobile menu handlers
  // dan SEBELUM Initialize homepage
  // ========================================
  
  // Prevent right click on PDF container (anti copy)
  const pdfContainer = document.getElementById('pdfjs-container');
  if (pdfContainer) {
    pdfContainer.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      return false;
    });
  }

  // Prevent print/save shortcuts when PDF modal is active
  document.addEventListener('keydown', function(e) {
    const pdfModal = document.getElementById('pdf-modal');
    if (pdfModal && pdfModal.classList.contains('active')) {
      // Block Ctrl+S (Save) and Ctrl+P (Print)
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'p')) {
        e.preventDefault();
        console.log('Print/Save blocked in PDF viewer');
        return false;
      }
      // Optional: Block F12 (Developer Tools) saat PDF terbuka
      if (e.key === 'F12') {
        e.preventDefault();
        console.log('DevTools blocked in PDF viewer');
        return false;
      }
    }
  });

  // Initialize homepage - TIDAK DIUBAH
  console.log('Initializing app...'); // Debug log
  showHomePage();
  });

  // PDF Modal Function - COMPLETELY FIXED
  window.openPdfModal = function(title, link) {
    console.log('Opening PDF:', title, link);
    
    // Show modal
    const modal = document.getElementById('pdf-modal');
    const loadingEl = document.getElementById('pdf-loading');
    const container = document.getElementById('pdfjs-container');
    const titleEl = document.getElementById('pdf-title');
    
    modal.classList.add('active');
    titleEl.textContent = title;
    document.querySelector('.main-nav').classList.add('hide-navbar');
    
    // Clear previous content
    container.innerHTML = '';
    
    // Show loading
    loadingEl.classList.remove('hidden');
    
    // Load PDF
    const loadingTask = pdfjsLib.getDocument(link);
    
    loadingTask.promise.then(function(pdf) {
      console.log('PDF loaded, pages:', pdf.numPages);
      
      // Function to render pages sequentially
      function renderPage(pageNum) {
        pdf.getPage(pageNum).then(function(page) {
          const scale = 1.5;
          const viewport = page.getViewport({ scale: scale });
          
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          
          const renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          
          page.render(renderContext).promise.then(function() {
            console.log('Page', pageNum, 'rendered');
            
            // Hide loading after first page renders
            if (pageNum === 1) {
              loadingEl.classList.add('hidden');
            }
            
            // Render next page if exists
            if (pageNum < pdf.numPages) {
              renderPage(pageNum + 1);
            }
          });
          
          container.appendChild(canvas);
        });
      }
      
      // Start rendering from page 1
      renderPage(1);
      
    }, function(error) {
      console.error('Error loading PDF:', error);
      loadingEl.classList.add('hidden');
      container.innerHTML = `
        <div style="color: white; text-align: center; padding: 40px;">
          <h3>Gagal memuat dokumen</h3>
          <p>Error: ${error.message || 'Unknown error'}</p>
          <p>File: ${link}</p>
        </div>
      `;
    });
  };

  // Close PDF viewer - pastikan fungsi ini ada
  window.closePdfViewer = function() {
    document.getElementById('pdf-modal').classList.remove('active');
    document.getElementById('pdfjs-container').innerHTML = '';
    document.querySelector('.main-nav').classList.remove('hide-navbar');
  };

  // Disable klik kanan pada container
  pdfjsContainer.addEventListener('contextmenu', function(e) { e.preventDefault(); });

  // Cegah Ctrl+S, Ctrl+P di modal aktif
  document.addEventListener('keydown', function(e) {
    // Prevent right click on PDF container
    document.getElementById('pdfjs-container').addEventListener('contextmenu', e => {
      e.preventDefault();
      return false;
    });

    // Prevent print/save shortcuts in PDF modal
    document.addEventListener('keydown', function(e) {
      if (document.getElementById('pdf-modal').classList.contains('active')) {
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'p')) {
          e.preventDefault();
          return false;
        }
      }
    });
  });

  // Render PDF dengan PDF.js
  const loadingTask = pdfjsLib.getDocument(link);
  loadingTask.promise.then(function(pdf) {
    // Render setiap halaman PDF ke canvas
    let pageNumber = 1;
    function renderPage(num) {
      pdf.getPage(num).then(function(page) {
        var viewport = page.getViewport({ scale: 1.3 });
        var canvas = document.createElement('canvas');
        canvas.style.display = 'block';
        canvas.style.margin = '0 auto 12px auto';
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        var renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        page.render(renderContext).promise.then(function () {
          if (num < pdf.numPages) {
            renderPage(num + 1);
          } else {
            document.getElementById('pdf-loading').style.display = 'none';
          }
        });
        pdfjsContainer.appendChild(canvas);
      });
    }
    renderPage(pageNumber);
  }, function(error) {
    document.getElementById('pdf-loading').style.display = 'none';
    pdfjsContainer.innerHTML = '<div style="color:red;padding:24px;text-align:center;">Gagal memuat dokumen.</div>';
  });

window.closePdfViewer = function() {
  document.getElementById('pdf-modal').classList.remove('active');
  document.getElementById('pdfjs-container').innerHTML = '';
  document.querySelector('.main-nav').classList.remove('hide-navbar');
};


