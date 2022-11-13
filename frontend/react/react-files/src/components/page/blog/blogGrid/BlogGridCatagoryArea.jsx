import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import BlogBox from "./BlogBox";
import BlogBox2 from "./BlogBox2";

function BlogGridCatagoryArea() {
  const scsrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const optionsForCatagory = [
    { value: "1", label: "Show 02" },
    { value: "2", label: "Show 04" },
    { value: "3", label: "Show 06" },
    { value: "4", label: "Show 08" },
  ];
  return (
    <>
      <div className="blog-page-area mt-100 d-lg-block d-none d-md-none d-sm-none">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="blog-category-box">
                <div className="blog-category-btn-wrap">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-one-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-one"
                        type="button"
                        role="tab"
                        aria-controls="pills-one"
                        aria-selected="true"
                      >
                        <i className="bi bi-list" />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-two-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-two"
                        type="button"
                        role="tab"
                        aria-controls="pills-two"
                        aria-selected="false"
                      >
                        <i className="bi bi-list-ul" />
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="category-select-wrap">
                  <div className="forum-select">
                    {/* haldle input slect */}
                    <Select
                      placeholder="Show All"
                      options={optionsForCatagory}
                    ></Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div
                className="tab-content tab-content-shape"
                id="pills-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="pills-one"
                  role="tabpanel"
                  aria-labelledby="pills-one-tab"
                >
                  <div className="row g-4 justify-content-center">
                    <div className="col-xl-4 col-lg-8 col-md-10 col-sm-12 col-12">
                      <BlogBox
                        image="images/blog/blog-1.png"
                        title="Should You Invest In Internal Knowledge Base For Your Company?"
                        date="4th Jan 2022"
                        item="Docuemntation"
                      />
                    </div>
                    <div className="col-xl-4 col-lg-8 col-md-10 col-sm-12 col-12">
                      <BlogBox
                        image="images/blog/blog-page-grid-3-1.png"
                        title="After Microsoft Ignite, Keep The Learning Momentum Going"
                        date="4th Jan 2022"
                        item="Design"
                      />
                    </div>
                    <div className="col-xl-4 col-lg-8 col-md-10 col-sm-12 col-12">
                      <BlogBox
                        image="images/blog/blog-page-grid-3-2.png"
                        title="All English MSDN And TechNet Forums Are Now Read-Only"
                        date="4th Jan 2022"
                        item="Docuemntation"
                      />
                    </div>
                    <div className="col-xl-4 col-lg-8 col-md-10 col-sm-12 col-12">
                      <BlogBox
                        image="images/blog/blog-page-grid-3-3.png"
                        title="Microsoft Q&A Graduates To General Availability!"
                        date="4th Jan 2022"
                        item="Woocommerce"
                      />
                    </div>
                    <div className="col-xl-4 col-lg-8 col-md-10 col-sm-12 col-12">
                      <BlogBox
                        image="images/blog/blog-page-grid-3-4.png"
                        title="Should You Invest In Internal Knowledge Base For Your Company?"
                        date="4th Jan 2022"
                        item="Docuemntation"
                      />
                    </div>
                    <div className="col-xl-4 col-lg-8 col-md-10 col-sm-12 col-12">
                      <BlogBox
                        image="images/blog/blog-page-grid-3-5.png"
                        title="Microsoft Q&A Is Now The Official Micro Soft Site To Support All The Qsn?"
                        date="4th Jan 2022"
                        item="FIx"
                      />
                    </div>
                    <div className="col-xl-4 col-lg-8 col-md-10 col-sm-12 col-12">
                      <BlogBox
                        image="images/blog/blog-page-grid-3-6.png"
                        title="Should You Invest In Internal Knowledge Base For Your Company?"
                        date="4th Jan 2022"
                        item="Ui Design"
                      />
                    </div>
                    <div className="col-xl-4 col-lg-8 col-md-10 col-sm-12 col-12">
                      <BlogBox
                        image="images/blog/blog-page-grid-3-7.png"
                        title="Should You Invest In Internal Knowledge Base For Your Company?"
                        date="4th Jan 2022"
                        item="WordPress"
                      />
                    </div>
                  </div>
                  <div className="row mt-26">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="pagination-wrap text-center">
                        <ul className="d-flex justify-content-center align-items-center">
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-details`}
                              onClick={scsrollTop}
                            >
                              <i className="bi bi-arrow-left" />
                            </Link>
                          </li>
                          <li>
                            <Link to={"#"} onClick={scsrollTop}>
                              01
                            </Link>
                          </li>
                          <li>
                            <Link to={"#"} onClick={scsrollTop}>
                              02
                            </Link>
                          </li>
                          <li>
                            <Link to={"#"} onClick={scsrollTop}>
                              03
                            </Link>
                          </li>
                          <li>
                            <Link to={"#"} onClick={scsrollTop}>
                              <i className="bi bi-arrow-right" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-two"
                  role="tabpanel"
                  aria-labelledby="pills-two-tab"
                >
                  <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="row g-4">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <BlogBox2
                            image="/images/blog/blog-page-grid-2-2.png"
                            item="Docuemntation "
                            date="4th Jan 2022"
                            title="How To Create GDPR Consent Form"
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
                            image="/images/blog/blog-page-grid-2-5.png"
                            item="Woocommerce "
                            date="4th Jan 2022"
                            title=" what happens with non-english forums"
                          />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <BlogBox2
                            image="/images/blog/blog-page-grid-2-4.png"
                            item="Fix "
                            date="4th Jan 2022"
                            title="Microsoft graduat to General Availability!"
                          />
                        </div>
                      </div>
                      <div className="row mt-26">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="pagination-wrap text-center">
                            <ul>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/blog-details`}
                                  onClick={scsrollTop}
                                >
                                  <i className="bi bi-arrow-left" />
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/blog-details`}
                                  onClick={scsrollTop}
                                >
                                  01
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/blog-details`}
                                  onClick={scsrollTop}
                                >
                                  02
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/blog-details`}
                                  onClick={scsrollTop}
                                >
                                  03
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/blog-details`}
                                  onClick={scsrollTop}
                                >
                                  <i className="bi bi-arrow-right" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-small-wrap mt-100 d-lg-none d-block d-md-block d-sm-block">
        <div className="container">
          <div className="row g-3">
            
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <BlogBox2
              image="/images/blog/blog-page-grid-2-2.png"
              item="Docuemntation "
              date="4th Jan 2022"
              title="How To Create GDPR Consent Form"
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
              image="/images/blog/blog-page-grid-2-5.png"
              item="Woocommerce "
              date="4th Jan 2022"
              title=" what happens with non-english forums"
            />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <BlogBox2
              image="/images/blog/blog-page-grid-2-4.png"
              item="Fix "
              date="4th Jan 2022"
              title="Microsoft graduat to General Availability!"
            />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogGridCatagoryArea;
