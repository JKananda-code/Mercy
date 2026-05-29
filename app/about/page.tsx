// app/about/page.tsx
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-center">
        <Image
        src="/mercybb.jpg"
        alt="MercyBB Logo"
        height={500}  
        width={300}   
      />
</div>
      <h1 className="text-4xl font-bold text-center text-red-700 mb-6">About Mercy Beauty Boutique</h1>
     
<p className="text-xl text-center text-pink-600 mb-8">
        Our passion is to bring out the best in customers.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md text-gray-700 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Story</h2>
        <p className="mb-4">
          Mercy Beauty Boutique is starting with a vision to create a haven where beauty and self-care intertwine. We believe that everyone deserves to feel confident and beautiful, inside and out. Our boutique offers a carefully curated selection of high-quality beauty products, alongside a luxurious salon experience.
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
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Acknowledgements</h2>
        <p className="mb-4">
          Mercy acknowledges the support and dedication of Mama Alice as her Trainer and the rest of the team
          for being such good company in her first month of training. She cannot believe she has done so much
          within a matter of 25 days. Special thanks to Mama Alice, for providing this opportunity for Training
          and to everyone else in the team including MaryAnne, Pauline, Lucy and the incredible Shi !!.</p>
      </div>
    </div>
  );
};
export default AboutPage;
