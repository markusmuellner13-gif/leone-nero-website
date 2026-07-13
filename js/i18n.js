/*!
 * Leone Nero S.r.l. — Internationalisation  (EN / IT)
 * Elements with data-i18n-key="key" are translated on language switch.
 * Elements that contain HTML (links, <br>, spans) also need data-i18n-html.
 */
(function () {
  'use strict';

  var T = {
    en: {
      /* ── NAV ── */
      'nav.home'            : 'Home',
      'nav.services'        : 'Services',
      'nav.projects'        : 'Projects',
      'nav.about'           : 'About',
      'nav.contact.cta'     : 'Contact Us',

      /* ── HERO ── */
      'hero.badge'          : 'Crafting the Future of Software',
      'hero.line1'          : 'We Build Software',
      'hero.line2'          : 'That Roars.',
      'hero.sub'            : 'Leone Nero S.r.l. delivers precision-engineered desktop software, mobile applications, and immersive mobile games — products that leave a mark.',
      'hero.btn.work'       : 'View Our Work',
      'hero.btn.contact'    : 'Get in Touch',
      'hero.scroll'         : 'Scroll',

      /* ── STATS ── */
      'stats.products'      : 'Products Released',
      'stats.users'         : 'Active Users',
      'stats.rating'        : 'Average App Rating',
      'stats.years'         : 'Years of Excellence',

      /* ── SERVICES ── */
      'svc.label'           : 'What We Do',
      'svc.title'           : 'Built With Purpose.­Shipped With Pride.',
      'svc.desc'            : 'From enterprise desktop suites to hit mobile games — we cover the full spectrum of modern software.',
      'svc.desktop.title'   : 'Desktop Software',
      'svc.desktop.desc'    : 'High-performance native applications for Windows and macOS. We engineer productivity tools, security suites, and professional utilities built to enterprise standards.',
      'svc.mobile.title'    : 'Mobile Applications',
      'svc.mobile.desc'     : 'Beautiful, fast iOS and Android apps from scratch. We handle design, engineering, and App Store / Google Play submission — end to end.',
      'svc.games.title'     : 'Mobile Games',
      'svc.games.desc'      : 'Immersive mobile gaming experiences with polished visuals, tight mechanics, and live-ops support. We build games people actually play.',
      'svc.cloud.title'     : 'Cloud & Backend',
      'svc.cloud.desc'      : 'Scalable API infrastructure, cloud deployments, and backend systems that power our products and client platforms around the clock.',
      'svc.security.title'  : 'Security Software',
      'svc.security.desc'   : 'Enterprise-grade data protection tools — encryption, access control, and compliance dashboards built to the strictest industry standards.',
      'svc.consult.title'   : 'Software Consulting',
      'svc.consult.desc'    : 'Architecture audits, performance optimization, and strategic roadmap planning for teams that demand the highest quality deliverables.',

      /* ── PROJECTS ── */
      'proj.label'          : 'Our Portfolio',
      'proj.title'          : 'Products We\'ve Shipped',
      'proj.desc'           : 'Click any project to explore — real products, real users, real impact.',
      'proj.cw.cat'         : 'Browser Game',
      'proj.cw.desc'        : 'Solve crosswords in English and German with points and levels. A polished word-puzzle experience built with TypeScript and deployed on Vercel.',
      'proj.hoop.cat'       : 'Browser Game',
      'proj.hoop.desc'      : 'Fast-paced basketball browser game built in JavaScript. Jump into the action directly from your browser — no install required. Hosted on GitHub Pages.',
      'proj.kart.cat'       : 'Browser Game',
      'proj.kart.desc'      : 'A browser-based karting race game with multiplayer co-op, two unique tracks, and three distinct karts. Pure JavaScript racing action, no install needed.',
      'proj.poly.cat'       : 'Mobile App',
      'proj.poly.desc'      : 'AI-powered studying app — learn anything with XP, streaks, and instant explanations. Built with TypeScript and React Native for a seamless cross-platform experience.',
      'proj.pixel.cat'      : 'Browser Game',
      'proj.pixel.desc'     : 'A pixel-art 2D platformer — leap, explore, and conquer. Gorgeous retro visuals, tight controls, and handcrafted levels built entirely in JavaScript.',
      'proj.nova.cat'       : 'Social App',
      'proj.nova.desc'      : 'A modern social application built with TypeScript and deployed on Vercel. A sleek, fast, and beautifully designed social networking experience.',
      'proj.settlers.cat'   : 'Browser Game',
      'proj.settlers.desc'  : 'Build roads, found settlements, and master the island in this strategy board game for your browser. Trade resources, outsmart rivals, and install it as a PWA to play anywhere.',
      'proj.penta.cat'      : 'Browser Game',
      'proj.penta.desc'     : 'Five letters, six tries. A sleek daily word-puzzle game that keeps your streak alive — fast, minimal, and installable as a PWA so your next puzzle is always one tap away.',
      'proj.spin.cat'       : 'Browser Game',
      'proj.spin.desc'      : 'A roguelike slot machine — spin the reels, draft symbols, and beat the rent floor after floor. Play-money only, daily seeds, endless strategies. Install it and spin anywhere.',
      'proj.lumen.cat'      : 'Faith App',
      'proj.lumen.desc'     : 'A Catholic Bible & prayer companion — daily readings, prayers, and spiritual guidance in a beautifully calm interface. Installable as a PWA for Scripture wherever you are.',
      'proj.glim.cat'       : 'Browser Game',
      'proj.glim.desc'      : 'A neon 2D auto-shooter roguelite. Survive escalating waves, level up mid-run, unlock 15 characters, and bank Glimmer for permanent upgrades. Install it and bonk on the go.',
      'proj.surge.cat'      : 'Browser Game',
      'proj.surge.desc'     : 'A lightning-fast merge-drop puzzle — drop numbered tiles, chain merges, and ride the surge to ever-bigger numbers. Built with Next.js and installable as a PWA.',
      'proj.pit.cat'        : 'Sports App',
      'proj.pit.desc'       : 'Formula 1 live timing & stats in your pocket — sessions, standings, and race data in a sharp pit-wall interface. Built with Next.js and installable as a PWA.',
      'proj.cta.github'     : 'View on GitHub',
      'proj.cta.play'       : 'Play Now',
      'proj.cta.open'       : 'Open App',
      'proj.store.soon'     : 'Coming Soon on',

      /* ── ABOUT ── */
      'about.label'         : 'About Us',
      'about.title'         : 'The Black Lion<br/>Behind the Code',
      'about.p1'            : 'Leone Nero S.r.l. is an independent software house founded on a single conviction: exceptional software is not the result of luck — it is the product of relentless craft, clear vision, and the courage to pursue it.',
      'about.p2'            : 'We ship desktop applications, mobile apps, and games that earn their place on your device. Every product goes through rigorous design, engineering, and quality assurance cycles before it ever reaches a user.',
      'about.p3'            : 'Based in Italy, we operate globally. Our team consists of senior engineers, designers, and product strategists who refuse to settle for “good enough.”',
      'about.val1.title'    : 'Performance First',
      'about.val1.desc'     : 'We never ship bloated code. Every line is optimised for speed and efficiency.',
      'about.val2.title'    : 'Design That Matters',
      'about.val2.desc'     : 'UX and aesthetics are not afterthoughts — they are built into the architecture from day one.',
      'about.val3.title'    : 'Security by Default',
      'about.val3.desc'     : 'Privacy-first architecture, encrypted data handling, and rigorous security audits.',
      'about.cta'           : 'Full Company Story',

      /* ── QUOTE ── */
      'quote.text'          : '“We don’t just write code. We engineer experiences that respect the user’s time, intelligence, and trust.”',
      'quote.author'        : '— Leone Nero S.r.l. Engineering Manifesto',

      /* ── NEWS ── */
      'news.label'          : 'Latest',
      'news.title'          : 'Releases & Updates',
      'news.desc'           : 'What we\'ve been shipping lately — new launches, major updates, and project milestones.',

      /* ── CONTACT (inline section) ── */
      'contact.label'       : 'Get In Touch',
      'contact.title'       : 'Let\'s Build Something<br/>Extraordinary',
      'contact.desc'        : 'Whether you have a project in mind, a question about our products, or just want to say hello — we\'d love to hear from you.',
      'contact.info.title'  : 'Reach Us Directly',
      'contact.info.p'      : 'We respond to all inquiries within one business day. For urgent matters, reach us by phone during business hours (Mon–Fri, 9:00–18:00 CET).',
      'contact.email.lbl'   : 'Email',
      'contact.phone.lbl'   : 'Phone',
      'contact.addr.lbl'    : 'Address',
      'contact.hours.lbl'   : 'Business Hours',
      'contact.hours.val'   : 'Monday – Friday, 9:00 – 18:00 CET',
      'form.name.lbl'       : 'Full Name',
      'form.email.lbl'      : 'Email Address',
      'form.subject.lbl'    : 'Subject',
      'form.msg.lbl'        : 'Message',
      'form.subject.ph'     : 'Select a topic…',
      'form.opt.product'    : 'Product Inquiry',
      'form.opt.partner'    : 'Business Partnership',
      'form.opt.support'    : 'Support Request',
      'form.opt.press'      : 'Press & Media',
      'form.opt.other'      : 'Other',
      'form.submit'         : 'Send Message',
      'form.notice'         : 'Your information is never shared with third parties. See our <a href="privacy.html">Privacy Policy</a>.',
      'form.success'        : '✅  Thank you! We’ll be in touch within one business day.',

      /* ── FOOTER ── */
      'footer.brand.desc'   : 'Premium software engineering house. We build desktop apps, mobile applications, and games that define their category. Based in Milan, serving the world.',
      'footer.company'      : 'Company',
      'footer.col.about'    : 'About Us',
      'footer.col.services' : 'Services',
      'footer.col.projects' : 'Projects',
      'footer.col.contact'  : 'Contact',
      'footer.legal'        : 'Legal',
      'footer.terms'        : 'Terms of Service',
      'footer.privacy'      : 'Privacy Policy',
      'footer.cookies'      : 'Cookie Policy',
      'footer.follow'       : 'Follow Us',
      'footer.rights'       : 'All rights reserved.',
      'footer.terms.s'      : 'Terms',
      'footer.privacy.s'    : 'Privacy',
      'footer.cookies.s'    : 'Cookies',

      /* ── COOKIE BANNER ── */
      'cookie.text'         : 'We use cookies to improve your experience and analyse site usage. See our <a href="cookies.html">Cookie Policy</a> and <a href="privacy.html">Privacy Policy</a>.',
      'cookie.decline'      : 'Decline',
      'cookie.accept'       : 'Accept All',

      /* ── LANG TOGGLE ── */
      'lang.switch'         : 'IT'
    },

    it: {
      /* ── NAV ── */
      'nav.home'            : 'Home',
      'nav.services'        : 'Servizi',
      'nav.projects'        : 'Progetti',
      'nav.about'           : 'Chi Siamo',
      'nav.contact.cta'     : 'Contattaci',

      /* ── HERO ── */
      'hero.badge'          : 'Forgiamo il Futuro del Software',
      'hero.line1'          : 'Costruiamo Software',
      'hero.line2'          : 'Che Ruggisce.',
      'hero.sub'            : 'Leone Nero S.r.l. realizza software desktop di precisione, applicazioni mobile e giochi coinvolgenti — prodotti che lasciano il segno.',
      'hero.btn.work'       : 'Vedi i Nostri Lavori',
      'hero.btn.contact'    : 'Contattaci',
      'hero.scroll'         : 'Scorri',

      /* ── STATS ── */
      'stats.products'      : 'Prodotti Pubblicati',
      'stats.users'         : 'Utenti Attivi',
      'stats.rating'        : 'Valutazione Media',
      'stats.years'         : 'Anni di Eccellenza',

      /* ── SERVICES ── */
      'svc.label'           : 'Cosa Facciamo',
      'svc.title'           : 'Costruiti con Scopo. Lanciati con Orgoglio.',
      'svc.desc'            : 'Dalle suite desktop aziendali ai giochi mobile di successo — copriamo l’intero spettro del software moderno.',
      'svc.desktop.title'   : 'Software Desktop',
      'svc.desktop.desc'    : 'Applicazioni native ad alte prestazioni per Windows e macOS. Sviluppiamo strumenti di produttività, suite di sicurezza e utility professionali a standard enterprise.',
      'svc.mobile.title'    : 'Applicazioni Mobile',
      'svc.mobile.desc'     : 'App iOS e Android bellissime e veloci sviluppate da zero. Gestiamo design, ingegneria e pubblicazione sull’App Store / Google Play — dall’inizio alla fine.',
      'svc.games.title'     : 'Giochi Mobile',
      'svc.games.desc'      : 'Esperienze di gioco mobile coinvolgenti con visual curati, meccaniche precise e supporto live-ops. Creiamo giochi che le persone giocano davvero.',
      'svc.cloud.title'     : 'Cloud & Backend',
      'svc.cloud.desc'      : 'Infrastruttura API scalabile, deployment cloud e sistemi backend che alimentano i nostri prodotti e le piattaforme dei clienti senza interruzioni.',
      'svc.security.title'  : 'Software di Sicurezza',
      'svc.security.desc'   : 'Strumenti di protezione dati enterprise — crittografia, controllo degli accessi e dashboard di conformità ai più severi standard del settore.',
      'svc.consult.title'   : 'Consulenza Software',
      'svc.consult.desc'    : 'Audit architetturali, ottimizzazione delle prestazioni e pianificazione strategica della roadmap per team che esigono deliverable della massima qualità.',

      /* ── PROJECTS ── */
      'proj.label'          : 'Il Nostro Portfolio',
      'proj.title'          : 'Prodotti Che Abbiamo Lanciato',
      'proj.desc'           : 'Clicca su un progetto per esplorarlo — prodotti reali, utenti reali, impatto reale.',
      'proj.cw.cat'         : 'Gioco Browser',
      'proj.cw.desc'        : 'Risolvi parole crociate in inglese e tedesco con punti e livelli. Un’esperienza di puzzle verbale curata costruita con TypeScript e distribuita su Vercel.',
      'proj.hoop.cat'       : 'Gioco Browser',
      'proj.hoop.desc'      : 'Gioco di basket veloce per browser costruito in JavaScript. Tuffati nell’azione direttamente dal browser — nessuna installazione richiesta. Ospitato su GitHub Pages.',
      'proj.kart.cat'       : 'Gioco Browser',
      'proj.kart.desc'      : 'Gioco di karting browser con multiplayer co-op, due piste uniche e tre kart distinti. Pura azione di corsa in JavaScript, senza installazione.',
      'proj.poly.cat'       : 'App Mobile',
      'proj.poly.desc'      : 'App di studio potenziata dall’IA — impara qualsiasi cosa con XP, streak e spiegazioni istantanee. Costruita con TypeScript e React Native per un’esperienza multi-piattaforma.',
      'proj.pixel.cat'      : 'Gioco Browser',
      'proj.pixel.desc'     : 'Platform 2D pixel-art — salta, esplora e conquista. Visual retrò splendidi, controlli precisi e livelli artigianali costruiti interamente in JavaScript.',
      'proj.nova.cat'       : 'App Social',
      'proj.nova.desc'      : 'Un’applicazione social moderna costruita con TypeScript e distribuita su Vercel. Un’esperienza di social networking elegante, veloce e splendidamente progettata.',
      'proj.settlers.cat'   : 'Gioco Browser',
      'proj.settlers.desc'  : 'Costruisci strade, fonda insediamenti e conquista l’isola in questo gioco da tavolo strategico per browser. Scambia risorse, supera i rivali e installalo come PWA per giocare ovunque.',
      'proj.penta.cat'      : 'Gioco Browser',
      'proj.penta.desc'     : 'Cinque lettere, sei tentativi. Un elegante gioco di parole quotidiano che mantiene viva la tua streak — veloce, minimale e installabile come PWA: il prossimo puzzle è sempre a un tocco.',
      'proj.spin.cat'       : 'Gioco Browser',
      'proj.spin.desc'      : 'Una slot machine roguelike — gira i rulli, scegli i simboli e batti l’affitto piano dopo piano. Solo denaro virtuale, seed giornalieri, strategie infinite. Installala e gira ovunque.',
      'proj.lumen.cat'      : 'App di Fede',
      'proj.lumen.desc'     : 'Un compagno cattolico di Bibbia e preghiera — letture quotidiane, preghiere e guida spirituale in un’interfaccia serena e curata. Installabile come PWA per la Scrittura ovunque tu sia.',
      'proj.glim.cat'       : 'Gioco Browser',
      'proj.glim.desc'      : 'Un auto-shooter roguelite 2D al neon. Sopravvivi a ondate crescenti, sali di livello durante la run, sblocca 15 personaggi e accumula Glimmer per potenziamenti permanenti. Installalo e gioca ovunque.',
      'proj.surge.cat'      : 'Gioco Browser',
      'proj.surge.desc'     : 'Un puzzle merge-drop fulmineo — lascia cadere tessere numerate, concatena fusioni e cavalca la scarica verso numeri sempre più grandi. Costruito con Next.js e installabile come PWA.',
      'proj.pit.cat'        : 'App Sportiva',
      'proj.pit.desc'       : 'Cronometraggio live e statistiche di Formula 1 in tasca — sessioni, classifiche e dati di gara in un’interfaccia da muretto box. Costruita con Next.js e installabile come PWA.',
      'proj.cta.github'     : 'Vedi su GitHub',
      'proj.cta.play'       : 'Gioca Ora',
      'proj.cta.open'       : 'Apri App',
      'proj.store.soon'     : 'Prossimamente su',

      /* ── ABOUT ── */
      'about.label'         : 'Chi Siamo',
      'about.title'         : 'Il Leone Nero<br/>Dietro il Codice',
      'about.p1'            : 'Leone Nero S.r.l. è una software house indipendente fondata su una sola convinzione: il software eccezionale non è frutto della fortuna — è il prodotto di un artigianato instancabile, una visione chiara e il coraggio di perseguirla.',
      'about.p2'            : 'Distribuiamo applicazioni desktop, app mobile e giochi che meritano il loro posto sul tuo dispositivo. Ogni prodotto attraversa rigorosi cicli di design, ingegneria e controllo qualità prima di raggiungere un utente.',
      'about.p3'            : 'Con sede in Italia, operiamo a livello globale. Il nostro team è composto da ingegneri senior, designer e product strategist che rifiutano di accontentarsi del “abbastanza buono”.',
      'about.val1.title'    : 'Performance Prima di Tutto',
      'about.val1.desc'     : 'Non distribuiamo mai codice gonfiato. Ogni riga è ottimizzata per velocità ed efficienza.',
      'about.val2.title'    : 'Design Che Conta',
      'about.val2.desc'     : 'UX ed estetica non sono ripensamenti — sono integrati nell’architettura fin dal primo giorno.',
      'about.val3.title'    : 'Sicurezza per Default',
      'about.val3.desc'     : 'Architettura privacy-first, gestione dei dati crittografata e rigorosi audit di sicurezza.',
      'about.cta'           : 'La Storia Completa',

      /* ── QUOTE ── */
      'quote.text'          : '“Non scriviamo solo codice. Progettiamo esperienze che rispettano il tempo, l’intelligenza e la fiducia dell’utente.”',
      'quote.author'        : '— Manifesto Ingegneristico di Leone Nero S.r.l.',

      /* ── NEWS ── */
      'news.label'          : 'Ultime Novità',
      'news.title'          : 'Rilasci & Aggiornamenti',
      'news.desc'           : 'Cosa abbiamo lanciato di recente — nuovi prodotti, aggiornamenti importanti e traguardi.',

      /* ── CONTACT ── */
      'contact.label'       : 'Contattaci',
      'contact.title'       : 'Costruiamo Qualcosa<br/>di Straordinario',
      'contact.desc'        : 'Che tu abbia un progetto in mente, una domanda sui nostri prodotti, o voglia semplicemente salutarci — siamo felici di sentirti.',
      'contact.info.title'  : 'Contattaci Direttamente',
      'contact.info.p'      : 'Rispondiamo a tutte le richieste entro un giorno lavorativo. Per questioni urgenti, contattaci telefonicamente durante gli orari di ufficio (Lun–Ven, 9:00–18:00 CET).',
      'contact.email.lbl'   : 'Email',
      'contact.phone.lbl'   : 'Telefono',
      'contact.addr.lbl'    : 'Indirizzo',
      'contact.hours.lbl'   : 'Orari d’Ufficio',
      'contact.hours.val'   : 'Lunedì – Venerdì, 9:00 – 18:00 CET',
      'form.name.lbl'       : 'Nome Completo',
      'form.email.lbl'      : 'Indirizzo Email',
      'form.subject.lbl'    : 'Oggetto',
      'form.msg.lbl'        : 'Messaggio',
      'form.subject.ph'     : 'Seleziona un argomento…',
      'form.opt.product'    : 'Informazioni sul Prodotto',
      'form.opt.partner'    : 'Partnership Commerciale',
      'form.opt.support'    : 'Richiesta di Supporto',
      'form.opt.press'      : 'Stampa & Media',
      'form.opt.other'      : 'Altro',
      'form.submit'         : 'Invia Messaggio',
      'form.notice'         : 'Le tue informazioni non vengono mai condivise con terze parti. Consulta la nostra <a href="privacy.html">Informativa sulla Privacy</a>.',
      'form.success'        : '✅  Grazie! Ti ricontatteremo entro un giorno lavorativo.',

      /* ── FOOTER ── */
      'footer.brand.desc'   : 'Software house di alto livello. Costruiamo app desktop, applicazioni mobile e giochi che definiscono la loro categoria. Con sede a Milano, serviamo il mondo.',
      'footer.company'      : 'Azienda',
      'footer.col.about'    : 'Chi Siamo',
      'footer.col.services' : 'Servizi',
      'footer.col.projects' : 'Progetti',
      'footer.col.contact'  : 'Contatto',
      'footer.legal'        : 'Legale',
      'footer.terms'        : 'Termini di Servizio',
      'footer.privacy'      : 'Informativa sulla Privacy',
      'footer.cookies'      : 'Informativa sui Cookie',
      'footer.follow'       : 'Seguici',
      'footer.rights'       : 'Tutti i diritti riservati.',
      'footer.terms.s'      : 'Termini',
      'footer.privacy.s'    : 'Privacy',
      'footer.cookies.s'    : 'Cookie',

      /* ── COOKIE BANNER ── */
      'cookie.text'         : 'Utilizziamo i cookie per migliorare la tua esperienza e analizzare l’utilizzo del sito. Consulta la nostra <a href="cookies.html">Informativa sui Cookie</a> e l’<a href="privacy.html">Informativa sulla Privacy</a>.',
      'cookie.decline'      : 'Rifiuta',
      'cookie.accept'       : 'Accetta Tutto',

      /* ── LANG TOGGLE ── */
      'lang.switch'         : 'EN'
    }
  };

  var LANG_KEY = 'ln_lang';
  var currentLang = 'en';

  function applyLang(lang) {
    if (!T[lang]) return;
    currentLang = lang;
    var t = T[lang];

    document.querySelectorAll('[data-i18n-key]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-key');
      if (!(key in t)) return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    });

    /* Update select placeholders */
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (key in t) el.placeholder = t[key];
    });

    document.documentElement.lang = lang;

    /* Update toggle button label */
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      var lbl = btn.querySelector('.lang-label');
      if (lbl) lbl.textContent = t['lang.switch'];
    }

    try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
  }

  function toggleLang() {
    applyLang(currentLang === 'en' ? 'it' : 'en');
  }

  /* Initialise after DOM ready */
  function init() {
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', toggleLang);

    var stored;
    try { stored = localStorage.getItem(LANG_KEY); } catch (_) {}
    if (stored && stored !== 'en') applyLang(stored);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.lnI18n = { applyLang: applyLang, toggleLang: toggleLang };
})();
