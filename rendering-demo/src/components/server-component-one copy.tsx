import React from "react";
import ServerComponenTwo from "./server-component-two";
import ClientComponentOne from "./client-component-one";

const ServerComponentOne = () => {
  return (
    <div>
      ServerComponentOne
      <div>
        <ServerComponenTwo />
        <ClientComponentOne />
      </div>
    </div>
  );
};

export default ServerComponentOne;
