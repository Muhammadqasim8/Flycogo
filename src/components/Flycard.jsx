import React from 'react';

const Flycard = ({ quote, name, position, image }) => {
  return (
    <div className="flex flex-col justify-between items-start gap-16 container mx-auto bg-white py-6 lg:py-10 px-4">
      <p className="text-base font-normal text-[black] w-full  ">
        {quote}
      </p>
      <div className="flex flex-col gap-1 px-1 lg:px-3">
        <img className="h-12 w-12 pb-1" src={image} alt="testimonial" />
        <h3 className="text-base font-semibold text-[black]">{name}</h3>
        <p className="text-sm font-normal ">{position}</p>
      </div>
    </div>
  );
};

export default Flycard;
