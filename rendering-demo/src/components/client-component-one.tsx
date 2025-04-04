/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import ClientComponentTwo from "./client-component-two";

const ClientComponentOne = () => {
  const [name, setName] = useState("Batman");
  return (
    <div>
      ClientComponentOne <p>{name}</p>
      <ClientComponentTwo />
    </div>
  );
};

export default ClientComponentOne;
