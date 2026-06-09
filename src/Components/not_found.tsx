import { Link } from "react-router-dom";
import "../styles/not_found.css";

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="notfound__inner">
        <span className="notfound__code">404</span>
        <div className="notfound__divider" />
        <div className="notfound__content">
          <h1 className="notfound__title">Page not found</h1>
          <p className="notfound__text">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="notfound__btn">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}