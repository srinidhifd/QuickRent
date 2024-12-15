import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none"
            rows={5}
          ></textarea>
          <button className="w-full bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
