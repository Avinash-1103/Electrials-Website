// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex items-center">
      {/* Background waves */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="none"
            stroke="#00BFFF"
            strokeWidth="2"
            d="M0,160L80,176C160,192,320,224,480,229.3C640,235,800,213,960,181.3C1120,149,1280,107,1360,85.3L1440,64"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Trusted Electrical Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Certified MSEB Contractor — Reliable, Safe, and On-Time Execution.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl shadow-lg transition"
          >
            Contact Us →
          </motion.a>
        </motion.div>

        {/* Right Side: Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2965/2965358.png"
            alt="Electric illustration"
            className="w-72 md:w-96 drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
