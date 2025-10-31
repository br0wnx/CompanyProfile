export function HeroSection() {
  return (
    <>
      <section
        className="relative w-full min-h-[75vh] flex flex-col md:flex-row items-center justify-center text-white px-6 md:px-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-about-4.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 w-full">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left order-2 md:order-none">
            <p className="text-base sm:text-lg md:text-2xl font-semibold leading-snug italic">
              Driving Indonesia's Container &<br />
              Logistics Industry with
              <br />
              Technology and Trust
            </p>
          </div>

          {/* Right Text (Title) */}
          <div className="flex-1 text-center md:text-right order-1 md:order-none">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
              About DKM
            </p>
            <span className="block text-3xl sm:text-4xl md:text-5xl font-bold">
              Group
            </span>
          </div>
        </div>
      </section>
    </>
  );
}