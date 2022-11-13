import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import Select from "react-select";

function BlogDetailsContentArea() {
  const [isOpen, setOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const optionsForSearch = [
    { value: "1", label: "Show 01-06" },
    { value: "2", label: "Show 02-06" },
    { value: "3", label: "Show 03-06" },
  ];
  return (
    <>
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="details-wrap">
          <div className="blog-box blog-box-design-2">
            <div className="blog-img">
              <img
                className="w-100"
                src={process.env.PUBLIC_URL + "/images/blog/details-img-1.png"}
                alt="blogIMG"
              />
            </div>
            <div className="blog-content">
              <div className="meta-wrap">
                <div className="meta-item">
                  <p>
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      to={"#"}
                    >
                      Photography
                    </Link>
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
                  Even without internet at home, students can keep learning
                </h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deseru mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
          <p>
            Gochujang ugh viral, butcher pabst put a bird on it meditation
            austin craft beer banh mi. Distillery ramps af, gochujang hell of
            VHS kitsch austin. Vegan air plant trust fund, poke sartorial ennui
            next lev el photo booth coloring book etsy green juice meditation
            austin craft beer.
          </p>
        </div>
        <div className="details-wrap">
          <div className="details-quote-wrap text-center">
            <p>
              If the delivery provider maintains all the standards then it is
              safe to have get products delivered to you. It is hard to maintain
              but still safer to get your products ordered
            </p>
            <h3>-Leslie Alexander-</h3>
            <i className="bx bxs-quote-right" />
          </div>
        </div>
        <div className="details-wrap">
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam
            eius modi tempora incidunt ut labore et dolore magnam aliquam
            quaerat voluptatem.
          </p>
        </div>
        <div className="details-wrap">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="details-video-wrap">
                <img
                  className="w-100"
                  src={
                    process.env.PUBLIC_URL + "/images/blog/details-img-2.png"
                  }
                  alt="blogIMG"
                />
                <div className="video-play" style={{ cursor: "pointer" }}>
                  <div
                    onClick={() => setOpen(true)}
                    className="popup-youtube video-icon"
                  >
                    <i className="bx bx-play" />
                  </div>
                </div>
                <React.Fragment>
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="j_Y2Gwaj7Gs"
                    onClose={() => setOpen(false)}
                  />
                </React.Fragment>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mobt-24">
              <div className="details-video-content">
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit is it aspernatur
                  aut odit aut fugit, quia conse quu ntur magni dolores eos qui
                  ratione volupt atem sequi dda sds nesciunt. Neque porro
                  quisquam est, ed quia non numquam eius modi tempora incidunt
                  ut labore et dolore{" "}
                </p>
                <h3>Excepteur sint occaecat cupidatat non proident, sunt.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="details-wrap">
          <div className="blog-details-content">
            <h3>How can have anything you ant in life if you ?</h3>
            <p>
              Fashion ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione{" "}
            </p>
            <p>
              Fashion ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan tium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione ed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae
            </p>
          </div>
        </div>
        <div className="share-wrap mt-50 mb-50">
          <div className="row gy-3">
            <div className="col-md-8 d-flex justify-content-md-start justify-content-center">
              <div className="share-social">
                <ul>
                  <li>Share :</li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.twitter.com/"
                      target="_blank">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/"
                      target="_blank">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.pinterest.com/"
                      target="_blank">
                      <i className="bx bxl-pinterest-alt=" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-md-end justify-content-center">
              <div className="details-next-button">
                <ul>
                  <li>
                    <Link to={"#"}>
                      <i className="bi bi-arrow-left" />
                      Previous
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      Next
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* topic-comment-area */}
        <div className="topic-comment-area">
          <div className="all-comments-area">
            <h5>All Comments</h5>
            <div className="select">
              <div className="forum-select">
                <Select placeholder="filter comments" options={optionsForSearch}>
                </Select>
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
                        process.env.PUBLIC_URL + "/images/topic/topic-com1.png"
                      }
                      alt="blogIMG"
                    />
                  </div>
                  <div className="author-name">
                    <h5>
                      Sata Waston<span>- 10th Jan 2022</span>
                    </h5>
                  </div>
                </div>
                <div className="comment-body">
                  <p>
                    Aenean dolor massa, rhoncus ut tortor in, pretium tempus
                    neque. Vestibulum venenati leo et dic tum finibus. Nulla
                    vulputate dolor sit amet tristique dapibus.Gochujang ugh
                    viral, butcher pabst put a bird on it meditation austin.
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
                        process.env.PUBLIC_URL + "/images/topic/topic-com2.png"
                      }
                      alt="blogIMG"
                    />
                  </div>
                  <div className="author-name">
                    <h5>
                      Farah Samara<span>- 10th Jan 2022</span>
                    </h5>
                  </div>
                </div>
                <div className="comment-body">
                  <p>
                    Aenean dolor massa, rhoncus ut tortor in, pretium tempus
                    neque. Vestibulum venenati leo et dic tum finibus. Nulla
                    vulputate dolor sit amet tristique dapibus.Gochujang ugh
                    viral, butcher pabst put a bird on it meditation austin.
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
                        process.env.PUBLIC_URL + "/images/topic/topic-com3.png"
                      }
                      alt="blogIMG"
                    />
                  </div>
                  <div className="author-name">
                    <h5>
                      Michel Clerk<span>- 10th Jan 2022</span>
                    </h5>
                  </div>
                </div>
                <div className="comment-body">
                  <p>
                    Aenean dolor massa, rhoncus ut tortor in, pretium tempus
                    neque. Vestibulum venenati leo et dic tum finibus. Nulla
                    vulputate dolor sit amet tristique dapibus.Gochujang ugh
                    viral, butcher pabst put a bird on it meditation austin.
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
        <div className="comment-form-area mt-50" id="topic-comment-form">
          <div className="all-comments-area mb-40">
            <h5>Leave A Comments</h5>
            <div className="topic-select"></div>
          </div>
          <div className="ask-form-area">
            <form onSubmit={handleSubmit}>
              <div className="row justify-content-center">
                <div className="col-sm-6">
                  <input type="text" placeholder="Your Full Name" />
                </div>
                <div className="col-sm-6">
                  <input type="text" placeholder="Your Email Address" />
                </div>
                <div className="col-12">
                  <textarea rows={5} placeholder="Message" defaultValue={""} />
                </div>
                <div className="col-sm-6 text-center">
                  <button className="form-submit-btn">Send Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailsContentArea;
