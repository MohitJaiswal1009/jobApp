import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import "./Register.css";  // Reusing the same CSS file

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
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
            <header className="header">Register</header>
            <header className="subHeader">
              Join <b>Talent Sphere!</b> Please Enter your Details
            </header>
            <form onSubmit={handleRegister}>
              <div className="inputContainer">
                <label className="label" htmlFor="role">
                  <FaRegUser className="labelIcon" />
                  <span>Register As*</span>
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
                <label className="label" htmlFor="name">
                  <FaPencilAlt className="labelIcon" />
                  <span>Name*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  id="name"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="phone">
                  <FaPhoneFlip className="labelIcon" />
                  <span>Phone*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  id="phone"
                  placeholder="Enter your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
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
              <button className="LoginButton" type="submit">Register</button>
            </form>
            <Link to="/login" className="RegisterLink">
              Already have an account? Login now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
