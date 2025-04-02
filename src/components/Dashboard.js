import React from "react";


const Dashboard = () => {
  return (
    <div id="dashboard" className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat-item">Total Loans: <span>100</span></div>
        <div className="stat-item">Notifications: <span>8</span></div>
        {/* Additional metrics can be added here */}
      </div>
    </div>
  );
};

export default Dashboard;
