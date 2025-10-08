import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 md:px-20 bg-[#FDFBFC]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
        {/* Section 1: Logo */}
        <div className="flex flex-col space-y-2 items-center md:items-start">
          <img
            src="/assets/logo-dkm.png"
            alt="DKM Logo"
            className="w-48 h-24 sm:w-40 md:w-48"
          />
        </div>

        {/* Section 2: Trusted Container Text */}
        <div className="flex flex-col space-y-2 items-center md:items-start">
          <h2
            className="font-semibold text-base sm:text-lg md:text-xl italic text-center md:text-left"
            style={{ color: "#000065" }}
          >
            Trusted Container Depot & Logistics Solutions in Indonesia
          </h2>
        </div>

        {/* Section 3: Company */}
        <div className="flex flex-col space-y-1 items-center md:items-start">
          <h4 className="font-bold mb-1 text-md">Company</h4>
          <a
            href="#"
            className="text-sm font-semibold hover:text-[#00004A] hover:underline transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-semibold hover:text-[#00004A] hover:underline transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm font-semibold hover:text-[#00004A] hover:underline transition-colors"
          >
            Services
          </a>
        </div>

        {/* Section 4: Help */}
        <div className="flex flex-col space-y-1 items-center md:items-start">
          <h4 className="font-bold mb-1 text-md">Help</h4>
          <a
            href="#"
            className="text-sm font-semibold hover:text-[#00004A] hover:underline transition-colors"
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-sm font-semibold hover:text-[#00004A] hover:underline transition-colors"
          >
            Portal
          </a>
          <a
            href="#"
            className="text-sm font-semibold hover:text-[#00004A] hover:underline transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Section 5: Legal */}
        <div className="flex flex-col space-y-1 items-center md:items-start">
          <h4 className="font-bold mb-1 text-md">Legal</h4>
          <a
            href="#"
            className="text-sm font-semibold hover:text-[#00004A] hover:underline transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm font-semibold hover:text-[#00004A] hover:underline transition-colors"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="text-sm font-semibold hover:text-[#00004A] hover:underline transition-colors"
          >
            Return & Refund Policy
          </a>
          <a
            href="#"
            className="text-sm font-semibold hover:text-[#00004A] hover:underline transition-colors"
          >
            Delivery Policy
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-4 border-t border-gray-300"></div>

      {/* Copyright + Social Media Compact */}
      <div className="max-w-7xl mx-auto mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 px-2 sm:px-0">
        {/* Social Media Icons */}
        <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-end w-full sm:w-auto">
          <a
            href="#"
            className="text-[#000065] hover:text-[#00004A] transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="text-[#000065] hover:text-[#00004A] transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="#"
            className="text-[#000065] hover:text-[#00004A] transition-colors"
          >
            <FaFacebook size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left w-full sm:w-auto">
          © 2025 DKM Group. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
