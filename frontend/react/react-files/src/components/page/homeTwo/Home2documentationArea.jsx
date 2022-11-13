import React from "react";
import DocumentBox2 from "./DocumentBox2";

function Home2documentationArea() {
  return (
    <>
      <div className="documentation-area mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title mb-50 text-center">
                <h1>Our Documentations</h1>
                <p>
                  Fusce non volutpat arcu. Quisque ut est sapien. Curabitur eu
                  nulla
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="documentation-tab-wrap">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-one-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-one"
                      type="button"
                      role="tab"
                      aria-controls="pills-one"
                      aria-selected="true"
                    >
                      Create Lands
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-two-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-two"
                      type="button"
                      role="tab"
                      aria-controls="pills-two"
                      aria-selected="false"
                    >
                      Manage Lands
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-three-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-three"
                      type="button"
                      role="tab"
                      aria-controls="pills-three"
                      aria-selected="false"
                    >
                      Troubleshoot
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-four-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-four"
                      type="button"
                      role="tab"
                      aria-controls="pills-four"
                      aria-selected="false"
                    >
                      Account &amp; Billing
                    </button>
                  </li>
                </ul>
                <div
                  className="tab-content tab-content-shape"
                  id="pills-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="pills-one"
                    role="tabpanel"
                    aria-labelledby="pills-one-tab"
                  >
                    <div className="row g-4">
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-patch-check-fill"
                          title="Footnotes"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-intersect"
                          title="Copyright & legal"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bx bxs-hand-right"
                          title="Layo Getting Start"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-stop-btn-fill"
                          title="Api Questions"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-shield-fill-check"
                          title="Accound Settings"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-stack"
                          title="Backend Develop"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-two"
                    role="tabpanel"
                    aria-labelledby="pills-two-tab"
                  >
                    <div className="row g-4">
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                      <DocumentBox2
                          icon="bi bi-stack"
                          title="Backend Develop"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                      <DocumentBox2
                          icon="bi bi-shield-fill-check"
                          title="Accound Settings"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                      <DocumentBox2
                          icon="bi bi-stop-btn-fill"
                          title="Api Questions"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                      <DocumentBox2
                          icon="bx bxs-hand-right"
                          title="Layo Getting Start"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                      <DocumentBox2
                          icon="bi bi-patch-check-fill"
                          title="Footnotes"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                      <DocumentBox2
                          icon="bx bxs-hand-right"
                          title="Layo Getting Start"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-three"
                    role="tabpanel"
                    aria-labelledby="pills-three-tab"
                  >
                  <div className="row g-4">
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-patch-check-fill"
                          title="Footnotes"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-intersect"
                          title="Copyright & legal"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bx bxs-hand-right"
                          title="Layo Getting Start"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-stop-btn-fill"
                          title="Api Questions"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-shield-fill-check"
                          title="Accound Settings"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-stack"
                          title="Backend Develop"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-four"
                    role="tabpanel"
                    aria-labelledby="pills-four-tab"
                  >
                     <div className="row g-4">
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-patch-check-fill"
                          title="Footnotes"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-intersect"
                          title="Copyright & legal"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bx bxs-hand-right"
                          title="Layo Getting Start"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-stop-btn-fill"
                          title="Api Questions"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-shield-fill-check"
                          title="Accound Settings"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentBox2
                          icon="bi bi-stack"
                          title="Backend Develop"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className="shape doc-shape"
                    src={
                      process.env.PUBLIC_URL + "/images/documentation-shape.png"
                    }
                    alt="IMG"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2documentationArea;
