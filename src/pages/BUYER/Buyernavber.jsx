// src/components/BuyerNavbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaBoxOpen,
  FaShoppingCart,
  FaClipboardList,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Typewriter } from "react-simple-typewriter";

const BuyerNavbar = () => {
  const navigate = useNavigate();
  const cartState = useSelector((state) => state.handleCart);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
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
                words={["υᴢнαναη.ᴄᴏᴍ", "ʙᴜʏᴇʀᴅᴀꜱʜʙᴏᴀʀᴅ"]}
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
          <ul className="hidden md:flex items-center space-x-8 font-medium">
            <li>
              <NavLink to="products" className={navLinkClass}>
                <FaBoxOpen className="inline mr-1" /> Products
              </NavLink>
            </li>
            <li>
              <NavLink to="orders" className={navLinkClass}>
                <FaClipboardList className="inline mr-1" /> My Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="cart" className={navLinkClass}>
                <FaShoppingCart className="inline mr-1" />
                {loading ? (
                  <Skeleton width={40} height={20} baseColor="#cbd5e1" />
                ) : (
                  <>Cart ({cartState.length})</>
                )}
              </NavLink>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-400 hover:text-red-200 font-semibold transition-colors focus:outline-none"
              >
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </ul>

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
              to="products"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block transition-colors duration-300 ${
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-300"
                }`
              }
            >
              <FaBoxOpen className="inline mr-2" /> Products
            </NavLink>
            <NavLink
              to="orders"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block transition-colors duration-300 ${
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-300"
                }`
              }
            >
              <FaClipboardList className="inline mr-2" /> My Orders
            </NavLink>
            <NavLink
              to="cart"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block transition-colors duration-300 ${
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-300"
                }`
              }
            >
              <FaShoppingCart className="inline mr-2" />
              {loading ? (
                <Skeleton width={40} height={20} baseColor="#cbd5e1" />
              ) : (
                <>Cart ({cartState.length})</>
              )}
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

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet /> {/* Nested routes render here */}
      </main>
    </div>
  );
};

export default BuyerNavbar;
