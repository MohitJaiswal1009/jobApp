import React from "react";
import { FaMicrosoft, FaApple, FaGoogle, FaAmazon, FaFacebook, FaTwitter, FaGithub, FaSpotify } from "react-icons/fa";
import { SiTesla, SiNetflix, SiIbm, SiTata, SiAccenture, SiWipro, SiInfosys } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";

const PopularCompanies = () => {
  const companies = [
    { id: 1, title: "Microsoft", location: "Bengaluru, Karnataka, India", openPositions: 10, icon: <FaMicrosoft /> },
    { id: 2, title: "Tesla", location: "Hyderabad, Telangana, India", openPositions: 5, icon: <SiTesla /> },
    { id: 3, title: "Apple", location: "Bengaluru, Karnataka, India", openPositions: 20, icon: <FaApple /> },
    { id: 4, title: "Google", location: "Bengaluru, Karnataka, India", openPositions: 15, icon: <FaGoogle /> },
    { id: 5, title: "Amazon", location: "Hyderabad, Telangana, India", openPositions: 8, icon: <FaAmazon /> },
    { id: 6, title: "Facebook", location: "Gurugram, Haryana, India", openPositions: 12, icon: <FaFacebook /> },
    { id: 7, title: "Netflix", location: "Mumbai, Maharashtra, India", openPositions: 7, icon: <SiNetflix /> },
    { id: 8, title: "IBM", location: "Bengaluru, Karnataka, India", openPositions: 25, icon: <SiIbm /> },
    { id: 9, title: "Tata Consultancy Services", location: "Mumbai, Maharashtra, India", openPositions: 30, icon: <SiTata /> },
    { id: 10, title: "Accenture", location: "Bengaluru, Karnataka, India", openPositions: 18, icon: <SiAccenture /> },
    { id: 11, title: "Wipro", location: "Bengaluru, Karnataka, India", openPositions: 22, icon: <SiWipro /> },
    { id: 12, title: "Infosys", location: "Pune, Maharashtra, India", openPositions: 19, icon: <SiInfosys /> },
    { id: 13, title: "Twitter", location: "Mumbai, Maharashtra, India", openPositions: 11, icon: <FaTwitter /> },
    { id: 14, title: "GitHub", location: "Hyderabad, Telangana, India", openPositions: 6, icon: <FaGithub /> },
    { id: 15, title: "Spotify", location: "Mumbai, Maharashtra, India", openPositions: 9, icon: <FaSpotify /> },
  ];

  return (
    <div style={{ padding: "2rem", overflow: "hidden" }}>
      <div className="container">
        <h3 className="text-center mb-4">TOP COMPANIES</h3>
        <div style={{ display: "flex", whiteSpace: "nowrap", overflowX: "auto", scrollBehavior: "smooth" }}>
          {companies.map((element) => (
            <div
              className="card mx-2"
              key={element.id}
              style={{
                minWidth: "18rem",
                flex: "0 0 25%", // Show 4 cards on large screens
              }}
            >
              <div className="card-body text-center">
                <div className="mb-3" style={{ fontSize: "2rem" }}>
                  {element.icon}
                </div>
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.location}</p>
                <button className="btn btn-primary">
                  Open Positions {element.openPositions}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
