import React from "react";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Portfolio from "./components/Portfolio";
import LoanDetails from "./components/LoanDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Dashboard />
        <Portfolio />
        <LoanDetails />
      </main>
    </div>
  );
}

export default App;
