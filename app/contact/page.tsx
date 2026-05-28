// app/contact/page.tsx
import React from 'react';

export default function ContactPage () {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
      <p className="text-xl text-center text-gray-600 mb-8">
        We would love to hear from you! Reach out for any questions or appointments.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Details</h2>
          <p className="mb-2">
            <span className="font-bold">Address:</span> 123 Juja Lane, near JKUAT main Gate      </p>
          <p className="mb-2">
            <span className="font-bold">Phone:</span> (254) 456-7890
          </p>
          <p className="mb-2">
            <span className="font-bold">Email:</span> info@mercybeautyboutique.com
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Salon Hours</h3>
          <ul className="list-disc list-inside">
            <li>Monday - Friday: 10:00 AM - 7:00 PM</li>
            <li>Saturday: 10:00 AM - 6:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-600">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-pink-600">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-pink-600">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


