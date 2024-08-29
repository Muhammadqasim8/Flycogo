import React from 'react';

const Card = ({ imgSrc, title, description }) => {
  const cardStyles = {
    boxShadow: '0px 4px 5.3px -1px #0000001A',
    
  };

  return (
    <div className='font-body border-transparent p-2 lg:p-4 border-4 rounded-[10px]' style={cardStyles}>
      <div className='flex justify-between gap-3'>
        <img className='h-[32px] w-[28px]' src={imgSrc} alt={title} />
        <div className='flex flex-col gap-2'>
          <h3 className='font-medium text-lg text-[#2E3072]'>{title}</h3>
          <p className='text-base font-normal text-[#161C2D] text-wrap'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
