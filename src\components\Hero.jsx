import React from 'react';
import Image from '../assets/images/background.jpg';

function Hero() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-4xl font-bold text-white">Explore the World</h1>
        <p className="text-2xl text-white">Discover new destinations and experiences</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;