"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaUsers, FaBed } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import RoomCategories from "./RoomCategories";

export default function RoomsSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated loading delay
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const rooms = [
    {
      id: 1,
      title: "Garden View Room",
      img: "/4.webp",
      desc: "Mountain view, queen bed, admiring breakfast.",
      price: 19,
      size: "35 Feet's",
      bed: "2 Bed",
      guests: "2 Guests",
      bath: "2 Bathroom",
    },
    {
      id: 2,
      title: "Modern & Trendy Room",
      img: "/4.webp",
      desc: "2 bedrooms, living room, full kitchen, near kid's play zone.",
      price: 29,
      size: "40 Feet's",
      bed: "2 Bed",
      guests: "2 Guests",
      bath: "2 Bathroom",
    },
    {
      id: 3,
      title: "Mountain View Room",
      img: "/4.webp",
      desc: "King bed, fireplace, private balcony overlooking the slopes.",
      price: 35,
      size: "45 Feet's",
      bed: "2 Bed",
      guests: "2 Guests",
      bath: "2 Bathroom",
    },
    {
      id: 4,
      title: "Padma View Room",
      img: "/4.webp",
      desc: "Mountain view, queen bed, admiring breakfast.",
      price: 56,
      size: "48 Feet's",
      bed: "2 Bed",
      guests: "2 Guests",
      bath: "2 Bathroom",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <span className="w-12 h-[1px] bg-gray-400"></span>
          <Image
            src="/sublogo.svg"
            width={900}
            height={100}
            alt="divider"
            className="mx-6 opacity-80"
          />
          <span className="w-12 h-[1px] bg-gray-400"></span>
        </div>

        <h2 className="text-5xl font-serif font-bold text-gray-900 tracking-wide">
          Modern & Trendy Rooms
        </h2>
        <p className="text-gray-600 mt-3 text-lg font-light">
          Choose from our beautifully designed classic & luxury rooms
        </p>
      </div>

      {/* Rooms Grid */}
      <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 " data-aos="fade-up-right">
        {loading
          ? // ⭐ SKELETON LOADING CARDS
          Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-white border border-[#e8e3da] rounded-2xl shadow-md overflow-hidden"
            >
              {/* Image Skeleton */}
              <div className="w-full h-64 bg-gray-200"></div>

              {/* Content Skeleton */}
              <div className="p-6">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-6"></div>

                {/* Info Grid Skeleton */}
                <div className="grid grid-cols-2 gap-y-3">
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>

                {/* Button Skeleton */}
                <div className="mt-6 h-10 w-full bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          ))
          : // ⭐ ACTUAL ROOM CARDS
          rooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white border border-[#e8e3da] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={room.img}
                  alt={room.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>

                {/* Price Tag */}
                <span className="absolute top-4 left-4 bg-[#fffaf3] border border-[#e7d7b6] px-4 py-1 rounded-lg shadow text-[#8b6a2b] text-sm font-semibold">
                  From ${room.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
                  {room.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 font-light">
                  {room.desc}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2 text-[#a17c36] font-medium">
                    <TbRulerMeasure className="text-lg" /> {room.size}
                  </div>
                  <div className="flex items-center gap-2 text-[#a17c36] font-medium">
                    <FaBed className="text-lg" /> {room.bed}
                  </div>
                  <div className="flex items-center gap-2 text-[#a17c36] font-medium">
                    <FaUsers className="text-lg" /> {room.guests}
                  </div>
                  <div className="flex items-center gap-2 text-[#a17c36] font-medium">
                    <MdBathroom className="text-xl" /> {room.bath}
                  </div>
                </div>

                {/* Button */}
                <button className="mt-6 w-full py-2 border border-[#bfa374] text-[#8b6a2b] rounded-lg font-medium hover:bg-[#bfa374] hover:text-white transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>

      <RoomCategories />
    </section>
  );
}
