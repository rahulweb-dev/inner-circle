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
  FaTimes,
  FaStar,
  FaFire,
  FaTag,
} from "react-icons/fa";

export default function RoomTabs() {
  const [active, setActive] = useState("standard");
  const [subTab, setSubTab] = useState("single");
  const [openForm, setOpenForm] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [active, subTab]);

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
        desc: "Executive class comfort for business travelers — quiet workspace included.",
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

    deluxe: {
      SINGLE: {
        title: "DELUXE KING — Single",
        desc: "A premium luxury room offering exceptional comfort and thoughtful details.",
        price: "₹1500",
        badges: ["Popular"],
        amenities: [
          { icon: <FaWifi />, label: "Wi-Fi" },
          { icon: <FaTv />, label: "4K TV" },
          { icon: <FaSnowflake />, label: "A/C" },
          { icon: <FaUtensils />, label: "Room Service" },
          { icon: <FaBath />, label: "Jacuzzi" },
          { icon: <FaBed />, label: "Deluxe King Bed" },
        ],
        images: ["/4.webp", "/4.webp", "/4.webp"],
      },
      DOUBLE: {
        title: "DELUXE KING — Double",
        desc: "Perfect for families or couples wanting extra space and comfort.",
        price: "₹1800",
        badges: ["Limited Offer"],
        amenities: [
          { icon: <FaWifi />, label: "Wi-Fi" },
          { icon: <FaTv />, label: "4K TV" },
          { icon: <FaSnowflake />, label: "A/C" },
          { icon: <FaUtensils />, label: "Room Service" },
          { icon: <FaBath />, label: "Jacuzzi" },
          { icon: <FaBed />, label: "King Bed" },
        ],
        images: ["/4.webp", "/4.webp", "/4.webp"],
      },
    },

    suite: {
      SINGLE: {
        title: "DELUXE SUITE — Single",
        desc: "Ultimate suite for a luxurious stay with VIP service & amenities.",
        price: "₹2500",
        badges: ["★ VIP", "Popular"],
        amenities: [
          { icon: <FaWifi />, label: "Wi-Fi" },
          { icon: <FaTv />, label: "OLED TV" },
          { icon: <FaSnowflake />, label: "Central A/C" },
          { icon: <FaUtensils />, label: "Butler Service" },
          { icon: <FaBath />, label: "Spa Bathroom" },
          { icon: <FaBed />, label: "Royal Bed" },
        ],
        images: ["/4.webp", "/4.webp", "/4.webp"],
      },
      DOUBLE: {
        title: "DELUXE SUITE — Double",
        desc: "The suite configured for two with expansive living space and perks.",
        price: "₹3200",
        badges: ["★ VIP", "Limited Offer"],
        amenities: [
          { icon: <FaWifi />, label: "Wi-Fi" },
          { icon: <FaTv />, label: "OLED TV" },
          { icon: <FaSnowflake />, label: "Central A/C" },
          { icon: <FaUtensils />, label: "Butler Service" },
          { icon: <FaBath />, label: "Spa Bathroom" },
          { icon: <FaBed />, label: "Royal Bed" },
        ],
        images: ["/4.webp", "/4.webp", "/4.webp"],
      },
    },
  };

  const room = rooms[active][subTab.toUpperCase()];

  return (
    <>
      <section className="w-full flex flex-col lg:flex-row bg-white text-black">

        {/* LEFT CONTENT */}
        <div
          key={animKey}
          className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-20 flex flex-col justify-start transition-all duration-500"
        >
          {/* Tabs */}
          <div className="flex gap-3 overflow-x-auto pb-2 mb-4">
            {Object.keys(rooms).map((k) => (
              <button
                key={k}
                onClick={() => {
                  setActive(k);
                  setSubTab("single");
                }}
                className={`px-3 py-2 text-xs font-medium rounded-md whitespace-nowrap transition 
                  ${active === k
                    ? "bg-black text-white"
                    : "bg-transparent text-gray-600 border border-gray-300"}`}
              >
                {k.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Single/Double Toggle */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold">Room Type</span>

            <div className="relative inline-flex items-center p-1 bg-gray-100 rounded-full">
              <button
                onClick={() => setSubTab("single")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${subTab === "single" ? "bg-black text-white shadow" : "text-gray-700"}`}
              >
                Single
              </button>

              <button
                onClick={() => setSubTab("double")}
                className={`px-4 py-2 rounded-full text-sm font-medium ml-1 transition
                  ${subTab === "double" ? "bg-black text-white shadow" : "text-gray-700"}`}
              >
                Double
              </button>
            </div>

            <div className="ml-auto flex gap-2 items-center">
              {room.badges.map((b, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-md bg-gradient-to-r from-orange-400 to-rose-500 text-white font-semibold flex items-center gap-1"
                >
                  {b.includes("VIP") ? <FaStar /> : b === "Popular" ? <FaFire /> : <FaTag />}
                  <span>{b.replace("★ ", "")}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            {room.title}
          </h3>
          <div className="w-20 h-1 bg-amber-500 mb-4 rounded-sm" />

          {/* Description */}
          <p className="text-gray-700 max-w-xl mb-6 text-sm md:text-base">
            {room.desc}
          </p>

          {/* Pricing */}
          <div className="flex items-center gap-4 flex-wrap mb-6">
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg w-full sm:w-auto">
              <div className="text-sm text-gray-500">From</div>
              <div className="text-2xl font-bold">{room.price}</div>
              <div className="text-xs text-gray-400">per night</div>
            </div>

            <div className="px-4 py-3 rounded-lg border border-gray-300 w-full sm:w-auto">
              <div className="text-xs text-gray-500">Best Price Guarantee</div>
              <div className="text-sm font-semibold">Includes taxes & fees</div>
            </div>
          </div>

          {/* Amenities */}
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-xl">
            {room.amenities.map((a, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="text-lg text-amber-500">{a.icon}</span>
                <span>{a.label}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white transition w-full sm:w-auto">
              Read More
            </button>

            <button
              onClick={() => setOpenForm(true)}
              className="px-6 py-3 bg-black text-white rounded-md hover:opacity-90 transition w-full sm:w-auto"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT — SWIPER IMAGES */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[420px] md:h-[500px] lg:h-[720px] relative overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            speed={700}
            className="w-full h-full"
          >
            {room.images.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full">
                  <Image src={src} fill alt="room" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* BOOKING MODAL */}
      {openForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">

            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-4 right-4 text-gray-700"
            >
              <FaTimes size={20} />
            </button>

            <h4 className="text-xl font-semibold mb-2">{room.title}</h4>
            <p className="text-sm text-gray-600 mb-4">{room.desc}</p>

            <form className="space-y-3">
              <input className="w-full border p-3 rounded" placeholder="Your name" />
              <input className="w-full border p-3 rounded" placeholder="Email address" />

              <div className="flex gap-3">
                <input type="date" className="w-1/2 border p-3 rounded" />
                <input type="date" className="w-1/2 border p-3 rounded" />
              </div>

              <div className="flex gap-3">
                <select className="w-1/2 border p-3 rounded">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                </select>

                <select className="w-1/2 border p-3 rounded">
                  <option>0 Child</option>
                  <option>1 Child</option>
                </select>
              </div>

              <button className="w-full bg-amber-500 text-white py-3 rounded font-semibold">
                Confirm Booking — {room.price}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
