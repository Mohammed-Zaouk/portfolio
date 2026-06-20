import "../../Styles/case-study.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../Context/language";
import { dawamzTranslations } from "../../Context/dawamz.translations";

/**
 * Renders a string that may contain **bold** markers as React nodes,
 * wrapping the bolded span in the same `.highlight` styling the design
 * already uses for "50,000+ installs" etc.
 */
function renderWithHighlight(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span className="highlight" key={i}>
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export default function DawaMZ() {
  const { language } = useLanguage();
  const t = dawamzTranslations[language];

  return (
    <article className="case-study">
      {/* Back link */}
      <Link to="/#projects" className="case-study__back">
        {t.backLink}
      </Link>

      {/* Header */}
      <header className="cs-header" id="cs-overview">
        <span className="cs-header__eyebrow">{t.eyebrow}</span>
        <div className="cs-header__title-row">
          <img
            src="/dawamz-docs/dawamz-logo.png"
            alt="DawaMZ logo"
            className="cs-header__logo"
          />
          <h1 className="cs-header__title">DawaMZ</h1>
        </div>
        <p className="cs-header__subtitle">{renderWithHighlight(t.subtitle)}</p>
        <div className="cs-header__links">
          <a
            href="https://www.dawamz.com"
            target="_blank"
            rel="noreferrer"
            className="cs-header__link"
          >
            dawamz.com ↗
          </a>
          <span className="cs-header__sep">·</span>
          <a
            href="https://play.google.com/store/apps/details?id=com.dawamzsorganization.dawamz"
            target="_blank"
            rel="noreferrer"
            className="cs-header__link"
          >
            Play Store ↗
          </a>
          <span className="cs-header__sep">·</span>
          <span className="cs-header__repo-note">{t.repoNote}</span>
        </div>
        <div className="cs-header__tags">
          {t.tags.map((tag) => (
            <span className="cs-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Why I Built This */}
      <section className="cs-section" id="cs-why">
        <h2 className="cs-section__title">{t.why.title}</h2>
        <div className="cs-section__body">
          {t.why.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* What It Does */}
      <section className="cs-section" id="cs-what-it-does">
        <h2 className="cs-section__title">{t.whatItDoes.title}</h2>
        <div className="cs-section__body">
          <p>{t.whatItDoes.intro}</p>

          <div className="cs-feature-grid">
            <div className="cs-feature">
              <h3 className="cs-feature__title">
                {t.whatItDoes.coreFeaturesTitle}
              </h3>
              <ul className="cs-feature__list">
                {t.whatItDoes.coreFeaturesList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="cs-feature">
              <h3 className="cs-feature__title">
                {t.whatItDoes.platformDiffTitle}
              </h3>
              <ul className="cs-feature__list">
                {t.whatItDoes.platformDiffList.map((item, i) => (
                  <li key={i}>
                    {item.label && <strong>{item.label}</strong>} {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Device showcase: web (laptop) + mobile app side by side */}
        <div className="cs-showcase">
          <div className="cs-device cs-device--laptop">
            <div className="cs-device__shell">
              <div className="cs-device__bar">
                <span className="cs-device__dot" />
                <span className="cs-device__dot" />
                <span className="cs-device__dot" />
              </div>
              <div className="cs-device__screen">
                <img
                  src="/dawamz-docs/dawamz-laptop.png"
                  alt="DawaMZ website"
                />
              </div>
            </div>
            <span className="cs-device__caption">
              {t.whatItDoes.desktopCaption}
            </span>
          </div>

          <div className="cs-device cs-device--phone">
            <div className="cs-device__shell">
              <div className="cs-device__notch" />
              <div className="cs-device__screen">
                <img
                  src="/dawamz-docs/dawamz-mobile.png"
                  alt="DawaMZ mobile app"
                />
              </div>
            </div>
            <span className="cs-device__caption">
              {t.whatItDoes.mobileCaption}
            </span>
          </div>
        </div>
      </section>

      {/* Two Platforms, One Backend */}
      <section className="cs-section" id="cs-architecture">
        <h2 className="cs-section__title">{t.twoBackends.title}</h2>
        <div className="cs-section__body">
          {t.twoBackends.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Keeping Pharmacy Data Fresh: scraping pipeline overview */}
      <section className="cs-section">
        <h2 className="cs-section__title">{t.freshData.title}</h2>
        <div className="cs-section__body">
          <p>{t.freshData.intro}</p>

          <div className="cs-tree">
            <div className="cs-tree__header">
              <span className="cs-tree__header-dot" />
              <span className="cs-tree__header-label">
                {t.freshData.pipelineLabel}
              </span>
            </div>
            <pre className="cs-tree__body">
              {`GitHub Actions (scheduled daily)
  │
  ├─ scrapers/cities.py       collect all cities
  ├─ scrapers/pharmacies.py   collect pharmacies per city
  ├─ scrapers/details.py      collect full pharmacy details
  ├─ parsers/pharmacy.py      clean and structure the data
  └─ seeds/push.py            push to Supabase`}
            </pre>
          </div>

          <p>{t.freshData.outro}</p>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="cs-section">
        <h2 className="cs-section__title">{t.architecture.title}</h2>
        <div className="cs-section__body">
          <h3 className="cs-subheading">{t.architecture.mobileTitle}</h3>
          <p>{t.architecture.mobileText}</p>

          <h3 className="cs-subheading">{t.architecture.webTitle}</h3>
          <p>{t.architecture.webText}</p>

          <h3 className="cs-subheading">{t.architecture.sharedTitle}</h3>
          <p>{t.architecture.sharedText}</p>

          <h3 className="cs-subheading">{t.architecture.dbTitle}</h3>
          <p>{t.architecture.dbText}</p>

          {/* Mobile app folder structure */}
          <h3 className="cs-subheading">
            {t.architecture.structureMobileTitle}
          </h3>
          <div className="cs-tree">
            <div className="cs-tree__header">
              <span className="cs-tree__header-dot" />
              <span className="cs-tree__header-label">DawaMZ/</span>
            </div>
            <pre className="cs-tree__body">
              {`├── app/
│   ├── (tabs)/
│   │   ├── menu/            # About, suggestions, language, legal
│   │   ├── search/          # City and pharmacy search
│   │   └── index.tsx
│   ├── maps/
│   │   ├── auto-map.tsx          # GPS nearest pharmacy map
│   │   └── pharmacy-location.tsx # Specific pharmacy map
│   └── onboarding/
├── components/              # Shared UI components
├── context/
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── services/
│   └── supabase.ts
├── utils/
│   ├── location/
│   │   ├── calculateDistance.ts
│   │   ├── getLocation.ts
│   │   ├── getRoute.ts      # useOSRM hook
│   │   └── nearest-open-pharmacy.ts
│   ├── getLanguage.ts
│   └── isOpen.ts            # Schedule open/closed logic
├── app.json
└── eas.json`}
            </pre>
          </div>

          {/* Web app folder structure */}
          <h3 className="cs-subheading">{t.architecture.structureWebTitle}</h3>
          <div className="cs-tree">
            <div className="cs-tree__header">
              <span className="cs-tree__header-dot" />
              <span className="cs-tree__header-label">DawaMZ-web/</span>
            </div>
            <pre className="cs-tree__body">
              {`src/
├── components/
│   ├── Background.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
├── context/
│   ├── language/
│   └── theme/
├── pages/
│   ├── legal/               # About, contact, privacy, terms
│   ├── Home.tsx
│   ├── Cities.tsx
│   ├── Pharmacies.tsx
│   └── PharmacyDetail.tsx
├── services/
│   └── supabase.ts
├── styles/
└── utils/                   # Shared schedule logic (isOpen, etc.)`}
            </pre>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="cs-section" id="cs-challenges">
        <h2 className="cs-section__title">{t.challenges.title}</h2>
        <div className="cs-section__body">
          <h3 className="cs-subheading">{t.challenges.mapsTitle}</h3>
          <p>{t.challenges.mapsText}</p>

          <h3 className="cs-subheading">{t.challenges.scheduleTitle}</h3>
          {t.challenges.scheduleParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Results & Impact */}
      <section className="cs-section" id="cs-results">
        <h2 className="cs-section__title">{t.results.title}</h2>
        <div className="cs-section__body">
          <div className="cs-stats">
            {t.results.stats.map((stat, i) => (
              <div className="cs-stat" key={i}>
                <span className="cs-stat__num">{stat.num}</span>
                <span className="cs-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
          <p>{t.results.paragraph}</p>
        </div>
      </section>

      {/* What I'd Do Differently */}
      <section className="cs-section">
        <h2 className="cs-section__title">{t.whatIdChange.title}</h2>
        <div className="cs-section__body">
          <ul className="cs-list">
            {t.whatIdChange.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="cs-section cs-section--last" id="cs-stack">
        <h2 className="cs-section__title">{t.stack.title}</h2>
        <div className="cs-section__body">
          <div className="cs-stack-grid">
            {t.stack.rows.map((row, i) => (
              <div className="cs-stack-row" key={i}>
                <span className="cs-stack-row__label">{row.label}</span>
                <span className="cs-stack-row__value">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
