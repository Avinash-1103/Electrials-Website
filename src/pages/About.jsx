import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

export default function About() {
  return (
    <section className="relative min-h-screen px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-950 text-gray-900 dark:text-gray-100">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      {/* Title + Intro */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-8"
      >
        About{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Our Company
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300 mb-16"
      >
        We are a certified MSCB Electrical Contractor specializing in reliable,
        safe, and on-time electrical solutions. Our team is passionate about
        quality workmanship, client satisfaction, and continuous innovation in
        energy and power systems.
      </motion.p>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* Left: Contractor Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:shadow-blue-500/20 transition-all duration-500">
            <img
              src="/image.jpg"
              alt="Contractor"
              className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Right: Mission and Values */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Choose Us
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
              <span>
                <strong>Certified Professionals:</strong> Fully licensed MSCB
                electrical experts with years of on-site experience.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-yellow-400 mt-1" />
              <span>
                <strong>Reliable Execution:</strong> We deliver projects on time
                with zero compromise on quality or safety.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-purple-500 mt-1" />
              <span>
                <strong>Safety First:</strong> Every project follows strict
                electrical and safety standards approved by the MSCB board.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="w-5 h-5 text-green-400 mt-1" />
              <span>
                <strong>Customer Trust:</strong> We’ve built lasting
                relationships with satisfied clients across residential,
                commercial, and industrial sectors.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto"
      >
        {[
          { number: "10+", label: "Years of Experience" },
          { number: "500+", label: "Projects Completed" },
          { number: "300+", label: "Happy Clients" },
          { number: "100%", label: "Safety Record" },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/20 dark:bg-white/5 backdrop-blur-xl shadow-md hover:shadow-blue-500/20 transition-all"
          >
            <h3 className="text-3xl font-bold text-blue-500 mb-2">
              {stat.number}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Meet Our Contractor */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl font-bold mb-8">
          Meet Our{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
             Contractor
          </span>
        </h2>
        <div className="max-w-xl mx-auto bg-white/20 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
          <img
            src="/image.jpg"
            alt="Lead Contractor"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500/40 shadow-lg"
          />
          <h3 className="text-xl font-semibold">Mr. GIRISH BHOSALE</h3>
          <p className="text-blue-500 dark:text-blue-400 text-sm mb-4">
            Licensed MSEB Electrical Contractor
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            “Our goal is to power Maharashtra with safe, efficient, and reliable
            electrical infrastructure — because every light we install should
            stand for trust and quality.”
          </p>
        </div>
      </motion.div>
    </section>
  );
}
