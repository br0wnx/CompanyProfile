export function HeroSection() {
  return (
    <>
      <section id="portal">
        <div
          className="w-full h-[75vh] flex items-center justify-center text-white px-6 md:px-20 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/assets/port.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 "></div>

          {/* Content */}
          <div className="text-center relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Portal Access
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed italic">
              Your one-stop access to our online systems for operational
              efficiency.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
