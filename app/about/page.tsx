// app/about/page.tsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Mercy Beauty Boutique</h1>
      <p className="text-xl text-center text-gray-600 mb-8">
        Our passion is to bring out the best in you.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md text-gray-700 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Story</h2>
        <p className="mb-4">
          Mercy Beauty Boutique started with a vision to create a haven where beauty and self-care intertwine. We believe that everyone deserves to feel confident and beautiful, inside and out. Our boutique offers a carefully curated selection of high-quality beauty products, alongside a luxurious salon experience.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
        <p className="mb-4">
          To empower our clients through exceptional beauty products and unparalleled salon services, fostering a community of self-love and confidence.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Values</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>**Quality:** Offering only the best products and services.</li>
          <li>**Expertise:** Our team of stylists and beauty advisors are highly trained and passionate.</li>
          <li>**Client Focus:** Your satisfaction and well-being are our top priority.</li>
          <li>**Innovation:** Staying updated with the latest trends and techniques.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
