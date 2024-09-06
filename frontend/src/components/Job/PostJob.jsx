import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("default");

  const { isAuthorized, user } = useContext(Context);

  const handleJobPost = async (e) => {
    e.preventDefault();
    if (salaryType === "Fixed Salary") {
      setSalaryFrom("");
      setSalaryTo("");
    } else if (salaryType === "Ranged Salary") {
      setFixedSalary("");
    } else {
      setSalaryFrom("");
      setSalaryTo("");
      setFixedSalary("");
    }
    await axios
      .post(
        "http://localhost:4000/api/v1/job/post",
        fixedSalary.length >= 4
          ? {
              title,
              description,
              category,
              country,
              city,
              location,
              fixedSalary,
            }
          : {
              title,
              description,
              category,
              country,
              city,
              location,
              salaryFrom,
              salaryTo,
            },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();
  if (!isAuthorized || (user && user.role !== "Employer")) {
    navigateTo("/");
  }

  return (
    <div>
      <div className="container pt-8 pb-8">
        <h3 className="text-center mb-4 pt-4">POST NEW JOB</h3>
        <div className="row">
          <div className="col-md-4 pt-4">
            <img
              src="https://img.freepik.com/premium-photo/hr-managers-choosing-best-candidate-work-position-using-huge-magnifying-glass_207634-16259.jpg?ga=GA1.1.1784979297.1713721419&semt=ais_hybrid"
              alt="Post Job"
              className="img-fluid rounded"
              style={{ maxWidth: "100%", maxheight: "500px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card p-4">
              <form onSubmit={handleJobPost}>
                <div className="mb-3">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Job Title"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Select Category</option>
                    <option value="Graphics & Design">Graphics & Design</option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="Frontend Web Development">
                      Frontend Web Development
                    </option>
                    <option value="MERN Stack Development">
                      MERN STACK Development
                    </option>
                    <option value="Account & Finance">Account & Finance</option>
                    <option value="Artificial Intelligence">
                      Artificial Intelligence
                    </option>
                    <option value="Video Animation">Video Animation</option>
                    <option value="MEAN Stack Development">
                      MEAN STACK Development
                    </option>
                    <option value="MEVN Stack Development">
                      MEVN STACK Development
                    </option>
                    <option value="Data Entry Operator">Data Entry Operator</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <select
                    value={salaryType}
                    onChange={(e) => setSalaryType(e.target.value)}
                    className="form-select"
                  >
                    <option value="default">Select Salary Type</option>
                    <option value="Fixed Salary">Fixed Salary</option>
                    <option value="Ranged Salary">Ranged Salary</option>
                  </select>
                  {salaryType === "default" ? (
                    <p className="text-danger">Please provide Salary Type *</p>
                  ) : salaryType === "Fixed Salary" ? (
                    <input
                      type="number"
                      placeholder="Enter Fixed Salary"
                      value={fixedSalary}
                      onChange={(e) => setFixedSalary(e.target.value)}
                      className="form-control mt-2"
                    />
                  ) : (
                    <div className="d-flex gap-2 mt-2">
                      <input
                        type="number"
                        placeholder="Salary From"
                        value={salaryFrom}
                        onChange={(e) => setSalaryFrom(e.target.value)}
                        className="form-control"
                      />
                      <input
                        type="number"
                        placeholder="Salary To"
                        value={salaryTo}
                        onChange={(e) => setSalaryTo(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <textarea
                    rows="10"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Job Description"
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Create Job
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
