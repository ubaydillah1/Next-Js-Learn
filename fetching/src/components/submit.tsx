"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
      disabled={pending}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
