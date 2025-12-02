"use client"
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-20 pb-10 font-light">

      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* Column 1 */}
        <div>
          <h2 className="text-3xl font-serif font-bold flex items-center gap-2">
            <span className="text-[#d4a75b] text-4xl">🏰</span> MetroLuxe
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed tracking-wide">
            A luxury hotel experience crafted for elegance, comfort, and a truly
            unforgettable stay.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-6">
            <span className="w-10 h-10 bg-[#F54A00] rounded-full flex justify-center items-center hover:bg-[#c29448] transition cursor-pointer">
              <FaInstagram className="text-white text-lg" />
            </span>
            <span className="w-10 h-10 bg-[#F54A00] rounded-full flex justify-center items-center hover:bg-[#c29448] transition cursor-pointer">
              <FaFacebookF className="text-white text-lg" />
            </span>
            <span className="w-10 h-10 bg-[#F54A00] rounded-full flex justify-center items-center hover:bg-[#c29448] transition cursor-pointer">
              <FaLinkedinIn className="text-white text-lg" />
            </span>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-2xl font-serif font-semibold">Quick Links</h3>
          <div className="w-20 h-[2px] bg-[#F54A00] mt-2 mb-4"></div>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              Rooms & Suites
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Dining
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Spa & Wellness
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Special Offers
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Blog
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-2xl font-serif font-semibold">Guest Services</h3>
          <div className="w-20 h-[2px] bg-[#F54A00] mt-2 mb-4"></div>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              24/7 Front Desk
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Parking
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Room Service
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Free Wi-Fi
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Concierge Service
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-2xl font-serif font-semibold">Contact Us</h3>
          <div className="w-20 h-[2px] bg-[#F54A00] mt-2 mb-4"></div>

          <div className="space-y-6 text-gray-400">
            <div className="flex items-start gap-3 hover:text-white transition">
              <span className="bg-[#F54A00] p-2 rounded-md text-white text-xl">
                <MdPhone />
              </span>
              <div>
                <p className="font-medium">Call Us 24/7</p>
                <p>(+256) 2145.2156</p>
              </div>
            </div>

            <div className="flex items-start gap-3 hover:text-white transition">
              <span className="bg-[#F54A00] p-2 rounded-md text-white text-xl">
                <MdEmail />
              </span>
              <div>
                <p className="font-medium">Email Us</p>
                <p>info@metroluxe.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 hover:text-white transition">
              <span className="bg-[#F54A00] p-2 rounded-md text-white text-xl">
                <MdLocationOn />
              </span>
              <div>
                <p className="font-medium">Our Location</p>
                <p>XYZ Hilton 125 Town USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="border-t border-gray-700 mt-12 pt-6 pb-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2025 Metroluxe — All Rights Reserved
          </p>

          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Designed & Developed by <span className="text-[#F54A00] font-semibold">Broaddcast</span>
          </p>


          {/* <button
            onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
            className="bg-[#d4a75b] w-12 h-12 rounded-full flex justify-center items-center 
            text-white text-xl mt-4 md:mt-0 hover:bg-[#c4984b] transition shadow-lg"
          >
            <FaArrowUp />
          </button> */}
        </div>
      </div>
    </footer>
  );
}
