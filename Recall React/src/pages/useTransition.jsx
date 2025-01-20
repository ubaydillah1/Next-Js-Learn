import { useState, useTransition } from "react";

const UseTransition = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 500;

  function handleChange(e) {
    setInput(e.target.value);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }

      setList(l);
    });
  }

  return (
    <div style={{ margin: "100px" }}>
      <input type="text" value={input} onChange={(e) => handleChange(e)} />

      {isPending
        ? "Loading...."
        : list.map((list, index) => {
            return <div key={index}>{list}</div>;
          })}
    </div>
  );
};

export default UseTransition;
