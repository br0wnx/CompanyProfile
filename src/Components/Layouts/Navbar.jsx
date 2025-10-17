import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const isActiveLink = (path) => {
    return location.pathname === path;
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const handleNavClick = () => {
    scrollToTop();
    setIsOpen(false); 
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portal", label: "Portal" },
    { path: "/contact", label: "Contact" },
  ];

 
  const getActiveLinkColor = () => {
    return isScrolled ? "text-[#DA1D2C]" : "text-[#FF8D0A]"; 
  };

  
  const getActiveBgColor = () => {
    return isScrolled ? "bg-[#DA1D2C]" : "bg-[#FF8D0A]"; 
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg text-gray-900"
          : "bg-transparent backdrop-blur-md text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" onClick={scrollToTop}>
              <img
                src="/assets/logo-dkm.png"
                alt="DKM Logo"
                className="h-8 w-auto transition-transform duration-500 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className={`relative py-2 transition-all duration-300 group ${
                  isActiveLink(link.path)
                    ? `${getActiveLinkColor()} font-semibold`
                    : isScrolled
                    ? "hover:text-[#DA1D2C]"
                    : "hover:text-[#FF8D0A]"
                }`}
              >
                {link.label}

                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${
                    isActiveLink(link.path)
                      ? `scale-x-100 ${
                          isScrolled ? "bg-[#DA1D2C]" : "bg-[#FF8D0A]"
                        }`
                      : `scale-x-0 ${
                          isScrolled
                            ? "group-hover:bg-[#DA1D2C]"
                            : "group-hover:bg-[#FF8D0A]"
                        } group-hover:scale-x-100`
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-inherit focus:outline-none text-2xl p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-6 py-4 space-y-1 transition-all duration-500 backdrop-blur-lg ${
            isScrolled ? "bg-white/95 text-gray-900" : "bg-black/80 text-white"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleNavClick}
              className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                isActiveLink(link.path)
                  ? `${getActiveBgColor()} text-white font-semibold shadow-lg`
                  : isScrolled
                  ? "hover:bg-[#DA1D2C]/10 hover:text-[#DA1D2C]"
                  : "hover:bg-white/10 hover:text-[#FF8D0A]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
