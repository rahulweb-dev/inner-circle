"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  FaWifi,
  FaTv,
  FaSnowflake,
  FaUtensils,
  FaBath,
  FaBed,
  FaStar,
  FaFire,
  FaTag,
} from "react-icons/fa";

import BookingForm from "../Forms/BookingForm";

export default function RoomTabs() {
  const [active, setActive] = useState("standard");
  const [subTab, setSubTab] = useState("single");
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const rooms = {
    standard: {
      SINGLE: {
        title: "SUPERIOR KING — Single",
        desc: "Perfect comfort for solo travelers with elegant design and modern amenities.",
        price: "₹690",
        badges: ["Popular"],
        amenities: [
          { icon: <FaWifi />, label: "Free Wi-Fi" },
          { icon: <FaTv />, label: "LED TV" },
          { icon: <FaSnowflake />, label: "A/C" },
          { icon: <FaUtensils />, label: "Breakfast" },
          { icon: <FaBath />, label: "Private Bathroom" },
          { icon: <FaBed />, label: "Single Bed" },
        ],
        images: ["/4.webp", "/4.webp", "/4.webp"],
      },
      DOUBLE: {
        title: "SUPERIOR KING — Double",
        desc: "Spacious double room ideal for couples. Cozy, elegant and feature-rich.",
        price: "₹960",
        badges: ["★ VIP"],
        amenities: [
          { icon: <FaWifi />, label: "Free Wi-Fi" },
          { icon: <FaTv />, label: "Smart TV" },
          { icon: <FaSnowflake />, label: "A/C" },
          { icon: <FaUtensils />, label: "Breakfast Included" },
          { icon: <FaBath />, label: "Luxury Bath" },
          { icon: <FaBed />, label: "King Bed" },
        ],
        images: ["/4.webp", "/4.webp", "/4.webp"],
      },
    },
    executive: {
      SINGLE: {
        title: "EXECUTIVE KING — Single",
        desc: "Executive comfort for business travelers — quiet workspace included.",
        price: "₹960",
        badges: ["Limited Offer"],
        amenities: [
          { icon: <FaWifi />, label: "High-Speed Wi-Fi" },
          { icon: <FaTv />, label: "Smart TV" },
          { icon: <FaSnowflake />, label: "Premium A/C" },
          { icon: <FaUtensils />, label: "Breakfast" },
          { icon: <FaBath />, label: "Exclusive Bath" },
          { icon: <FaBed />, label: "Single Bed" },
        ],
        images: ["/4.webp", "/4.webp", "/4.webp"],
      },
      DOUBLE: {
        title: "EXECUTIVE KING — Double",
        desc: "Premium double room with superior luxury and executive amenities.",
        price: "₹1200",
        badges: ["★ VIP"],
        amenities: [
          { icon: <FaWifi />, label: "High-Speed Wi-Fi" },
          { icon: <FaTv />, label: "4K Smart TV" },
          { icon: <FaSnowflake />, label: "Central Cooling" },
          { icon: <FaUtensils />, label: "Breakfast Included" },
          { icon: <FaBath />, label: "Luxury Bath" },
          { icon: <FaBed />, label: "Premium King Bed" },
        ],
        images: ["/4.webp", "/4.webp", "/4.webp"],
      },
    },
  };

  const room = rooms[active][subTab.toUpperCase()];

  return (
    <>
      <section className="w-full flex flex-col lg:flex-row bg-white text-black">
        
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-20">

          {/* ⭐ Skeleton Loader — LEFT */}
          {loading ? (
            <>
              {/* Tabs */}
              <div className="flex gap-3 mb-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-20 h-8 bg-gray-200 rounded-md animate-pulse"></div>
                ))}
              </div>

              {/* Toggle */}
              <div className="w-40 h-10 bg-gray-200 rounded-full mb-6 animate-pulse"></div>

              {/* Title */}
              <div className="w-3/4 h-8 bg-gray-200 rounded mb-4 animate-pulse"></div>

              {/* Description */}
              <div className="h-4 bg-gray-200 rounded mb-2 w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded mb-6 w-2/3 animate-pulse"></div>

              {/* Price Boxes */}
              <div className="flex gap-5 mb-6">
                <div className="w-32 h-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-40 h-20 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Amenities Skeleton */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <div className="w-32 h-12 bg-gray-200 rounded-md animate-pulse"></div>
                <div className="w-32 h-12 bg-gray-200 rounded-md animate-pulse"></div>
              </div>
            </>
          ) : (
            <>
              {/* REAL CONTENT WHEN LOADING COMPLETES */}
              {/* Tabs */}
              <div className="flex gap-3 overflow-x-auto pb-2 mb-4">
                {Object.keys(rooms).map((k) => (
                  <button
                    key={k}
                    onClick={() => {
                      setActive(k);
                      setSubTab("single");
                    }}
                    className={`px-3 py-2 text-xs font-medium rounded-md transition 
                      ${active === k ? "bg-black text-white" : "border border-gray-300 text-gray-600"}`}
                  >
                    {k.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Toggle */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setSubTab("single")}
                  className={`px-4 py-2 rounded-full text-sm font-medium 
                    ${subTab === "single" ? "bg-black text-white shadow" : "text-gray-700"}`}
                >
                  Single
                </button>

                <button
                  onClick={() => setSubTab("double")}
                  className={`px-4 py-2 rounded-full text-sm font-medium 
                    ${subTab === "double" ? "bg-black text-white shadow" : "text-gray-700"}`}
                >
                  Double
                </button>
              </div>

              <h3 className="text-3xl font-bold mb-3">{room.title}</h3>

              <div className="w-20 h-1 bg-amber-500 mb-4 rounded-sm"></div>

              <p className="text-gray-700 max-w-xl mb-6">{room.desc}</p>

              {/* Pricing */}
              <div className="flex gap-4 mb-6 flex-wrap">
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">From</div>
                  <div className="text-2xl font-bold">{room.price}</div>
                  <div className="text-xs text-gray-400">per night</div>
                </div>

                <div className="px-4 py-3 rounded-lg border border-gray-300">
                  <div className="text-xs text-gray-500">Best Price Guarantee</div>
                  <div className="text-sm font-semibold">Includes taxes & fees</div>
                </div>
              </div>

              {/* Amenities */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-xl">
                {room.amenities.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-amber-500 text-lg">{a.icon}</span>
                    <span>{a.label}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
                <button className="px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white transition">
                  Read More
                </button>

                <button
                  onClick={() => setOpenForm(true)}
                  className="px-6 py-3 bg-black text-white rounded-md hover:opacity-90 transition"
                >
                  Book Now
                </button>
              </div>
            </>
          )}
        </div>

        {/* RIGHT SIDE — IMAGE SWIPER */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[420px] md:h-[500px] lg:h-[720px] relative">

          {loading ? (
            <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          ) : (
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              loop
              className="w-full h-full"
            >
              {room.images.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-full">
                    <Image src={src} fill alt="room" className="object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>

      {openForm && (
        <BookingForm
          room={room}
          onClose={() => setOpenForm(false)}
        />
      )}
    </>
  );
}
