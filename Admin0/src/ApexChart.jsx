import React from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const chartData = {
    series: [10, 15, 8], // Example data (Appointments per Doctor)
    options: {
      chart: { type: "pie" },
      labels: ["Dr. Smith", "Dr. John", "Dr. Lee"],
    },
  };

  return <Chart options={chartData.options} series={chartData.series} type="pie" />;
};

export default ApexChart;
