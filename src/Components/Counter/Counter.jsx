import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

// COUNTER
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 1.1,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView]);

  return (
    <div ref={ref} className="flex justify-center items-center">
      <motion.span className="text-5xl md:text-6xl font-bold text-[#d97706]">
        {rounded}
      </motion.span>
      <span className="text-5xl md:text-6xl font-bold text-[#d97706]">
        {suffix}
      </span>
    </div>
  );
};

const StatsSection = () => {
  const [activeTab, setActiveTab] = useState("Academics");

  const tabData = {
    Academics: [
      {
        val: 99,
        suffix: "%",
        sub: "99% of Sidney Side  graduates attend top universities worldwide.",
      },
      {
        val: 17,
        suffix: ":1",
        sub: "Low student-teacher ratio for personalized learning.",
      },
      {
        val: 110,
        suffix: "+",
        sub: "Wide range of courses including AP & Honors.",
      },
    ],
    Athletics: [
      { val: 25, suffix: "+", sub: "Competitive varsity teams." },
      { val: 12, suffix: "", sub: "Championships in recent years." },
      { val: 85, suffix: "%", sub: "Student participation in sports." },
    ],
    Extracurricular: [
      { val: 40, suffix: "+", sub: "Student-led clubs & activities." },
      { val: 5000, suffix: "+", sub: "Community service hours yearly." },
      { val: 15, suffix: "", sub: "Annual performances & events." },
    ],
  };

  const tabs = ["Academics", "Athletics", "Extracurricular"];

  return (
    <section className="w-full font-serif">

      {/*  TABS */}
      <div className="flex flex-col md:flex-row border-b border-gray-500">

        <div className="md:w-1/4 w-full py-5 text-center text-gray-700 italic bg-gray-100 text-sm">
          Select a tab →
        </div>

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-xs md:text-sm tracking-widest uppercase font-semibold relative ${
              activeTab === tab
                ? "text-[#d97706] bg-white"
                : "text-gray-600 bg-gray-100"
            }`}
          >
            {tab}

            {activeTab === tab && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d97706]"
              />
            )}
          </button>
        ))}
      </div>

      {/*  MAIN */}
      <div className="flex flex-col md:flex-row md:h-65">

        {/* LEFT PANEL */}
        <div className="md:w-1/4 w-full bg-[#c2410c] flex items-center justify-center md:justify-start px-6 md:px-10 py-8 md:py-0">
          <h2 className="text-3xl md:text-5xl text-white font-bold leading-tight text-center md:text-left">
            Stats That <br /> Define Us
          </h2>
        </div>

        {/* RIGHT PANEL */}
        <div className="md:w-3/4 w-full bg-[#f3f1ec] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full px-6 md:px-8 py-6 md:py-0"
            >
              {tabData[activeTab].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-sm py-5 px-4 text-center"
                >
                  <Counter value={stat.val} suffix={stat.suffix} />

                  <p className="mt-2 text-gray-600 text-xs md:text-sm leading-relaxed max-w-55 mx-auto">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;