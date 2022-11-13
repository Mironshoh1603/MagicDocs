import React from "react";

import Header from "./common/Header";
import InnerPageFooter from "./common/InnerPageFooter";

function InnerPageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <InnerPageFooter />
    </>
  );
}

export default InnerPageLayout;
