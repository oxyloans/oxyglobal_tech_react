import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";

const PresentationsSection = lazy(() => import("./Pages/Presentation"));
const OxyGlobal4PPage = lazy(() => import("./Pages/OxyGlobal4PPage"));
const OxyBfsaiPage = lazy(() => import("./Pages/OxyBfsaiPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/corporatepresentations" element={<PresentationsSection />} />
          <Route path="/oxy4pecosystem" element={<OxyGlobal4PPage />} />
          <Route path="/oxybfsai" element={<OxyBfsaiPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;