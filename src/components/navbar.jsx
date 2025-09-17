import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo_ipra.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Tentang", href: "#tentang" },
    { label: "Struktur", href: "#struktur" },
    { label: "Event", href: "#event" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full text-white shadow-md bg-gradient-to-r from-black via-gray-800 to-gray-700">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold">IPRA 36</span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden gap-8 text-sm md:flex md:text-base">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition hover:text-yellow-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="p-2 transition rounded-lg md:hidden hover:bg-gray-700"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-r from-black via-gray-800 to-gray-700"
          >
            <ul className="flex flex-col gap-4 p-6 text-lg text-center">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block transition hover:text-yellow-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
