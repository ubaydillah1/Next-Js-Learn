import "server-only";

export const serverSideFunction = () => {
  console.log("Server side function");
  return "server result";
};
