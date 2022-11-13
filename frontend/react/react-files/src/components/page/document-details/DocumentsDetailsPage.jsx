import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import DocumentDetailsWrapper from "./DocumentDetailsWrapper";

function DocumentsDetailsPage() {
  return (
    <>
     <Breadcrumb pageName="Document Details" pageTitle="Document Details" />
      <DocumentDetailsWrapper />
    </>
  );
}

export default DocumentsDetailsPage;
