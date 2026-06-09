import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import "../Styles/navbar.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="nav">
      <span className="brand">MyApp</span>
      <div className="links">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }: NavLinkRenderProps) => 
              isActive ? "link active-link" : "link"
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}