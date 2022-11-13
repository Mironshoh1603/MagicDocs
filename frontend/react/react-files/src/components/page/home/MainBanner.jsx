import React from "react";
import Select from "react-select";

function MainBanner() {
  const optionsForSearch = [
    { value: "1", label: "All" },
    { value: "2", label: "All1" },
    { value: "3", label: "All2" },
  ];

  return (
    <>
      <div className="herobanner-area herobanner-design-2">
        <div className="social-left-area">
          <div className="social-text">
            <p>FollowUs</p>
          </div>
          <ul className="social-icon">
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank"
              >
                <i className="bx bxl-twitter" />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <i className="bx bxl-instagram" />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.pinterest.com/"
                target="_blank"
              >
                <i className="bx bxl-pinterest-alt" />
              </a>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="hero-content text-center">
                <h1>Search Anything That Your Need</h1>
                <p>Search here to get answers to your Questions</p>
                <div className="hero-form">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="form-content"
                  >
                    <div className="form-input-area">
                      <input type="text" placeholder="Search Here....." />
                      <div className="select-box-homeOne">
                        <Select options={optionsForSearch}></Select>
                      </div>
                    </div>
                  </form>
                  <button>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="shape hero-img-2" src={process.env.PUBLIC_URL + "/images/hero-img-2.png"} alt="BannerIMG" />
        <img
          className="shape hero-dot-shape-2"
          src={process.env.PUBLIC_URL + "/images/hero-dot-shape-2.png"}
          alt="BannerIMG"
        />
        <img
          className="shape hero-top-left-home-2"
          src={process.env.PUBLIC_URL + "/images/hero-shape-top-left-home-2.png"}
          alt="BannerIMG"
        />
        <img
          className="shape hero-dot-shape-2"
          src={process.env.PUBLIC_URL + "/images/hero-dot-shape-2.png"}
          alt="BannerIMG"
        />
      </div>
    </>
  );
}

export default MainBanner;
