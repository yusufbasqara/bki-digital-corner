// ANTI-CACHE: Generate timestamp untuk mencegah caching
const CACHE_BUSTER = new Date().getTime();

// Function untuk menambahkan timestamp ke URL
function addCacheBuster(url) {
  if (url === '#') return url;
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}v=${CACHE_BUSTER}`;
}

// Data struktur lengkap untuk setiap part dengan anti-cache URLs
const partData = {
  'Part 0. General': [
    {
      title: 'Vol B – Guidance for Class Notations',
      edition: 'edisi Des 2025',
      link: addCacheBuster('assets/docs/part0_volB_guidance_for_class_notations.pdf')
    }
  ],
  'Part 1. Seagoing Ship': [
    {
      title: 'Vol I – Rules for Classification & Surveys (ID)',
      edition: 'edisi Sep 2022',
      link: addCacheBuster('assets/docs/part1_volI_rules_for_classification_and_surveys.pdf')
    },
    {
      title: 'Vol II – Rules for Hull (ID)',
      edition: 'edisi Nov 2022',
      link: addCacheBuster('assets/docs/part1_volII_rules_for_hull_nov_2022.pdf')
    },
    {
      title: 'Vol II – Rules for Hull',
      edition: 'edisi Mei 2025',
      link: addCacheBuster('assets/docs/part1_volII_rules_for_hull_mei_2025.pdf')
    },
    {
      title: 'Vol III – Rules for Machinery Installations (ID)',
      edition: 'edisi Sep 2022',
      link: addCacheBuster('assets/docs/part1_volIII_rules_for_machinery_installations_sep_2022.pdf')
    },
    {
      title: 'Vol III – Rules for Machinery Installations',
      edition: 'edisi Mei 2025',
      link: addCacheBuster('assets/docs/part1_volIII_rules_for_machinery_installations_mei_2025.pdf')
    },
    {
      title: 'Vol IV – Rules for Electrical Installations',
      edition: 'edisi Mei 2025',
      link: addCacheBuster('assets/docs/part1_volIV_rules_for_electrical_installations.pdf')
    },
    {
      title: 'Vol V – Rules for Materials',
      edition: 'edisi Nov 2025',
      link: addCacheBuster('assets/docs/part1_volV_rules_for_materials.pdf')
    },
    {
      title: 'Vol V – Corrigenda',
      edition: 'edisi Apr 2025',
      link: addCacheBuster('assets/docs/part1_volV_corrigenda.pdf')
    },
    {
      title: 'Vol VI – Rules for Welding (ID)',
      edition: 'edisi Sep 2022',
      link: addCacheBuster('assets/docs/part1_volVI_rules_for_welding_sep_2022.pdf')
    },
    {
      title: 'Vol VI – Rules for Welding',
      edition: 'edisi Des 2024',
      link: addCacheBuster('assets/docs/part1_volVI_rules_for_welding_des_2024.pdf')
    },
    {
      title: 'Vol VII – Rules for Automation',
      edition: 'memuat pedoman otomasi (edisi 2013/2014)',
      link: addCacheBuster('assets/docs/part1_volVII_rules_for_automation.pdf')
    },
    {
      title: 'Vol VIII – Rules for Refrigerating Installation',
      edition: 'edisi Feb 2018',
      link: addCacheBuster('assets/docs/part1_volVIII_rules_for_refrigerating_installation.pdf')
    },
    {
      title: 'Vol IX – Rules for Liquefied Gases',
      edition: 'beberapa dokumen, termasuk edisi 2019 dan 2024, serta amandemen',
      link: addCacheBuster('assets/docs/part1_volIX_rules_for_liquefied_gases.pdf')
    },
    {
      title: 'Vol X – Dangerous Chemicals in Bulk',
      edition: 'panduan muatan kimia berbahaya',
      link: addCacheBuster('assets/docs/part1_volX_dangerous_chemicals_in_bulk.pdf')
    },
    {
      title: 'Vol XI – Approval of Manufacturers & Service Suppliers',
      edition: 'pedoman persetujuan',
      link: addCacheBuster('assets/docs/part1_volXI_approval_of_manufacturers_and_service_suppliers.pdf')
    },
    {
      title: 'Vol XII – Fishing Vessels',
      edition: 'peraturan kapal penangkap ikan',
      link: addCacheBuster('assets/docs/part1_volXII_fishing_vessels.pdf')
    }
  ],
  'Part 2. Inland Waterway': [
    {
      title: 'Vol I – Rules for Inland Waterway Classification & Surveys',
      edition: 'edisi Jul 2015',
      link: addCacheBuster('assets/docs/part2_volI_rules_for_inland_waterway_classification_and_surveys.pdf')
    },
    {
      title: 'Vol II – Rules for Inland Waterway Vessels – Hull Construction',
      edition: 'edisi Jul 2015',
      link: addCacheBuster('assets/docs/part2_volII_rules_for_inland_waterway_vessels.pdf')
    }
  ],
  'Part 3. Special Ships': [
    {
      title: 'Vol I – Rules for Oil Recovery Vessels',
      edition: 'edisi Mar 2005',
      link: addCacheBuster('assets/docs/part3_volI_rules_for_oil_recovery_vessels.pdf')
    },
    {
      title: 'Vol II – Rules for Floating Dock',
      edition: 'edisi Apr 2019',
      link: addCacheBuster('assets/docs/part3_volII_rules_for_floating_dock.pdf')
    },
    {
      title: 'Vol III – Rules for High-Speed Craft',
      edition: 'edisi Agu 2022; plus Amendment – Apr 2023',
      link: addCacheBuster('assets/docs/part3_volIII_rules_for_high_speed_craft.pdf')
    },
    {
      title: 'Vol V – Rules for Fiberglass-Reinforced Plastics Ships',
      edition: 'edisi Mar 2021',
      link: addCacheBuster('assets/docs/part3_volV_rules_for_fiberglass_ships.pdf')
    },
    {
      title: 'Vol VI – Peraturan Kapal Kayu',
      edition: 'edisi Apr 2023',
      link: addCacheBuster('assets/docs/part3_volVI_peraturan_kapal_kayu.pdf')
    },
    {
      title: 'Vol VI – Rules for Mobile Offshore Units',
      edition: 'edisi Nov 2025',
      link: addCacheBuster('assets/docs/part3_volVI_rules_for_mobile_offshore_units.pdf')
    }
  ],
  'Part 4. Special Equipment': [
    {
      title: 'Vol I – Rules for Stowage & Lashing of Containers',
      edition: 'edisi Nov 2025',
      link: addCacheBuster('assets/docs/part4_volI_rules_for_stowage_and_lashing.pdf')
    },
    {
      title: 'Vol II – Rules for Dynamic Positioning Systems',
      edition: 'edisi Mar 2011',
      link: addCacheBuster('assets/docs/part4_volII_rules_for_dynamic_positioning_systems.pdf')
    },
    {
      title: 'Vol III – Guidance for Safety Equipment and Systems',
      edition: 'edisi 2011-2025',
      link: addCacheBuster('assets/docs/part4_volIII_guidance_safety_equipment.pdf')
    },
    {
      title: 'Vol IV – Guidance for Special Installations',
      edition: 'edisi 2011-2025',
      link: addCacheBuster('assets/docs/part4_volIV_guidance_special_installations.pdf')
    }
  ],
  'Part 5. Offshore Tech': [
    {
      title: 'Vol I – Rules for Classification & Surveys',
      edition: 'edisi Des 2024',
      link: addCacheBuster('assets/docs/part5_volI_rules_for_offshore_classification_and_surveys.pdf')
    },
    {
      title: 'Vol II – Rules for Structures',
      edition: 'edisi Mar 2011',
      link: addCacheBuster('assets/docs/part5_volII_rules_for_structures.pdf')
    },
    {
      title: 'Vol IV – Rules for Machinery Installations',
      edition: 'edisi Mar 2011',
      link: addCacheBuster('assets/docs/part5_volIV_rules_for_machinery_installations.pdf')
    },
    {
      title: 'Vol V – Rules for Electrical Installations',
      edition: 'edisi Mar 2011',
      link: addCacheBuster('assets/docs/part5_volV_rules_for_electrical_installations.pdf')
    },
    {
      title: 'Vol VI – Rules for Mobile Offshore Units',
      edition: 'edisi Nov 2025',
      link: addCacheBuster('assets/docs/part5_volVI_rules_for_mobile_offshore_units.pdf')
    }
  ],
  'Part 6. Statutory': [
    {
      title: 'Vol II – Rules for the Verification & Registration of Ship Security Management Systems (bilingual)',
      edition: 'edisi Mar 2004',
      link: addCacheBuster('assets/docs/part6_volII_rules_for_verification_and_registration.pdf')
    },
    {
      title: 'Vol 1 – Guidelines for the Preparation Damage Stability Calculation & Damage Control Documentation',
      edition: 'edisi Mar 2005',
      link: addCacheBuster('assets/docs/part6_vol1_guidelines_for_damage_stability.pdf')
    },
    {
      title: 'Vol 3 – Guidelines on Intact Stability',
      edition: 'edisi Jul 2025',
      link: addCacheBuster('assets/docs/part6_vol3_guidelines_on_intact_stability.pdf')
    },
    {
      title: 'Vol 4 – Guidelines on Crew Accommodation',
      edition: 'edisi Mar 2016',
      link: addCacheBuster('assets/docs/part6_vol4_guidelines_on_crew_accommodation.pdf')
    },
    {
      title: 'Vol 5 – Guidelines for Determination of Energy-Efficiency Design Index',
      edition: 'edisi Aug 2023; ada pula Amendment – Des 2024',
      link: addCacheBuster('assets/docs/part6_vol5_guidelines_for_energy_efficiency.pdf')
    },
    {
      title: 'Vol 6 – Guidelines for the Audit & Registration Safety Management Systems',
      edition: 'terdapat versi bahasa Indonesia dan Inggris, keduanya edisi Mar 2017',
      link: addCacheBuster('assets/docs/part6_vol6_guidelines_for_audit_and_registration.pdf')
    }
  ],
  'Part 7. Class Notation': [
    {
      title: 'Vol 2 – Guidelines for Dynamic Loading Approach',
      edition: 'edisi Mar 2013',
      link: addCacheBuster('assets/docs/part7_vol2_guidelines_for_dynamic_loading.pdf')
    },
    {
      title: 'Vol 3 – Guidelines for Spectral-Based Fatigue Analysis',
      edition: 'edisi Mar 2013',
      link: addCacheBuster('assets/docs/part7_vol3_guidelines_for_spectral_based_fatigue_analysis.pdf')
    },
    {
      title: 'Vol 4 – Guidelines for Livestock Carriers',
      edition: 'edisi Des 2015',
      link: addCacheBuster('assets/docs/part7_vol4_guidelines_for_livestock_carriers.pdf')
    },
    {
      title: 'Vol A – Guidance for Helicopter Deck & Facilities (HELIL/HELIL(SRF))',
      edition: 'edisi Mar 2013',
      link: addCacheBuster('assets/docs/part7_volA_guidance_for_helicopter_deck.pdf')
    },
    {
      title: 'Vol B – Guidance for Crew Habitability On Ship',
      edition: 'edisi Apr 2025',
      link: addCacheBuster('assets/docs/part7_volB_guidance_for_crew_habitability_on_ship.pdf')
    },
    {
      title: 'Vol C – Guidance for Crew Habitability on Offshore Installation',
      edition: 'edisi Mar 2014',
      link: addCacheBuster('assets/docs/part7_volC_guidance_for_crew_habitability_on_offshore_installation.pdf')
    },
    {
      title: 'Vol D – Guidance for Hull Inspection & Maintenance Program',
      edition: 'edisi Mar 2013',
      link: addCacheBuster('assets/docs/part7_volD_guidance_for_hull_inspection.pdf')
    },
    {
      title: 'Vol E – Guidance for Planned Maintenance Program',
      edition: 'edisi Mar 2013',
      link: addCacheBuster('assets/docs/part7_volE_guidance_for_planned_maintenance_program.pdf')
    },
    {
      title: 'Vol F – Guidance for the Environmental Service Systems (ships/offshore/liftboats)',
      edition: 'edisi Mar 2013',
      link: addCacheBuster('assets/docs/part7_volF_guidance_for_environmental_service_systems.pdf')
    },
    {
      title: 'Vol G – Guidance on Intact Stability',
      edition: 'edisi Mar 2014',
      link: addCacheBuster('assets/docs/part7_volG_guidance_on_intact_stability.pdf')
    },
    {
      title: 'Vol H – Guidance for the Class Notation Emergency Response Service',
      edition: 'edisi Mar 2013',
      link: addCacheBuster('assets/docs/part7_volH_guidance_for_emergency_response_service.pdf')
    },
    {
      title: 'Vol I – Guidance for Survey Based on Reliability-Centered Maintenance',
      edition: 'edisi Mar 2012',
      link: addCacheBuster('assets/docs/part7_volI_guidance_for_survey_reliability.pdf')
    }
  ],
  'Part 8. Domestic Ships': [
    {
      title: 'Vol I – Peraturan Domestik (Domestic Regulations)',
      edition: 'edisi Feb 2022',
      link: addCacheBuster('assets/docs/part8_volI_peraturan_domestik.pdf')
    },
    {
      title: 'Vol 1 – Pedoman Kapal Sungai dan Danau (Guidelines for River & Lake Vessels)',
      edition: 'edisi Des 2022',
      link: addCacheBuster('assets/docs/part8_vol1_pedoman_kapal_sungai_dan_danau.pdf')
    },
    {
      title: 'Vol A – Petunjuk Penilaian Risiko Kapal Domestik (Guidance for Domestic Ship Risk Assessment)',
      edition: 'edisi Apr 2023',
      link: addCacheBuster('assets/docs/part8_volA_petunjuk_penilaian_risiko.pdf')
    }
  ],
  'Part 9. Naval Ship Tech': [
    {
      title: 'Vol 1 – Guidelines for Classification & Surveys',
      edition: 'edisi Mar 2020',
      link: addCacheBuster('assets/docs/part9_vol1_guidelines_for_classification_and_surveys.pdf')
    },
    {
      title: 'Vol 2 – Guidelines for Hull Structures & Ship Equipment',
      edition: 'edisi Mar 2020',
      link: addCacheBuster('assets/docs/part9_vol2_guidelines_for_hull_structures.pdf')
    },
    {
      title: 'Vol 3 – Guidelines for Propulsion Plants',
      edition: 'edisi Mar 2020',
      link: addCacheBuster('assets/docs/part9_vol3_guidelines_for_propulsion_plants.pdf')
    },
    {
      title: 'Vol 4 – Guidelines for Electrical Installations',
      edition: 'edisi Mar 2020',
      link: addCacheBuster('assets/docs/part9_vol4_guidelines_for_electrical_installations.pdf')
    },
    {
      title: 'Vol 5 – Guidelines for Naval Ship Materials',
      edition: 'edisi Mar 2020',
      link: addCacheBuster('assets/docs/part9_vol5_guidelines_for_naval_ship_materials.pdf')
    },
    {
      title: 'Vol 6 – Guidelines for Ship Operation Installations & Auxiliary Systems',
      edition: 'edisi Mar 2020',
      link: addCacheBuster('assets/docs/part9_vol6_guidelines_for_ship_operation_installations.pdf')
    },
    {
      title: 'Vol 7 – Guidelines for Automations',
      edition: 'edisi Mar 2020',
      link: addCacheBuster('assets/docs/part9_vol7_guidelines_for_automations.pdf')
    }
  ],
  'Part 10. Industry': [
    {
      title: 'Vol 1 – Guidelines for Medical Hyperbaric Chamber Facilities',
      edition: 'edisi Apr 2020',
      link: addCacheBuster('assets/docs/part10_vol1_guidelines_for_medical_hyperbaric_chamber.pdf')
    },
    {
      title: 'Vol 2 – Guidelines for Offshore Concrete Structures',
      edition: 'edisi Apr 2020',
      link: addCacheBuster('assets/docs/part10_vol2_guidelines_for_offshore_concrete_structures.pdf')
    },
    {
      title: 'Vol A – Petunjuk Konstruksi dan Fasilitas Pelabuhan (Guidance for Port Construction & Facilities)',
      edition: 'edisi Jan 2020',
      link: addCacheBuster('assets/docs/part10_volA_petunjuk_konstruksi_dan_fasilitas_pelabuhan.pdf')
    }
  ]
};

// Mapping untuk nama bersih
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
  // Log cache buster untuk debugging
  console.log('Anti-cache timestamp:', CACHE_BUSTER);
  
  // App links configuration dengan nama bersih
  const appLinks = [
    { name: 'General',           color: 'blue',   category: 'General'  },
    { name: 'Seagoing Ship',     color: 'blue',   category: 'General'  },
    { name: 'Inland Waterway',   color: 'blue',   category: 'General'  },
    { name: 'Special Ships',     color: 'blue',   category: 'General'  },
    { name: 'Special Equipment', color: 'green',  category: 'Seasonal'},
    { name: 'Offshore Tech',     color: 'green',  category: 'Seasonal'},
    { name: 'Statutory',         color: 'green',  category: 'Seasonal'},
    { name: 'Class Notation',    color: 'green',  category: 'Seasonal'},
    { name: 'Domestic Ships',    color: 'orange', category: 'Industry'},
    { name: 'Naval Ship Tech',   color: 'orange', category: 'Industry'},
    { name: 'Industry',          color: 'orange', category: 'Industry'}
  ];

  // Element references
  const appContainer = document.getElementById('app-container');
  const themeToggle = document.getElementById('themeToggle');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navOverlay = document.getElementById('nav-overlay');
  const mobileResourcesBtn = document.getElementById('mobile-resources-btn');
  const mobileResourcesContent = document.getElementById('mobile-resources-content');

  let scrollPosition = 0;

  // Function to show home page
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
      
      const title = document.createElement('h2');
      title.className = 'category-title';
      title.textContent = cat;
      card.appendChild(title);
      
      const grid = document.createElement('div');
      grid.className = 'grid';
      
      grouped[cat].forEach(link => {
        console.log('Creating icon for:', link.name); // Debug log
        
        const initials = link.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
        
        const iconItem = document.createElement('div');
        iconItem.className = 'icon-item';
        iconItem.onclick = () => showPartDetail(link.name);
        
        const iconBg = document.createElement('div');
        iconBg.className = `icon-bg bg-${link.color}`;
        iconBg.textContent = initials;
        
        const iconName = document.createElement('div');
        iconName.className = 'icon-name';
        iconName.textContent = link.name;
        
        iconItem.appendChild(iconBg);
        iconItem.appendChild(iconName);
        grid.appendChild(iconItem);
      });
      
      card.appendChild(grid);
      appContainer.appendChild(card);
    });
    
    console.log('Home page created successfully'); // Debug log
    closeMobileMenu();
  };

  // Function to show part detail dengan mapping dan anti-cache
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
            <a href="${item.link}" target="_blank" class="rule-link">
              <div class="rule-title">${item.title}</div>
              ${item.edition ? `<div class="rule-edition">${item.edition}</div>` : ''}
            </a>
          `).join('')}
        </div>
      </div>
    `;
    closeMobileMenu();
  };

  // Theme toggle
  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Mobile menu functions
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

  // Click overlay to close menu
  navOverlay.addEventListener('click', closeMobileMenu);

  // Toggle submenu RESOURCES
  mobileResourcesBtn.addEventListener('click', e => {
    e.preventDefault();
    const isSubOpen = mobileResourcesContent.style.display === 'flex';
    mobileResourcesContent.style.display = isSubOpen ? 'none' : 'flex';
  });

  // Initialize homepage
  console.log('Initializing app...'); // Debug log
  showHomePage();
});