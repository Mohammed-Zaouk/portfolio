import "../../Styles/case-study.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../Context/language";

export default function DawaMZ() {
  const { dir } = useLanguage();

  return (
    <article className="case-study">
      {/* — Back link */}
      <Link to="/#projects" className="case-study__back">
        {dir === "rtl" ? "→ العودة" : "← Back"}
      </Link>

      {/* — Header */}
      <header className="cs-header" id="cs-overview">
        <span className="cs-header__eyebrow">Case Study</span>
        <div className="cs-header__title-row">
          <img
            src="/dawamz-docs/dawamz-logo.png"
            alt="DawaMZ logo"
            className="cs-header__logo"
          />
          <h1 className="cs-header__title">DawaMZ</h1>
        </div>
        <p className="cs-header__subtitle">
          Find the nearest open pharmacy in Morocco, right now. A multilingual
          pharmacy finder shipped as a native mobile app and a companion
          website, with <span className="highlight">50,000+ installs</span> on
          the Play Store.
        </p>
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
          <span className="cs-header__repo-note">
            The data scraper that keeps pharmacy schedules up to date is kept
            private — it touches a third-party data source and I'd rather not
            publish that pipeline. The app and web repos are public.
          </span>
        </div>
        <div className="cs-header__tags">
          <span className="cs-tag">React Native</span>
          <span className="cs-tag">Expo</span>
          <span className="cs-tag">React</span>
          <span className="cs-tag">Vite</span>
          <span className="cs-tag">Supabase</span>
          <span className="cs-tag">MapLibre</span>
          <span className="cs-tag">Solo Project</span>
        </div>
      </header>

      {/* — Why I Built This */}
      <section className="cs-section" id="cs-why">
        <h2 className="cs-section__title">Why I Built This</h2>
        <div className="cs-section__body">
          <p>
            The idea had been in my head for a while. It started on a random day
            when my mother asked me to go check which pharmacy was on call that
            weekend. I thought — why do I have to go out in the heat to check
            something I should be able to look up on my phone? Then it hit me:
            is there even a way to do that?
          </p>
          <p>
            So I checked. I found a few apps with broken UIs and expired data.
            Since I was looking for a real project to work on after finishing
            MZNovels, I decided to build it myself. This was my first project
            built to solve an actual problem for people around me — and it set
            the direction for what I want to keep building: digital versions of
            services that don't have one yet.
          </p>
        </div>
      </section>

      {/* — What It Does */}
      <section className="cs-section" id="cs-what-it-does">
        <h2 className="cs-section__title">What It Does</h2>
        <div className="cs-section__body">
          <p>
            DawaMZ finds the closest open or on-call pharmacy to a user's
            location and gets them there — on a native app for the full
            experience, and on the web for quick, shareable lookups.
          </p>

          <div className="cs-feature-grid">
            <div className="cs-feature">
              <h3 className="cs-feature__title">Core Features</h3>
              <ul className="cs-feature__list">
                <li>GPS-based nearest open-pharmacy detection</li>
                <li>
                  Interactive map with light/dark tile styles matching the app
                  theme
                </li>
                <li>
                  Turn-by-turn routing, with a Google Maps fallback if no route
                  is found
                </li>
                <li>
                  Real-time open/closed status from weekly schedules, lunch
                  breaks, night shifts, and on-call duty periods
                </li>
                <li>Tap-to-call and copy-address actions</li>
              </ul>
            </div>
            <div className="cs-feature">
              <h3 className="cs-feature__title">Platform Differences</h3>
              <ul className="cs-feature__list">
                <li>
                  <strong>Mobile</strong> — full native experience: GPS routing,
                  offline-friendly UI, dark mode, tile fallback to OpenStreetMap
                </li>
                <li>
                  <strong>Web</strong> — built for discoverability: SEO-friendly
                  region → city → pharmacy pages with shareable URLs
                </li>
                <li>Both — Arabic (RTL), French, and English support</li>
                <li>
                  Both — community suggestions for missing pharmacies or cities
                </li>
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
                  src="/dawamz-docs/dawamz-laptop.png"
                  alt="DawaMZ website"
                />
              </div>
            </div>
            <span className="cs-device__caption">dawamz.com — desktop</span>
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
            <span className="cs-device__caption">Mobile app — map view</span>
          </div>
        </div>
      </section>

      {/* — Two Platforms, One Backend */}
      <section className="cs-section" id="cs-architecture">
        <h2 className="cs-section__title">Two Platforms, One Backend</h2>
        <div className="cs-section__body">
          <p>
            The mobile app and the website are two separate codebases — React
            Native + Expo for mobile, React + Vite for web — but they share a
            single Supabase project: same database, same schedule logic, same
            multilingual content. A pharmacy's open/closed status, hours, and
            translations are computed once and read by both platforms, so
            there's one source of truth instead of two systems drifting apart.
          </p>
          <p>
            This split let each platform focus on what it's actually good at.
            Mobile owns the experience that benefits from native APIs — GPS,
            maps, routing, offline-friendly UI, dark mode. Web owns
            discoverability — SEO-friendly URLs per region, city, and pharmacy,
            so a pharmacy page can be found and shared without installing
            anything.
          </p>
        </div>
      </section>

      {/* — Keeping Pharmacy Data Fresh */}
      <section className="cs-section">
        <h2 className="cs-section__title">Keeping Pharmacy Data Fresh</h2>
        <div className="cs-section__body">
          <p>
            Pharmacy and on-call schedule data is the core of the app, and
            keeping it current without manual upkeep was a priority from the
            start. A scheduled job handles this automatically:
          </p>

          <div className="cs-tree">
            <div className="cs-tree__header">
              <span className="cs-tree__header-dot" />
              <span className="cs-tree__header-label">
                Daily scraper pipeline
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

          <p>
            For pharmacies or cities the scraper doesn't cover yet, both
            platforms include a suggestion system — users can submit a missing
            pharmacy or request a new city directly from the app or website,
            with rate limiting on the web form to prevent abuse. Anything
            submitted this way is reviewed and added through direct Supabase
            inserts.
          </p>
        </div>
      </section>

      {/* — Technical Architecture */}
      <section className="cs-section">
        <h2 className="cs-section__title">Technical Architecture</h2>
        <div className="cs-section__body">
          <h3 className="cs-subheading">Mobile</h3>
          <p>
            Built with React Native and Expo (SDK 52) in TypeScript, using Expo
            Router for file-based navigation. Maps run on MapLibre GL with
            MapTiler for light and dark tile styles that match the app theme —
            if MapTiler tiles fail to load, the app silently falls back to
            OpenStreetMap so the map never breaks for the user. Routing is
            computed via OSRM and drawn as a polyline on the map; if OSRM can't
            find a route, the app falls back to opening Google Maps directly.
          </p>

          <h3 className="cs-subheading">Web</h3>
          <p>
            Built with React 18, TypeScript, and Vite, styled with CSS Modules
            and deployed on Vercel. Routing uses React Router v6 with
            SEO-friendly slugs for the region → city → pharmacy hierarchy, and
            directions hand off to Google Maps with one tap.
          </p>

          <h3 className="cs-subheading">Shared Logic</h3>
          <p>
            The "is this pharmacy open right now" calculation — accounting for
            weekly schedules, lunch breaks, night shifts, and on-call duty
            periods — is implemented independently on each platform but against
            the same underlying schedule data in Supabase, so both apps agree on
            a pharmacy's status at any given moment.
          </p>

          <h3 className="cs-subheading">Database</h3>
          <p>
            PostgreSQL via Supabase, with Row Level Security enabled on every
            table. The public can read pharmacy and city data; writes go through
            the scraper pipeline or the moderated suggestion system. Key tables
            include <code>regions</code>, <code>cities</code>,{" "}
            <code>pharmacies</code>, and <code>pharmacy_suggestions</code>.
          </p>

          <h3 className="cs-subheading">Project Structure (Mobile)</h3>
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

          <h3 className="cs-subheading">Project Structure (Web)</h3>
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

      {/* — Challenges & Solutions */}
      <section className="cs-section" id="cs-challenges">
        <h2 className="cs-section__title">Challenges & Solutions</h2>
        <div className="cs-section__body">
          <h3 className="cs-subheading">Maps That Don't Break</h3>
          <p>
            From working on MZNovels, I learned that everything behind a paywall
            has a free alternative — though nothing is truly free, and you have
            to know where to spend and where not to. I wanted to avoid Google
            Maps entirely because of the cost. My first attempt with React Maps
            crashed even without using Google Maps directly — it turned out
            React Maps calls the Google API under the hood and needs a key
            regardless. So I ditched it and switched to the open-source{" "}
            <code>@maplibre/maplibre-react-native</code>. It turned out
            beautifully: MapTiler handles the styled tiles, OpenStreetMap is the
            silent fallback if tiles fail, and OSRM handles routing with Google
            Maps as the last-resort fallback if no route is found.
          </p>

          <h3 className="cs-subheading">Schedule Logic Across Two Codebases</h3>
          <p>
            The trickiest part was keeping schedule logic consistent between the
            Python scraper and the JavaScript/TypeScript frontends. The scraper
            pulls fresh on-call data daily, but the format wasn't always
            matching what the frontend expected. I had to define a shared
            structure — essentially a contract between both codebases — so that
            a pharmacy's hours display correctly whether you're on Android or
            the web.
          </p>
          <p>
            Edge cases made this harder than expected: <code>null</code> for
            Sunday (many pharmacies are simply closed), multiple time slots in a
            single day like morning and afternoon shifts, and overnight on-call
            periods that span midnight. Each required careful parsing on both
            ends to avoid silent bugs where a pharmacy would show as open when
            it wasn't, or vice versa.
          </p>
        </div>
      </section>

      {/* — Results & Impact */}
      <section className="cs-section" id="cs-results">
        <h2 className="cs-section__title">Results & Impact</h2>
        <div className="cs-section__body">
          <div className="cs-stats">
            <div className="cs-stat">
              <span className="cs-stat__num">50K+</span>
              <span className="cs-stat__label">Play Store Installs</span>
            </div>
            <div className="cs-stat">
              <span className="cs-stat__num">99</span>
              <span className="cs-stat__label">Cities Covered</span>
            </div>
            <div className="cs-stat">
              <span className="cs-stat__num">10k+</span>
              <span className="cs-stat__label">Pharmacies Tracked</span>
            </div>
            <div className="cs-stat">
              <span className="cs-stat__num">6 months</span>
              <span className="cs-stat__label">Live & Operating</span>
            </div>
          </div>
          <p>
            The app reached 50,000+ installs on the Play Store purely through
            organic discovery — no paid promotion, no marketing budget. Users
            from across Morocco found it, rated it, and came back to it when
            they needed it, which is exactly what the app was built for.
          </p>
        </div>
      </section>

      {/* — What I'd Do Differently */}
      <section className="cs-section">
        <h2 className="cs-section__title">What I'd Do Differently</h2>
        <div className="cs-section__body">
          <ul className="cs-list">
            <li>
              Define the scraper output format as a strict schema from day one,
              rather than letting it evolve and then having to retrofit the
              frontend parser to match. A shared type definition — even just a
              JSON schema — would have caught format mismatches before they
              became runtime bugs.
            </li>
            <li>
              Evaluate map libraries earlier in the process. Switching from
              React Maps to MapLibre mid-build cost time that could have been
              avoided with a short spike at the start to test rendering,
              performance, and API key requirements before committing.
            </li>
          </ul>
        </div>
      </section>

      {/* — Tech Stack */}
      <section className="cs-section cs-section--last" id="cs-stack">
        <h2 className="cs-section__title">Tech Stack</h2>
        <div className="cs-section__body">
          <div className="cs-stack-grid">
            <div className="cs-stack-row">
              <span className="cs-stack-row__label">Mobile</span>
              <span className="cs-stack-row__value">
                React Native, Expo (SDK 52), TypeScript, Expo Router
              </span>
            </div>
            <div className="cs-stack-row">
              <span className="cs-stack-row__label">Web</span>
              <span className="cs-stack-row__value">
                React 18, TypeScript, Vite, CSS Modules
              </span>
            </div>
            <div className="cs-stack-row">
              <span className="cs-stack-row__label">Backend / DB</span>
              <span className="cs-stack-row__value">
                Supabase (PostgreSQL + Row Level Security)
              </span>
            </div>
            <div className="cs-stack-row">
              <span className="cs-stack-row__label">Maps & Routing</span>
              <span className="cs-stack-row__value">
                MapLibre GL, MapTiler, OpenStreetMap, OSRM, Google Maps
              </span>
            </div>
            <div className="cs-stack-row">
              <span className="cs-stack-row__label">Automation</span>
              <span className="cs-stack-row__value">
                Python scraper on GitHub Actions (private)
              </span>
            </div>
            <div className="cs-stack-row">
              <span className="cs-stack-row__label">Distribution</span>
              <span className="cs-stack-row__value">
                EAS Build, Google Play, Vercel
              </span>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
