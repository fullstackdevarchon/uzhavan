// src/pages/Home.jsx
import React, { useEffect, useState } from "react";

const Home = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const getNav = () =>
      document.querySelector("nav") ||
      document.querySelector("header") ||
      document.querySelector(".navbar") ||
      document.getElementById("navbar");

    const measure = () => {
      const nav = getNav();
      const h = nav ? Math.round(nav.getBoundingClientRect().height) : 0;
      setNavHeight(h);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const heroStyle = {
    minHeight: "500px",
    height: `calc(100vh - ${navHeight}px)`,
  };

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div
        style={heroStyle}
        className="relative overflow-hidden flex items-center mb-6" // ✅ margin top + bottom
      >
        {/* Background Image */}
        <img
          src="/assets/bg.jpg"
          alt="Uzhavan Hero"
          className="absolute inset-0 w-full h-full object-cover rounded-xl" // ✅ optional rounded edges for nice effect
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 rounded-xl"></div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Welcome to <span className="text-green-400">Uzhavan</span>
          </h1>
          <p className="text-white text-base sm:text-lg lg:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6">
            Uzhavan connects farmers and customers directly — delivering
            fresh produce, authentic products, and trusted services.
            Explore the latest agricultural solutions, empowering communities
            for a sustainable tomorrow.
          </p>
          <button className="px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
            Explore Now
          </button>
        </div>
      </div>

      {/* Next Section Placeholder */}
      <div className="container mx-auto px-6 py-12 text-center md:text-left">
        {/* Add additional homepage sections here */}
      </div>
    </section>
  );
};

export default Home;
