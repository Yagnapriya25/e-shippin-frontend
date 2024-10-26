import React, { useEffect, useState } from "react";
import img from "../../../Images/logo.png";
import img2 from "../../../Images/signin.png";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
import { useDispatch, useSelector } from "react-redux"; 
import { login } from "../../../Redux/actions/userAction";

export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { error } = useSelector((state) => state.user);

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

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message on submit

    try {
      const result = await dispatch(login(credentials));
      if (result && result.user && result.token) {
        // Navigate to home if login is successful
        navigate(`/home/${localStorage.getItem("token")}`);
      }
    } catch (err) {
      console.error("Login failed:", err);
      setErrorMessage("Login failed. Please check your credentials."); // Update error message
    }
  };

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
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
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
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
