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
        <h2 className="text-center mb-heading text-accent-gold">
          <span className="text-accent-gold">STORIES</span> OF SUCCESS
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className=" rounded-lg lg:mt-10 mt-5 mx-2 relative">
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-14 items-center">
                  <div className="lg:w-[60%]">
                    <div className="relative">
                      <img
                        src="/svg/quote_start.svg"
                        className="absolute -top-4 md:-top-10 -left-2 md:-left-4 md:w-12 w-6"
                        alt="quote start"
                      />
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full aspect-[1/1] md:aspect-auto object-cover rounded-lg"
                      />
                      <img
                        src="/svg/quote_end.svg"
                        className="absolute bottom-8 -right-1 md:w-12 w-6 z-20"
                        alt="quote end"
                      />
                      <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-primary to-transparent to-30% z-10 rounded-[7px]"></div>
                      <div className="lg:hidden absolute h-fit bottom-3 right-6 z-20">
                        <h3 className="font-medium text-white mb-0">
                          {testimonial.name}
                        </h3>
                        <p className="italic text-white/80 font-light tracking-wide">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* content */}
                  <div className="relative lg:w-[30%] py-4 md:py-8 h-full flex flex-col justify-center">
                    <div className="hidden lg:block">
                      <h3 className="font-medium text-white mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="italic text-white/80 font-light tracking-wide">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-white mb-4 lg:mt-8 font-stretch-expanded relative">
                      <p className="relative leading-6 text-justify md:leading-9">
                        <img
                          src="/svg/quote_start.svg"
                          className="w-2 inline-block mb-2 mr-0.5"
                        />
                        {testimonial.quote}
                        <img
                          src="/svg/quote_end.svg"
                          className="w-2 inline ml-0.5 mb-2"
                        />
                      </p>
                      <p className="text-accent-gold italic font-light mt-2 md:mt-4 lg:mt-6">
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
