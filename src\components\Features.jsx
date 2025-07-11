import React from 'react';

function Features() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h2 className="text-3xl font-bold">What We Offer</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <i className="fas fa-plane text-4xl text-orange-500" />
          <h3 className="text-2xl font-bold">Flights</h3>
          <p>Book your flights with us and get the best deals</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <i className="fas fa-hotel text-4xl text-orange-500" />
          <h3 className="text-2xl font-bold">Hotels</h3>
          <p>Find the perfect hotel for your stay</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <i className="fas fa-car text-4xl text-orange-500" />
          <h3 className="text-2xl font-bold">Car Rentals</h3>
          <p>Rent a car and explore your destination</p>
        </div>
      </div>
    </div>
  );
}

export default Features;