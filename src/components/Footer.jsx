import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white/10 dark:bg-black/40 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-700/20 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Electric MSEB Contractor
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Licensed MSEB contractor providing professional electrical
            installation, repair, and maintenance services across Maharashtra.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  to={`/${link === "Home" ? "" : link.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-purple-400 transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Services
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-600 dark:text-gray-400">Residential Wiring</li>
            <li className="text-gray-600 dark:text-gray-400">Industrial Projects</li>
            <li className="text-gray-600 dark:text-gray-400">Solar Installations</li>
            <li className="text-gray-600 dark:text-gray-400">Maintenance & Repair</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Contact
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            📍 Sangli, Maharashtra
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            📞 +91 84 0796 1260
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            ✉️ dhanashreeelectrials@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200/20 dark:border-gray-700/20 text-center py-4 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Electric MSEB Contractor — All Rights Reserved.
      </div>
    </footer>
  );
}
