/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";

const ClientComponentTwo = () => {
  const [name, setName] = useState("Batman");
  return (
    <div>
      ClientComponentTwo <p>{name}</p>
    </div>
  );
};

export default ClientComponentTwo;
