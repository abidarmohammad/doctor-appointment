import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <h2 className="text-2xl font-bold mb-6">Maristan Admin</h2>
      <ul className="space-y-4">
        <li className="p-2 bg-gray-700 rounded">📊Maristan Dashboard</li>
        <li className="p-2 hover:bg-blue-600 rounded cursor-pointer">📅 rendez-vous</li>
        <li className="p-2 hover:bg-blue-600 rounded cursor-pointer">📊 statistics</li>
        <li className="p-2 hover:bg-blue-600 rounded cursor-pointer">📅Factures</li>
        <li className="p-2 hover:bg-blue-600 rounded cursor-pointer">📈les Docteurs</li>

        <li className="p-2 hover:bg-red-600 rounded cursor-pointer">Log Out</li>

      </ul>
    </div>
  );
};

export default Sidebar;
