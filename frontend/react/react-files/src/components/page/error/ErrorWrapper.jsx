import React from "react";
import { Link } from "react-router-dom";

function ErrorWrapper() {
  return (
    <>
      <div className="error-area mt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="error-wrap text-center">
                <div className="error-img">
                  <img src={process.env.PUBLIC_URL + "/images/404.png"} alt="" />
                </div>
                <div className="error-content mt-50">
                  <h1>there’s nothing here</h1>
                  <p>
                    The page you are looking for may have been renamed or does
                    nost exist in this server you will be redirected to homepage
                    shortly
                  </p>
                  <div className="back-btn-wrap">
                    <Link
                      className="back-btn"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                      to={`${process.env.PUBLIC_URL}/`}
                    >
                      <i className="bi bi-reply-fill" />
                      Back Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorWrapper;
