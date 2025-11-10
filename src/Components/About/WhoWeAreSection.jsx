import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function WhoWeAreSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <>
      <section className="w-full py-20 px-6 md:px-20 bg-[#FDFBFC] mt-25">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
          {/* Left: Text */}
          <div
            className="flex-1 flex flex-col justify-center text-left"
            data-aos="fade-right"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#C6463D]"
              data-aos="fade-down"
            >
              Who We Are
            </h2>

            <p
              className="text-base sm:text-base leading-relaxed flex-grow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              DKM is a leading depot and integrated logistics provider in
              Indonesia. With more than three decades of experience, we support
              shipping lines, freight forwarders, and trucking companies through
              reliable container storage, repair, and transportation solutions.
            </p>
            <p
              className="mb-38 text-base sm:text-base leading-relaxed flex-grow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our strength lies in technology-driven operations and nationwide
              coverage, ensuring seamless logistics flow across major Indonesian
              ports.
            </p>
          </div>

          {/* Right: Image */}
          <div
            className="flex-1 flex items-center"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img
              src="/assets/content-who.jpg"
              alt="Who We Are"
              className="w-full h-full max-h-[400px] rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
