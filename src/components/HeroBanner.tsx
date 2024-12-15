import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Explore a World of Gadgets<br />Rent Today!
          </h1>
          <p className="mb-6 text-gray-400">
            Affordable prices, quick delivery, and a wide variety of options.
          </p>
          <button className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600 transition-all">
            Explore Rentals
          </button>
        </div>
        <img
          src="/images/hero-banner.jpg"
          alt="Gadgets for rent"
          className="w-full md:w-1/2 mt-10 md:mt-0"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
