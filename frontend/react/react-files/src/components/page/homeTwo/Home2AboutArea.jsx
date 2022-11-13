import React from "react";
import { Link } from "react-router-dom";


function Home2AboutArea() {
  return (
    <>
     <div className="about-area about-design-1 about-curve">
          <div className="about-right-curve">
            <img src={process.env.PUBLIC_URL + "/images/bg/about-right-curve.svg"} alt="hometwoIMG" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                <div className="about-wrap">
                  <div className="about-box text-center">
                    <div className="about-icon">
                      <img src={process.env.PUBLIC_URL + "/images/icons/about-1.svg"} alt="hometwoIMG" />
                    </div>
                    <div className="about-content">
                      <h3>
                        <Link to={`${process.env.PUBLIC_URL}/documents`}>
                          Knowledge Base
                        </Link>
                      </h3>
                      <p>
                        It is a long established fact that looking at on this
                        hav’n its layout.
                      </p>
                    </div>
                  </div>
                  <div className="about-box text-center">
                    <div className="about-icon">
                      <img src={process.env.PUBLIC_URL + "/images/icons/about-2.svg"} alt="hometwoIMG" />
                    </div>
                    <div className="about-content">
                      <h3>
                        <Link to={`${process.env.PUBLIC_URL}/documents`}>
                          Working with DOC
                        </Link>
                      </h3>
                      <p>
                        It is a long established fact that looking at on this
                        hav’n its layout.
                      </p>
                    </div>
                  </div>
                  <div className="about-box text-center">
                    <div className="about-icon">
                      <img src={process.env.PUBLIC_URL + "/images/icons/about-3.svg"} alt="hometwoIMG" />
                    </div>
                    <div className="about-content">
                      <h3>
                        <Link to={`${process.env.PUBLIC_URL}/documents`}>
                          Documents
                        </Link>
                      </h3>
                      <p>
                        It is a long established fact that looking at on this
                        hav’n its layout.
                      </p>
                    </div>
                  </div>
                  <Link to={"#"}>
                    <i className="down-icon bi bi-arrow-down" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> 
    </>
  )
}

export default Home2AboutArea