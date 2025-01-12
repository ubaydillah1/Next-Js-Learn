import { useState, useMemo } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState("0");

  const [dark, setDark] = useState(false);

  const themeStyles = {
    background: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const slowFunction = (number) => {
    for (let i = 0; i < 140000000; i++) {}
    return number * 2;
  };

  const doubleNumber = useMemo(() => {
    return slowFunction(Number(number));
  }, [number]);

  return (
    <div>
      <h1>Use Memo</h1>

      <input
        type="text"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />

      <button onClick={() => setNumber(Number(number) + 1)}> + </button>
      <button onClick={() => setNumber(Number(number) - 1)}> - </button>
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>

      <p style={themeStyles}>{doubleNumber}</p>
    </div>
  );
};

export default UseMemo;
