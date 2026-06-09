import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/navbar";
import Background from "./Components/background";
import NotFound from "./Components/not_found";
import Home from "./Pages";

export default function App() {
  return (
    <BrowserRouter>
      <Background>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Background>
    </BrowserRouter>
  );
}
