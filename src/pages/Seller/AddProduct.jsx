import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaUpload } from "react-icons/fa";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
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
    // 🔧 Replace with API call
    console.log("New Product:", form);
    toast.success("Product added successfully!");
    setForm({ name: "", price: "", description: "", image: null });
    setPreview(null);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Add New Product
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Form */}
        <div className="bg-white shadow rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Product Name"
              required
              className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price (₹)"
              required
              className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Product Description"
              rows="4"
              className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
            />

            {/* File Upload */}
            <label className="flex items-center gap-2 cursor-pointer border border-dashed p-3 rounded-md hover:border-blue-500">
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
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
            >
              Add Product
            </button>
          </form>
        </div>

        {/* Product Preview */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
          {preview ? (
            <img
              src={preview}
              alt="Product Preview"
              className="w-48 h-48 object-cover rounded-lg border mb-4"
            />
          ) : (
            <div className="w-48 h-48 flex items-center justify-center border-2 border-dashed rounded-lg text-gray-400">
              No Image
            </div>
          )}

          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-800">{form.name || "Product Name"}</h3>
            <p className="text-yellow-600 text-lg font-semibold mt-1">
              {form.price ? `₹₹{form.price}` : "Price"}
            </p>
            <p className="text-gray-600 mt-2">
              {form.description || "Product description will appear here."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
