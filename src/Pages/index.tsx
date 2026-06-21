import "../Styles/index.css";
import myImage from "../assets/images/my_image.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../Context/language";

// Tech-stack values are language-independent, kept separate from translated labels.
const skillValues = [
  "Python, TypeScript, JavaScript, SQL",
  "React, Vite, TypeScript, HTML5, CSS3",
  "React Native, Expo",
  "Django, Python, REST APIs, BeautifulSoup4, Celery, Redis",
  "PostgreSQL, MySQL, Supabase",
  "Docker, Linux, Nginx, Gunicorn, Git, GitHub Actions, Vercel, CI/CD, VPS Deployment, AWS",
];

// Renders **bold** markers as highlighted spans.
function renderHighlighted(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <span key={i} className="highlight">
        {part.slice(2, -2)}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export default function Home() {
  const { t } = useLanguage();

  const skills = skillValues.map((value, i) => ({
    label: t.about.skillLabels[i],
    value,
  }));

  return (
    <>
      {/* Hero */}
      <section id="home" className="page hero">
        <div className="hero__left">
          <div className="hero__img-wrap">
            <img src={myImage} alt="Mohammed Zaouk" className="hero__img" />
            <div className="hero__img-ring" />
            <div className="hero__img-glow" />
          </div>
        </div>

        <div className="hero__text">
          <h1 className="hero__name">Mohammed Zaouk</h1>
          <p className="hero__role">{t.hero.role}</p>

          <div className="hero__contacts">
            <a href="mailto:me@zaouk.dev" className="hero__contact-item">
              <i className="fa-solid fa-envelope hero__contact-icon" />
              me@zaouk.dev
            </a>
            <span className="hero__contact-sep">·</span>
            <a
              href="https://linkedin.com/in/Mohammed-Zaouk"
              target="_blank"
              rel="noreferrer"
              className="hero__contact-item"
            >
              <i className="fa-brands fa-linkedin hero__contact-icon" />
              LinkedIn
            </a>
            <span className="hero__contact-sep">·</span>
            <a
              href="https://leetcode.com/yamatotatsumi5"
              target="_blank"
              rel="noreferrer"
              className="hero__contact-item"
            >
              <i className="fa-solid fa-code hero__contact-icon" />
              LeetCode
            </a>
            <span className="hero__contact-sep">·</span>
            <a
              href="https://github.com/Mohammed-Zaouk"
              target="_blank"
              rel="noreferrer"
              className="hero__contact-item"
            >
              <i className="fa-brands fa-github hero__contact-icon" />
              GitHub
            </a>
          </div>

          <p className="hero__summary">{renderHighlighted(t.hero.summary)}</p>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">100K+</span>
              <span className="hero__stat-label">{t.hero.stats.users}</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">400K</span>
              <span className="hero__stat-label">
                {t.hero.stats.monthlyViews}
              </span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">4M</span>
              <span className="hero__stat-label">
                {t.hero.stats.totalViews}
              </span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">50K+</span>
              <span className="hero__stat-label">
                {t.hero.stats.appInstalls}
              </span>
            </div>
          </div>

          <p className="hero__cta">
            {t.hero.ctaText}
            <a
              href="https://linkedin.com/in/Mohammed-Zaouk"
              target="_blank"
              className="hero__cta-link"
            >
              {t.hero.ctaLink}
            </a>
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section__header">
          <span className="section__eyebrow">{t.sections.work}</span>
          <h2 className="section__title">{t.nav.projects}</h2>
          <div className="section__rule" />
        </div>

        <div className="cards">
          {/* DawaMZ */}
          <div className="card projects__section">
            <div className="card__header-row">
              <div className="card__header-left">
                <div className="card__title-row">
                  <h3 className="card__name">DawaMZ</h3>
                  <span className="card__title-sep">|</span>
                  <p className="card__subtitle">
                    {t.projectDetails.dawamz.subtitle}
                  </p>
                </div>
              </div>
              <div className="card__header-right">
                <a
                  href="https://dawamz.com"
                  target="_blank"
                  rel="noreferrer"
                  className="card__link"
                >
                  dawamz.com ↗
                </a>
                <span className="card__link-sep">·</span>
                <a
                  href="https://dawamz.com"
                  target="_blank"
                  rel="noreferrer"
                  className="card__link"
                >
                  Play Store ↗
                </a>
                <span className="card__link-sep">·</span>
                <a
                  href="https://github.com/Mohammed-Zaouk/DawaMZ"
                  target="_blank"
                  rel="noreferrer"
                  className="card__repo-link"
                >
                  GitHub Repo ↗
                </a>
              </div>
            </div>

            <div className="card__tags">
              {t.projectDetails.dawamz.tags.map((tag, i) => (
                <span
                  key={tag}
                  className={
                    i === 0 ? "card__tag" : "card__tag card__tag--muted"
                  }
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="card__stack">
              React Native · Expo · React · Vite · Vercel · TypeScript ·
              Supabase · PostgreSQL · Python · GitHub Actions · BeautifulSoup4
            </p>
            <ul className="card__list">
              {t.projectDetails.dawamz.list.map((item, i) => (
                <li key={i}>{renderHighlighted(item)}</li>
              ))}
            </ul>

            <div className="card__footer">
              <Link to="/case-study/dawamz" className="card__case-study-link">
                {t.projectDetails.caseStudyLabel}{" "}
                <span className="card__arrow">→</span>
              </Link>
            </div>
          </div>

          {/* MZNovels */}
          <div className="card projects__section">
            <div className="card__header-row">
              <div className="card__header-left">
                <div className="card__title-row">
                  <h3 className="card__name">MZNovels</h3>
                  <span className="card__title-sep">|</span>
                  <p className="card__subtitle">
                    {t.projectDetails.mznovels.subtitle}
                  </p>
                </div>
              </div>
              <div className="card__header-right">
                <a
                  href="https://mznovels.com"
                  target="_blank"
                  rel="noreferrer"
                  className="card__link"
                >
                  mznovels.com ↗
                </a>
                <span className="card__link-sep">·</span>
                <a
                  href="https://github.com/Mohammed-Zaouk/MZNovels-Website"
                  target="_blank"
                  rel="noreferrer"
                  className="card__repo-link"
                >
                  GitHub Repo ↗
                </a>
              </div>
            </div>

            <div className="card__tags">
              {t.projectDetails.mznovels.tags.map((tag, i) => (
                <span
                  key={tag}
                  className={
                    i === 0 ? "card__tag" : "card__tag card__tag--muted"
                  }
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="card__stack">
              Python · Django · MySQL · Docker · Nginx · Gunicorn · JavaScript ·
              HTML5 · CSS3 · VPS Deployment
            </p>
            <ul className="card__list">
              {t.projectDetails.mznovels.list.map((item, i) => (
                <li key={i}>{renderHighlighted(item)}</li>
              ))}
            </ul>

            <div className="card__footer">
              <Link to="/case-study/mznovels" className="card__case-study-link">
                {t.projectDetails.caseStudyLabel}{" "}
                <span className="card__arrow">→</span>
              </Link>
            </div>
          </div>

          {/* RedactMZ */}
          <div className="card projects__section redact__MZ">
            <div className="card__header-row">
              <div className="card__header-left">
                <div className="card__title-row">
                  <h3 className="card__name">RedactMZ</h3>
                  <span className="card__title-sep">|</span>
                  <p className="card__subtitle">
                    {t.projectDetails.redactmz.subtitle}
                  </p>
                </div>
              </div>
              <div className="card__header-right">
                <a
                  href="https://www.redactmz.com"
                  target="_blank"
                  rel="noreferrer"
                  className="card__link"
                >
                  redactmz.com ↗
                </a>
                <span className="card__link-sep">·</span>
                <a
                  href="https://github.com/Mohammed-Zaouk/RedactMZ"
                  target="_blank"
                  rel="noreferrer"
                  className="card__repo-link"
                >
                  GitHub Repo ↗
                </a>
              </div>
            </div>

            <div className="card__tags">
              {t.projectDetails.redactmz.tags.map((tag, i) => (
                <span
                  key={tag}
                  className={
                    i === 0 ? "card__tag" : "card__tag card__tag--muted"
                  }
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="card__stack">JavaScript · HTML5 Canvas</p>
            <ul className="card__list">
              {t.projectDetails.redactmz.list.map((item, i) => (
                <li key={i}>{renderHighlighted(item)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work-experience" className="section">
        <div className="section__header">
          <span className="section__eyebrow">{t.sections.career}</span>
          <h2 className="section__title">{t.nav.workExperience}</h2>
          <div className="section__rule" />
        </div>

        <div className="timeline">
          <div className="timeline__item">
            <div className="timeline__aside">
              <span className="timeline__date">Jul 2025</span>
              <div className="timeline__line" />
              <span className="timeline__date">Aug 2025</span>
            </div>
            <div className="card timeline__card">
              <div className="card__header-row">
                <div className="card__header-left">
                  <div className="card__title-row">
                    <h3 className="card__name">NARSA</h3>
                    <span className="card__title-sep">|</span>
                    <p className="card__subtitle">
                      National Road Safety Agency
                    </p>
                  </div>
                  <p className="card__role-label">{t.workExperience.role}</p>
                </div>
                <div className="card__header-right card__header-right--date">
                  <span className="card__date-badge">
                    {t.workExperience.contract}
                  </span>
                </div>
              </div>

              <ul className="card__list">
                {t.workExperience.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <div className="section__header">
          <span className="section__eyebrow">{t.sections.background}</span>
          <h2 className="section__title">{t.nav.education}</h2>
          <div className="section__rule" />
        </div>

        <div className="timeline">
          <div className="timeline__item">
            <div className="timeline__aside">
              <span className="timeline__date">Aug 2026</span>
              <div className="timeline__line" />
              <span className="timeline__date">Jan 2027</span>
            </div>
            <div className="card timeline__card">
              <div className="card__header-row">
                <div className="card__header-left">
                  <div className="card__title-row">
                    <h3 className="card__name">OTHM Level 6 Diploma</h3>
                    <span className="card__title-sep">|</span>
                    <p className="card__subtitle">Information Technology</p>
                  </div>
                </div>
                <div className="card__header-right card__header-right--date">
                  <span className="card__tag card__tag--muted">
                    {t.education.badge}
                  </span>
                </div>
              </div>

              <div className="card__tags" style={{ marginBottom: "0.9rem" }}>
                <span className="card__tag">{t.education.tag}</span>
              </div>

              <ul className="card__list">
                <li>{t.education.item}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section__header">
          <span className="section__eyebrow">{t.sections.more}</span>
          <h2 className="section__title">{t.nav.about}</h2>
          <div className="section__rule" />
        </div>

        <div className="about__block">
          <h3 className="about__subtitle">{t.about.technicalSkillsTitle}</h3>
          <div className="about__skills">
            {skills.map(({ label, value }) => (
              <div key={label} className="about__skill-row">
                <span className="about__skill-label">{label}</span>
                <span className="about__skill-value">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__block">
          <h3 className="about__subtitle">{t.about.languagesTitle}</h3>
          <div className="about__langs">
            {t.about.languages.map(({ lang, level }) => (
              <div key={lang} className="about__lang-chip">
                <span className="about__lang-name">{lang}</span>
                <span className="about__lang-level">{level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification */}
      <section id="verification" className="section">
        <div className="section__header">
          <span className="section__eyebrow">{t.sections.credentials}</span>
          <h2 className="section__title">{t.nav.verification}</h2>
          <div className="section__rule" />
        </div>
        <div className="verification__grid">
          {t.verification.items.map(({ label, date, href, external, cta }) => {
            const ctaText = cta ?? t.verification.viewDocument;

            if (external === false) {
              return (
                <Link key={label} to={href} className="verification__card">
                  <span className="verification__label">{label}</span>
                  <span className="verification__date">{date}</span>
                  <span className="verification__cta">{ctaText}</span>
                </Link>
              );
            }

            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="verification__card"
              >
                <span className="verification__label">{label}</span>
                <span className="verification__date">{date}</span>
                <span className="verification__cta">{ctaText}</span>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
