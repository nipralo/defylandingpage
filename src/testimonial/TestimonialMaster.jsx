"use client";

import Wrapper from "@/ui/Wrapper";
// Install modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonialData = [
  {
    name: "RAVI KUMAR",
    location: "Bangalore",
    image: "/images/ravi.webp",
    quote:
      "Becoming a certified drone pilot was the best decision I ever made. Now I earn ₹40,000 a month!",
    batch: "Batch of April 2025",
  },
  {
    name: "Unnati Shetty",
    location: "Bangalore",
    image: "/images/unnati_1.webp",
    quote:
      "Drones were my passion, but I didn’t know how to fly them professionally. Defy’s training made me skilled and confident in the air.",
    batch: "Batch of April 2025",
  },
  {
    name: "Unnati Shetty",
    location: "Bangalore",
    image: "/images/unnati_2.webp",
    quote:
      "Drones were my passion, but I didn’t know how to fly them professionally. Defy’s training made me skilled and confident in the air.",
    batch: "Batch of April 2025",
  },
];

export default function TestimonialMaster() {
  return (
    <section className="bg-primary-dark">
      <Wrapper>
        <h2 className="font-bold text-center mb-10 text-accent-gold">
          <span className="text-accent-gold">STORIES</span> OF SUCCESS
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className=" rounded-lg mt-10 mx-4 relative">
                <div className="flex flex-col lg:flex-row gap-4 md:gap-16 items-center">
                  <div className="">
                    <div className="relative">
                      <img
                        src="/svg/quote_start.svg"
                        className="absolute -top-4 md:-top-10 -left-2 md:-left-4 md:w-12 w-6"
                        alt="quote start"
                      />
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className=" aspect-[1/1] md:aspect-auto object-cover rounded-lg"
                      />
                      <img
                        src="/svg/quote_end.svg"
                        className="absolute bottom-8 -right-1 md:w-12 w-6"
                        alt="quote end"
                      />
                    </div>
                  </div>
                  {/* content */}
                  <div className="relative lg:w-[40%] py-8 h-full flex flex-col justify-center">
                    <div>
                      <h3 className="font-medium text-white mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="italic text-white/80 font-light tracking-wide mb-4">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-white mb-4 lg:mt-8 font-stretch-extra-expanded leading-7 md:leading-9 relative">
                      <img
                        src="/svg/quote_start.svg"
                        className="w-2 absolute top-2 -left-3"
                      />
                      {testimonial.quote}
                      <img
                        src="/svg/quote_end.svg"
                        className="w-2 inline ml-0.5 mb-4"
                      />
                      <p className="text-accent-gold italic font-light mt-6">
                        {testimonial.batch}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  );
}
