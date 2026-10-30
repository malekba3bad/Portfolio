import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import {
  HiOutlineMenuAlt4,
  HiOutlineX,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";

function NavBar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [language, setLanguage] = useState(i18n.language || "en");
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio_theme") || "sunlit"
  );
  const isRTL = language === "ar";

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    if (i18n.language !== language) i18n.changeLanguage(language);
  }, [language, i18n]);

  // Apply theme attribute to <html> and clear any legacy inline body styles
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    localStorage.setItem("portfolio_theme", theme);
  }, [theme]);

  useEffect(() => {
    updateExpanded(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "sunlit" ? "dusk" : "sunlit"));
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.toLowerCase().startsWith(path.toLowerCase());
  };

  const navItems = [
    { to: "/", label: t("navbar.home") },
    { to: "/project", label: t("navbar.projects") },
    { to: "/Services", label: t("navbar.services") },
    { to: "/about", label: t("navbar.about") },
    { to: "/resume", label: t("navbar.resume") },
  ];

  return (
    <header
      className={`editorial-header ${navColour ? "is-scrolled" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="editorial-header__inner">
        {/* 1. Warm Editorial Brand */}
        <Link
          to="/"
          className="editorial-brand"
          onClick={() => updateExpanded(false)}
        >
          <span className="editorial-brand__dot" aria-hidden="true" />
          <span className="editorial-brand__name">
            {isRTL ? "مالك باعباد" : "Malek Ba Abbad"}
          </span>
        </Link>

        {/* 2. Borderless Typographic Navigation */}
        <nav className="editorial-nav-desktop" aria-label="Main Navigation">
          <ul className="editorial-nav-list">
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`editorial-nav-link ${active ? "is-active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 3. Utility Actions (Theme Toggle + Language Switcher + Links) */}
        <div className="editorial-header__actions">
          <button
            onClick={toggleTheme}
            className="editorial-theme-switch"
            type="button"
            aria-label={
              theme === "sunlit"
                ? "Switch to Warm Dusk mode"
                : "Switch to Warm Sunlit mode"
            }
            title={
              theme === "sunlit"
                ? isRTL
                  ? "وضع الشفق المسائي الدافئ"
                  : "Warm Dusk Mode"
                : isRTL
                ? "الوضع المشرق الدافئ"
                : "Warm Sunlit Mode"
            }
          >
            {theme === "sunlit" ? <HiOutlineMoon /> : <HiOutlineSun />}
          </button>

          <button
            onClick={toggleLanguage}
            className="editorial-lang-switch"
            type="button"
            aria-label="Switch Language"
          >
            {language === "en" ? "العربية" : "EN"}
          </button>

          <span className="editorial-divider-v" aria-hidden="true" />

          <a
            href="https://github.com/malekba3bad"
            target="_blank"
            rel="noreferrer"
            className="editorial-action-link d-none d-sm-inline-flex"
          >
            <span>GitHub</span>
            <BsArrowUpRight />
          </a>

          <a
            href="https://wa.me/+967773250384"
            target="_blank"
            rel="noreferrer"
            className="editorial-action-cta d-none d-lg-inline-flex"
          >
            <span>{t("navbar.hireMe")}</span>
            <BsArrowUpRight />
          </a>

          <button
            type="button"
            className="editorial-mobile-btn"
            aria-label="Toggle Menu"
            aria-expanded={expand}
            onClick={() => updateExpanded(!expand)}
          >
            {expand ? <HiOutlineX /> : <HiOutlineMenuAlt4 />}
          </button>
        </div>
      </div>

      {/* Minimalist Full-Width Mobile Menu */}
      <div className={`editorial-mobile-menu ${expand ? "is-open" : ""}`}>
        <ul className="editorial-mobile-list">
          {navItems.map((item, idx) => {
            const active = isActive(item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`editorial-mobile-link ${
                    active ? "is-active" : ""
                  }`}
                  onClick={() => updateExpanded(false)}
                >
                  <span className="mobile-link-num">0{idx + 1}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="editorial-mobile-footer">
          <a
            href="https://github.com/malekba3bad"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://wa.me/+967773250384"
            target="_blank"
            rel="noreferrer"
          >
            {t("navbar.hireMe")} ↗
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
