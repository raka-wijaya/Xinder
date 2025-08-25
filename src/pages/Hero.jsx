import React from 'react';
import Image from '../assets/Pexels Photo by Ketut Subiyanto.svg'
import Logos from './ClientLogos'
import Featured from './Featured'
import Latest from './Latest'
import ExpandingServices from './Expending';
import Best from './Best';
import Testi from './Testimoni'
import GallerySection from './Gallery';
import Art from './Art'
import Promo from './Promo'
import Footer from './Footer'

const HeroSection = () => {
  return (
    <>
    <div className="bg-[#6A1A36] text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Teks dan Form Pencarian (Sisi Kiri) */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Search the work of <br /> the best artists
          </h1>

          {/* Form Pencarian */}
          <div className="w-full max-w-lg">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="search for artists, work name, or category"
                className="w-full py-3 pl-12 pr-4 text-sm bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-4 text-xs font-semibold">
              <span className="bg-[#A44061] px-3 py-1 rounded-full">Promoted</span>
              <span className="bg-[#A44061] px-3 py-1 rounded-full">Featured</span>
            </div>
          </div>
          
          {/* Tag Kategori */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <span className="border border-white px-4 py-2 text-sm rounded-full">Oil Painting</span>
            <span className="border border-white px-4 py-2 text-sm rounded-full">Abstract Art</span>
            <span className="border border-white px-4 py-2 text-sm rounded-full">Sculpture</span>
            <span className="border border-white px-4 py-2 text-sm rounded-full">Art Deco</span>
            <span className="border border-white px-4 py-2 text-sm rounded-full">Pop Art</span>
          </div>
        </div>

        {/* Gambar (Sisi Kanan) */}
        <div className="hidden md:flex md:w-1/2 mt-10 md:mt-0 justify-center">
          <img
            src= {Image} // Ganti dengan URL gambar Anda
            alt="Woman looking at art"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        
      </div>
      <Logos/>
    </div>
    <Featured/>
    <Latest/>
    <ExpandingServices/>
    <Best/>
    <Testi/>
    <GallerySection/>
    <Art/>
    <Promo/>
    <Footer/>
    </>
  );
};

export default HeroSection;