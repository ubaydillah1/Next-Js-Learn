"use client";

import { useState } from "react";

const ClientPage = () => {
  const [user, setUser] = useState("");
  function handleUser() {
    setUser("true");
  }
  return (
    <div>
      {user} <button onClick={handleUser}>Change to User</button>
    </div>
  );
};

export default ClientPage;
//