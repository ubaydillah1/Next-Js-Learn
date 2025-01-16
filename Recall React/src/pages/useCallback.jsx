/* eslint-disable react/prop-types */
import { useEffect, useState, useCallback } from "react";

const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(true);

  const getNumbers = useCallback(
    (incrementor = 0) => {
      return [
        number + incrementor,
        number + incrementor * 2,
        number + incrementor * 3,
      ];
    },
    [number]
  );

  const style = {
    margin: "20px",
    width: "100px",
    height: "100px",
    border: "2px solid black",
    backgroundColor: isDark ? "black" : "white",
    color: isDark ? "white" : "black",
  };

  const changeTheme = (isDark) => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <h1>Use Callback</h1>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <List getNumbers={getNumbers} />

      <div style={style} onClick={() => changeTheme(isDark)}></div>
    </div>
  );
};

const List = ({ getNumbers }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getNumbers(2));
    console.log("Update succesfully");
  }, [getNumbers]);

  return items.map((number, i) => (
    <div key={i}>
      <div>{number}</div>
    </div>
  ));
};

export default UseCallback;
