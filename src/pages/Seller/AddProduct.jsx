import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaUpload, FaBalanceScale, FaBoxes } from "react-icons/fa";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    weight: "",
    customWeight: "",
    quantity: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      const file = files[0];
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD

    // Use customWeight if weight is "custom"
    const finalWeight =
      form.weight === "custom" ? form.customWeight : form.weight;

    const productData = {
      ...form,
      weight: finalWeight,
    };

    console.log("New Product:", productData);
    toast.success("✅ Product added successfully!");

    setForm({
      name: "",
      price: "",
      weight: "",
      customWeight: "",
      quantity: "",
      description: "",
      image: null,
    });
=======
    console.log("New Product:", form);
    toast.success("Product added successfully!");
    setForm({ name: "", price: "", description: "", image: null });
>>>>>>> 6d66530 (second commit)
    setPreview(null);
  };

  const displayWeight =
    form.weight === "custom" ? form.customWeight : form.weight;

  return (
<<<<<<< HEAD
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 text-center">
        ➕ Add New Product
=======
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 text-center sm:text-left">
        Add New Product
>>>>>>> 6d66530 (second commit)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Product Form */}
<<<<<<< HEAD
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter product name"
                required
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Price (₹)
              </label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Enter price"
                required
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              />
            </div>

            {/* Weight + Quantity */}
            <div className="grid grid-cols-2 gap-4">
              {/* Weight */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <FaBalanceScale className="text-gray-500" /> Weight
                </label>
                <select
                  name="weight"
                  value={form.weight}
                  onChange={handleChange}
                  required
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                >
                  <option value="">Select Weight</option>
                  <option value="250g">250 g</option>
                  <option value="500g">500 g</option>
                  <option value="1kg">1 kg</option>
                  <option value="2kg">2 kg</option>
                  <option value="custom">Custom</option>
                </select>

                {/* Custom Weight Input */}
                {form.weight === "custom" && (
                  <input
                    type="text"
                    name="customWeight"
                    value={form.customWeight}
                    onChange={handleChange}
                    placeholder="Enter custom weight (e.g., 750g, 5kg)"
                    className="mt-2 w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  />
                )}
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <FaBoxes className="text-gray-500" /> Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="Enter stock quantity"
                  required
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter product description"
                rows="4"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Image
              </label>
              <label className="flex items-center justify-center gap-3 cursor-pointer border border-dashed p-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 text-sm sm:text-base">
                <FaUpload className="text-gray-500" />
                <span className="text-gray-600">Upload Product Image</span>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 font-semibold text-sm sm:text-base transition-all"
=======
        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Product Name"
              required
              className="w-full border p-2 sm:p-3 rounded focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />

            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price (₹)"
              required
              className="w-full border p-2 sm:p-3 rounded focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Product Description"
              rows="4"
              className="w-full border p-2 sm:p-3 rounded focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />

            {/* File Upload */}
            <label className="flex items-center gap-2 cursor-pointer border border-dashed p-2 sm:p-3 rounded-md hover:border-blue-500 text-sm sm:text-base">
              <FaUpload className="text-gray-500" />
              <span className="text-gray-600">Upload Product Image</span>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold text-sm sm:text-base"
>>>>>>> 6d66530 (second commit)
            >
              ➕ Add Product
            </button>
          </form>
        </div>

        {/* Product Preview */}
<<<<<<< HEAD
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 flex flex-col items-center">
=======
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 flex flex-col items-center">
>>>>>>> 6d66530 (second commit)
          {preview ? (
            <img
              src={preview}
              alt="Product Preview"
<<<<<<< HEAD
              className="w-48 h-48 object-cover rounded-xl border mb-4"
            />
          ) : (
            <div className="w-48 h-48 flex items-center justify-center border-2 border-dashed rounded-xl text-gray-400">
=======
              className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-lg border mb-4"
            />
          ) : (
            <div className="w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center border-2 border-dashed rounded-lg text-gray-400">
>>>>>>> 6d66530 (second commit)
              No Image
            </div>
          )}

<<<<<<< HEAD
          <div className="text-center space-y-2">
            <h3 className="text-lg font-bold text-gray-800">
              {form.name || "Product Name"}
            </h3>
            <p className="text-yellow-600 text-lg font-semibold">
              {form.price ? `₹${form.price}` : "Price"}
            </p>
            <p className="text-gray-600 text-sm">
              ⚖️ {displayWeight || "Weight"}
            </p>
            <p className="text-gray-600 text-sm">📦 {form.quantity || "Qty"}</p>
            <p className="text-gray-500 text-sm italic mt-2">
=======
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-bold text-gray-800">
              {form.name || "Product Name"}
            </h3>
            <p className="text-yellow-600 text-sm sm:text-lg font-semibold mt-1">
              {form.price ? `₹${form.price}` : "Price"}
            </p>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
>>>>>>> 6d66530 (second commit)
              {form.description || "Product description will appear here."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
