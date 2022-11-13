import React from "react";
import BlogSidebarContentArea from "./BlogSidebarContentArea";
import SidebarCatagory from "./SidebarCatagory";

function BlogSidebarWrap() {
  return (
    <>
      <div className="blog-sidebar-area mt-100 pb-100">
        <div className="container">
          <div className="row">
            <BlogSidebarContentArea />
            <SidebarCatagory />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSidebarWrap;
