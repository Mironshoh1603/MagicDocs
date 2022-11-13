import React from 'react'
import { Link } from "react-router-dom";
// images


function InnerPageFooter() {
  const scrollTop = () => window.scrollTo({top:0,behavior: "smooth"})
  return (
    <>
    {/* <!-- Footer Area Start--> */}
    <footer className="footer-area">
      <img
        className="shape hero-botto-footer-left"
        src={process.env.PUBLIC_URL + "/images/bg/footer-circle.png"}
        alt="IMG"
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
            <div className="footer-wrap">
              <div className="row justify-content-between g-4">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="widget">
                    <div className="title">
                      <h2 className="footer-title">About Us</h2>
                    </div>
                    <div className="content">
                      <p>
                        Advance Creative knowledge base solution to help you
                        reduce support ticket & scale customer support.
                      </p>
                    </div>
                    <div className="title">
                      <h3 className="footer-title">
                        Want to work with us?
                      </h3>
                    </div>
                    <div className="contact">
                      <p>
                        <Link to={"#"}>info@example.com</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                  <div className="widget">
                    <div className="title">
                      <h3 className="footer-title">Quick Links</h3>
                    </div>
                    <div className="link">
                      <ul>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/login`}
                          >
                            My Account
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/documents`}
                          >
                            Affiliate Program
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/documents`}
                          >
                            Lawyer Consulting
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} to={"#"}>
                            Sorteo Locemses
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} to={"#"}>
                            Privacey Policy
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} to={"#"}>
                            Term & Condition
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                  <div className="widget">
                    <div className="title">
                      <h3 className="footer-title">Doc Contents</h3>
                    </div>
                    <div className="link">
                      <ul>
                        <li>
                          <Link onClick={scrollTop} to={"#"}>
                            Tables
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} to={"#"}>
                            Tooltip & Direction
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} to={"#"}>
                            Title Doc
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} to={"#"}>
                            License Agreement
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} to={"#"}>
                            Sell your Product
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                  <div className="widget">
                    <div className="title">
                      <h3 className="footer-title">Doc Elements</h3>
                    </div>
                    <div className="link">
                      <ul>
                        <li>
                          <Link onClick={scrollTop} to={"#"}>
                            Accordions Widget
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} to={"#"}>
                            Tabs Widget
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} to={"#"}>
                            Cheatsheet Widget
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} to={"#"}>
                            Image Hotspots
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} to={"#"}>
                            Notice / Message Widget
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
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="newsletter-wrap d-flex justify-content-center">
              <h2>Subscribe to our Newsletter</h2>
              <form action="index.html">
                <input type="text" placeholder="Enter your email" />
                <i className="bi bi-arrow-right"></i>
              </form>
            </div>
          </div>
        </div>
        <div className="row copy-wrap align-items-center g-4">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="copy-social">
              <ul>
                <li>
                  <a rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank">
                    <i className="bx bxl-pinterest-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="copy-right-area text-lg-end">
              <p className="copy-text">
                Copyright 2022 Egens Lab | Design By{" "}
                <a rel="nofollow" href="https://egenslab.com">
                  Egens Lab
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* <!-- Footer Area End --> */}
  </>
  )
}

export default InnerPageFooter