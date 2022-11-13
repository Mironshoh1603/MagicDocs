import React from 'react'
import { Link } from "react-router-dom";


function DocumentLeftMenuArea() {
  return (
    <>
    <div className="col-lg-3 order-1">
      <div className="document-left-menu position-sticky">
        <div className="left-menu-item">
          <h5
            className="accordion-button"
            id="heading01"
            data-bs-toggle="collapse"
            data-bs-target="#collapse01"
            aria-controls="collapse01"
          >
            Envato-hosted <span>01</span>
          </h5>
          <div
            id="collapse01"
            className="accordion-collapse collapse show"
            aria-labelledby="heading01"
          >
            <ul className="sub-menu">
              <li>
                <Link to={"#"}>
                  How to increase sell my product on themeforest
                </Link>
              </li>
              <li>
                <Link to={"#"}>
                  Need support for checkout page, default state is selected
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="left-menu-item">
          <h5
            id="heading02"
            className="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse02"
            aria-controls="collapse02"
          >
            User-Feedback <span>02</span>
          </h5>
          <div
            id="collapse02"
            className="accordion-collapse collapse"
            aria-labelledby="heading02"
          >
            <ul className="sub-menu">
              <li>
                <Link to={"#"}>
                  How to increase sell my product on themeforest
                </Link>
              </li>
              <li>
                <Link to={"#"}>
                  Need support for checkout page, default state is selected
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="left-menu-item">
          <h5
            id="heading03"
            className="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse03"
            aria-controls="collapse03"
          >
            Product Support <span>03</span>
          </h5>
          <div
            id="collapse03"
            className="accordion-collapse collapse"
            aria-labelledby="heading03"
          >
            <ul className="sub-menu">
              <li>
                <Link to={"#"}>
                  How to increase sell my product on themeforest
                </Link>
              </li>
              <li>
                <Link to={"#"}>
                  Need support for checkout page, default state is selected
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default DocumentLeftMenuArea
