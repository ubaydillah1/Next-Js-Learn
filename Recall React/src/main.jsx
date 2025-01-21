import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
import UseRef from "./pages/useRef";
import DarkModeProvider from "./contexts/DarkMode";
import UseContext from "./pages/useContext";
import UseReducer from "./pages/useReducer";
import UseCallback from "./pages/useCallback";
import CustomHooks from "./pages/customHooks";
import UseMemo from "./pages/UseMemo";
import UseLayoutEffect from "./pages/useLayoutEffect";
import UseTransition from "./pages/useTransition";
import UseDefferedValue from "./pages/useDeferredValue";
import UseImperativeHandle from "./pages/useImperativeHandle";
import UseId from "./pages/useId";

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
          <Route path="/customhooks" element={<CustomHooks />} />
          <Route path="/uselayouteffect" element={<UseLayoutEffect />} />
          <Route path="/usetransition" element={<UseTransition />} />
          <Route path="/usedeferredvalue" element={<UseDefferedValue />} />
          <Route path="/useid" element={<UseId />} />
          <Route
            path="/useimperativehandle"
            element={<UseImperativeHandle />}
          />
        </Routes>
      </Router>
    </DarkModeProvider>
  </StrictMode>
);
