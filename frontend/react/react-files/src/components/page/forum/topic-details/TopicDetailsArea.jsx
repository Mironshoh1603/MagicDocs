import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

function TopicDetailsArea() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const optionForTopicDetails = [
    { value: "1", label: "Show 01-06" },
    { value: "2", label: "Show 02-06" },
    { value: "3", label: "Show 03-06" },
    { value: "4", label: "Show 04-06" },
  ];
  return (
    <>
      {/* topic-section Start*/}
      <div className="topic-details-section pt-100 pb-100">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="topic-details-area">
                {/* topic-post */}
                <div className="topic-post">
                  <div className="topic-header">
                    <div className="topic-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/topic/topic-post.png"
                        }
                        alt="forumIMG"
                      />
                    </div>
                    <div className="topic-title">
                      <h4>Qsn : Why my this item is rejected?</h4>
                      <div className="topic-post-date">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/calendar2.svg"
                          }
                          alt="images"
                        />
                        <span>30 September, 2020 at 8:01 pm</span>
                      </div>
                    </div>
                  </div>
                  <div className="topic-body">
                    <p className="mb-9">Hi,</p>
                    <p className="mb-19">
                      I couldn’t import a demo page using one click import ,
                      even the import manually doesn’t work and the pages
                      doesn’t show widgets. Please advise.
                    </p>
                    <p>
                      Integer pretium id ante eu interdum. Vivamus a tortor vel
                      leo pharetra tincidunt. Nullam non vehicula velit. Nullam
                      quis elementum turpis, quis molestie nunc. Integer in enim
                      diam. Pelle ntesque habitant morbi tristique senectus et
                      netus et malesuada fames ac turpis egestas. Ae nean ut
                      lacus lacus. Vestibulum at metus semper, tincidunt quam
                      at, aliquet nisl. Sed condimentum sem in cursus pretium.
                    </p>
                    <ul className="topic-details-tag">
                      <li>Tags :</li>
                      <li>
                        <Link to={"#"}>Meetups,</Link>
                      </li>
                      <li>
                        <Link to={"#"}>Mus,</Link>
                      </li>
                      <li>
                        <Link to={"#"}>Rejected</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="topic-footer">
                    <p>
                      Posted by: <Link to={"#"}>Sara Watson</Link>
                    </p>
                    <Link to={"#"} className="comment-notification">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/commenticon.svg"
                        }
                        alt="commenticon"
                      />
                      <p>25 Comments</p>
                    </Link>
                  </div>
                </div>
                {/* topic-comment-area */}
                <div className="topic-comment-area">
                  <div className="comment-link">
                    <span>
                      Can you help this post?
                      <Link to="#" id="topic-comment-formA">
                        Please Comment Us.
                      </Link>
                    </span>
                  </div>
                  <div className="all-comments-area">
                    <h5>All Comments</h5>
                    <div className="topic-select">
                      <div className="forum-select">
                        <Select
                          placeholder="Show comments"
                          options={optionForTopicDetails}
                        ></Select>
                      </div>
                    </div>
                  </div>
                  <ul className="all-comments">
                    <li>
                      <div className="topic-comment-box">
                        <div className="comment-header">
                          <div className="author-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/topic/topic-com1.png"
                              }
                              alt="forumIMG"
                            />
                          </div>
                          <div className="author-name">
                            <h5>
                              <Link to={"#"}>Sata Waston</Link>
                              <span>- 10th Jan 2022</span>
                            </h5>
                          </div>
                        </div>
                        <div className="comment-body">
                          <p>
                            Aenean dolor massa, rhoncus ut tortor in, pretium
                            tempus neque. Vestibulum venenati leo et dic tum
                            finibus. Nulla vulputate dolor sit amet tristique
                            dapibus.Gochujang ugh viral, butcher pabst put a
                            bird on it meditation austin.
                          </p>
                        </div>
                        <div className="comment-footer">
                          <ul className="comment-footer-icon">
                            <li>
                              <Link to={"#"}>
                                <i className="bx bx-like" />
                              </Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bx bx-heart" />
                              </Link>
                            </li>
                          </ul>
                          <button>Reply</button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="topic-comment-box">
                        <div className="comment-header">
                          <div className="author-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/topic/topic-com2.png"
                              }
                              alt="forumIMG"
                            />
                          </div>
                          <div className="author-name">
                            <h5>
                              <Link to={"#"}>Farah Samara</Link>
                              <span>- 10th Jan 2022</span>
                            </h5>
                          </div>
                        </div>
                        <div className="comment-body">
                          <p>
                            Aenean dolor massa, rhoncus ut tortor in, pretium
                            tempus neque. Vestibulum venenati leo et dic tum
                            finibus. Nulla vulputate dolor sit amet tristique
                            dapibus.Gochujang ugh viral, butcher pabst put a
                            bird on it meditation austin.
                          </p>
                        </div>
                        <div className="comment-footer">
                          <ul className="comment-footer-icon">
                            <li>
                              <Link to={"#"}>
                                <i className="bx bx-like" />
                              </Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bx bx-heart" />
                              </Link>
                            </li>
                          </ul>
                          <button>Reply</button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="topic-comment-box">
                        <div className="comment-header">
                          <div className="author-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/topic/topic-com3.png"
                              }
                              alt="forumIMG"
                            />
                          </div>
                          <div className="author-name">
                            <h5>
                              <Link to={"#"}>Michel Clerk</Link>
                              <span>- 10th Jan 2022</span>
                            </h5>
                          </div>
                        </div>
                        <div className="comment-body">
                          <p>
                            Aenean dolor massa, rhoncus ut tortor in, pretium
                            tempus neque. Vestibulum venenati leo et dic tum
                            finibus. Nulla vulputate dolor sit amet tristique
                            dapibus.Gochujang ugh viral, butcher pabst put a
                            bird on it meditation austin.
                          </p>
                        </div>
                        <div className="comment-footer">
                          <ul className="comment-footer-icon">
                            <li>
                              <Link to={"#"}>
                                <i className="bx bx-like" />
                              </Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bx bx-heart" />
                              </Link>
                            </li>
                          </ul>
                          <button>Reply</button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* comment-form-area */}
                <div
                  className="comment-form-area mt-50"
                  id="topic-comment-form"
                >
                  <div className="all-comments-area mb-40">
                    <h5>Leave A Comments</h5>
                    <div className="topic-select"></div>
                  </div>
                  <div className="ask-form-area">
                    <form onSubmit={handleSubmit}>
                      <div className="row justify-content-center">
                        <div className="col-sm-6">
                          <input type="text" placeholder="Name :" />
                        </div>
                        <div className="col-sm-6">
                          <input type="text" placeholder="Email :" />
                        </div>
                        <div className="col-12">
                          <textarea
                            rows={5}
                            placeholder="Question :"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-sm-6 text-center">
                          <button className="form-submit-btn">Send Now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ps-lg-3">
              <div className="widget-area">
                {/* sidebar-forum */}
                <div className="widget-card mb-30">
                  <h5 className="widget-list-title">Forums</h5>
                  <ul className="widget-list-d1 forum-list">
                    <li>
                      <Link to={"#"}>
                        <span>Ui Design</span>
                        <span>05</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>PHP Scripts</span>
                        <span>08</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>Envato-hosted </span>
                        <span>06</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>Elements</span>
                        <span>03</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>User feedback</span>
                        <span>07</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>Cкрипт</span>
                        <span>03</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>продажи</span>
                        <span>06</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* sidebar-recent-topic */}
                <div className="widget-card mb-30">
                  <h5 className="widget-list-title">Recent Topics</h5>
                  <ul className="widget-list-d2  topic-list">
                    <li>
                      <Link to={"#"}>
                        <span>Some Questions about the theme</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>Etiam et vulputate nibh. In accumsan</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>Cras mi augue, posuere eget aliquam</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>Vivamus gravida ultrices</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>Cras scelerisque faucibus risus</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>Phasellus hendrerit neque ligula.</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* sidebar-archive */}
                <div className="widget-card mb-30">
                  <h5 className="widget-list-title">Archive</h5>
                  <ul className="widget-list-d2 archive-list">
                    <li>
                      <Link to={"#"}>
                        <span>Ui Design</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>PHP Scripts</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>Envato-hosted </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* topic-section End */}
    </>
  );
}

export default TopicDetailsArea;
