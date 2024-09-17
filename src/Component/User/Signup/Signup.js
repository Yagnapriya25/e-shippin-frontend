import React, { useState, useEffect } from "react";
import "./Signup.css";
import logo from "../../../Images/logo.png";
import s_img from "../../../Images/signup.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, verifyOtp } from "../../../Redux/actions/userAction";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, userInfo } = useSelector((state) => state.user);

  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [otp, setOtp] = useState('');
  const [otpRequired, setOtpRequired] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const toggle = () => setShowPassword(!showPassword);

  // Log credentials on every change
  useEffect(() => {
    console.log("Credentials Updated: ", credentials);
  }, [credentials]);

  // Log OTP on every change
  useEffect(() => {
    console.log("OTP Updated: ", otp);
  }, [otp]);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    console.log(`Input Changed: ${e.target.name} = ${e.target.value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // prevent form from refreshing the page
    console.log("Signup form submitted with credentials: ", credentials);
    dispatch(register(credentials));
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();  // prevent form from refreshing the page
    console.log("OTP form submitted with otp: ", otp);
    dispatch(verifyOtp({ otp, email: credentials.email }));
  };

  useEffect(() => {
    if (userInfo && userInfo.isOtpRequired) {
      setOtpRequired(true);
      console.log("OTP is required. Showing OTP input.");
    }

    if (userInfo && !userInfo.isOtpRequired) {
      const id = sessionStorage.getItem('id');
      const token = sessionStorage.getItem('token');
      console.log("OTP verified, redirecting to home page...");
      navigate(`/home/${id}/${token}`);
    }
  }, [userInfo, navigate]);

  return (
    <div className="signup-container h-screen">
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

          {/* Signup Form */}
          {!otpRequired ? (
            <form>
              <div id="signup-form-field">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div id="signup-form-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div id="signup-form-field">
                <input
                  type={showPassword ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div id="signup-show">
                <input type="checkbox" onClick={toggle} /> Show
              </div>
              <div id="signup-btn">
                <button type="button" onClick={handleSubmit} disabled={loading}>
                  {loading ? "Signing up..." : "Signup"}
                </button>
              </div>
            </form>
          ) : (
            // OTP Form, only visible if signup is successful
            <form>
              <div id="signup-form-field">
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              <div id="signup-btn">
                <button type="button" onClick={handleOtpSubmit} disabled={loading}>
                  {loading ? "Verifying OTP..." : "Verify OTP"}
                </button>
              </div>
            </form>
          )}

          {error && <p style={{ color: "red" }}>Error: {error}</p>}

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
