

export function CertificationSection() {
  return (
    <>
      <section className="w-full py-20 px-6 md:px-20 bg-[#FDFBFC]">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-[#DA1D2C]">
            Certifications & Standards
          </h2>

          {/* Description Text */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm sm:text-base md:text-lg  leading-relaxed">
              At DKM Group, our certifications reflect our strong commitment to
              international standards and quality assurance in container depot
              and logistics services.
            </p>
          </div>

          {/* 3 Logos Horizontal */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
            {/* Certification 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
                <img
                  src="/assets/iicl.jpg"
                  alt="ISO Certification"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center leading-relaxed">
                Accreditation for container
                <br />
                inspection and repair, ensuring
                <br />
                global compliance
              </p>
            </div>

            {/* Certification 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
                <img
                  src="/assets/sai.webp"
                  alt="IICL Certification"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center leading-relaxed">
                Certified for excellence in quality
                <br />
                management system and
                <br />
                operational consistency
              </p>
            </div>

            {/* Certification 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
                <img
                  src="/assets/kan.png"
                  alt="Safety Certification"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center leading-relaxed">
                Recognized for maintaining
                <br />
                quality prosecesses,customer satisfaction,
                <br />
                and continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
