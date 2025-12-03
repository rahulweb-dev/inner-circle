import React from 'react'
import ImageGallery from './Gallery'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <div className="relative -mt-36 w-full h-[380px] md:h-[460px] overflow-hidden">
        <Image
          src="/Deluxe-King.avif"
          alt="Rooms Banner"
          fill
          className="object-cover brightness-75 -z-40"
        />

        {/* Banner Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Our Luxury Rooms
          </h1>
          <p className="mt-3 text-lg opacity-90 max-w-xl">
            Discover a world of comfort, elegance and exclusive experiences.
          </p>
        </div>
      </div>
      <ImageGallery /></>
  )
}

export default page