import React from "react";
import "./Navigation.css"; // Ensure to style navigation

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MyApp</div>
      <ul className="nav-links">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#loandetails">Loan Details</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
