import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  // { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Mission", href: "/mission" },
  { name: "Awards", href: "/awards" },
  { name: "Programs", href: "/board-of-trustees" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
      bg-gradient-to-r from-[#F8FBFF]/95 to-[#EFF6FF]/95
      backdrop-blur-xl border-b border-[#E2E8F0] shadow-[0_2px_10px_rgba(0,0,0,0.04)]
      transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="/bnplogo1.png"
            alt="BNP Logo"
            className="h-14 w-auto drop-shadow-sm"
          />
          <span className="text-xl font-semibold text-[#0F72CE] tracking-wide">
            BNP Charitable Trust
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-[#4A5568] hover:text-[#0A4C8B] font-medium text-sm tracking-wide"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link.name}
            </motion.a>
          ))}

          {/* Donate Button */}
          <motion.a
            href="/donate"
            className="px-4 py-2 bg-[#0F72CE] text-white rounded-lg shadow-md hover:bg-[#0A4C8B] text-sm font-medium"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            Donate
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0F72CE]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-sm"
          >
            <div className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[#4A5568] hover:text-[#0F72CE] text-base font-medium"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#donate"
                className="px-4 py-2 bg-[#0F72CE] text-white rounded-lg text-center font-medium shadow-sm"
                onClick={() => setOpen(false)}
              >
                Donate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
