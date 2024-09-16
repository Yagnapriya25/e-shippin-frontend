import React, { useState } from "react";
import "./Signup.css";
import logo from "../../../Images/logo.png";
import s_img from "../../../Images/signup.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupSuccess } from "../../../Redux/slices/userSlice";
import { register, verifyOtp } from "../../../Redux/actions/userAction";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading,error,userInfo}=useSelector((state)=>state.user);

  const [credentials,setCredentials]=useState({
    username:'',
    email:'',
    password:''
  })
  const [otp,setOtp]=useState();
  const [otpRequired,setOtpRequired]=useState(false);
  const [showPasword, setShowPassword] = useState(true);

  const toggle = () => setShowPassword(!showPasword);

  const handleChange = (e)=>{
    setCredentials({
      ...credentials,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e)=>{
e.preventDefault();
console.log(credentials);
dispatch(register(credentials));
  }

  const handleOtpSubmit = (e)=>{
  e.preventDefault();
  dispatch(verifyOtp(otp));
  }

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
          <div id="signup-form-field">
            <input type="text" placeholder="Username" value={credentials.username} onChange={handleChange} />
          </div>
          <div id="signup-form-field">
            <input type="email" placeholder="Email" value={credentials.email} onChange={handleChange}/>
          </div>
          <div id="signup-form-field">
            <input
              type={showPasword ? "password" : "text"}
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <div id="signup-show">
            <input type="checkbox" onClick={toggle} /> Show
          </div>
          <div id="signup-btn">
            <button onClick={handleSubmit}>Signup</button>
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
