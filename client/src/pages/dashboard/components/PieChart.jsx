// components/PieChart.js
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import './PieChart.css';
ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.defaults.font.family = 'Questrial';
ChartJS.defaults.font.size = 16;


const PieChart = () => {
  const data = {
    labels: ['Revenues', 'Cost Flow', 'Profits', 'Expenses'],
    datasets: [
      {
        data: [38.6, 22.5, 30.8, 8.1],
        backgroundColor: ['#3A3A3A', '#B1E3FF', '#A1E3CB', '#A8C5DA'],
        hoverBackgroundColor: ['#282828', '#649AB8', '#74C2A6', '#83A4BC'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            family: 'Questrial',
            size: 14,
            weight: 'bold',
          },
          color: '#333',
        },
        position: 'bottom',
      },
       
    },
  };

  return (

    <div className="pie-chart-container">
      <Pie data={data} options={options} />
    </div>
     
  );
};

export default PieChart;

