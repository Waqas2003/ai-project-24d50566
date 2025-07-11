import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;