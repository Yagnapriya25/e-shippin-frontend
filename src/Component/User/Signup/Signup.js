import React, { useState } from "react";
import "./Signup.css";
import logo from "../../../Images/logo.png";
import s_img from "../../../Images/signup.png";
import { Link } from "react-router-dom";

export default function Signup() {
  const [showPasword,setShowPassword]=useState(true);

  const toggle = ()=>setShowPassword(!showPasword);

  return (
    <div className="signup-container">
      <figure id="signup-logo">
        <img src={logo} alt="logo" />
      </figure>
      <div id="signup-form-container">
        <div id="signup-form-img">
          <figure>
            <img src={s_img} alt="signup-img" />
          </figure>
        </div>
        <div id="signup-form">
          <div id="signup-head">
            <h5>WELCOME TO E-SHIPIN</h5>
            <h6>Ship Smarter Today</h6>
          </div>
          <div id="signup-form-field">
            <input type="text" placeholder="Username" />
          </div>
          <div id="signup-form-field">
            <input type="email" placeholder="Email" />
          </div>
          <div id="signup-form-field">
            <input type={showPasword ? "password" : "text"} placeholder="Password" />
          </div>
          <div id="signup-show">
            <input type="checkbox" onClick={toggle} /> Show
          </div>
          <div id="signup-btn">
            <button>Signup</button>
          </div>
          <div id="signup-nav">
            <span>
              Already Have An Account?
              <Link
                to={"/"}
                style={{ color: "#2D46C9", textDecoration: "none" }}
              >
                Signin
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
