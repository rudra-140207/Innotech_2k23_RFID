import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LandingNavbar from "./LandingNavbar";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      const { data, status } = response;

      if (status === 200 && data.token) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  return (
    <div className="login-page">
      <LandingNavbar />
      <h2>Home Security System</h2>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>{message}</div>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
