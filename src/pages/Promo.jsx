import React from 'react';
import promoImage from '../assets/Pexels Photo by Karolina Grabowska.png'; 
import { useNavigate } from 'react-router-dom';

const CollectionPromo = () => {
  return (
    <div className="bg-[#1a2035] text-white py-16 px-4 overflow-hidden shadow-xl md:py-20 lg:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Add more masterpieces to your growing collection
          </h2>
          <button className="py-3 px-8 border border-white rounded-md text-white font-semibold transition-colors duration-300 hover:bg-white hover:text-[#1a2035]">
            Join Now
          </button>
        </div>

        <div className="flex-1 w-full md:w-auto hidden md:flex justify-center md:justify-end">
          <img 
            src={promoImage} 
            alt="Smiling man" 
            className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg"
          />
        </div>
        
      </div>
    </div>
  );
};

export default CollectionPromo;