import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const handleFAQClick = () => {
    navigate("/contact");
    setTimeout(() => {
      const element = document.getElementById("faq");
      if (element) element.scrollIntoView();
    }, 100);
  };

  return (
    <footer className="py-8 px-4 sm:px-6 md:px-20 bg-[#FDFBFC] mt-25">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2 sm:gap-4">
        <div className="flex flex-col space-y-4 items-center lg:items-start">
          <img
            src="/assets/dkm-footer.png"
            alt="DKM Logo"
            className="w-64 h-24 sm:w-54 md:w-64"
          />
          <div className="text-xs sm:text-sm md:text-sm text-left leading-snug md:leading-relaxed break-words max-w-full md:max-w-md">
            <p>
              DKM Group operates container depots in Jakarta, Surabaya, Lampung,
              Medan, and Semarang.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-2 items-center lg:items-start lg:mr-8 mt-6 lg:mt-0">
          <h2
            className="font-semibold text-base sm:text-lg md:text-xl italic text-center lg:text-left"
            style={{ color: "#1F2D4B" }}
          >
            Trusted Container Depot & Logistics Solutions in Indonesia
          </h2>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6 lg:mt-0">
          <div className="flex flex-col space-y-4 items-center lg:items-start">
            <h4 className="font-bold mb-4 text-md">Company</h4>
            <a
              href="/"
              className="text-sm font-semibold hover:text-[#5B6D8B] hover:underline transition-colors"
            >
              Home
            </a>
            <a
              href="about"
              className="text-sm font-semibold hover:text-[#5B6D8B] hover:underline transition-colors"
            >
              About
            </a>
            <a
              href="services"
              className="text-sm font-semibold hover:text-[#5B6D8B] hover:underline transition-colors"
            >
              Services
            </a>
          </div>

          <div className="flex flex-col space-y-4 items-center lg:items-start">
            <h4 className="font-bold mb-4 text-md">Help</h4>
            <a
              onClick={handleFAQClick}
              className="text-sm font-semibold hover:text-[#5B6D8B] hover:underline transition-colors cursor-pointer"
            >
              FAQ
            </a>
            <a
              href="portal"
              className="text-sm font-semibold hover:text-[#5B6D8B] hover:underline transition-colors"
            >
              Portal
            </a>
            <a
              href="contact"
              className="text-sm font-semibold hover:text-[#5B6D8B] hover:underline transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex flex-col space-y-4 items-center lg:items-start">
            <h4 className="font-bold mb-4 text-md">Legal</h4>
            <a
              href="#"
              className="text-sm font-semibold hover:text-[#5B6D8B] hover:underline transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm font-semibold hover:text-[#5B6D8B] hover:underline transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-sm font-semibold hover:text-[#5B6D8B] hover:underline transition-colors"
            >
              Return & Refund Policy
            </a>
            <a
              href="#"
              className="text-sm font-semibold hover:text-[#5B6D8B] hover:underline transition-colors"
            >
              Delivery Policy
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-6 border-t border-gray-300"></div>

      {/* Copyright + Social Media */}
      <div className="max-w-7xl mx-auto mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 px-2 sm:px-0">
        {/* Social Media Icons */}
        <div className="flex justify-center sm:justify-start space-x-4 w-full sm:w-auto order-2 sm:order-1 mt-2 sm:mt-0">
          <a
            href="https://www.instagram.com/dwipakharismamitra/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-[#1F2D4B] hover:text-[#5B6D8B] transition-colors"
          >
            <FaInstagram size={18} />
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1F2D4B] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
              Instagram
            </span>
          </a>

          <a
            href="https://www.linkedin.com/company/pt-dwipa-kharisma-mitra"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-[#1F2D4B] hover:text-[#5B6D8B] transition-colors"
          >
            <FaLinkedin size={18} />
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1F2D4B] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
              LinkedIn
            </span>
          </a>

          <a
            href="#"
            className="relative group text-[#1F2D4B] hover:text-[#5B6D8B] transition-colors"
          >
            <FaFacebook size={18} />
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1F2D4B] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
              Facebook
            </span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-center sm:text-right w-full sm:w-auto order-1 sm:order-2">
          © 2025 DKM Group. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
