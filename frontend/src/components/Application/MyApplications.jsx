import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MyApplications = () => {
  const { user } = useContext(Context);
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    try {
      if (user && user.role === "Employer") {
        axios
          .get("http://localhost:4000/api/v1/application/employer/getall", {
            withCredentials: true,
          })
          .then((res) => {
            setApplications(res.data.applications);
          });
      } else {
        axios
          .get("http://localhost:4000/api/v1/application/jobseeker/getall", {
            withCredentials: true,
          })
          .then((res) => {
            setApplications(res.data.applications);
          });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, [isAuthorized]);

  if (!isAuthorized) {
    navigateTo("/");
  }

  const deleteApplication = (id) => {
    try {
      axios
        .delete(`http://localhost:4000/api/v1/application/delete/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success(res.data.message);
          setApplications((prevApplications) =>
            prevApplications.filter((application) => application._id !== id)
          );
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const openModal = (application) => {
    setSelectedApplication(application);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedApplication(null);
  };

  const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop(); // Extracts filename from URL
    link.click();
  };

  return (
    <section className="my_applications page">
      <div className="container">
        <h1>{user && user.role === "Job Seeker" ? "My Applications" : "Applications From Job Seekers"}</h1>
        {applications.length <= 0 ? (
          <h4>No Applications Found</h4>
        ) : (
          applications.map((element, index) => (
            <div
              className="job_seeker_card"
              key={element._id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "1rem",
                marginBottom: "1rem",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div className="summary" style={{ flex: "1" }}>
                <p><strong>Serial No:</strong> {index + 1}</p>
                <p><strong>Name:</strong> {element.name}</p>
              </div>
              <div className="actions" style={{ display: "flex", gap: "1rem" }}>
                <button
                  onClick={() => openModal(element)}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#3498db",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
                {user && user.role === "Job Seeker" && (
                  <button
                    onClick={() => deleteApplication(element._id)}
                    style={{
                      padding: "0.5rem 1rem",
                      backgroundColor: "#e74c3c",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Delete Application
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      {modalOpen && selectedApplication && (
        <div
          className="modal"
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="modal_content"
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "2rem",
              width: "80%",
              maxWidth: "600px",
            }}
          >
            <h2>Application Details</h2>
            <p><strong>Serial No:</strong> {applications.findIndex(app => app._id === selectedApplication._id) + 1}</p>
            <p><strong>Name:</strong> {selectedApplication.name}</p>
            <p><strong>Email:</strong> {selectedApplication.email}</p>
            <p><strong>Phone:</strong> {selectedApplication.phone}</p>
            <p><strong>Address:</strong> {selectedApplication.address}</p>
            <p><strong>Cover Letter:</strong> {selectedApplication.coverLetter}</p>
            <p>
              <strong>Resume:</strong>
              <img
                src={selectedApplication.resume.url}
                alt="resume"
                style={{ maxWidth: "400px", maxHeight: "400px", borderRadius: "4px", marginLeft: "1rem" }}
              />
              <button
                onClick={() => handleDownload(selectedApplication.resume.url)}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#3498db",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginLeft: "1rem"
                }}
              >
                Download Resume
              </button>
            </p>
            <button
              onClick={closeModal}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#e74c3c",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "1rem"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyApplications;
