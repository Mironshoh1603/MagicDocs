import React from "react";
import { Link } from "react-router-dom";

function DocumentBox2(props) {
  return (
    <>
      <div className="documentation-box">
        <div className="documentation-icon">
          <i className={props.icon} />
          <h3>
            <Link to={`${process.env.PUBLIC_URL}/document-details`}>
              {props.title}
            </Link>
          </h3>
        </div>
        <div className="documentation-content">
          <p>
            Professionally cultivate one-to-one find customer service with
            robust ideas.
          </p>
          <ul>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/documents`}>
                <i className="bi bi-file-earmark-text" />
                According Widget
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/documents`}>
                <i className="bi bi-file-earmark-text" />
                Notice/ Message Widget
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/documents`}>
                <i className="bi bi-file-earmark-text" />
                Tab Widget
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/documents`}>
                <i className="bi bi-file-earmark-text" />
                According Widget
              </Link>
            </li>
          </ul>
        </div>
        <div className="btn-wrap documentation-btn-wrap">
          <Link
            className="doc-card-btn"
            to={`${process.env.PUBLIC_URL}/document`}
          >
            View ALL
            <i className="bx bxs-chevron-right" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default DocumentBox2;
