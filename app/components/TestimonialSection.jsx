"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Becket Hayd",
      role: "Finance",
      img: "/testimonials/user1.jpg",
      text: "Dabus nisl aliquet congue tellus nascetur lectus sapien mattis arcu dictumst augue volutpat felis etiam suspendisse rhoncus mauris dignissim ante",
      company: "Toy Jesh",
      rating: 5,
      color: "white",
    },
    {
      id: 2,
      name: "Julian Wyat",
      role: "Finance",
      img: "/testimonials/user2.jpg",
      text: "Dabus nisl aliquet congue tellus nascetur lectus sapien mattis arcu dictumst augue volutpat felis etiam suspendisse rhoncus mauris dignissim ante",
      company: "Contex",
      rating: 5,
      color: "orange",
    },
    {
      id: 3,
      name: "David Smith",
      role: "Finance",
      img: "/testimonials/user3.jpg",
      text: "Dabus nisl aliquet congue tellus nascetur lectus nascetur lectus sapien mattis arcu dictumst augue volutpat felis etiam suspendisse rhoncus mauris dignissim ante",
      company: "Toy Jesh",
      rating: 5,
      color: "white",
    },
    {
      id: 4,
      name: "Julian Wyat",
      role: "Finance",
      img: "/testimonials/user2.jpg",
      text: "Dabus nisl aliquet congue tellus nascetur lectus sapien mattis arcu dictumst augue volutpat felis etiam suspendisse rhoncus mauris dignissim ante",
      company: "Contex",
      rating: 5,
      color: "orange",
    },
    {
      id: 5,
      name: "Julian Wyat",
      role: "Finance",
      img: "/testimonials/user2.jpg",
      text: "Dabus nisl aliquet congue tellus nascetur lectus sapien mattis arcu dictumst augue volutpat felis etiam suspendisse rhoncus mauris dignissim ante",
      company: "Contex",
      rating: 5,
      color: "white",
    },
    {
      id: 6,
      name: "Julian Wyat",
      role: "Finance",
      img: "/testimonials/user2.jpg",
      text: "Dabus nisl aliquet congue tellus nascetur lectus sapien mattis arcu dictumst augue volutpat felis etiam suspendisse rhoncus mauris dignissim ante",
      company: "Contex",
      rating: 5,
      color: "orange",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#191919] bg-[url('/hex-bg.png')] bg-cover bg-center text-white relative">

      {/* Section Header */}
      <div className="text-center pb-10">
        <div className="flex items-center justify-center mb-4">
          <span className="w-10 h-px bg-gray-500"></span>
          <Image src="sublogo.svg" width={100} height={40} alt="divider" className="mx-4" />
          <span className="w-10 h-px bg-gray-500"></span>
        </div>

        <h2 className="text-5xl font-semibold">What Our Client Say</h2>
      </div>

      {/* Slider Container */}
      <div className="relative w-[90%] mx-auto">

        {/* Navigation buttons */}
        <div className="flex items-center gap-4 absolute right-0 -top-12 z-20">
          <button id="prevBtn" className="p-2 bg-white/10 rounded-md border border-white/20">
            <FaArrowLeft />
          </button>

          <p className="text-white/60 text-sm">
            <span id="currentSlide">03</span> / 04
          </p>

          <button id="nextBtn" className="p-2 bg-orange-500 rounded-md">
            <FaArrowRight />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: "#prevBtn",
            nextEl: "#nextBtn",
          }}
          spaceBetween={30}
          slidesPerView={1.1}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={t.id}>
              <div
                className={`
                  rounded-xl p-8 m-3 shadow-lg border 
                  rotate-[-5deg] 
                  ${t.color === "orange" ? "bg-[#CC704B] text-white" : "bg-white text-black"} 
                `}
              >
                {/* Profile */}
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{t.name}</h3>
                    <p className="text-sm opacity-70">{t.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <p className="text-yellow-500 mb-3 text-lg">
                  {"★".repeat(t.rating)}
                </p>

                {/* Message */}
                <p className="text-sm leading-relaxed mb-6">{t.text}</p>

                {/* Bottom CTA */}
                <div className="flex justify-between items-center">
                  <p className={`font-semibold ${t.color === "orange" ? "text-white" : "text-black"}`}>
                    {t.company}
                  </p>
                  <FaQuoteRight className="opacity-70" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
