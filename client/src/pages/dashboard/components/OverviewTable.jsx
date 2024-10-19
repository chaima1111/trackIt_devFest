// components/OverviewTable.js

import "./OverviewTable.css";

const OverviewTable = () => {
  const data = {
    inflow: [110, 113, 112, 77, 15, 5, 66],
    outflow: [34, 445, 77, 75, 45, 778, 54],
    productSales: [67, 556, 87, 77, 87, 76, 78],
    serviceIncome: [87, 86, 77, 73, 88, 86, 89],
  };

  return (
    <div className="table-container">
      <h3>Weekly Overview</h3>
      <table>
        <thead>
          <tr>
            <th> </th>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Inflow</td>
            {data.inflow.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            <td>Outflow</td>
            {data.outflow.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            <td>Product Sales</td>
            {data.productSales.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            <td>Service Income</td>
            {data.serviceIncome.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OverviewTable;
