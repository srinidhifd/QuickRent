import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Features from './components/Features';
import GadgetList from './components/GadgetList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Features />
      <GadgetList />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
