"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageGallery() {
  const categories = [
    { key: "all", label: "All" },
    { key: "exterior", label: "Exterior Views" },
    { key: "lobby", label: "Lobby & Reception" },
    { key: "dining", label: "Dining & Restaurants" },
    { key: "decor", label: "Decor & Events" },
  ];

  const images = [
    { src: "/4.webp", category: "lobby" },
    { src: "/Deluxe-King.avif", category: "exterior" },
    { src: "/Deluxe-King.avif", category: "lobby" },
    { src: "/Deluxe-King.avif", category: "decor" },
    { src: "/Deluxe-King.avif", category: "dining" },
    { src: "/Deluxe-King.avif", category: "decor" },
    { src: "/Deluxe-King.avif", category: "dining" },
    { src: "/Deluxe-King.avif", category: "exterior" },
  ];

  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <section className="w-full px-4 sm:px-10 lg:px-24 py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <img src="/sublogo.svg" className="mx-auto w-80 mb-3 opacity-70" />
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
          Image Gallery
        </h1>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`px-4 py-2 rounded-md text-xs font-semibold border transition 
              ${
                active === cat.key
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-gray-600 hover:bg-black hover:text-white"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
        <AnimatePresence>
          {filtered.map((img, i) => (
            <motion.div
              key={`${img.src}-${i}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="break-inside-avoid mb-5 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            >
              <div className="relative w-full h-auto">
                <Image
                  src={img.src}
                  width={600}
                  height={600}
                  alt="Gallery"
                  className="w-full h-auto rounded-xl object-cover hover:scale-[1.03] transition duration-300"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
