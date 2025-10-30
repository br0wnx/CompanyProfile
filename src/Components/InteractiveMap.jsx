import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "../Components/About/MarkerStyle.css";

const branches = [
  {
    name: "PT. Dwipa Kharisma Mitra Belawan",
    coords: [3.7776, 98.6901],
    link: "https://maps.app.goo.gl/rQte25VRFebeVxKW6",
  },
  {
    name: "PT. Dwipa Kharisma Mitra Cakung (Jakarta)",
    coords: [-6.1779, 106.9456],
    link: "https://maps.app.goo.gl/Q7yvfDbCj7Hkf2vs7",
  },
  {
    name: "PT. Dwipa Kharisma Mitra Surabaya",
    coords: [-7.3027, 112.7933],
    link: "https://maps.app.goo.gl/FJWYbfmbFaayUPNz8",
  },
  {
    name: "PT. Dwipa Kharisma Mitra Semarang",
    coords: [-6.9835, 110.4144],
    link: "https://maps.app.goo.gl/MqtQuyRg2KaopVbj6",
  },
  {
    name: "PT. Java Sarana Mitra Sejati Lampung", 
    coords: [-5.3971, 105.2667], 
    link: "https://maps.app.goo.gl/A6YfA7CkwRw5z7Jz9",
  },
];

function HoverMarker({ branch }) {
  const [hover, setHover] = useState(false);

  const icon = L.divIcon({
    className: hover ? "custom-marker hover" : "custom-marker",
    html: `<div class="pin"></div><div class="pulse"></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  return (
    <Marker
      position={branch.coords}
      icon={icon}
      eventHandlers={{
        mouseover: () => setHover(true),
        mouseout: () => setHover(false),
      }}
    >
      <Tooltip direction="top" offset={[0, -30]} opacity={1}>
        <span className="font-semibold text-[#000065]">{branch.name}</span>
      </Tooltip>
      <Popup>
        <div className="text-center">
          <h3 className="font-bold text-[#DA1D2C] mb-2 text-sm">
            {branch.name}
          </h3>
          <button
            onClick={() => window.open(branch.link, "_blank")}
            className="bg-[#000065] hover:bg-[#00004a] text-white px-3 py-1 rounded-md text-xs transition-all"
          >
            Lihat di Google Maps
          </button>
        </div>
      </Popup>
    </Marker>
  );
}

export function InteractiveLeafletMap() {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
  }, []);

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <MapContainer
        center={[-2.5, 116]}
        zoom={5.2}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />

        {branches.map((branch, i) => (
          <HoverMarker key={i} branch={branch} />
        ))}
      </MapContainer>
    </div>
  );
}
