/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const handleDark = () => setIsDark(!isDark);

  return (
    <DarkModeContext.Provider value={{ isDark, handleDark }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
