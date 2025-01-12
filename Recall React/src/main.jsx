import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
import UseMemo from "./pages/UseMemo";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/usememo" element={<UseMemo />} />
      </Routes>
    </Router>
  </StrictMode>
);
