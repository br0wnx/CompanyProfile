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

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/tracker", label: "Tracker" },
    { path: "/login", label: "Login" },
  ];

  const getActiveLinkColor = () => {
    return isScrolled ? "text-[#C6463D]" : "text-[#1F2D4B]";
  };

  const getActiveBgColor = () => {
    return isScrolled ? "bg-[#C6463D]" : "bg-[#1F2D4B]";
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
            <Link to="/">
              <img
                src="/assets/logo-dkmr.png"
                alt="DKM Logo"
                className="h-8 w-auto transition-transform duration-500 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12 font-medium">
            {navLinks.map((link) => {
              const isButton =
                link.label === "Tracker" || link.label === "Login";

              const externalLink =
                link.label === "Tracker"
                  ? "https://tracker.dwipakharismamitra.com/"
                  : link.label === "Login"
                  ? "https://tracker.dwipakharismamitra.com/login.php"
                  : null;

              const buttonClass = `py-2 px-5 rounded-lg font-semibold transition-all duration-500 ${
                link.label === "Tracker"
                  ? isScrolled
                    ? "border-2 border-transparent bg-[#C6463D] text-white hover:bg-[#b81824]"
                    : "border-2 border-transparent bg-[#1F2D4B] text-white hover:bg-[#162239]"
                  : isScrolled
                  ? "border-2 border-[#C6463D] text-[#C6463D] hover:bg-[#C6463D] hover:text-white"
                  : "border-2 border-[#1F2D4B] text-[#1F2D4B] hover:bg-[#1F2D4B] hover:text-white"
              }`;

              const linkClass = `relative py-2 transition-all duration-300 group ${
                isActiveLink(link.path)
                  ? `${getActiveLinkColor()} font-semibold`
                  : isScrolled
                  ? "hover:text-[#C6463D]"
                  : "hover:text-[#1F2D4B]"
              }`;

              if (isButton && externalLink) {
                return (
                  <a
                    key={link.label}
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  className={linkClass}
                >
                  {link.label}

                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${
                      isActiveLink(link.path)
                        ? `scale-x-100 ${
                            isScrolled ? "bg-[#C6463D]" : "bg-[#1F2D4B]"
                          }`
                        : `scale-x-0 ${
                            isScrolled
                              ? "group-hover:bg-[#C6463D]"
                              : "group-hover:bg-[#1F2D4B]"
                          } group-hover:scale-x-100`
                    }`}
                  />
                </Link>
              );
            })}
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
          className={`md:hidden px-6 py-4 space-y-2 transition-all duration-500 backdrop-blur-lg ${
            isScrolled ? "bg-white/95 text-gray-900" : "bg-black/80 text-white"
          }`}
        >
          {navLinks.map((link) => {
            const isButton = link.label === "Tracker" || link.label === "Login";
            const externalLink =
              link.label === "Tracker"
                ? "https://tracker.dwipakharismamitra.com/"
                : link.label === "Login"
                ? "https://tracker.dwipakharismamitra.com/login.php"
                : null;

            if (isButton && externalLink) {
              return (
                <a
                  key={link.label}
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-500 ${
                    link.label === "Tracker"
                      ? isScrolled
                        ? "bg-[#C6463D] text-white hover:bg-[#b81824]"
                        : "bg-[#1F2D4B] text-white hover:bg-[#162239]"
                      : isScrolled
                      ? "border-2 border-[#C6463D] text-[#C6463D] hover:bg-[#C6463D] hover:text-white"
                      : "border-2 border-[#1F2D4B] text-[#1F2D4B] hover:bg-[#1F2D4B] hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                  isActiveLink(link.path)
                    ? `${getActiveBgColor()} text-white font-semibold shadow-lg`
                    : isScrolled
                    ? "hover:bg-[#C6463D]/10 hover:text-[#C6463D]"
                    : "hover:bg-white/10 hover:text-[#1F2D4B]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
