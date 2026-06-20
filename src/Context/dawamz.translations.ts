import type { Language } from "./language";

export interface DawamzContent {
  backLink: string;
  eyebrow: string;
  subtitle: string; // supports **bold** markers for highlighted spans
  repoNote: string;
  tags: string[];

  why: {
    title: string;
    paragraphs: string[];
  };

  whatItDoes: {
    title: string;
    intro: string;
    coreFeaturesTitle: string;
    coreFeaturesList: string[];
    platformDiffTitle: string;
    platformDiffList: { label?: string; text: string }[];
    desktopCaption: string;
    mobileCaption: string;
  };

  twoBackends: {
    title: string;
    paragraphs: string[];
  };

  freshData: {
    title: string;
    intro: string;
    pipelineLabel: string;
    outro: string;
  };

  architecture: {
    title: string;
    mobileTitle: string;
    mobileText: string;
    webTitle: string;
    webText: string;
    sharedTitle: string;
    sharedText: string;
    dbTitle: string;
    dbText: string;
    structureMobileTitle: string;
    structureWebTitle: string;
  };

  challenges: {
    title: string;
    mapsTitle: string;
    mapsText: string;
    scheduleTitle: string;
    scheduleParagraphs: string[];
  };

  results: {
    title: string;
    stats: { num: string; label: string }[];
    paragraph: string;
  };

  whatIdChange: {
    title: string;
    list: string[];
  };

  stack: {
    title: string;
    rows: { label: string; value: string }[];
  };
}

export const dawamzTranslations: Record<Language, DawamzContent> = {
  en: {
    backLink: "← Back",
    eyebrow: "Case Study",
    subtitle:
      "Find the nearest open pharmacy in Morocco, right now. A multilingual pharmacy finder shipped as a native mobile app and a companion website, with **50,000+ installs** on the Play Store.",
    repoNote:
      "The data scraper that keeps pharmacy schedules up to date is kept private — it touches a third-party data source and I'd rather not publish that pipeline. The app and web repos are public.",
    tags: [
      "React Native",
      "Expo",
      "React",
      "Vite",
      "Supabase",
      "MapLibre",
      "Solo Project",
    ],

    why: {
      title: "Why I Built This",
      paragraphs: [
        "The idea had been in my head for a while. It started on a random day when my mother asked me to go check which pharmacy was on call that weekend. I thought — why do I have to go out in the heat to check something I should be able to look up on my phone? Then it hit me: is there even a way to do that?",
        "So I checked. I found a few apps with broken UIs and expired data. Since I was looking for a real project to work on after finishing MZNovels, I decided to build it myself. This was my first project built to solve an actual problem for people around me — and it set the direction for what I want to keep building: digital versions of services that don't have one yet.",
      ],
    },

    whatItDoes: {
      title: "What It Does",
      intro:
        "DawaMZ finds the closest open or on-call pharmacy to a user's location and gets them there — on a native app for the full experience, and on the web for quick, shareable lookups.",
      coreFeaturesTitle: "Core Features",
      coreFeaturesList: [
        "GPS-based nearest open-pharmacy detection",
        "Interactive map with light/dark tile styles matching the app theme",
        "Turn-by-turn routing, with a Google Maps fallback if no route is found",
        "Real-time open/closed status from weekly schedules, lunch breaks, night shifts, and on-call duty periods",
        "Tap-to-call and copy-address actions",
      ],
      platformDiffTitle: "Platform Differences",
      platformDiffList: [
        {
          label: "Mobile",
          text: "— full native experience: GPS routing, offline-friendly UI, dark mode, tile fallback to OpenStreetMap",
        },
        {
          label: "Web",
          text: "— built for discoverability: SEO-friendly region → city → pharmacy pages with shareable URLs",
        },
        { text: "Both — Arabic (RTL), French, and English support" },
        {
          text: "Both — community suggestions for missing pharmacies or cities",
        },
      ],
      desktopCaption: "dawamz.com — desktop",
      mobileCaption: "Mobile app — map view",
    },

    twoBackends: {
      title: "Two Platforms, One Backend",
      paragraphs: [
        "The mobile app and the website are two separate codebases — React Native + Expo for mobile, React + Vite for web — but they share a single Supabase project: same database, same schedule logic, same multilingual content. A pharmacy's open/closed status, hours, and translations are computed once and read by both platforms, so there's one source of truth instead of two systems drifting apart.",
        "This split let each platform focus on what it's actually good at. Mobile owns the experience that benefits from native APIs — GPS, maps, routing, offline-friendly UI, dark mode. Web owns discoverability — SEO-friendly URLs per region, city, and pharmacy, so a pharmacy page can be found and shared without installing anything.",
      ],
    },

    freshData: {
      title: "Keeping Pharmacy Data Fresh",
      intro:
        "Pharmacy and on-call schedule data is the core of the app, and keeping it current without manual upkeep was a priority from the start. A scheduled job handles this automatically:",
      pipelineLabel: "Daily scraper pipeline",
      outro:
        "For pharmacies or cities the scraper doesn't cover yet, both platforms include a suggestion system — users can submit a missing pharmacy or request a new city directly from the app or website, with rate limiting on the web form to prevent abuse. Anything submitted this way is reviewed and added through direct Supabase inserts.",
    },

    architecture: {
      title: "Technical Architecture",
      mobileTitle: "Mobile",
      mobileText:
        "Built with React Native and Expo (SDK 52) in TypeScript, using Expo Router for file-based navigation. Maps run on MapLibre GL with MapTiler for light and dark tile styles that match the app theme — if MapTiler tiles fail to load, the app silently falls back to OpenStreetMap so the map never breaks for the user. Routing is computed via OSRM and drawn as a polyline on the map; if OSRM can't find a route, the app falls back to opening Google Maps directly.",
      webTitle: "Web",
      webText:
        "Built with React 18, TypeScript, and Vite, styled with CSS Modules and deployed on Vercel. Routing uses React Router v6 with SEO-friendly slugs for the region → city → pharmacy hierarchy, and directions hand off to Google Maps with one tap.",
      sharedTitle: "Shared Logic",
      sharedText:
        'The "is this pharmacy open right now" calculation — accounting for weekly schedules, lunch breaks, night shifts, and on-call duty periods — is implemented independently on each platform but against the same underlying schedule data in Supabase, so both apps agree on a pharmacy\'s status at any given moment.',
      dbTitle: "Database",
      dbText:
        "PostgreSQL via Supabase, with Row Level Security enabled on every table. The public can read pharmacy and city data; writes go through the scraper pipeline or the moderated suggestion system. Key tables include regions, cities, pharmacies, and pharmacy_suggestions.",
      structureMobileTitle: "Project Structure (Mobile)",
      structureWebTitle: "Project Structure (Web)",
    },

    challenges: {
      title: "Challenges & Solutions",
      mapsTitle: "Maps That Don't Break",
      mapsText:
        "From working on MZNovels, I learned that everything behind a paywall has a free alternative — though nothing is truly free, and you have to know where to spend and where not to. I wanted to avoid Google Maps entirely because of the cost. My first attempt with React Maps crashed even without using Google Maps directly — it turned out React Maps calls the Google API under the hood and needs a key regardless. So I ditched it and switched to the open-source @maplibre/maplibre-react-native. It turned out beautifully: MapTiler handles the styled tiles, OpenStreetMap is the silent fallback if tiles fail, and OSRM handles routing with Google Maps as the last-resort fallback if no route is found.",
      scheduleTitle: "Schedule Logic Across Two Codebases",
      scheduleParagraphs: [
        "The trickiest part was keeping schedule logic consistent between the Python scraper and the JavaScript/TypeScript frontends. The scraper pulls fresh on-call data daily, but the format wasn't always matching what the frontend expected. I had to define a shared structure — essentially a contract between both codebases — so that a pharmacy's hours display correctly whether you're on Android or the web.",
        "Edge cases made this harder than expected: null for Sunday (many pharmacies are simply closed), multiple time slots in a single day like morning and afternoon shifts, and overnight on-call periods that span midnight. Each required careful parsing on both ends to avoid silent bugs where a pharmacy would show as open when it wasn't, or vice versa.",
      ],
    },

    results: {
      title: "Results & Impact",
      stats: [
        { num: "50K+", label: "Play Store Installs" },
        { num: "99", label: "Cities Covered" },
        { num: "10k+", label: "Pharmacies Tracked" },
        { num: "6 months", label: "Live & Operating" },
      ],
      paragraph:
        "The app reached 50,000+ installs on the Play Store purely through organic discovery — no paid promotion, no marketing budget. Users from across Morocco found it, rated it, and came back to it when they needed it, which is exactly what the app was built for.",
    },

    whatIdChange: {
      title: "What I'd Do Differently",
      list: [
        "Define the scraper output format as a strict schema from day one, rather than letting it evolve and then having to retrofit the frontend parser to match. A shared type definition — even just a JSON schema — would have caught format mismatches before they became runtime bugs.",
        "Evaluate map libraries earlier in the process. Switching from React Maps to MapLibre mid-build cost time that could have been avoided with a short spike at the start to test rendering, performance, and API key requirements before committing.",
      ],
    },

    stack: {
      title: "Tech Stack",
      rows: [
        {
          label: "Mobile",
          value: "React Native, Expo (SDK 52), TypeScript, Expo Router",
        },
        { label: "Web", value: "React 18, TypeScript, Vite, CSS Modules" },
        {
          label: "Backend / DB",
          value: "Supabase (PostgreSQL + Row Level Security)",
        },
        {
          label: "Maps & Routing",
          value: "MapLibre GL, MapTiler, OpenStreetMap, OSRM, Google Maps",
        },
        {
          label: "Automation",
          value: "Python scraper on GitHub Actions (private)",
        },
        { label: "Distribution", value: "EAS Build, Google Play, Vercel" },
      ],
    },
  },

  fr: {
    backLink: "← Retour",
    eyebrow: "Étude de cas",
    subtitle:
      "Trouvez la pharmacie ouverte la plus proche au Maroc, en temps réel. Un outil de recherche de pharmacies multilingue, disponible en application mobile native et en site web compagnon, avec **plus de 50 000 installations** sur le Play Store.",
    repoNote:
      "Le scraper qui maintient les horaires des pharmacies à jour reste privé, car il touche à une source de données tierce que je préfère ne pas exposer publiquement. Les dépôts de l'application et du site web, eux, sont publics.",
    tags: [
      "React Native",
      "Expo",
      "React",
      "Vite",
      "Supabase",
      "MapLibre",
      "Projet solo",
    ],

    why: {
      title: "Pourquoi ce projet",
      paragraphs: [
        "L'idée me trottait dans la tête depuis un moment. Tout est parti d'un jour banal où ma mère m'a demandé d'aller vérifier quelle pharmacie était de garde ce week-end. Je me suis dit : pourquoi sortir en pleine chaleur pour vérifier un truc que je devrais pouvoir consulter sur mon téléphone ? Puis je me suis posé la vraie question : est-ce qu'un moyen de faire ça existe seulement ?",
        "J'ai regardé. J'ai trouvé quelques applis avec des interfaces cassées et des données périmées. Comme je cherchais un vrai projet après MZNovels, j'ai décidé de le faire moi-même. C'était mon premier projet pensé pour régler un vrai problème de gens autour de moi, et ça a fixé une direction que je veux garder : créer des versions numériques de services qui n'en ont pas encore.",
      ],
    },

    whatItDoes: {
      title: "Ce que fait l'application",
      intro:
        "DawaMZ trouve la pharmacie ouverte ou de garde la plus proche et y conduit l'utilisateur : application native pour l'expérience complète, version web pour les recherches rapides et faciles à partager.",
      coreFeaturesTitle: "Fonctionnalités principales",
      coreFeaturesList: [
        "Détection GPS de la pharmacie ouverte la plus proche",
        "Carte interactive avec des styles de tuiles clair/sombre adaptés au thème de l'app",
        "Itinéraire pas à pas, avec repli sur Google Maps si aucun trajet n'est trouvé",
        "Statut ouvert/fermé en temps réel, calculé à partir des horaires hebdomadaires, pauses déjeuner, gardes de nuit et périodes de garde",
        "Appel et copie d'adresse en un tap",
      ],
      platformDiffTitle: "Différences entre plateformes",
      platformDiffList: [
        {
          label: "Mobile",
          text: "— expérience native complète : itinéraire GPS, interface pensée pour le hors-ligne, mode sombre, repli des tuiles vers OpenStreetMap",
        },
        {
          label: "Web",
          text: "— pensé pour le référencement : pages région → ville → pharmacie en URL propres et partageables",
        },
        { text: "Les deux — arabe (RTL), français et anglais" },
        {
          text: "Les deux — suggestions de la communauté pour les pharmacies ou villes manquantes",
        },
      ],
      desktopCaption: "dawamz.com — ordinateur",
      mobileCaption: "Application mobile — vue carte",
    },

    twoBackends: {
      title: "Deux plateformes, un seul backend",
      paragraphs: [
        "L'application mobile et le site web sont deux bases de code distinctes (React Native + Expo côté mobile, React + Vite côté web), mais elles partagent le même projet Supabase : même base de données, même logique d'horaires, même contenu multilingue. Le statut ouvert/fermé d'une pharmacie, ses horaires et ses traductions sont calculés une seule fois puis lus par les deux plateformes — une seule source de vérité, plutôt que deux systèmes qui finissent par diverger.",
        "Cette séparation laisse chaque plateforme se concentrer sur ce qu'elle fait bien. Le mobile prend en charge tout ce qui tire parti des API natives : GPS, cartes, itinéraires, interface hors-ligne, mode sombre. Le web prend en charge le référencement : des URL propres par région, ville et pharmacie, pour qu'une page pharmacie puisse être trouvée et partagée sans rien installer.",
      ],
    },

    freshData: {
      title: "Garder les données des pharmacies à jour",
      intro:
        "Les données de pharmacies et de gardes sont au cœur de l'app, et les garder à jour sans intervention manuelle était une priorité dès le départ. Une tâche planifiée s'en occupe automatiquement :",
      pipelineLabel: "Pipeline de scraping quotidien",
      outro:
        "Pour les pharmacies ou villes que le scraper ne couvre pas encore, les deux plateformes proposent un système de suggestion : on peut signaler une pharmacie manquante ou demander une nouvelle ville directement depuis l'app ou le site, avec une limite de requêtes sur le formulaire web contre les abus. Tout ce qui passe par là est vérifié puis ajouté à la main dans Supabase.",
    },

    architecture: {
      title: "Architecture technique",
      mobileTitle: "Mobile",
      mobileText:
        "Construite avec React Native et Expo (SDK 52) en TypeScript, avec Expo Router pour une navigation basée sur les fichiers. Les cartes tournent sur MapLibre GL avec MapTiler pour des tuiles claires et sombres assorties au thème de l'app — si les tuiles MapTiler ne chargent pas, l'app bascule silencieusement sur OpenStreetMap, pour que la carte ne plante jamais côté utilisateur. L'itinéraire est calculé via OSRM et tracé en polyligne sur la carte ; si OSRM ne trouve pas de trajet, l'app ouvre directement Google Maps en repli.",
      webTitle: "Web",
      webText:
        "Construit avec React 18, TypeScript et Vite, mis en forme avec des CSS Modules et déployé sur Vercel. Le routage passe par React Router v6, avec des URL propres pour la hiérarchie région → ville → pharmacie, et l'itinéraire bascule vers Google Maps en un tap.",
      sharedTitle: "Logique partagée",
      sharedText:
        "Le calcul « cette pharmacie est-elle ouverte en ce moment », qui tient compte des horaires hebdomadaires, pauses déjeuner, gardes de nuit et périodes de garde, est codé séparément sur chaque plateforme, mais à partir des mêmes données d'horaires dans Supabase — donc les deux apps tombent toujours d'accord sur le statut d'une pharmacie, à n'importe quel moment.",
      dbTitle: "Base de données",
      dbText:
        "PostgreSQL via Supabase, avec Row Level Security activée sur toutes les tables. Tout le monde peut lire les données de pharmacies et de villes ; les écritures passent par le pipeline de scraping ou par le système de suggestion modéré. Les tables principales : regions, cities, pharmacies, pharmacy_suggestions.",
      structureMobileTitle: "Structure du projet (Mobile)",
      structureWebTitle: "Structure du projet (Web)",
    },

    challenges: {
      title: "Défis et solutions",
      mapsTitle: "Des cartes qui ne plantent jamais",
      mapsText:
        "MZNovels m'a appris que tout ce qui est payant a une alternative gratuite, même si rien n'est vraiment gratuit, et qu'il faut savoir où dépenser et où économiser. Je voulais éviter Google Maps à tout prix, à cause du coût. Ma première tentative avec React Maps a planté, alors que je n'utilisais même pas Google Maps directement : il s'est avéré que React Maps appelle l'API Google en coulisses et demande une clé de toute façon. Direction la sortie, et basculement vers la bibliothèque open source @maplibre/maplibre-react-native. Le résultat a dépassé mes attentes : MapTiler gère les tuiles stylées, OpenStreetMap prend le relais en silence si elles échouent, et OSRM s'occupe du routage avec Google Maps en dernier recours si aucun trajet n'est trouvé.",
      scheduleTitle: "La logique des horaires sur deux bases de code",
      scheduleParagraphs: [
        "Le plus délicat a été de garder une logique d'horaires cohérente entre le scraper Python et les frontends JavaScript/TypeScript. Le scraper récupère de nouvelles données de garde chaque jour, mais le format ne correspondait pas toujours à ce qu'attendait le frontend. J'ai dû définir une structure commune, un vrai contrat entre les deux bases de code, pour que les horaires d'une pharmacie s'affichent correctement, qu'on soit sur Android ou sur le web.",
        "Les cas particuliers ont rendu ça plus compliqué que prévu : null pour le dimanche (beaucoup de pharmacies sont simplement fermées ce jour-là), plusieurs créneaux dans une même journée comme le matin et l'après-midi, et des gardes de nuit qui passent minuit. Chacun demandait une analyse soignée des deux côtés, pour éviter ces bugs silencieux où une pharmacie s'afficherait ouverte alors qu'elle ne l'est pas, ou l'inverse.",
      ],
    },

    results: {
      title: "Résultats et impact",
      stats: [
        { num: "50K+", label: "Installations Play Store" },
        { num: "99", label: "Villes couvertes" },
        { num: "10k+", label: "Pharmacies suivies" },
        { num: "6 mois", label: "En ligne et opérationnel" },
      ],
      paragraph:
        "L'app a dépassé les 50 000 installations sur le Play Store par découverte organique uniquement, sans promotion payante ni budget marketing. Des utilisateurs de tout le Maroc l'ont trouvée, l'ont notée, et y sont revenus quand ils en avaient besoin — exactement ce pour quoi elle a été pensée.",
    },

    whatIdChange: {
      title: "Ce que je changerais",
      list: [
        "Figer le format de sortie du scraper en schéma strict dès le premier jour, au lieu de le laisser bouger puis de devoir rattraper le parseur du frontend après coup. Une simple définition de type partagée, même un schéma JSON basique, aurait évité que des décalages de format ne deviennent des bugs en production.",
        "Évaluer les bibliothèques de cartes plus tôt. Passer de React Maps à MapLibre en plein développement a coûté du temps qu'un petit test initial (rendu, performance, besoin de clé API) aurait permis d'éviter avant de m'engager.",
      ],
    },

    stack: {
      title: "Stack technique",
      rows: [
        {
          label: "Mobile",
          value: "React Native, Expo (SDK 52), TypeScript, Expo Router",
        },
        { label: "Web", value: "React 18, TypeScript, Vite, CSS Modules" },
        {
          label: "Backend / BD",
          value: "Supabase (PostgreSQL + Row Level Security)",
        },
        {
          label: "Cartes et itinéraires",
          value: "MapLibre GL, MapTiler, OpenStreetMap, OSRM, Google Maps",
        },
        {
          label: "Automatisation",
          value: "Scraper Python sur GitHub Actions (privé)",
        },
        { label: "Distribution", value: "EAS Build, Google Play, Vercel" },
      ],
    },
  },

  ar: {
    backLink: "→ العودة",
    eyebrow: "دراسة حالة",
    subtitle:
      "اعثر على أقرب صيدلية مفتوحة في المغرب الآن. أداة بحث متعددة اللغات عن الصيدليات، متوفرة كتطبيق جوال أصلي وموقع ويب مرافق له، حقّقت **أكثر من 50,000 عملية تثبيت** على متجر Play.",
    repoNote:
      "أداة جمع البيانات (scraper) التي تحافظ على تحديث جداول الصيدليات تبقى خاصة، لأنها تتعامل مع مصدر بيانات خارجي أفضّل عدم نشره. أما مستودعا التطبيق والموقع، فهما عامّان.",
    tags: [
      "React Native",
      "Expo",
      "React",
      "Vite",
      "Supabase",
      "MapLibre",
      "مشروع فردي",
    ],

    why: {
      title: "لماذا بنيت هذا المشروع",
      paragraphs: [
        "كانت الفكرة في رأسي منذ مدة. بدأ كل شيء في يوم عادي، حين طلبت مني والدتي أن أتحقق من الصيدلية المناوبة في عطلة نهاية ذلك الأسبوع. قلت لنفسي: لماذا أخرج في الحر لأتحقق من شيء يفترض أن أعرفه من هاتفي؟ ثم سألت نفسي: هل توجد طريقة لذلك أصلًا؟",
        "بحثت، فوجدت بعض التطبيقات بواجهات معطّلة وبيانات قديمة. وبما أنني كنت أبحث عن مشروع حقيقي بعد إنهاء MZNovels، قررت أن أبنيه بنفسي. كان هذا أول مشروع لي يحل مشكلة فعلية لأشخاص حولي، وهو ما حدّد الاتجاه الذي أريد الاستمرار فيه: بناء نسخ رقمية لخدمات لا تملك واحدة بعد.",
      ],
    },

    whatItDoes: {
      title: "ماذا يفعل التطبيق",
      intro:
        "يجد DawaMZ أقرب صيدلية مفتوحة أو مناوبة لموقع المستخدم ويوصله إليها: تطبيق أصلي للتجربة الكاملة، وموقع ويب لبحث سريع يسهل مشاركته.",
      coreFeaturesTitle: "الميزات الأساسية",
      coreFeaturesList: [
        "تحديد أقرب صيدلية مفتوحة عبر GPS",
        "خريطة تفاعلية بأنماط فاتحة وداكنة تطابق تصميم التطبيق",
        "توجيه خطوة بخطوة، مع الرجوع إلى Google Maps إذا تعذّر إيجاد مسار",
        "حالة مفتوح/مغلق لحظيًا، مبنية على الجداول الأسبوعية وفترات الراحة والورديات الليلية وفترات المناوبة",
        "اتصال ونسخ العنوان بلمسة واحدة",
      ],
      platformDiffTitle: "الفرق بين المنصتين",
      platformDiffList: [
        {
          label: "الجوال",
          text: "— تجربة أصلية كاملة: توجيه GPS، واجهة تعمل بدون إنترنت، وضع داكن، والرجوع إلى OpenStreetMap عند الحاجة",
        },
        {
          label: "الويب",
          text: "— مصمم ليُكتشَف بسهولة: صفحات منطقة ← مدينة ← صيدلية محسّنة لمحركات البحث وروابط قابلة للمشاركة",
        },
        { text: "كلاهما — دعم العربية (RTL) والفرنسية والإنجليزية" },
        { text: "كلاهما — اقتراحات من المستخدمين للصيدليات أو المدن الناقصة" },
      ],
      desktopCaption: "dawamz.com — حاسوب",
      mobileCaption: "تطبيق الجوال — عرض الخريطة",
    },

    twoBackends: {
      title: "منصتان، خلفية واحدة",
      paragraphs: [
        "تطبيق الجوال والموقع قاعدتا كود منفصلتان تمامًا — React Native وExpo للجوال، وReact وVite للويب — لكنهما يشتركان في مشروع Supabase واحد: نفس قاعدة البيانات، نفس منطق الجداول، نفس المحتوى متعدد اللغات. حالة فتح/إغلاق الصيدلية وساعاتها وترجماتها تُحسب مرة واحدة فقط وتقرأها المنصتان معًا، فلا يوجد سوى مصدر حقيقة واحد بدل نظامين يبتعدان عن بعضهما مع الوقت.",
        "هذا الفصل يترك لكل منصة التركيز على ما تجيده. الجوال يتولى كل ما يستفيد من واجهات النظام الأصلية: GPS، الخرائط، التوجيه، واجهة بدون إنترنت، الوضع الداكن. والويب يتولى سهولة الاكتشاف: روابط محسّنة لكل منطقة ومدينة وصيدلية، بحيث يمكن الوصول إلى صفحة صيدلية ومشاركتها بدون تثبيت أي شيء.",
      ],
    },

    freshData: {
      title: "الحفاظ على تحديث بيانات الصيدليات",
      intro:
        "بيانات الصيدليات وجداول المناوبة هي جوهر التطبيق، وكان الحفاظ على تحديثها بدون تدخل يدوي أولوية منذ اليوم الأول. مهمة مجدولة تتولى هذا تلقائيًا:",
      pipelineLabel: "خط جمع البيانات اليومي",
      outro:
        "بالنسبة للصيدليات أو المدن التي لا يغطيها أداة الجمع بعد، تتضمن المنصتان نظام اقتراحات: يمكن للمستخدمين إضافة صيدلية مفقودة أو طلب مدينة جديدة مباشرة من التطبيق أو الموقع، مع تحديد لعدد الطلبات في نموذج الويب لمنع إساءة الاستخدام. كل ما يُرسل بهذه الطريقة يُراجَع ويُضاف عبر إدخال مباشر في Supabase.",
    },

    architecture: {
      title: "البنية التقنية",
      mobileTitle: "الجوال",
      mobileText:
        "مبني بـ React Native وExpo (SDK 52) بلغة TypeScript، ويستخدم Expo Router للتنقل المعتمد على الملفات. الخرائط تعمل عبر MapLibre GL مع MapTiler لأنماط فاتحة وداكنة تطابق تصميم التطبيق، وإذا فشل تحميل بلاطات MapTiler يتحول التطبيق بصمت إلى OpenStreetMap حتى لا تتعطل الخريطة لدى المستخدم أبدًا. التوجيه يُحسب عبر OSRM ويُرسم كخط على الخريطة، وإذا تعذر على OSRM إيجاد مسار يفتح التطبيق Google Maps مباشرة بدلًا منه.",
      webTitle: "الويب",
      webText:
        "مبني بـ React 18 وTypeScript وVite، منسّق بـ CSS Modules، ومنشور على Vercel. التوجيه يعتمد React Router v6 بروابط محسّنة لمحركات البحث لتسلسل منطقة ← مدينة ← صيدلية، والاتجاهات تنتقل إلى Google Maps بلمسة واحدة.",
      sharedTitle: "المنطق المشترك",
      sharedText:
        'حساب "هل هذه الصيدلية مفتوحة الآن" - الذي يأخذ بالحسبان الجداول الأسبوعية وفترات الراحة والورديات الليلية وفترات المناوبة - يُنفَّذ بشكل مستقل في كل منصة، لكن باستخدام نفس بيانات الجداول في Supabase، فتتفق المنصتان دائمًا على حالة أي صيدلية في أي لحظة.',
      dbTitle: "قاعدة البيانات",
      dbText:
        "PostgreSQL عبر Supabase، مع تفعيل Row Level Security على كل جدول. يمكن لأي شخص قراءة بيانات الصيدليات والمدن؛ أما الكتابة فتمر فقط عبر خط جمع البيانات أو نظام الاقتراحات الخاضع للمراجعة. من أهم الجداول: regions وcities وpharmacies وpharmacy_suggestions.",
      structureMobileTitle: "هيكلة المشروع (الجوال)",
      structureWebTitle: "هيكلة المشروع (الويب)",
    },

    challenges: {
      title: "التحديات والحلول",
      mapsTitle: "خرائط لا تتعطل",
      mapsText:
        "تعلمت من العمل على MZNovels أن كل شيء مدفوع له بديل مجاني، لكن لا شيء مجاني تمامًا في الحقيقة، والمهم أن تعرف أين تصرف وأين لا. أردت تجنب Google Maps كليًا بسبب التكلفة. محاولتي الأولى مع React Maps تعطلت حتى دون استخدام Google Maps مباشرة، وتبيّن أن React Maps يستدعي واجهة Google في الخلفية ويحتاج مفتاحًا في كل الحالات. فتركته وانتقلت إلى المكتبة مفتوحة المصدر @maplibre/maplibre-react-native. وكانت النتيجة أفضل من المتوقع: MapTiler يتولى البلاطات المصمَّمة، OpenStreetMap يعمل كبديل صامت إذا فشلت، وOSRM يتولى التوجيه مع اعتماد Google Maps كحل أخير إذا لم يُعثر على مسار.",
      scheduleTitle: "منطق الجداول عبر قاعدتي كود",
      scheduleParagraphs: [
        "أصعب جزء كان الحفاظ على منطق جداول متطابق بين أداة الجمع المكتوبة بـ Python والواجهات الأمامية بـ JavaScript/TypeScript. أداة الجمع تسحب بيانات مناوبة جديدة كل يوم، لكن الصيغة لم تكن تطابق دائمًا ما تتوقعه الواجهة. اضطررت لتعريف بنية مشتركة، تشبه عقدًا بين القاعدتين، حتى تظهر ساعات الصيدلية بشكل صحيح سواء على أندرويد أو الويب.",
        "الحالات الخاصة عقّدت الأمر أكثر من المتوقع: قيمة null ليوم الأحد (كثير من الصيدليات تكون مغلقة بكل بساطة)، وفترات متعددة في اليوم نفسه كوردية صباحية وأخرى مسائية، ومناوبات ليلية تمتد عبر منتصف الليل. كل حالة احتاجت تحليلًا دقيقًا في الطرفين، لتجنّب أخطاء خفية تجعل صيدلية تظهر مفتوحة وهي مغلقة، أو العكس.",
      ],
    },

    results: {
      title: "النتائج والأثر",
      stats: [
        { num: "+50K", label: "تثبيت على متجر Play" },
        { num: "99", label: "مدينة مغطاة" },
        { num: "+10k", label: "صيدلية مُتابَعة" },
        { num: "6 أشهر", label: "تشغيل مستمر" },
      ],
      paragraph:
        "وصل التطبيق إلى أكثر من 50,000 عملية تثبيت على متجر Play باكتشاف عضوي بالكامل، بلا ترويج مدفوع ولا ميزانية تسويق. مستخدمون من كل أنحاء المغرب وجدوه، قيّموه، وعادوا إليه عند الحاجة، وهذا تمامًا ما صُمم من أجله.",
    },

    whatIdChange: {
      title: "ما كنت سأفعله بشكل مختلف",
      list: [
        "تحديد صيغة مخرجات أداة الجمع كمخطط صارم منذ اليوم الأول، بدل تركها تتطور بحرية والاضطرار لتعديل محلل الواجهة الأمامية لاحقًا حتى تتوافق معه. تعريف نوع بيانات مشترك، حتى لو كان مجرد مخطط JSON بسيط، كان سيكشف أي اختلاف في الصيغة قبل أن يتحول إلى خطأ فعلي وقت التشغيل.",
        "تقييم مكتبات الخرائط في وقت أبكر. الانتقال من React Maps إلى MapLibre في منتصف التطوير كلّف وقتًا كان يمكن تجنبه بتجربة سريعة في البداية لاختبار العرض والأداء ومتطلبات مفتاح API قبل الالتزام بخيار واحد.",
      ],
    },

    stack: {
      title: "المكدّس التقني",
      rows: [
        {
          label: "الجوال",
          value: "React Native, Expo (SDK 52), TypeScript, Expo Router",
        },
        { label: "الويب", value: "React 18, TypeScript, Vite, CSS Modules" },
        {
          label: "الخلفية / قاعدة البيانات",
          value: "Supabase (PostgreSQL + Row Level Security)",
        },
        {
          label: "الخرائط والتوجيه",
          value: "MapLibre GL, MapTiler, OpenStreetMap, OSRM, Google Maps",
        },
        {
          label: "الأتمتة",
          value: "أداة جمع بيانات بـ Python على GitHub Actions (خاصة)",
        },
        { label: "التوزيع", value: "EAS Build, Google Play, Vercel" },
      ],
    },
  },

  ja: {
    backLink: "← 戻る",
    eyebrow: "ケーススタディ",
    subtitle:
      "モロッコで今すぐ開いている最寄りの薬局がわかります。ネイティブアプリと連携Webサイトで提供する多言語対応の薬局検索ツールで、Playストアで**5万件以上のインストール**を獲得しています。",
    repoNote:
      "薬局の営業スケジュールを最新に保つスクレイパーは非公開にしています。サードパーティのデータソースを扱う関係で、このパイプライン自体は公開しないことにしました。アプリとWebのリポジトリは公開しています。",
    tags: [
      "React Native",
      "Expo",
      "React",
      "Vite",
      "Supabase",
      "MapLibre",
      "個人プロジェクト",
    ],

    why: {
      title: "開発の経緯",
      paragraphs: [
        "このアイデアはずっと頭の片隅にありました。きっかけは何でもない日で、母にその週末の当番薬局を確認してきてほしいと頼まれたことです。スマホで調べられて当然のことをなぜ暑い中外に出て確認するのか、と思いました。そこで気づいたんです。そもそもそれを調べる手段なんてあるのか、と。",
        "実際に探してみました。見つかったアプリはどれもUIが崩れていたり、データが古かったり。ちょうどMZNovelsを終えて次の本気の案件を探していたところだったので、自分で作ることにしました。身近な人の実際の困りごとを解決するために作った初めてのプロジェクトで、これ以降の方向性も決まりました。まだデジタル版がないサービスを作っていく、ということです。",
      ],
    },

    whatItDoes: {
      title: "提供している機能",
      intro:
        "DawaMZは現在地から一番近い、開いている、または当番中の薬局を見つけてそこまで案内します。フル機能のネイティブアプリと、手軽に共有できるWeb版の両方で使えます。",
      coreFeaturesTitle: "主な機能",
      coreFeaturesList: [
        "GPSで最寄りの営業中薬局を検出",
        "アプリのテーマに合わせたライト/ダークのタイルで表示するインタラクティブマップ",
        "ターンバイターンのルート案内。見つからない場合はGoogle Mapsに切り替え",
        "週間スケジュール、昼休み、夜間シフト、当番時間まで反映したリアルタイムの営業状況",
        "ワンタップでの発信・住所コピー",
      ],
      platformDiffTitle: "プラットフォームごとの違い",
      platformDiffList: [
        {
          label: "モバイル",
          text: "— ネイティブならではの体験：GPSルート案内、オフラインでも使いやすいUI、ダークモード、タイル読み込み失敗時はOpenStreetMapに切り替え",
        },
        {
          label: "Web",
          text: "— 見つけてもらいやすさ重視：地域→都市→薬局のSEOに強いページ構成、共有しやすいURL",
        },
        { text: "両方 — アラビア語（RTL）、フランス語、英語に対応" },
        { text: "両方 — 不足している薬局や都市をユーザーが提案できる" },
      ],
      desktopCaption: "dawamz.com — PC",
      mobileCaption: "モバイルアプリ — 地図表示",
    },

    twoBackends: {
      title: "2つのプラットフォーム、1つのバックエンド",
      paragraphs: [
        "モバイルアプリとWebサイトはコードベースとしては完全に別物です（モバイルはReact Native + Expo、WebはReact + Vite）。ただ、Supabaseのプロジェクトは1つだけ共有しています。同じデータベース、同じスケジュールロジック、同じ多言語コンテンツです。薬局の営業状況・営業時間・翻訳文はすべて一度だけ計算され、両方のプラットフォームがそれを読みにいくので、情報源は常に一つだけ。2つのシステムが少しずつズレていく心配がありません。",
        "この分け方のおかげで、各プラットフォームは自分の得意分野に集中できます。モバイルはネイティブAPIが活きる部分、GPS・地図・ルート案内・オフライン対応・ダークモードを担当。Webは見つけてもらいやすさを担当していて、地域・都市・薬局ごとにSEOに強いURLを持っているので、インストールなしで薬局のページを見つけて共有できます。",
      ],
    },

    freshData: {
      title: "薬局データを最新に保つ",
      intro:
        "薬局と当番のデータはこのアプリの核心部分で、手作業のメンテナンスなしで最新に保つことは最初から外せない条件でした。定期ジョブが自動でこれを処理します。",
      pipelineLabel: "日次スクレイピングパイプライン",
      outro:
        "スクレイパーがまだカバーしていない薬局や都市については、両プラットフォームに提案機能を用意しています。アプリやWebサイトから直接、不足している薬局を報告したり新しい都市をリクエストできて、Webフォーム側には不正利用を防ぐためのレート制限もかけています。届いた提案は確認したうえで、Supabaseに直接追加しています。",
    },

    architecture: {
      title: "技術アーキテクチャ",
      mobileTitle: "モバイル",
      mobileText:
        "TypeScriptで書いたReact NativeとExpo（SDK 52）で構築し、ファイルベースのナビゲーションにはExpo Routerを使っています。地図はMapLibre GLとMapTilerの組み合わせで、アプリのテーマに合わせたライト/ダークのタイルを表示しています。MapTilerのタイル読み込みに失敗したときは、ユーザーに気づかれないようOpenStreetMapに静かに切り替わるので、地図が壊れて見えることはありません。ルート案内はOSRMで計算してポリラインとして地図に描き、OSRMでルートが見つからない場合はGoogle Mapsを直接開く形にフォールバックします。",
      webTitle: "Web",
      webText:
        "React 18、TypeScript、Viteで構築し、CSS Modulesでスタイリングして、Vercelにデプロイしています。ルーティングはReact Router v6で、地域→都市→薬局という階層にSEOフレンドリーなスラッグを使っていて、道案内はワンタップでGoogle Mapsに引き継ぎます。",
      sharedTitle: "共有ロジック",
      sharedText:
        "「この薬局は今開いているか」という判定は、週間スケジュール・昼休み・夜間シフト・当番時間まで考慮するもので、各プラットフォームでそれぞれ実装していますが、参照しているのはSupabase内の同じスケジュールデータです。だからどの瞬間でも、両方のアプリが同じ答えを返します。",
      dbTitle: "データベース",
      dbText:
        "SupabaseのPostgreSQLで、すべてのテーブルにRow Level Securityを設定しています。薬局と都市のデータは誰でも読み取れますが、書き込みはスクレイパーのパイプラインかモデレーション付きの提案機能を経由する形だけです。主なテーブルはregions、cities、pharmacies、pharmacy_suggestionsです。",
      structureMobileTitle: "プロジェクト構成（モバイル）",
      structureWebTitle: "プロジェクト構成（Web）",
    },

    challenges: {
      title: "課題と解決策",
      mapsTitle: "絶対に壊れない地図にする",
      mapsText:
        "MZNovelsで学んだのは、有料のものには大抵無料の代替があるということです。とはいえ本当に無料なものなんて無くて、どこにお金を使うべきか、使わなくていいかを見極める必要があります。コストの面からGoogle Mapsは完全に避けたいと思っていました。最初にReact Mapsで試したら、Google Mapsを直接使っていないのにクラッシュしました。実はReact Mapsは内部でGoogleのAPIを呼んでいて、結局APIキーが必要だったんです。そこでこれをやめて、オープンソースの@maplibre/maplibre-react-nativeに切り替えました。これが思った以上にうまくいきました。MapTilerがスタイル付きタイルを担当し、タイルが読み込めないときはOpenStreetMapが黒子のように代わりに表示され、ルート案内はOSRMが担当して、見つからない場合の最後の手段としてGoogle Mapsにフォールバックします。",
      scheduleTitle: "2つのコードベースをまたぐスケジュールロジック",
      scheduleParagraphs: [
        "一番厄介だったのは、Pythonのスクレイパーとフロントエンド（JavaScript/TypeScript）の間でスケジュールロジックの整合性を保つことでした。スクレイパーは毎日新しい当番データを取ってきますが、そのフォーマットがフロントエンドの想定と必ずしも一致していなかったんです。そこで両方のコードベースの間で守るべき共通の構造、いわば「契約」を決める必要がありました。AndroidでもWebでも、薬局の営業時間が同じように正しく表示されるようにするためです。",
        "想定以上に厄介だったのがエッジケースです。日曜がnullになっているケース（単に休みの薬局が多い）、午前と午後のように1日に複数の時間帯があるケース、深夜0時を挟む夜間当番のケース。どれも両側で丁寧にパースしないと、本当は開いていない薬局が開いていると表示されたり、その逆になったりする、気づきにくいバグにつながります。",
      ],
    },

    results: {
      title: "成果とインパクト",
      stats: [
        { num: "5万+", label: "Playストアのインストール数" },
        { num: "99", label: "対応都市数" },
        { num: "1万+", label: "登録薬局数" },
        { num: "6ヶ月", label: "継続稼働" },
      ],
      paragraph:
        "このアプリはPlayストアで5万件以上のインストールに達しましたが、それは全部オーガニックな発見によるものです。広告費もマーケティング予算も一切使っていません。モロッコ各地のユーザーがこのアプリを見つけて、評価をつけて、必要なときにまた使いに戻ってきてくれました。これはまさに、このアプリを作った理由そのものです。",
    },

    whatIdChange: {
      title: "今ならこうする",
      list: [
        "スクレイパーの出力フォーマットは最初から厳密なスキーマとして決めておく。後から育てていって、そのたびにフロントエンドのパーサーを追いかけて直す、というやり方は避けたい。共有の型定義、単純なJSONスキーマだけでも、フォーマットのズレを実行時バグになる前に見つけられたはず。",
        "地図ライブラリはもっと早い段階で見極める。React MapsからMapLibreへの乗り換えは開発の途中だったので余計に時間がかかった。最初に短い検証期間を設けて、表示やパフォーマンス、APIキーの要件を確認していれば避けられたはず。",
      ],
    },

    stack: {
      title: "技術スタック",
      rows: [
        {
          label: "モバイル",
          value: "React Native, Expo (SDK 52), TypeScript, Expo Router",
        },
        { label: "Web", value: "React 18, TypeScript, Vite, CSS Modules" },
        {
          label: "バックエンド / DB",
          value: "Supabase (PostgreSQL + Row Level Security)",
        },
        {
          label: "地図とルート案内",
          value: "MapLibre GL, MapTiler, OpenStreetMap, OSRM, Google Maps",
        },
        {
          label: "自動化",
          value: "GitHub Actions上のPythonスクレイパー（非公開）",
        },
        { label: "配信", value: "EAS Build, Google Play, Vercel" },
      ],
    },
  },
};
