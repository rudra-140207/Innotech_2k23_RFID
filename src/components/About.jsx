import React from 'react';
import LandingNavbar from './LandingNavbar';

const About = () => {
  return (
    <div>
      <LandingNavbar />
      <div className="home-x-description">
      <h2>HOME-X: Home Security System</h2>
      <p>
        Home Security System using RFID technology for access control with a web-based interface for remote access. HOME-X offers a comprehensive solution for secure access control, ensuring the safety of your home and providing convenience through remote management.
      </p>
      <p>
        Utilizing RFID technology, HOME-X grants access to authorized individuals through unique RFID tags or cards, enhancing overall security by allowing only authorized entry.
      </p>
      <p>
        The system features a user-friendly web interface accessible remotely from any internet-enabled device. Homeowners can manage access permissions, monitor entry logs, and remotely grant or revoke access, ensuring complete control over home security at any time and from anywhere.
      </p>
      <p>
        Additionally, HOME-X integrates various security features such as motion sensors, surveillance cameras, and alarms, offering a multi-layered security system to safeguard your property comprehensively.
      </p>
      <p>
        In summary, HOME-X is an advanced and innovative home security system that utilizes RFID technology for access control, coupled with remote accessibility through a user-friendly web interface. It ensures peace of mind by offering control, convenience, and robust defense against unauthorized access.
      </p>
    </div>
    </div>
  );
};

export default About;
