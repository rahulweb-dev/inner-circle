"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function EventHero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('/pattern.png')] bg-cover bg-center"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* LEFT SIDE CONTENT */}
        <div className="lg:w-1/2 text-center lg:text-left">

          {/* ⭐ Skeleton Loading */}
          {loading ? (
            <>
              {/* Banner skeleton */}
              <div className="mx-auto lg:mx-0 mb-6 w-52 sm:w-64 md:w-80 lg:w-[420px] h-6 bg-gray-200 rounded animate-pulse"></div>

              {/* Title skeleton */}
              <div className="h-8 sm:h-10 bg-gray-200 rounded w-3/4 mx-auto lg:mx-0 mb-4 animate-pulse"></div>
              <div className="h-8 sm:h-10 bg-gray-200 rounded w-2/3 mx-auto lg:mx-0 mb-4 animate-pulse"></div>

              {/* Paragraph skeleton */}
              <div className="h-4 bg-gray-200 rounded w-full mx-auto lg:mx-0 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto lg:mx-0 mb-6 animate-pulse"></div>

              {/* Buttons skeleton */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="w-40 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-40 h-12 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </>
          ) : (
            <>
              {/* Banner Flags */}
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Image
                  src="/decortion/line-vector.png"
                  alt="flags"
                  width={380}
                  height={40}
                  className="w-52 sm:w-64 md:w-80 lg:w-[420px]"
                />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Create <span className="text-[#F9811D]">Special Moments</span> <br className="hidden md:block" />
                for Your Event
              </h1>

              <p className="text-gray-600 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                From intimate gatherings to grand celebrations, we design unforgettable
                experiences tailored to your vision. Let us turn your dreams into reality!
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
                <button className="bg-[#F9811D] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-lg shadow hover:bg-[#e27113] transition">
                  Book Now
                </button>

                <button className="border border-[#F9811D] text-[#F9811D] px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-lg hover:bg-[#fff7f2] transition">
                  Explore Services
                </button>
              </div>
            </>
          )}
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="lg:w-1/2 relative flex items-center justify-center mt-10 lg:mt-0">

          {loading ? (
            <>
              {/* BACK IMAGE skeleton */}
              <div className="hidden md:block absolute right-0 top-0 translate-x-10 sm:translate-x-14 lg:translate-x-20 -translate-y-6 sm:-translate-y-8">
                <div className="w-40 sm:w-56 md:w-64 lg:w-72 h-56 sm:h-80 md:h-96 lg:h-[420px] rounded-2xl bg-gray-200 animate-pulse"></div>
              </div>

              {/* MAIN IMAGE skeleton */}
              <div className="w-56 sm:w-72 md:w-80 lg:w-[420px] h-64 sm:h-80 md:h-[440px] lg:h-[520px] rounded-3xl bg-gray-200 animate-pulse z-20"></div>

              {/* FRONT IMAGE skeleton */}
              <div className="absolute left-0 bottom-0 translate-x-[-10px] sm:translate-x-[-20px] md:translate-x-[-30px] lg:translate-x-[-40px] translate-y-[30px] sm:translate-y-[40px] md:translate-y-[50px] lg:translate-y-[60px]">
                <div className="w-40 sm:w-52 md:w-60 lg:w-64 h-52 sm:h-64 md:h-72 lg:h-80 rounded-3xl bg-gray-200 animate-pulse"></div>
              </div>
            </>
          ) : (
            <>
              {/* Back Image */}
              <div className="hidden md:block absolute right-0 top-0 translate-x-10 sm:translate-x-14 lg:translate-x-20 -translate-y-6 sm:-translate-y-8">
                <div className="w-40 sm:w-56 md:w-64 lg:w-72 h-56 sm:h-80 md:h-96 lg:h-[420px] rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/4.webp" alt="Event Image" width={300} height={400} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Main Image */}
              <div className="w-56 sm:w-72 md:w-80 lg:w-[420px] h-64 sm:h-80 md:h-[440px] lg:h-[520px] rounded-3xl overflow-hidden shadow-xl relative z-20">
                <Image src="/4.webp" alt="Event Hall" width={500} height={600} className="w-full h-full object-cover" />
              </div>

              {/* Front Image */}
              <div className="absolute left-0 bottom-0 translate-x-[-10px] sm:translate-x-[-20px] md:translate-x-[-30px] lg:translate-x-[-40px] translate-y-[30px] sm:translate-y-[40px] md:translate-y-[50px] lg:translate-y-[60px]">
                <div className="w-40 sm:w-52 md:w-60 lg:w-64 h-52 sm:h-64 md:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-xl bg-white">
                  <Image src="/4.webp" alt="Dining Setup" width={260} height={350} className="w-full h-full object-cover" />
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
}
