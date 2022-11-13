import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

function ForumWrapArea() {
  const optionsForAuthor = [
    { value: "1", label: "Author" },
    { value: "2", label: "Author1" },
    { value: "3", label: "Author2" },
  ];
  const optionsForSort = [
    { value: "1", label: "Sort" },
    { value: "2", label: "Sort1" },
    { value: "3", label: "Sort2" },
  ];
  return (
    <>
      {/* topic-section Start*/}
      <div className="forum-qsn-section pt-100 mb-50">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="forum-list-area">
                <h3 className="forum-title">DocBase Community</h3>
                <div className="forum-header">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-8 col-sm-4 col-2 justify-content-center">
                      <span>Topic</span>
                    </div>
                    <div className="col-md-4 col-sm-8 col-10 d-flex align-items-center justify-content-end">
                      <div className="forum-select">
                        <Select
                          placeholder="Author"
                          options={optionsForAuthor}
                        ></Select>
                      </div>
                      <button className="view-button">views</button>
                      <div className="forum-select">
                        <Select
                          placeholder="Sort"
                          options={optionsForSort}
                        ></Select>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="forum-list">
                  <li className="single-list">
                    <div className="forum-badge">Elements</div>
                    <div className="row d-flex align-items-center">
                      <div className="col-md-7">
                        <div className="topic-author">
                          <div className="topic-author-img">
                            <img src={process.env.PUBLIC_URL + "/images/topic/topic1.png"} alt="forumIMG" />
                          </div>
                          <div className="topic-author-content">
                            <h5>Non-standard item rejections</h5>
                            <p>Last reply form @abdullah 5 minutes ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="topic-reaction-area">
                          <ul>
                            <li>
                              <ul className="user-list">
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user1.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic8.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user2.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic2.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user3.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic7.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li className="more-user-icon">
                                  <Link to={"#"}>
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to={"#"}>1.4K</Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bi bi-eye me-2" />
                                10
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                  </li>
                  <li className="single-list">
                    <div className="forum-badge">Cкрипт</div>
                    <div className="row d-flex align-items-center">
                      <div className="col-md-7">
                        <div className="topic-author">
                          <div className="topic-author-img">
                            <img src={process.env.PUBLIC_URL + "/images/topic/topic2.png"} alt="forumIMG" />
                          </div>
                          <div className="topic-author-content">
                            <h5>Why my this item is rejected?</h5>
                            <p>Last reply form @abdullah 5 minutes ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="topic-reaction-area">
                          <ul>
                            <li>
                              <ul className="user-list">
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user1.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic8.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user2.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic2.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user3.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic7.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li className="more-user-icon">
                                  <Link to={"#"}>
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to={"#"}>1.4K</Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bi bi-eye me-2" />
                                10
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                  </li>
                  <li className="single-list">
                    <div className="forum-badge">User Feed</div>
                    <div className="row d-flex align-items-center">
                      <div className="col-md-7">
                        <div className="topic-author">
                          <div className="topic-author-img">
                            <img src={process.env.PUBLIC_URL + "/images/topic/topic3.png"} alt="forumIMG" />
                          </div>
                          <div className="topic-author-content">
                            <h5>What made you up this word?</h5>
                            <p>Last reply form @abdullah 5 minutes ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="topic-reaction-area">
                          <ul>
                            <li>
                              <ul className="user-list">
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user1.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic8.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user2.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic2.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user3.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic7.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li className="more-user-icon">
                                  <Link to={"#"}>
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to={"#"}>1.4K</Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bi bi-eye me-2" />
                                10
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                  </li>
                  <li className="single-list">
                    <div className="forum-badge">Elements</div>
                    <div className="row d-flex align-items-center">
                      <div className="col-md-7">
                        <div className="topic-author">
                          <div className="topic-author-img">
                            <img src={process.env.PUBLIC_URL + "/images/topic/topic4.png"} alt="forumIMG" />
                          </div>
                          <div className="topic-author-content">
                            <h5>Youtube claim problem license</h5>
                            <p>Last reply form @abdullah 5 minutes ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="topic-reaction-area">
                          <ul>
                            <li>
                              <ul className="user-list">
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user1.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic8.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user2.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic2.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user3.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic7.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li className="more-user-icon">
                                  <Link to={"#"}>
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to={"#"}>1.4K</Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bi bi-eye me-2" />
                                10
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                  </li>
                  <li className="single-list">
                    <div className="forum-badge">Ui Design </div>
                    <div className="row d-flex align-items-center">
                      <div className="col-md-7">
                        <div className="topic-author">
                          <div className="topic-author-img">
                            <img src={process.env.PUBLIC_URL + "/images/topic/topic5.png"} alt="forumIMG" />
                          </div>
                          <div className="topic-author-content">
                            <h5>Non-standard item rejections</h5>
                            <p>Last reply form @abdullah 5 minutes ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="topic-reaction-area">
                          <ul>
                            <li>
                              <ul className="user-list">
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user1.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic8.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user2.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic2.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user3.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic7.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li className="more-user-icon">
                                  <Link to={"#"}>
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to={"#"}>1.4K</Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bi bi-eye me-2" />
                                10
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                  </li>
                  <li className="single-list">
                    <div className="forum-badge">Elements</div>
                    <div className="row d-flex align-items-center">
                      <div className="col-md-7">
                        <div className="topic-author">
                          <div className="topic-author-img">
                            <img src={process.env.PUBLIC_URL + "/images/topic/topic6.png"} alt="forumIMG" />
                          </div>
                          <div className="topic-author-content">
                            <h5>We reached Author status!</h5>
                            <p>Last reply form @abdullah 5 minutes ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="topic-reaction-area">
                          <ul>
                            <li>
                              <ul className="user-list">
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user1.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic8.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user2.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic2.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <Link to={"#"}>
                                    <img src={process.env.PUBLIC_URL + "/images/topic/user3.png"} alt="forumIMG" />
                                  </Link>
                                  <div className="user-details-dropdown">
                                    <img src={process.env.PUBLIC_URL + "/images/topic/topic7.png"} alt="forumIMG" />
                                    <h6>David Watson</h6>
                                    <Link to={"#"} className="follow-btn">
                                      Follow
                                    </Link>
                                  </div>
                                </li>
                                <li className="more-user-icon">
                                  <Link to={"#"}>
                                    <i className="bx bx-dots-horizontal-rounded" />
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to={"#"}>1.4K</Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bi bi-eye me-2" />
                                10
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="row mt-26">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="pagination-wrap text-center">
                    <ul>
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

export default ForumWrapArea;
