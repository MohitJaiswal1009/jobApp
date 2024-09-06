import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="howitworks-container">
      <h3 className="howitworks-title">How Talent Sphere Works</h3>
      <div className="howitworks-banner">
        <div className="howitworks-card">
          <FaUserPlus className="howitworks-icon" />
          <h4>Create an Account</h4>
          <p>
            Sign up to get started and unlock a world of career opportunities.
            Whether you're a job seeker or employer, it's easy to join Talent Sphere.
          </p>
        </div>
        <div className="howitworks-card">
          <MdFindInPage className="howitworks-icon" />
          <h4>Find a Job / Post a Job</h4>
          <p>
            Browse through thousands of job listings or post your own job vacancies
            to connect with top talent in the industry.
          </p>
        </div>
        <div className="howitworks-card">
          <IoMdSend className="howitworks-icon" />
          <h4>Apply for Jobs / Recruit Candidates</h4>
          <p>
            Apply for your dream job in just a few clicks, or find and recruit the best candidates
            to build your team. Talent Sphere simplifies the process for both sides.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
