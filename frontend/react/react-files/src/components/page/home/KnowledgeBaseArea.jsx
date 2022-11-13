import React from "react";
import DocumentationBox from "../../common/DocumentationBox";

function KnowledgeBaseArea() {
  return (
    <>
      <div className="knowledge-area mt-100" id="knw">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center mb-50">
                <h1>Knowledge Base</h1>
                <p>
                  Fusce non volutpat arcu. Quisque ut est sapien. Curabitur eu
                  nulla
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <DocumentationBox
                icon="/images/icons/extension.svg"
                title="Admin Panel"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <DocumentationBox
                icon="/images/icons/admin.svg"
                title="Administration"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <DocumentationBox
                icon="/images/icons/adminstration.svg"
                title="Online Documentation"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <DocumentationBox
                icon="/images/icons/document.svg"
                title="Code Syntax Highlight"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <DocumentationBox
                icon="/images/icons/document.svg"
                title="Getting Started"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <DocumentationBox
                icon="/images/icons/gettings.svg"
                title="Extensions"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KnowledgeBaseArea;
