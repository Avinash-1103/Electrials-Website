import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Clock, Wrench } from "lucide-react";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center text-center px-6 py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-950">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl p-8 rounded-3xl bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
          Reliable{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Electrical Solutions
          </span>
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
          Certified MSEB Contractor delivering reliable, safe, and on-time
          electrical solutions for homes, businesses, and industries across
          Maharashtra.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-transform hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-gray-800 dark:text-gray-100 font-semibold bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-transform hover:scale-105 border border-white/20"
          >
            Know More About Us
          </Link>
        </div>
      </motion.div>

      {/* Contractor Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-20 flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-5xl justify-center"
      >
        <div className="w-44 h-44 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-xl border border-white/10">
          <img
            src="/image.jpg"
            alt="Contractor"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="max-w-md text-left bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
            About Our Contractor
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            With over <span className="font-semibold text-blue-500">10+ years</span> of
            professional experience, we deliver high-quality electrical projects
            backed by MSCB certification and a strong focus on safety and
            precision.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            We’ve powered hundreds of homes, farms, and industries — ensuring
            reliability and long-term efficiency in every connection.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-transform hover:scale-105 shadow-md shadow-blue-500/20"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <div className="mt-24 max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Us?
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
              title: "Licensed & Insured",
              desc: "Certified MSCB contractor with government-approved licenses.",
            },
            {
              icon: <Clock className="w-10 h-10 text-purple-500" />,
              title: "On-Time Delivery",
              desc: "We value your time — every project is completed as scheduled.",
            },
            {
              icon: <Wrench className="w-10 h-10 text-blue-500" />,
              title: "Expert Workmanship",
              desc: "Our team is skilled in modern tools and safety practices.",
            },
            {
              icon: <Zap className="w-10 h-10 text-yellow-500" />,
              title: "24/7 Support",
              desc: "Available round-the-clock for maintenance and emergencies.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-transform hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            View Our Work <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-20 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Let’s Power Your Next Project
        </h3>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-transform hover:scale-105 shadow-lg shadow-blue-500/20"
        >
          Get a Free Quote <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  );
}
