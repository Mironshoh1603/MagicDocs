import React from "react";
import Select from "react-select";

function Home2HeroArea() {
  const optionsForPerson = [
    { value: "1", label: "All" },
    { value: "2", label: "All1" },
    { value: "3", label: "All2" },
  ];
  return (
    <>
      <div className="herobanner-area">
        <div className="social-left-area social-style-2">
          <div className="social-text">
            <p>FollowUs</p>
          </div>
          <ul className="social-icon">
            <li>
              <a rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank">
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank">
                <i className="bx bxl-twitter" />
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank">
                <i className="bx bxl-instagram" />
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank">
                <i className="bx bxl-pinterest-alt" />
              </a>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="hero-content text-center">
                <h1>Search Anything That Your Need</h1>
                <p>Search here to get answers to your Questions</p>
                <div className="hero-form">
                  <form action="index.html" className="form-content">
                    <div className="form-input-area">
                      <input type="text" placeholder="Search Here....." />
                      <div className="hero-select-box">
                        <Select
                          className="hero-select"
                          options={optionsForPerson}
                        >
                        </Select>
                      </div>
                    </div>
                  </form>
                  <button>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="shape hero-dot-shape" src={process.env.PUBLIC_URL + "/images/hero-dot-shape.png"} alt="IMG" />
        <img className="shape hero-top-left" src={process.env.PUBLIC_URL + "/images/hero-shape-top-left.png"} alt="IMG" />
        <img
          className="shape hero-top-left-2"
          src={process.env.PUBLIC_URL + "/images/hero-shape-top-left-2.png"}
          alt="IMG"
        />
        <img
          className="shape hero-top-right"
          src={process.env.PUBLIC_URL + "/images/hero-shape-top-right.png"}
          alt="IMG"
        />
        <img
          className="shape hero-botto-left"
          src={process.env.PUBLIC_URL + "/images/hero-shape-bottom-left.png"}
          alt="IMG"
        />
        <img
          className="shape hero-botto-right"
          src={process.env.PUBLIC_URL + "/images/hero-shape-bottom-right.png"}
          alt="IMG"
        />
      </div>
    </>
  );
}

export default Home2HeroArea;
