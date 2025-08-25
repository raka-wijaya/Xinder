import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    const HandleBest = () => {
        navigate('/explorexinder');
    }
  return (
    <section className="bg-[#3A4750] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Best solutions for <br /> your demanding collection
        </h1>
        <p className="mt-6 text-gray-300">
          Odio vulputate cras vel lacinia turpis volutpat adipiscing.
          Sollicitudin at velit, blandit tempus nunc in.
        </p>

        <ul className="mt-6 space-y-3">
          <li className="flex items-start gap-2">
            <Check className="text-green-400 mt-1" size={20} />
            <span>Interdum volutpat turpis malesuada ac turpis.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="text-green-400 mt-1" size={20} />
            <span>Tortor ipsum pretium quis nunc.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="text-green-400 mt-1" size={20} />
            <span>Vitae odio a id purus in.</span>
          </li>
        </ul>

        <button onClick={HandleBest} className="mt-8 px-6 py-3 bg-white text-gray-800 font-medium rounded-md shadow hover:bg-gray-200 transition">
          Explore Xinder
        </button>
      </div>

      <div className="flex-1 relative flex justify-center">

        <div className="absolute top-[-30px] right-10 w-72 h-44 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1503264116251-35a269479413"
            alt="colorful"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative w-[380px] h-[250px] bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-xl shadow-xl flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gray-600/60 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className="absolute -bottom-10 left-0 w-28 h-28 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
            alt="woman"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -top-8 -right-10 w-32 h-24 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            alt="man"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
