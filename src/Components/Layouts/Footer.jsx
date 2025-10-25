import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 md:px-20 bg-[#FDFBFC] mt-25">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 sm:gap-4">
        <div className="flex flex-col space-y-4 items-center md:items-start">
          <img
            src="/assets/logo-dkm.png"
            alt="DKM Logo"
            className="w-48 h-24 sm:w-40 md:w-48"
          />
          <div className="text-sm md:text-wrap text-left text-nowrap leading-relaxed">
            <p>
              DKM Group operates container depots in Jakarta, Surabaya, Lampung, Medan, and Semarang.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-2 items-center md:items-start md:mr-8">
          <h2
            className="font-semibold text-base sm:text-lg md:text-xl italic text-center md:text-left"
            style={{ color: "#000065" }}
          >
            Trusted Container Depot & Logistics Solutions in Indonesia
          </h2>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <h4 className="font-bold mb-4 text-md">Company</h4>
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

          <div className="flex flex-col space-y-4 items-center md:items-start">
            <h4 className="font-bold mb-4 text-md">Help</h4>
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

          <div className="flex flex-col space-y-4 items-center md:items-start">
            <h4 className="font-bold mb-4 text-md">Legal</h4>
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
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-6 border-t border-gray-300"></div>

      {/* Copyright + Social Media */}
      <div className="max-w-7xl mx-auto mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 px-2 sm:px-0">
        {/* Social Media Icons */}
        <div className="flex justify-center sm:justify-start space-x-4 w-full sm:w-auto order-2 sm:order-1 mt-2 sm:mt-0">
          <a
            href="#"
            className="text-[#000065] hover:text-[#00004A] transition-colors"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="#"
            className="text-[#000065] hover:text-[#00004A] transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="#"
            className="text-[#000065] hover:text-[#00004A] transition-colors"
          >
            <FaFacebook size={18} />
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
