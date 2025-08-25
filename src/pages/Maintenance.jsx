import React from 'react';
import { Link } from 'react-router-dom';

const MaintenancePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 p-4 font-sans">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-lg mb-8">
          Halaman yang Anda cari mungkin sedang dalam perbaikan atau tidak tersedia.
          <br className="hidden sm:block" />
          Silakan coba lagi nanti.
        </p>
        
        {/* Tombol kembali ke halaman utama */}
        <Link 
          to="/" 
          className="inline-block py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Kembali ke Halaman Utama
        </Link>
      </div>
    </div>
  );
};

export default MaintenancePage;