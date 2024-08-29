import React from 'react'
import { Images } from '../utils/Images'
import line from "../assets/line.png"

const Footer = () => {
  return (
    <div className='bg-[#F7F0F770] w-full  '>
        <div className=' container mx-auto px-0 sm:px-4 '>
        <div className=' flex flex-col-reverse sm:flex-row justify-center items-center  '>
      <div className='flex flex-col justify-start items-center sm:bg-white py-8 px-2 sm:px-10 sm:rounded-tl-lg sm:rounded-bl-lg  gap-16 sm:w-[40%]'>
        <img className='h-[131px] w-[158px]' src={Images.logo} alt="" />
        <div className='flex justify-center items-center gap-6'>
            <img src={Images.fb} alt="" />
            <img src={Images.insta} alt="" />
            <img src={Images.x} alt="" />
            <img src={Images.yt} alt="" />
        </div>

      </div>
      <div className='bg-[#2E3072] flex flex-col sm:flex-row justify-evenly items-center w-full sm:rounded-tr-lg sm:rounded-br-lg gap-10  lg:gap-14 p-6'>
        <ul className='flex flex-col justify-center  items-center  sm:items-start gap-4 '>
            <p className='text-base font-semibold text-white text-center pb-2'>ABOUT </p>
            <a href=""><li className='text-base font-light text-center text-white'>What is FlyCOGO</li></a>
            <a href=""><li className='text-base font-light text-center text-white'>Our Story</li></a>
            <a href=""><li className='text-base font-light text-center text-white'>Executive Team</li></a>
            <a href=""><li className='text-base font-light text-center text-white'>Why Fly Private?</li></a>
        </ul>
        <div className='block sm:hidden'>
          <img src={line} alt="" />
        </div>
        <ul className='flex flex-col justify-center items-center  sm:items-start gap-4 '>
            <p className='text-base font-semibold text-white pb-2'>SERVICES</p>
            <a href=""><li className='text-base font-light text-white'>Private Jet Charter</li></a>
            <a href=""><li className='text-base font-light text-white'>Empty Legs</li></a>
            <a href=""><li className='text-base font-light text-white'>Charter Operators</li></a>
            <a href=""><li className='text-base font-light text-white'>Brokers</li></a>
        </ul>
        <div className='block sm:hidden'>
          <img src={line} alt="" />
        </div>
        <ul className='flex flex-col justify-center items-center  sm:items-start gap-4 '>
            <p className='text-base font-semibold text-white pb-2'>QUESTIONS </p>
            <a href=""><li className='text-base font-light text-white'>FAQ</li></a>
            <a href=""><li className='text-base font-light text-white'>Support</li></a>
            <a href=""><li className='text-base font-light text-white'>Contact Us</li></a>
            <a href=""><li className='text-base font-light text-white'>Terms and Conditions</li></a>
        </ul>

      </div>
    </div>
        </div>
    </div>
  )
}

export default Footer
