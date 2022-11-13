import React from 'react'
import { Link } from "react-router-dom";


function DocumentRightArea() {
  return (
    <>
        <div className="col-lg-3 order-lg-3 order-2">
          <div className="document-right-area">
            <h4>DocBase Documentations</h4>
            <ul className="document-right-list">
              <li className="document-list-item">
                <Link to={"#"}>Introduction</Link>{" "}
                <i className="bi bi-arrow-right" />
                <ul className="sub-list mb-0">
                  <li>
                    <a href="#featuers">01. Features</a>
                  </li>
                  <li>
                    <a href="#htmlstructure">02. HTML Structure</a>
                  </li>
                  <li>
                    <a href="#csstructure">03. CSS Files and Structure</a>
                  </li>
                  <li>
                    <a href="#jstructure">04. JavaScript</a>
                  </li>
                  <li>
                    <a href="#source-credits">05. Sources and Creadits</a>
                    <ul className="child-sub-list">
                      <li>
                        <a href="#source-img">01. Image</a>
                      </li>
                      <li>
                        <a href="#source-css">02. CSS Files</a>
                      </li>
                      <li>
                        <a href="#source-js">03. JavaScript Files</a>
                      </li>
                      <li>
                        <a href="#source-fonts">04. Fonts</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#imagehotspot">06. Image Hotspots Widget</a>
                  </li>
                  <li>
                    <a href="#videowidget">07. Video Widget</a>
                  </li>
                  <li>
                    <a href="#faqs">08. FAQs</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </>
  )
}

export default DocumentRightArea