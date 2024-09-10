import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      {/* Contact Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600">I’m here to help and answer any questions you might have. Feel free to reach out!</p>
      </header>

      {/* Contact Form */}
      <section className="bg-white shadow-2xl rounded-lg p-8 mb-12 border border-gray-200">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Contact Form</h2>
        <form className="max-w-lg mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-lg font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Details */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Email</h3>
          <p className="text-gray-600">hello@workwithtariq.com</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Phone</h3>
          <p className="text-gray-600">+880-1517-010100</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Location</h3>
          <p className="text-gray-600">Paikgacha, Khulna, Bangladesh</p>
        </div>
      </section>

      {/* Map Section */}
      <section>
        <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Find Us</h2>
        <div className="relative pb-9/16 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.644567500159!2d-122.4194186846815!3d37.77492977975916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f7b5d15b5%3A0x5c8c91747f5c4b6b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1645462573434!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen
            title="Google Map Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
