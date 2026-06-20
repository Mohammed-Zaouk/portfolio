import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Styles/navbar.css";
import myLogo from "../assets/logo/mz_logo.png"
import { useLanguage } from "../Context/language";
import type { Language } from "../Context/language";

// — Section IDs
const homeIds = [
  "home",
  "projects",
  "work-experience",
  "education",
  "about",
  "verification",
] as const;

const caseStudyIds = [
  "cs-overview",
  "cs-why",
  "cs-what-it-does",
  "cs-architecture",
  "cs-challenges",
  "cs-results",
  "cs-stack",
] as const;

const languageOptions: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" },
  { code: "ja", label: "JA" },
];

// — Component
export default function Navbar() {
  const [active, setActive] = useState("home");
  const [switching, setSwitching] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const isCaseStudy = location.pathname.startsWith("/case-study");
  const navIds = isCaseStudy ? caseStudyIds : homeIds;

  // Labels (translated)
  const homeLabels: Record<(typeof homeIds)[number], string> = {
    home: t.nav.home,
    projects: t.nav.projects,
    "work-experience": t.nav.workExperience,
    education: t.nav.education,
    about: t.nav.about,
    verification: t.nav.verification,
  };

  const caseStudyLabels: Record<(typeof caseStudyIds)[number], string> = {
    "cs-overview": t.caseStudyNav.overview,
    "cs-why": t.caseStudyNav.why,
    "cs-what-it-does": t.caseStudyNav.whatItDoes,
    "cs-architecture": t.caseStudyNav.architecture,
    "cs-challenges": t.caseStudyNav.challenges,
    "cs-results": t.caseStudyNav.results,
    "cs-stack": t.caseStudyNav.stack,
  };

  const navLabels: Record<string, string> = isCaseStudy
    ? caseStudyLabels
    : homeLabels;

  // Scroll observer — re-runs when route changes
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const timeout = setTimeout(() => {
      setActive(navIds[0]);
      navIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive(id);
          },
          { rootMargin: "-40% 0px -55% 0px" },
        );
        observer.observe(el);
        observers.push(observer);
      });
    }, 50);

    return () => {
      clearTimeout(timeout);
      observers.forEach((o) => o.disconnect());
    };
  }, [location.pathname, navIds]);

  // Handlers
  const scrollTo = (id: string) => {
    if (id === "cs-overview") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (isCaseStudy) {
      navigate(`${location.pathname}#${id}`);
    }
  };

  const handleLanguageChange = (code: Language) => {
    if (code === language || switching) return;
    setSwitching(true);
    window.setTimeout(() => {
      setLanguage(code);
      window.setTimeout(() => setSwitching(false), 380);
    }, 320);
  };

  // JSX
  return (
    <>
      <nav className="nav">
        <NavLink to="/" className="brand">
          <img
            src={myLogo}
            alt="MZ"
            className="brand-logo"
          />
        </NavLink>

        <div className="links">
          {navIds.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={active === id ? "link active-link" : "link"}
            >
              {navLabels[id]}
            </button>
          ))}
        </div>

        <div className="lang-switcher">
          {languageOptions.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code)}
              disabled={switching}
              className={
                language === code ? "lang-btn active-lang" : "lang-btn"
              }
            >
              {switching && language === code ? (
                <span className="lang-btn__spinner" aria-hidden="true" />
              ) : (
                label
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Language switch fade overlay */}
      <div
        className={switching ? "lang-fade lang-fade--active" : "lang-fade"}
        aria-hidden="true"
      >
        <div className="lang-fade__loader">
          <div className="lang-fade__dots">
            <span className="lang-fade__dot" />
            <span className="lang-fade__dot" />
            <span className="lang-fade__dot" />
          </div>
          <span className="lang-fade__label">Loading</span>
        </div>
      </div>
    </>
  );
}
