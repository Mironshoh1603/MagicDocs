import React from "react";
import { Link } from "react-router-dom";

function BlogDetailsCatagoryArea() {
  const scrollTop = ()=> window.scrollTo({top:0,behavior: "smooth"})
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mobt-50">
        <div className="blog-search">
          <h3>Search Here</h3>
          <form action="#">
            <input type="text" placeholder="Search Here" />
            <button>SEARCH</button>
          </form>
        </div>
        <div className="category-wrap category-wrap-design-2">
          <div className="category-title">
            <h3>Category</h3>
          </div>
          <div className="category-content-wrap">
            <div className="category-blog-list">
              <ul>
                <li>
                  <Link onClick={scrollTop} to={"#"}>
                    <i className="bi bi-arrow-right" />
                    Designspan <span>05</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} to={"#"}>
                    <i className="bi bi-arrow-right" />
                    Documentation <span>02</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} to={"#"}>
                    <i className="bi bi-arrow-right" />
                    WoCommerce <span>08</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} to={"#"}>
                    <i className="bi bi-arrow-right" />
                    WordPress <span>05</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} to={"#"}>
                    <i className="bi bi-arrow-right" />
                    Shopify <span>01</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="category-wrap category-wrap-design-2">
          <div className="category-title">
            <h3>Recent Post</h3>
          </div>
          <div className="category-content-wrap">
            <div className="category-post-list">
              <div className="category-post-img">
                <img
                  src={`${
                    process.env.PUBLIC_URL + "/images/blog/post-img-1.png"
                  }`}
                  alt="IMG"
                />
              </div>
              <div className="category-post-content">
                <h4>
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/blog-details`}
                  >
                    When they will be closed?
                  </Link>
                </h4>
                <p>05 February, 2022</p>
              </div>
            </div>
            <div className="category-post-list">
              <div className="category-post-img">
                <img
                  src={`${
                    process.env.PUBLIC_URL + "/images/blog/post-img-2.png"
                  }`}
                  alt="IMG"
                />
              </div>
              <div className="category-post-content">
                <h4>
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/blog-details`}
                  >
                    All English MSDN and TechNet forums are now read
                  </Link>
                </h4>
                <p>05 February, 2022</p>
              </div>
            </div>
            <div className="category-post-list">
              <div className="category-post-img">
                <img
                  src={`${
                    process.env.PUBLIC_URL + "/images/blog/post-img-3.png"
                  }`}
                  alt="IMG"
                />
              </div>
              <div className="category-post-content">
                <h4>
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/blog-details`}
                  >
                    What happens with the non-English forums?
                  </Link>
                </h4>
                <p>05 February, 2022</p>
              </div>
            </div>
            <div className="category-post-list">
              <div className="category-post-img">
                <img
                  src={`${
                    process.env.PUBLIC_URL + "/images/blog/post-img-4.png"
                  }`}
                  alt="IMG"
                />
              </div>
              <div className="category-post-content">
                <h4>
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/blog-details`}
                  >
                    For edtech and IT teams: Chrome extensions that work.
                  </Link>
                </h4>
                <p>05 February, 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className="category-wrap category-wrap-design-2">
          <div className="category-title">
            <h3>Popular Tag</h3>
          </div>
          <div className="category-content-wrap">
            <div className="category-tag-list">
              <ul>
                <li>
                  <Link onClick={scrollTop} to={"#"}>
                    App
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} to={"#"}>
                    Design
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} to={"#"}>
                    WordPress
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} to={"#"}>
                    Fix
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} to={"#"}>
                    Shopify
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} to={"#"}>
                    WoCommerce
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} to={"#"}>
                    Ect
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollTop} to={"#"}>
                    Doc
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

export default BlogDetailsCatagoryArea;
