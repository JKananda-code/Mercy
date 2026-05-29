// app/salon/page.tsx
import React from 'react';

export default function SalonPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-red-700 mb-6">Our Salon Services</h1>
      <p className="text-xl text-center text-pink-600 mb-8">
        Transform your look with our expert hair stylists and luxurious treatments.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-purple-200">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">Haircuts & Styling</h2>
          <p className="text-gray-700 mb-4">
            From classic cuts to modern styles, our talented stylists will create the perfect look for you. Includes wash, cut, and blow dry.
          </p>
          <p className="text-xl font-bold text-gray-800 mb-4">Starting from Ksh.200</p>
          <button className="w-full bg-purple-500 text-white py-3 rounded hover:bg-purple-600 transition-colors">
            Book Now
          </button>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-purple-200">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">Color Services</h2>
          <p className="text-gray-700 mb-4">
            Full color, highlights, balayage, and root touch-ups. Achieve your desired shade with our premium color products.
          </p>
          <p className="text-xl font-bold text-gray-800 mb-4">Starting from Ksh.1,000</p>
          <button className="w-full bg-purple-500 text-white py-3 rounded hover:bg-purple-600 transition-colors">
            Book Now
          </button>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-purple-200">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">Hair Treatments</h2>
          <p className="text-gray-700 mb-4">
            Deep conditioning, keratin treatments, and scalp therapies to restore health and shine to your hair.
          </p>
          <p className="text-xl font-bold text-gray-800 mb-4">Starting from Ksh.1,500</p>
          <button className="w-full bg-purple-500 text-white py-3 rounded hover:bg-purple-600 transition-colors">
            Book Now
          </button>
        </div>
      </div>
      <p className="text-center text-pink-500 mt-8">Explore full service menu and stylist portfolios soon!</p>
    </div>
  );
};


