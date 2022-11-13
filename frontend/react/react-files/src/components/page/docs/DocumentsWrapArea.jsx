import React from "react";
import DocumentationBox from "../../common/DocumentationBox";
import { Link } from "react-router-dom";

function DocumentsWrapArea() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="documents-area pt-100 mb-100">
        <div className="container">
          <div className="row g-4 justify-content-center">
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
          <div className="row mt-40">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="pagination-wrap text-center">
                <ul>
                  <li>
                    <Link onClick={scrollTop} to={"#"}>
                      <i className="bi bi-arrow-left" />
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollTop} to={"#"}>
                      01
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollTop} to={"#"}>
                      02
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollTop} to={"#"}>
                      03
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollTop} to={"#"}>
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DocumentsWrapArea;
