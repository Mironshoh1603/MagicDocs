import React from "react";
import Header from "../common/Header";
import HomePage from "../page/home/HomePage";
import HomeOneFooter from "../common/HomeOneFooter";

function MainLayout() {
  return (
    <>
      <Header />
      <HomePage />
      <HomeOneFooter />
    </>
  );
}

export default MainLayout;
