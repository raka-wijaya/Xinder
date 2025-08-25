import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from '../assets/Latest/pexels-lucaspezeta-3196536.jpg'
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Splash",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    author: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 2,
    title: "Colorful Face",
    img: Image,
    author: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 3,
    title: "Street Art",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    author: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const GallerySection = () => {
    const Navigate = useNavigate();

    const HandleGallery = () => {
        Navigate('/gallery');
    }
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#3A4750] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 items-center">

        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold">Be incredible</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">
            Nec ultricies eget placerat ultricies eleifend dignissim aliquet sapien.
            Senectus vestibulum, eget erat at et congue cursus pretium.
          </p>
          <button onClick={HandleGallery} className="mt-8 px-8 py-3 bg-transparent border border-white rounded-md font-semibold hover:bg-white hover:text-[#3A4750] transition">
            GET STARTED
          </button>
        </div>

        <div className="order-1 md:order-2 relative w-full h-[450px] md:h-[500px] flex items-center justify-center">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`
                absolute transition-all duration-500 ease-in-out transform
                w-[250px] h-[350px] md:w-[300px] md:h-[400px]
                rounded-lg shadow-lg overflow-hidden
                ${
                  index === current
                    ? "scale-110 opacity-100 z-20"
                    : index === (current - 1 + items.length) % items.length
                    ? "scale-90 opacity-50 z-10 translate-x-[-120px] md:translate-x-[-200px]"
                    : index === (current + 1) % items.length
                    ? "scale-90 opacity-50 z-10 translate-x-[120px] md:translate-x-[200px]"
                    : "scale-80 opacity-0 z-0"
                }
              `}
            >
              <div className="relative h-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm">
                  <img
                    src={item.author}
                    alt={item.title}
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-medium text-sm">{item.title}</p>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 text-gray-800 rounded-full p-2 shadow-lg hover:bg-white z-30 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 text-gray-800 rounded-full p-2 shadow-lg hover:bg-white z-30 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;