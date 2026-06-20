import type { Language } from "./language";

export interface MznovelsContent {
  backLink: string;
  eyebrow: string;
  subtitle: string; // supports **bold** markers for highlighted spans
  repoNote: string;
  tags: string[];

  why: {
    title: string;
    paragraphs: string[]; // supports **bold**
  };

  whatItDoes: {
    title: string;
    intro: string;
    readersTitle: string;
    readersList: string[];
    writersTitle: string;
    writersList: string[];
    desktopCaption: string;
    mobileCaption: string;
  };

  architecture: {
    title: string;
    intro: string;
    deploymentTitle: string;
    deploymentText: string;
    deploymentList: { label: string; text: string }[];
    authTitle: string;
    authText: string;
    searchTitle: string;
    searchText: string;
    structureTitle: string;
    structureText: string;
  };

  challenges: {
    title: string;
    budgetTitle: string;
    budgetParagraphs: string[];
    botTitle: string;
    botP1Before: string;
    earlyLinkText: string;
    botP1After: string;
    botP2: string;
    botP3Before: string;
    affectedLinkText: string;
    botP3After: string;
    botP4: string;
  };

  results: {
    title: string;
    stats: { num: string; label: string }[];
    paragraph1: string; // supports **bold**
    paragraph2: string; // supports **bold**
  };

  whatIdChange: {
    title: string;
    list: string[];
  };

  ownership: {
    title: string;
    intro: string;
    docs: { title: string; meta: string }[];
  };

  stack: {
    title: string;
    rows: { label: string; value: string }[];
  };
}

export const mznovelsTranslations: Record<Language, MznovelsContent> = {
  en: {
    backLink: "← Back",
    eyebrow: "Case Study",
    subtitle:
      "A free reading and publishing platform for novels — built, deployed, and operated solo for two years, serving over **100,000 users**.",
    repoNote:
      "Source code is private — this is a production application handling real user accounts and content. Verification documents are below, and I'm happy to walk through the code directly in an interview.",
    tags: [
      "Django",
      "MySQL",
      "Docker",
      "Nginx",
      "Whoosh Search",
      "OAuth2",
      "Solo Project",
    ],

    why: {
      title: "Why I Built This",
      paragraphs: [
        "When I first started learning programming, I was also an amateur author who had published some works on platforms like Wattpad and Webnovel. So I thought — why not build my own? One where I could reach a wider, more niche audience, develop tools those platforms didn't have, and apply what I was studying. And honestly, because I wanted to build something people would actually use and browse.",
        "Once the platform went live, it attracted more users and engagement than I expected — so I stayed with it, kept developing features, and continued publishing my own stories there. It launched in **October 2024** and has been in continuous operation since.",
      ],
    },

    whatItDoes: {
      title: "What It Does",
      intro:
        "MZNovels gives writers a complete publishing workflow and gives readers a free, ad-light way to discover and follow novels.",
      readersTitle: "For Readers",
      readersList: [
        "Browse and read novels with no subscription or paywall",
        "Advanced search and filtering by genre, tags, and ranking",
        "Bookmarking and reading-progress tracking",
        "User profiles with avatars",
        "Sign in with Google via OAuth2",
      ],
      writersTitle: "For Writers",
      writersList: [
        "Publish and manage novels from a writer dashboard",
        "Full chapter editor with rich-text formatting",
        "Chapter ordering and management tools",
        "Cover image uploads and novel metadata editing",
      ],
      desktopCaption: "Homepage — desktop",
      mobileCaption: "Homepage — mobile",
    },

    architecture: {
      title: "Technical Architecture",
      intro:
        "The application is a Django monolith, chosen for a solo project where shipping speed and a mature ecosystem (admin panel, ORM, auth) mattered more than a distributed-services architecture. The frontend is server-rendered with Django templates, HTML, CSS, and JavaScript — no separate SPA layer, which kept the deployment surface small for one person to operate.",
      deploymentTitle: "Deployment",
      deploymentText:
        "The stack runs in Docker, split across four containers — a web container running the Django application via Gunicorn, an Nginx reverse proxy handling static files and rate limiting, a MySQL database, and a dedicated initialization container for schema setup and migrations. The application is hosted on a Linux VPS on Vultr.",
      deploymentList: [
        { label: "Web", text: "— Django application, served via Gunicorn" },
        {
          label: "Nginx",
          text: "— reverse proxy, static file serving, SSL termination, and rate limiting",
        },
        {
          label: "Database",
          text: "— MySQL, with a dedicated initialization container for setup and migrations",
        },
      ],
      authTitle: "Authentication",
      authText:
        "Authentication uses a custom OAuth2 backend (oauth2_backend.py, adapters.py, backends.py) alongside Django's built-in auth system. This lets users sign in with Google while keeping the user model and session handling entirely under application control — no third-party auth service dependency.",
      searchTitle: "Search",
      searchText:
        "Search and filtering (by genre, tags, and ranking) is powered by Whoosh, a pure-Python search library indexed against the novel and chapter catalog. This avoided introducing a separate search service (e.g. Elasticsearch) while still giving readers fast, relevant filtering across a growing catalog.",
      structureTitle: "Project Structure",
      structureText:
        "The codebase separates concerns into dedicated modules: authentication (adapters.py, custom OAuth2 backend), content ingestion (scraper.py), search (search_indexes.py), SEO (sitemaps.py), and access control (middleware.py, validators.py). A tests directory and management commands support ongoing maintenance.",
    },

    challenges: {
      title: "Challenges & Solutions",
      budgetTitle: "Operating at Scale on a Solo Budget",
      budgetParagraphs: [
        "I learned a lot while building the platform and didn't run into many issues at first. The real difficulties started when it came time to deploy. I went with a VPS on Vultr — the cost was reasonable, and the control it gave me over the environment was worth it compared to managed hosting.",
        "Since it was my first deployment, setting up networking, SSL, and safely orchestrating all the Docker containers turned out to be genuinely hard. I went through a lot of failed containers and corrupt runs. But I worked through every one of them and got the app live — and that experience now means I can deploy new projects with little to no friction.",
      ],
      botTitle: "Bot Traffic and Log Visibility",
      botP1Before:
        "The first six months were healthy — steady organic growth with very little bot traffic, putting the platform on track to hit 100,000 users (",
      earlyLinkText: "see early analytics",
      botP1After:
        "). Around that point, I started relying more on my hosting provider's logs day to day instead of Google Analytics. I noticed CPU usage had crept up from around 4–7% to about 13%, so I added some protection: blocking IPs with unusually high request rates and tightening the rate limits in Nginx. The logs looked stable after that, so I moved on.",
      botP2:
        "What I didn't realize was that I'd only fixed part of the problem. I'd set log retention to keep just the last 100–200 entries, and the bot traffic was hitting the web container mostly at night, while the Nginx and database containers — the ones I actually checked — stayed quiet. So every time I looked, things seemed fine.",
      botP3Before:
        "I only found out something was wrong by accident. I had to travel late one night and, out of curiosity, opened Google Analytics — and saw strange spikes I couldn't explain. Digging into it, I found a steady drop in engagement time, a higher bounce rate, and new-user numbers that didn't match what I was seeing elsewhere. The bot traffic had been running since my original fix, just outside the window my logs covered (",
      affectedLinkText: "see affected period",
      botP3After: ").",
      botP4:
        "I considered switching to Cloudflare for better protection, but the global outage on November 18, 2025 made me hesitate — So I preferred to keep traffic handling in-house for full control and avoid adding an external dependency in the critical path. Instead, I stuck with handling it myself: widened Nginx rate limiting rules, tightened IP blocking, and extended log retention significantly so off-hours patterns wouldn't go undetected again.",
    },

    results: {
      title: "Results & Impact",
      stats: [
        { num: "100K+", label: "Genuine Users" },
        { num: "4M+", label: "Total Page Views" },
        { num: "~400K", label: "Peak Monthly Views" },
        { num: "34m 15s", label: "Avg. Session Length" },
      ],
      paragraph1:
        "Google Analytics recorded approximately **199K active users** and **4M page views** over the platform's lifetime. After analyzing the traffic patterns from the bot issue above, my best estimate is that around half the recorded users are real — so closer to **100K genuine users**, which actually lines up with where things were heading in the first six months before the bot traffic started.",
      paragraph2:
        "The strongest signal that the platform was working? Average engagement time — **34 minutes per active user**, even during bot spam attacks. In clean conditions, that number regularly crossed **one hour** in the healthy period. This wasn't drive-by traffic — people sat down, read, returned for new chapters, and stayed. Growth was organic, supported only by a modest offline push: A4 flyers across my city, later expanded nationwide with help from family, friends, and a few local pharmacies.",
    },

    whatIdChange: {
      title: "What I'd Do Differently",
      list: [
        "Keep analytics and hosting-level monitoring in the same review cadence, rather than relying on one as a proxy for the other — container-level logs and Analytics caught different problems.",
        "Retain logs for a longer window from the start. A 100–200 entry cap was enough for day-to-day debugging but too short to catch slow-building, off-hours patterns.",
        "Invest earlier in a proper staging environment. Testing config changes directly on the production VPS worked until it didn't — a separate environment would have made deployments safer and faster to iterate on.",
      ],
    },

    ownership: {
      title: "Ownership & Verification",
      intro:
        "The source repository is private, as MZNovels is a production application with real user accounts and published content. The documents below verify ownership of the domain and provide historical analytics covering the periods discussed above.",
      docs: [
        {
          title: "Domain Purchase Receipt",
          meta: "PDF · Proof of domain ownership",
        },
        {
          title: "Analytics — Jan–Jun 2025 (Early growth)",
          meta: "PDF · Google Analytics export",
        },
        {
          title: "Analytics — Jul–Dec 2025 (Bot-traffic period)",
          meta: "PDF · Google Analytics export",
        },
        {
          title: "Analytics — All Time",
          meta: "PDF · Google Analytics export",
        },
      ],
    },

    stack: {
      title: "Tech Stack",
      rows: [
        { label: "Backend", value: "Django, Python" },
        { label: "Frontend", value: "HTML5, CSS3, JavaScript" },
        { label: "Database", value: "MySQL" },
        { label: "Search", value: "Whoosh" },
        { label: "Auth", value: "Django Auth + Custom OAuth2 (Google)" },
        {
          label: "Infrastructure",
          value: "Docker, Nginx, Gunicorn, VPS (Linux / Vultr)",
        },
      ],
    },
  },

  fr: {
    backLink: "← Retour",
    eyebrow: "Étude de cas",
    subtitle:
      "Une plateforme gratuite de lecture et de publication de romans, développée, déployée et maintenue en solo pendant deux ans, avec plus de **100 000 utilisateurs**.",
    repoNote:
      "Le code source reste privé : il s'agit d'une application en production qui gère de vrais comptes utilisateurs et du vrai contenu. Vous trouverez les documents de vérification ci-dessous, et je peux tout à fait parcourir le code en entretien si besoin.",
    tags: [
      "Django",
      "MySQL",
      "Docker",
      "Nginx",
      "Whoosh Search",
      "OAuth2",
      "Projet solo",
    ],

    why: {
      title: "Pourquoi ce projet",
      paragraphs: [
        "Quand j'ai commencé à apprendre la programmation, j'étais aussi un auteur amateur, avec quelques textes publiés sur Wattpad et Webnovel. Je me suis dit : pourquoi ne pas créer ma propre plateforme ? Une où je pourrais toucher un public plus large et plus ciblé, ajouter des fonctionnalités que les autres n'avaient pas, et mettre en pratique ce que j'apprenais. Et surtout, parce que je voulais construire quelque chose que les gens utiliseraient vraiment.",
        "Une fois en ligne, la plateforme a attiré bien plus d'utilisateurs et d'engagement que je ne l'imaginais, alors j'ai continué : nouvelles fonctionnalités, et mes propres histoires publiées dessus. Elle tourne sans interruption depuis son lancement en **octobre 2024**.",
      ],
    },

    whatItDoes: {
      title: "Ce que fait la plateforme",
      intro:
        "MZNovels offre aux auteurs un véritable flux de publication, et aux lecteurs un moyen gratuit, presque sans publicité, de découvrir et suivre des romans.",
      readersTitle: "Côté lecteurs",
      readersList: [
        "Lecture libre, sans abonnement ni paywall",
        "Recherche et filtres avancés par genre, tags et classement",
        "Favoris et suivi de la progression de lecture",
        "Profils utilisateurs avec avatar",
        "Connexion Google via OAuth2",
      ],
      writersTitle: "Côté auteurs",
      writersList: [
        "Publication et gestion des romans depuis un tableau de bord dédié",
        "Éditeur de chapitres complet, avec mise en forme riche",
        "Outils de réorganisation et de gestion des chapitres",
        "Upload de couvertures et édition des métadonnées du roman",
      ],
      desktopCaption: "Page d'accueil — version ordinateur",
      mobileCaption: "Page d'accueil — version mobile",
    },

    architecture: {
      title: "Architecture technique",
      intro:
        "L'application est un monolithe Django : un choix logique pour un projet solo, où la vitesse de développement et un écosystème mature (admin panel, ORM, auth) comptent davantage qu'une architecture en microservices. Le frontend est rendu côté serveur avec des templates Django, HTML, CSS et JavaScript, sans couche SPA séparée, ce qui garde une surface de déploiement gérable pour une seule personne.",
      deploymentTitle: "Déploiement",
      deploymentText:
        "La stack tourne sous Docker, répartie sur quatre conteneurs : un conteneur web qui exécute l'application Django via Gunicorn, un reverse proxy Nginx qui gère les fichiers statiques et le rate limiting, une base MySQL, et un conteneur d'initialisation dédié au schéma et aux migrations. L'application est hébergée sur un VPS Linux chez Vultr.",
      deploymentList: [
        { label: "Web", text: "— application Django, servie via Gunicorn" },
        {
          label: "Nginx",
          text: "— reverse proxy, fichiers statiques, terminaison SSL et rate limiting",
        },
        {
          label: "Base de données",
          text: "— MySQL, avec un conteneur d'initialisation dédié au setup et aux migrations",
        },
      ],
      authTitle: "Authentification",
      authText:
        "L'authentification repose sur un backend OAuth2 sur mesure (oauth2_backend.py, adapters.py, backends.py), en complément du système d'auth natif de Django. Les utilisateurs peuvent se connecter avec Google, tout en gardant le modèle utilisateur et la gestion des sessions entièrement côté application, sans dépendre d'un service d'authentification tiers.",
      searchTitle: "Recherche",
      searchText:
        "La recherche et les filtres (genre, tags, classement) reposent sur Whoosh, une bibliothèque de recherche en Python pur indexée sur le catalogue de romans et de chapitres. Cela évite d'avoir à introduire un service de recherche externe comme Elasticsearch, tout en gardant un filtrage rapide et pertinent sur un catalogue qui grandit.",
      structureTitle: "Structure du projet",
      structureText:
        "Le code est organisé par responsabilité, dans des modules dédiés : authentification (adapters.py, backend OAuth2 sur mesure), récupération de contenu (scraper.py), recherche (search_indexes.py), SEO (sitemaps.py), contrôle d'accès (middleware.py, validators.py). Un dossier de tests et des commandes de management accompagnent la maintenance au quotidien.",
    },

    challenges: {
      title: "Défis et solutions",
      budgetTitle: "Tenir la charge avec un budget de développeur solo",
      budgetParagraphs: [
        "J'ai énormément appris en construisant la plateforme, et au début, peu de problèmes sérieux. Les vraies difficultés ont commencé au moment du déploiement. J'ai choisi un VPS chez Vultr : le coût restait raisonnable, et le contrôle que ça me donnait sur l'environnement valait largement le coup par rapport à de l'hébergement managé.",
        "Comme c'était mon premier déploiement, configurer le réseau, le SSL, et orchestrer tous les conteneurs Docker sans tout casser s'est révélé bien plus corsé que prévu. J'ai enchaîné les conteneurs qui plantent et les runs corrompus. Mais j'ai fini par tout débloquer un par un et mettre l'app en ligne, et cette expérience fait que je déploie aujourd'hui de nouveaux projets sans (ou presque sans) galère.",
      ],
      botTitle: "Trafic de bots et angle mort dans les logs",
      botP1Before:
        "Les six premiers mois se sont bien passés : une croissance organique régulière, très peu de bots, et la plateforme en bonne voie pour atteindre les 100 000 utilisateurs (",
      earlyLinkText: "voir les premières statistiques",
      botP1After:
        "). À ce moment-là, j'ai commencé à me fier davantage aux logs de mon hébergeur au quotidien plutôt qu'à Google Analytics. J'ai remarqué que le CPU était passé d'environ 4-7 % à 13 % environ, donc j'ai ajouté une protection : blocage des IP avec un taux de requêtes anormalement élevé, et rate limiting Nginx resserré. Les logs sont redevenus stables après ça, donc je suis passé à autre chose.",
      botP2:
        "Ce que je n'avais pas vu, c'est que je n'avais réglé qu'une partie du problème. J'avais limité la rétention des logs aux 100-200 dernières entrées, et les bots tapaient surtout le conteneur web la nuit — alors que Nginx et la base de données, les deux que je consultais vraiment, restaient calmes. Donc chaque fois que je vérifiais, tout semblait normal.",
      botP3Before:
        "C'est par hasard que j'ai fini par comprendre qu'il y avait un problème. Un soir, en déplacement assez tard, j'ai ouvert Google Analytics par curiosité, et j'ai vu des pics que je n'arrivais pas à expliquer. En creusant, j'ai trouvé une baisse continue du temps d'engagement, un taux de rebond plus élevé, et des chiffres de nouveaux utilisateurs qui ne collaient pas avec ce que je voyais ailleurs. Les bots tournaient depuis mon premier correctif, juste hors de la fenêtre couverte par mes logs (",
      affectedLinkText: "voir la période concernée",
      botP3After: ").",
      botP4:
        "J'ai pensé passer à Cloudflare pour une meilleure protection, mais la panne mondiale du 18 novembre 2025 m'a fait douter ; j'ai préféré garder la gestion du trafic en interne, pour garder le contrôle total et ne pas ajouter de dépendance externe sur un point critique. À la place, j'ai géré ça moi-même : règles de rate limiting Nginx élargies, blocage d'IP plus strict, et rétention des logs nettement allongée pour ne plus jamais laisser passer un pic nocturne sans le voir.",
    },

    results: {
      title: "Résultats et impact",
      stats: [
        { num: "100K+", label: "Utilisateurs réels" },
        { num: "4M+", label: "Pages vues au total" },
        { num: "~400K", label: "Pic de vues mensuelles" },
        { num: "34 min 15 s", label: "Durée de session moyenne" },
      ],
      paragraph1:
        "Google Analytics a comptabilisé environ **199 000 utilisateurs actifs** et **4 millions de pages vues** sur toute la durée de vie de la plateforme. En analysant les schémas de trafic liés au problème de bots décrit plus haut, mon estimation la plus probable est qu'environ la moitié de ces utilisateurs sont réels, soit plutôt **100 000 utilisateurs réels** — ce qui colle d'ailleurs assez bien avec la trajectoire des six premiers mois, avant l'arrivée des bots.",
      paragraph2:
        "Le signal le plus parlant que la plateforme fonctionnait bien ? Le temps d'engagement moyen, **34 minutes par utilisateur actif**, même en pleine attaque de bots. Dans des conditions normales, ce chiffre dépassait régulièrement **une heure** durant la période saine. Ce n'était pas du trafic de passage : les gens s'installaient, lisaient, revenaient pour la suite, et restaient. Une croissance entièrement organique, portée par une promotion hors ligne toute simple : des flyers A4 distribués dans ma ville, puis étendus à l'échelle nationale grâce à ma famille, mes amis, et quelques pharmacies locales.",
    },

    whatIdChange: {
      title: "Ce que je changerais",
      list: [
        "Surveiller les analytics et les logs d'hébergement au même rythme, plutôt que de se fier à l'un comme indicateur de l'autre : les logs des conteneurs et Analytics ont révélé des problèmes différents.",
        "Garder les logs plus longtemps dès le départ. Une limite de 100-200 entrées suffisait pour le débogage du quotidien, mais c'était trop court pour repérer des schémas nocturnes qui se construisent lentement.",
        "Investir plus tôt dans un vrai environnement de staging. Tester les changements de config directement sur le VPS de production a fonctionné… jusqu'au jour où ça n'a plus marché. Un environnement séparé aurait rendu les déploiements plus sûrs et plus rapides à itérer.",
      ],
    },

    ownership: {
      title: "Propriété et vérification",
      intro:
        "Le dépôt de code reste privé : MZNovels est une application en production avec de vrais comptes utilisateurs et du contenu publié. Les documents ci-dessous prouvent la propriété du domaine et donnent les statistiques historiques couvrant les périodes évoquées plus haut.",
      docs: [
        {
          title: "Reçu d'achat du domaine",
          meta: "PDF · Preuve de propriété du domaine",
        },
        {
          title: "Statistiques — Janv.–Juin 2025 (Croissance initiale)",
          meta: "PDF · Export Google Analytics",
        },
        {
          title: "Statistiques — Juil.–Déc. 2025 (Période de trafic de bots)",
          meta: "PDF · Export Google Analytics",
        },
        {
          title: "Statistiques — Toutes périodes",
          meta: "PDF · Export Google Analytics",
        },
      ],
    },

    stack: {
      title: "Stack technique",
      rows: [
        { label: "Backend", value: "Django, Python" },
        { label: "Frontend", value: "HTML5, CSS3, JavaScript" },
        { label: "Base de données", value: "MySQL" },
        { label: "Recherche", value: "Whoosh" },
        {
          label: "Authentification",
          value: "Django Auth + OAuth2 sur mesure (Google)",
        },
        {
          label: "Infrastructure",
          value: "Docker, Nginx, Gunicorn, VPS (Linux / Vultr)",
        },
      ],
    },
  },

  ar: {
    backLink: "→ العودة",
    eyebrow: "دراسة حالة",
    subtitle:
      "منصة مجانية لقراءة الروايات ونشرها، بنيتُها وأشغّلها بمفردي منذ سنتين، وتخدم أكثر من **100,000 مستخدم**.",
    repoNote:
      "الكود المصدري خاص لأن التطبيق فعليًا قيد التشغيل، بحسابات مستخدمين ومحتوى حقيقيين. مستندات التحقق موجودة بالأسفل، ويمكنني عرض الكود مباشرة في أي مقابلة.",
    tags: [
      "Django",
      "MySQL",
      "Docker",
      "Nginx",
      "Whoosh Search",
      "OAuth2",
      "مشروع فردي",
    ],

    why: {
      title: "لماذا بنيت هذا المشروع",
      paragraphs: [
        "بدأت تعلّم البرمجة وأنا في الوقت نفسه كاتب هاوٍ، نشرت بعض أعمالي على منصات مثل Wattpad وWebnovel. فقلت لنفسي: لماذا لا أبني منصتي الخاصة؟ منصة توصلني لجمهور أوسع وأكثر تخصصًا، وفيها أدوات لم تكن موجودة في تلك المنصات، وأطبّق فيها ما كنت أتعلمه. وبصراحة، كنت أريد أن أبني شيئًا يستخدمه الناس فعلًا.",
        "بعد إطلاق المنصة، جاءها مستخدمون وتفاعل أكثر مما توقعت، فاستمررت فيها: أضفت ميزات جديدة، وبقيت أنشر قصصي عليها. انطلقت في **أكتوبر 2024** ولم تتوقف عن العمل منذ ذلك الحين.",
      ],
    },

    whatItDoes: {
      title: "ماذا تقدّم المنصة",
      intro:
        "MZNovels يوفّر للكتّاب مسار نشر كامل، ويعطي القرّاء وسيلة مجانية وشبه خالية من الإعلانات لاكتشاف الروايات ومتابعتها.",
      readersTitle: "للقرّاء",
      readersList: [
        "قراءة مجانية، بلا اشتراك ولا حاجز دفع",
        "بحث وتصفية متقدّمة حسب النوع والوسوم والترتيب",
        "حفظ في المفضلة وتتبّع تقدّم القراءة",
        "ملفات شخصية بصور رمزية",
        "تسجيل الدخول بحساب Google عبر OAuth2",
      ],
      writersTitle: "للكتّاب",
      writersList: [
        "نشر وإدارة الروايات من لوحة تحكّم خاصة",
        "محرر فصول كامل بتنسيق نصوص متقدّم",
        "أدوات لترتيب الفصول وإدارتها",
        "رفع صور الغلاف وتعديل بيانات الرواية",
      ],
      desktopCaption: "الصفحة الرئيسية — حاسوب",
      mobileCaption: "الصفحة الرئيسية — جوال",
    },

    architecture: {
      title: "البنية التقنية",
      intro:
        "التطبيق مبني بطريقة monolith على Django، وهو خيار منطقي لمشروع فردي حيث سرعة التطوير ونظام جاهز وناضج (admin panel، ORM، auth) أهمّ من بنية microservices موزّعة. الواجهة تُعرض من جانب الخادم بقوالب Django وHTML وCSS وJavaScript، بدون طبقة SPA منفصلة، حتى تبقى مساحة النشر صغيرة يمكن لشخص واحد إدارتها.",
      deploymentTitle: "النشر",
      deploymentText:
        "تعمل المنظومة على Docker، مقسّمة على أربع حاويات: حاوية ويب تشغّل تطبيق Django عبر Gunicorn، وNginx كـ reverse proxy يتولى الملفات الثابتة وrate limiting، وقاعدة بيانات MySQL، وحاوية تهيئة مخصصة للمخطط والترحيلات. التطبيق مستضاف على VPS بنظام Linux عند Vultr.",
      deploymentList: [
        { label: "Web", text: "— تطبيق Django يعمل عبر Gunicorn" },
        {
          label: "Nginx",
          text: "— reverse proxy، تقديم الملفات الثابتة، SSL، وrate limiting",
        },
        {
          label: "قاعدة البيانات",
          text: "— MySQL، مع حاوية تهيئة مخصصة للإعداد والترحيلات",
        },
      ],
      authTitle: "المصادقة",
      authText:
        "تعتمد المصادقة على backend مخصص لـ OAuth2 (oauth2_backend.py، adapters.py، backends.py) جنبًا إلى جنب مع نظام المصادقة الأساسي في Django. هذا يسمح للمستخدمين بتسجيل الدخول عبر Google، مع بقاء نموذج المستخدم وإدارة الجلسات بالكامل تحت سيطرة التطبيق، بلا اعتماد على خدمة مصادقة خارجية.",
      searchTitle: "البحث",
      searchText:
        "البحث والتصفية (حسب النوع، الوسوم، والترتيب) يعمل عبر Whoosh، مكتبة بحث بلغة Python بالكامل ومُفهرسة على كتالوج الروايات والفصول. هذا جنّبني إدخال خدمة بحث خارجية مثل Elasticsearch، مع الحفاظ على تصفية سريعة ومناسبة للقرّاء على كتالوج في تزايد مستمر.",
      structureTitle: "هيكلة المشروع",
      structureText:
        "الكود مقسّم حسب المسؤولية إلى وحدات منفصلة: المصادقة (adapters.py، backend مخصص لـ OAuth2)، جمع المحتوى (scraper.py)، البحث (search_indexes.py)، تحسين محركات البحث (sitemaps.py)، والتحكم في الوصول (middleware.py، validators.py). وهناك أيضًا مجلد اختبارات وأوامر إدارة تساعد في الصيانة المستمرة.",
    },

    challenges: {
      title: "التحديات والحلول",
      budgetTitle: "تشغيل منصة كبيرة بميزانية فرد واحد",
      budgetParagraphs: [
        "تعلّمت كثيرًا أثناء بناء المنصة، ولم أواجه مشاكل كبيرة في البداية. الصعوبات الحقيقية بدأت عند النشر. اخترت VPS من Vultr: التكلفة معقولة، والتحكّم الذي يمنحني في البيئة يستحق ذلك مقارنة باستضافة مُدارة.",
        "بما أنه كان أول نشر لي، تبيّن أن إعداد الشبكة، وSSL، وتنظيم كل حاويات Docker بدون أن ينهار شيء كان أصعب بكثير مما توقعت. مررت بحاويات فاشلة وتشغيلات تالفة كثيرة، لكنني تجاوزتها واحدة تلو الأخرى ونشرت التطبيق. وبفضل تلك التجربة، أصبحت أنشر مشاريعي الجديدة الآن بأقل احتكاك ممكن.",
      ],
      botTitle: "حركة البوتات ونقطة عمياء في السجلات",
      botP1Before:
        "الأشهر الستة الأولى كانت سليمة: نمو عضوي ثابت وبوتات قليلة جدًا، والمنصة في طريقها لتجاوز 100,000 مستخدم (",
      earlyLinkText: "التحليلات المبكرة هنا",
      botP1After:
        "). في تلك الفترة، بدأت أعتمد أكثر على سجلات مزوّد الاستضافة يوميًا بدل Google Analytics. لاحظت أن استهلاك المعالج ارتفع من حوالي 4-7% إلى نحو 13%، فأضفت بعض الحماية: حظر عناوين IP ذات معدل طلبات غير طبيعي، وتشديد rate limiting في Nginx. السجلات بدت مستقرة بعدها، فانتقلت لأمور أخرى.",
      botP2:
        "ما لم أنتبه له هو أنني حللت جزءًا فقط من المشكلة. كنت قد ضبطت الاحتفاظ بالسجلات على آخر 100-200 إدخال فقط، وكانت البوتات تستهدف حاوية الويب أساسًا في الليل، بينما حاويتا Nginx وقاعدة البيانات، وهما من كنت أتابعهما فعليًا، تبقيان هادئتين. فكل مرة كنت أنظر، كل شيء يبدو طبيعيًا.",
      botP3Before:
        "اكتشفت المشكلة بالصدفة. اضطررت للسفر متأخرًا في إحدى الليالي، وفتحت Google Analytics من باب الفضول، فرأيت ارتفاعات غريبة لا تفسير لها. وعند التدقيق، وجدت انخفاضًا مستمرًا في زمن التفاعل، ومعدل ارتداد أعلى، وأرقام مستخدمين جدد لا تتطابق مع ما كنت أراه في باقي البيانات. كانت البوتات تعمل منذ إصلاحي الأول، خارج النطاق الذي كانت سجلاتي تغطّيه تمامًا (",
      affectedLinkText: "الفترة المتأثرة هنا",
      botP3After: ").",
      botP4:
        "فكّرت في الانتقال إلى Cloudflare لحماية أفضل، لكن العطل العالمي في 18 نوفمبر 2025 جعلني أتردد، فقرّرت أن أبقي معالجة الترافيك داخليًا، للحفاظ على التحكم الكامل وتجنّب إضافة اعتمادية خارجية في مسار حساس. بدلًا من ذلك، تعاملت مع الأمر بنفسي: قواعد rate limiting أوسع في Nginx، حظر IP أكثر صرامة، ومدة احتفاظ بالسجلات أطول بكثير حتى لا يفوتني نمط ليلي مرة أخرى.",
    },

    results: {
      title: "النتائج والأثر",
      stats: [
        { num: "+100K", label: "مستخدم حقيقي" },
        { num: "+4M", label: "مشاهدة صفحة" },
        { num: "~400K", label: "أعلى مشاهدات شهرية" },
        { num: "34 د 15 ث", label: "متوسط مدة الجلسة" },
      ],
      paragraph1:
        "سجّل Google Analytics ما يقارب **199 ألف مستخدم نشط** و**4 ملايين مشاهدة صفحة** طوال عمر المنصة. وبعد تحليل أنماط الترافيك الناتجة عن مشكلة البوتات أعلاه، أقدّر أن نصف هؤلاء المستخدمين تقريبًا حقيقيون، أي ما يقارب **100 ألف مستخدم حقيقي**، وهو رقم يتماشى فعليًا مع المسار الذي كانت المنصة تسلكه في الأشهر الستة الأولى قبل بدء البوتات.",
      paragraph2:
        "وأقوى إشارة على أن المنصة كانت تعمل بنجاح؟ متوسط زمن التفاعل: **34 دقيقة لكل مستخدم نشط**، حتى في خضم هجمات البوتات. وفي الظروف الطبيعية، كان هذا الرقم يتجاوز **الساعة** بشكل منتظم خلال الفترة السليمة. لم تكن هذه زيارات عابرة؛ الناس كانوا يجلسون، يقرؤون، يرجعون للفصول الجديدة، ويستمرون. النمو كان عضويًا بالكامل، بدعم بسيط فقط من الترويج خارج الإنترنت: منشورات A4 في مدينتي، ثم توسّعت على المستوى الوطني بمساعدة العائلة والأصدقاء وبعض الصيدليات المحلية.",
    },

    whatIdChange: {
      title: "ما كنت سأفعله بشكل مختلف",
      list: [
        "متابعة التحليلات ومراقبة الاستضافة بنفس وتيرة المراجعة، بدل الاعتماد على أحدهما كمؤشر للآخر؛ فسجلات الحاويات وGoogle Analytics كشفتا مشاكل مختلفة تمامًا.",
        "الاحتفاظ بالسجلات لفترة أطول من البداية. حدّ 100-200 إدخال كان كافيًا للتصحيح اليومي، لكنه قصير جدًا لرصد أنماط ليلية تتكوّن ببطء.",
        "الاستثمار مبكرًا في بيئة staging حقيقية. تجربة تغييرات الإعدادات مباشرة على VPS الإنتاج نجحت إلى أن توقّفت عن النجاح؛ بيئة منفصلة كانت ستجعل النشر أكثر أمانًا وأسرع في التكرار.",
      ],
    },

    ownership: {
      title: "الملكية والتحقق",
      intro:
        "مستودع الكود خاص لأن MZNovels تطبيق قيد التشغيل فعليًا، بحسابات مستخدمين ومحتوى منشور حقيقي. المستندات بالأسفل تثبت ملكية النطاق وتعرض تحليلات تاريخية تغطي الفترات المذكورة أعلاه.",
      docs: [
        { title: "إيصال شراء النطاق", meta: "PDF · إثبات ملكية النطاق" },
        {
          title: "التحليلات — يناير–يونيو 2025 (النمو المبكر)",
          meta: "PDF · تصدير من Google Analytics",
        },
        {
          title: "التحليلات — يوليو–ديسمبر 2025 (فترة حركة البوتات)",
          meta: "PDF · تصدير من Google Analytics",
        },
        {
          title: "التحليلات — كل الفترات",
          meta: "PDF · تصدير من Google Analytics",
        },
      ],
    },

    stack: {
      title: "المكدّس التقني",
      rows: [
        { label: "الخلفية", value: "Django, Python" },
        { label: "الواجهة الأمامية", value: "HTML5, CSS3, JavaScript" },
        { label: "قاعدة البيانات", value: "MySQL" },
        { label: "البحث", value: "Whoosh" },
        { label: "المصادقة", value: "Django Auth + OAuth2 مخصص (Google)" },
        {
          label: "البنية التحتية",
          value: "Docker, Nginx, Gunicorn, VPS (Linux / Vultr)",
        },
      ],
    },
  },

  ja: {
    backLink: "← 戻る",
    eyebrow: "ケーススタディ",
    subtitle:
      "小説の閲覧・出版ができる無料プラットフォーム。2年間、一人で構築・運用し、**10万人以上のユーザー**が利用。",
    repoNote:
      "ソースコードは非公開です。実際のユーザーアカウントとコンテンツを扱う本番アプリケーションだからです。検証用ドキュメントは下にありますし、面接の場でコードをそのままお見せすることもできます。",
    tags: [
      "Django",
      "MySQL",
      "Docker",
      "Nginx",
      "Whoosh Search",
      "OAuth2",
      "個人プロジェクト",
    ],

    why: {
      title: "開発の経緯",
      paragraphs: [
        "プログラミングを学び始めた頃、自分はWattpadやWebnovelで作品を発表しているアマチュア作家でもありました。それで、自分のプラットフォームを作ってみようと思ったんです。もっと幅広く、ニッチな読者にも届けられて、既存サービスにない機能も作れて、勉強していることをそのまま実践できる場所を。あとは単純に、人が実際に使って読んでくれるものを作りたかった、というのもあります。",
        "公開してみると、想定以上のユーザーと反応があったので、そのまま開発を続けました。機能を増やしながら、自分の作品もそこで発表し続けています。**2024年10月**にローンチして以来、ずっと動かし続けています。",
      ],
    },

    whatItDoes: {
      title: "提供している機能",
      intro:
        "MZNovelsは、作家には完結した出版フローを、読者には広告の少ない無料の発見・フォロー手段を提供します。",
      readersTitle: "読者向け",
      readersList: [
        "サブスクもペイウォールもなしで読める",
        "ジャンル・タグ・ランキングでの高度な検索・絞り込み",
        "ブックマークと読書進捗の記録",
        "アバター付きのユーザープロフィール",
        "Googleアカウントでのログイン（OAuth2）",
      ],
      writersTitle: "作家向け",
      writersList: [
        "専用ダッシュボードから小説を公開・管理",
        "リッチテキスト対応の本格的な章エディタ",
        "章の並び替え・管理ツール",
        "表紙画像のアップロードと作品情報の編集",
      ],
      desktopCaption: "ホーム画面 — PC",
      mobileCaption: "ホーム画面 — モバイル",
    },

    architecture: {
      title: "技術アーキテクチャ",
      intro:
        "アプリ自体はDjangoによるモノリス構成です。個人プロジェクトなので、マイクロサービスのような分散構成より、開発スピードと成熟したエコシステム（管理パネル、ORM、認証）の方を優先しました。フロントエンドはDjangoのテンプレートとHTML・CSS・JavaScriptでサーバー側からレンダリングしていて、SPAのような別レイヤーは持たせていません。これで一人でも回せる規模にデプロイをまとめています。",
      deploymentTitle: "デプロイ構成",
      deploymentText:
        "Docker上で4つのコンテナに分けて動かしています。GunicornでDjangoアプリを動かすWebコンテナ、静的ファイルとレート制限を担当するNginxのリバースプロキシ、MySQLのデータベース、そしてスキーマ設定・マイグレーション専用の初期化コンテナです。本体はVultrのLinux VPS上でホストしています。",
      deploymentList: [
        { label: "Web", text: "— Gunicorn経由で動くDjangoアプリ" },
        {
          label: "Nginx",
          text: "— リバースプロキシ、静的ファイル配信、SSL終端、レート制限",
        },
        {
          label: "データベース",
          text: "— MySQL。設定とマイグレーション専用の初期化コンテナ付き",
        },
      ],
      authTitle: "認証",
      authText:
        "認証はDjango標準の認証システムに加えて、自作のOAuth2バックエンド（oauth2_backend.py、adapters.py、backends.py）を使っています。これでGoogleログインを実現しつつ、ユーザーモデルとセッション管理は完全にアプリ側でコントロールできていて、外部の認証サービスに依存していません。",
      searchTitle: "検索",
      searchText:
        "検索・絞り込み（ジャンル、タグ、ランキング別）はWhooshという純Pythonの検索ライブラリで、小説と章のカタログにインデックスを作って実現しています。これでElasticsearchのような別の検索サービスを入れずに済んで、それでも増え続けるカタログに対して読者向けに速くて適切な絞り込みができています。",
      structureTitle: "プロジェクト構成",
      structureText:
        "コードは役割ごとにモジュールを分けています。認証（adapters.py、自作OAuth2バックエンド）、コンテンツ取得（scraper.py）、検索（search_indexes.py）、SEO（sitemaps.py）、アクセス制御（middleware.py、validators.py）。testsディレクトリと管理コマンドも用意していて、日々のメンテナンスを支えています。",
    },

    challenges: {
      title: "課題と解決策",
      budgetTitle: "個人の予算でスケールを支える",
      budgetParagraphs: [
        "プラットフォームを作る過程では学びが多く、最初の方は大きな問題に当たりませんでした。本当に大変だったのはデプロイの段になってからです。VultrのVPSを選びました。コストは妥当で、マネージドホスティングに比べて環境を自分でコントロールできる点が魅力でした。",
        "初めてのデプロイだったので、ネットワーク設定やSSL、Dockerコンテナ全体を壊さずに動かすことが想像以上に大変でした。コンテナが落ちたり実行が壊れたりを何度も経験しましたが、一つずつ潰してアプリを公開までこぎつけました。その経験のおかげで、今は新しいプロジェクトをほぼ詰まることなくデプロイできています。",
      ],
      botTitle: "ボットトラフィックと、ログの死角",
      botP1Before:
        "最初の6か月は健全でした。ボットはほとんどなく、安定した自然な成長が続いて、10万ユーザーに届きそうなペースでした（",
      earlyLinkText: "当時のアナリティクスはこちら",
      botP1After:
        "）。その頃から、Google Analyticsよりもホスティング側のログを日常的に見るようになっていました。CPU使用率が4〜7%くらいから13%前後まで上がっているのに気づいたので、対策を入れました。リクエスト数が異常に多いIPをブロックして、Nginxのレート制限を強めにしたんです。その後はログも落ち着いて見えたので、それで一安心していました。",
      botP2:
        "ただ、実際には問題の半分しか解決できていませんでした。ログの保持件数を直近100〜200件に絞っていたせいで、ボットは主に夜間にWebコンテナを叩いていて、自分が実際に見ていたNginxとデータベースのコンテナはずっと静かなままだったんです。だから確認するたびに「問題なし」に見えていました。",
      botP3Before:
        "気づけたのはほぼ偶然でした。ある夜、移動中に何気なくGoogle Analyticsを開いてみたら、説明のつかない不自然なスパイクが目に入りました。調べていくと、エンゲージメント時間がずっと下がり続けていて、直帰率も上がっていて、新規ユーザー数も他で見ている数字と合っていない。ボットは最初の対策のときからずっと動き続けていて、ちょうどログがカバーする範囲の外側に隠れていたんです（",
      affectedLinkText: "影響を受けた期間はこちら",
      botP3After: "）。",
      botP4:
        "もっと強い対策としてCloudflareへの移行も考えましたが、2025年11月18日の大規模障害を見て少し迷いました。クリティカルな経路に外部依存を増やすより、トラフィック処理は自分の手元に置いて全部コントロールしたい、と思ったんです。結局、自力での対応を続けることにしました。Nginxのレート制限ルールを広げて、IPブロックも厳しくして、ログの保持期間も大きく延ばして、夜間のパターンを二度と見逃さない体制にしました。",
    },

    results: {
      title: "成果とインパクト",
      stats: [
        { num: "10万+", label: "実ユーザー数" },
        { num: "400万+", label: "総ページビュー" },
        { num: "約40万", label: "月間最大ビュー数" },
        { num: "34分15秒", label: "平均セッション時間" },
      ],
      paragraph1:
        "Google Analyticsの記録では、運用期間全体で約**19.9万人のアクティブユーザー**、**400万ページビュー**でした。上のボット問題のトラフィックパターンを分析した結果、記録上のユーザーのうち実際のユーザーはおそらく半分くらいだと見ています。つまり実数では**およそ10万人**で、これはボットが入り込む前の最初の6か月の伸び方ともだいたい一致します。",
      paragraph2:
        "プラットフォームがちゃんと機能していたことを一番物語っているのは、平均エンゲージメント時間だと思います。ボットによるスパム攻撃の最中でも**アクティブユーザー1人あたり34分**。健全な時期に限れば、この数字は**1時間**を普通に超えていました。一瞬立ち寄って終わるようなトラフィックではなく、座って読んで、続きのために戻ってきて、また読む。そういう人たちでした。成長はすべて自然な口コミで、宣伝もごく地味なものだけでした。最初は自分の街でA4のチラシを配って、そこから家族や友人、近所の薬局にも手伝ってもらいながら全国に広げていきました。",
    },

    whatIdChange: {
      title: "今ならこうする",
      list: [
        "アナリティクスとホスティング側の監視を、片方をもう片方の代わりにせず、同じタイミングで両方チェックする。コンテナのログとAnalyticsでは見えてくる問題が違っていた。",
        "最初からログをもっと長く残しておく。100〜200件という上限は日々のデバッグには十分でも、じわじわ積み重なる夜間の異常を捉えるには短すぎた。",
        "早い段階でちゃんとしたステージング環境を作っておく。本番VPSで直接設定を試すのは、うまくいっている間は問題なかったが、いざ崩れたときの代償が大きい。別環境があれば、デプロイはもっと安全に、もっと速く回せたはず。",
      ],
    },

    ownership: {
      title: "所有権の証明",
      intro:
        "MZNovelsは実際のユーザーアカウントと公開コンテンツを持つ本番アプリケーションなので、ソースリポジトリは非公開にしています。以下のドキュメントで、ドメインの所有権と、上で触れた各期間のアナリティクスを確認できます。",
      docs: [
        { title: "ドメイン購入の領収書", meta: "PDF・ドメイン所有権の証明" },
        {
          title: "アナリティクス — 2025年1〜6月（初期の成長期）",
          meta: "PDF・Google Analyticsエクスポート",
        },
        {
          title: "アナリティクス — 2025年7〜12月（ボットトラフィック期間）",
          meta: "PDF・Google Analyticsエクスポート",
        },
        {
          title: "アナリティクス — 全期間",
          meta: "PDF・Google Analyticsエクスポート",
        },
      ],
    },

    stack: {
      title: "技術スタック",
      rows: [
        { label: "バックエンド", value: "Django, Python" },
        { label: "フロントエンド", value: "HTML5, CSS3, JavaScript" },
        { label: "データベース", value: "MySQL" },
        { label: "検索", value: "Whoosh" },
        { label: "認証", value: "Django Auth + 自作OAuth2（Google）" },
        {
          label: "インフラ",
          value: "Docker, Nginx, Gunicorn, VPS（Linux / Vultr）",
        },
      ],
    },
  },
};
