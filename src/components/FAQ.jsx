import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    { question: "Why do private jets have an advantage over commercial jets?", answer: "Private jets are fast and can save time on the ground and in the air. There are fewer baggage restrictions, charter clients can fly with their friends, family, or business colleagues and can utilize smaller regional airports." },
    { question: "Which airports can I fly through in a private jet?", answer: "Because private jets can access smaller airports with shorter runways, private charter clients have access to hundreds of small regional airports." },
    { question: "How far in advance do I need to set up a private charter?", answer: "Private jets can be booked with as little as four hours’ notice." },
    { question: "What type of jet is best for short domestic flights?", answer: "Typically, private jets fly routes under 1,500 miles. The most efficient jet for these routes is a Light jet." },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='bg-[#F7F0F770] bg-[44%] pb-16'>
      <div className='container mx-auto font-body py-[73px] flex flex-col justify-center items-center gap-8'>
      <h3 className='text-4xl font-semibold text-[#2E3072]'>FAQ’s</h3>
      <div className='flex flex-1 justify-center flex-col px-4 items-center'>
        {faqItems.map((item, index) => (
          <div key={index} className='py-4 border-b border-b-[#2E3072] max-w-[576px] w-full'>
            <div
              className='flex justify-start items-center gap-4 cursor-pointer group'
              onClick={() => handleToggle(index)}
            >
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`transition-transform duration-300 text-[#2E3072] ${openIndex === index ? 'rotate-180' : ''}`}
              />
              <p className='text-[#2E3072] text-xl font-semibold group-hover:underline'>{item.question}</p>
            </div>
            {openIndex === index && (
              <div className='mt-2 pl-8 text-lg font-normal text-[#2E3072]'>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;
