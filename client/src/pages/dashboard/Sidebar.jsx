// components/Sidebar.js
import "./Sidebar.css";
import logo from "./logo.trakcit.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <ul className="sidebar-parent">
        <li style={{ fontWeight: "bold" }}>Overview</li>
        <li>
          Expenses
        </li>
        <ul className="sidebar-Sidepages">
          <li>Insights</li>
          <li>Recommendations</li>
        </ul>
        <li>Cash Flow</li>
        <li>Profits</li>
      </ul>
      <button className="sidebar-report-btn">Financial Report</button>
    </div>
  );
};

export default Sidebar;
