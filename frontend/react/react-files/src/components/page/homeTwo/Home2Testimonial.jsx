import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <i className="ts ts-2 bx bxs-right-arrow-alt" onClick={onClick}></i>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <i className="ts ts-1 bx bxs-left-arrow-alt" onClick={onClick}></i>
  );
}
function Home2Testimonial() {
  const [nav, setNav] = useState({
    nav1: null,
    nav2: null,
  });
  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setNav({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);
  const { nav1, nav2 } = nav;
  const settingCarousel = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
  };

  const settingsSliderNav = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    speed: 1500,
    focusOnSelect: true,
  };

  return (
    <>
      <div className="testimonial-area mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center mb-50">
                <h1>Testimonial</h1>
                <p>
                  Fusce non volutpat arcu. Quisque ut est sapien. Curabitur eu
                  nulla
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 testimonial-relative">
              <Slider slidesToShow={1}
                slidesToScroll={1}
                {...settingCarousel}
                asNavFor={nav2}
                ref={(slider) => (slider1.current = slider)} className="testimonial-content-wrap">
                <div className="testimonial-content-box">
                  <ul>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                  </ul>
                  <p>
                    We are very proud of the service we provide for our
                    customers. In fact, we see a client relationship drastically
                    more personal than that of most agencies in our field. Our
                    client relationships do not start at 9AM and end at 6PM—they
                    stay with us to continually receive the quality service they
                    deserve.
                  </p>
                  <h3>
                    <Link to={"#"}>Jhon Dou</Link>
                  </h3>
                  <i className="qt bx bxs-quote-right" />
                </div>
                <div className="testimonial-content-box">
                  <ul>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                  </ul>
                  <p>
                    We are very proud of the service we provide for our
                    customers. In fact, we see a client relationship drastically
                    more personal than that of most agencies in our field. Our
                    client relationships do not start at 9AM and end at 6PM—they
                    stay with us to continually receive the quality service they
                    deserve.
                  </p>
                  <h3>
                    <Link to={"#"}>Cameron Mails</Link>
                  </h3>
                  <i className="qt bx bxs-quote-right" />
                </div>
                <div className="testimonial-content-box">
                  <ul>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                  </ul>
                  <p>
                    We are very proud of the service we provide for our
                    customers. In fact, we see a client relationship drastically
                    more personal than that of most agencies in our field. Our
                    client relationships do not start at 9AM and end at 6PM—they
                    stay with us to continually receive the quality service they
                    deserve.
                  </p>
                  <h3>
                    <Link to={"#"}>Alixi Williamson</Link>
                  </h3>
                  <i className="qt bx bxs-quote-right" />
                </div>
                <div className="testimonial-content-box">
                  <ul>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                  </ul>
                  <p>
                    We are very proud of the service we provide for our
                    customers. In fact, we see a client relationship drastically
                    more personal than that of most agencies in our field. Our
                    client relationships do not start at 9AM and end at 6PM—they
                    stay with us to continually receive the quality service they
                    deserve.
                  </p>
                  <h3>
                    <Link to={"#"}>Cameron Duo</Link>
                  </h3>
                  <i className="qt bx bxs-quote-right" />
                </div>
                <div className="testimonial-content-box">
                  <ul>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bi bi-star-fill" />
                      </Link>
                    </li>
                  </ul>
                  <p>
                    We are very proud of the service we provide for our
                    customers. In fact, we see a client relationship drastically
                    more personal than that of most agencies in our field. Our
                    client relationships do not start at 9AM and end at 6PM—they
                    stay with us to continually receive the quality service they
                    deserve.
                  </p>
                  <h3>
                    <Link to={"#"}>Cameron Williamson</Link>
                  </h3>
                  <i className="qt bx bxs-quote-right" />
                </div>
              </Slider>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12 mobt-50">
              <Slider
                {...settingsSliderNav}
                asNavFor={nav1}
                ref={(slider) => (slider2.current = slider)}
                slidesToScroll={1}
                slidesToShow={4}
                nav={false}
                tabIndex={2}
                className="testimonial-image"
              >
                <div className="testimonial-image-box">
                  <img src={process.env.PUBLIC_URL + "/images/testimonial/testimonial-4.png"} alt="testimonialIMg" />
                </div>
                <div className="testimonial-image-box">
                  <img src={process.env.PUBLIC_URL + "/images/testimonial/testimonial-2.png"} alt="testimonialIMg" />
                </div>
                <div className="testimonial-image-box">
                  <img src={process.env.PUBLIC_URL + "/images/testimonial/testimonial-3.png"} alt="testimonialIMg" />
                </div>
                <div className="testimonial-image-box">
                  <img src={process.env.PUBLIC_URL + "/images/testimonial/testimonial-3.png"} alt="testimonialIMg" />
                </div>
                <div className="testimonial-image-box">
                  <img src={process.env.PUBLIC_URL + "/images/testimonial/testimonial-1.png"} alt="testimonialIMg" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <img
          className="shape testimonial-sp"
          src={process.env.PUBLIC_URL + "/images/testimonial/testimonial-shape.png"}
          alt="testimonialIMg"
        />
      </div>
    </>
  );
}

export default Home2Testimonial;
