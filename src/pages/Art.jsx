import React from 'react';
import wildHorseImage from '../assets/Art/Picture.png';
import greatColorsImage from '../assets/Art/Picture (1).png'; 
import fathersDayImage from '../assets/Art/Picture (2).png';

const events = [
  {
    title: 'Wild Horse Event',
    description: 'Egestas elit dui scelerisque eu purus aliquam vitae habitasse.',
    image: wildHorseImage,
    label: 'Featured',
  },
  {
    title: 'Great Colors',
    description: 'Egestas elit dui scelerisque eu purus aliquam vitae habitasse.',
    image: greatColorsImage,
    label: 'New',
  },
  {
    title: "Happy Father's Day",
    description: 'Egestas elit dui scelerisque eu purus aliquam vitae habitasse.',
    image: fathersDayImage,
    label: 'Coming Soon',
  },
];

const ArtEvents = () => {
  return (
    <div className="container mx-auto px-4 py-10 font-sans">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Art events</h2>
        <a href="/discover" className="text-blue-600 hover:underline font-semibold flex items-center">
          Discover More Masterpieces 
          <span className="ml-1 text-lg leading-none">&rarr;</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-48 object-cover rounded-t-lg" 
              />
              {event.label && (
                <span 
                  className={`absolute top-4 left-4 text-white text-xs font-semibold px-3 py-1 rounded-full 
                    ${event.label === 'Featured' ? 'bg-purple-600/80' : ''}
                    ${event.label === 'New' ? 'bg-green-600/80' : ''}
                    ${event.label === 'Coming Soon' ? 'bg-sky-500/80' : ''}
                  `}
                >
                  {event.label}
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-1">{event.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtEvents;