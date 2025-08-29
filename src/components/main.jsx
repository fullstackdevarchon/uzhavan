// src/pages/Home.jsx
import React, { useEffect, useState } from "react";

const Home = () => {
  // Measure navbar/header to adjust hero height
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
    height: `calc(100vh - ${navHeight}px)`,
    minHeight: "420px",
  };

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div style={heroStyle} className="relative overflow-hidden mt-18 md:mt-28">
        <img
          src="/assets/bg.jpg"
          alt="Uzhavan Hero"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="container mx-auto px-6 text-center md:text-left">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8 tracking-wide drop-shadow-lg">
              Welcome to <span className="text-green-400">Uzhavan</span>
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6 md:mb-8">
              Uzhavan connects farmers and customers directly — delivering
              fresh produce, authentic products, and trusted services. Explore
              the latest agricultural solutions, empowering communities for a
              sustainable tomorrow.
            </p>
            <button className="mt-2 md:mt-0 px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* Next Section Placeholder */}
      <div className="container mx-auto px-6 py-10">
        {/* You can add additional homepage sections here */}
      </div>
    </section>
  );
};

export default Home;
