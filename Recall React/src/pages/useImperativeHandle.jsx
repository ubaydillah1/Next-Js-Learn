import { forwardRef, useImperativeHandle, useRef } from "react";

const UseImperativeHandle = () => {
  const modalRef = useRef();
  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <button
        onClick={() => modalRef.current.focusSubmitButton()}
        style={{ width: "200px" }}
      >
        Focus Submit
      </button>
      <button
        onClick={() => modalRef.current.focusCloseRefButton()}
        style={{ width: "200px" }}
      >
        Focus Close
      </button>
      <Modal ref={modalRef} />
    </div>
  );
};

const Modal = forwardRef((_, ref) => {
  const submitRef = useRef();
  const closeRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focusSubmitButton: () => submitRef.current.focus(),
      focusCloseRefButton: () => closeRef.current.focus(),
    };
  });

  return (
    <>
      <div>
        <input type="text" placeholder="Submit Text" ref={submitRef} />
      </div>
      <div>
        <input type="text" placeholder="Close Text" ref={closeRef} />
      </div>
    </>
  );
});

Modal.displayName = "Modal";

export default UseImperativeHandle;
