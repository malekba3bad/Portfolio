import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function ProjectCards(props) {
  const { t } = useTranslation();
  const [imgLoaded, setImgLoaded] = useState(false);

  const status = props.status || "live";
  const statusLabel = t(`projects.status.${status}`);
  const categoryLabel = props.category
    ? t(`projects.categories.${props.category}`)
    : null;

  const handleCardClick = () => {
    if (props.onSelect) {
      props.onSelect();
    }
  };

  return (
    <article className="editorial-project-item" onClick={handleCardClick}>
      {/* Borderless Large Showcase Image */}
      <div className="editorial-project-media">
        {!imgLoaded && <div className="project-img-skeleton" />}
        <img
          src={props.imgPath}
          alt={props.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setImgLoaded(true)}
          className={`editorial-project-img ${imgLoaded ? "is-loaded" : ""}`}
        />
      </div>

      {/* Open Typographic Meta & Content (Zero Borders, Zero Pills) */}
      <div className="editorial-project-content">
        <div className="editorial-project-meta">
          <span className="meta-text">
            {props.indexNum && (
              <span className="meta-index">{props.indexNum} — </span>
            )}
            {categoryLabel}
            <span className="meta-sep">·</span>
            <span className={`meta-status meta-status--${status}`}>
              {statusLabel}
            </span>
          </span>

          <span className="editorial-project-arrow" aria-hidden="true">
            <BsArrowUpRight />
          </span>
        </div>

        <h3 className="editorial-project-title">{props.title}</h3>
        <p className="editorial-project-desc">{props.description}</p>

        {Array.isArray(props.techStack) && props.techStack.length > 0 && (
          <div className="editorial-project-stack">
            {props.techStack.join("  ·  ")}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCards;
