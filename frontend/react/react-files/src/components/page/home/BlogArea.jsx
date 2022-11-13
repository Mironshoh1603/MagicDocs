import React from "react";
import { Link } from "react-router-dom";

function BlogArea() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  return (
    <>
      <div className="blog-area mt-100 mb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center mb-50">
                <h1>Our Blog</h1>
                <p>
                  Fusce non volutpat arcu. Quisque ut est sapien. Curabitur eu
                  nulla
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-8 col-md-10 col-sm-12 col-12">
              <div className="blog-box blog-box-design-2">
                <div className="blog-img">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/blog-details`}
                  >
                    <img className="w-100" src={process.env.PUBLIC_URL + "/images/blog/blog-1.png"} alt="BlogIMG" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="meta-wrap">
                    <div className="meta-item">
                      <p>
                        <Link to={"#"}>Photography</Link>
                      </p>
                    </div>
                    <div className="meta-item">
                      <p>
                        <Link to={"#"}>
                          <i className="bi bi-stopwatch" />
                          4th Jan 2022
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="blog-title">
                    <h3>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                      >
                        Should You Invest In Internal Knowledge Base For Your
                        Company?
                      </Link>
                    </h3>
                    <p>
                      Aliquam finibus augue ac diam euismod, nec con sectetur
                      erat dignissim. Pellentesque.
                    </p>
                  </div>
                  <div className="btn-wrap">
                    <Link
                      className="common-btn btn-style-5"
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                    >
                      Read more
                    </Link>
                    <i className="bx bxs-right-arrow-alt" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 col-md-10 col-sm-12 col-12">
              <div className="row g-4">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="blog-box blog-box-design-2 blog-box-style-2 d-flex align-items-center border-white">
                    <div className="blog-img">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                      >
                        <img className="w-100" src={process.env.PUBLIC_URL + "/images/blog/blog-2.png"} alt="BlogIMG" />
                      </Link>
                    </div>
                    <div className="blog-content border-none">
                      <div className="meta-wrap">
                        <div className="meta-item">
                          <p>
                            <Link to={"#"}>Woocommerce</Link>
                          </p>
                        </div>
                        <div className="meta-item">
                          <p>
                            <Link to={"#"}>
                              <i className="bi bi-stopwatch" />
                              4th Jan 2022
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="blog-title">
                        <h3>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}
                          >
                            Microsoft Q&amp;A graduates to General Availability!
                          </Link>
                        </h3>
                        <p>
                          Aliquam finibus augue ac diam euismod, nec con
                          sectetur erat dignissim. Pellentesque.
                        </p>
                      </div>
                      <div className="btn-wrap ">
                        <Link
                          className="common-btn btn-style-5"
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details`}
                        >
                          Read more
                        </Link>
                        <i className="bx bxs-right-arrow-alt" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="blog-box blog-box-design-2 blog-box-style-2 d-flex align-items-center border-white">
                    <div className="blog-img">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                      >
                        <img className="w-100" src={process.env.PUBLIC_URL + "/images/blog/blog-3.png"} alt="BlogIMG" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="meta-wrap">
                        <div className="meta-item">
                          <p>
                            <Link to={"#"}>Documentation</Link>
                          </p>
                        </div>
                        <div className="meta-item">
                          <p>
                            <Link to={"#"}>
                              <i className="bi bi-stopwatch" />
                              4th Jan 2022
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="blog-title">
                        <h3>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}
                          >
                            Help and support articles about Microsoft Q&amp;A
                            moved to Docs
                          </Link>
                        </h3>
                        <p>
                          Aliquam finibus augue ac diam euismod, nec con
                          sectetur erat dignissim. Pellentesque . Nulla vitae
                          justo enim. Morbi
                        </p>
                      </div>
                      <div className="btn-wrap">
                        <Link
                          className="common-btn btn-style-5"
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details`}
                        >
                          Read more
                        </Link>
                        <i className="bx bxs-right-arrow-alt" />
                      </div>
                    </div>
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

export default BlogArea;
