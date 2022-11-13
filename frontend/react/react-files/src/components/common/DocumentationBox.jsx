import React from 'react'
import { Link } from 'react-router-dom'

function DocumentationBox(props) {
    const scrollTop = ()=> window.scrollTo({top:0,behavior: "smooth"})
  return (
    <>
     <div className="documentation-box documentation-knowledge-design-2">
                  <div className="documentation-card-header">
                    <div className="documentation-icon">
                      <img
                        src={`${process.env.PUBLIC_URL} ${props.icon}`}
                        alt="KnowledgeIMG"
                      />
                    </div>
                    <h3>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/`}
                      >
                        {props.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="documentation-content">
                    <ul>
                      <li>
                        <Link
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/document-details`}
                        >
                          <i className="bi bi-file-earmark-text" />
                          Follow up Emails
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/document-details`}
                        >
                          <i className="bi bi-file-earmark-text" />
                          Standard Post Format
                        </Link>
                      </li>
                      <li>
                        <Link 
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/document-details`}
                        >
                          <i className="bi bi-file-earmark-text" />
                          local Server Setup
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/document-details`}
                        >
                          <i className="bi bi-file-earmark-text" />
                          Plugin Installataion
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/document-details`}
                        >
                          <i className="bi bi-file-earmark-text" />
                          Subscription Model Setup
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-wrap documentation-knowledge-design-2-btn-wrap">
                    <Link
                      className="documentation-knowledge-btn"
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/document-details`}
                    >
                      View More
                    </Link>
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>   
    </>
  )
}

export default DocumentationBox