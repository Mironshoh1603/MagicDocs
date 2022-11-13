import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import ErrorWrapper from "./ErrorWrapper";

function ErrorPage() {
  return (
    <>
    <Breadcrumb pageName="404" pageTitle="404" />
      <ErrorWrapper />
    </>
  );
}

export default ErrorPage;
