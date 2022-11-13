import React from "react";

function ContactWrapper() {
  return (
    <>
      <div className="contact-area mt-100 pb-100">
        <div className="container">
          <div className="row ">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="contact-wrap">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="contact-form-box">
                      <h2>Let’s get in touch</h2>
                      <p>
                        I have world-class, flexible support via live chat,
                        email &amp; phone. I guar antee that you’ll be able to
                        have any issue resolved within 24/7
                      </p>
                      <form
                        method="post"
                        id="contact-form"
                        className="contat-input contat-input-design-2"
                      >
                        <div className="row">
                          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <label>First Name</label>
                            <input
                              required
                              type="text"
                              name="name"
                              placeholder="Enter your first name"
                            />
                          </div>
                          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <label>Last Name</label>
                            <input
                              required
                              type="text"
                              name="name"
                              placeholder="Enter your last name"
                            />
                          </div>
                          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <label>Your Email</label>
                            <input
                              required
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                            />
                          </div>
                          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <label>Subject</label>
                            <input
                              required
                              type="email"
                              name="email"
                              placeholder="Subject here"
                            />
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <label>Your Messege</label>
                            <textarea
                              name="message"
                              id="message"
                              cols={30}
                              rows={5}
                              placeholder="Your message"
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-btn-wrap">
                            <button type="submit" className="form-btn">
                              Send Message
                            </button>
                          </div>
                          <p className="form-message" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mobt-50">
                    <div className="address-wrap">
                      <div className="contact-address-box">
                        <i className="bi bi-telephone" />
                        <h3>Phone</h3>
                        <p>
                          Our customer care is open from Mon-Fri, 10:00 am to
                          6:00 pm
                        </p>
                        <a
                          rel="noopener noreferrer"
                          href="tel:+880 122 4333 444"
                        >
                          <span>+880 122 4333 444</span>
                        </a>
                      </div>
                      <div className="contact-address-box">
                        <i className="bi bi-envelope" />
                        <h3>Email</h3>
                        <p>
                          Our support team will be reply in 48-h during your
                          Question.
                        </p>
                        <a href="mailto:info@example.com">
                          <span>info@example.com</span>
                        </a>
                      </div>
                      <div className="contact-address-box">
                        <i className="bi bi-geo-alt-fill" />
                        <h3>Location</h3>
                        <span className="address-map">
                          168/170, Ave 01, Mirpur DOHS, Bangladesh
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactWrapper;
