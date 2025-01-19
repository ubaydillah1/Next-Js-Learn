import { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const button = useRef();
  const text = useRef();

  useLayoutEffect(() => {
    if (button.current == null || text.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    text.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <div style={{ margin: "10px" }}>
      <button onClick={() => setShow(!show)} ref={button}>
        Click Here
      </button>
      {show && (
        <p ref={text} style={{ position: "absolute" }}>
          Pop up
        </p>
      )}
    </div>
  );
};

export default UseLayoutEffect;
