import React from 'react';

const gadgets = [
  { name: 'MacBook Pro', price: '$50/week', image: '/images/macbook.jpg' },
  { name: 'Canon EOS', price: '$30/week', image: '/images/canon.jpg' },
  { name: 'PlayStation 5', price: '$40/week', image: '/images/ps5.jpg' },
];

const GadgetList: React.FC = () => {
  return (
    <section id="gadgets" className="py-20 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Available Gadgets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {gadgets.map((gadget, index) => (
            <div key={index} className="p-6 bg-white shadow rounded hover:shadow-lg transition-all">
              <img src={gadget.image} alt={gadget.name} className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">{gadget.name}</h3>
              <p className="text-gray-600 mb-4">{gadget.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Rent Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GadgetList;
