/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkMode";

const UseContext = () => {
  const { isDark, handleDark } = useContext(DarkModeContext);

  return (
    <main
      style={{
        background: "black",
        color: "white",
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh",
      }}
    >
      <h1>Use Context</h1>

      <p>{isDark ? "Dark Mode is On" : "Dark Mode is Off"}</p>
      <button onClick={handleDark}>Change Is Dark</button>
    </main>
  );
};

export default UseContext;
