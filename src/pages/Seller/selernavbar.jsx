// src/components/SellerNavbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaPlusCircle,
  FaClipboardCheck,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const SellerNavbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("sellerToken");
    navigate("/login");
  };

  const navLinkClass = ({ isActive }) =>
    `relative px-1 transition-colors duration-300 ${
      isActive
        ? "text-yellow-400 font-semibold after:w-full"
        : "text-white hover:text-yellow-300 after:w-0"
    } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-yellow-400 after:transition-all`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-purple-800 via-pink-600 to-cyan-500 shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left: Logo + Typewriter */}
          <div className="flex items-center gap-3 w-full md:w-auto mb-3 md:mb-0">
            <img
              src="/assets/logo.png" // replace with your logo path
              alt="Logo"
              className="h-14 w-14 rounded-full shadow-xl border-2 border-white object-cover"
            />
            <h1 className="text-xl md:text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-300 to-white drop-shadow-lg whitespace-nowrap">
              <Typewriter
                words={["υᴢнαναη.ᴄᴏᴍ", "ꜱᴇʟʟᴇʀᴅᴀꜱʜʙᴏᴀʀᴅ"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 font-medium text-white">
            <NavLink to="/seller-dashboard/add-product" className={navLinkClass}>
              <FaPlusCircle className="inline mr-1" /> Add Product
            </NavLink>

            <NavLink to="/seller-dashboard/check-status" className={navLinkClass}>
              <FaClipboardCheck className="inline mr-1" /> Check Status
            </NavLink>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-400 hover:text-red-200 font-semibold transition-colors focus:outline-none"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-r from-purple-800 via-pink-600 to-cyan-500 shadow-inner px-6 py-4 space-y-4 rounded-b-2xl">
            <NavLink
              to="/seller-dashboard/add-product"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block transition-colors duration-300 ${
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-300"
                }`
              }
            >
              <FaPlusCircle className="inline mr-2" /> Add Product
            </NavLink>

            <NavLink
              to="/seller-dashboard/check-status"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block transition-colors duration-300 ${
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-300"
                }`
              }
            >
              <FaClipboardCheck className="inline mr-2" /> Check Status
            </NavLink>

            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 text-red-400 hover:text-red-200 font-semibold transition-colors focus:outline-none"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        )}
      </nav>

      {/* Content Area */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet /> {/* Nested seller routes will render here */}
      </main>
    </div>
  );
};

export default SellerNavbar;
