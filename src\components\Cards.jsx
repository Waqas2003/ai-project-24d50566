import React from 'react';
import Image1 from '../assets/images/card1.jpg';
import Image2 from '../assets/images/card2.jpg';
import Image3 from '../assets/images/card3.jpg';

function Cards() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h2 className="text-3xl font-bold">Popular Destinations</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <img src={Image1} alt="Destination 1" className="w-full h-64 object-cover rounded" />
          <h3 className="text-2xl font-bold">Paris, France</h3>
          <p>Explore the city of love and romance</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <img src={Image2} alt="Destination 2" className="w-full h-64 object-cover rounded" />
          <h3 className="text-2xl font-bold">New York City, USA</h3>
          <p>Experience the city that never sleeps</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <img src={Image3} alt="Destination 3" className="w-full h-64 object-cover rounded" />
          <h3 className="text-2xl font-bold">Tokyo, Japan</h3>
          <p>Discover the vibrant city of Tokyo</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;