export function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[75vh] flex flex-col md:flex-row items-center justify-center text-white px-6 md:px-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/contact.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 w-full">
        {/* Title */}
        <div className="flex-1 text-center md:text-left order-1 md:order-none">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Get In Touch
          </p>
          <span className="block text-3xl sm:text-4xl md:text-5xl font-bold">
            With Us
          </span>
        </div>

        {/* Description */}
        <div className="flex-1 text-center md:text-right order-2 md:order-none">
          <p className="text-base sm:text-lg md:text-2xl font-semibold leading-snug italic">
            Direct contacts for each
            <br />
            department and branch to serve
            <br />
            you better.
          </p>
        </div>
      </div>
    </section>
  );
}