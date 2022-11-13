import React from "react";
import Breadcrumb from "../../../common/Breadcrumb";
import BlogSidebarWrap from "./BlogSidebarWrap";

function BlogSidebarPage() {
  return (
    <>
      <Breadcrumb pageName="Blog Sidebar" pageTitle="Blog Sidebar" />
      <BlogSidebarWrap />
    </>
  );
}

export default BlogSidebarPage;
