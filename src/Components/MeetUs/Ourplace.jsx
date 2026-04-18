import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const locations = [
  {
    id: 1,
    name: "Main Building",
    desc: "Central academic hub",
    x: 30,
    y: 40,
  },
  {
    id: 2,
    name: "Science Lab",
    desc: "Advanced labs",
    x: 60,
    y: 55,
  },
  {
    id: 3,
    name: "Sports Complex",
    desc: "Athletic area",
    x: 45,
    y: 70,
  },
];

const OurPlace = () => {
  const mapRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setPosition({ x: newX, y: newY });
    gsap.to(mapRef.current, {
      x: newX,
      y: newY,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    const newScale = Math.min(Math.max(1, scale + delta), 3);
    setScale(newScale);
    gsap.to(mapRef.current, {
      scale: newScale,
      duration: 0.3,
    });
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, dragStart, position]);

  return (
    <div className="bg-black py-20 px-6 text-white overflow-hidden">

      <h2 className="text-4xl font-bold text-center mb-10">
        Interactive Campus Map
      </h2>

      <div className="relative max-w-6xl mx-auto h-150 overflow-hidden rounded-3xl border border-white/10">

        {/* MAP CONTAINER */}
        <div
          ref={mapRef}
          className="absolute w-full h-full cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onWheel={handleWheel}
        >
          <img
            src="CampusMap.jpg"
            alt="map"
            className="w-full h-full object-cover"
          />

          {/* MARKERS */}
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="absolute"
              style={{
                top: `${loc.y}%`,
                left: `${loc.x}%`,
              }}
              onMouseEnter={() => setTooltip(loc)}
              onMouseLeave={() => setTooltip(null)}
            >
              {/* marker */}
              <div className="relative flex items-center justify-center">

                {/* pulse animation */}
                <span className="absolute w-6 h-6 bg-blue-500 rounded-full opacity-70 animate-ping"></span>

                <span className="w-4 h-4 bg-blue-600 rounded-full z-10"></span>
              </div>
            </div>
          ))}
        </div>

        {/* TOOLTIP */}
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-xl"
          >
            <h3 className="text-lg font-semibold">{tooltip.name}</h3>
            <p className="text-sm text-gray-300">{tooltip.desc}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OurPlace;