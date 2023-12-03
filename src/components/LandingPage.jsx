import React, { useState } from "react";
import LandingNavbar from "./LandingNavbar";
import img1  from "../assets/collaborative.png"
import img2 from "../assets/icons8-magnetic-card-96.png"
import img3 from "../assets/lock.png"

const LandingPage = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Saved Cards",
      description: "View and manage the list of saved RFID cards.",
      image: img3,
    },
    {
      id: 2,
      title: "Block Card",
      description:
        "Block unauthorized or lost cards from accessing the premises.",
      image: img2,
    },
    {
      id: 3,
      title: "Entry Log",
      description:
        "Keep track of all entries with a detailed log of access times.",
      image: img1,
    },
  ];

  const toggleFeature = (id) => {
    setSelectedFeature(selectedFeature === id ? null : id);
  };

  return (
    <div>
      <LandingNavbar />
      <div className="landing-page">
        <header>
          <h1> HOME-X </h1>
          <b><p>Home Security System</p></b>
          <p>A comprehensive solution for secure access control</p>
        </header>

        <section className="description">
          <h2>Our System</h2>
          <p>HOME-X is an advanced and innovative home security system designed to provide <br></br> comprehensive access control using RFID technology.<br></br> The system is equipped with a web-based interface that enables remote access, ensuring enhanced security and convenience for homeowners.
          </p>
        </section>

        <section className="features">
          <h2>Features</h2>
          <div className="feature-list">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`feature ${
                  selectedFeature === feature.id ? "selected" : ""
                }`}
                onClick={() => toggleFeature(feature.id)}
              >
                <h3>{feature.title}</h3>
                {selectedFeature === feature.id && (
                  <p className="feature-description">{feature.description}</p>
                )}

                <div className="feature-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
