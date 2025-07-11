import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-200 h-screen p-4 pt-6 md:p-6 lg:p-12">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p>Stay updated with our latest offers and promotions</p>
      <div className="flex justify-center">
        <i className="fab fa-facebook text-2xl text-blue-500 mr-4" />
        <i className="fab fa-twitter text-2xl text-blue-500 mr-4" />
        <i className="fab fa-instagram text-2xl text-blue-500 mr-4" />
      </div>
      <p className="text-sm text-gray-500">Copyright 2023 Travel Agency</p>
    </div>
  );
}

export default Footer;