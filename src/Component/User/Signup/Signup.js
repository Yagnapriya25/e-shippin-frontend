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
  const [otpSent, setOtpSent] = useState(false); // Flag to check if OTP is sent
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

 const token = sessionStorage.getItem("token");
 const id = sessionStorage.getItem("id");

  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false); // Local loading state

  const { error, userInfo } = useSelector((state) => state.user);

  const toggle = () => setShowPassword(!showPassword);

  useEffect(() => {
    console.log("Credentials Updated: ", credentials);
  }, [credentials]);

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
    e.preventDefault();
    if (loading) return; // Prevent multiple submissions when loading
    setLoading(true); // Set loading state to true when the signup starts
    console.log("Signup form submitted with credentials: ", credentials);
    dispatch(register(credentials)).finally(() => {
      setLoading(false); // Set loading back to false after the dispatch
      setOtpSent(true); // OTP sent, now change the UI
    });
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    console.log("OTP form submitted with otp: ", otp);
    dispatch(verifyOtp({ otp, email: credentials.email }))
      .then((response) => {
        console.log(response);
        
      })
      .catch((err) => {
        console.error("OTP verification failed", err);
      })
      .finally(() => {
        setLoading(false); // Set loading back to false after the dispatch
        setTimeout(()=>{
          navigate(`/home/${token}`)
        },2000)
      });
  };

  useEffect(() => {
    if (userInfo && !userInfo.isOtpRequired) {
      console.log("OTP verified, redirecting to home page...");
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

          <form>
            {!otpSent && (
              <>
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
                </>)}
    {/* Email field should always be visible */}
            <div id="signup-form-field">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={credentials.email}
                onChange={handleChange}
                required
                readOnly={otpSent} // Make email read-only after OTP is sent
              />
            </div>
               {!otpSent && (
                <>
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
            </>
          )}
            
                

        
            {!otpSent ? (
              <div id="signup-btn">
                <button type="button" onClick={handleSubmit}>
                  {loading ? "Sending OTP..." : "Signup"}
                </button>
              </div>
            ) : (
              <>
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
                  <button type="button" onClick={handleOtpSubmit}>
                    {loading ? "Verifying OTP..." : "Verify OTP"}
                  </button>
                </div>
              </>
            )}
          </form>

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
