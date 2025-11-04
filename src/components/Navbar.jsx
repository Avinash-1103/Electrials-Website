import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { FiMoon, FiSun } from "react-icons/fi";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-gradient-to-r from-white/30 to-white/10 dark:from-black/40 dark:to-black/10 backdrop-blur-lg border-b border-white/10 dark:border-white/5 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 rounded-lg bg-blue-500/20 items-center justify-center">
            ⚡
          </span>
          <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text whitespace-nowrap">
            Electric MSEB
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-200 font-medium">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `transition hover:text-blue-500 dark:hover:text-purple-400 ${isActive
                    ? "text-blue-500 dark:text-purple-400 font-semibold"
                    : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side icons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="rounded-lg border border-gray-300 dark:border-gray-700 p-2 hover:shadow-md transition"
          >
            {theme === "dark" ? (
              <FiSun className="text-yellow-400" />
            ) : (
              <FiMoon className="text-blue-500" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/30 dark:bg-white/10 border border-white/20"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-blue-400" />
            ) : (
              <Menu className="w-6 h-6 text-blue-400" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            key="mobileMenu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-lg border-t border-white/10 text-gray-800 dark:text-gray-200 font-medium"
          >
            {navItems.map((item) => (
              <li
                key={item.to}
                className="p-4 border-b border-white/10 hover:text-blue-500 dark:hover:text-purple-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
