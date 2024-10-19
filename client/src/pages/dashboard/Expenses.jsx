import React from "react";
import Card from "./components/Card";
import OverviewTable from "./components/OverviewTable";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

function Expenses() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main-content">

        <div className="dashboard-top">
        <div className="dashboard-cards">
        <div className="dashboard-cards1">
          <Card title="Total Revenues" amount="7,265" percentage="+11.02%" color="blue" />
          <Card title="Total Cost Flow" amount="3,671" percentage="-0.03%" color="red" />
          </div>
          <div className="dashboard-cards2">
          <Card title="Total Profits" amount="156" percentage="+15.03%" color="pink" />
          <Card title="Total Expenses" amount="2,318" percentage="+6.06%" color="light-blue" />
          </div>
        </div>

        <LineChart />
        </div>
        <h1 className="dashboard-h1">Welcome Back!</h1>
        <div className="dashboard-overview">
          <OverviewTable />
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default Expenses;
