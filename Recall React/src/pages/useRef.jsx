// import { useEffect, useRef, useState } from "react";

// const UseRef = () => {
//   const [name, setName] = useState("");
//   const prevName = useRef("");

//   useEffect(() => {
//     prevName.current = name;
//     console.log("PREV");
//   }, [name]);

//   console.log("RENDER");
//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setName(e.target.value)}
//         value={name}
//       />

//       <p>
//         My name is {name} and it used to be {prevName.current}
//       </p>
//     </div>
//   );
// };

// export default UseRef;

/* eslint-disable react/prop-types */
import { forwardRef, useRef } from "react";

const FancyButton = forwardRef((props, ref) => {
  return (
    <button ref={ref} className="fancy-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
});

FancyButton.displayName = "Fancy-Button";

const NormalButton = (props) => {
  return (
    <button className="normal-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

const UseRef = () => {
  const fancyButtonRef = useRef(null);

  const handleFancyClick = () => {
    console.log("Fancy button diklik!");
    console.log("DOM node:", fancyButtonRef.current);
    fancyButtonRef.current.style.backgroundColor = "lightblue";
  };

  const handleNormalClick = () => {
    console.log("Normal button diklik!");
  };

  return (
    <div>
      <h2>Contoh Forward Ref</h2>

      <FancyButton ref={fancyButtonRef} onClick={handleFancyClick}>
        Button dengan Ref
      </FancyButton>

      <NormalButton onClick={handleNormalClick}>Button Biasa</NormalButton>
    </div>
  );
};

export default UseRef;
