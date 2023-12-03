import React from 'react'
import DashboardNavbar from './DashboardNavbar'

const SavedCards = () => {
  const data = [
    { name: 'Rudra Pratap Singh', status: 'Active' },
    { name: 'Atul Singh', status: 'Blocked' },
    { name: 'Aryan Srivastava', status: 'Active' },
    // { name: 'Aryan Srivastava', status: 'Blocked' },
    { name: 'Pawan Jain', status: 'Blocked' },
    // Add more data as needed
  ];
  return (
    <div>
        <DashboardNavbar />
        <div className="centered-table">
      <h2>Users Status</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default SavedCards