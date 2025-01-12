import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
    console.log("PREV");
  }, [name]);

  console.log("RENDER");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <p>
        My name is {name} and it used to be {prevName.current}
      </p>
    </div>
  );
};

export default UseRef;
