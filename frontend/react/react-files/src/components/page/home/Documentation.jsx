import React from "react";
import DocumentationCard from "./DocumentationCard";

function Documentation() {
  return (
    <>
      <div className="documentation-area mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center mb-50">
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
              <div className="documentation-tab-wrap documentation-tab-wrap-design-2">
                <ul
                  className="nav nav-pills nav-pills-design-2"
                  id="pills-tab"
                  role="tablist"
                >
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
                        <DocumentationCard
                          icon="/images/icons/doc-icon-1.svg"
                          cardTitle="Footnotes"
                          cardNumber="01"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-2.svg"
                          cardTitle="Copyright & Legal"
                          cardNumber="02"
                        />{" "}
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-3.svg"
                          cardTitle="Layo Getting Start"
                          cardNumber="03"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-4.svg"
                          cardTitle="Api Questions"
                          cardNumber="04"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-5.svg"
                          cardTitle="Accound Settings"
                          cardNumber="05"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-6.svg"
                          cardTitle="Backend Develop"
                          cardNumber="06"
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
                        <DocumentationCard
                          icon="/images/icons/doc-icon-1.svg"
                          cardTitle="Footnotes"
                          cardNumber="07"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-2.svg"
                          cardTitle="Copyright & Legal"
                          cardNumber="02"
                        />{" "}
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-3.svg"
                          cardTitle="Layo Getting Start"
                          cardNumber="03"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-4.svg"
                          cardTitle="Api Questions"
                          cardNumber="08"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-5.svg"
                          cardTitle="Accound Settings"
                          cardNumber="09"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-6.svg"
                          cardTitle="Backend Develop"
                          cardNumber="10"
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
                        <DocumentationCard
                          icon="/images/icons/doc-icon-1.svg"
                          cardTitle="Footnotes"
                          cardNumber="07"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-2.svg"
                          cardTitle="Copyright & Legal"
                          cardNumber="02"
                        />{" "}
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-3.svg"
                          cardTitle="Layo Getting Start"
                          cardNumber="03"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-4.svg"
                          cardTitle="Api Questions"
                          cardNumber="08"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-5.svg"
                          cardTitle="Accound Settings"
                          cardNumber="09"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-6.svg"
                          cardTitle="Backend Develop"
                          cardNumber="10"
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
                        <DocumentationCard
                          icon="/images/icons/doc-icon-1.svg"
                          cardTitle="Footnotes"
                          cardNumber="01"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-2.svg"
                          cardTitle="Copyright & Legal"
                          cardNumber="02"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-3.svg"
                          cardTitle="Layo Getting Start"
                          cardNumber="03"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-4.svg"
                          cardTitle="Api Questions"
                          cardNumber="04"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-5.svg"
                          cardTitle="Accound Settings"
                          cardNumber="05"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <DocumentationCard
                          icon="/images/icons/doc-icon-6.svg"
                          cardTitle="Backend Develop"
                          cardNumber="06"
                        />
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

export default Documentation;
