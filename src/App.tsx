import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Games from './components/Games';
import Events from './components/Events';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-gray-100">
      <Header />
      <main>
        <Hero />
        <Games />
        <Events />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;