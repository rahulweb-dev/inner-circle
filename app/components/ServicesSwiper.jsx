"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ServicesSwiper() {
  const services = [
    {
      title: "Wedding Planning",
      subtitle: "Your Dream Wedding, Perfectly Planned",
      img: "/Deluxe-King.avif",
    },
    {
      title: "Fine Dinning",
      subtitle: "Your Dream Wedding, Perfectly Planned",
      img: "/Deluxe-King.avif",
    },
    {
      title: "Corporate Event Decor",
      subtitle: "Your Dream Wedding, Perfectly Planned",
      img: "/Deluxe-King.avif",
    },
    {
      title: "Dinner Planning",
      subtitle: "Your Dream Wedding, Perfectly Planned",
      img: "/Deluxe-King.avif",
    },
    {
      title: "Dinner Planning",
      subtitle: "Your Dream Wedding, Perfectly Planned",
      img: "/Deluxe-King.avif",
    },
  ];

  return (
    <section className="w-full py-16 bg-white relative">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-xl tracking-wide text-[#7A7F42]">Our Services</h2>
        <p className="text-gray-600 mt-1">
          From Concept to Execution, We Handle Every Detail
        </p>
      </div>

      <div className="container mx-auto px-4 relative">

        {/* Left / Right Buttons */}
        <button
          className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <span className="text-2xl font-bold text-gray-700">‹</span>
        </button>

        <button
          className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <span className="text-2xl font-bold text-gray-700">›</span>
        </button>

        <Swiper
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-[420px] mx-auto">
                {/* image */}
                <div className="w-full h-[330px] sm:h-[400px] md:h-[420px] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* text */}
                <div className="py-4 text-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
