import React, { useEffect, useReducer, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// image import
const initalHeaderState = { activeMenu: "", scrllTop: "" };
const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
function reducer(state, action) {
  switch (action.type) {
    case "homeOne":
      return { activeMenu: "homeOne", scrllTop: scrollTop() };
    case "docs":
      return { activeMenu: "docs", scrllTop: scrollTop() };
    case "pages":
      return { activeMenu: "pages", scrllTop: scrollTop() };
    case "topic":
      return { activeMenu: "topic", scrllTop: scrollTop() };
    case "blog":
      return { activeMenu: "blog", scrllTop: scrollTop() };
    case "contact":
      return { activeMenu: "contact", scrllTop: scrollTop() };
    default:
      return { activeMenu: "" };
  }
}
function HomepageTwoHeader() {
   // Sticky Menu Area
   useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header-menu-area");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };
  const [state, dispatch] = useReducer(reducer, initalHeaderState);
  const [showSidebar, SetSidebar] = useState(0);
  const [mobileSidebar, SetMobileSidebar] = useState(0);
  const handleSidebar = ()=>{
    if(showSidebar === false || showSidebar === 0){
      SetSidebar(1)
    } else{
      SetSidebar(false)
    }
  }
  const handleMobileSidebar = ()=>{
    if(mobileSidebar === false || mobileSidebar === 0){
      SetMobileSidebar(1)
    } else{
      SetMobileSidebar(false)
    }
  }
  return (
    <header>
      <nav>
        <div className="header-menu-area submenu-color">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-sm-6 col-6">
                <div className="logo text-left">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/`}
                  >
                    <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="img" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-sm-6 col-6">
                <Link to={"#"} onClick={handleMobileSidebar} className={mobileSidebar === 1 ? "hidden-lg hamburger h-active": "hidden-lg hamburger"}>
                  <span className="h-top" />
                  <span className="h-middle" />
                  <span className="h-bottom" />
                </Link>
                <nav className={mobileSidebar === 1 ? "main-nav slidenav": "main-nav"}>
                  <div className="logo mobile-ham-logo d-lg-none d-block text-left">
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/`}
                    >
                      <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="img" />
                    </Link>
                  </div>
                  <ul>
                    <li className="has-child-menu">
                      <Link to={"#"} 
                      onClick={() => dispatch({ type: "homeOne" })}
                            className={state.activeMenu === "homeOne" ? "active" : "" }>Home</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className={state.activeMenu === "homeOne" ? "sub-menu  d-block" : "sub-menu d-none"}>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/`}
                            onClick={scrollTop}
                          >
                            Home One
                          </Link>
                        </li>
                        <li>
                          <NavLink onClick={() => dispatch({ type: "homeOne", scrollTop })} to={"#"}  >
                            Home Two
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        onClick={scrollTop}
                        className={state.activeMenu === "docs" ? "active" : "" }
                        to={`${process.env.PUBLIC_URL}/documents`}
                      >
                        Docs
                      </Link>
                    </li>
                    <li className="has-child-menu">
                      <Link to={"#"} onClick={() => dispatch({ type: "pages" })}  className={state.activeMenu === "pages" ? "active" : "" }>Pages</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className={state.activeMenu === "pages" ? "sub-menu  d-block" : "sub-menu d-none"}>
                        <li>
                          <NavLink
                            onClick={() => dispatch({ type: "pages", scrollTop })}
                            to={`${process.env.PUBLIC_URL}/documents`}
                          >
                            Documents
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={() => dispatch({ type: "pages", scrollTop })}
                            to={`${process.env.PUBLIC_URL}document-details`}
                          >
                            Document Details
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={() => dispatch({ type: "pages", scrollTop })}
                            to={`${process.env.PUBLIC_URL}/faq`}
                          >
                            FAQ
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={() => dispatch({ type: "pages", scrollTop })}
                            to={`${process.env.PUBLIC_URL}/sign-up`}
                          >
                            Sign Up
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={() => dispatch({ type: "pages", scrollTop })}
                            to={`${process.env.PUBLIC_URL}/login`}
                          >
                            Login
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={() => dispatch({ type: "pages", scrollTop })}
                            to={`${process.env.PUBLIC_URL}/error`}
                          >
                            404
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={() => dispatch({ type: "pages", scrollTop })}
                            to={`${process.env.PUBLIC_URL}/question`}
                          >
                            Ask A Qsn?
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <Link to={"#"} onClick={() => dispatch({ type: "topic"})} className={state.activeMenu === "topic" ? "active" : "" }>Forum</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className={state.activeMenu === "topic" ? "sub-menu  d-block" : "sub-menu d-none"}>
                        <li>
                          <Link
                          
                          onClick={() => dispatch({ type: "topic", scrollTop })}
                            to={`${process.env.PUBLIC_URL}/topic`}
                          >
                            Topic
                          </Link>
                        </li>
                        <li>
                          <NavLink
                            onClick={() => dispatch({ type: "topic", scrollTop })}
                            to={`${process.env.PUBLIC_URL}/forum-q`}
                          >
                            Forum Qsn
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                           onClick={() => dispatch({ type: "topic", scrollTop })}
                            to={`${process.env.PUBLIC_URL}/topic-details`}
                          >
                            Topic Details
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <Link to={"#"} onClick={() => dispatch({ type: "blog" })} className={state.activeMenu === "blog" ? "active" : "" }>Blog</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className={state.activeMenu === "blog" ? "sub-menu  d-block" : "sub-menu d-none"}>
                        <li>
                          <NavLink
                            onClick={() => dispatch({ type: "blog", scrollTop })}
                            to={`${process.env.PUBLIC_URL}/blog-grid`}
                          >
                            Blog Grid
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={() => dispatch({ type: "blog", scrollTop })}
                            to={`${process.env.PUBLIC_URL}/blog-sidebar`}
                          >
                            Blog Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={() => dispatch({ type: "blog", scrollTop })}
                            to={`${process.env.PUBLIC_URL}/blog-details`}
                          >
                            Blog Details
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                      className={state.activeMenu === "blog" ? "active" : "" }
                        onClick={() => dispatch({ type: "blog", scrollTop })}
                        to={`${process.env.PUBLIC_URL}/contact`}
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                  <div className="menu-btn-wrap d-block d-lg-none">
                    <Link className="common-btn btn-style-1" to="#">
                      Support
                    </Link>
                  </div>
                </nav>
              </div>
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="menu-btn-wrap">
                  <Link className="common-btn btn-style-1" to={"#"}>
                    Support
                  </Link>
                  <div className="menu-toggle-btn">
                    <ul onClick={handleSidebar}>
                      <li />
                      <li />
                      <li />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={showSidebar === 1 ? "menu-toggle-btn-full-shape show-sidebar  sidebar-style-2":"menu-toggle-btn-full-shape  sidebar-style-2"}>
        <div className="menu-toggle-wrap bg-white">
          <div className="sidebar-top-area d-flex justify-content-between align-items-center">
            <div className="cross-icon" onClick={handleSidebar}>
              <i className="bx bx-x" />
            </div>
            <div className="sidebar-logo">
              <img src={process.env.PUBLIC_URL + "/images/icons/sidebar-logo.svg"} alt="imgLogo" />
            </div>
          </div>
          <div className="sidebar-body">
            <h3 className="sidebar-title">
              <span>Docbase</span> is a Best Documentation &amp; Knowledge Base
              Template.
            </h3>
            <div className="sidebar-form-area">
              <h5>Subscribe Our Newsletter</h5>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="name" placeholder="Enter your email" />
                <button className="sidebar-btn">Subscribe</button>
              </form>
            </div>
            <div className="sidebar-contact-area">
              <h3 className="sidebar-contact-title">Contact</h3>
              <ul>
                <li>
                  <h5>Location :</h5>
                  <p>
                    House#168/170, Road#02, Avenue#01, Mirpur DOHS, Dhaka-1216
                  </p>
                </li>
                <li>
                  <h5>Phone : :</h5>
                  <p>+88 1200 1111 222, +02 0011 2233</p>
                </li>
                <li>
                  <h5>Email : :</h5>
                  <p>infosupport@example.com</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-social-area">
            <ul>
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
                  target="_blank"
                >
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.pinterest.com/"
                  target="_blank"
                >
                  <i className="bx bxl-pinterest-alt" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomepageTwoHeader;
