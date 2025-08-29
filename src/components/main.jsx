import React from "react";

const Home = () => {
  return (
    <section className="relative w-full min-h-screen">
      {/* Hero image */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <img
          src="/assets/bg.jpg"
          alt="Uzhavan Hero"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="container mx-auto px-6 text-center md:text-left">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
              Welcome to <span className="text-green-400">Uzhavan</span>
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Uzhavan connects farmers and customers directly — delivering
              fresh produce, authentic products, and trusted services. Explore
              the latest agricultural solutions, empowering communities for a
              sustainable tomorrow.
            </p>
            <button className="mt-6 px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
