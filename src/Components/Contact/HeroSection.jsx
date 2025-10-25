export function HeroSection() {
  return (
    <section
      className="w-full h-[75vh] flex flex-col md:flex-row items-center justify-center text-white px-6 md:px-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/contact.jpg')" }}
    >
      {/* Right Text */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-xl sm:text-2xl md:text-4xl font-bold">
          Get In Touch
        </p>
        <span className="block text-xl sm:text-2xl md:text-4xl font-bold">
          With Us
        </span>
      </div>
      {/* Left Text */}
      <div className="flex-1 text-center md:text-right mb-6 md:mb-0">
        <p className="text-l sm:text-xl md:text-2xl font-semibold leading-snug italic">
          Direct contacts for each
          <br />
          department and branch to serve
          <br />
          you better.
        </p>
      </div>
    </section>
  );
}
