"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [eventDropdown, setEventDropdown] = useState(false); // NEW DROPDOWN STATE

  return (
    <>
      {/* UPPER NAVBAR */}
      <div className="flex justify-between items-center px-10 py-3 text-white/90 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="flex gap-5">
          <FaInstagram /> <FaFacebookF /> <FaLinkedinIn />
        </div>

        <div className="flex items-center gap-2">
          <FaPhone /> +125055550199
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="w-full flex justify-between items-center px-12 py-5 text-white bg-black/20 backdrop-blur-md border-b border-white/10 relative z-20">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logos/HIC-white-logo.png"
            alt="logo"
            width={220}
            height={240}
            className="w-auto h-16 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">

          <li className="hover:text-orange-300 duration-200 cursor-pointer">Home</li>

          <Link href="/ice_spice.php">
            <li className="hover:text-orange-300 duration-200 cursor-pointer">Restaurant</li>
          </Link>

          {/* Rooms */}
          <Link href="/rooms.php">
            <li className="hover:text-orange-300 duration-200 cursor-pointer">Rooms</li>
          </Link>
          <Link href="/gallery.php">
            <li className=" hover:text-orange-300 duration-200 cursor-pointer">Gallery</li>
          </Link>
          {/* Special Events Dropdown (NEW) */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setEventDropdown(true)}
            onMouseLeave={() => setEventDropdown(false)}
          >
            Special Events ▾
            {eventDropdown && (
              <div className="absolute top-6 left-0 bg-white text-black rounded shadow-lg py-3 w-60">
                <Link href='banqueting-halls-&-private-dining'  ><p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Banqueting Halls & Private Dining
                </p></Link>
              </div>
            )}
          </li>

          {/* Blog & Contact */}
          <li className="hover:text-orange-300 duration-200 cursor-pointer">Blog</li>
          <Link href='/contact.php'><li className="hover:text-orange-300 duration-200 cursor-pointer">Contact</li></Link>
        </ul>

        {/* Right Button */}
        <div className="hidden md:flex items-center gap-6">
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black duration-300">
            Reservation
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* ULTRA PREMIUM MOBILE MENU */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 
  bg-[rgba(0,0,0,0.75)] backdrop-blur-xl 
  text-white z-[100] shadow-[0_0_40px_rgba(0,0,0,0.6)]
  border-l border-[#e8c27d]/30
  transform ${open ? "translate-x-0" : "translate-x-full"} 
  transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]`}
      >

        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#e8c27d]/20 bg-black/20 backdrop-blur-lg">
          <span className="text-xl font-semibold tracking-wider text-[#e8c27d]">
            MENU
          </span>

          <FaTimes
            onClick={() => setOpen(false)}
            className="text-2xl cursor-pointer hover:text-[#e8c27d] transition-all"
          />
        </div>

        {/* MENU LIST */}
        <ul className="flex flex-col px-6 py-8 gap-6 text-[18px] tracking-wide font-light">

          {/* HOME */}
          <Link href="/" onClick={() => setOpen(false)}>
            <li className="group cursor-pointer flex justify-between items-center">
              <span className="group-hover:text-[#e8c27d] transition-all">Home</span>
              <div className="opacity-0 group-hover:opacity-100 transition-all w-2 h-2 bg-[#e8c27d] rounded-full" />
            </li>
          </Link>

          {/* ROOMS */}
          <Link href="/rooms.php" onClick={() => setOpen(false)}>
            <li className="group cursor-pointer flex justify-between items-center">
              <span className="group-hover:text-[#e8c27d] transition-all">Rooms</span>
              <div className="opacity-0 group-hover:opacity-100 w-2 h-2 bg-[#e8c27d] rounded-full transition-all" />
            </li>
          </Link>

          {/* RESTAURANT */}
          <Link href="/ice_spice.php" onClick={() => setOpen(false)}>
            <li className="group cursor-pointer flex justify-between items-center">
              <span className="group-hover:text-[#e8c27d] transition-all">Restaurant</span>
              <div className="opacity-0 group-hover:opacity-100 w-2 h-2 bg-[#e8c27d] rounded-full transition-all" />
            </li>
          </Link>

          {/* SPECIAL EVENTS DROPDOWN */}
          <details className="group border-b border-[#e8c27d]/20 pb-4">
            <summary className="cursor-pointer flex justify-between items-center list-none group-hover:text-[#e8c27d] transition-all">
              Special Events
              <span className="text-[#e8c27d] opacity-70 group-hover:opacity-100 transition">▾</span>
            </summary>

            <div className="ml-3 mt-4 flex flex-col gap-4 text-base text-gray-300">

              <Link
                href="/banqueting-halls-&-private-dining"
                onClick={() => setOpen(false)}
              >
                <p className="hover:text-[#e8c27d] transition cursor-pointer">
                  Banqueting Halls & Private Dining
                </p>
              </Link>

            </div>
          </details>

          {/* GALLERY */}
          <Link href="/gallery.php" onClick={() => setOpen(false)}>
            <li className="group cursor-pointer flex justify-between items-center">
              <span className="group-hover:text-[#e8c27d] transition-all">Gallery</span>
              <div className="opacity-0 group-hover:opacity-100 w-2 h-2 bg-[#e8c27d] rounded-full transition-all" />
            </li>
          </Link>

          {/* BLOG */}
          <Link href="#" onClick={() => setOpen(false)}>
            <li className="group cursor-pointer flex justify-between items-center">
              <span className="group-hover:text-[#e8c27d] transition-all">Blog</span>
              <div className="opacity-0 group-hover:opacity-100 w-2 h-2 bg-[#e8c27d] rounded-full transition-all" />
            </li>
          </Link>

          {/* CONTACT */}
          <Link href="/contact.php" onClick={() => setOpen(false)}>
            <li className="group cursor-pointer flex justify-between items-center">
              <span className="group-hover:text-[#e8c27d] transition-all">Contact</span>
              <div className="opacity-0 group-hover:opacity-100 w-2 h-2 bg-[#e8c27d] rounded-full transition-all" />
            </li>
          </Link>

          {/* RESERVATION */}
          <button
            onClick={() => setOpen(false)}
            className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r 
      from-[#e8c27d] to-[#f7dca4] text-black font-semibold 
      shadow-[0_0_20px_rgba(232,194,125,0.5)]
      hover:shadow-[0_0_30px_rgba(232,194,125,0.7)] transition-all"
          >
            Reservation
          </button>

        </ul>
      </div>



    </>
  );
}
