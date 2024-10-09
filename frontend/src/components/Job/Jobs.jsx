import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import './job.css'; // Import your custom CSS file

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    try {
      axios
        .get("http://localhost:4000/api/v1/job/getall", {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!isAuthorized) {
    navigateTo("/");
  }

  return (
    <section className="jobs page">
      {/* Header Section with Background Image */}
      <div className="header-section">
        <img
          src="https://img.freepik.com/free-vector/woman-holding-magnifying-glass-picking-man_1262-21304.jpg?size=626&ext=jpg&ga=GA1.1.1784979297.1713721419&semt=ais_hybrid" // You can replace this with the photo you will provide
          alt="Career Opportunities"
          className="header-image"
        />
        <div className="header-text">
          <h1>Explore New Career Opportunities</h1>
          <p>Find jobs that match your passion and skillset.</p>
        </div>
      </div>

      {/* Job Cards Section */}
      <div className="container">
        <h2 className="page-title">Available Jobs</h2>
        <div className="jobs-list">
          {jobs.jobs &&
            jobs.jobs.map((job) => (
              <div className="job-card" key={job._id}>
                <div className="job-card-header">
                  <h2>{job.title}</h2>
                  <p className="location">{job.company}</p>
                </div>
                <div className="job-card-body">
                  <p className="job-description">
                    {job.description.length > 100
                      ? `${job.description.substring(0, 100)}...`
                      : job.description}
                  </p>
                </div>
                <div className="job-card-footer">
                  <Link to={`/job/${job._id}`} className="btn-details">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
