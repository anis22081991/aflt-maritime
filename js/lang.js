/**
 * SYSTÈME DE GESTION MULTILINGUE
 * Support: Français (FR), Anglais (EN), Arabe (AR)
 */

const translations = {
  fr: {
    about: "À propos",
    services: "Services",
    destinations: "Destinations",
    news: "Actualités",
    contact: "Contactez-nous",
    contact_button: "Contact",
    contact_modal_title: "Contactez-nous",
    search_placeholder: "Recherche...",
    search_title: "Recherche",
    success_title: "Succès",
    success_message: "Votre message a été envoyé avec succès.",
    phone_label: "Téléphone",

    offres_algeria: "Offres Algérie",
    slide_1_title: "Algeria Facility Logistics<br>Transport Maritime",
    slide_1_badge: "Agent général",
    slide_2_title: "Voyager avec confort<br>et ponctualité",
    slide_2_cta: "Horaires et réservations",
    slide_3_title: "Billetterie GNV | Fret maritime |<br>Port & Logistique | Multimodal & Transit",
    slide_3_cta: "Notre brochure",

    who_are_we: "Qui sommes-nous ?",
    aflt_maritime: "AFLT Maritime",
    aflt_desc_1: "AFLT Maritime \"Algeria Facility Logistics & Transport Maritime\" s'impose comme un acteur clé du renouveau maritime algérien. Spécialisée dans les services maritimes et logistiques, l'entreprise contribue activement à la relance du secteur à travers des partenariats stratégiques avec des compagnies internationales, dont GNV - Grandi Navi Veloci.",
    aflt_desc_2: "Fondée en 2017 à Alger, AFLT Maritime offre des solutions intégrées de logistique, de transit, de dédouanement, d'entreposage et de transport multimodal, garantissant fiabilité et performance sur l'ensemble du territoire national et à l'international. En tant qu'agent général, AFLT Maritime oeuvre à renforcer les liaisons entre l'Algérie et l'Europe, au service de la mobilité, du commerce et du tourisme maritime.",

    our_services: "Nos services",
    services_title: "Nos services et prestations",
    logistic_transit_international: "Logistique & Transit International",
    logistic_transit_international_desc: "Organisation et pilotage des opérations de transit international, incluant la gestion documentaire, la conformité réglementaire et la coordination des acteurs de la chaîne logistique, afin d'assurer des flux sécurisés, optimisés et maîtrisés.",
    transport_multimodal: "Transport multimodal",
    transport_multimodal_desc: "Conception et mise en oeuvre de solutions de transport multimodal, combinant selon les besoins des modes complémentaires, avec une approche intégrée visant l'optimisation des coûts, des délais et des risques opérationnels.",
    fret_maritime: "Fret maritime",
    fret_maritime_desc: "Gestion intégrée des opérations de fret maritime import-export, incluant la réservation d'espaces, la coordination portuaire, le suivi opérationnel des expéditions et la conformité aux réglementations douanières et internationales.",
    service_ticketing: "Billetterie GNV",
    service_ticketing_desc: "En tant qu'agent général exclusif de GNV en Algérie, AFLT Maritime assure la billetterie et la coordination des réservations passagers sur les lignes Sète - Béjaïa - Sète et Sète - Alger - Sète.",
    service_port_logistics: "Manutention et logistique portuaire",
    service_port_logistics_desc: "Prise en charge des opérations de chargement, de déchargement, d'arrimage et de débardage des marchandises, complétée par le suivi du fret et la gestion des formalités douanières nécessaires au transit portuaire.",
    service_port_assistance: "Consignation et assistance portuaire",
    service_port_assistance_desc: "Gestion administrative des escales navales auprès des autorités compétentes, assistance au capitaine et à l'équipage durant l'escale, et coordination des opérations portuaires conformément aux procédures de sécurité et aux exigences réglementaires en vigueur.",

    book_ticket: "Réserver votre billet",
    title_1: "Votre billet GNV,",
    title_2: "où que vous soyez !",
    desc_1: "Passez dans nos bureaux à Alger ou Béjaïa, visitez nos agences accréditées entre Alger et Béjaïa, ou réservez en ligne sur www.gnv.it.",
    savoir_plus: "Besoin d'aide",

    contactez_nous: "Contactez-nous",
    assistance_24_7: "Assistance client",
    nom_prenom: "Nom et prénom",
    email: "Email",
    telephone: "Téléphone",
    pays: "Pays",
    message: "Message",
    envoyer: "Envoyer",
    adress_2: "Rez-de-chaussée BT C08 SECT 03 LOT 29, Val d'Hydra, Alger",
    port_alger: "Port d'Alger, Alger",
    port_bejaia: "Port de Béjaïa, Béjaïa",
    bejaia_agency: "Agence Béjaïa : 12, avenue Ben Boulaid - Béjaïa",

    nos_destinations: "Nos destinations",
    destination_desc: "Voyagez avec confort depuis et vers l'Algérie avec GNV",
    destination_title1: "Sète - Alger",
    destination_title2: "Sète - Béjaïa",
    destination_title3: "Troisième ville : prochainement",
    destination_title_desc: "Ferries depuis/vers Sète",
    ser_pres:"Nos services et prestations",

    faq_title: "FAQ",
    faq_subtitle: "Questions fréquemment posées",
    faq_q1: "Comment réserver un billet avec AFLT Maritime ?",
    faq_a1: "Vous pouvez réserver :<ul><li>Dans nos bureaux à Alger et à Béjaïa ainsi que chez nos agences accréditées.</li><li>En ligne via notre site officiel www.gnv.it.</li></ul>",
    faq_q2: "Quels moyens de paiement sont acceptés ?",
    faq_a2: "<ul><li>Paiement par chèque certifié ou en espèces.</li></ul>",
    faq_q3: "Quels sont les horaires et ports desservis ?",
    faq_a3: "Nos lignes desservent les ports de Sète, Alger et Béjaïa. Les horaires et les ports desservis sont disponibles dans la section Horaires et réservations.",
    faq_q4: "Quelles sont les politiques d'annulation et de remboursement ?",
    faq_a4: "Les conditions varient selon le type de service (passager ou fret). Consultez nos conditions générales ou contactez notre service client pour obtenir les détails.",
    faq_q5: "Le service de débarquement prioritaire est-il disponible ?",
    faq_a5: "Oui, il est disponible pour les passagers qui le réservent lors de l'achat du billet. Il permet :<ul><li>d'accéder à une zone dédiée à l'embarquement ;</li><li>de monter à bord immédiatement ou d'attendre dans votre véhicule ;</li><li>de débarquer en priorité à l'arrivée pour gagner du temps.</li></ul>",
    faq_q6: "AFLT Maritime propose-t-elle des solutions pour les entreprises ?",
    faq_a6: "Oui. Nous proposons des services personnalisés pour les entreprises, incluant :<ul><li>le fret maritime pour le transport de marchandises ;</li><li>la logistique portuaire pour la gestion des opérations ;</li><li>le multimodal et transit pour la coordination des flux logistiques et douaniers.</li></ul>",
    faq_q7: "Comment devenir une agence accréditée AFLT Maritime / GNV ?",
    faq_a7: "Pour devenir une agence accréditée AFLT Maritime / GNV, vous devez remplir certains critères de conformité et de capacité commerciale.<ul><li>Soumettre une demande officielle via notre service commercial.</li><li>Fournir les informations légales et financières de votre structure.</li><li>Respecter les conditions de collaboration et les standards AFLT Maritime & GNV.</li></ul>Après validation, vous recevrez un accord officiel d'accréditation et pourrez proposer la billetterie AFLT Maritime / GNV à vos clients.",

    press_review: "Revue de presse",
    read_more: "Lire plus",
    privacy_policy: "Politique de confidentialité",
    sales_conditions: "Conditions de vente",
    newsletter_subtext: "Recevez nos dernières actualités",

    nos_rubriques: "Nos rubriques",
    droits_reserv: "Tous droits réservés.",
    plan_site: "Plan du site",
    cond_util: "Conditions d'utilisation",
    ment_legal: "Mentions légales",
    res_soc: "Réseaux sociaux",
    abonn: "S'abonner",
    copyrights: "Copyright 2026",
    tap_mail: "Tapez votre e-mail"
  },

  en: {
    about: "About",
    services: "Services",
    destinations: "Destinations",
    news: "News",
    contact: "Contact Us",
    contact_button: "Contact",
    contact_modal_title: "Contact us",
    search_placeholder: "Search...",
    search_title: "Search",
    success_title: "Success",
    success_message: "Your message has been sent successfully.",
    phone_label: "Phone",
    ser_pres:"Our services and offerings",

    offres_algeria: "Algeria Offers",
    slide_1_title: "Algeria Facility Logistics<br>Maritime Transport",
    slide_1_badge: "General Agent",
    slide_2_title: "Travel with comfort<br>and punctuality",
    slide_2_cta: "Schedules and bookings",
    slide_3_title: "GNV Ticketing | Sea Freight |<br>Port & Logistics | Multimodal & Transit",
    slide_3_cta: "Our brochure",

    who_are_we: "Who are we?",
    aflt_maritime: "AFLT Maritime",
    aflt_desc_1: "AFLT Maritime \"Algeria Facility Logistics & Transport Maritime\" stands as a key player in the revival of the Algerian maritime sector. Specialized in maritime and logistics services, the company actively contributes to the sector's recovery through strategic partnerships with international operators, including GNV - Grandi Navi Veloci.",
    aflt_desc_2: "Founded in 2017 in Algiers, AFLT Maritime provides integrated logistics, forwarding, customs clearance, warehousing and multimodal transport solutions, ensuring reliability and performance nationwide and internationally. As a general agent, AFLT Maritime helps strengthen links between Algeria and Europe in support of mobility, trade and maritime tourism.",

    our_services: "Our services",
    services_title: "Our services and solutions",
    logistic_transit_international: "International Logistics & Forwarding",
    logistic_transit_international_desc: "Planning and managing international forwarding operations, including documentation, regulatory compliance and logistics chain coordination, to ensure secure, optimized and controlled flows.",
    transport_multimodal: "Multimodal transport",
    transport_multimodal_desc: "Design and implementation of multimodal transport solutions combining complementary modes when needed, with an integrated approach focused on optimizing cost, lead time and operational risk.",
    fret_maritime: "Sea freight",
    fret_maritime_desc: "Integrated management of import-export sea freight operations, including space booking, port coordination, shipment follow-up and compliance with customs and international regulations.",
    service_ticketing: "GNV ticketing",
    service_ticketing_desc: "As GNV's exclusive general agent in Algeria, AFLT Maritime handles ticketing and passenger reservation coordination on the Sète - Béjaïa - Sète and Sète - Algiers - Sète routes.",
    service_port_logistics: "Port handling and logistics",
    service_port_logistics_desc: "Management of loading, unloading, stowage and cargo handling operations, complemented by freight follow-up and the customs procedures required for port transit.",
    service_port_assistance: "Port agency and assistance",
    service_port_assistance_desc: "Administrative management of vessel calls with the competent authorities, assistance to the captain and crew during the call, and coordination of port operations in line with safety procedures and regulatory requirements.",

    book_ticket: "Book your ticket",
    title_1: "Your GNV ticket,",
    title_2: "wherever you are!",
    desc_1: "Visit our offices in Algiers or Béjaïa, stop by our accredited agencies between Algiers and Béjaïa, or book online at www.gnv.it.",
    savoir_plus: "Need help",

    contactez_nous: "Contact us",
    assistance_24_7: "Customer support",
    nom_prenom: "First and last name",
    email: "Email",
    telephone: "Phone",
    pays: "Country",
    message: "Message",
    envoyer: "Send",
    adress_2: "Ground Floor BT C08 SECT 03 LOT 29, Val d'Hydra, Algiers",
    port_alger: "Port of Algiers, Algiers",
    port_bejaia: "Port of Béjaïa, Béjaïa",
    bejaia_agency: "Béjaïa agency: 12, avenue Ben Boulaid - Béjaïa",

    nos_destinations: "Our destinations",
    destination_desc: "Travel comfortably to and from Algeria with GNV",
    destination_title1: "Sète - Algiers",
    destination_title2: "Sète - Béjaïa",
    destination_title3: "Third city: coming soon",
    destination_title_desc: "Ferries to/from Sète",

    faq_title: "FAQ",
    faq_subtitle: "Frequently asked questions",
    faq_q1: "How can I book a ticket with AFLT Maritime?",
    faq_a1: "You can book:<ul><li>at our offices in Algiers and Béjaïa and through our accredited agencies;</li><li>online through our official website www.gnv.it.</li></ul>",
    faq_q2: "Which payment methods are accepted?",
    faq_a2: "<ul><li>Payment by certified cheque or cash.</li></ul>",
    faq_q3: "What schedules and ports are served?",
    faq_a3: "Our lines serve the ports of Sète, Algiers and Béjaïa. Schedules and served ports are available in the Schedules and bookings section.",
    faq_q4: "What are the cancellation and refund policies?",
    faq_a4: "Conditions vary depending on the type of service (passenger or freight). Please check our general terms or contact customer service for details.",
    faq_q5: "Is priority disembarkation available?",
    faq_a5: "Yes, it is available for passengers who book it when purchasing their ticket. It allows you to:<ul><li>access a dedicated boarding area;</li><li>board immediately or wait in your vehicle;</li><li>disembark first on arrival to save time.</li></ul>",
    faq_q6: "Does AFLT Maritime offer solutions for businesses?",
    faq_a6: "Yes. We provide tailored services for businesses, including:<ul><li>sea freight for goods transport;</li><li>port logistics for operations management;</li><li>multimodal and forwarding services for logistics and customs flow coordination.</li></ul>",
    faq_q7: "How can I become an accredited AFLT Maritime / GNV agency?",
    faq_a7: "To become an accredited AFLT Maritime / GNV agency, you must meet compliance and commercial capability criteria.<ul><li>Submit an official request through our sales department.</li><li>Provide legal and financial information about your company.</li><li>Comply with AFLT Maritime & GNV collaboration terms and standards.</li></ul>After approval, you will receive an official accreditation agreement and will be able to sell AFLT Maritime / GNV ticketing services to your clients.",

    press_review: "Press review",
    read_more: "Read more",
    privacy_policy: "Privacy policy",
    sales_conditions: "Terms of sale",
    newsletter_subtext: "Receive our latest updates",

    nos_rubriques: "Our sections",
    droits_reserv: "All rights reserved.",
    plan_site: "Sitemap",
    cond_util: "Terms of use",
    ment_legal: "Legal notice",
    res_soc: "Social media",
    abonn: "Subscribe",
    copyrights: "Copyright 2026",
    tap_mail: "Enter your email"
  },

  ar: {
    about: "من نحن",
    services: "الخدمات",
    destinations: "الوجهات",
    news: "الأخبار",
    contact: "تواصل معنا",
    contact_button: "اتصل بنا",
    contact_modal_title: "تواصل معنا",
    search_placeholder: "ابحث...",
    search_title: "بحث",
    success_title: "تم بنجاح",
    success_message: "تم إرسال رسالتك بنجاح.",
    phone_label: "الهاتف",
    ser_pres:"خدماتنا وعروضنا",

    offres_algeria: "عروض الجزائر",
    slide_1_title: "Algeria Facility Logistics<br>النقل البحري",
    slide_1_badge: "الوكيل العام",
    slide_2_title: "سافر براحة<br>وفي الموعد",
    slide_2_cta: "المواعيد والحجوزات",
    slide_3_title: "حجز GNV | الشحن البحري |<br>الميناء واللوجستيك | النقل المتعدد والترانزيت",
    slide_3_cta: "كتيبنا",

    who_are_we: "من نحن؟",
    aflt_maritime: "AFLT Maritime",
    aflt_desc_1: "تُعد شركة AFLT Maritime \"Algeria Facility Logistics & Transport Maritime\" فاعلاً أساسياً في نهضة القطاع البحري الجزائري. وبفضل تخصصها في الخدمات البحرية واللوجستية، تساهم الشركة بفعالية في إنعاش القطاع من خلال شراكات استراتيجية مع شركات دولية، من بينها GNV - Grandi Navi Veloci.",
    aflt_desc_2: "تأسست الشركة سنة 2017 في الجزائر العاصمة، وتقدم حلولاً متكاملة في اللوجستيك والعبور والتخليص الجمركي والتخزين والنقل متعدد الوسائط، مع ضمان الموثوقية والأداء على المستوى الوطني والدولي. وبصفتها وكيلاً عاماً، تعمل AFLT Maritime على تعزيز الروابط بين الجزائر وأوروبا خدمةً للتنقل والتجارة والسياحة البحرية.",

    our_services: "خدماتنا",
    services_title: "خدماتنا وحلولنا",
    logistic_transit_international: "اللوجستيك والعبور الدولي",
    logistic_transit_international_desc: "تنظيم وتسيير عمليات العبور الدولي، بما يشمل إدارة الوثائق والامتثال التنظيمي وتنسيق مختلف الفاعلين في سلسلة الإمداد، لضمان تدفقات آمنة ومحسنة ومضبوطة.",
    transport_multimodal: "النقل متعدد الوسائط",
    transport_multimodal_desc: "تصميم وتنفيذ حلول للنقل متعدد الوسائط تجمع بين وسائل نقل متكاملة حسب الحاجة، ضمن مقاربة موحدة تهدف إلى تحسين التكاليف والآجال وتقليل المخاطر التشغيلية.",
    fret_maritime: "الشحن البحري",
    fret_maritime_desc: "إدارة متكاملة لعمليات الشحن البحري للاستيراد والتصدير، تشمل حجز المساحات والتنسيق المينائي والمتابعة التشغيلية للشحنات والالتزام باللوائح الجمركية والدولية.",
    service_ticketing: "حجز تذاكر GNV",
    service_ticketing_desc: "بصفتها الوكيل العام الحصري لشركة GNV في الجزائر، تتولى AFLT Maritime حجز التذاكر وتنسيق حجوزات المسافرين على خطوط سيت - بجاية - سيت وسيت - الجزائر - سيت.",
    service_port_logistics: "المناولة واللوجستيك المينائي",
    service_port_logistics_desc: "التكفل بعمليات الشحن والتفريغ والرص والتداول، مع متابعة البضائع وإدارة الإجراءات الجمركية اللازمة لعبورها عبر الميناء.",
    service_port_assistance: "الوكالة والمساعدة المينائية",
    service_port_assistance_desc: "إدارة الجوانب الإدارية لتوقف السفن لدى الجهات المختصة، ومرافقة الربان والطاقم أثناء الرسو، وتنسيق العمليات المينائية وفق إجراءات السلامة والمتطلبات التنظيمية.",

    book_ticket: "احجز تذكرتك",
    title_1: "تذكرتك مع GNV،",
    title_2: "أينما كنت!",
    desc_1: "يمكنك زيارة مكاتبنا في الجزائر العاصمة أو بجاية، أو التوجه إلى وكالاتنا المعتمدة بين الجزائر وبجاية، أو الحجز عبر الإنترنت على www.gnv.it.",
    savoir_plus: "أحتاج إلى مساعدة",

    contactez_nous: "تواصل معنا",
    assistance_24_7: "خدمة العملاء",
    nom_prenom: "الاسم واللقب",
    email: "البريد الإلكتروني",
    telephone: "الهاتف",
    pays: "الدولة",
    message: "الرسالة",
    envoyer: "إرسال",
    adress_2: "الطابق الأرضي BT C08 القسم 03 القطعة 29، فال دو هيدرا، الجزائر",
    port_alger: "ميناء الجزائر، الجزائر",
    port_bejaia: "ميناء بجاية، بجاية",
    bejaia_agency: "وكالة بجاية: 12 شارع بن بولعيد - بجاية",

    nos_destinations: "وجهاتنا",
    destination_desc: "سافر براحة من الجزائر وإليها مع GNV",
    destination_title1: "سيت - الجزائر",
    destination_title2: "سيت - بجاية",
    destination_title3: "مدينة ثالثة: قريباً",
    destination_title_desc: "رحلات بحرية من/إلى سيت",

    faq_title: "الأسئلة الشائعة",
    faq_subtitle: "الأسئلة الأكثر تكراراً",
    faq_q1: "كيف يمكنني حجز تذكرة مع AFLT Maritime؟",
    faq_a1: "يمكنك الحجز:<ul><li>في مكاتبنا بالجزائر العاصمة وبجاية وعبر وكالاتنا المعتمدة؛</li><li>أو عبر موقعنا الرسمي www.gnv.it.</li></ul>",
    faq_q2: "ما هي وسائل الدفع المقبولة؟",
    faq_a2: "<ul><li>الدفع بشيك معتمد أو نقداً.</li></ul>",
    faq_q3: "ما هي المواعيد والموانئ التي يتم خدمتها؟",
    faq_a3: "تخدم خطوطنا موانئ سيت والجزائر وبجاية. ويمكن الاطلاع على المواعيد والموانئ المتاحة في قسم المواعيد والحجوزات.",
    faq_q4: "ما هي سياسات الإلغاء والاسترجاع؟",
    faq_a4: "تختلف الشروط حسب نوع الخدمة (مسافر أو شحن). يرجى الاطلاع على الشروط العامة أو التواصل مع خدمة العملاء للحصول على التفاصيل.",
    faq_q5: "هل تتوفر خدمة النزول بالأولوية؟",
    faq_a5: "نعم، الخدمة متاحة للمسافرين الذين يختارونها عند شراء التذكرة، وهي تتيح:<ul><li>الدخول إلى منطقة مخصصة للصعود؛</li><li>الصعود مباشرة أو الانتظار داخل السيارة؛</li><li>النزول أولاً عند الوصول لتوفير الوقت.</li></ul>",
    faq_q6: "هل تقدم AFLT Maritime حلولاً للشركات؟",
    faq_a6: "نعم. نقدم خدمات مخصصة للشركات، منها:<ul><li>الشحن البحري لنقل البضائع؛</li><li>اللوجستيك المينائي لإدارة العمليات؛</li><li>النقل المتعدد والترانزيت لتنسيق التدفقات اللوجستية والجمركية.</li></ul>",
    faq_q7: "كيف أصبح وكالة معتمدة لدى AFLT Maritime / GNV؟",
    faq_a7: "لكي تصبح وكالة معتمدة لدى AFLT Maritime / GNV، يجب استيفاء معايير الامتثال والقدرة التجارية.<ul><li>تقديم طلب رسمي عبر القسم التجاري.</li><li>توفير المعلومات القانونية والمالية الخاصة بمؤسستك.</li><li>الالتزام بشروط التعاون ومعايير AFLT Maritime وGNV.</li></ul>بعد الموافقة، ستحصل على اعتماد رسمي ويمكنك تسويق خدمات التذاكر الخاصة بـ AFLT Maritime / GNV لعملائك.",

    press_review: "الصحافة",
    read_more: "اقرأ المزيد",
    privacy_policy: "سياسة الخصوصية",
    sales_conditions: "شروط البيع",
    newsletter_subtext: "تابع آخر أخبارنا",

    nos_rubriques: "أقسامنا",
    droits_reserv: "جميع الحقوق محفوظة.",
    plan_site: "خريطة الموقع",
    cond_util: "شروط الاستخدام",
    ment_legal: "إشعار قانوني",
    res_soc: "وسائل التواصل الاجتماعي",
    abonn: "اشتراك",
    copyrights: "حقوق النشر 2026",
    tap_mail: "أدخل بريدك الإلكتروني"
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
  const desktopSelect = document.getElementById('languageSelect');
  const mobileSelect = document.getElementById('languageSelectMobile');
  if (desktopSelect) desktopSelect.value = lang;
  if (mobileSelect) mobileSelect.value = lang;
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

  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    if (translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) {
      element.placeholder = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    if (translations[currentLang][key]) {
      element.title = translations[currentLang][key];
    }
  });
  
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl-mode', currentLang === 'ar');
}

/**
 * Ajouter les styles RTL au document
 */
function addRTLStyles() {
  if (!document.getElementById('rtl-styles')) {
    const style = document.createElement('style');
    style.id = 'rtl-styles';
    style.textContent = `
      html[dir="rtl"] {
        direction: rtl;
      }

      html[dir="rtl"] body {
        direction: rtl;
        text-align: right;
      }

      html[dir="rtl"] .st__menu__wrap,
      html[dir="rtl"] .st__header__right,
      html[dir="rtl"] .st__contact__meta__inner,
      html[dir="rtl"] .slider-content,
      html[dir="rtl"] .destination-info,
      html[dir="rtl"] .faq-question,
      html[dir="rtl"] .faq-answer,
      html[dir="rtl"] .contact-box,
      html[dir="rtl"] .st__book__info,
      html[dir="rtl"] .st__section__title,
      html[dir="rtl"] .st__service__content,
      html[dir="rtl"] .about__list,
      html[dir="rtl"] .search-form-inline {
        text-align: right;
      }

      html[dir="rtl"] input,
      html[dir="rtl"] textarea,
      html[dir="rtl"] select,
      html[dir="rtl"] form {
        direction: rtl;
        text-align: right;
      }

      html[dir="rtl"] .st__main__menu,
      html[dir="rtl"] .st__contact__meta__inner,
      html[dir="rtl"] .st-contact-content,
      html[dir="rtl"] .slider-rect,
      html[dir="rtl"] .st__about__wrap,
      html[dir="rtl"] .right__all__content {
        left: auto;
        right: 0;
        margin-left: 0;
      }

      html[dir="rtl"] .main__menu ul {
        display: flex;
        flex-wrap: wrap;
      }

      html[dir="rtl"] .main__menu ul li a,
      html[dir="rtl"] .st-header-top-info ul li,
      html[dir="rtl"] .st-header-top-social span,
      html[dir="rtl"] .st-header-top-social ul li,
      html[dir="rtl"] .st__footer__copyright__link ul li {
        margin-right: 0;
        margin-left: 24px;
      }

      html[dir="rtl"] .st-service-area.style2 .st__service__icon__two {
        left: auto;
        right: 0;
      }

      html[dir="rtl"] .st__service__content p,
      html[dir="rtl"] .about__list p,
      html[dir="rtl"] .faq-answer p,
      html[dir="rtl"] .faq-answer li {
        text-align: right !important;
      }

      html[dir="rtl"] .slider-rect {
        margin-left: 0;
        margin-right: 40px;
      }

      html[dir="rtl"] .slide-badge-row {
        padding-left: 0 !important;
        padding-right: 50px !important;
        flex-direction: row-reverse;
      }

      html[dir="rtl"] .faq-question {
        flex-direction: row-reverse;
      }

      html[dir="rtl"] .search-popup {
        right: auto;
        left: 0;
      }

      html[dir="rtl"] .st__form__box i,
      html[dir="rtl"] .nice-select:after {
        right: auto;
        left: 20px;
      }

      html[dir="rtl"] .st__form__box input,
      html[dir="rtl"] .st__subscribe__form input,
      html[dir="rtl"] .st__footer__subscribe__form input {
        padding-left: 20px;
        padding-right: 32px;
      }

      html[dir="rtl"] .st__subscribe__form button,
      html[dir="rtl"] .st__footer__subscribe__form button {
        right: auto;
        left: 0;
      }

      html[dir="rtl"] .st-contact-content,
      html[dir="rtl"] .st__about__iconcontent,
      html[dir="rtl"] .blogdetails__meta__content,
      html[dir="rtl"] .sidebar__blog__content {
        margin-left: 0;
        margin-right: 20px;
      }

      html[dir="rtl"] .st__about__iconbox {
        border-left: none;
        border-right: 5px solid var(--st-theme-color-one);
      }

      html[dir="rtl"] .about__list li {
        padding-left: 0;
        padding-right: 28px;
      }

      html[dir="rtl"] .about__list li::before {
        left: auto;
        right: 2px;
      }

      html[dir="rtl"] .about__list li::after {
        left: auto;
        right: -1px;
      }

      @media (max-width: 991px) {
        html[dir="rtl"] .slider-rect {
          margin-right: 0;
        }

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
  const desktopSelect = document.getElementById('languageSelect');
  const mobileSelect = document.getElementById('languageSelectMobile');
  if (desktopSelect) desktopSelect.value = currentLang;
  if (mobileSelect) mobileSelect.value = currentLang;
  updatePageLanguage();
});


