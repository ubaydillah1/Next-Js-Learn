import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
import UseMemo from "./pages/useMemo";
import UseRef from "./pages/useRef";
import DarkModeProvider from "./contexts/DarkMode";
import UseContext from "./pages/useContext";
import UseReducer from "./pages/useReducer";
import UseCallback from "./pages/useCallback";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="/usecontext" element={<UseContext />} />
          <Route path="/usereducer" element={<UseReducer />} />
          <Route path="/usecallback" element={<UseCallback />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  </StrictMode>
);
