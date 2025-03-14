"use client";
const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      {error.message} <button onClick={reset}>Try again</button>
    </div>
  );
};

export default Error;
