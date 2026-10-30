import React, { useState, useMemo, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectModal from "./ProjectModal";
import { PROJECTS_DATA, PROJECT_CATEGORIES } from "../../data/projectsData";
import { useTranslation } from "react-i18next";
import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";
import gsap from "gsap";

function Projects() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const gridRef = useRef(null);

  const categoryCounts = useMemo(() => {
    const counts = { all: PROJECTS_DATA.length };
    PROJECTS_DATA.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCat =
        activeCategory === "all" || project.category === activeCategory;
      if (!matchesCat) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const title = t(`projects.${project.i18nKey}.title`).toLowerCase();
      const desc = t(`projects.${project.i18nKey}.description`).toLowerCase();
      const techMatch = project.techStack.some((tech) =>
        tech.toLowerCase().includes(q)
      );
      return title.includes(q) || desc.includes(q) || techMatch;
    });
  }, [activeCategory, searchQuery, t]);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".project-grid-item");
    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.04,
        ease: "power2.out",
        overwrite: "auto",
      }
    );
  }, [activeCategory, searchQuery, i18n.language]);

  return (
    <section className="project-section" dir={isRTL ? "rtl" : "ltr"}>
      <Container>
        {/* Asymmetric Editorial Header */}
        <div className="editorial-section-header">
          <div className="editorial-header-left">
            <span className="editorial-index">
              01 — {t("projects.eyebrow")}
            </span>
            <h1 className="editorial-section-title">
              {t("projects.heading")} {t("projects.headingBold")}
            </h1>
          </div>
          <div className="editorial-header-right">
            <p className="editorial-section-desc">
              {t("projects.description")}
            </p>
          </div>
        </div>

        {/* Borderless Horizontal Editorial Filter Bar */}
        <div className="editorial-filter-bar">
          <div className="editorial-tabs" role="tablist">
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`editorial-tab ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{t(cat.labelKey)}</span>
                  <sup className="tab-count">{categoryCounts[cat.id] || 0}</sup>
                </button>
              );
            })}
          </div>

          <div className="editorial-search-field">
            <HiOutlineSearch className="editorial-search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("projects.searchPlaceholder")}
              className="editorial-search-input"
              aria-label={t("projects.searchPlaceholder")}
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <HiOutlineX />
              </button>
            )}
          </div>
        </div>

        {/* Borderless 2-Column Editorial Gallery */}
        <div ref={gridRef} className="editorial-projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="project-grid-item">
              <ProjectCard
                indexNum={idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`}
                imgPath={project.imgPath}
                isBlog={false}
                title={t(`projects.${project.i18nKey}.title`)}
                description={t(`projects.${project.i18nKey}.description`)}
                techStack={project.techStack}
                status={project.status}
                category={project.category}
                demoLink={project.demoLink}
                ghLink={project.ghLink}
                onSelect={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </Container>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          projectsList={filteredProjects}
          onSelectProject={setSelectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
