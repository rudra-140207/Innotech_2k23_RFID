import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import About from './components/About';
import "./styles/LandingNavbar.scss"
import "./styles/Login.scss";
import "./styles/LandingPage.scss";
import "./styles/DashBoard.scss";
import "./styles/About.scss"
import "./styles/SavedCards.scss"
import SavedCards from './components/SavedCards';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/saved-cards" element={<SavedCards />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
