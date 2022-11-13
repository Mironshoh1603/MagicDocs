import React from 'react'
import DocumentContentArea from "./DocumentContentArea";
import DocumentLeftMenuArea from "./DocumentLeftMenuArea";
import DocumentRightArea from "./DocumentRightArea";


function DocumentDetailsWrapper() {
  return (
    <>
    <div className="document-section pt-100 pb-100">
      <div className="container-fluid">
        <div className="row justify-content-center gy-3">
          <DocumentLeftMenuArea />
          <DocumentContentArea />
          <DocumentRightArea />
        </div>
      </div>
    </div>
  </>
  )
}

export default DocumentDetailsWrapper
