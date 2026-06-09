import "../Styles/index.css";

export default function Home() {
  return (
    <>
      {/* ─── Hero ────────────────────────────────────────────────────────────── */}
      <section id="home" className="page">
        <h1 className="title">Mohammed Zaouk</h1>
        <p className="text">
          Full-Stack Software Engineer focused on building and scaling
          production web and mobile applications serving over
          <span className="highlight"> 100,000+ users</span>.
        </p>
      </section>

      {/* ─── Projects ────────────────────────────────────────────────────────── */}
      <section id="projects" className="section">
        <h2 className="section__title">Projects</h2>
        <p className="section__placeholder">Coming soon.</p>
      </section>

      {/* ─── Work Experience ─────────────────────────────────────────────────── */}
      <section id="work-experience" className="section">
        <h2 className="section__title">Work Experience</h2>
        <p className="section__placeholder">Coming soon.</p>
      </section>

      {/* ─── Education ───────────────────────────────────────────────────────── */}
      <section id="education" className="section">
        <h2 className="section__title">Education</h2>
        <p className="section__placeholder">Coming soon.</p>
      </section>

      {/* ─── About ───────────────────────────────────────────────────────────── */}
      <section id="about" className="section">
        <h2 className="section__title">About</h2>
        <p className="section__placeholder">Coming soon.</p>
      </section>

      {/* ─── Verification ────────────────────────────────────────────────────── */}
      <section id="verification" className="section">
        <h2 className="section__title">Verification</h2>
        <p className="section__placeholder">Coming soon.</p>
      </section>
    </>
  );
}
