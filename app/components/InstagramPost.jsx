"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function InstagramPost() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // simulate loading
  }, []);

  const posts = ["/4.webp", "/4.webp", "/4.webp", "/4.webp", "/4.webp"];

  const getRotation = (index) => {
    switch (index) {
      case 0: return "rotate(-10deg)";
      case 1: return "rotate(-5deg)";
      case 3: return "rotate(5deg)";
      case 4: return "rotate(10deg)";
      default: return "rotate(0deg)";
    }
  };

  return (
    <section className="w-full py-20 bg-[#1B1B1B] text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-3">
          <span className="w-10 h-px bg-gray-500"></span>
          <Image
            src="/sublogo.svg"
            width={140}
            height={40}
            alt="divider"
            className="mx-3"
          />
          <span className="w-10 h-px bg-gray-500"></span>
        </div>
        <h2 className="text-5xl font-semibold">Instagram Post</h2>
      </div>

      {/* Instagram Grid */}
      <div className="flex justify-center gap-10 flex-wrap px-10">
        {loading
          ? // ⭐ Skeleton Cards
            posts.map((_, index) => (
              <div
                key={index}
                className="relative w-[260px] h-[300px] rounded-3xl bg-gray-700 overflow-hidden animate-pulse shadow-lg"
                style={{ transform: getRotation(index) }}
              >
                <div className="absolute inset-0 bg-gray-600"></div>
              </div>
            ))
          : // ⭐ Actual Cards
            posts.map((img, index) => (
              <div
                key={index}
                className="relative w-[260px] h-[300px] rounded-3xl overflow-hidden shadow-lg transform hover:rotate-0 transition duration-500"
                style={{ transform: getRotation(index) }}
              >
                {/* Background Image */}
                <Image
                  src={img}
                  alt="instagram post"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-none opacity-0 hover:opacity-100 hover:backdrop-blur-sm transition duration-500 flex justify-center items-center">
                  <FaInstagram className="text-white text-5xl opacity-100 transition duration-500" />
                </div>
              </div>
            ))}
      </div>
    </section>
  );
}
