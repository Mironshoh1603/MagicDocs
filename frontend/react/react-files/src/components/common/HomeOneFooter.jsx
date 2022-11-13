import React from 'react'
import { Link } from 'react-router-dom'


function HomeOneFooter() {
  const scrollTop = () => window.scrollTo({top:0,behavior:"smooth"})
  return (
    <footer className="footer-area pt-55">
          <img className="shape hero-botto-footer-left" src={process.env.PUBLIC_URL + "/images/bg/footer-circle.png"} alt="IMG" />
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                <div className="footer-wrap">
                  <div className="row justify-content-between g-sm-start g-4">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="widget">
                        <div className="title">
                          <h2 className="footer-title">About Us</h2>
                        </div>
                        <div className="content">
                          <p>Advance Creative  knowledge base solution to help you reduce support ticket &amp; scale customer support.</p>
                        </div>
                        <div className="title">
                          <h3 className="footer-title">Want to work with us?</h3>
                        </div>
                        <div className="contact">
                          <p><a href="mailto:info@website.com">info@example.com</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-6">
                      <div className="widget">
                        <div className="title">
                          <h3 className="footer-title">Quick Links</h3>
                        </div>
                        <div className="link">
                          <ul>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/login`}>My Account</Link></li>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>Affiliate Program</Link></li>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>Lawyer Consulting</Link></li>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>Sorteo Locemses</Link></li>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>Privacey Policy</Link></li>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/contact`}>Term &amp; Condition</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-6">
                      <div className="widget">
                        <div className="title">
                          <h3 className="footer-title">Doc Contents</h3>
                        </div>
                        <div className="link">
                          <ul>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>Tables</Link></li>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>Tooltip &amp; Direction</Link></li>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/documents`}>Title Doc</Link></li>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>License Agreement</Link></li>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/blog-details`}>Sell your Product</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-6">
                      <div className="widget">
                        <div className="title">
                          <h3 className="footer-title">Doc Elements</h3>
                        </div>
                        <div className="link">
                          <ul>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>Accordions Widget</Link></li>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>Tabs Widget</Link></li>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>Cheatsheet Widget</Link></li>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>Image Hotspots</Link></li>
                            <li><Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>Notice / Message Widget</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row copy-wrap align-items-center g-4 border--top">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="copy-social">
                  <ul>
                    <li><a rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank"><i className="bx bxl-facebook" /></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank"><i className="bx bxl-twitter" /></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank"><i className="bx bxl-instagram" /></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank"><i className="bx bxl-pinterest-alt" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="copy-right-area text-lg-end">
                  <p className="copy-text">Copyright © 2022 Docbase | Design By <a rel="nofollow" target='blank' href="https://www.egenslab.com/">Egens Lab</a></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
  )
}

export default HomeOneFooter