import React, { ReactNode } from "react";

const Layout = ({
  modal,
  children,
}: {
  modal: ReactNode;
  children: ReactNode;
}) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default Layout;
