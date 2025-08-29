// src/pages/Admin/Inventory.jsx
import React, { useState, useEffect } from "react";
import {
  FaExclamationTriangle,
  FaBoxOpen,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // 🔧 Replace with API
    const mockData = [
      { id: 1, product: "Fresh Apples", stock: 5, status: "Low Stock" },
      { id: 2, product: "Tomatoes", stock: 0, status: "Out of Stock" },
      { id: 3, product: "Red Chilli Powder", stock: 200, status: "In Stock" },
      { id: 4, product: "Organic Rice", stock: 18, status: "Low Stock" },
      { id: 5, product: "Green Tea Bags", stock: 0, status: "Out of Stock" },
    ];
    setInventory(mockData);
  }, []);

  // 🔍 Filtered data
  const filteredInventory = inventory.filter((item) => {
    const matchesSearch = item.product
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      filter === "All" ? true : item.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <FaBoxOpen className="text-blue-600" /> Inventory & Stock Alerts
      </h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Filter Dropdown */}
        <div className="flex items-center gap-2">
          <FaFilter className="text-gray-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="All">All</option>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-500 text-white sticky top-0 z-10 shadow">
              <tr>
                <th className="p-4 text-left font-semibold">ID</th>
                <th className="p-4 text-left font-semibold">Product</th>
                <th className="p-4 text-center font-semibold">Stock</th>
                <th className="p-4 text-center font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.length > 0 ? (
                filteredInventory.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-b last:border-none transition ₹{
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-blue-50`}
                  >
                    <td className="p-4 text-gray-700 font-medium">{item.id}</td>
                    <td className="p-4 text-gray-800 font-semibold flex items-center gap-2">
                      <FaBoxOpen className="text-blue-500" /> {item.product}
                    </td>
                    <td className="p-4 text-center text-gray-700">
                      {item.stock}
                    </td>
                    <td className="p-4 text-center">
                      {item.status === "Low Stock" && (
                        <span className="bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold inline-flex items-center gap-2 shadow-sm">
                          <FaExclamationTriangle className="text-yellow-600" />
                          Low Stock
                        </span>
                      )}
                      {item.status === "Out of Stock" && (
                        <span className="bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold inline-flex items-center gap-2 shadow-sm">
                          <FaExclamationTriangle className="text-red-600" />
                          Out of Stock
                        </span>
                      )}
                      {item.status === "In Stock" && (
                        <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-sm">
                          In Stock
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="p-6 text-center text-gray-500 italic"
                  >
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Summary */}
        <div className="p-4 bg-gray-100 text-gray-700 text-sm flex justify-between items-center">
          <span>Total Products: {filteredInventory.length}</span>
          <span className="font-semibold">
            Low / Out of Stock:{" "}
            {
              filteredInventory.filter(
                (i) => i.status === "Low Stock" || i.status === "Out of Stock"
              ).length
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
