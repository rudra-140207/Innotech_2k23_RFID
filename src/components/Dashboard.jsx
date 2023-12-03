import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardNavbar from "./DashboardNavbar";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/api/entry-log");
      console.log("Fetched data:", res.data);
      setData(res.data.reverse());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log("Data state:", data);

  const getNameForValue = (value) => {
    // Your substring checking logic and mapping of substrings to names
    if (value.includes("23 39 1")) {
      return "Rudra Pratap Singh";
    } else if (value.includes("108 199")) {
      return "Atul Singh";
    }else if (value.includes("23 55 2")) {
      return "Aryan Srivastava";
    }
    // Add more conditions as needed
    return value; // Return the value if no match found
  };

  return (
    <div className="dashboard">
      <DashboardNavbar />
      <h2>Dashboard</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="table-data">{getNameForValue(item.Value)}</td>
              <td className="table-data">{item.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
  

export default Dashboard;
