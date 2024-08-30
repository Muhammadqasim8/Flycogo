import React from 'react';
import Card from './Card';
import { Images } from '../utils/Images';

const Step = () => {
  const cardData = [
    {
      imgSrc: Images.c1, 
      title: 'Submit',
      description: 'Enter Flight Details and Submit your request to our operator',
    },
    {
      imgSrc: Images.c2, 
      title: 'Book',
      description: 'Compare, Analyze,  and Confirm the best offer',
    },
    {
      imgSrc: Images.c3, 
      title: 'Pay & Go',
      description: 'Submit Payment and Enjoy the Flight',
    },
  ];

  return (
    <div className='container mx-auto  px-4 pt-2'>
      <div className='max-w-[1280px] bg-white text-white flex flex-col rounded-lg -mt-[180px] gap-8 pb-4' style={{
         boxShadow: '0px 4px 5.3px -1px #0000001A', }}> 
         <div className='flex '>
         <div className='bg-[#E9E9E9E5] rounded-tl-md py-4 sm:py-6 w-[30%] sm:w-[20%]'>
          <div className='flex justify-center items-center gap-1 sm:gap-4'>
            <img src={Images.v1} alt="icon" />
            <p className='text-base text-[#2E3072] font-semibold'>On Way</p>

          </div>

         </div>
         <div className='bg-[#2E3072] rounded-tr-md py-4 sm:py-6 w-[80%] flex justify-start items-center  gap-4 sm:gap-16 px-[4px]'>
          <div className='flex justify-center items-center gap-4'>
            <img src={Images.v2} alt="icon" />
            <p className=' text-base text-[#FFFFFF] font-normal'>Round Trip</p>

          </div>
          <div className='flex justify-center items-center gap-4'>
            <img src={Images.v3} alt="icon" />
            <p className='text-base text-[#FFFFFF] font-normal'>Multi City</p>

          </div>

         </div>
      <div>

      </div>
      </div>
      <div className=' hidden rounded-lg sm:grid  grid-cols-3  gap-5 lg:justify-between mx-6   bg-[#F8F3E7]'>
        
        <div className='flex   justify-around'>
        <div className='flex justify-between items-center gap-6 lg:gap-20 px-4  py-6 '>
          <p className='text-[#6A2E4D] text-sm font-medium'>From</p>
          <img src={Images.vector} alt="img" />

        </div>
        <div className='flex justify-between items-center gap-6 lg:gap-20 px-2 py-6 sm:border-l-[#ECECEC] sm:border-l'>
          <p className='text-[#6A2E4D] text-sm font-medium'>To</p>
          <img src={Images.vector} alt="img" />

        </div>
        </div>
        <div className='flex justify-around'>
        <div className='flex justify-between px-2 items-center gap-6 lg:gap-20  py-4 sm:border-l-[#ECECEC] sm:border-l'>
          <p className='text-[#6A2E4D] text-sm font-medium'>Date</p>
          <img src={Images.cal} alt="img" />

        </div>
        <div className='flex justify-between px-4 items-center gap-6 lg:gap-20 py-4 sm:border-l-[#ECECEC] sm:border-l'>
          <p className='text-[#6A2E4D] text-sm font-medium'>Time</p>
          <img src={Images.time} alt="img" />

        </div>
        </div>
        <div className='flex justify-between gap-2 items-center w-full px-2 lg:px-4 border-l-[#ECECEC] border-l '>
        <div className='flex flex-col justify-center items-center gap-2   py-4'>
          <p className='text-[#6A2E4D] text-sm font-medium'>Passenger/ Class</p>
         <p className='text-[#C5C5C5] text-xs font-medium'>1 Passenger, Economy</p>

        </div>
        <div className='bg-[#8D5F77] lg:py-4 py-2 px-4 lg:px-10 rounded-lg flex justify-center items-center'>
          <button className=''>Next</button>
        </div>
        
        
        

        </div>

      </div>
      <div className='flex flex-col gap-4 px-4  sm:hidden'>
     
      <div className='flex rounded-lg justify-between  px-2 bg-[#F8F3E7]'>
        <div className='flex justify-between px-2 items-center gap-20  py-4 sm:border-l-[#ECECEC] sm:border-l'>
          <p className='text-[#6A2E4D] text-sm font-medium'>From</p>
          <img src={Images.vector} alt="img" />

        </div>
        <div className='flex justify-between px-2 items-center gap-20 py-4 sm:border-l-[#ECECEC] sm:border-l'>
          <p className='text-[#6A2E4D] text-sm font-medium'>To</p>
          <img src={Images.vector} alt="img" />

        </div>
        </div>

        <div className='flex rounded-lg justify-between  px-2 bg-[#F8F3E7]'>
        <div className='flex justify-between px-2 items-center gap-20  py-4 sm:border-l-[#ECECEC] sm:border-l'>
          <p className='text-[#6A2E4D] text-sm font-medium'>Date</p>
          <img src={Images.cal} alt="img" />

        </div>
        <div className='flex justify-between px-4 items-center gap-14 py-4 sm:border-l-[#ECECEC] sm:border-l'>
          <p className='text-[#6A2E4D] text-sm font-medium'>Time</p>
          <img src={Images.time} alt="img" />

        </div>
        </div>
        <div className='flex bg-[#F8F3E7] rounded-lg justify-between gap-2 items-center w-full px-4 lg:px-4 border-l-[#ECECEC] border-l '>
        <div className='flex flex-col justify-center items-center gap-2   py-2'>
          <p className='text-[#6A2E4D] text-sm font-medium'>Passenger/ Class</p>
         <p className='text-[#C5C5C5] text-xs font-medium'>1 Passenger, Economy</p>

        </div>
        
        
        
        

        </div>
        <div className='flex justify-center'>
          <button className='bg-[#8D5F77] lg:py-4 py-2 px-4 lg:px-10 rounded-lg flex justify-center items-center'>Next</button>
        </div>



      </div>
      <div className='flex justify-start items-center px-2 sm:px-9 gap-[5px]'>
      <input
  type="checkbox"
  className="w-4 h-4 border-2 border-transparent rounded-md focus:ring-[#2E3072] focus:outline-none"
/>




        <p className='text-sm font-normal text-[#C4C4C4]'>I Agree to Flycogo’s terms and condition</p>

      </div>


      </div>
      <div className='px-1  sm:px-4 flex flex-col gap-4 justify-center items-center py-16'>
      <h1 className='text-[#232350] text-wrap max-w-[942px] font-body text-center text-3xl font-bold pb-8'>
        Quick and Simple 3 Steps booking that puts you in complete control
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 px-1 lg:px-10'>
        {cardData.map((card, index) => (
          <Card 
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Step;
