import React from "react";
import { Link } from "react-router-dom";

function TopicSectionArea() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      {/* topic-section Start*/}
      <div className="suggest-topic-section pt-100 pb-100">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-8">
              <h2 className="suggest-table-title">Suggest Topic</h2>
              <div className="table-wrapper">
                <table className="eg-table table suggest-topic-table mb-0">
                  <thead>
                    <tr>
                      <th>Topic</th>
                      <th>Replies</th>
                      <th>Views</th>
                      <th>Last Post</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Topic">
                        <div className="topic-author">
                          <div className="topic-author-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/topic/topic1.png"
                              }
                              alt="IMG"
                            />
                            <span className="img-bottom-dash" />
                          </div>
                          <div className="topic-author-content">
                            <h5>
                              <Link
                                onClick={scrollTop}
                                to={`${process.env.PUBLIC_URL}/topic-details`}
                              >
                                Envato-hosted
                              </Link>
                            </h5>
                            <p>Get support for the Docly WordPress theme</p>
                          </div>
                        </div>
                      </td>
                      <td data-label="Replies">15</td>
                      <td data-label="Views">1.4K</td>
                      <td data-label="Last Post">
                        <div className="topic-last-post">
                          <span>02 day ago</span>
                          <div className="last-post-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/topic/last-post1.png"
                              }
                              alt="IMG"
                            />
                            <span className="img-bottom-dash" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Topic">
                        <div className="topic-author">
                          <div className="topic-author-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/topic/topic2.png"
                              }
                              alt="IMG"
                            />
                            <span className="img-bottom-dash" />
                          </div>
                          <div className="topic-author-content">
                            <h5>
                              <Link
                                onClick={scrollTop}
                                to={`${process.env.PUBLIC_URL}/topic-details`}
                              >
                                User Feedback
                              </Link>
                            </h5>
                            <p>Get support for the Docly WordPress theme</p>
                          </div>
                        </div>
                      </td>
                      <td data-label="Replies">20</td>
                      <td data-label="Views">2k</td>
                      <td data-label="Last Post">
                        <div className="topic-last-post">
                          <span>02 day ago</span>
                          <div className="last-post-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/topic/last-post2.png"
                              }
                              alt="IMG"
                            />
                            <span className="img-bottom-dash" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Topic">
                        <div className="topic-author">
                          <div className="topic-author-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/topic/topic3.png"
                              }
                              alt="IMG"
                            />
                            <span className="img-bottom-dash" />
                          </div>
                          <div className="topic-author-content">
                            <h5>
                              <Link
                                onClick={scrollTop}
                                to={`${process.env.PUBLIC_URL}/topic-details`}
                              >
                                Webelements
                              </Link>
                            </h5>
                            <p>Get support for the Docly WordPress theme</p>
                          </div>
                        </div>
                      </td>
                      <td data-label="Replies">21</td>
                      <td data-label="Views">5k</td>
                      <td data-label="Last Post">
                        <div className="topic-last-post">
                          <span>02 day ago</span>
                          <div className="last-post-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/topic/last-post3.png"
                              }
                              alt="IMG"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Topic">
                        <div className="topic-author">
                          <div className="topic-author-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/topic/topic4.png"
                              }
                              alt="IMG"
                            />
                            <span className="img-bottom-dash" />
                          </div>
                          <div className="topic-author-content">
                            <h5>
                              <Link
                                onClick={scrollTop}
                                to={`${process.env.PUBLIC_URL}/topic-details`}
                              >
                                Envato-hosted
                              </Link>
                            </h5>
                            <p>Get support for the Docly WordPress theme</p>
                          </div>
                        </div>
                      </td>
                      <td data-label="Replies">15</td>
                      <td data-label="Views">1.4K</td>
                      <td data-label="Last Post">
                        <div className="topic-last-post">
                          <span>02 day ago</span>
                          <div className="last-post-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/topic/last-post1.png"
                              }
                              alt="IMG"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4 ps-lg-3">
              <div className="widget-area">
                {/* sidebar-recent-topic */}
                <div className="widget-card mb-30">
                  <h5 className="widget-list-title">Recent Topics</h5>
                  <ul className="widget-list-d2  topic-list">
                    <li>
                      <Link to={"#"}>
                        <span>Some Questions about the theme</span>
                        <span>05</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>Etiam et vulputate nibh. In accumsan</span>
                        <span>08</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>Cras mi augue, posuere eget aliquam </span>
                        <span>06</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>Vivamus gravida ultrices</span>
                        <span>03</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>Cras scelerisque faucibus risus</span>
                        <span>07</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <span>Phasellus hendrerit neque ligula.</span>
                        <span>03</span>
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

export default TopicSectionArea;
