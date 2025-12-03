"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
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

          {/* Pages Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            Pages ▾
            {dropdown && (
              <div className="absolute top-6 left-0 bg-white text-black rounded shadow-lg py-3 w-48">
                <Link href="/gallery">
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Gallery</p>
                </Link>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Restaurant</p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Spa & Wellness</p>
              </div>
            )}
          </li>

          {/* Rooms */}
          <Link href="/rooms.php">
            <li className="hover:text-orange-300 duration-200 cursor-pointer">Rooms</li>
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
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Banqueting Halls & Private Dining
                </p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Dinner & Dance Venues
                </p>
              </div>
            )}
          </li>

          {/* Blog & Contact */}
          <li className="hover:text-orange-300 duration-200 cursor-pointer">Blog</li>
          <li className="hover:text-orange-300 duration-200 cursor-pointer">Contact</li>
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black/90 text-white z-30 transform ${open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
      >
        <ul className="flex flex-col p-6 gap-6 text-lg">
          <li>Home</li>
          <li>Rooms</li>
          {/* Mobile Special Events Dropdown */}
          <details className="cursor-pointer">
            <summary>Special Events</summary>
            <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
              <p>Banqueting Halls & Private Dining</p>
              <p>Dinner & Dance Venues</p>
            </div>
          </details>

          {/* Mobile Pages Dropdown */}
          <details className="cursor-pointer">
            <summary>Pages</summary>
            <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
              <Link href="/gallery.php">Gallery</Link>
              <p>Restaurant</p>
              <p>Spa & Wellness</p>
            </div>
          </details>

          <li>Blog</li>
          <li>Contact</li>

          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black duration-300">
            Reservation
          </button>
        </ul>
      </div>
    </>
  );
}
