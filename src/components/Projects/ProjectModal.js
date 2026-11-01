import React, { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { CgClose } from "react-icons/cg";
import {
  BsArrowUpRight,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import { PROJECTS_DATA } from "../../data/projectsData";
import gsap from "gsap";

function ProjectModal({
  project,
  projectsList = PROJECTS_DATA,
  onSelectProject,
  onClose,
}) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);
  const bodyRef = useRef(null);
  const [fullImage, setFullImage] = useState(false);

  const list =
    Array.isArray(projectsList) && projectsList.length > 0
      ? projectsList
      : PROJECTS_DATA;

  const currentIndex = project
    ? list.findIndex((p) => p.id === project.id)
    : -1;

  const prevProject =
    currentIndex !== -1
      ? list[(currentIndex - 1 + list.length) % list.length]
      : null;
  const nextProject =
    currentIndex !== -1 ? list[(currentIndex + 1) % list.length] : null;

  const navigateToProject = useCallback(
    (targetProject, direction = 1) => {
      if (!targetProject || !onSelectProject) return;
      setFullImage(false);

      if (bodyRef.current) {
        gsap.fromTo(
          bodyRef.current,
          { opacity: 0.25, x: direction * (isRTL ? -24 : 24) },
          {
            opacity: 1,
            x: 0,
            duration: 0.35,
            ease: "power3.out",
            clearProps: "transform",
          }
        );
        bodyRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }

      onSelectProject(targetProject);
    },
    [onSelectProject, isRTL]
  );

  // Initial backdrop + dialog entrance
  useEffect(() => {
    const scrollbarWidth =
      typeof window !== "undefined"
        ? window.innerWidth - document.documentElement.clientWidth
        : 0;
    const originalPaddingRight = document.body.style.paddingRight;
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    if (overlayRef.current && dialogRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.22, ease: "power2.out" }
      );
      gsap.fromTo(
        dialogRef.current,
        { opacity: 0, y: 24, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power3.out",
          clearProps: "transform",
        }
      );
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);

  // Keyboard shortcuts: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        if (isRTL && prevProject) {
          navigateToProject(prevProject, -1);
        } else if (!isRTL && nextProject) {
          navigateToProject(nextProject, 1);
        }
      } else if (e.key === "ArrowLeft") {
        if (isRTL && nextProject) {
          navigateToProject(nextProject, 1);
        } else if (!isRTL && prevProject) {
          navigateToProject(prevProject, -1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, isRTL, prevProject, nextProject, navigateToProject, onClose]);

  if (!project) return null;

  const title = t(`projects.${project.i18nKey}.title`);
  const description = t(`projects.${project.i18nKey}.description`);
  const statusLabel = t(`projects.status.${project.status || "live"}`);
  const categoryLabel = t(`projects.categories.${project.category || "webapps"}`);
  const roleText = isRTL ? project.role?.ar : project.role?.en;
  const highlights = (isRTL ? project.highlights?.ar : project.highlights?.en) || [];

  const formattedIndex =
    currentIndex !== -1
      ? `${currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} / ${
          list.length < 10 ? `0${list.length}` : list.length
        }`
      : "";

  const PrevArrow = isRTL ? BsArrowRight : BsArrowLeft;
  const NextArrow = isRTL ? BsArrowLeft : BsArrowRight;

  const modalContent = (
    <div
      ref={overlayRef}
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        ref={dialogRef}
        className="project-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimalist Editorial Topbar with Project Index & Keyboard Hint */}
        <div className="project-modal-topbar">
          <div className="modal-topbar-meta">
            {formattedIndex && (
              <span className="modal-index-counter">{formattedIndex}</span>
            )}
            <span className="modal-kicker">
              {categoryLabel} · {statusLabel}
            </span>
          </div>

          <div className="modal-topbar-controls">
            {list.length > 1 && onSelectProject && (
              <div className="modal-quick-arrows">
                <button
                  type="button"
                  className="modal-arrow-btn"
                  onClick={() => navigateToProject(prevProject, -1)}
                  title={t("projects.modal.prevProject")}
                  aria-label={t("projects.modal.prevProject")}
                >
                  <PrevArrow />
                </button>
                <button
                  type="button"
                  className="modal-arrow-btn"
                  onClick={() => navigateToProject(nextProject, 1)}
                  title={t("projects.modal.nextProject")}
                  aria-label={t("projects.modal.nextProject")}
                >
                  <NextArrow />
                </button>
              </div>
            )}

            <button
              type="button"
              className="project-modal-close"
              onClick={onClose}
              aria-label={t("projects.modal.close")}
            >
              <CgClose />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div ref={bodyRef} className="project-modal-body">
          <div
            className={`project-modal-hero ${
              fullImage ? "is-expanded" : ""
            }`}
            onClick={() => setFullImage(!fullImage)}
            title={t("projects.modal.toggleZoom")}
          >
            <img
              src={project.imgPath}
              alt={title}
              className="project-modal-img"
            />
          </div>

          <div className="project-modal-content">
            <div className="project-modal-header-row">
              <div>
                <h2 id="project-modal-title" className="project-modal-title">
                  {title}
                </h2>
                {roleText && <p className="project-modal-role">{roleText}</p>}
              </div>

              <div className="project-modal-actions">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-solid"
                  >
                    <span>{t("projects.modal.liveDemo")}</span>
                    <BsArrowUpRight />
                  </a>
                )}
                {project.ghLink && (
                  <a
                    href={project.ghLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-editorial"
                  >
                    <span>{t("projects.modal.sourceCode")}</span>
                    <BsArrowUpRight />
                  </a>
                )}
              </div>
            </div>

            {/* Overview */}
            <div className="project-modal-section">
              <h4 className="modal-section-heading">
                {t("projects.modal.overview")}
              </h4>
              <p className="project-modal-desc">{description}</p>
            </div>

            {/* Key Engineering Highlights */}
            {highlights.length > 0 && (
              <div className="project-modal-section">
                <h4 className="modal-section-heading">
                  {t("projects.modal.highlights")}
                </h4>
                <ol className="editorial-numbered-list">
                  {highlights.map((item, idx) => (
                    <li key={idx} className="editorial-numbered-item">
                      <span className="numbered-idx">0{idx + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Tech Stack */}
            {Array.isArray(project.techStack) && project.techStack.length > 0 && (
              <div className="project-modal-section">
                <h4 className="modal-section-heading">
                  {t("projects.modal.techStack")}
                </h4>
                <p className="modal-tech-line">
                  {project.techStack.join("   ·   ")}
                </p>
              </div>
            )}

            {/* {!project.demoLink && !project.ghLink && (
              <p className="project-private-note">
                * {t("projects.modal.privateNote")}
              </p>
            )} */}

            {/* Next / Previous Project Switcher Footer */}
            {list.length > 1 && onSelectProject && prevProject && nextProject && (
              <div className="modal-project-switcher">
                <button
                  type="button"
                  className="switcher-col switcher-col--prev"
                  onClick={() => navigateToProject(prevProject, -1)}
                >
                  <span className="switcher-label">
                    <PrevArrow /> {t("projects.modal.prevProject")}
                  </span>
                  <span className="switcher-title">
                    {t(`projects.${prevProject.i18nKey}.title`)}
                  </span>
                </button>

                <button
                  type="button"
                  className="switcher-col switcher-col--next"
                  onClick={() => navigateToProject(nextProject, 1)}
                >
                  <span className="switcher-label">
                    {t("projects.modal.nextProject")} <NextArrow />
                  </span>
                  <span className="switcher-title">
                    {t(`projects.${nextProject.i18nKey}.title`)}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof document === "undefined" || !document.body) {
    return modalContent;
  }

  return createPortal(modalContent, document.body);
}

export default ProjectModal;
