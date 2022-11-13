import React from "react";

function NewsLetterArea() {
  return (
    <>
      <div className="newsletter-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="newsletter-wrap newsletter-wrap-design-2 d-flex justify-content-center">
                <h2>Subscribe to our Newsletter</h2>
                <form onSubmit={(e) => e.preventDefault()} action="index.html">
                  <input type="text" placeholder="Enter your email" />
                  <i className="bx bxs-right-arrow-alt" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetterArea;
