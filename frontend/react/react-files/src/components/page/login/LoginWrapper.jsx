import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { loginUser } from "../../Actions/User";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function LoginWrapper() {
   const history = useHistory();
   const dispatch = useDispatch();
   const haldleSubmit = (e) => {
      e.preventDefault();
   };

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleClick = async (e) => {
      e.preventDefault();
      console.log("salom");
      console.log(email, password);
   };

   const shoot = async () => {
      console.log(email);
      dispatch(loginUser(email, password));
      
   };
   return (
      <>
         <div className="sign-up mt-100 pb-100">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
                     <div className="input-card-wrap input-card-wrap-design-2 text-center ">
                        <div className="input-card-title">
                           <h2>Login</h2>
                           <p>
                              New member?
                              <Link
                                 style={{ marginLeft: "10px" }}
                                 onClick={() => {
                                    window.scrollTo({ top: 0, behaver: "smooth" });
                                 }}
                                 to={`${process.env.PUBLIC_URL}/sign-up`}
                              >
                                 Sign Up here
                              </Link>
                           </p>
                        </div>
                        <div className="input-card-box mt-100">
                           <form onSubmit={haldleSubmit}>
                              <input
                                 type="email"
                                 placeholder="Enter Your Email"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                              />
                              <input
                                 id="password-field"
                                 type="password"
                                 className="form-control-pass"
                                 name="password"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 placeholder="Password"
                              />
                              <i className="bi bi-eye field-icon toggle-password" />
                              <button className=" mt-5" onClick={shoot}>
                                 logincha
                              </button>
                              <Link to={"#"}>Parolni Unutdingizmi</Link>
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
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default LoginWrapper;
