import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import pdf from "../../Assets/Malek_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { useTranslation } from "react-i18next";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="resume-section" dir={isRTL ? "rtl" : "ltr"}>
      <Container>
        <div className="editorial-section-header">
          <div className="editorial-header-left">
            <span className="editorial-index">01 — {t("resume.eyebrow")}</span>
            <h1 className="editorial-section-title">
              {t("resume.title")} {t("resume.titleHighlight")}
            </h1>
          </div>
          <div className="editorial-header-right">
            <p className="editorial-section-desc mb-3">
              {t("resume.subtitle")}
            </p>
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Malek_Ba_Abbad_Resume.pdf"
              className="btn-editorial-solid"
            >
              <AiOutlineDownload />
              <span>{t("resume.download")}</span>
            </a>
          </div>
        </div>

        <Row className="resume">
          <div className="resume-pdf-frame">
            <Document
              file={pdf}
              loading={
                <div className="pdf-loading-state">{t("resume.loadingPdf")}</div>
              }
              className="d-flex justify-content-center"
            >
              <Page
                pageNumber={1}
                scale={
                  width > 1200
                    ? 1.45
                    : width > 991
                    ? 1.15
                    : width > 767
                    ? 0.92
                    : Math.max(0.42, (width - 56) / 612)
                }
              />
            </Document>
          </div>
        </Row>

        <div className="d-flex justify-content-center pb-4">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            download="Malek_Ba_Abbad_Resume.pdf"
            className="btn-editorial-solid"
          >
            <AiOutlineDownload />
            <span>{t("resume.download")}</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default ResumeNew;
