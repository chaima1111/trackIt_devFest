
import OverviewTable from "./components/OverviewTable";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main-content">
        <div className="dashboard-top">
          <div className="dashboard-cards">
            <div className="dashboard-cards1">
              <div className={`card ${"blue"}`}>
                <h3>Total Revenues</h3>
                <p>7,265</p>
                <span>+11.02%</span>
              </div>
              <div className={`card ${"red"}`}>
                <h3>Total Cost Flow</h3>
                <p>3,671</p>
                <span>-0.03%</span>
              </div>
              
             
            </div>
            <div className="dashboard-cards2">
            <div className={`card ${"pink"}`}>
                <h3>Total Profits</h3>
                <p>7,265</p>
                <span>+11.02%</span>
              </div>
              <div className={`card ${"light-blue"}`}>
                <h3>Total Expenses</h3>
                <p>3,671</p>
                <span>-0.03%</span>
              </div>
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

export default Dashboard;
