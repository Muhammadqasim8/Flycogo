import React from 'react';

const CharterCard = ({ id, name, position, quote, image }) => {
  return (
    <div className='flex flex-col justify-start items-start gap-6'>
      <p className='font-body font-bold text-2xl text-white'>{id}</p>
      <div className='flex justify-start items-center gap-3'>
        <img src={image} alt="img" />
        <div className='flex flex-col gap-1 justify-center'>
          <p className='font-semibold text-sm'>{name}</p>
          <p className='text-sm font-light'>{position}</p>
        </div>
      </div>
      <p className='text-base font-normal'>{quote}</p>
    </div>
  );
};

export default CharterCard;
