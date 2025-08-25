import React from 'react';
import Icon1 from '../assets/Expending/Icon.svg'; 
import Icon2 from '../assets/Expending/Icon (1).svg'; 
import Icon3 from '../assets/Expending/tv.svg'; 
import Icon4 from '../assets/Expending/Icon (2).svg'; 
import Icon5 from '../assets/Expending/megaphone.svg'; 
import Icon6 from '../assets/Expending/Icon (3).svg'; 
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Nibh viverra',
    icon: Icon1,
  },
  {
    id: 2,
    title: 'Cursus amet',
    icon: Icon2,
  },
  {
    id: 3,
    title: 'Ipsum fermentum',
    icon: Icon3,
  },
  {
    id: 4,
    title: 'Quisque euismod',
    icon: Icon4,
  },
  {
    id: 5,
    title: 'Arcu vulputate',
    icon: Icon5,
  },
  {
    id: 6,
    title: 'Cras auctor',
    icon: Icon6,
  },
];

const ExpandingServices = () => {
    const navigate = useNavigate();

    const HandleExpending = () => {
        navigate('/expending');
    }
  return (
    <div className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Expanding services</h2>
        
        {/* Mengembalikan ke justify-center untuk tata letak yang lebih teratur */}
        <div className="flex flex-wrap justify-between">
            {services.map((service) => (
                <div 
                key={service.id} 
                className="group flex flex-col items-center cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-12"
                >
                    <div className="w-24 h-24 flex items-center justify-center rounded-full border border-gray-300">
                        <img src={service.icon} alt={service.title} />
                    </div>
                    <p className="mt-4 text-gray-700 font-semibold text-lg">{service.title}</p>
                </div>
            ))}
        </div>
        
        <div className="mt-12 md:mt-20">
          <button onClick={HandleExpending} className="bg-[#6A1A36] text-white font-semibold py-4 px-12 rounded-full hover:bg-[#A44061] transition-colors duration-300">
            Find Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpandingServices;