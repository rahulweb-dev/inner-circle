'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import {
  FaLock,
  FaUserAlt,
  FaSignInAlt,
} from 'react-icons/fa';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HotelAdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false); // 👀 NEW
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        '/api/admin/login',
        { email, password },
        { withCredentials: true }
      );

      if (res.status === 200) {
        toast.success('Login successful!');
        router.push('/admin/dashboard');
      }
    } catch (error) {
      toast.error(error.response?.data?.error || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#0b0b0b] overflow-hidden">

      {/* GOLD GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-amber-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-yellow-300/10 blur-[180px] rounded-full" />
        <div className="absolute top-1/2 -left-20 w-[300px] h-[300px] bg-amber-600/10 blur-[150px] rounded-full" />
      </div>

      {/* CONTAINER */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:flex w-1/2 h-[600px] relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/4.webp"
            alt="Hotel Lobby"
            fill
            className="object-cover brightness-90"
          />
          <h1 className="absolute bottom-10 left-10 text-white font-serif text-4xl font-bold drop-shadow-lg">
            HOTEL INNER CIRCLE
          </h1>
        </motion.div>

        {/* LOGIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 p-10"
        >
          <div className="p-8 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl">

            {/* LOGO */}
            <div className="text-center mb-6">
              <Image
                src="/logos/HIC-white-logo.png"
                width={150}
                height={80}
                alt="Hotel Logo"
                className="mx-auto mb-4 drop-shadow-xl"
              />
              <p className="text-gray-300 tracking-wide">
                Admin Control Panel – Secure Login
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* EMAIL */}
              <div className="relative">
                <FaUserAlt className="absolute left-4 top-3.5 text-amber-300" />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 pl-12 pr-4 rounded-lg bg-white/10 border border-white/20 
                  text-white placeholder-gray-300 focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* PASSWORD WITH EYE BUTTON 🔥 */}
              <div className="relative">
                {/* Lock Icon */}
                <FaLock className="absolute left-4 top-3.5 text-amber-300" />

                {/* Password Input */}
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-3 pl-12 pr-12 rounded-lg bg-white/10 border border-white/20 
                  text-white placeholder-gray-300 focus:ring-2 focus:ring-amber-400"
                />

                {/* Eye Toggle */}
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-3 text-amber-300 hover:text-amber-400"
                >
                  {showPass ? (
                    <IoEyeSharp size={22} />
                  ) : (
                    <IoEyeOffSharp size={22} />
                  )}
                </button>
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className={`w-full py-3 flex items-center justify-center gap-3 
                rounded-full text-lg font-semibold transition-all duration-300 
                ${
                  loading
                    ? 'bg-amber-500/40 cursor-not-allowed'
                    : 'bg-linear-to-r from-amber-500 to-yellow-600 hover:opacity-90'
                }`}
              >
                <FaSignInAlt />
                {loading ? "Signing In..." : "Sign In"}
              </motion.button>
            </form>

            {/* FOOTER */}
            <p className="mt-8 text-center text-gray-400 text-xs">
              © {new Date().getFullYear()} Hotel Inner Circle <br />
              Developed by{" "}
              <Link
                href="https://www.broaddcast.com"
                target="_blank"
                className="text-amber-300 hover:underline"
              >
                Broaddcast Digital
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
