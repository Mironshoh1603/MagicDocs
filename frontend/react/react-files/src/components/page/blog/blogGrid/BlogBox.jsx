import React from "react";
import { Link } from "react-router-dom";

function BlogBox(props) {
  const scsrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="blog-box blog-box-design-2">
        <div className="blog-img">
          <Link
            to={`${process.env.PUBLIC_URL}/blog-details`}
            onClick={scsrollTop}
          >
            <img
              className="w-100"
              src={`${process.env.PUBLIC_URL} ${props.image} `}
              alt="BlogGridIMG"
            />
          </Link>
        </div>
        <div className="blog-content">
          <div className="meta-wrap">
            <div className="meta-item">
              <p>
                <Link
                  to={`${process.env.PUBLIC_URL}/blog-details`}
                  onClick={scsrollTop}
                >
                  {props.item}
                </Link>
              </p>
            </div>
            <div className="meta-item">
              <p>
                <Link to={"#"}>
                  <i className="bi bi-stopwatch" />
                  {props.date}
                </Link>
              </p>
            </div>
          </div>
          <div className="blog-title">
            <h3>
              <Link
                to={`${process.env.PUBLIC_URL}/blog-details`}
                onClick={scsrollTop}
              >
                {props.title}
              </Link>
            </h3>
            <p>
              Aliquam finibus augue ac diam euismod, nec con sectetur erat
              dignissim. Pellentesque.
            </p>
          </div>
          <div className="btn-wrap">
            <Link
              className="common-btn btn-style-5"
              to={`${process.env.PUBLIC_URL}/blog-details`}
              onClick={scsrollTop}
            >
              Read more
            </Link>
            <i className="bx bxs-right-arrow-alt" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogBox;
