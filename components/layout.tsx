import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
