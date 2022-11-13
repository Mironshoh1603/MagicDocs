import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

function SignUpWapper() {
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("salom");
   };
   return (
      <>
         <div className="sign-up mt-100 pb-100">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
                     <div className="input-card-wrap text-center">
                        <div className="input-card-title">
                           <h2>Sign Up</h2>
                           <p>
                              Do you already have an account?
                              <Link
                                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                 to={`${process.env.PUBLIC_URL}/login`}
                              >
                                 Log in here
                              </Link>
                           </p>
                        </div>
                        <div className="input-card-box mt-100">
                           <form onSubmit={handleSubmit} action="index.html">
                              <input type="email" placeholder="Enter Your Email" />
                              <button className="mt-50">Sign Up</button>
                           </form>
                           <h3>OR</h3>
                           <div className="input-card-social">
                              <ul>
                                 <li>
                                    <Link to={"#"}>
                                       <i className="bx bxl-google" />
                                       Continue with google
                                    </Link>
                                 </li>
                                 <li>
                                    <Link to={"#"}>
                                       <i className="bx bxl-facebook" />
                                       Continue whit facebook
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                           <p className="mt-50">
                              By clicking the "Sign up" button, you create a Cobiro account, and you
                              agree to Cobiro's
                              <Link to={"#"}>Terms &amp; Conditions</Link>,
                              <Link to={"#"}>Privacy &amp; Policy</Link>.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default SignUpWapper;
