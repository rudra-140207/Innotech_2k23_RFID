import React from 'react';
import LandingNavbar from './LandingNavbar'; 

const LandingPage = () => {
  return (
    <div>
      <LandingNavbar />
      <div className="landing-content">
        <h2>Welcome to Our Project</h2>
        <p>This is the landing page content describing your project features.</p>
        
      </div>
    </div>
  );
};

export default LandingPage;
