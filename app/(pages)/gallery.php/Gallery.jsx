"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageGallery() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("all");

  useEffect(() => {
    // Simulate API loading (replace with real API later)
    setTimeout(() => setLoading(false), 1500);
  }, []);

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

  const filtered =
    active === "all" ? images : images.filter((img) => img.category === active);

  return (
    <section className="w-full px-4 sm:px-10 lg:px-24 py-12">

      {/* Heading */}
      <div className="text-center mb-10">
        <Image
          src="/sublogo.svg"
          className="mx-auto w-80 mb-3 opacity-70"
          width={100}
          height={100}
          alt="sublogo"
        />
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
          Image Gallery
        </h1>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => !loading && setActive(cat.key)}
            className={`px-4 py-2 rounded-md text-xs font-semibold border transition
              ${active === cat.key && !loading
                ? "bg-black text-white border-black"
                : "border-gray-300 text-gray-600 hover:bg-black hover:text-white"}
              ${loading ? "opacity-50 cursor-not-allowed" : ""}
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">

        {/* ⭐ Skeleton Loading State */}
        {loading &&
          Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-5 rounded-xl overflow-hidden"
            >
              <div className="w-full h-60 bg-gray-200 rounded-xl animate-pulse"></div>
            </div>
          ))}

        {/* ⭐ Actual Gallery */}
        {!loading && (
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
                <Image
                  src={img.src}
                  width={600}
                  height={600}
                  alt="Gallery"
                  className="w-full h-auto rounded-xl object-cover hover:scale-[1.03] transition duration-300"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
