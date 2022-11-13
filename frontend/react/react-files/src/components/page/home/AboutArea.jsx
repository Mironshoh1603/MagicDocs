import React from "react";
import Slider from "react-slick";

function AboutArea() {
  const aboutCarousel = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    speed: 2000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="about-area about-area-design-2 mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
              <Slider
                {...aboutCarousel}
                className="about-wrap about-wrap-design-2 owl-carousel mb-0"
              >
                <div className="about-box text-center">
                  <div className="about-icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/about-home-2-1.svg"
                      }
                      alt="aboutIcon"
                    />
                  </div>
                  <div className="about-content">
                    <h3>Knowledge Base</h3>
                    <p>
                      It is a long established fact that looking at on this
                      hav’n its layout.
                    </p>
                  </div>
                </div>
                <div className="about-box text-center">
                  <div className="about-icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/about-home-2-2.svg"
                      }
                      alt="aboutIcon"
                    />
                  </div>
                  <div className="about-content">
                    <h3>Working with DOC</h3>
                    <p>
                      It is a long established fact that looking at on this
                      hav’n its layout.
                    </p>
                  </div>
                </div>
                <div className="about-box text-center">
                  <div className="about-icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/about-home-2-3.svg"
                      }
                      alt="aboutIcon"
                    />
                  </div>
                  <div className="about-content">
                    <h3>Documents</h3>
                    <p>
                      It is a long established fact that looking at on this
                      hav’n its layout.
                    </p>
                  </div>
                </div>
                <div className="about-box text-center">
                  <div className="about-icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/about-home-2-1.svg"
                      }
                      alt="aboutIcon"
                    />
                  </div>
                  <div className="about-content">
                    <h3>Community Forums</h3>
                    <p>
                      It is a long established fact that looking at on this
                      hav’n its layout.
                    </p>
                  </div>
                </div>
                <div className="about-box text-center">
                  <div className="about-icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/about-home-2-3.svg"
                      }
                      alt="aboutIcon"
                    />
                  </div>
                  <div className="about-content">
                    <h3>Documents</h3>
                    <p>
                      It is a long established fact that looking at on this
                      hav’n its layout.
                    </p>
                  </div>
                </div>
                <div className="about-box text-center">
                  <div className="about-icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/about-home-2-3.svg"
                      }
                      alt="aboutIcon"
                    />
                  </div>
                  <div className="about-content">
                    <h3>Documents</h3>
                    <p>
                      It is a long established fact that looking at on this
                      hav’n its layout.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutArea;
