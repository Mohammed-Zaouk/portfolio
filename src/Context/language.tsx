import { createContext, useContext } from "react";

// Supported language codes
export type Language = "en" | "fr" | "ar" | "ja";

// Shape of the translation object
export interface Translations {
  nav: {
    home: string;
    projects: string;
    workExperience: string;
    education: string;
    about: string;
    verification: string;
  };
  hero: {
    role: string;
    summary: string;
    stats: {
      users: string;
      monthlyViews: string;
      totalViews: string;
      appInstalls: string;
    };
    ctaText: string;
    ctaLink: string;
  };
  sections: {
    work: string;
    career: string;
    background: string;
    more: string;
    credentials: string;
  };
  projectDetails: {
    caseStudyLabel: string;
    dawamz: {
      subtitle: string;
      tags: string[];
      list: string[];
    };
    mznovels: {
      subtitle: string;
      tags: string[];
      list: string[];
    };
    redactmz: {
      subtitle: string;
      tags: string[];
      list: string[];
    };
  };
  workExperience: {
    role: string;
    contract: string;
    items: string[];
  };
  education: {
    badge: string;
    tag: string;
    item: string;
  };
  about: {
    technicalSkillsTitle: string;
    skillLabels: string[];
    languagesTitle: string;
    languages: { lang: string; level: string }[];
  };
  verification: {
    viewDocument: string;
    items: {
      label: string;
      date: string;
      href: string;
      external?: boolean;
      cta?: string;
    }[];
  };
  caseStudyNav: {
    overview: string;
    why: string;
    whatItDoes: string;
    architecture: string;
    challenges: string;
    results: string;
    stack: string;
  };
}

// English (default) //
const en: Translations = {
  nav: {
    home: "Home",
    projects: "Projects",
    workExperience: "Work Experience",
    education: "Education",
    about: "About",
    verification: "Verification",
  },
  hero: {
    role: "Full-Stack Software Engineer · Morocco 🇲🇦",
    summary:
      "Full-Stack Software Engineer with experience building production apps serving **100K+ users**, **4M+ total page views**, and **50K+ mobile installs**. Experienced across frontend, backend, databases, infrastructure, and AI integration.",
    stats: {
      users: "Users",
      monthlyViews: "Monthly Views",
      totalViews: "Total Views",
      appInstalls: "App Installs",
    },
    ctaText: "Open to full-time and contract roles. ",
    ctaLink: "Get in touch →",
  },
  sections: {
    work: "Work",
    career: "Career",
    background: "Background",
    more: "More",
    credentials: "Credentials",
  },
  projectDetails: {
    caseStudyLabel: "View Case Study",
    dawamz: {
      subtitle: "Open/On-Call Pharmacy Finder",
      tags: ["Web + Mobile", "Open Source"],
      list: [
        "Developed a cross-platform pharmacy discovery platform available on web and mobile, helping users locate nearby and on-call pharmacies across Morocco.",
        "Published an Android application with **50,000+ installs** on the Google Play Store.",
        "Built backend APIs, database architecture, and user management systems using Supabase and PostgreSQL.",
        "Integrated geolocation, mapping, and real-time pharmacy search functionality.",
        "Designed, deployed, and maintained the complete product lifecycle from concept to production release.",
        "Supported Arabic, French, and English users through a multilingual experience.",
      ],
    },
    mznovels: {
      subtitle: "Reading and Publishing Platform",
      tags: ["Web Platform", "100K+ Users"],
      list: [
        "Designed, developed, and maintained a full-stack digital publishing platform serving over **100,000 users**.",
        "Generated **4M+ page views** with peak traffic exceeding **400K monthly views**.",
        "Built publishing tools, notifications, search systems, reader engagement features, and content management workflows.",
        "Managed deployment infrastructure using Docker, Nginx, and Linux servers.",
        "Optimized application performance, database operations, and user retention.",
        "Successfully implemented monetization and platform growth strategies.",
      ],
    },
    redactmz: {
      subtitle: "Client-Side PDF Redaction Tool",
      tags: ["Privacy-First", "Open Source"],
      list: [
        'Needed to redact sensitive information from PDF documents before adding them to this portfolio, and found that the only existing options were paid services or "free" tools that uploaded the file to a third-party server to process it.',
        "Built a tool that runs **entirely in the browser**, so the PDF never leaves the user's device — no backend, no upload step, no third party ever sees the file.",
        "Implemented PDF rendering, canvas-based redaction, and PDF generation from scratch in plain JavaScript, as a way to understand how PDFs actually work under the hood rather than relying on a library that abstracts it all away.",
        "Deployed and maintained as a free, open-source tool.",
      ],
    },
  },
  workExperience: {
    role: "Technology Operator",
    contract: "Contract",
    items: [
      "Provided technical support during a national road safety awareness campaign.",
      "Assisted with technology infrastructure setup, monitoring, and troubleshooting.",
      "Configured and maintained tablets running interactive educational software.",
      "Coordinated with event staff to ensure smooth technical operations.",
      "Supported daily technology operations throughout a 20-day public event.",
    ],
  },
  education: {
    badge: "UK Ofqual",
    tag: "RQF Level 6",
    item: "Ofqual-regulated qualification covering software engineering, database systems, networking, cybersecurity, cloud technologies, and IT project management.",
  },
  about: {
    technicalSkillsTitle: "Technical Skills",
    skillLabels: [
      "Languages",
      "Frontend",
      "Mobile",
      "Backend",
      "Databases",
      "DevOps & Infrastructure",
    ],
    languagesTitle: "Languages",
    languages: [
      { lang: "Arabic", level: "Native" },
      { lang: "French", level: "TEF C1" },
      { lang: "English", level: "IELTS B2" },
      { lang: "Japanese", level: "JLPT N3" },
    ],
  },
  verification: {
    viewDocument: "View document →",
    items: [
      {
        label: "OTHM Level 6 Diploma in IT",
        date: "Aug 2026 – Jan 2027",
        href: "/docs/othm-diploma.pdf",
      },
      {
        label: "IELTS Certificate (B2)",
        date: "On file",
        href: "/docs/ielts-certificate.pdf",
      },
      {
        label: "TEF French (C1)",
        date: "On file",
        href: "/docs/tef-french-c1.pdf",
      },
      {
        label: "JLPT N3 Certificate",
        date: "On file",
        href: "/docs/jlpt-n3.pdf",
      },
      {
        label: "NARSA Contract",
        date: "Jul – Aug 2025",
        href: "/docs/narsa-contract.pdf",
      },
      {
        label: "DawaMZ Case Study & Metrics",
        date: "Product walkthrough & growth data",
        href: "/case-study/dawamz",
        external: false,
        cta: "Read case study →",
      },
      {
        label: "MZNovels Case Study & Metrics",
        date: "Product walkthrough & growth data",
        href: "/case-study/mznovels",
        external: false,
        cta: "Read case study →",
      },
    ],
  },
  caseStudyNav: {
    overview: "Overview",
    why: "Why",
    whatItDoes: "What It Does",
    architecture: "Architecture",
    challenges: "Challenges",
    results: "Results",
    stack: "Tech Stack",
  },
};

// French //
const fr: Translations = {
  nav: {
    home: "Accueil",
    projects: "Projets",
    workExperience: "Expérience",
    education: "Formation",
    about: "À propos",
    verification: "Vérification",
  },
  hero: {
    role: "Ingénieur Full-Stack · Maroc 🇲🇦",
    summary:
      "Ingénieur full-stack avec expérience sur des applications en production : **+100 000 utilisateurs**, **+4 millions de pages vues** et **+50 000 installations mobiles**. À l'aise sur toute la chaîne : frontend, backend, bases de données, infrastructure et intégration IA.",
    stats: {
      users: "Utilisateurs",
      monthlyViews: "Vues / mois",
      totalViews: "Vues totales",
      appInstalls: "Installations",
    },
    ctaText: "Disponible pour des postes en CDI ou en freelance. ",
    ctaLink: "Me contacter →",
  },
  sections: {
    work: "Réalisations",
    career: "Parcours",
    background: "Formation",
    more: "Divers",
    credentials: "Certifications",
  },
  projectDetails: {
    caseStudyLabel: "Voir l'étude de cas",
    dawamz: {
      subtitle: "Localisation de pharmacies ouvertes et de garde",
      tags: ["Web + Mobile", "Open Source"],
      list: [
        "Conception et développement d'une plateforme cross-platform de recherche de pharmacies (web et mobile) permettant de localiser les pharmacies ouvertes et de garde partout au Maroc.",
        "Application Android publiée sur le Google Play Store avec plus de **50 000 installations**.",
        "Développement des API backend, de l'architecture base de données et des systèmes de gestion des utilisateurs avec Supabase et PostgreSQL.",
        "Intégration de la géolocalisation, de la cartographie et de la recherche de pharmacies en temps réel.",
        "Pilotage du produit de bout en bout : conception, déploiement et maintenance jusqu'à la mise en production.",
        "Interface disponible en arabe, français et anglais.",
      ],
    },
    mznovels: {
      subtitle: "Plateforme de lecture et de publication",
      tags: ["Plateforme Web", "+100 000 utilisateurs"],
      list: [
        "Conception, développement et maintenance d'une plateforme de publication numérique full-stack pour plus de **100 000 utilisateurs**.",
        "Plus de **4 millions de pages vues** générées, avec des pics dépassant **400 000 vues mensuelles**.",
        "Développement des outils de publication, du système de notifications, de la recherche, des fonctionnalités d'engagement lecteur et des workflows de gestion de contenu.",
        "Infrastructure gérée avec Docker, Nginx et serveurs Linux.",
        "Optimisation des performances applicatives, des requêtes base de données et de la rétention utilisateur.",
        "Mise en place d'une stratégie de monétisation et de croissance de la plateforme.",
      ],
    },
    redactmz: {
      subtitle: "Outil de rédaction de PDF côté client",
      tags: ["Respect de la vie privée", "Open Source"],
      list: [
        "Besoin de masquer des informations sensibles dans des documents PDF avant de les intégrer à ce portfolio, et constat que les seules options disponibles étaient des services payants ou des outils « gratuits » qui envoient le fichier à un serveur tiers pour le traiter.",
        "Développement d'un outil fonctionnant **entièrement dans le navigateur** : le PDF ne quitte jamais l'appareil de l'utilisateur, sans backend, sans étape d'upload, et sans qu'aucun tiers n'ait accès au fichier.",
        "Implémentation du rendu PDF, de la rédaction via canvas et de la génération de PDF entièrement en JavaScript natif, pour comprendre le fonctionnement réel des PDF plutôt que de dépendre d'une bibliothèque qui masque tout ce travail.",
        "Déployé et maintenu en tant qu'outil gratuit et open source.",
      ],
    },
  },
  workExperience: {
    role: "Opérateur Technique",
    contract: "Mission",
    items: [
      "Support technique lors d'une campagne nationale de sensibilisation à la sécurité routière.",
      "Mise en place, surveillance et maintenance de l'infrastructure technologique de l'événement.",
      "Configuration et entretien de tablettes sous logiciel éducatif interactif.",
      "Coordination avec les équipes terrain pour garantir le bon déroulement des opérations.",
      "Suivi des opérations techniques au quotidien pendant 20 jours d'événement grand public.",
    ],
  },
  education: {
    badge: "Ofqual – Royaume-Uni",
    tag: "RQF Niveau 6",
    item: "Diplôme accrédité Ofqual couvrant le génie logiciel, les bases de données, les réseaux, la cybersécurité, le cloud et la gestion de projets informatiques.",
  },
  about: {
    technicalSkillsTitle: "Compétences techniques",
    skillLabels: [
      "Langages",
      "Frontend",
      "Mobile",
      "Backend",
      "Bases de données",
      "DevOps & Infrastructure",
    ],
    languagesTitle: "Langues",
    languages: [
      { lang: "Arabe", level: "Langue maternelle" },
      { lang: "Français", level: "TEF C1" },
      { lang: "Anglais", level: "IELTS B2" },
      { lang: "Japonais", level: "JLPT N3" },
    ],
  },
  verification: {
    viewDocument: "Voir le document →",
    items: [
      {
        label: "Diplôme OTHM Niveau 6 – Informatique",
        date: "Août 2026 – Janv. 2027",
        href: "/docs/othm-diploma.pdf",
      },
      {
        label: "Certificat IELTS (B2)",
        date: "Disponible sur demande",
        href: "/docs/ielts-certificate.pdf",
      },
      {
        label: "TEF Français (C1)",
        date: "Disponible sur demande",
        href: "/docs/tef-french-c1.pdf",
      },
      {
        label: "Certificat JLPT N3",
        date: "Disponible sur demande",
        href: "/docs/jlpt-n3.pdf",
      },
      {
        label: "Contrat NARSA",
        date: "Juil. – Août 2025",
        href: "/docs/narsa-contract.pdf",
      },
      {
        label: "Étude de cas & métriques – DawaMZ",
        date: "Aperçu du produit et données de croissance",
        href: "/case-study/dawamz",
        external: false,
        cta: "Lire l'étude de cas →",
      },
      {
        label: "Étude de cas & métriques – MZNovels",
        date: "Aperçu du produit et données de croissance",
        href: "/case-study/mznovels",
        external: false,
        cta: "Lire l'étude de cas →",
      },
    ],
  },
  caseStudyNav: {
    overview: "Aperçu",
    why: "Pourquoi",
    whatItDoes: "Fonctionnalités",
    architecture: "Architecture",
    challenges: "Défis",
    results: "Résultats",
    stack: "Stack technique",
  },
};

// Arabic //
const ar: Translations = {
  nav: {
    home: "الرئيسية",
    projects: "المشاريع",
    workExperience: "الخبرة",
    education: "التعليم",
    about: "نبذة",
    verification: "الوثائق",
  },
  hero: {
    role: "مهندس برمجيات Full-Stack · المغرب 🇲🇦",
    summary:
      "مهندس برمجيات Full-Stack بخبرة في بناء تطبيقات إنتاجية حقيقية: **أكثر من 100 ألف مستخدم**، **4 ملايين مشاهدة للصفحات**، و**50 ألف تثبيت** على الهاتف. خبرة شاملة تغطي الواجهات، الخوادم، قواعد البيانات، البنية التحتية، ودمج الذكاء الاصطناعي.",
    stats: {
      users: "مستخدم",
      monthlyViews: "مشاهدات شهرية",
      totalViews: "إجمالي المشاهدات",
      appInstalls: "تثبيتات التطبيق",
    },
    ctaText: "متاح للعمل بدوام كامل أو بشكل مستقل. ",
    ctaLink: "تواصل معي ←",
  },
  sections: {
    work: "الأعمال",
    career: "المسيرة",
    background: "الدراسة",
    more: "المزيد",
    credentials: "الشهادات",
  },
  projectDetails: {
    caseStudyLabel: "عرض دراسة الحالة",
    dawamz: {
      subtitle: "تطبيق للبحث عن الصيدليات المفتوحة والمناوبة",
      tags: ["ويب وجوال", "Open Source"],
      list: [
        "بناء منصة متعددة المنصات تساعد المستخدمين على إيجاد أقرب صيدلية مفتوحة أو مناوبة في مختلف مدن المغرب.",
        "نشر تطبيق أندرويد على متجر Google Play وتجاوز **50,000 عملية تثبيت**.",
        "تطوير واجهات API للخادم، وهيكلة قواعد البيانات، وأنظمة إدارة المستخدمين باستخدام Supabase وPostgreSQL.",
        "دمج خدمات تحديد الموقع الجغرافي والخرائط والبحث الفوري عن الصيدليات.",
        "إدارة دورة حياة المنتج بالكامل من الفكرة حتى الإطلاق الرسمي.",
        "دعم كامل للغات العربية والفرنسية والإنجليزية.",
      ],
    },
    mznovels: {
      subtitle: "منصة قراءة ونشر رقمي",
      tags: ["منصة ويب", "أكثر من 100 ألف مستخدم"],
      list: [
        "تصميم وتطوير وصيانة منصة نشر رقمية متكاملة تخدم أكثر من **100,000 مستخدم**.",
        "تحقيق أكثر من **4 ملايين مشاهدة للصفحات**، مع ذروة تجاوزت **400 ألف مشاهدة شهريًا**.",
        "بناء أدوات النشر، والإشعارات، والبحث، وميزات تفاعل القراء، وسير عمل إدارة المحتوى.",
        "إدارة بنية النشر باستخدام Docker وNginx وخوادم Linux.",
        "تحسين أداء التطبيق وعمليات قاعدة البيانات ومعدل الاحتفاظ بالمستخدمين.",
        "تنفيذ استراتيجيات تحقيق الدخل ونمو المنصة بنتائج ملموسة.",
      ],
    },
    redactmz: {
      subtitle:
        "أداة لحجب المعلومات الحساسة في ملفات PDF تعمل بالكامل من جهة المستخدم",
      tags: ["خصوصية كاملة", "مفتوح المصدر"],
      list: [
        "احتجت إلى حجب معلومات حساسة من ملفات PDF قبل إضافتها إلى هذا الموقع، فوجدت أن الخيارات المتاحة كانت إما مدفوعة أو أدوات «مجانية» ترفع الملف إلى خادم خارجي لمعالجته.",
        "تطوير أداة تعمل **بالكامل داخل المتصفح**، فلا يغادر ملف PDF جهاز المستخدم أبدًا، دون خادم أو خطوة رفع، ودون أن يصل الملف إلى أي طرف ثالث.",
        "بناء عمليات عرض PDF، والتعتيم عبر Canvas، وتوليد الملف من الصفر بلغة JavaScript خام، كطريقة لفهم كيفية عمل ملفات PDF فعليًا بدلًا من الاعتماد على مكتبة جاهزة تخفي كل هذا التعقيد.",
        "نشر وصيانة الأداة كمشروع مجاني ومفتوح المصدر.",
      ],
    },
  },
  workExperience: {
    role: "منسق تقني",
    contract: "عقد",
    items: [
      "تقديم الدعم التقني خلال حملة وطنية للتوعية بالسلامة الطرقية.",
      "الإشراف على إعداد البنية التحتية التقنية ومراقبتها وحل مشاكلها.",
      "إعداد وصيانة أجهزة لوحية تشغّل برامج تعليمية تفاعلية.",
      "التنسيق مع فريق الفعالية لضمان سير العمليات التقنية دون انقطاع.",
      "دعم العمليات التقنية اليومية طوال فعالية عامة امتدت 20 يومًا.",
    ],
  },
  education: {
    badge: "Ofqual – المملكة المتحدة",
    tag: "RQF – المستوى السادس",
    item: "شهادة معتمدة من Ofqual تشمل هندسة البرمجيات، وقواعد البيانات، والشبكات، والأمن السيبراني، والحوسبة السحابية، وإدارة مشاريع تكنولوجيا المعلومات.",
  },
  about: {
    technicalSkillsTitle: "المهارات التقنية",
    skillLabels: [
      "لغات البرمجة",
      "الواجهة الأمامية",
      "تطبيقات الجوال",
      "الواجهة الخلفية",
      "قواعد البيانات",
      "DevOps والبنية التحتية",
    ],
    languagesTitle: "اللغات",
    languages: [
      { lang: "العربية", level: "اللغة الأم" },
      { lang: "الفرنسية", level: "TEF C1" },
      { lang: "الإنجليزية", level: "IELTS B2" },
      { lang: "اليابانية", level: "JLPT N3" },
    ],
  },
  verification: {
    viewDocument: "عرض المستند ←",
    items: [
      {
        label: "دبلوم OTHM المستوى السادس – تكنولوجيا المعلومات",
        date: "أغسطس 2026 – يناير 2027",
        href: "/docs/othm-diploma.pdf",
      },
      {
        label: "شهادة IELTS (B2)",
        date: "متوفرة عند الطلب",
        href: "/docs/ielts-certificate.pdf",
      },
      {
        label: "شهادة TEF الفرنسية (C1)",
        date: "متوفرة عند الطلب",
        href: "/docs/tef-french-c1.pdf",
      },
      {
        label: "شهادة JLPT N3",
        date: "متوفرة عند الطلب",
        href: "/docs/jlpt-n3.pdf",
      },
      {
        label: "عقد NARSA",
        date: "يوليو – أغسطس 2025",
        href: "/docs/narsa-contract.pdf",
      },
      {
        label: "دراسة حالة ومقاييس DawaMZ",
        date: "نظرة على المنتج وبيانات النمو",
        href: "/case-study/dawamz",
        external: false,
        cta: "قراءة دراسة الحالة ←",
      },
      {
        label: "دراسة حالة ومقاييس MZNovels",
        date: "نظرة على المنتج وبيانات النمو",
        href: "/case-study/mznovels",
        external: false,
        cta: "قراءة دراسة الحالة ←",
      },
    ],
  },
  caseStudyNav: {
    overview: "نظرة عامة",
    why: "السبب",
    whatItDoes: "الميزات",
    architecture: "البنية التقنية",
    challenges: "التحديات",
    results: "النتائج",
    stack: "التقنيات",
  },
};

//  Japanese //
const ja: Translations = {
  nav: {
    home: "ホーム",
    projects: "プロジェクト",
    workExperience: "職務経歴",
    education: "学歴",
    about: "概要",
    verification: "証明書類",
  },
  hero: {
    role: "フルスタックエンジニア · モロッコ 🇲🇦",
    summary:
      "本番環境で稼働するアプリを構築してきたフルスタックエンジニアです。累計**10万人以上のユーザー**、**400万以上のページビュー**、**5万件以上のモバイルインストール**を達成。フロントエンドからバックエンド、データベース、インフラ、AI連携まで幅広く対応しています。",
    stats: {
      users: "ユーザー数",
      monthlyViews: "月間PV",
      totalViews: "累計PV",
      appInstalls: "インストール数",
    },
    ctaText: "正社員・業務委託、いずれも歓迎です。",
    ctaLink: "お問い合わせ →",
  },
  sections: {
    work: "制作実績",
    career: "職歴",
    background: "経歴",
    more: "その他",
    credentials: "資格・証明書",
  },
  projectDetails: {
    caseStudyLabel: "ケーススタディを見る",
    dawamz: {
      subtitle: "営業中・当直薬局の検索アプリ",
      tags: ["Web + モバイル", "オープンソース"],
      list: [
        "モロッコ全土で近くの薬局や当直薬局をすぐに見つけられる、Web・モバイル両対応の薬局検索サービスを開発。",
        "Google PlayストアでAndroidアプリを公開し、**5万件以上のインストール**を達成。",
        "SupabaseとPostgreSQLを用いてバックエンドAPI・データベース設計・ユーザー管理システムを構築。",
        "位置情報・地図表示・リアルタイム薬局検索機能を実装。",
        "企画から本番リリースまで、プロダクトのライフサイクル全体を一人で担当。",
        "アラビア語・フランス語・英語の3言語に対応した多言語UIを提供。",
      ],
    },
    mznovels: {
      subtitle: "読書・出版プラットフォーム",
      tags: ["Webサービス", "10万人以上のユーザー"],
      list: [
        "**10万人以上**が利用するフルスタックのデジタル出版プラットフォームを設計・開発・運用。",
        "累計**400万以上のページビュー**を記録し、月間最大**40万PV**を突破。",
        "執筆・出版ツール、通知機能、検索、読者エンゲージメント、コンテンツ管理ワークフローを構築。",
        "Docker・Nginx・Linuxサーバーによるデプロイ基盤を構築・運用。",
        "アプリパフォーマンス・DBクエリ・ユーザー継続率を継続的に改善。",
        "収益化施策とプラットフォーム成長戦略を立案・実施。",
      ],
    },
    redactmz: {
      subtitle: "完全クライアントサイドのPDF墨消しツール",
      tags: ["プライバシー重視", "オープンソース"],
      list: [
        "ポートフォリオに掲載するPDFから機密情報を隠す必要があり、調べてみたところ既存の選択肢は有料サービスか、ファイルを第三者サーバーにアップロードして処理する「無料」ツールしかなかった。",
        "**完全にブラウザ内で動作**するツールを開発し、PDFファイルがユーザーの端末から一切外に出ない仕組みにした（バックエンドなし、アップロードなし、第三者がファイルを見ることもない）。",
        "PDFのレンダリング、Canvasによる墨消し処理、PDF生成を、既存のライブラリに頼らず素のJavaScriptでゼロから実装し、PDFの仕組みを実際に理解するための学習にもした。",
        "無料・オープンソースのツールとして公開・運用中。",
      ],
    },
  },
  workExperience: {
    role: "テクニカルオペレーター",
    contract: "業務委託",
    items: [
      "全国交通安全啓発キャンペーンにおける技術サポートを担当。",
      "技術インフラの構築・監視・障害対応を実施。",
      "インタラクティブな教育ソフトウェアを搭載したタブレット端末の設定・保守を担当。",
      "イベントスタッフと連携し、円滑な技術運営を確保。",
      "20日間の公開イベントを通じて、日々の技術運用をサポート。",
    ],
  },
  education: {
    badge: "英国 Ofqual 認定",
    tag: "RQFレベル6",
    item: "ソフトウェア工学・データベース・ネットワーク・サイバーセキュリティ・クラウド技術・ITプロジェクト管理を網羅する、Ofqual認定の資格。",
  },
  about: {
    technicalSkillsTitle: "技術スキル",
    skillLabels: [
      "プログラミング言語",
      "フロントエンド",
      "モバイル",
      "バックエンド",
      "データベース",
      "DevOps・インフラ",
    ],
    languagesTitle: "話せる言語",
    languages: [
      { lang: "アラビア語", level: "母語" },
      { lang: "フランス語", level: "TEF C1" },
      { lang: "英語", level: "IELTS B2" },
      { lang: "日本語", level: "JLPT N3" },
    ],
  },
  verification: {
    viewDocument: "書類を見る →",
    items: [
      {
        label: "OTHMレベル6 ITディプロマ",
        date: "2026年8月 – 2027年1月",
        href: "/docs/othm-diploma.pdf",
      },
      {
        label: "IELTS証明書 (B2)",
        date: "提出可能",
        href: "/docs/ielts-certificate.pdf",
      },
      {
        label: "TEF フランス語 (C1)",
        date: "提出可能",
        href: "/docs/tef-french-c1.pdf",
      },
      {
        label: "JLPT N3 合格証書",
        date: "提出可能",
        href: "/docs/jlpt-n3.pdf",
      },
      {
        label: "NARSA 業務委託契約書",
        date: "2025年7月 – 8月",
        href: "/docs/narsa-contract.pdf",
      },
      {
        label: "DawaMZ ケーススタディ & メトリクス",
        date: "プロダクト概要と成長データ",
        href: "/case-study/dawamz",
        external: false,
        cta: "ケーススタディを読む →",
      },
      {
        label: "MZNovels ケーススタディ & メトリクス",
        date: "プロダクト概要と成長データ",
        href: "/case-study/mznovels",
        external: false,
        cta: "ケーススタディを読む →",
      },
    ],
  },
  caseStudyNav: {
    overview: "概要",
    why: "開発の背景",
    whatItDoes: "機能",
    architecture: "アーキテクチャ",
    challenges: "課題と解決",
    results: "成果",
    stack: "技術スタック",
  },
};

// Map of all translations, keyed by language code
export const translations: Record<Language, Translations> = { en, fr, ar, ja };

// Languages that should be displayed right-to-left
export const rtlLanguages: Language[] = ["ar"];

export const STORAGE_KEY = "app-language";
export const DEFAULT_LANGUAGE: Language = "en";

export interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
