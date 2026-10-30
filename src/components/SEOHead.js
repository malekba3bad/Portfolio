import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BASE_URL = "https://malekba3bad.vercel.app";

const ROUTE_META = {
  "/": {
    ar: {
      title: "مالك باعباد | مهندس واجهات وتطبيقات ويب (Senior Front-End & Full-Stack Engineer)",
      description:
        "مالك باعباد — مهندس واجهات وتطبيقات ويب بخبرة تزيد عن 5 سنوات في هندسة المنصات البنكية والمالية (FinTech)، أنظمة الشركات (ERP)، وتطبيقات React.js و Next.js و Laravel.",
    },
    en: {
      title: "Malek Ba Abbad | Senior Front-End & Full-Stack Web Engineer",
      description:
        "Malek Ba Abbad — Senior Front-End & Full-Stack Engineer with 5+ years of experience crafting FinTech platforms, Islamic banking portals, enterprise ERP dashboards, and fast React/Next.js web applications.",
    },
  },
  "/project": {
    ar: {
      title: "معرض المشاريع والأنظمة الرقمية (19+ مشروعاً) | مالك باعباد",
      description:
        "استعرض أكثر من 19 نظاماً ومنصة رقمية منجزة: منصات بنكية وتكنولوجيا مالية (FinTech)، أنظمة موارد بشرية ومستودعات (ERP)، وبوابات مؤسسية وحكومية.",
    },
    en: {
      title: "Projects & Digital Systems Index (19+ Works) | Malek Ba Abbad",
      description:
        "Explore 19+ production systems and platforms engineered by Malek Ba Abbad across FinTech, Islamic banking, ERP dashboards, maritime navigation, and government portals.",
    },
  },
  "/services": {
    ar: {
      title: "الحلول والخدمات البرمجية | مالك باعباد — هندسة رقمية متكاملة",
      description:
        "تطوير منصات الشركات والمؤسسات، تطبيقات React و Next.js، لوحات التحكم والأنظمة (Dashboards & ERP)، وتحسين الأداء والسرعة (Core Web Vitals).",
    },
    en: {
      title: "Engineering Capabilities & Services | Malek Ba Abbad",
      description:
        "Full-cycle web engineering services: enterprise portals, React & Next.js architecture, custom ERP & financial dashboards, UI/UX design, and Core Web Vitals optimization.",
    },
  },
  "/about": {
    ar: {
      title: "نبذة عن المهندس والمسيرة المهنية | مالك باعباد",
      description:
        "تعرف على المسيرة المهنية والخبرات التقنية للمهندس مالك باعباد في تطوير الواجهات الأمامية والأنظمة المتكاملة (React, Next.js, TypeScript, Laravel).",
    },
    en: {
      title: "About & Engineering Career | Malek Ba Abbad",
      description:
        "Learn about Malek Ba Abbad's software engineering background, technical stack (React.js, Next.js, TypeScript, Laravel), and enterprise project delivery.",
    },
  },
  "/resume": {
    ar: {
      title: "السيرة الذاتية (CV / Resume) | مالك باعباد",
      description:
        "استعرض وحمّل السيرة الذاتية الرسمية للمهندس مالك باعباد — مهندس واجهات وتطبيقات ويب (Front-End & Full-Stack Web Engineer).",
    },
    en: {
      title: "Curriculum Vitae (Resume) | Malek Ba Abbad",
      description:
        "View and download the official Curriculum Vitae of Malek Ba Abbad — Senior Front-End & Full-Stack Web Engineer.",
    },
  },
};

function SEOHead() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language === "en" ? "en" : "ar";
    const normalizedPath = pathname.toLowerCase();
    const metaGroup = ROUTE_META[normalizedPath] || ROUTE_META["/"];
    const currentMeta = metaGroup[lang] || metaGroup.ar;

    document.title = currentMeta.title;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute("content", currentMeta.description);
    }

    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) {
      ogTitleEl.setAttribute("content", currentMeta.title);
    }

    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) {
      ogDescEl.setAttribute("content", currentMeta.description);
    }

    const canonicalUrl =
      normalizedPath === "/" ? `${BASE_URL}/` : `${BASE_URL}${pathname}`;

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute("href", canonicalUrl);
    }

    const ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (ogUrlEl) {
      ogUrlEl.setAttribute("content", canonicalUrl);
    }
  }, [pathname, i18n.language]);

  return null;
}

export default SEOHead;

