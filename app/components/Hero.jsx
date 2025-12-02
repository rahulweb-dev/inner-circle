"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

export default function Hero() {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [child, setChild] = useState(0);

  return (
    <div className="relative -mt-36 w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/RHR_Festive_LandingPage_Atrium-1.mp4" type="video/mp4" />
      </video>

      {/* Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 -z-10"></div>

      {/* HERO CONTENT */}
      <div className="absolute top-[47%] left-1/2 -translate-x-1/2 text-center text-white w-full px-4">

        {/* Logo */}
        <Image
          src="/logo.png"   // <--- FIXED (put your logo here)
          width={120}
          height={120}
          className="mx-auto mb-4 opacity-90"
          alt="Hotel Logo"
        />

        <h1 className="text-4xl md:text-6xl font-[BodoniModa] font-bold leading-tight drop-shadow-2xl">
          Stay in Comfort,
          <br /> Book with Confidence
        </h1>

        <button className="mt-7 px-8 py-3 border border-white rounded-md hover:bg-white hover:text-black duration-300 font-medium">
          About More
        </button>
      </div>

      {/* BOOKING SYSTEM */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full 
      bg-black/40 backdrop-blur-xl px-6 md:px-10 py-7 
      flex flex-wrap md:flex-nowrap justify-between items-center text-white gap-6 shadow-[0_-4px_30px_rgba(0,0,0,0.4)]">

        {/* Check In */}
        <div className="flex flex-col flex-1">
          <label className="opacity-90 text-sm">Check In</label>
          <DatePicker
            selected={checkIn}
            onChange={(d) => setCheckIn(d)}
            className="bg-transparent border-b border-white/40 focus:outline-none mt-1 pb-1"
          />
        </div>

        {/* Check Out */}
        <div className="flex flex-col flex-1">
          <label className="opacity-90 text-sm">Check Out</label>
          <DatePicker
            selected={checkOut}
            onChange={(d) => setCheckOut(d)}
            className="bg-transparent border-b border-white/40 focus:outline-none mt-1 pb-1"
          />
        </div>

        {/* Adults */}
        <div className="flex flex-col flex-1">
          <label className="opacity-90 text-sm">Adult</label>
          <div className="flex items-center gap-4 mt-1">
            <button
              onClick={() => setAdults(Math.max(1, adults - 1))}
              className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-white/10"
            >
              -
            </button>
            <span className="text-lg">{adults}</span>
            <button
              onClick={() => setAdults(adults + 1)}
              className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-white/10"
            >
              +
            </button>
          </div>
        </div>

        {/* Children */}
        <div className="flex flex-col flex-1">
          <label className="opacity-90 text-sm">Child</label>
          <div className="flex items-center gap-4 mt-1">
            <button
              onClick={() => setChild(Math.max(0, child - 1))}
              className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-white/10"
            >
              -
            </button>
            <span className="text-lg">{child}</span>
            <button
              onClick={() => setChild(child + 1)}
              className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-white/10"
            >
              +
            </button>
          </div>
        </div>

        {/* Button */}
        <button className="bg-[#F54A00] hover:bg-[#d84300] px-10 py-3 rounded-md font-semibold whitespace-nowrap text-white shadow-xl">
          Check Now
        </button>
      </div>
    </div>
  );
}
