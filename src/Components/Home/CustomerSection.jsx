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

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20 bg-[#FDFBFC] overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#FDFBFC] to-transparent"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#FDFBFC] to-transparent"></div>

      <div className="relative w-full overflow-hidden">
        {/* Highlight Track Glow */}
        <div className="absolute top-1/2 left-0 w-full h-10 -translate-y-1/2 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[#00006520] to-transparent blur-2xl"></div>
        </div>

        {/* Scrolling Logos */}
        <div className="animate-scroll-horizontal relative flex items-center">
          {duplicatedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Customer Logo ${index + 1}`}
              className="h-14 sm:h-16 md:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-transform duration-500 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
