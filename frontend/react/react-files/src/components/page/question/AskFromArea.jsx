import React from "react";
import Select from "react-select";

function AskFromArea() {
  const optionsForQuestion = [
    { value: "1", label: "UI/UX" },
    { value: "2", label: "Web" },
    { value: "3", label: "CEO" },
  ];
  return (
    <>
      <div className="ask-form-section pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="ask-form-header">
                <h5>Ask Your Question?</h5>
                <div className="topic-select">
                  <Select
                    placeholder="Select Topic"
                    options={optionsForQuestion}
                  ></Select>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="ask-form-area">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row justify-content-center">
                    <div className="col-sm-6">
                      <input type="text" placeholder="Your Full Name" />
                    </div>
                    <div className="col-sm-6">
                      <input type="text" placeholder="Your Email Address" />
                    </div>
                    <div className="col-12">
                      <textarea
                        rows={5}
                        placeholder="Your Question"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-sm-6 text-center">
                      <button className="form-submit-btn">Send Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AskFromArea;
