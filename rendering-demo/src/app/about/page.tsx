import React from "react";
import { cookies } from "next/headers";

const AboutPage = async () => {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);

  return <div>AboutPage {new Date().toLocaleTimeString()}</div>;
};

export default AboutPage;
