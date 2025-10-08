import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md text-gray-900"
          : "bg-transparent backdrop-blur-md text-white"
      }`}
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ml-auto mr-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/assets/logo-dkm.png"
              alt="MyWebsite Logo"
              className="h-10 w-auto transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-14 font-medium">
            <Link to="/" className="hover:text-[#000065] transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#000065] transition">
              About
            </Link>
            <Link to="/services" className="hover:text-[#000065] transition">
              Services
            </Link>
            <Link to="/portal" className="hover:text-[#000065] transition">
              Portal
            </Link>
            <Link to="/contact" className="hover:text-[#000065] transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-inherit focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-4 pt-2 pb-3 space-y-2 transition-all duration-500 ${
            isScrolled ? "bg-white/95 text-gray-900" : "bg-black/60 text-white"
          }`}
        >
          <a href="#home" className="block hover:text-[#000065]">
            Home
          </a>
          <a href="#about" className="block hover:text-[#000065]">
            About
          </a>
          <a href="#services" className="block hover:text-[#000065]">
            Services
          </a>
          <a href="#portal" className="block hover:text-[#000065]">
            Portal
          </a>
          <a href="#contact" className="block hover:text-[#000065]">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
