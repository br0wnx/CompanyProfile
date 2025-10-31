import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export function CustomerServiceSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      offset: 50,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=contactus@dwipakharismamitra.co.id&su=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(gmailLink, "_blank");
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-20 bg-[#FDFBFC] mt-25">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Form */}
          <div
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
            data-aos="fade-right"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#C6463D] mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#1F2D4B] rounded-lg focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#1F2D4B] rounded-lg focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#1F2D4B] rounded-lg focus:border-transparent transition-all"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#1F2D4B] rounded-lg focus:border-transparent transition-all resize-none"
                  placeholder="Please describe your inquiry in detail..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1F2D4B] hover:bg-[#5B6D8B] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <div className="mb-18" data-aos="fade-left" data-aos-delay="100">
              <h3 className="text-2xl font-bold mb-4">
                We're Here to Assist You
              </h3>
              <p className="text-base sm:text-base leading-relaxed flex-grow mt-10">
                For inquiries, assistance, or partnership opportunities,
                <span className="block">
                  please reach out to our support team or connect with the
                </span>
                <span className="block"> right department below.</span>
              </p>
            </div>

            <h2
              className="text-2xl sm:text-3xl font-bold text-[#C6463D] mb-6"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Customer Service & Support
            </h2>

            <div className="space-y-6">
              <div
                className="flex items-start gap-4"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="bg-[#1F2D4B] text-white p-3 rounded-lg flex-shrink-0">
                  <EmailIcon sx={{ fontSize: 24 }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:contactus@dwipakharismamitra.co.id"
                    className="text-[#1F2D4B] hover:text-[#5B6D8B] transition-colors hover:underline"
                  >
                    contactus@dwipakharismamitra.co.id
                  </a>
                </div>
              </div>

              <div
                className="flex items-start gap-4"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="bg-[#1F2D4B] text-white p-3 rounded-lg flex-shrink-0">
                  <PhoneIcon sx={{ fontSize: 24 }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:02144854918"
                    className="text-[#1F2D4B] hover:text-[#5B6D8B] transition-colors hover:underline"
                  >
                    021 4485 4918
                  </a>
                </div>
              </div>
              <p className="text-l mt-1 text-[#42526E] italic font-semibold">
                Available Mon - Fri, 08.00 - 17.00 WIB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
