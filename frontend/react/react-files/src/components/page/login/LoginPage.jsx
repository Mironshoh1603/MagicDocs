import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import LoginWrapper from "./LoginWrapper";

function LoginPage() {
  return (
    <>
      <Breadcrumb pageName="Login" pageTitle=" Login" />
      <LoginWrapper />
    </>
  );
}

export default LoginPage;
