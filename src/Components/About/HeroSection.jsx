export function HeroSection() {
  return (
    <>
      <section
        className="w-full h-[75vh] flex flex-col md:flex-row items-center justify-center text-white px-6 md:px-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-about-4.jpg')" }}
      >
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <p className="text-l sm:text-xl md:text-2xl font-semibold leading-snug italic">
            Driving Indonesia's Container &<br />
            Logistics Industry with
            <br />
            Technology and Trust
          </p>
        </div>

        {/* Right Text */}
        <div className="flex-1 text-center md:text-right">
          <p className="text-xl sm:text-2xl md:text-4xl font-bold">About DKM</p>
          <span className="block text-xl sm:text-2xl md:text-4xl font-bold">
            Group
          </span>
        </div>
      </section>
    </>
  );
}
