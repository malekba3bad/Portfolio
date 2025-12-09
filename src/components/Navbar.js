import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
// removed unused Button import; using native elements for icon actions
import saFlag from "../Assets/saudi-arabia.svg";
import usFlag from "../Assets/us-flag.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

import { FaGithub } from "react-icons/fa";
// import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { MdLanguage } from "react-icons/md";

function NavBar() {
  const { t, i18n } = useTranslation();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [language, setLanguage] = useState(i18n.language || "en");
  const isRTL = language === "ar";

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // keep i18n in sync with local language state
  useEffect(() => {
    if (i18n.language !== language) i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`navbar-custom ${navColour ? "sticky" : ""} ${isRTL ? "rtl" : "ltr"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Container className="nav-container" fluid>
        {/* Left (or right in RTL) - logo container */}
        <div className="nav-side nav-left">
          <Navbar.Brand href="/" className="nav-brand d-flex">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>
        </div>

        {/* Center wrapper - Toggle + Collapse (links + actions inside collapse) */}
        <div className="nav-center-wrapper">
          <Navbar.Toggle
            className="nav-toggle"
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav" className="nav-collapse">
            <div className="nav-center" role="navigation">
              <Nav defaultActiveKey="#home">
                <Nav.Item>
                  <Nav.Link className="nav-link-custom" as={Link} to="/" onClick={() => updateExpanded(false)}>
                    <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("navbar.home")}
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link className="nav-link-custom" as={Link} to="/about" onClick={() => updateExpanded(false)}>
                    <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("navbar.about")}
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link className="nav-link-custom" as={Link} to="/Services" onClick={() => updateExpanded(false)}>
                    <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> {t("navbar.services")}
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link className="nav-link-custom" as={Link} to="/project" onClick={() => updateExpanded(false)}>
                    <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> {t("navbar.projects")}
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link className="nav-link-custom" as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                    <CgFileDocument style={{ marginBottom: "2px" }} /> {t("navbar.resume")}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            
          </Navbar.Collapse>
        </div>

        {/* Right (or left in RTL) - actions container */}
        <div className="nav-side nav-right">
          <div className="nav-actions">
            <Nav.Item className="fork-btn">
              <a
                href="https://github.com/malekba3bad"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner"
                aria-label="Open GitHub"
              >
                <FaGithub style={{ width: "20px", height: "20px", verticalAlign: "middle" }} />
              </a>
            </Nav.Item>

            <Nav.Item className="lang-item">
              <button
                onClick={toggleLanguage}
                className="language-toggle-btn"
                aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
                type="button"
              >
                <MdLanguage style={{ width: "20px", height: "20px", verticalAlign: "middle", marginRight: "6px" }} />
                <img
                  src={language === "en" ? saFlag : usFlag}
                  alt={language === "en" ? "Saudi Arabia flag" : "United States flag"}
                  style={{ width: "20px", height: "14px", objectFit: "cover" }}
                />
              </button>
            </Nav.Item>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
