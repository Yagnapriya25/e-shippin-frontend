import React, { useState } from "react";
import img from "../../../Images/logo.png";
import img2 from "../../../Images/signin.png";
import { Link } from "react-router-dom";
import './Signin.css'

export default function Signin() {
  const [showPassword, setShowPassword] = useState();

  const toggle = () => setShowPassword(!showPassword);

  return (
    <div className="signin-container">
      <div id="logo">
        <img src={img} alt="logo" />
      </div>
      <div id="signin">
        <div id="signin-box">
          <div id="signin-msg">
            <div id="signin-msg-img">
              <img src={img2} alt="shop" />
            </div>
            <div id="signin-msg-content">
              <p>
                YOUR SHOULD LEARN FROM YOUR COMPETITOR,BUT NEVER COPY... COPY
                AND YOU DIE
              </p>
            </div>
          </div>
          <div id="signin-form">
          <div id="sigin-welcome">
          <h5>E-SHIPIN</h5>
          <p>Welcome</p>
          </div>
            <div id="signin-form-field">
              <input type="email" placeholder="Email" />
            </div>
            <div id="signin-form-field">
              <input
                type={!showPassword ? "password" : "text"}
                placeholder="Password"
              />
            </div>
            <div id="signin-form-field">
              <input type="checkbox" onClick={toggle} /> Show
            </div>
            <div id="signin-btn">
              <button>Signin</button>
            </div>
            <div id="signin-nav">
              <span>
                Don't Have An Account?<Link to={"/"}>Signup</Link>
              </span>
              <Link>Forget Password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
