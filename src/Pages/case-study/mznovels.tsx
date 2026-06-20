import "../../Styles/case-study.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../Context/language";
import { mznovelsTranslations } from "../../Context/mznovels.translations";

// Parses **bold** markers into highlighted spans.
function renderHighlighted(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <span className="highlight" key={i}>
        {part.slice(2, -2)}
      </span>
    ) : (
      part
    ),
  );
}

const DOC_HREFS = [
  "/mznovels-docs/domain-purchase.pdf",
  "/mznovels-docs/mznovels-analytics-early.pdf",
  "/mznovels-docs/mznovels-analytics-affected.pdf",
  "/mznovels-docs/mznovels-analytics-alltime.pdf",
];

export default function MZNovels() {
  const { language } = useLanguage();
  const c = mznovelsTranslations[language];

  return (
    <article className="case-study">
      {/* — Back link */}
      <Link to="/#projects" className="case-study__back">
        {c.backLink}
      </Link>

      {/* — Header */}
      <header className="cs-header" id="cs-overview">
        <span className="cs-header__eyebrow">{c.eyebrow}</span>
        <div className="cs-header__title-row">
          <img
            src="/mznovels-docs/mznovels-logo.png"
            alt="MZNovels logo"
            className="cs-header__logo"
          />
          <h1 className="cs-header__title">MZNovels</h1>
        </div>
        <p className="cs-header__subtitle">{renderHighlighted(c.subtitle)}</p>

        <div className="cs-header__links">
          <a
            href="https://mznovels.com"
            target="_blank"
            rel="noreferrer"
            className="cs-header__link"
          >
            mznovels.com ↗
          </a>
          <span className="cs-header__sep">·</span>
          <span className="cs-header__repo-note">{c.repoNote}</span>
        </div>

        <div className="cs-header__tags">
          {c.tags.map((tag) => (
            <span className="cs-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* — Why I Built This */}
      <section className="cs-section" id="cs-why">
        <h2 className="cs-section__title">{c.why.title}</h2>
        <div className="cs-section__body">
          {c.why.paragraphs.map((p, i) => (
            <p key={i}>{renderHighlighted(p)}</p>
          ))}
        </div>
      </section>

      {/* — What It Does */}
      <section className="cs-section" id="cs-what-it-does">
        <h2 className="cs-section__title">{c.whatItDoes.title}</h2>
        <div className="cs-section__body">
          <p>{c.whatItDoes.intro}</p>

          <div className="cs-feature-grid">
            <div className="cs-feature">
              <h3 className="cs-feature__title">{c.whatItDoes.readersTitle}</h3>
              <ul className="cs-feature__list">
                {c.whatItDoes.readersList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="cs-feature">
              <h3 className="cs-feature__title">{c.whatItDoes.writersTitle}</h3>
              <ul className="cs-feature__list">
                {c.whatItDoes.writersList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* — Device showcase */}
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
                  src="/mznovels-docs/mznovels-laptop.png"
                  alt="MZNovels desktop view"
                />
              </div>
            </div>
            <span className="cs-device__caption">
              {c.whatItDoes.desktopCaption}
            </span>
          </div>

          <div className="cs-device cs-device--phone">
            <div className="cs-device__shell">
              <div className="cs-device__notch" />
              <div className="cs-device__screen">
                <img
                  src="/mznovels-docs/mznovels-mobile.png"
                  alt="MZNovels mobile view"
                />
              </div>
            </div>
            <span className="cs-device__caption">
              {c.whatItDoes.mobileCaption}
            </span>
          </div>
        </div>
      </section>

      {/* — Technical Architecture */}
      <section className="cs-section" id="cs-architecture">
        <h2 className="cs-section__title">{c.architecture.title}</h2>
        <div className="cs-section__body">
          <p>{c.architecture.intro}</p>

          <h3 className="cs-subheading">{c.architecture.deploymentTitle}</h3>
          <p>{c.architecture.deploymentText}</p>
          <ul className="cs-list">
            {c.architecture.deploymentList.map((item, i) => (
              <li key={i}>
                <strong>{item.label}</strong> {item.text}
              </li>
            ))}
          </ul>

          <h3 className="cs-subheading">{c.architecture.authTitle}</h3>
          <p>{c.architecture.authText}</p>

          <h3 className="cs-subheading">{c.architecture.searchTitle}</h3>
          <p>{c.architecture.searchText}</p>

          <h3 className="cs-subheading">{c.architecture.structureTitle}</h3>
          <p>{c.architecture.structureText}</p>

          <div className="cs-tree">
            <div className="cs-tree__header">
              <span className="cs-tree__header-dot" />
              <span className="cs-tree__header-label">MZNovels-website/</span>
            </div>
            <pre className="cs-tree__body">
              {`├── nginx/                  # Reverse proxy config
├── mysql-init/             # DB initialization scripts
├── myapp/                  # Django application
│   ├── management/         # Custom management commands
│   ├── migrations/         # Database schema history
│   ├── static/             # App-level static assets
│   ├── templates/          # HTML templates
│   ├── templatetags/       # Custom template tags
│   ├── tests/              # Test suite
│   ├── adapters.py         # OAuth2 adapter
│   ├── backends.py         # Auth backends
│   ├── context_processors.py
│   ├── forms.py
│   ├── middleware.py       # Access control
│   ├── models.py
│   ├── oauth2_backend.py   # Custom OAuth2 backend
│   ├── scraper.py          # Content ingestion
│   ├── search_indexes.py   # Whoosh search config
│   ├── signals.py
│   ├── sitemaps.py         # SEO sitemap generation
│   ├── urls.py
│   ├── validators.py
│   └── views.py
├── Novelwebsite/           # Project configuration
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
├── staticfiles/            # Collected static files
│   ├── css/ · js/ · images/
│   ├── avatars/ · favicons/
│   └── templates/
├── docker-compose.yml
├── Dockerfile
├── requirements.txt
└── manage.py`}
            </pre>
          </div>
        </div>
      </section>

      {/* — Challenges & Solutions */}
      <section className="cs-section" id="cs-challenges">
        <h2 className="cs-section__title">{c.challenges.title}</h2>
        <div className="cs-section__body">
          <h3 className="cs-subheading">{c.challenges.budgetTitle}</h3>
          {c.challenges.budgetParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <h3 className="cs-subheading">{c.challenges.botTitle}</h3>
          <p>
            {c.challenges.botP1Before}
            <a
              href="/mznovels-docs/mznovels-analytics-early.pdf"
              target="_blank"
              rel="noreferrer"
              className="cs-inline-link"
            >
              {c.challenges.earlyLinkText}
            </a>
            {c.challenges.botP1After}
          </p>
          <p>{c.challenges.botP2}</p>
          <p>
            {c.challenges.botP3Before}
            <a
              href="/mznovels-docs/mznovels-analytics-affected.pdf"
              target="_blank"
              rel="noreferrer"
              className="cs-inline-link"
            >
              {c.challenges.affectedLinkText}
            </a>
            {c.challenges.botP3After}
          </p>
          <p>{c.challenges.botP4}</p>
        </div>
      </section>

      {/* — Results & Impact */}
      <section className="cs-section" id="cs-results">
        <h2 className="cs-section__title">{c.results.title}</h2>
        <div className="cs-section__body">
          <div className="cs-stats">
            {c.results.stats.map((stat, i) => (
              <div className="cs-stat" key={i}>
                <span className="cs-stat__num">{stat.num}</span>
                <span className="cs-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>

          <p>{renderHighlighted(c.results.paragraph1)}</p>
          <p>{renderHighlighted(c.results.paragraph2)}</p>
        </div>
      </section>

      {/* — What I'd Do Differently */}
      <section className="cs-section">
        <h2 className="cs-section__title">{c.whatIdChange.title}</h2>
        <div className="cs-section__body">
          <ul className="cs-list">
            {c.whatIdChange.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* — Ownership & Verification */}
      <section className="cs-section">
        <h2 className="cs-section__title">{c.ownership.title}</h2>
        <div className="cs-section__body">
          <p>{c.ownership.intro}</p>
          <div className="cs-docs">
            {c.ownership.docs.map((doc, i) => (
              <a
                className="cs-doc"
                href={DOC_HREFS[i]}
                target="_blank"
                rel="noreferrer"
                key={i}
              >
                <span className="cs-doc__title">{doc.title}</span>
                <span className="cs-doc__meta">{doc.meta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* — Tech Stack */}
      <section className="cs-section cs-section--last" id="cs-stack">
        <h2 className="cs-section__title">{c.stack.title}</h2>
        <div className="cs-section__body">
          <div className="cs-stack-grid">
            {c.stack.rows.map((row, i) => (
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
