import { useState, useDeferredValue, useMemo } from "react";

const UseDeferredValue = () => {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const LIST_SIZE = 500;
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(deferredInput);
    }

    return l;
  }, [deferredInput]);

  return (
    <div>
      <div style={{ margin: "100px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {list.map((list, index) => {
          return <div key={index}>{list}</div>;
        })}
      </div>
    </div>
  );
};

export default UseDeferredValue;
