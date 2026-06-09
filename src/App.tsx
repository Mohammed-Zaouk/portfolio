import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Component/navbar";
import Home from "./Pages";

function NotFound() {
  return (
    <main style={styles.page}>
      <h1 style={{ ...styles.title, color: "#ef4444" }}>404</h1>
      <p style={styles.text}>Page not found.</p>
    </main>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  page: {
    maxWidth: "640px",
    margin: "4rem auto",
    padding: "0 1.5rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    letterSpacing: "-0.03em",
  },
  text: {
    color: "#6b7280",
    lineHeight: 1.6,
  },
};
