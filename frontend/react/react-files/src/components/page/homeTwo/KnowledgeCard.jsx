import React from "react";
import { Link } from "react-router-dom";

function KnowledgeCard(props) {
  return (
    <>
      <div className="knowledge-box">
        <div className="knowledge-icon">
          <i className={props.icon} />
        </div>
        <div className="knowledge-content">
          <h3>
            <Link to={`${process.env.PUBLIC_URL}/documents`}>{props.title}</Link>
          </h3>
          <ul>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/documents`}>
                <i className="bi bi-file-earmark-text" />
                Follow up Emails
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/documents`}>
                <i className="bi bi-file-earmark-text" />
                Standard Post Format
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/documents`}>
                <i className="bi bi-file-earmark-text" />
                local Server Setup
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/documents`}>
                <i className="bi bi-file-earmark-text" />
                Plugin Installataion
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/documents`}>
                <i className="bi bi-file-earmark-text" />
                Subscription Model Setup
              </Link>
            </li>
          </ul>
        </div>
        <div className="btn-wrap knowledge-btn-wrap">
          <Link
            className="common-btn btn-style-2"
            to={`${process.env.PUBLIC_URL}/documents`}
          >
            View More
          </Link>
          <i className="bi bi-arrow-right" />
        </div>
      </div>
    </>
  );
}

export default KnowledgeCard;
