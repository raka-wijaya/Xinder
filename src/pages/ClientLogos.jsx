import React from 'react';
import Image from '../assets/Client/Logo-grey.svg'
import Image1 from '../assets/Client/Logo-grey (1).svg'
import Image2 from '../assets/Client/Logo-grey (2).svg'
import Image3 from '../assets/Client/Logo-grey (3).svg'
import Image4 from '../assets/Client/Logo-grey (4).svg'

const clientLogos = [
  Image,
  Image1,
  Image2,
  Image3,
  Image4
];

const ClientLogos = () => {
  return (
    <div className="bg-[#f1f5f9] py-10">
      <div className="container mx-auto px-4">
        {/* Flexbox untuk Logo */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clientLogos.map((Image, index) => (
            <div key={index} className="flex-shrink-0 w-28 sm:w-32 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <img
                src={Image}
                alt={`Client Logo ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;