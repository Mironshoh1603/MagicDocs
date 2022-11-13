import React from "react";
import { Link } from "react-router-dom";

function Home2SupportArea() {
  return (
    <>
      <div className="support-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title mb-70 section-title-style-2 text-center">
                <h1>Support Fourm</h1>
                <p>
                  Fusce non volutpat arcu. Quisque ut est sapien. Curabitur eu
                  nulla
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="support-box">
                <div className="support-icon-wrap">
                  <img src={process.env.PUBLIC_URL + "/images/icons/support-icon-1.svg"} alt="IMG" />
                </div>
                <div className="support-content text-center">
                  <h2>
                    <Link to={`${process.env.PUBLIC_URL}/forum-q`}>
                      Event Theme
                    </Link>
                  </h2>
                  <Link
                    to={`${process.env.PUBLIC_URL}/forum-q`}
                    className="read-btn"
                  >
                    Read Article
                  </Link>
                </div>
                <span>8 Article</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="support-box">
                <div className="support-icon-wrap">
                  <img src={process.env.PUBLIC_URL + "/images/icons/support-icon-1.svg"} alt="IMG" />
                </div>
                <div className="support-content text-center">
                  <h2>
                    <Link to={`${process.env.PUBLIC_URL}/forum-q`}>
                      Education Theme
                    </Link>
                  </h2>
                  <Link
                    to={`${process.env.PUBLIC_URL}/forum-q`}
                    className="read-btn"
                  >
                    Read Article
                  </Link>
                </div>
                <span>6 Article</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="support-box">
                <div className="support-icon-wrap">
                  <img src={process.env.PUBLIC_URL + "/images/icons/support-icon-2.svg"} alt="IMG" />
                </div>
                <div className="support-content text-center">
                  <h2>
                    <Link to={`${process.env.PUBLIC_URL}/forum-q`}>
                      WordPress Theme
                    </Link>
                  </h2>
                  <Link
                    to={`${process.env.PUBLIC_URL}/forum-q`}
                    className="read-btn"
                  >
                    Read Article
                  </Link>
                </div>
                <span>5 Article</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="support-box">
                <div className="support-icon-wrap">
                  <img src={process.env.PUBLIC_URL + "/images/icons/support-icon-1.svg"} alt="IMG" />
                </div>
                <div className="support-content text-center">
                  <h2>
                    <Link to={`${process.env.PUBLIC_URL}/forum-q`}>
                      Kidlife Theme
                    </Link>
                  </h2>
                  <Link
                    to={`${process.env.PUBLIC_URL}/forum-q`}
                    className="read-btn"
                  >
                    Read Article
                  </Link>
                </div>
                <span>3 Article</span>
              </div>
            </div>
          </div>
          <div className="row mt-70">
            <div className="btn-wrap btn-wrap-center">
              <Link className="common-btn btn-style-3" to={`${process.env.PUBLIC_URL}/forum-q`}>
                View All Article
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2SupportArea;
