"use client";

import ContactForm from "@/app/components/Forms/ContactForm";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="font-sans ">

      {/* =================== AUTHENTIC LUXURY HERO =================== */}
      <section className="relative -mt-38 w-full h-[420px] md:h-[520px] overflow-hidden -z-40">
        <Image
          src="/Deluxe-King.avif"
          alt="Luxury Suite"
          fill
          priority
          className="object-cover brightness-[0.55]"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/60"></div>

        {/* Text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide drop-shadow-lg">
            Contact Us
          </h1>
          <p className="mt-3 text-lg opacity-90 max-w-2xl font-light">
            Reach out to our team for reservations, events, and personalized assistance.
          </p>
        </div>
      </section>

      {/* =================== CONTACT DETAILS CARD =================== */}
      <section className="container mx-auto px-6 -mt-20">
        <div className="bg-white/70 backdrop-blur-xl shadow-xl border border-white/50 rounded-3xl px-8 py-12 md:px-16">

          <h2 className="text-3xl font-serif text-center font-bold text-gray-900 mb-10">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            {/* Phone */}
            <div className="flex flex-col items-center">
              <div className="p-4 bg-[#C7A27C]/15 rounded-full border border-[#C7A27C]/30">
                <FiPhone className="text-3xl text-[#C7A27C]" />
              </div>
              <h4 className="mt-4 font-semibold text-lg">Phone</h4>
              <a href="tel:+919876543210" className="text-gray-700 hover:text-[#C7A27C] transition mt-1">
                +91 98765 43210
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <div className="p-4 bg-[#C7A27C]/15 rounded-full border border-[#C7A27C]/30">
                <FiMail className="text-3xl text-[#C7A27C]" />
              </div>
              <h4 className="mt-4 font-semibold text-lg">Email</h4>
              <a href="mailto:info@luxuryhotel.com" className="text-gray-700 hover:text-[#C7A27C] transition mt-1">
                info@luxuryhotel.com
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center">
              <div className="p-4 bg-[#C7A27C]/15 rounded-full border border-[#C7A27C]/30">
                <FiMapPin className="text-3xl text-[#C7A27C]" />
              </div>
              <h4 className="mt-4 font-semibold text-lg">Location</h4>
              <p className="text-gray-700 mt-1 leading-relaxed">
                Luxury Hotel,<br />
                City Center, Hyderabad,<br />
                Telangana, India – 500XXX
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================== FORM + PHOTO SECTION =================== */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-linear-to-br from-white to-[#f9f7f5] shadow-xl border border-gray-200 rounded-3xl p-10">
            <ContactForm
              title="Write To Us"
              description="Our team will respond within a few hours with complete details."
            />
          </div>

          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/Deluxe-King.avif"
              alt="Warm hotel ambience"
              width={900}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>

        </div>

        {/* =================== MAP =================== */}
        <div className="mt-24">
          <h2 className="text-3xl font-serif font-bold text-center mb-4">
            Locate Us
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
            Experience warm hospitality at our centrally located luxury property.
          </p>

          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Hotel Inner Circle - Location"
              src="https://maps.google.com/maps?q=Hotel%20Inner%20Circle%20Hyderabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
