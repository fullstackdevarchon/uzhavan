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
<<<<<<< HEAD
        style={heroStyle}
        className="relative overflow-hidden flex items-center mb-6" // ✅ margin top + bottom
=======
        className={`relative flex items-center justify-center`}
        style={{ paddingTop: `${navHeight}px` }} // ensures content starts below nav
>>>>>>> 0028c4e (fifth commit)
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
<<<<<<< HEAD
        <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Welcome to <span className="text-green-400">Uzhavan</span>
          </h1>
          <p className="text-white text-base sm:text-lg lg:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6">
=======
        <div className="relative z-10 container mx-auto px-6 text-center md:text-left flex flex-col justify-center items-center md:items-start py-20 md:py-32">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-8 tracking-wide drop-shadow-lg">
            Welcome to <span className="text-green-400">Uzhavan</span>
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-md md:max-w-2xl mx-auto md:mx-0 leading-relaxed mb-4 sm:mb-6 md:mb-8">
>>>>>>> 0028c4e (fifth commit)
            Uzhavan connects farmers and customers directly — delivering
            fresh produce, authentic products, and trusted services.
            Explore the latest agricultural solutions, empowering communities
            for a sustainable tomorrow.
          </p>
<<<<<<< HEAD
          <button className="px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
=======
          <button className="mt-2 px-6 sm:px-8 py-2 sm:py-3 bg-green-500 text-white text-sm sm:text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
>>>>>>> 0028c4e (fifth commit)
            Explore Now
          </button>
        </div>
      </div>

      {/* Next Section Placeholder */}
<<<<<<< HEAD
      <div className="container mx-auto px-6 py-12 text-center md:text-left">
        {/* Add additional homepage sections here */}
      </div>
=======
      {/* <div className="container mx-auto px-6 py-10">
        
      </div> */}
>>>>>>> 0028c4e (fifth commit)
    </section>
  );
};

export default Home;
