import bank from "../Assets/Projects/bank.webp";
import Dalil from "../Assets/Projects/Dalil.webp";
import logistics from "../Assets/Projects/logistics.webp";
import AlArab from "../Assets/Projects/AlArab.webp";
import Radiation from "../Assets/Projects/Radiation.webp";
import BinDowalPay from "../Assets/Projects/BinDowalPay.webp";
import MikroTik from "../Assets/Projects/MikroTik-login-page.webp";
import movies from "../Assets/Projects/movie-app.webp";
import Balleghny from "../Assets/Projects/Balleghny.webp";
import ArabWD from "../Assets/Projects/ArabWD.webp";
import SahelTeam from "../Assets/Projects/sahel.webp";
import meoh from "../Assets/Projects/meoh.webp";
import newBank from "../Assets/Projects/newBank.webp";
// import gold from "../Assets/Projects/gold.webp";
import port from "../Assets/Projects/port.webp";
import prince from "../Assets/Projects/PRINCE_LINE.webp";
import bindowalsolar from "../Assets/Projects/bindowalsolar.webp";
import HRMS from "../Assets/Projects/HRMS.webp";
import Inventory from "../Assets/Projects/Inventory.webp";

export const PROJECT_CATEGORIES = [
  { id: "all", labelKey: "projects.categories.all" },
  { id: "fintech", labelKey: "projects.categories.fintech" },
  { id: "enterprise", labelKey: "projects.categories.enterprise" },
  { id: "corporate", labelKey: "projects.categories.corporate" },
  { id: "webapps", labelKey: "projects.categories.webapps" },
];

export const PROJECTS_DATA = [
  {
    id: "newBank",
    i18nKey: "newBank",
    imgPath: newBank,
    category: "fintech",
    featured: true,
    bentoSpan: "wide",
    status: "live",
    accent: "emerald",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "SEO"],
    demoLink: "https://www.bank-bindowal.com/",
    role: {
      ar: "مهندس الواجهة الأمامية وتجربة المستخدم (Lead Front-End)",
      en: "Lead Front-End & UI/UX Engineer",
    },
    highlights: {
      ar: [
        "إعادة بناء كاملة لبوابة البنك الرقمية بمعمارية Next.js الحديثة وأداء تحميل فائق السرعة.",
        "تصميم متجاوب بالكامل يدعم الهوية المصرفية الإسلامية ويسهل الوصول لخدمات التمويل الأصغر للأفراد والشركات.",
        "تحسين معايير الأداء (Core Web Vitals) وتهيئة محركات البحث (SEO) ودعم التصفح السلس على جميع الأجهزة.",
      ],
      en: [
        "Complete architectural rebuild of the bank's digital portal using Next.js and TypeScript for high-speed SSR/SSG.",
        "Crafted a trustworthy, responsive financial UI tailored for Islamic microfinance retail and corporate clients.",
        "Optimized Core Web Vitals, accessibility standards, and multi-device responsiveness.",
      ],
    },
  },
  // {
  //   id: "gold",
  //   i18nKey: "gold",
  //   imgPath: gold,
  //   category: "fintech",
  //   featured: true,
  //   bentoSpan: "wide",
  //   status: "development",
  //   accent: "amber",
  //   techStack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "Charts", "Auth", "CMS"],
  //   role: {
  //     ar: "مطور واجهات الأنظمة المالية ولوحات التحكم",
  //     en: "FinTech Front-End & Dashboard Architect",
  //   },
  //   highlights: {
  //     ar: [
  //       "هندسة منصة مالية متكاملة لإدارة محافظ الذهب، أرصدة العملاء، العمليات المالية، ونظام الموافقات متعدد المستويات.",
  //       "دمج رسوم بيانية تفاعلية حية لعرض مؤشرات الأسعار وحجم التداولات والتقارير المالية اللحظية.",
  //       "بناء نظام مصادقة آمن وصلاحيات مستخدمين (RBAC) مع نظام إدارة محتوى مدمج (CMS).",
  //     ],
  //     en: [
  //       "Architected a full-scale FinTech platform for managing digital gold wallets, bullion transactions, and multi-stage approvals.",
  //       "Integrated real-time interactive financial charts and automated reporting dashboards.",
  //       "Built role-based authentication (RBAC) flows and a tailored CMS for platform administrators.",
  //     ],
  //   },
  // },
  {
    id: "binDowal",
    i18nKey: "binDowal",
    imgPath: BinDowalPay,
    category: "fintech",
    featured: true,
    bentoSpan: "normal",
    status: "live",
    accent: "cyan",
    techStack: ["React.js", "Tailwind CSS", "REST API", "Framer/Motion"],
    demoLink: "https://bin-dowal-pay-gamma.vercel.app/",
    role: {
      ar: "مطور واجهات أمامية (React Developer)",
      en: "Front-End React Developer",
    },
    highlights: {
      ar: [
        "تطوير البوابة الرقمية لمحفظة بن دول باي — إحدى أبرز بوابات الدفع الإلكتروني والتحويلات المالية في اليمن.",
        "تصميم تجربة مستخدم عصرية تستعرض ميزات الدفع الفوري، نقاط البيع، والتحويلات الآمنة.",
        "ضمان سرعة تحميل عالية وتوافق تام مع الهواتف الذكية بمختلف أحجامها.",
      ],
      en: [
        "Developed the web portal for Bin Dowal Pay, Yemen's leading electronic payment gateway and mobile wallet.",
        "Designed high-conversion interactive sections showcasing instant transfers, bill payments, and QR merchant solutions.",
        "Engineered mobile-first responsive layouts with ultra-low bundle overhead.",
      ],
    },
  },
  {
    id: "HRMS",
    i18nKey: "HRMS",
    imgPath: HRMS,
    category: "enterprise",
    featured: true,
    bentoSpan: "normal",
    status: "live",
    accent: "cyan",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Data Tables", "Analytics"],
    role: {
      ar: "مهندس واجهات الأنظمة الإدارية",
      en: "Enterprise UI/UX & React Engineer",
    },
    highlights: {
      ar: [
        "بناء نظام شامل لإدارة الموارد البشرية يغطي ملفات الموظفين، الحضور والانصراف، الإجازات، ومسيرات الرواتب.",
        "تصميم جداول بيانات متقدمة مع فلاتر فورية وتقارير إدارية قابلة للتصدير.",
        "بنية كود معيارية بـ TypeScript تضمن سهولة الصيانة والتوسع المستقبلي للشركات المتوسطة والكبيرة.",
      ],
      en: [
        "Built an end-to-end HR Management System covering employee directories, attendance tracking, leave workflows, and payroll.",
        "Designed complex data tables with instant filtering, pagination, and executive analytics widgets.",
        "Implemented strict TypeScript interfaces and reusable UI primitives for long-term scalability.",
      ],
    },
  },
  {
    id: "meoh",
    i18nKey: "meoh",
    imgPath: meoh,
    category: "enterprise",
    featured: true,
    bentoSpan: "normal",
    status: "live",
    accent: "emerald",
    techStack: ["Laravel", "JavaScript", "Bootstrap", "Auth", "Custom CMS"],
    demoLink: "https://meohgov.netlify.app/",
    role: {
      ar: "مطور Full-Stack (الواجهة التفاعلية + لوحة التحكم)",
      en: "Full-Stack Developer (Kiosk SPA & CMS)",
    },
    highlights: {
      ar: [
        "ابتكار تطبيق شاشات رقمية تفاعلي (Digital Signage SPA) مخصص لشاشات العرض الذكية في المؤسسات الحكومية (مكتب وزارة التربية والتعليم).",
        "تطوير لوحة تحكم خلفية بـ Laravel للتحكم الفوري بالأخبار المرئية، الفيديوهات، شريط الأخبار العاجلة، والفعاليات القادمة.",
        "تحديث تلقائي للمحتوى في الوقت الفعلي دون الحاجة لإعادة تحميل الشاشة.",
      ],
      en: [
        "Engineered an interactive Digital Signage Kiosk SPA tailored for large smart displays in government institutions.",
        "Built a custom Laravel CMS backend allowing administrators to broadcast videos, news tickers, events, and statistics.",
        "Optimized for continuous 24/7 kiosk operation with smooth transitions and real-time updates.",
      ],
    },
  },
  {
    id: "bindowalsolar",
    i18nKey: "bindowalsolar",
    imgPath: bindowalsolar,
    category: "corporate",
    featured: true,
    bentoSpan: "normal",
    status: "live",
    accent: "emerald",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    demoLink: "https://www.bindowalsolar.com/",
    role: {
      ar: "مطور الواجهة الأمامية (Next.js Engineer)",
      en: "Front-End Next.js Engineer",
    },
    highlights: {
      ar: [
        "تصميم وتطوير المنصة الرقمية لشركة بن دول للطاقة المتجددة بأسلوب بصري يعكس الاستدامة والابتكار.",
        "استعراض مشاريع الطاقة الشمسية والحلول الهندسية بتجربة تصفح سريعة ومتجاوبة.",
        "بناء بـ Next.js و TypeScript لتحقيق أعلى درجات الأداء وتصدر نتائج البحث.",
      ],
      en: [
        "Designed and built the corporate platform for Bin Dowal Renewable Energy with a clean, sustainability-focused aesthetic.",
        "Showcased solar engineering projects and product catalogs with fast page transitions.",
        "Leveraged Next.js and TypeScript for optimal SEO indexing and mobile performance.",
      ],
    },
  },
  {
    id: "balleghny",
    i18nKey: "balleghny",
    imgPath: Balleghny,
    category: "enterprise",
    featured: false,
    status: "live",
    accent: "cyan",
    techStack: ["React.js", "Tailwind CSS", "Charts", "Auth", "REST API"],
    role: {
      ar: "مطور لوحة التحكم (Front-End Developer)",
      en: "Dashboard Front-End Developer",
    },
    highlights: {
      ar: [
        "بناء لوحة تحكم تفاعلية لإدارة مهام الموظفين ومتابعة البلاغات والعمليات الميدانية لحظياً.",
        "ربط متكامل مع واجهات برمجة التطبيقات (APIs) مع نظام مصادقة آمن وحماية للمسارات.",
        "تمثيل بصري للبيانات عبر رسوم بيانية تفاعلية تسهل اتخاذ القرار.",
      ],
      en: [
        "Developed a responsive operations dashboard for tracking employee tasks and real-time workflow status.",
        "Integrated secure token authentication and asynchronous REST API data synchronization.",
        "Created visual KPI cards and analytics charts for operational oversight.",
      ],
    },
  },
  {
    id: "Inventory",
    i18nKey: "Inventory",
    imgPath: Inventory,
    category: "enterprise",
    featured: false,
    status: "live",
    accent: "cyan",
    techStack: ["JavaScript", "Bootstrap", "Data Tables", "Reports"],
    role: {
      ar: "مطور واجهات النظام (Front-End Developer)",
      en: "System Front-End Developer",
    },
    highlights: {
      ar: [
        "تصميم واجهة إدارة المستودعات وحركة الأصناف الواردة والصادرة بدقة وسهولة.",
        "لوحة تنبيهات لمستويات المخزون المنخفضة وتقارير جرد تفصيلية.",
        "واجهة سريعة وخفيفة مناسبة للعمل اليومي المكثف على أجهزة نقاط البيع والمحاسبة.",
      ],
      en: [
        "Engineered an intuitive warehouse interface for tracking stock movements, SKUs, and supplier deliveries.",
        "Built automated low-stock warning indicators and printable inventory audit reports.",
        "Optimized for high-speed daily data entry across desktop and tablet terminals.",
      ],
    },
  },
  {
    id: "arabwd",
    i18nKey: "arabwd",
    imgPath: ArabWD,
    category: "corporate",
    featured: false,
    status: "live",
    accent: "cyan",
    techStack: ["JavaScript", "GSAP", "Bootstrap", "Interactive UI"],
    demoLink: "https://arabwaredos.com/",
    role: {
      ar: "مطور الواجهة الأمامية والحركة (UI & Motion Developer)",
      en: "Front-End & Motion Developer",
    },
    highlights: {
      ar: [
        "تطوير الموقع الرسمي لشركة ArabWare Dos البرمجية مع توظيف مكتبة GSAP لإضافة تأثيرات حركية انسيابية.",
        "استعراض خدمات الشركة ومنتجاتها التقنية بهوية بصرية حديثة تعكس احترافية الفريق.",
        "تحسين سلاسة التمرير والتفاعل عبر مختلف المتصفحات والشاشات.",
      ],
      en: [
        "Developed the official website for ArabWare Dos Software Company featuring choreographed GSAP scroll animations.",
        "Presented software services and enterprise case studies in a sleek, engaging layout.",
        "Ensured smooth 60fps animation performance across desktop and mobile devices.",
      ],
    },
  },
  {
    id: "sahel",
    i18nKey: "sahel",
    imgPath: SahelTeam,
    category: "corporate",
    featured: false,
    status: "live",
    accent: "emerald",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://sahil-team.vercel.app/",
    role: {
      ar: "مطور المنصة (Next.js Developer)",
      en: "Next.js Front-End Developer",
    },
    highlights: {
      ar: [
        "بناء المنصة الرقمية لنادي الساحل الرياضي بقصيعر لعرض أخبار الفريق، نتائج المباريات، والبطولات.",
        "معرض وسائط تفاعلي للفعاليات الرياضية وتشكيلة اللاعبين.",
        "أداء سريع جداً بفضل Next.js وتصميم متجاوب لمشجعي النادي على الهواتف.",
      ],
      en: [
        "Built a sports portal for Sahel Sports Club showcasing match fixtures, live scores, and club news.",
        "Designed an interactive media gallery and player roster showcase.",
        "Delivered instant page loads on mobile networks via Next.js optimization.",
      ],
    },
  },
  {
    id: "prince",
    i18nKey: "prince",
    imgPath: prince,
    category: "corporate",
    featured: false,
    status: "live",
    accent: "cyan",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive"],
    demoLink: "https://princelineco.com/",
    role: {
      ar: "مطور ومصمم الواجهة (Web Developer)",
      en: "Front-End Web Developer",
    },
    highlights: {
      ar: [
        "تصميم وتطوير موقع شركة برنس لاين للملاحة البحرية وتموين السفن بهوية بحرية احترافية.",
        "عرض واضح لخدمات الشحن البحري، الوكالات الملاحية، والتوريدات.",
        "سرعة تحميل عالية وتوافق تام مع جميع الشاشات.",
      ],
      en: [
        "Designed and developed the corporate web presence for Prince Line Marine Navigation and Supply.",
        "Structured clear service catalogs for maritime shipping, port agency, and vessel supply.",
        "Lightweight, fast-loading architecture ideal for international and local clients.",
      ],
    },
  },
  {
    id: "logistics",
    i18nKey: "logistics",
    imgPath: logistics,
    category: "corporate",
    featured: false,
    status: "live",
    accent: "amber",
    techStack: ["React.js", "SEO", "Interactive Forms", "Responsive"],
    demoLink: "https://bdlogisticsc.com/",
    role: {
      ar: "مطور واجهات React",
      en: "React Front-End Developer",
    },
    highlights: {
      ar: [
        "تطوير المنصة الإلكترونية لشركة بن دول للمقاولات والخدمات اللوجستية لاستعراض المشاريع الإنشائية والهندسية.",
        "تهيئة متقدمة لمحركات البحث (SEO) ونماذج طلب عروض أسعار وتواصل مباشر.",
        "تصميم يعكس ضخامة مشاريع البنية التحتية والطرق والمقاولات العامة.",
      ],
      en: [
        "Developed the corporate platform for Bin Dowal Contracting & Logistics highlighting infrastructure and engineering projects.",
        "Implemented technical SEO best practices and streamlined client inquiry forms.",
        "Crafted a bold industrial layout showcasing roadworks, water, and electrical engineering divisions.",
      ],
    },
  },
  {
    id: "radiation",
    i18nKey: "radiation",
    imgPath: Radiation,
    category: "corporate",
    featured: true,
    status: "live",
    accent: "emerald",
    techStack: ["React.js", "Accessibility", "CMS", "Forms"],
    demoLink: "https://mrcmed.org/",
    role: {
      ar: "مطور واجهات وتجربة مستخدم",
      en: "Front-End & Accessibility Developer",
    },
    highlights: {
      ar: [
        "تصميم بوابة مركز المكلا الخيري للعلاج الإشعاعي بتركيز عالٍ على سهولة الوصول (Accessibility) للمرضى وذويهم.",
        "تنظيم واضح للخدمات الطبية، التوعية الصحية، وقنوات التواصل والتبرع.",
        "واجهة هادئة ومريحة بصرياً مع سرعة استجابة عالية.",
      ],
      en: [
        "Engineered an accessible healthcare website for Mukalla Radiation Center prioritizing patient clarity and ease of navigation.",
        "Structured radiotherapy service guides, patient resources, and appointment inquiry workflows.",
        "Focused on calm visual ergonomics and fast mobile loading.",
      ],
    },
  },
  {
    id: "dalil",
    i18nKey: "dalil",
    imgPath: Dalil,
    category: "enterprise",
    featured: false,
    status: "live",
    accent: "cyan",
    techStack: ["React.js", "Instant Search", "Multi-Filters", "Directory UI"],
    role: {
      ar: "مطور تطبيقات React",
      en: "React Application Developer",
    },
    highlights: {
      ar: [
        "تطوير نظام دليل الموظفين الداخلي للبنك لتسريع التواصل بين الإدارات والفروع.",
        "محرك بحث فوري وذكي بالاسم، المسمى الوظيفي، رقم التحويلة، الجوال، أو البريد الإلكتروني.",
        "واجهة سريعة جداً تختصر وقت الوصول لبيانات التواصل المؤسسية إلى ثوانٍ معدودة.",
      ],
      en: [
        "Built an internal bank employee directory system to streamline cross-branch communication.",
        "Engineered instant multi-field search and filtering by name, job title, extension, phone, or email.",
        "Reduced internal contact lookup time to milliseconds with a clean, responsive card layout.",
      ],
    },
  },
  {
    id: "bank",
    i18nKey: "bank",
    imgPath: bank,
    category: "fintech",
    featured: false,
    status: "live",
    accent: "cyan",
    techStack: ["React.js", "UI/UX", "Bilingual i18n", "Forms"],
    demoLink: "https://www.bank-bindowal.com/",
    role: {
      ar: "مطور الواجهة الأمامية (React Developer)",
      en: "Front-End React Developer",
    },
    highlights: {
      ar: [
        "تطوير الإصدار التأسيسي للموقع الإلكتروني لبنك بن دول للتمويل الأصغر الإسلامي.",
        "دعم كامل للغتين العربية والإنجليزية (RTL/LTR) ونماذج التقديم على الخدمات التمويلية.",
        "تأسيس الهوية الرقمية الأولى للبنك قبل ترقيتها لاحقاً إلى معمارية Next.js.",
      ],
      en: [
        "Developed the foundational React web portal for Bin Dowal Islamic Microfinance Bank.",
        "Implemented full bilingual RTL/LTR localization and financing inquiry forms.",
        "Established the bank's initial digital footprint prior to the Next.js v2 modernization.",
      ],
    },
  },
  {
    id: "arab",
    i18nKey: "arab",
    imgPath: AlArab,
    category: "fintech",
    featured: false,
    status: "live",
    accent: "amber",
    techStack: ["React.js", "Landing Page", "SEO", "Forms"],
    role: {
      ar: "مطور واجهات أمامية",
      en: "Front-End Developer",
    },
    highlights: {
      ar: [
        "تصميم وتطوير واجهة شركة العرب للصرافة والتحويلات المالية بما يعكس الموثوقية والامتثال لمعايير البنك المركزي.",
        "استعراض خدمات الحوالات، أسعار الصرف، وشبكة الفروع والوكلاء.",
        "أداء سريع وتصميم متجاوب بالكامل.",
      ],
      en: [
        "Designed and built the web platform for Al-Arab Exchange Company aligned with Central Bank compliance standards.",
        "Showcased remittance networks, currency services, and branch locators.",
        "Optimized for high clarity, trust, and mobile accessibility.",
      ],
    },
  },
  {
    id: "cinema",
    i18nKey: "cinema",
    imgPath: movies,
    category: "webapps",
    featured: false,
    status: "live",
    accent: "cyan",
    techStack: ["React.js", "TMDB API", "Dynamic Search", "State Management"],
    ghLink: "https://github.com/malekba3bad/movie-app",
    role: {
      ar: "مطور تطبيقات الويب (Front-End)",
      en: "Front-End Web Developer",
    },
    highlights: {
      ar: [
        "بناء تطبيق ويب تفاعلي لاكتشاف الأفلام والمسلسلات بالاعتماد على واجهة TMDB API العالمية.",
        "بحث لحظي وتصفية متعددة المعايير (التقييم، سنة الإصدار، التصنيف) مع عرض التفاصيل والتريلر.",
        "تصميم سينمائي داكن (Dark UI) سريع الاستجابة.",
      ],
      en: [
        "Built an interactive movie discovery web app powered by The Movie Database (TMDB) REST API.",
        "Implemented real-time search, genre filtering, rating sorting, and detailed movie modals.",
        "Crafted a sleek cinema-inspired dark interface with smooth card transitions.",
      ],
    },
  },
  {
    id: "mikrotik",
    i18nKey: "mikrotik",
    imgPath: MikroTik,
    category: "webapps",
    featured: false,
    status: "live",
    accent: "emerald",
    techStack: ["HTML5", "CSS3", "Vanilla JS", "Zero-Dependency"],
    role: {
      ar: "مصمم ومطور الواجهة",
      en: "UI & Front-End Developer",
    },
    highlights: {
      ar: [
        "تطوير صفحة تسجيل دخول (Captive Portal) لشبكات MikroTik المحلية تعمل بدون أي مكتبات خارجية لضمان التحميل اللحظي.",
        "دعم إدخال بطاقات الإنترنت مسبقة الدفع، عرض الباقات والأسعار، وأرقام الدعم الفني.",
        "حجم ملفات صغير جداً (Ultra-lightweight) يعمل بكفاءة داخل ذاكرة راوترات MikroTik المحدودة.",
      ],
      en: [
        "Engineered a zero-dependency captive portal login interface hosted directly on MikroTik router storage.",
        "Designed clear prepaid voucher input flows, data package tables, and support contact actions.",
        "Ultra-compact footprint ensuring sub-100ms load times on local Wi-Fi networks.",
      ],
    },
  },
  {
    id: "port",
    i18nKey: "port",
    imgPath: port,
    category: "corporate",
    featured: false,
    status: "live",
    accent: "cyan",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    role: {
      ar: "مطور واجهات ويب",
      en: "Front-End Web Developer",
    },
    highlights: {
      ar: [
        "تصميم وتطوير واجهة تعريفية لشركة حضرموت للملاحة وخدمات تموين السفن.",
        "عرض منظم للخدمات الملاحية والتوريدات البحرية وقنوات التواصل مع الشركة.",
        "تصميم متجاوب وسريع التحميل على مختلف الأجهزة.",
      ],
      en: [
        "Developed a clean, responsive corporate site for Hadhramaut Marine Shipping & Vessel Supply Company.",
        "Presented maritime agency services, ship chandling operations, and direct contact channels.",
        "Built with lightweight semantic HTML/CSS/JS for rapid loading on any connection.",
      ],
    },
  },
];

