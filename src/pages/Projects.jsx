import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Residential Wiring & Lighting",
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6d7e69e3?q=80&w=800",
    description:
      "Complete home wiring, lighting setup, and smart switch integration ensuring safety and style.",
  },
  {
    title: "Industrial Power Installation",
    image:
      "https://images.unsplash.com/photo-1597806996046-45c79c7b9d77?q=80&w=800",
    description:
      "High-voltage industrial setup with transformers, control panels, and safety inspections.",
  },
  {
    title: "Solar Panel Integration",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=800",
    description:
      "Hybrid solar systems designed for farms and homes to reduce dependency on the grid.",
  },
  {
    title: "Office Electrical Upgrade",
    image:
      "https://images.unsplash.com/photo-1584270354949-1c946b4d1b9e?q=80&w=800",
    description:
      "Modern lighting and energy-efficient rewiring for workspaces and commercial offices.",
  },
  {
    title: "Street & Outdoor Lighting",
    image:
      "https://images.unsplash.com/photo-1505483531331-8325e17c81f3?q=80&w=800",
    description:
      "Municipal and private outdoor lighting installations ensuring proper illumination and safety.",
  },
  {
    title: "Electrical Maintenance Contracts",
    image:
      "https://images.unsplash.com/photo-1581092787765-f31b62a2b59d?q=80&w=800",
    description:
      "AMC services for factories and residential complexes ensuring continuous and safe power flow.",
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen px-6 py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-950 text-gray-900 dark:text-white">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-6"
      >
        Our{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Recent Projects
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-2xl mx-auto text-center text-gray-700 dark:text-gray-300 mb-16"
      >
        A glimpse into the wide range of electrical and solar projects we’ve
        successfully completed — combining expertise, innovation, and safety in
        every task.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-white/20 dark:bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all hover:-translate-y-2 backdrop-blur-xl"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline hover:gap-3 transition-all"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Have a project in mind? Let’s build it together.
        </h3>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-transform hover:scale-105 shadow-lg shadow-blue-500/20"
        >
          Contact Us <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
