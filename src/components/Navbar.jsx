import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-[#6A1A36] text-white fixed top-0 left-0 right-0 z-90'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>xinder</h1>
        <div className='hidden md:flex items-center gap-10'>
          <ul className='flex gap-10'>
            <li>
              <a href="/explore" className='hover:text-gray-300'>Explore</a>
            </li>
            <li>
              <a href="/solutions" className='hover:text-gray-300'>Solutions</a>
            </li>
            <li>
              <a href="/articles" className='hover:text-gray-300'>Articles</a>
            </li>
            <li>
              <a href="/signin" className='hover:text-gray-300'>Sign in</a>
            </li>
          </ul>
          <a
            href="/getstarted"
            className='font-sans text-sm font-bold border border-white px-5 py-2 rounded hover:bg-white hover:text-[#6A1A36] transition-colors duration-300'
          >
            Get Started
          </a>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden px-4 py-2`}>
        <ul className='flex flex-col gap-4'>
          <li>
            <a href="/explore" className='block py-2 hover:bg-[#8B2D4F] rounded-md'>Explore</a>
          </li>
          <li>
            <a href="/solutions" className='block py-2 hover:bg-[#8B2D4F] rounded-md'>Solutions</a>
          </li>
          <li>
            <a href="/articles" className='block py-2 hover:bg-[#8B2D4F] rounded-md'>Articles</a>
          </li>
          <li>
            <a href="/signin" className='block py-2 hover:bg-[#8B2D4F] rounded-md'>Sign in</a>
          </li>
          <li>
            <a
              href="/getstarted"
              className='block text-center font-sans text-sm font-bold border border-white px-5 py-2 rounded hover:bg-white hover:text-[#6A1A36] transition-colors duration-300 mt-2'
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;