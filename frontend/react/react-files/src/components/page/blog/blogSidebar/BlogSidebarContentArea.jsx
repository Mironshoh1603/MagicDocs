import React from "react";
import { Link } from "react-router-dom";
import BlogBox2 from "../blogGrid/BlogBox2";

function BlogSidebarContentArea() {
  const scrollTop = () => window.scrollTo({top:0,behavior: "smooth"})
  return (
    <>
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="row g-4">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="blog-box blog-box-design-2 blog-box-style-2 d-flex align-items-center">
              <div className="blog-img">
                <Link to={"#"}>
                  <img
                    className="w-100"
                    src={`${
                      process.env.PUBLIC_URL +
                      "/images/blog/blog-page-grid-2-2.png"
                    }`}
                    alt="blogIMG"
                  />
                </Link>
              </div>
              <div className="blog-content">
                <div className="meta-wrap">
                  <div className="meta-item">
                    <p>
                      <Link to={"#"}>Docuemntation</Link>
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
                    <Link to={`${process.env.PUBLIC_URL}/blog-details`}>
                      How to Create GDPR Consent Form
                    </Link>
                  </h3>
                  <p>
                    Aliquam finibus augue ac diam euismod, nec con sectetur erat
                    dignissim. Pellentesque . Nulla vitae justo enim. Morbi
                  </p>
                </div>
                <div className="btn-wrap">
                  <Link className="common-btn btn-style-5" 
                   to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>
                    Read more
                  </Link>
                  <i className="bx bxs-right-arrow-alt" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="blog-box blog-box-design-2 blog-box-style-2 d-flex align-items-center">
              <div className="blog-img">
                <Link to={"#"}>
                  <img
                    className="w-100"
                    src={`${
                      process.env.PUBLIC_URL +
                      "/images/blog/blog-page-grid-2-3.png"
                    }`}
                    alt="blogIMG"
                  />
                </Link>
              </div>
              <div className="blog-content">
                <div className="meta-wrap">
                  <div className="meta-item">
                    <p>
                      <Link to={"#"}>Docuemntation</Link>
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
                    <Link to={`${process.env.PUBLIC_URL}/blog-details`}>
                      Should You Invest In Internal Knowledge?
                    </Link>
                  </h3>
                  <p>
                    Aliquam finibus augue ac diam euismod, nec con sectetur erat
                    dignissim. Pellentesque . Nulla vitae justo enim. Morbi
                  </p>
                </div>
                <div className="btn-wrap">
                  <Link className="common-btn btn-style-5" to={"#"}>
                    Read more
                  </Link>
                  <i className="bx bxs-right-arrow-alt" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <BlogBox2
              image="/images/blog/blog-page-grid-2-4.png"
              item="Fix "
              date="4th Jan 2022"
              title="Microsoft graduat to General Availability!"
            />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <BlogBox2
              image="/images/blog/blog-page-grid-2-5.png"
              item="Woocommerce "
              date="4th Jan 2022"
              title=" what happens with non-english forums"
            />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <BlogBox2
              image="/images/blog/blog-page-grid-2-4.png"
              item="Docuemntation "
              date="4th Jan 2022"
              title="When they will be closed?"
            />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <BlogBox2
              image="/images/blog/blog-page-grid-2-4.png"
              item="Design "
              date="4th Jan 2022"
              title="Should You Invest In Internal Knowledge?"
            />
          </div>
        </div>
        <div className="row mt-26">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="pagination-wrap text-center">
              <ul className="d-flex justify-content-center align-items-center">
                <li>
                  <Link to={"#"}>
                    <i className="bi bi-arrow-left" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>01</Link>
                </li>
                <li>
                  <Link to={"#"}>02</Link>
                </li>
                <li>
                  <Link to={"#"}>03</Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <i className="bi bi-arrow-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSidebarContentArea;
