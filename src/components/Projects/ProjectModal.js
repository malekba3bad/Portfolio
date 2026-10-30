import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { CgClose } from "react-icons/cg";
import { BsArrowUpRight } from "react-icons/bs";
import gsap from "gsap";

function ProjectModal({ project, onClose }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (overlayRef.current && dialogRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.22, ease: "power2.out" }
      );
      gsap.fromTo(
        dialogRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const title = t(`projects.${project.i18nKey}.title`);
  const description = t(`projects.${project.i18nKey}.description`);
  const statusLabel = t(`projects.status.${project.status || "live"}`);
  const categoryLabel = t(`projects.categories.${project.category || "webapps"}`);
  const roleText = isRTL ? project.role?.ar : project.role?.en;
  const highlights = (isRTL ? project.highlights?.ar : project.highlights?.en) || [];

  return (
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
        {/* Minimalist Editorial Topbar */}
        <div className="project-modal-topbar">
          <span className="modal-kicker">
            {categoryLabel} · {statusLabel}
          </span>
          <button
            type="button"
            className="project-modal-close"
            onClick={onClose}
            aria-label={t("projects.modal.close")}
          >
            <CgClose />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="project-modal-body">
          <div className="project-modal-hero">
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

            {/* Key Engineering Highlights (Numbered Hairline Rows — Zero Boxes) */}
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

            {!project.demoLink && !project.ghLink && (
              <p className="project-private-note">
                * {t("projects.modal.privateNote")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
