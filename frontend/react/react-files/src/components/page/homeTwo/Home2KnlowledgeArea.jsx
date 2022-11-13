import React from "react";
import KnowledgeCard from "./KnowledgeCard";

function Home2KnlowledgeArea() {
  return (
    <>
      <div className="knowledge-area mt-100 mb-100" id="knw">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title mb-70 text-center">
                <h1>Knowledge Base</h1>
                <p>
                  Fusce non volutpat arcu. Quisque ut est sapien. Curabitur eu
                  nulla
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 knowledge-shape-wrap">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <KnowledgeCard icon="bi bi-patch-check-fill" title="Extensions" />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <KnowledgeCard icon="bi bi-intersect" title="Admin Panel" />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <KnowledgeCard icon="bx bxs-extension" title="Administration" />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <KnowledgeCard
                icon="bi bi-stop-btn-fill"
                title="Online Documentation"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <KnowledgeCard
                icon="bx bxs-extension"
                title="Code Syntax Highlight"
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <KnowledgeCard icon="bi bi-tv-fill" title="Getting Started" />
            </div>
          </div>
        </div>
        <img
          className="shape kw-shape"
          src={process.env.PUBLIC_URL + "/images/knowledge-shape.png"}
          alt="IMG"
        />
      </div>
    </>
  );
}

export default Home2KnlowledgeArea;
