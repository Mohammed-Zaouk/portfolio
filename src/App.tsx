import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/navbar";
import Background from "./Components/background";
import NotFound from "./Components/not_found";
import Home from "./Pages";
import MZNovels from "./Pages/case-study/mznovels";
import DawaMZ from "./Pages/case-study/dawamz";
import { LanguageProvider } from "./Context/LanguageProvider";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Background>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-study/mznovels" element={<MZNovels />} />
            <Route path="/case-study/dawamz" element={<DawaMZ />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Background>
      </BrowserRouter>
    </LanguageProvider>
  );
}
