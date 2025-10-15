import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

export function NationWideSection() {
  return (
    <>
      <section className="w-full py-20 px-6 md:px-20 bg-[#FDFBFC]">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#DA1D2C]">
            Nationwide Coverage
          </h2>

          {/* Main Image */}
          <div className="mb-12">
            <img
              src="/assets/map.png"
              alt="Nationwide Coverage Map"
              className="w-full h-auto object-cover rounded-lg shadow-md mx-auto"
            />
          </div>

          {/* Two Column Text */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            {/* Left Text */}
            <div className="flex-1 text-left">
              <p className="text-sm sm:text-base md:text-lg  leading-tight">
                Additionally, through our group company
                <strong className="underline">
                  {" "}
                  PT Java Sarana Mitra Sejati (JSMS),
                </strong>
                we also serve <strong>Lampung</strong> and{" "}
                <strong>Semarang</strong>, further strengthening our nationwide
                presence.
              </p>
            </div>

            {/* Right Text*/}
            <div className="flex-1 text-left md:text-right">
              <p className="text-sm sm:text-base md:text-lg  leading-tight">
                <strong className="underline">
                  PT Bintang Nusantara Service (BNS){" "}
                </strong>
                operates side-by-side with <strong>DKM Surabaya</strong> and is
                fully integrated into Surabaya operations.
              </p>
            </div>
          </div>

          {/* 4 Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Surabaya */}
            <div className="p-4 sm:p-5 lg:p-6 border-r border-gray-700">
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 flex items-center justify-between">
                <span className="text-base sm:text-lg lg:text-xl">
                  Surabaya
                </span>
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                  <div className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center">
                    <MapOutlinedIcon fontSize="small" />
                  </div>
                  <div className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center">
                    <PhoneOutlinedIcon fontSize="small" />
                  </div>
                </div>
              </h3>

              <div className="space-y-2 text-xs sm:text-sm leading-none">
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    land space
                  </span>
                  <span className="flex-1">2.5 HA + 2.75 HA (Concrete)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Capacity
                  </span>
                  <span className="flex-1">
                    +- 2.500 TEUs (Empty) +- 3.000 TEUs (Full)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Container Repair
                  </span>
                  <span className="flex-1">25 minor, 3 major (2 teams)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Equipment
                  </span>
                  <span className="flex-1">
                    Side Loaders, Washing Machines, Repair Tools
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Operation Hours
                  </span>
                  <span className="flex-1">
                    Mon-Fri 08.00-21.00, Sat 08.00-13.00
                  </span>
                </div>
              </div>
            </div>

            {/* Semarang */}
            <div className="p-4 sm:p-5 lg:p-6 border-r border-gray-700">
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 flex items-center justify-between">
                <span className="text-base sm:text-lg lg:text-xl">
                  Semarang
                </span>
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                  <div className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center">
                    <MapOutlinedIcon fontSize="small" />
                  </div>
                  <div className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center">
                    <PhoneOutlinedIcon fontSize="small" />
                  </div>
                </div>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm leading-none">
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    land space
                  </span>
                  <span className="flex-1">2.136 HA (Concrete)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Capacity
                  </span>
                  <span className="flex-1">+- 1.800 TEUs</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Container Repair
                  </span>
                  <span className="flex-1">25 minor, 3 major (2 teams)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Equipment
                  </span>
                  <span className="flex-1">
                    Side Loaders, Welding Machines, Washing Machine, Hangar
                    Washing (2 trucks)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Operation Hours
                  </span>
                  <span className="flex-1">
                    Mon-Fri 08.00-16.30, Sat 08.00-12.00
                  </span>
                </div>
              </div>
            </div>

            {/* Jakarta */}
            <div className="p-4 sm:p-5 lg:p-6 border-r border-gray-700">
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 flex items-center justify-between">
                <span className="text-base sm:text-lg lg:text-xl">Jakarta</span>
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                  <div className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center">
                    <MapOutlinedIcon fontSize="small" />
                  </div>
                  <div className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center">
                    <PhoneOutlinedIcon fontSize="small" />
                  </div>
                </div>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm leading-none">
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    land space
                  </span>
                  <span className="flex-1">2.5 HA (Concrete)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Capacity
                  </span>
                  <span className="flex-1">+- 4.500 TEUs (7 High Stack)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Container Repair
                  </span>
                  <span className="flex-1">
                    30 minor, 5 major (IICL certified staff)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Equipment
                  </span>
                  <span className="flex-1">
                    Side Loaders, Washing Machines, Welding Machines, Hangar
                    Machines
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Operation Hours
                  </span>
                  <span className="flex-1">
                    Mon-Fri 24 Hours, Sat 08.00-15.00
                  </span>
                </div>
              </div>
            </div>

            {/* Medan */}
            <div className="p-4 sm:p-5 lg:p-6">
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 flex items-center justify-between">
                <span className="text-base sm:text-lg lg:text-xl">Medan</span>
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                  <div className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center">
                    <MapOutlinedIcon fontSize="small" />
                  </div>
                  <div className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center">
                    <PhoneOutlinedIcon fontSize="small" />
                  </div>
                </div>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm leading-none">
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    land space
                  </span>
                  <span className="flex-1">2.35 HA (Concrete)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Capacity
                  </span>
                  <span className="flex-1">+- 2.000 TEUs</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Container Repair
                  </span>
                  <span className="flex-1">25 minor, 3 major (2 teams)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Equipment
                  </span>
                  <span className="flex-1">
                    Side Loaders, Forklift, Prime Mover, Chassis, Washing
                    Machines, Welding Machines, Generator
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                    Operation Hours
                  </span>
                  <span className="flex-1">
                    Mon-Fri 08.00-17.00, Sat 08.00-12.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
