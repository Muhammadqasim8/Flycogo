import React from 'react';
import CharterCard from './CharterCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Fly.css'

import { Images } from '../utils/Images';

const Charter = () => {
  
  const charters = [
    {
      id: "01",
      name: "Isabella Chavez",
      position: "Graphic Designer",
      quote: "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
      image: Images.chart,
    },
    {
      id: "02",
      name: "Isabella Chavez",
      position: "Marketing Manager",
      quote: "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
      image: Images.chart,
    },
    {
      id: "03",
      name: "Emily Brown",
      position: "Web Developer",
      quote: "“This is hands down the best service we've ever received. Highly recommend!”",
      image: Images.chart,
    },
    {
      id: "04",
      name: "Michael Scott",
      position: "Sales Manager",
      quote: "“Your work is amazing. We've seen a significant increase in conversions since the redesign.”",
      image: Images.chart,
    },
    {
        id: "05",
        name: "Michael Scott",
        position: "Sales Manager",
        quote: "“Your work is amazing. We've seen a significant increase in conversions since the redesign.”",
        image: Images.chart,
      },
      {
        id: "06",
        name: "Michael Scott",
        position: "Sales Manager",
        quote: "“Your work is amazing. We've seen a significant increase in conversions since the redesign.”",
        image: Images.chart,
      },
      {
        id: "07",
        name: "Michael Scott",
        position: "Sales Manager",
        quote: "“Your work is amazing. We've seen a significant increase in conversions since the redesign.”",
        image: Images.chart,
      },
      {
        id: "08",
        name: "Michael Scott",
        position: "Sales Manager",
        quote: "“Your work is amazing. We've seen a significant increase in conversions since the redesign.”",
        image: Images.chart,
      },
  ];

  return (
    <div className='bg-[#26225A] py-[73px]'> 
      <div className='container mx-auto font-body text-white flex flex-col justify-center items-center px-5 sm:px-10 gap-10'>
        <h3 className='text-2xl text-center sm:text-4xl font-semibold '>Charter Operator Review</h3>
        <div className='px-4 w-full'>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            style={{ paddingBottom: 40 }}
            className="mySwiper"
            breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
                1440: {
                    slidesPerView: 4,
                },
            }}
          >
            {charters.map((charter, index) => (
              <SwiperSlide key={index}>
                <CharterCard
                  id={charter.id}
                  name={charter.name}
                  position={charter.position}
                  quote={charter.quote}
                  image={charter.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Charter;
