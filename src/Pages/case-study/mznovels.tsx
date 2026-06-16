import "../../Styles/case-study.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../Context/language";

export default function MZNovels() {
  const { dir } = useLanguage();

  return (
    <article className="case-study">
      {/* — Back link */}
      <Link to="/#projects" className="case-study__back">
        {dir === "rtl" ? "→ العودة إلى المشاريع" : "← Back"}
      </Link>

      {/* — Header */}
      <header className="cs-header" id="cs-overview">
        <span className="cs-header__eyebrow">Case Study</span>
        <div className="cs-header__title-row">
          <img
            src="/mznovels-docs/mznovels-logo.png"
            alt="MZNovels logo"
            className="cs-header__logo"
          />
          <h1 className="cs-header__title">MZNovels</h1>
        </div>
        <p className="cs-header__subtitle">
          A free reading and publishing platform for novels — built, deployed,
          and operated solo for two years, serving over{" "}
          <span className="highlight">100,000 users</span>.
        </p>

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
          <span className="cs-header__repo-note">
            Source code is private — this is a production application handling
            real user accounts and content. Verification documents are below,
            and I'm happy to walk through the code directly in an interview.
          </span>
        </div>

        <div className="cs-header__tags">
          <span className="cs-tag">Django</span>
          <span className="cs-tag">MySQL</span>
          <span className="cs-tag">Docker</span>
          <span className="cs-tag">Nginx</span>
          <span className="cs-tag">Whoosh Search</span>
          <span className="cs-tag">OAuth2</span>
          <span className="cs-tag">Solo Project</span>
        </div>
      </header>

      {/* — Why I Built This */}
      <section className="cs-section" id="cs-why">
        <h2 className="cs-section__title">Why I Built This</h2>
        <div className="cs-section__body">
          <p>
            When I first started learning programming, I was also an amateur
            author who had published some works on platforms like Wattpad and
            Webnovel. So I thought — why not build my own? One where I could
            reach a wider, more niche audience, develop tools those platforms
            didn't have, and apply what I was studying. And honestly, because I
            wanted to build something people would actually use and browse.
          </p>
          <p>
            Once the platform went live, it attracted more users and engagement
            than I expected — so I stayed with it, kept developing features, and
            continued publishing my own stories there. It launched in{" "}
            <span className="highlight">October 2024</span> and has been in
            continuous operation since.
          </p>
        </div>
      </section>

      {/* — What It Does */}
      <section className="cs-section" id="cs-what-it-does">
        <h2 className="cs-section__title">What It Does</h2>
        <div className="cs-section__body">
          <p>
            MZNovels gives writers a complete publishing workflow and gives
            readers a free, ad-light way to discover and follow novels.
          </p>

          <div className="cs-feature-grid">
            <div className="cs-feature">
              <h3 className="cs-feature__title">For Readers</h3>
              <ul className="cs-feature__list">
                <li>Browse and read novels with no subscription or paywall</li>
                <li>
                  Advanced search and filtering by genre, tags, and ranking
                </li>
                <li>Bookmarking and reading-progress tracking</li>
                <li>User profiles with avatars</li>
                <li>Sign in with Google via OAuth2</li>
              </ul>
            </div>
            <div className="cs-feature">
              <h3 className="cs-feature__title">For Writers</h3>
              <ul className="cs-feature__list">
                <li>Publish and manage novels from a writer dashboard</li>
                <li>Full chapter editor with rich-text formatting</li>
                <li>Chapter ordering and management tools</li>
                <li>Cover image uploads and novel metadata editing</li>
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
            <span className="cs-device__caption">Homepage — desktop</span>
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
            <span className="cs-device__caption">Homepage — mobile</span>
          </div>
        </div>
      </section>

      {/* — Technical Architecture */}
      <section className="cs-section" id="cs-architecture">
        <h2 className="cs-section__title">Technical Architecture</h2>
        <div className="cs-section__body">
          <p>
            The application is a Django monolith, chosen for a solo project
            where shipping speed and a mature ecosystem (admin panel, ORM, auth)
            mattered more than a distributed-services architecture. The frontend
            is server-rendered with Django templates, HTML, CSS, and JavaScript
            — no separate SPA layer, which kept the deployment surface small for
            one person to operate.
          </p>

          <h3 className="cs-subheading">Deployment</h3>
          <p>
            The stack runs in Docker, split across four containers — a web
            container running the Django application via Gunicorn, an Nginx
            reverse proxy handling static files and rate limiting, a MySQL
            database, and a dedicated initialization container for schema setup
            and migrations. The application is hosted on a Linux VPS on Vultr.
          </p>
          <ul className="cs-list">
            <li>
              <strong>Web</strong> — Django application, served via Gunicorn
            </li>
            <li>
              <strong>Nginx</strong> — reverse proxy, static file serving, SSL
              termination, and rate limiting
            </li>
            <li>
              <strong>Database</strong> — MySQL, with a dedicated initialization
              container for setup and migrations
            </li>
          </ul>

          <h3 className="cs-subheading">Authentication</h3>
          <p>
            Authentication uses a custom OAuth2 backend (
            <code>oauth2_backend.py</code>, <code>adapters.py</code>,{" "}
            <code>backends.py</code>) alongside Django's built-in auth system.
            This lets users sign in with Google while keeping the user model and
            session handling entirely under application control — no third-party
            auth service dependency.
          </p>

          <h3 className="cs-subheading">Search</h3>
          <p>
            Search and filtering (by genre, tags, and ranking) is powered by
            Whoosh, a pure-Python search library indexed against the novel and
            chapter catalog. This avoided introducing a separate search service
            (e.g. Elasticsearch) while still giving readers fast, relevant
            filtering across a growing catalog.
          </p>

          <h3 className="cs-subheading">Project Structure</h3>
          <p>
            The codebase separates concerns into dedicated modules:
            authentication (<code>adapters.py</code>, custom OAuth2 backend),
            content ingestion (<code>scraper.py</code>), search (
            <code>search_indexes.py</code>), SEO (<code>sitemaps.py</code>), and
            access control (<code>middleware.py</code>,{" "}
            <code>validators.py</code>). A <code>tests</code> directory and
            management commands support ongoing maintenance.
          </p>

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
        <h2 className="cs-section__title">Challenges & Solutions</h2>
        <div className="cs-section__body">
          <h3 className="cs-subheading">Operating at Scale on a Solo Budget</h3>
          <p>
            I learned a lot while building the platform and didn't run into many
            issues at first. The real difficulties started when it came time to
            deploy. I went with a VPS on Vultr — the cost was reasonable, and
            the control it gave me over the environment was worth it compared to
            managed hosting.
          </p>
          <p>
            Since it was my first deployment, setting up networking, SSL, and
            safely orchestrating all the Docker containers turned out to be
            genuinely hard. I went through a lot of failed containers and
            corrupt runs. But I worked through every one of them and got the app
            live — and that experience now means I can deploy new projects with
            little to no friction.
          </p>

          <h3 className="cs-subheading">Bot Traffic and Log Visibility</h3>
          <p>
            The first six months were healthy — steady organic growth with very
            little bot traffic, putting the platform on track to hit 100,000
            users (
            <a
              href="/mznovels-docs/mznovels-analytics-early.pdf"
              target="_blank"
              rel="noreferrer"
              className="cs-inline-link"
            >
              see early analytics
            </a>
            ). Around that point, I started relying more on my hosting
            provider's logs day to day instead of Google Analytics. I noticed
            CPU usage had crept up from around 4–7% to about 13%, so I added
            some protection: blocking IPs with unusually high request rates and
            tightening the rate limits in Nginx. The logs looked stable after
            that, so I moved on.
          </p>
          <p>
            What I didn't realize was that I'd only fixed part of the problem.
            I'd set log retention to keep just the last 100–200 entries, and the
            bot traffic was hitting the web container mostly at night, while the
            Nginx and database containers — the ones I actually checked — stayed
            quiet. So every time I looked, things seemed fine.
          </p>
          <p>
            I only found out something was wrong by accident. I had to travel
            late one night and, out of curiosity, opened Google Analytics — and
            saw strange spikes I couldn't explain. Digging into it, I found a
            steady drop in engagement time, a higher bounce rate, and new-user
            numbers that didn't match what I was seeing elsewhere. The bot
            traffic had been running since my original fix, just outside the
            window my logs covered (
            <a
              href="/mznovels-docs/mznovels-analytics-affected.pdf"
              target="_blank"
              rel="noreferrer"
              className="cs-inline-link"
            >
              see affected period
            </a>
            ).
          </p>
          <p>
            {" "}
            I considered switching to Cloudflare for better protection, but the
            global outage on November 18, 2025 made me hesitate — Which made me preferred to
            keep traffic handling in-house for full control and avoid adding an
            external dependency in the critical path. Instead, I stuck with
            handling it myself: widened Nginx rate limiting rules, tightened IP
            blocking, and extended log retention significantly so off-hours
            patterns wouldn’t go undetected again.
          </p>
        </div>
      </section>

      {/* — Results & Impact */}
      <section className="cs-section" id="cs-results">
        <h2 className="cs-section__title">Results & Impact</h2>
        <div className="cs-section__body">
          <div className="cs-stats">
            <div className="cs-stat">
              <span className="cs-stat__num">100K+</span>
              <span className="cs-stat__label">Genuine Users</span>
            </div>
            <div className="cs-stat">
              <span className="cs-stat__num">4M+</span>
              <span className="cs-stat__label">Total Page Views</span>
            </div>
            <div className="cs-stat">
              <span className="cs-stat__num">~400K</span>
              <span className="cs-stat__label">Peak Monthly Views</span>
            </div>
            <div className="cs-stat">
              <span className="cs-stat__num">34m 15s</span>
              <span className="cs-stat__label">Avg. Session Length</span>
            </div>
          </div>

          <p>
            Google Analytics recorded approximately{" "}
            <span className="highlight">199K active users</span> and{" "}
            <span className="highlight">4M page views</span> over the platform's
            lifetime. After analyzing the traffic patterns from the bot issue
            above, my best estimate is that around half the recorded users are
            real — so closer to{" "}
            <span className="highlight">100K genuine users</span>, which
            actually lines up with where things were heading in the first six
            months before the bot traffic started.
          </p>
          <p>
            {" "}
            The strongest signal that the platform was working? Average
            engagement time —{" "}
            <span className="highlight">34 minutes per active user</span>, even
            during bot spam attacks. In clean conditions, that number regularly
            crossed <span className="highlight">one hour</span> in the healthy period. This wasn't
            drive-by traffic — people sat down, read, returned for new chapters,
            and stayed. Growth was organic, supported only by a modest offline
            push: A4 flyers across my city, later expanded nationwide with help
            from family, friends, and a few local pharmacies.{" "}
          </p>
        </div>
      </section>

      {/* — What I'd Do Differently */}
      <section className="cs-section">
        <h2 className="cs-section__title">What I'd Do Differently</h2>
        <div className="cs-section__body">
          <ul className="cs-list">
            <li>
              Keep analytics and hosting-level monitoring in the same review
              cadence, rather than relying on one as a proxy for the other —
              container-level logs and Analytics caught different problems.
            </li>
            <li>
              Retain logs for a longer window from the start. A 100–200 entry
              cap was enough for day-to-day debugging but too short to catch
              slow-building, off-hours patterns.
            </li>
            <li>
              Invest earlier in a proper staging environment. Testing config
              changes directly on the production VPS worked until it didn't — a
              separate environment would have made deployments safer and faster
              to iterate on.
            </li>
          </ul>
        </div>
      </section>

      {/* — Ownership & Verification */}
      <section className="cs-section">
        <h2 className="cs-section__title">Ownership & Verification</h2>
        <div className="cs-section__body">
          <p>
            The source repository is private, as MZNovels is a production
            application with real user accounts and published content. The
            documents below verify ownership of the domain and provide
            historical analytics covering the periods discussed above.
          </p>
          <div className="cs-docs">
            <a
              className="cs-doc"
              href="/mznovels-docs/domain-purchase.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span className="cs-doc__title">Domain Purchase Receipt</span>
              <span className="cs-doc__meta">
                PDF · Proof of domain ownership
              </span>
            </a>
            <a
              className="cs-doc"
              href="/mznovels-docs/mznovels-analytics-early.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span className="cs-doc__title">
                Analytics — Jan–Jun 2025 (Early growth)
              </span>
              <span className="cs-doc__meta">
                PDF · Google Analytics export
              </span>
            </a>
            <a
              className="cs-doc"
              href="/mznovels-docs/mznovels-analytics-affected.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span className="cs-doc__title">
                Analytics — Jul–Dec 2025 (Bot-traffic period)
              </span>
              <span className="cs-doc__meta">
                PDF · Google Analytics export
              </span>
            </a>
            <a
              className="cs-doc"
              href="/mznovels-docs/mznovels-analytics-alltime.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span className="cs-doc__title">Analytics — All Time</span>
              <span className="cs-doc__meta">
                PDF · Google Analytics export
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* — Tech Stack */}
      <section className="cs-section cs-section--last" id="cs-stack">
        <h2 className="cs-section__title">Tech Stack</h2>
        <div className="cs-section__body">
          <div className="cs-stack-grid">
            <div className="cs-stack-row">
              <span className="cs-stack-row__label">Backend</span>
              <span className="cs-stack-row__value">Django, Python</span>
            </div>
            <div className="cs-stack-row">
              <span className="cs-stack-row__label">Frontend</span>
              <span className="cs-stack-row__value">
                HTML5, CSS3, JavaScript
              </span>
            </div>
            <div className="cs-stack-row">
              <span className="cs-stack-row__label">Database</span>
              <span className="cs-stack-row__value">MySQL</span>
            </div>
            <div className="cs-stack-row">
              <span className="cs-stack-row__label">Search</span>
              <span className="cs-stack-row__value">Whoosh</span>
            </div>
            <div className="cs-stack-row">
              <span className="cs-stack-row__label">Auth</span>
              <span className="cs-stack-row__value">
                Django Auth + Custom OAuth2 (Google)
              </span>
            </div>
            <div className="cs-stack-row">
              <span className="cs-stack-row__label">Infrastructure</span>
              <span className="cs-stack-row__value">
                Docker, Nginx, Gunicorn, VPS (Linux / Vultr)
              </span>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
