import { useId } from "react";

const UseId = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Email : </label>
      <input type="email" id={id} />
    </div>
  );
};

export default UseId;
