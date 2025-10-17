import { useState } from "react";

export function InteractiveZoomMap() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      className="mb-12 relative overflow-hidden rounded-lg shadow-lg"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image */}
      <img
        src="/assets/map.png"
        alt="Nationwide Coverage Map"
        className="w-full h-auto object-cover transition-transform duration-700 ease-out"
        style={{
          transformOrigin: `${position.x}% ${position.y}%`,
          transform: isHovering ? "scale(1.2)" : "scale(1)",
        }}
      />

      
    </div>
  );
}
