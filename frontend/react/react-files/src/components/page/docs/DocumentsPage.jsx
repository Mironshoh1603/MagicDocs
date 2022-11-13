import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import DocumentsWrapArea from "./DocumentsWrapArea";

function DocumentsPage() {
  return (
    <>
      <Breadcrumb pageName="Documents" pageTitle="Documents" />
      <DocumentsWrapArea />
    </>
  );
}

export default DocumentsPage;
