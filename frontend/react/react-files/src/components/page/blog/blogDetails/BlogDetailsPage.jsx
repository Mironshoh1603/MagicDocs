import React from "react";
import Breadcrumb from "../../../common/Breadcrumb";
import BlogDetailsWrapArea from "./BlogDetailsWrapArea";

function BlogDetailsPage() {
  return (
    <>
      <Breadcrumb pageName="Blog Details" pageTitle="Blog Details" />
      <BlogDetailsWrapArea />
    </>
  );
}

export default BlogDetailsPage;
