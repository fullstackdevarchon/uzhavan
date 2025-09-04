import React, { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

const SelectedProducts = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Spices", enabled: true, limit: 5 },
    { id: 2, name: "Vegetables", enabled: false, limit: 10 },
    { id: 3, name: "Fruits", enabled: true, limit: 8 },
  ]);

  // Toggle single category
  const toggleCategory = (id) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, enabled: !cat.enabled } : cat
      )
    );
  };

  // Toggle all
  const toggleAll = () => {
    const allEnabled = categories.every((cat) => cat.enabled);
    setCategories((prev) =>
      prev.map((cat) => ({ ...cat, enabled: !allEnabled }))
    );
  };

  // Update product limit for a category
  const updateLimit = (id, newLimit) => {
    if (newLimit < 1) return; // no zero or negative
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, limit: newLimit } : cat
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-5xl p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-extrabold mb-6 text-indigo-700 text-center">
          Manage Categories & Product Limits
        </h2>

        {/* Toggle All */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleAll}
            className="px-6 py-2 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition font-semibold shadow-md"
          >
            {categories.every((cat) => cat.enabled)
              ? "Disable All"
              : "Enable All"}
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg shadow-sm text-sm">
            <thead className="bg-indigo-100">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Product Limit</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr
                  key={category.id}
                  className="border-t hover:bg-indigo-50 transition"
                >
                  <td className="p-3">{category.id}</td>
                  <td className="p-3 font-semibold">{category.name}</td>
                  <td className="p-3 flex items-center gap-2">
                    {category.enabled ? (
                      <>
                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                        <span className="text-green-600 font-medium">
                          Enabled
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircleIcon className="w-5 h-5 text-red-500" />
                        <span className="text-red-600 font-medium">
                          Disabled
                        </span>
                      </>
                    )}
                  </td>
                  <td className="p-3">
                    <input
                      type="number"
                      min={1}
                      value={category.limit}
                      onChange={(e) =>
                        updateLimit(category.id, Number(e.target.value))
                      }
                      className="w-20 px-2 py-1 border rounded-lg text-center focus:ring-2 focus:ring-indigo-500"
                    />
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className={`px-4 py-1 rounded-lg text-xs font-semibold transition ${
                        category.enabled
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                    >
                      {category.enabled ? "Disable" : "Enable"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden mt-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="border rounded-xl p-5 shadow-md bg-gradient-to-r from-indigo-50 to-purple-50 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-gray-800">
                  {category.name}
                </h3>
                {category.enabled ? (
                  <CheckCircleIcon className="w-6 h-6 text-green-500" />
                ) : (
                  <XCircleIcon className="w-6 h-6 text-red-500" />
                )}
              </div>
              <p
                className={`font-medium ${
                  category.enabled ? "text-green-600" : "text-red-600"
                }`}
              >
                {category.enabled ? "Enabled" : "Disabled"}
              </p>

              {/* Product Limit */}
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Limit
                </label>
                <input
                  type="number"
                  min={1}
                  value={category.limit}
                  onChange={(e) =>
                    updateLimit(category.id, Number(e.target.value))
                  }
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                onClick={() => toggleCategory(category.id)}
                className={`mt-3 w-full px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  category.enabled
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                {category.enabled ? "Disable" : "Enable"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedProducts;
