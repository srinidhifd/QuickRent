import React from 'react';
import { FaLaptop, FaCamera, FaTruck } from 'react-icons/fa';

const features = [
  { icon: <FaLaptop size={32} />, title: 'Wide Variety of Gadgets', description: 'From laptops to cameras, find it all.' },
  { icon: <FaCamera size={32} />, title: 'Affordable Pricing', description: 'Rent at unbeatable prices.' },
  { icon: <FaTruck size={32} />, title: 'Quick Delivery', description: 'Get gadgets delivered to your doorstep fast.' },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose QuickRent?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow rounded hover:shadow-lg transition-all">
              <div className="mb-4 text-blue-500">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
