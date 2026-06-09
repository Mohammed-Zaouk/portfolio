import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Styles/navbar.css";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "work-experience", label: "Work Experience" },
  { id: "education", label: "Education" },
  { id: "about", label: "About" },
  { id: "verification", label: "Verification" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  // Track which section is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach(({ id }) => {
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

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <NavLink to="/" className="brand">
        <img
          src="/src/assets/logo/mz_logo.png"
          alt="MZ"
          className="brand-logo"
        />
      </NavLink>
      <div className="links">
        {navLinks.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={active === id ? "link active-link" : "link"}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
