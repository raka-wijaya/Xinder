import React, { useRef } from 'react';
import Image from '../assets/Featured/pexels-flickr-156352 (1).jpg';
import Image1 from '../assets/Featured/pexels-pixabay-67552.jpg';
import '../App.css';

const categories = [
  {
    id: 1,
    title: 'Pottery',
    subtitle: 'Vases Family',
    image: 'https://images.pexels.com/photos/4096962/pexels-photo-4096962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Oil Painting',
    subtitle: 'Camel Portrait',
    image: 'https://images.pexels.com/photos/9941913/pexels-photo-9941913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Abstract Painting',
    subtitle: 'Euforia',
    image: 'https://images.pexels.com/photos/15707743/pexels-photo-15707743/free-photo-of-abstract-painting-in-blue-yellow-red-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    title: 'Animal Portrait',
    subtitle: 'Contemplative Cat',
    image: Image,
  },
  {
    id: 5,
    title: 'Wildlife Photography',
    subtitle: 'Giraffe Portrait',
    image: Image1,
  },
];

const FeaturedCategories = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Sesuaikan nilai scroll
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Featured art categories</h2>
          <a href="/categories" className="flex items-center text-blue-600 hover:text-blue-800 font-semibold">
            View All Categories
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 md:grid md:grid-cols-2 lg:grid-cols-5 md:gap-8 hide-scrollbar scroll-smooth"
        >
          {categories.map((category) => (
            <a key={category.id} className="flex-shrink-0 w-64 md:w-auto h-80 rounded-lg overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white z-10">
                <p className="text-sm font-light opacity-80">{category.title}</p>
                <h3 className="text-xl font-bold">{category.subtitle}</h3>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <button onClick={scrollLeft} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button onClick={scrollRight} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default FeaturedCategories;