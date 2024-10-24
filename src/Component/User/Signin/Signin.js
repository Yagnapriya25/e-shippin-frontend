import React, { useEffect, useState } from "react";
import img from "../../../Images/logo.png";
import img2 from "../../../Images/signin.png";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
import { useDispatch, useSelector } from "react-redux"; 
import { login } from "../../../Redux/actions/userAction";

export default function Signin() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { error, userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      setErrorMessage(error); // Set error message if available
    }
  }, [error]);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setErrorMessage(''); // Reset error message on submit

    dispatch(login({ email: credentials.email, password: credentials.password }))
      .then(() => {
        // Navigate on successful login
        navigate(`/home/${token}`); // or wherever you want to navigate
      })
      .catch((err) => {
        console.error("Login failed:", err);
        setErrorMessage("Login failed. Please check your credentials."); // Update error message
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const toggle = () => setShowPassword(!showPassword);

  return (
    <div className="signin-container h-screen">
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
                YOU SHOULD LEARN FROM YOUR COMPETITOR, BUT NEVER COPY... COPY AND YOU DIE....
              </p>
            </div>
          </div>
          <form onSubmit={handleLoginSubmit}>
            <div id="signin-form">
              <div id="sigin-welcome">
                <h5>E-SHIPIN</h5>
                <p>Welcome</p>
              </div>
              {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
              <div id="signin-form-field">
                <input type="email" placeholder="Email" name="email" value={credentials.email} onChange={handleChange} required />
              </div>
              <div id="signin-form-field">
                <input
                  type={!showPassword ? "password" : "text"}
                  placeholder="Password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div id="signin-show">
              <input type="checkbox" onClick={toggle} /> Show
            </div>
            <div id="signin-nav">
              <Link to={"/forget"} style={{ color: "#D76C1E", textDecoration: "none" }}>
                Forget Password?
              </Link>
              <span>
                Don't Have An Account?
                <Link to={"/signup"} style={{ color: "#D76C1E", textDecoration: "none" }}>
                  Signup
                </Link>
              </span>
            </div>
            <div id="signin-btn">
              <button type="submit" disabled={loading}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
