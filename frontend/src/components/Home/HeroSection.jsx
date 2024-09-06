import React from "react";
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="main-container">
      <div className="blur-circle1"></div>
      <div className="blur-circle2"></div>
      <div className="landing-page">
        <div className="content">
          <div className="container">
            <div className="info">
              <h1>Looking for Your Next Job Opportunity?</h1>
              <p>Explore exciting career paths and discover your perfect job match. Find the job that fits your passion and skills today.</p>
              <Link to="/job/getall">
                <button>Apply Now</button>
              </Link>
            </div>
            <div className="image">
              <img className="main-image" src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp" alt="Inspiration" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="stats-section">
        <div className="stats-container">
          <div className="stat">
            <h2>1,23,441</h2>
            <p>Live Jobs</p>
          </div>
          <div className="stat">
            <h2>91,220</h2>
            <p>Companies</p>
          </div>
          <div className="stat">
            <h2>2,34,200</h2>
            <p>Job Seekers</p>
          </div>
          <div className="stat">
            <h2>1,03,761</h2>
            <p>Employers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
