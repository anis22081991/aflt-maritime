/**
 * SYSTÈME DE GESTION MULTILINGUE
 * Support: Français (FR), Anglais (EN), Arabe (AR)
 */

const translations = {
  fr: {
    // Navigation
    about: "À propos",
    services: "Services",
    destinations: "Destinations",
    contact: "Contacter Nous",
    
    // Hero Section
    welcome: "Bienvenue",
    offres_algeria: "Offres Algérie",
    
    // About Section
    who_are_we: "Qui sommes-nous ?",
    aflt_maritime: "AFLT Maritime",
    aflt_desc_1: "AFLT Maritime 'Algeria Facility Logistics & Transport Maritime' s'impose comme un acteur clé du renouveau maritime algérien. Spécialisée dans les services maritimes et logistiques, l'entreprise contribue activement à la relance du secteur à travers des partenariats stratégiques avec des compagnies internationales, dont GNV – Grandi Navi Veloci.",
    aflt_desc_2: "Fondée en 2017 à Alger, AFLT offre des solutions intégrées de logistique, de transit, de dédouanement, d'entreposage et de transport multimodal, garantissant fiabilité et performance sur l'ensemble du territoire national et à l'international. En tant qu'agent général, AFLT Maritime œuvre à renforcer les liaisons entre l'Algérie et l'Europe, au service de la mobilité, du commerce et du tourisme maritime, en phase avec la stratégie nationale de développement du transport maritime et d'ouverture économique.",
    agent_gnv: "Agent général de GNV",
    
    // Services Section
    our_services: "Nos Services",
    logistic_transit_international: "Logistique & Transit International",
    transport_multimodal: "Transport Multimodal",
    fret_maritime: "Fret maritime",
    
    // Booking Section
    book_ticket: "Réserver votre billet",
    title_1: "Votre billet GNV,",
    title_2: "où que vous soyez !",
    desc_1: "Passez dans nos bureaux à Alger, visitez nos 20 agences entre Alger et Béjaïa, ou réservez en ligne sur www.gnv.it",
    savoir_plus: "En savoir plus",
    
    // Contact Section
    contactez_nous: "Contactez Nous",
    assistance_24_7: "Assistance client 24h/24 et là toute heure du jour ou de la nuit",
    
    // Form Fields
    nom_prenom: "Nom et Prénom",
    email: "Email",
    telephone: "Téléphone",
    pays: "Pays",
    message: "Message",
    envoyer: "Envoyer",
    
    // Contact Info
    adress_1: "Alger, Résidence Chaabani",
    adress_2: "Rez-de-chaussée BT C08 SECT 03 LOT 29, Val d'Hydra, Alger",
    
    // Destinations Section
    nos_destinations: "Nos Destinations",
    destination_desc: "Voyagez avec confort depuis/vers l'Algérie avec GNV",
    destination_title1: "Sète – Alger",
    destination_title2: "Sète – Béjaïa",
    destination_title_desc: "Ferries depuis/vers Sète",
    
    // Newsletter
    abonner_newsletters: "Abonnez-vous à notre newsletter",
    nos_rubriques: "Nos rubriques"
  },

  en: {
    // Navigation
    about: "About",
    services: "Services",
    destinations: "Destinations",
    contact: "Contact Us",
    
    // Hero Section
    welcome: "Welcome",
    offres_algeria: "Algeria Offers",
    
    // About Section
    who_are_we: "Who are we?",
    aflt_maritime: "AFLT Maritime",
    aflt_desc_1: "AFLT Maritime — Algeria Facility Logistics & Transport Maritime — stands as a key player in the revival of the Algerian maritime sector. Specializing in maritime and logistics services, the company actively contributes to the industry's recovery through strategic partnerships with international operators, including GNV – Grandi Navi Veloci.",
    aflt_desc_2: "Founded in 2017 in Algiers, AFLT provides integrated solutions in logistics, forwarding, customs clearance, warehousing, and multimodal transport, ensuring reliability and performance nationwide and internationally. As a general agent, AFLT Maritime works to strengthen connections between Algeria and Europe, supporting mobility, trade, and maritime tourism, in line with the national strategy for developing maritime transport and promoting economic openness.",
    agent_gnv: "General Agent of GNV",
    
    // Services Section
    our_services: "Our Services",
    logistic_transit_international: "International Logistics and Forwarding",
    transport_multimodal: "Multimodal Transport",
    fret_maritime: "Sea Freight",
    
    // Booking Section
    book_ticket: "Book Your Ticket",
    title_1: "Your GNV ticket,",
    title_2: "wherever you are!",
    desc_1: "Visit our offices in Algiers, stop by any of our 20 agencies between Algiers and Béjaïa, or book online at www.gnv.it.",
    savoir_plus: "Learn More",
    
    // Contact Section
    contactez_nous: "Contact Us",
    assistance_24_7: "24/7 Customer Support – Available anytime, day or night",
    
    // Form Fields
    nom_prenom: "First and Last Name",
    email: "Email",
    telephone: "Phone",
    pays: "Country",
    message: "Message",
    envoyer: "Send",
    
    // Contact Info
    adress_1: "Algiers, Chaabani Residence",
    adress_2: "Ground Floor, BT C08, SECT 03, LOT 29, Val d'Hydra, Algiers",
    
    // Destinations Section
    nos_destinations: "Our Destinations",
    destination_desc: "Travel in comfort to and from Algeria with GNV",
    destination_title1: "Sète – Algiers",
    destination_title2: "Sète – Béjaïa",
    destination_title_desc: "Ferries to/from Sète",
    
    // Newsletter
    abonner_newsletters: "Subscribe to our Newsletter",
    nos_rubriques: "Our Sections"
  },

  ar: {
    // Navigation
    about: "حول",
    services: "خدمات",
    destinations: "الوجهات",
    contact: "تواصل معنا",
    
    // Hero Section
    welcome: "أهلا وسهلا",
    offres_algeria: "عروض الجزائر",
    
    // About Section
    who_are_we: "من نحن؟",
    aflt_maritime: "AFLT مارتيـم",
    aflt_desc_1: "تُعدّ شركة AFLT Maritime ‏(Algeria Facility Logistics & Transport Maritime) فاعلًا أساسيًا في نهضة القطاع البحري الجزائري. فبفضل تخصصها في الخدمات البحرية واللوجستية، تساهم الشركة بفعالية في إعادة إنعاش القطاع عبر شراكات استراتيجية مع شركات دولية، من بينها شركة GNV – Grandi Navi Veloci.",
    aflt_desc_2: "منذ تأسيسها سنة 2017 بالجزائر العاصمة، تقدم شركة AFLT حلولًا متكاملة في اللوجستيك، العبور، التخليص الجمركي، التخزين، والنقل المتعدد الوسائط، مع ضمان الموثوقية والأداء على المستوى الوطني والدولي. وبصفتها وكيلًا عامًا، تعمل AFLT Maritime على تعزيز الروابط بين الجزائر وأوروبا، خدمةً للتنقل، والتجارة، والسياحة البحرية، بما ينسجم مع الإستراتيجية الوطنية لتطوير النقل البحري والانفتاح الاقتصادي",
    agent_gnv: "الوكيل العام لشركة GNV",
    
    // Services Section
    our_services: "خدماتنا",
    logistic_transit_international: "اللوجستيك والعبور الدولي",
    transport_multimodal: "النقل متعدد الوسائط",
    fret_maritime: "الشحن البحري",
    
    // Booking Section
    book_ticket: "احجز تذكرتك",
    title_1: "تذكرتك من GNV",
    title_2: "أينما كنت!",
    desc_1: "تفضل بزيارة مكاتبنا في الجزائر العاصمة، أو أحد فروعنا الـ20 بين الجزائر وبجاية، أو احجز عبر الإنترنت على www.gnv.it.",
    savoir_plus: "المزيد من المعلومات",
    
    // Contact Section
    contactez_nous: "اتصل بنا",
    assistance_24_7: "دعم العملاء على مدار 24 ساعة – متاح في أي وقت، ليلاً أو نهاراً",
    
    // Form Fields
    nom_prenom: "الاسم واللقب",
    email: "البريد الإلكتروني",
    telephone: "الهاتف",
    pays: "الدولة",
    message: "الرسالة",
    envoyer: "إرسال",
    
    // Contact Info
    adress_1: "الجزائر، إقامة شعباني",
    adress_2: "الطابق الأرضي، BT C08، القسم 03، القطعة 29، فالد هيدرا، الجزائر",
    
    // Destinations Section
    nos_destinations: "وجهاتنا",
    destination_desc: "سافر براحة من/إلى الجزائر مع GNV",
    destination_title1: "ست – الجزائر",
    destination_title2: "ست – بجاية",
    destination_title_desc: "عبّارات من/إلى ست",
    
    // Newsletter
    abonner_newsletters: "اشترك في نشرتنا الإخبارية",
    nos_rubriques: "أقسامنا"
  }
};

// ============================================
// GESTION DE LA LANGUE COURANTE
// ============================================

let currentLang = localStorage.getItem('language') || 'fr';

// ============================================
// FONCTIONS PRINCIPALES
// ============================================

/**
 * Définir la langue actuelle
 * @param {string} lang - Code de la langue (fr, en, ar)
 */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  document.getElementById('languageSelect').value = lang;
  updatePageLanguage();
}

/**
 * Mettre à jour le contenu de la page selon la langue
 */
function updatePageLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) {
      element.placeholder = translations[currentLang][key];
    }
  });
  
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
}

/**
 * Ajouter les styles RTL au document
 */
function addRTLStyles() {
  if (!document.getElementById('rtl-styles')) {
    const style = document.createElement('style');
    style.id = 'rtl-styles';
    style.textContent = `
      /* RTL Support for Arabic */
      html[dir="rtl"] {
        direction: rtl;
      }

      html[dir="rtl"] body {
        direction: rtl;
        text-align: right;
      }

      html[dir="rtl"] .st__header__right {
        margin-left: auto;
        margin-right: 0;
      }

      html[dir="rtl"] ul {
        direction: rtl;
      }

      html[dir="rtl"] input,
      html[dir="rtl"] textarea,
      html[dir="rtl"] select {
        text-align: right;
        direction: rtl;
      }

      html[dir="rtl"] form {
        direction: rtl;
      }

      .rtl-mode {
        direction: rtl;
        text-align: right;
      }
    `;
    document.head.appendChild(style);
  }
}

// ============================================
// INITIALISATION
// ============================================

window.addEventListener('load', () => {
  document.getElementById('languageSelect').value = currentLang;
  updatePageLanguage();
});

// Ajouter les styles RTL dynamiques
function addRTLStyles() {
  if (!document.getElementById('rtl-styles')) {
    const style = document.createElement('style');
    style.id = 'rtl-styles';
    style.textContent = `
      /* RTL Support for Arabic */
      html[dir="rtl"] {
        direction: rtl;
      }

      html[dir="rtl"] body {
        direction: rtl;
        text-align: right;
      }

      html[dir="rtl"] .st__header__right {
        margin-left: auto;
        margin-right: 0;
      }

      html[dir="rtl"] ul {
        direction: rtl;
      }

      html[dir="rtl"] input,
      html[dir="rtl"] textarea,
      html[dir="rtl"] select {
        text-align: right;
        direction: rtl;
      }

      html[dir="rtl"] form {
        direction: rtl;
      }

      .rtl-mode {
        direction: rtl;
        text-align: right;
      }
    `;
    document.head.appendChild(style);
  }
}

// ============================================
// INITIALISATION
// ============================================

window.addEventListener('load', () => {
  addRTLStyles();
  const select = document.getElementById('languageSelect');
  if (select) {
    select.value = currentLang;
  }
  updatePageLanguage();
});


