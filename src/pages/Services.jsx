import React from "react";
import { motion } from "framer-motion";
import { Zap, Home, Building, Wrench, ShieldCheck, Cpu } from "lucide-react";

const services = [
  {
    icon: <Home className="w-10 h-10 text-blue-500" />,
    title: "Residential Wiring",
    desc: "From new homes to renovations, we provide safe and modern electrical installations.",
  },
  {
    icon: <Building className="w-10 h-10 text-purple-500" />,
    title: "Commercial Projects",
    desc: "Reliable electrical work for offices, shops, and commercial buildings with full MSCB compliance.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-green-500" />,
    title: "Industrial Solutions",
    desc: "High-capacity wiring, control panels, and power systems designed for industrial efficiency.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-yellow-500" />,
    title: "Safety & Compliance",
    desc: "We ensure every project meets state and national safety codes to guarantee long-term reliability.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-orange-500" />,
    title: "Maintenance & Repairs",
    desc: "Quick, dependable troubleshooting and preventive maintenance services for all electrical systems.",
  },
  {
    icon: <Zap className="w-10 h-10 text-red-500" />,
    title: "Solar & Smart Energy",
    desc: "Integration of solar panels and energy-efficient systems for sustainable power solutions.",
  },
];

export default function Services() {
  return (
    <section className="relative min-h-screen px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-950 text-gray-900 dark:text-gray-100">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-8"
      >
        Our{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Services
        </span>
      </motion.h1>

      <p className="text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-16">
        From residential wiring to complex industrial installations, we deliver
        high-quality, reliable electrical services with a strong focus on safety
        and innovation.
      </p>

      {/* Service Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="p-8 rounded-2xl bg-white/20 dark:bg-black/30 backdrop-blur-xl shadow-xl border border-white/10 hover:scale-105 hover:shadow-blue-500/20 transition-all duration-500"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
