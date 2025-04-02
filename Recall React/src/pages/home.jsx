import { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  const themeColor = {
    black: "#000",
    white: "#ddd",
  };

  const [theme, setTheme] = useState(themeColor);

  const incrementNumber = useCallback(
    (n) => {
      setTimeout(() => {
        console.log("Terpanggil");
        setResult(n * number);
      }, 2000);
    },
    [number]
  );

  useEffect(() => {
    incrementNumber(number);
  }, [number]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.white === "#ddd"
        ? { black: "#ddd", white: "#000" }
        : { black: "#000", white: "#ddd" }
    );
  };

  return (
    <div
      style={{ background: theme.black, color: theme.white, padding: "20px" }}
    >
      <input
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <div>{result}</div>

      <button onClick={toggleTheme}>Change BG</button>
    </div>
  );
};

export default Home;
