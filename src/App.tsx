import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import PresentationsSection from "./Pages/Presentation";
import OxyGlobal4PPage from "./Pages/OxyGlobal4PPage";
import OxyBfsaiPage from "./Pages/OxyBfsaiPage";
import Login from "./Admin/Auth/Login";
import Dashboard from "./Admin/Dashboard";
import ProtectedRoute from "./Admin/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/corporatepresentations" element={<PresentationsSection />} />
        <Route path="/oxy4pecosystem" element={<OxyGlobal4PPage />} />
        <Route path="/oxybfsai" element={<OxyBfsaiPage />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;