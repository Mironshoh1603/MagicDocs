import React from 'react'
import BlogDetailsCatagoryArea from "./BlogDetailsCatagoryArea";
import BlogDetailsContentArea from "./BlogDetailsContentArea";

function BlogDetailsWrapArea() {
  return (
    <>
    <div className="blog-details-area mt-100 pb-100">
      <div className="container">
        <div className="row">
          <BlogDetailsContentArea />
          <BlogDetailsCatagoryArea />
        </div>
      </div>
    </div>
  </>
  )
}

export default BlogDetailsWrapArea