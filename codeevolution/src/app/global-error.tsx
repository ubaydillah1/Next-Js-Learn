"use client";

const GlobalError = () => {
  return (
    <html>
      <body className="text-center text-[50px] overflow-hidden w-screen h-screen font-bold flex justify-center items-center">
        <p>Something went wrong</p>
        <button onClick={() => location.reload()}>refresh</button>
      </body>
    </html>
  );
};

export default GlobalError;
