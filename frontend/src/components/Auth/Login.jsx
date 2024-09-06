import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import "./Login.css";  // Make sure to import your CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="LoginPageContainer">
      <div className="LoginPageInnerContainer">
        <div className="ImageContainer">
          <img src="https://i.imgur.com/MYZd7of.png" className="GroupImage" alt="Group" />
        </div>
        <div className="LoginFormContainer">
          <div className="LoginFormInnerContainer">
            {/* <div className="LogoContainer">
              <img src="https://talentsphere.ca/files/logo.png" className="logo" alt="logo" />
            </div> */}
            <header className="header">Log in</header>
            <header className="subHeader">
              Welcome to <b>Talent Sphere!</b> Please Enter your Details
            </header>
            <form onSubmit={handleLogin}>
              <div className="inputContainer">
                <label className="label" htmlFor="role">
                  <FaRegUser className="labelIcon" />
                  <span>Login As*</span>
                </label>
                <select
                  id="role"
                  className="input"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="emailAddress">
                  <MdOutlineMailOutline className="labelIcon" />
                  <span>Email Address*</span>
                </label>
                <input
                  type="email"
                  className="input"
                  id="emailAddress"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="password">
                  <RiLock2Fill className="labelIcon" />
                  <span>Password*</span>
                </label>
                <input
                  type="password"
                  className="input"
                  id="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="OptionsContainer">
                <div className="checkboxContainer">
                  <input type="checkbox" id="RememberMe" className="checkbox" />
                  <label htmlFor="RememberMe">Remember me</label>
                </div>
                <Link to="#" className="ForgotPasswordLink">Forgot Password?</Link>
              </div>
              <button className="LoginButton" type="submit">Login</button>
            </form>
            <Link to="/register" className="RegisterLink">
              Don't have an account? Register now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
