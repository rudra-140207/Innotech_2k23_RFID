import React  from "react";
import { Link ,useNavigate} from "react-router-dom";
import logoImage from '../assets/icons8-home-security-64.png';

const DashboardNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <nav className="navbar">
      <img src={logoImage} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/saved-cards">Saved Cards</Link>
        </li>
        <li>
          <button onClick={handleLogout} >Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavbar;
