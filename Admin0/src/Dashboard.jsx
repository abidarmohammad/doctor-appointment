import React from "react";
import Sidebar from "./Sidebar";
import ApexCharts from "react-apexcharts";
import { useState } from "react";

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Total Appointments",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      },
    },
  });

  const [barChartData, setBarChartData] = useState({
    series: [
      {
        name: "Earnings ($)",
        data: [500, 700, 900, 1200, 1500, 1800, 2000, 2200, 2500],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      },
    },
  });

  const [pieChartData, setPieChartData] = useState({
    series: [40, 30, 20, 10],
    options: {
      chart: {
        type: "pie",
      },
      labels: ["General Checkup", "Orthodontics", "Surgery", "Other"],
    },
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-5">Maristan</h1>
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div className="p-5 bg-blue-600 text-white rounded-lg shadow-md">
            <h2 className="text-xl">Total Appointments</h2>
            <p className="text-3xl font-bold">125</p>
          </div>
          <div className="p-5 bg-green-600 text-white rounded-lg shadow-md">
            <h2 className="text-xl">Total Earnings</h2>
            <p className="text-3xl font-bold">$25,000</p>
          </div>
          <div className="p-5 bg-purple-600 text-white rounded-lg shadow-md">
            <h2 className="text-xl">Performance</h2>
            <p className="text-3xl font-bold">Excellent</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">Monthly Appointments</h2>
            <ApexCharts options={chartData.options} series={chartData.series} type="line" height={350} />
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">Monthly Earnings</h2>
            <ApexCharts options={barChartData.options} series={barChartData.series} type="bar" height={350} />
          </div>
        </div>
        <div className="grid grid-cols-1 mt-5">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">Appointment Types Distribution</h2>
            <ApexCharts options={pieChartData.options} series={pieChartData.series} type="pie" height={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
