import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Button from './Button';
import { Images } from '../utils/Images'; // Adjust the import paths as needed

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='container mx-auto flex justify-between py-8 px-4 xl:px-[42px]'>
      <div className='max-h-[73px] max-w-[88px]'>
        <img src={logo} alt="Logo" />
      </div>
      
      {/* Desktop Menu */}
      <ul className='hidden lg:flex justify-center items-center text-[#464646] gap-8'>
        <a href="#"><li className='font-medium text-base'>Home</li></a>
        <a href="#"><li className='font-medium text-base'>About</li></a>
        <a href="#"><li className='font-medium text-base'>Empty Leg Listing</li></a>
        <a href="#"><li className='font-medium text-base'>Operators</li></a>
        <a href="#"><li className='font-medium text-base'>Flights</li></a>
        <a href="#"><li className='font-medium text-base'>Support</li></a>
        <a href="#"><li className='font-medium text-base'>Contact Us</li></a>
      </ul>

      <div className='hidden lg:flex gap-2 justify-center items-center'>
        <Button className="bg-white w-[99px] text-black border-2 border-[#2E3072]">Log in</Button>
        <Button className="bg-[#2E3072] w-[104px] text-white border-2 border-[#2E3072]">Register</Button>
      </div>

      {/* Mobile Toggle Icon */}
      <div className='lg:hidden flex items-center'>
        <img src={Images.toggle} alt="Toggle Menu" onClick={toggleSidebar} className="cursor-pointer" />
      </div>

      {/* Sidebar Menu */}
      {isSidebarOpen && (
        <div className='absolute top-0 right-0 w-[320px] h-full bg-white shadow-lg z-50 p-4 transition-transform transform'>
          {/* Close Button */}
          <div className='flex justify-end'>
            <img src={Images.cros} alt="Close Sidebar" onClick={toggleSidebar} className="cursor-pointer mb-4" />
          </div>

          {/* Buttons */}
          <div className='flex gap-5 px-4 mb-4'>
            <Button className="bg-white flex-1 text-black border-2 border-[#2E3072]">Log in</Button>
            <Button className="bg-[#2E3072] flex-1 text-white border-2 border-[#2E3072]">Register</Button>
          </div>

          <ul className='flex flex-col text-[#464646] gap-4'>
            <a href="#"><li className='font-medium text-base'>Home</li></a>
            <a href="#"><li className='font-medium text-base'>About</li></a>
            <a href="#"><li className='font-medium text-base'>Empty Leg Listing</li></a>
            <a href="#"><li className='font-medium text-base'>Operators</li></a>
            <a href="#"><li className='font-medium text-base'>Flights</li></a>
            <a href="#"><li className='font-medium text-base'>Support</li></a>
            <a href="#"><li className='font-medium text-base'>Contact Us</li></a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
