// components/LineChart.js

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./LineChart.css";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

ChartJS.defaults.font.family = 'Questrial';
ChartJS.defaults.font.size = 14;
ChartJS.defaults.color = '#333';

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Profits",
        data: [12000, 19000, 3000, 5000, 20000, 30000, 40000],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
      {
        label: "Expenses",
        data: [15000, 25000, 4000, 7000, 24000, 33000, 45000],
        borderColor: "#333",
        backgroundColor: "rgba(211, 211, 211, 0.979)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="line-chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
