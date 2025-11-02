import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-screen px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-950 text-gray-900 dark:text-gray-100">
      {/* Glow Effects */}
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
        Contact{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Us
        </span>
      </motion.h1>

      <p className="text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-16">
        Have a question, project, or need an electrical expert? Reach out to us
        and we’ll be happy to assist you.
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-blue-500" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-purple-500" />
              <span>info@electrials.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-green-500" />
              <span>Sangli, Maharashtra, India</span>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
            <p>Working Hours:</p>
            <p>Mon - Sat: 9:00 AM – 6:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <div className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/50 dark:bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/50 dark:bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 rounded-xl bg-white/50 dark:bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              Send Message <Send className="w-5 h-5" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
