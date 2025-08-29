import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  FaBoxOpen,
  FaClipboardList,
  FaChartLine,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaWarehouse,
  FaTruck,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const AdminNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Top Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg px-6 py-4 flex items-center justify-between z-50">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="h-12 w-12 rounded-full shadow-lg"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-white drop-shadow-md">
            <Typewriter
              words={[" υᴢнαναη.ᴄᴏᴍ", " ᴀᴅᴍɪɴ ᴅᴀꜱʜʙᴏᴀʀᴅ"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-white font-medium text-lg">
          <Link
            to="/admin-dashboard/product-list"
            className="flex items-center gap-2 relative group"
          >
            <FaBoxOpen />
            Product List
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/admin-dashboard/seller-requests"
            className="flex items-center gap-2 relative group"
          >
            <FaClipboardList />
            Seller Requests
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/admin-dashboard/analytics"
            className="flex items-center gap-2 relative group"
          >
            <FaChartLine />
            Analytics
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/admin-dashboard/inventory"
            className="flex items-center gap-2 relative group"
          >
            <FaWarehouse />
            Inventory
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/admin-dashboard/orders"
            className="flex items-center gap-2 relative group"
          >
            <FaTruck />
            Orders
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 hover:text-red-300 transition"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed top-[72px] left-0 w-full bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 shadow-lg flex flex-col px-6 py-4 gap-4 text-white font-medium text-lg z-40">
          <Link
            to="/admin-dashboard/product-list"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 border-b border-white/40 pb-2"
          >
            <FaBoxOpen /> Product List
          </Link>
          <Link
            to="/admin-dashboard/seller-requests"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 border-b border-white/40 pb-2"
          >
            <FaClipboardList /> Seller Requests
          </Link>
          <Link
            to="/admin-dashboard/analytics"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 border-b border-white/40 pb-2"
          >
            <FaChartLine /> Analytics
          </Link>
          <Link
            to="/admin-dashboard/inventory"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 border-b border-white/40 pb-2"
          >
            <FaWarehouse /> Inventory
          </Link>
          <Link
            to="/admin-dashboard/orders"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 border-b border-white/40 pb-2"
          >
            <FaTruck /> Orders
          </Link>
          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className="flex items-center gap-2 text-red-200 border-b border-white/40 pb-2"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      )}

      {/* Content Area with top padding (because navbar is fixed) */}
      <main className="flex-1 p-6 bg-gray-50 mt-[88px]">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminNavbar;
