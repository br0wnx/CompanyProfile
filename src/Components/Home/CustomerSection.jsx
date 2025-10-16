export function CustomerSection() {
  const logos = [
    "/assets/logo-cust/1.png",
    "/assets/logo-cust/2.png",
    "/assets/logo-cust/3.png",
    "/assets/logo-cust/4.png",
    "/assets/logo-cust/5.png",
    "/assets/logo-cust/6.png",
    "/assets/logo-cust/7.png",
    "/assets/logo-cust/8.png",
    "/assets/logo-cust/9.png",
    "/assets/logo-cust/10.png",
    "/assets/logo-cust/11.png",
    "/assets/logo-cust/12.png",
    "/assets/logo-cust/13.png",
    "/assets/logo-cust/14.png",
    "/assets/logo-cust/15.png",
  ];

  return (
    <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20 bg-[#FDFBFC]">

      {/* Logos Grid */}
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center items-center"
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Customer Logo ${index + 1}`}
            className="h-16 sm:h-20 md:h-24 w-auto object-contain filter grayscale hover:grayscale-0 transition-transform duration-700 ease-in-out hover:scale-105"
          />
        ))}
      </div>
    </section>
  );
}
