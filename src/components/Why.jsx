import React from 'react'
import { Images } from '../utils/Images'

const Why = () => {
  return (
    <div className='bg-[#26225A] py-8'>
        <div className='container mx-auto flex flex-col justify-center items-center gap-8 '>
            <h3 className='font-body font-bold text-3xl text-white'>Why FlyCOGO?</h3>
            <div className='grid grid-cols-2 sm:grid-cols-4 justify-center px-4 gap-6'>
                <img  src={Images.w1} alt="img" />
                <img src={Images.w2} alt="img" />
                <img src={Images.w3} alt="img" />
                <img src={Images.w4} alt="img" />

            </div>
            <div className='p-2 flex  flex-col mx-10 justify-between items-center'>
            <div className=' grid  grid-cols-1 justify-center items-center   sm:grid-cols-3 sm:justify-start sm:items-center '>
            <div className='flex flex-col gap-2 justify-center sm:items-start items-center  px-4 sm:border-r-2 p-7 border-b-2 border-b-[#FF4E65] sm:border-r-[#FF4E65] sm:border-b-2 sm:border-b-[#EE27FF]'>
                    <p className='text-3xl font-medium text-[#FFFFFF]'>Transparent</p>
                    <p className='text-base font-normal text-center sm:text-start text-[#FFFFFF] pb-[1px] lg:pb-[23px] '>FlyCOGO was designed with the passenger in mind</p>

                </div>
                <div className='flex flex-col gap-2 justify-start items-center sm:items-start px-4 sm:border-r-2 p-7 sm:border-r-[#FF4E65] border-b-2 border-b-[#1657FF]'>
                    <p className='text-3xl font-medium text-[#FFFFFF]'>User Friendly</p>
                    <p className='text-base font-normal text-center sm:text-start text-[#FFFFFF] text-wrap'>FlyCOGO was designed with the Passenger and Charter Operators in mind</p>

                </div>

               
                <div className='flex flex-col gap-2 justify-start items-center sm:items-start px-4  p-[10px] lg:p-7 border-b-2 border-b-[#FF9B00] '>
                    <p className='text-3xl font-medium text-center sm:text-start text-[#FFFFFF]'>Fully Automated</p>
                    <p className='text-base font-normal text-center sm:text-start text-[#FFFFFF] pb-5 sm:pb-0'>FlyCOGO was designed with the Passenger and Charter Operators in mind</p>

                </div>

            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 justify-start items-start'>
            <div className='flex flex-col gap-2 justify-center p-8  px-4 sm:border-r-2 sm:border-r-[#FF9B00] border-b-2 border-b-[#EE27FF] sm:border-b-0 '>
                    <p className='text-3xl font-medium text-center sm:text-start text-[#FFFFFF]'>Real  Time  Quotes</p>
                    <p className='text-base font-normal text-center sm:text-start text-[#FFFFFF]'>Submit your flights details and Start receiving competitive quotes from the most reputable charter operators in the industry</p>

                </div>
                <div className='flex flex-col gap-2 justify-center p-8  px-4 border-b-2 border-b-[#FF9B00] sm:border-b-0 '>
                    <p className='text-3xl font-medium text-center sm:text-start text-[#FFFFFF]'>Full User Control</p>
                    <p className='text-base font-normal text-center sm:text-start text-[#FFFFFF]'>Review and Compare quotes and select the best offer that meets passengers specific travel requirements</p>

                </div>


            </div>
            


            </div>
        </div>
      
    </div>
  )
}

export default Why
