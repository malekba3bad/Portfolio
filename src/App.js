import React, { Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./style.css";
import "./components/Services/Services.css";
import "./App.css";
import "./i18n";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import SEOHead from "./components/SEOHead";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

// Route-level code splitting for fast initial load on slow internet connections
const Projects = lazy(() => import("./components/Projects/Projects"));
const About = lazy(() => import("./components/About/About"));
const Services = lazy(() => import("./components/Services/Services"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

function RouteFallback() {
  return (
    <div className="route-loading-fallback" aria-busy="true">
      <div className="obsidian-spinner" />
    </div>
  );
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <SEOHead />
        <div className="App" id="scroll">
          <Navbar />
          <Suspense fallback={<RouteFallback />}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </PageTransition>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
