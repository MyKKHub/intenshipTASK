import React from 'react';
import './Dashboard.css'; // Create a Dashboard.css file for your custom styles

const Dashboard = () => {
  return (
    <div className="container dashboard-container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="dashboard-heading">Dashboard</h1>
          <p className="dashboard-text">Welcome to Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
