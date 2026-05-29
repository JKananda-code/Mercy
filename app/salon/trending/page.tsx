import React from 'react'
import Image from 'next/image'

function TrendingStyles() {
    const images = [
        { src: '/salon/image1.jpeg', alt: 'Trending Style 1' },
        { src: '/salon/image2.jpeg', alt: 'Trending Style 2' },
        { src: '/salon/image3.jpeg', alt: 'Trending Style 3' },
        { src: '/salon/image4.jpeg', alt: 'Trending Style 4' },
        {src: '/salon/dummy1.jpg', alt: 'Trending Style 5' },
        {src: '/salon/dummy2.jpg', alt: 'Trending Style 6' },  
        {src: '/salon/dummy3.jpg', alt: 'Trending Style 7' },   
        {src: '/salon/dummy4.jpg', alt: 'Trending Style 8' },
        {src: '/salon/dummy9.jpg', alt: 'Trending Style 9' }, 
        {src: '/salon/dummy10.jpg', alt: 'Trending Style 10' },
        {src: '/salon/dummy11.jpg', alt: 'Trending Style 11' },
        {src: '/salon/dummy12.jpg', alt: 'Trending Style 12' },
        {src: '/salon/dummy13.jpg', alt: 'Trending Style 13' },
        {src: '/salon/dummy14.jpg', alt: 'Trending Style 14' },
        {src: '/salon/dummy15.jpg', alt: 'Trending Style 15' },
        {src: '/salon/dummy16.jpg', alt: 'Trending Style 16' },
        ];
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-semibold text-red-700 mb-6">Trending Styles</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <Image src={image.src} alt={image.alt} width={400} height={300} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingStyles