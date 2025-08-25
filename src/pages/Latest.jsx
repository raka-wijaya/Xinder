import React from 'react';
import Card from '../assets/Latest/pexels-capturedbyaugustine-19532206.jpg';
import Card1 from '../assets/Latest/pexels-pexels-32333375.jpg';
import Card2 from '../assets/Latest/pexels-lucaspezeta-3196536.jpg';


const masterpieces = [
  {
    id: 1,
    title: 'Flower Decorations',
    artist: 'by Melvina Spring',
    image: Card,
    artistImage: 'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Birthday Celebration',
    artist: 'by Melvina Spring',
    image: Card1,
    artistImage: 'https://images.pexels.com/photos/2085731/pexels-photo-2085731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Splash',
    artist: 'by Rwanda Melflor',
    image: 'https://images.pexels.com/photos/17596541/pexels-photo-17596541/free-photo-of-colorful-paints-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    artistImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    title: 'Colorful Face',
    artist: 'by Melvina Spring',
    image: Card2,
    artistImage: 'https://images.pexels.com/photos/14842938/pexels-photo-14842938/free-photo-of-woman-in-denim-jacket-and-painted-face.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const LatestMasterpieces = () => {
  return (
    <div className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Latest masterpieces</h2>
          <a href="/masterpieces" className="flex items-center text-blue-600 hover:text-blue-800 font-semibold">
            Discover More Masterpieces
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {masterpieces.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 lg:w-1/4 item xl:w-1/5 p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <a>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </a>
              <div className="p-4 md:p-6">
                <a href={`${item.id}`} className="block">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">{item.title}</h3>
                </a>
                <div className="flex items-center mt-2">
                  <img
                    src={item.artistImage}
                    alt={item.artist}
                    className="w-8 h-8 rounded-full object-cover mr-2"
                  />
                  <p className="text-gray-600 text-sm">{item.artist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestMasterpieces;