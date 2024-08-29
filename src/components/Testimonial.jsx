import React from "react";
import { Images } from "../utils/Images";
import Flycard from "./Flycard";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "“Bloomerang is a game changer for me and for my clients. I’ve used a lot of CRM systems in my career and I keep coming back to the adaptive nature of this software.it is really worth it for my work which is really amazing”",
      name: "Kishshana Palmer",
      position: "CEO",
      image: Images.t1,
    },
    {
      quote:
        "“If you’re ready for a software that will not only help you manage your donor information, but also your donor relationships, this is it. If I were in the market for software, I’d jump all over Bloomerang!”",
      name: "Sandy Rees",
      position: "Founder & CEO",
      image: Images.t2,
    },
    {
      quote:
        "“Fundraising is really ‘Relationship Raising.’ As nonprofits, we want our donors to fall in love with our mission. Bloomerang helps make that happen and simplifies the journey from prospects to donor engagement.”",
      name: "Tayyab Yunus",
      position: "CEO & Founder",
      image: Images.t3,
    },
  ];

  return (
    <div className="bg-[#FBF9FC]">
      <div className="container mx-auto font-body flex flex-col justify-around items-center gap-8 py-[73px]">
        <p className="font-body text-4xl text-center sm:text-start font-semibold text-[#2E3072]">
          Client Testimonial
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 px-8 gap-7 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <Flycard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
              image={testimonial.image}
            />
          ))}
        </div>
       
      </div>
      <img className="-mt-16 mx-4" src={Images.plane} alt="" />
     
    </div>
  );
};

export default Testimonial;
