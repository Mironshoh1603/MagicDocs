import React, { useState } from "react";

function FaqWrapperArea() {
  const [showActive, SetActive] = useState(0);
  const handleActivebtn = ()=>{
    if(showActive === false || showActive === 0){
      SetActive(1)
    } else{
      SetActive(false)
    }
  }
  return (
    <>
      {/* Faq area Start*/}
      <div className="faq-area mt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="faq-form-wrap">
                <div className="faq-form-ques-box d-lg-flex align-items-center justify-content-between">
                  <div className="ques-content-wrap d-flex align-items-center">
                    <div className="ques-img">
                      <img src={process.env.PUBLIC_URL + "/images/faq-img.png"} alt="questionIMG" />
                    </div>
                    <div className="ques-content">
                      <h3>ask any questions?</h3>
                      <p>Make use of a qualified tutor to get the answer</p>
                    </div>
                  </div>
                  <div className="faq-click-btn mobt-24">
                    <span onClick={handleActivebtn} className="faq-click">Ask Questions</span>
                  </div>
                </div>
                <div className={showActive === 1 ? "faq-form fq-active": "faq-form"}>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    id="contact-form"
                    action="mail.php"
                    method="POST"
                    className="contat-input"
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Full Name"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email Address"
                        />
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={3}
                          placeholder="Your Question"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-btn-wrap">
                        <button type="submit" className="form-btn">
                          Send Now
                        </button>
                      </div>
                      <p className="form-message" />
                    </div>
                  </form>
                </div>
                {/* faq-1 */}
                <div className="faq-title mt-60">
                  <h2>License</h2>
                </div>
                <div className="faq-wrap">
                  <div className="faq-item">
                    <h5
                      className="accordion-button"
                      id="heading01"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse01"
                      aria-controls="collapse01"
                    >
                      How to upgrade Ghost-CLI to the latest version?
                    </h5>
                    <div
                      id="collapse01"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading01"
                    >
                      <div className="faq-body">
                        Morbi aliquam quis quam in luctus. Nullam tincidunt
                        pulvinar imperdiet. Sed varius, diam vitae posuere
                        semper, libero ex hendrerit nunc, ac sagittis eros metus
                        ut diam. Donec a nibh in libero maximus vehicula. Etiam
                        sit amet condimentum erat. Pellentesque ultrices
                        sagittis turpis, quis tempus ante viverra et.Morbi
                        aliquam quis quam in luctus. Nullam tincidunt pulvinar
                        imperdiet. Sed varius, diam vitae posuere semper,
                        tincidunt pulvinar imperdiet. Sed varius, diam vitae
                        posuere semper.
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading02"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse02"
                      aria-controls="collapse02"
                    >
                      How to configure mail setting?
                    </h5>
                    <div
                      id="collapse02"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading02"
                    >
                      <div className="faq-body">
                        Morbi aliquam quis quam in luctus. Nullam tincidunt
                        pulvinar imperdiet. Sed varius, diam vitae posuere
                        semper, libero ex hendrerit nunc, ac sagittis eros metus
                        ut diam. Donec a nibh in libero maximus vehicula. Etiam
                        sit amet condimentum erat. Pellentesque ultrices
                        sagittis turpis, quis tempus ante viverra et.Morbi
                        aliquam quis quam in luctus. Nullam tincidunt pulvinar
                        imperdiet. Sed varius, diam vitae posuere semper,
                        tincidunt pulvinar imperdiet. Sed varius, diam vitae
                        posuere semper.
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading03"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse03"
                      aria-controls="collapse03"
                    >
                      How to add Google analytics code in my site?
                    </h5>
                    <div
                      id="collapse03"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading03"
                    >
                      <div className="faq-body">
                        Morbi aliquam quis quam in luctus. Nullam tincidunt
                        pulvinar imperdiet. Sed varius, diam vitae posuere
                        semper, libero ex hendrerit nunc, ac sagittis eros metus
                        ut diam. Donec a nibh in libero maximus vehicula. Etiam
                        sit amet condimentum erat. Pellentesque ultrices
                        sagittis turpis, quis tempus ante viverra et.Morbi
                        aliquam quis quam in luctus. Nullam tincidunt pulvinar
                        imperdiet. Sed varius, diam vitae posuere semper,
                        tincidunt pulvinar imperdiet. Sed varius, diam vitae
                        posuere semper.
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading04"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse04"
                      aria-controls="collapse04"
                    >
                      How to manage your team staff in Ghost?
                    </h5>
                    <div
                      id="collapse04"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading04"
                    >
                      <div className="faq-body">
                        Morbi aliquam quis quam in luctus. Nullam tincidunt
                        pulvinar imperdiet. Sed varius, diam vitae posuere
                        semper, libero ex hendrerit nunc, ac sagittis eros metus
                        ut diam. Donec a nibh in libero maximus vehicula. Etiam
                        sit amet condimentum erat. Pellentesque ultrices
                        sagittis turpis, quis tempus ante viverra et.Morbi
                        aliquam quis quam in luctus. Nullam tincidunt pulvinar
                        imperdiet. Sed varius, diam vitae posuere semper,
                        tincidunt pulvinar imperdiet. Sed varius, diam vitae
                        posuere semper.
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading05"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse05"
                      aria-controls="collapse05"
                    >
                      What page Builder is integrated into Regarn WordPress
                      Theme
                    </h5>
                    <div
                      id="collapse05"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading05"
                    >
                      <div className="faq-body">
                        Morbi aliquam quis quam in luctus. Nullam tincidunt
                        pulvinar imperdiet. Sed varius, diam vitae posuere
                        semper, libero ex hendrerit nunc, ac sagittis eros metus
                        ut diam. Donec a nibh in libero maximus vehicula. Etiam
                        sit amet condimentum erat. Pellentesque ultrices
                        sagittis turpis, quis tempus ante viverra et.Morbi
                        aliquam quis quam in luctus. Nullam tincidunt pulvinar
                        imperdiet. Sed varius, diam vitae posuere semper,
                        tincidunt pulvinar imperdiet. Sed varius, diam vitae
                        posuere semper.
                      </div>
                    </div>
                  </div>
                </div>
                {/* faq-2 */}
                <div className="faq-title mt-60">
                  <h2>Pricing &amp; Support</h2>
                </div>
                <div className="faq-wrap">
                  <div className="faq-item">
                    <h5
                      id="heading06"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse06"
                      aria-controls="collapse06"
                    >
                      Proin gravida id magna et interdum Nunc sodales?
                    </h5>
                    <div
                      id="collapse06"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading06"
                    >
                      <div className="faq-body">
                        Morbi aliquam quis quam in luctus. Nullam tincidunt
                        pulvinar imperdiet. Sed varius, diam vitae posuere
                        semper, libero ex hendrerit nunc, ac sagittis eros metus
                        ut diam. Donec a nibh in libero maximus vehicula. Etiam
                        sit amet condimentum erat. Pellentesque ultrices
                        sagittis turpis, quis tempus ante viverra et.Morbi
                        aliquam quis quam in luctus. Nullam tincidunt pulvinar
                        imperdiet. Sed varius, diam vitae posuere semper,
                        tincidunt pulvinar imperdiet. Sed varius, diam vitae
                        posuere semper.
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading07"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse07"
                      aria-controls="collapse07"
                    >
                      Mauris ullamcorper, risus eget eleifend accumsan?
                    </h5>
                    <div
                      id="collapse07"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading07"
                    >
                      <div className="faq-body">
                        Morbi aliquam quis quam in luctus. Nullam tincidunt
                        pulvinar imperdiet. Sed varius, diam vitae posuere
                        semper, libero ex hendrerit nunc, ac sagittis eros metus
                        ut diam. Donec a nibh in libero maximus vehicula. Etiam
                        sit amet condimentum erat. Pellentesque ultrices
                        sagittis turpis, quis tempus ante viverra et.Morbi
                        aliquam quis quam in luctus. Nullam tincidunt pulvinar
                        imperdiet. Sed varius, diam vitae posuere semper,
                        tincidunt pulvinar imperdiet. Sed varius, diam vitae
                        posuere semper.
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading08"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse08"
                      aria-controls="collapse08"
                    >
                      Quisque varius a sollicitudin nulla consequat ut?
                    </h5>
                    <div
                      id="collapse08"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading08"
                    >
                      <div className="faq-body">
                        Morbi aliquam quis quam in luctus. Nullam tincidunt
                        pulvinar imperdiet. Sed varius, diam vitae posuere
                        semper, libero ex hendrerit nunc, ac sagittis eros metus
                        ut diam. Donec a nibh in libero maximus vehicula. Etiam
                        sit amet condimentum erat. Pellentesque ultrices
                        sagittis turpis, quis tempus ante viverra et.Morbi
                        aliquam quis quam in luctus. Nullam tincidunt pulvinar
                        imperdiet. Sed varius, diam vitae posuere semper,
                        tincidunt pulvinar imperdiet. Sed varius, diam vitae
                        posuere semper.
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading09"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse09"
                      aria-controls="collapse09"
                    >
                      Mauris ullamcorper, risus eget eleifend accumsan?
                    </h5>
                    <div
                      id="collapse09"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading09"
                    >
                      <div className="faq-body">
                        Morbi aliquam quis quam in luctus. Nullam tincidunt
                        pulvinar imperdiet. Sed varius, diam vitae posuere
                        semper, libero ex hendrerit nunc, ac sagittis eros metus
                        ut diam. Donec a nibh in libero maximus vehicula. Etiam
                        sit amet condimentum erat. Pellentesque ultrices
                        sagittis turpis, quis tempus ante viverra et.Morbi
                        aliquam quis quam in luctus. Nullam tincidunt pulvinar
                        imperdiet. Sed varius, diam vitae posuere semper,
                        tincidunt pulvinar imperdiet. Sed varius, diam vitae
                        posuere semper.
                      </div>
                    </div>
                  </div>
                </div>
                {/* faq-3 */}
                <div className="faq-title mt-60">
                  <h2>Developer Documentation</h2>
                </div>
                <div className="faq-wrap">
                  <div className="faq-item">
                    <h5
                      id="heading10"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse10"
                      aria-controls="collapse10"
                    >
                      Proin gravida id magna et interdum Nunc sodales?
                    </h5>
                    <div
                      id="collapse10"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading10"
                    >
                      <div className="faq-body">
                        Morbi aliquam quis quam in luctus. Nullam tincidunt
                        pulvinar imperdiet. Sed varius, diam vitae posuere
                        semper, libero ex hendrerit nunc, ac sagittis eros metus
                        ut diam. Donec a nibh in libero maximus vehicula. Etiam
                        sit amet condimentum erat. Pellentesque ultrices
                        sagittis turpis, quis tempus ante viverra et.Morbi
                        aliquam quis quam in luctus. Nullam tincidunt pulvinar
                        imperdiet. Sed varius, diam vitae posuere semper,
                        tincidunt pulvinar imperdiet. Sed varius, diam vitae
                        posuere semper.
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading11"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse11"
                      aria-controls="collapse11"
                    >
                      Mauris ullamcorper, risus eget eleifend accumsan?
                    </h5>
                    <div
                      id="collapse11"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading11"
                    >
                      <div className="faq-body">
                        Morbi aliquam quis quam in luctus. Nullam tincidunt
                        pulvinar imperdiet. Sed varius, diam vitae posuere
                        semper, libero ex hendrerit nunc, ac sagittis eros metus
                        ut diam. Donec a nibh in libero maximus vehicula. Etiam
                        sit amet condimentum erat. Pellentesque ultrices
                        sagittis turpis, quis tempus ante viverra et.Morbi
                        aliquam quis quam in luctus. Nullam tincidunt pulvinar
                        imperdiet. Sed varius, diam vitae posuere semper,
                        tincidunt pulvinar imperdiet. Sed varius, diam vitae
                        posuere semper.
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading12"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse12"
                      aria-controls="collapse12"
                    >
                      Quisque varius a sollicitudin nulla consequat ut?
                    </h5>
                    <div
                      id="collapse12"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading12"
                    >
                      <div className="faq-body">
                        Morbi aliquam quis quam in luctus. Nullam tincidunt
                        pulvinar imperdiet. Sed varius, diam vitae posuere
                        semper, libero ex hendrerit nunc, ac sagittis eros metus
                        ut diam. Donec a nibh in libero maximus vehicula. Etiam
                        sit amet condimentum erat. Pellentesque ultrices
                        sagittis turpis, quis tempus ante viverra et.Morbi
                        aliquam quis quam in luctus. Nullam tincidunt pulvinar
                        imperdiet. Sed varius, diam vitae posuere semper,
                        tincidunt pulvinar imperdiet. Sed varius, diam vitae
                        posuere semper.
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading13"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse13"
                      aria-controls="collapse13"
                    >
                      Mauris ullamcorper, risus eget eleifend accumsan?
                    </h5>
                    <div
                      id="collapse13"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading13"
                    >
                      <div className="faq-body">
                        Morbi aliquam quis quam in luctus. Nullam tincidunt
                        pulvinar imperdiet. Sed varius, diam vitae posuere
                        semper, libero ex hendrerit nunc, ac sagittis eros metus
                        ut diam. Donec a nibh in libero maximus vehicula. Etiam
                        sit amet condimentum erat. Pellentesque ultrices
                        sagittis turpis, quis tempus ante viverra et.Morbi
                        aliquam quis quam in luctus. Nullam tincidunt pulvinar
                        imperdiet. Sed varius, diam vitae posuere semper,
                        tincidunt pulvinar imperdiet. Sed varius, diam vitae
                        posuere semper.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mobt-50">
              <div className="category-wrap">
                <div className="category-title">
                  <h3>FAQ Category</h3>
                </div>
                <div className="category-list">
                  <ul>
                    <li>
                      License <i className="bi bi-arrow-right" />
                    </li>
                    <li>
                      Pricing &amp; Support
                      <i className="bi bi-arrow-right" />
                    </li>
                    <li>
                      For Freelancers <i className="bi bi-arrow-right" />
                    </li>
                    <li>
                      Pricing Plans <i className="bi bi-arrow-right" />
                    </li>
                    <li>
                      Purchasing Online <i className="bi bi-arrow-right" />
                    </li>
                    <li>
                      Developer Documentation
                      <i className="bi bi-arrow-right" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Faq area End */}
    </>
  );
}

export default FaqWrapperArea;
