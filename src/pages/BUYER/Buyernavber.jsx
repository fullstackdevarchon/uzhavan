// src/components/BuyerNavbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, Link } from "react-router-dom";
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
    `relative px-2 transition-colors duration-300 flex items-center gap-2 ${
      isActive
        ? "text-yellow-500 font-semibold after:w-full"
        : "text-white hover:text-yellow-400 after:w-0"
    } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-yellow-500 after:transition-all`;

  const iconCircleClass =
    "p-1 rounded-full bg-white/20 text-white flex items-center justify-center text-base";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
<<<<<<< HEAD
<<<<<<< HEAD
      <nav className="bg-green-600 fixed top-0 left-0 w-full shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left: Logo + Title wrapped in Link to Buyer Dashboard */}
          <Link to="/buyer-dashboard" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="h-12 w-12 rounded-full shadow-lg border-2 border-white object-cover"
            />
            <h1 className="text-xl md:text-2xl font-extrabold text-white">
              Buyer Dashboard
=======
      <nav className="bg-gradient-to-r from-purple-800 via-pink-600 to-cyan-500 shadow-2xl fixed top-0 left-0 w-full z-50">
=======
      <nav className="bg-green-600 fixed top-0 left-0 w-full shadow-md z-50">
>>>>>>> fd4e5b9 (fourth commit)
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left: Logo + Title wrapped in Link to Buyer Dashboard */}
          <Link to="/buyer-dashboard" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="h-12 w-12 rounded-full shadow-lg border-2 border-white object-cover"
            />
<<<<<<< HEAD
            <h1 className="text-xl md:text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-300 to-white drop-shadow-lg whitespace-nowrap">
              <Typewriter
                words={["υᴢнαναη.ᴄᴏᴍ", "ʙᴜʏᴇʀᴅᴀꜱʜʙᴏᴀʀᴅ"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
>>>>>>> 6d66530 (second commit)
=======
            <h1 className="text-xl md:text-2xl font-extrabold text-white">
              Buyer Dashboard
>>>>>>> fd4e5b9 (fourth commit)
            </h1>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-6 font-medium">
            <li>
              <NavLink to="products" className={navLinkClass}>
                <span className={iconCircleClass}>
                  <FaBoxOpen />
                </span>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="orders" className={navLinkClass}>
                <span className={iconCircleClass}>
                  <FaClipboardList />
                </span>
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="cart" className={navLinkClass}>
                <span className={iconCircleClass}>
                  <FaShoppingCart />
                </span>
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
                <span className={iconCircleClass}>
                  <FaSignOutAlt />
                </span>
                Logout
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
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="md:hidden bg-green-600 shadow-inner px-6 py-2 rounded-b-2xl divide-y divide-white/30">
=======
          <div className="md:hidden bg-gradient-to-r from-purple-800 via-pink-600 to-cyan-500 shadow-inner px-6 py-2 rounded-b-2xl divide-y divide-white/30">
>>>>>>> 6d66530 (second commit)
=======
          <div className="md:hidden bg-green-600 shadow-inner px-6 py-2 rounded-b-2xl divide-y divide-white/30">
>>>>>>> fd4e5b9 (fourth commit)
            <NavLink
              to="products"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
<<<<<<< HEAD
<<<<<<< HEAD
                `block py-3 flex items-center gap-2 ${
=======
                `block py-3 ${
>>>>>>> 6d66530 (second commit)
=======
                `block py-3 flex items-center gap-2 ${
>>>>>>> fd4e5b9 (fourth commit)
                  isActive
                    ? "text-yellow-500 font-semibold"
                    : "text-white hover:text-yellow-400"
                }`
              }
            >
              <span className={iconCircleClass}>
                <FaBoxOpen />
              </span>
              Products
            </NavLink>
            <NavLink
              to="orders"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
<<<<<<< HEAD
<<<<<<< HEAD
                `block py-3 flex items-center gap-2 ${
=======
                `block py-3 ${
>>>>>>> 6d66530 (second commit)
=======
                `block py-3 flex items-center gap-2 ${
>>>>>>> fd4e5b9 (fourth commit)
                  isActive
                    ? "text-yellow-500 font-semibold"
                    : "text-white hover:text-yellow-400"
                }`
              }
            >
              <span className={iconCircleClass}>
                <FaClipboardList />
              </span>
              My Orders
            </NavLink>
            <NavLink
              to="cart"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
<<<<<<< HEAD
<<<<<<< HEAD
                `block py-3 flex items-center gap-2 ${
=======
                `block py-3 ${
>>>>>>> 6d66530 (second commit)
=======
                `block py-3 flex items-center gap-2 ${
>>>>>>> fd4e5b9 (fourth commit)
                  isActive
                    ? "text-yellow-500 font-semibold"
                    : "text-white hover:text-yellow-400"
                }`
              }
            >
              <span className={iconCircleClass}>
                <FaShoppingCart />
              </span>
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
              className="block py-3 w-full text-left flex items-center gap-2 text-red-400 hover:text-red-200 font-semibold transition-colors focus:outline-none"
            >
              <span className={iconCircleClass}>
                <FaSignOutAlt />
              </span>
              Logout
            </button>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-50 mt-20">
<<<<<<< HEAD
<<<<<<< HEAD
        <Outlet />
=======
        <Outlet /> {/* Nested routes render here */}
>>>>>>> 6d66530 (second commit)
=======
        <Outlet />
>>>>>>> fd4e5b9 (fourth commit)
      </main>
    </div>
  );
};

export default BuyerNavbar;
