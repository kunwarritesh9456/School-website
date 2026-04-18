import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Physical Wellness",
    desc: "Students build strength, coordination, and endurance through structured physical activities and sports programs.",
    img: "Move 1.jpg",
  },
  {
    title: "Mental Clarity",
    desc: "Movement enhances focus, reduces stress, and improves overall mental well-being—creating better learners.",
    img: "Move 2.jpg",
  },
  {
    title: "Confidence & Discipline",
    desc: "Through athletics and challenges, students develop resilience, leadership, and self-confidence.",
    img: "Move 3.jpg",
  },
  {
    title: "Teamwork & Leadership",
    desc: "Collaboration in sports and activities teaches communication, responsibility, and leadership skills.",
    img: "ABC.jpg",
  },
];

const features = [
  {
    title: "Daily Movement Culture",
    desc: "Movement is integrated into everyday school life, not limited to sports periods.",
  },
  {
    title: "Competitive & Recreational Sports",
    desc: "Students can explore both competitive athletics and recreational activities.",
  },
  {
    title: "Holistic Development",
    desc: "Physical activity supports emotional, social, and intellectual growth.",
  },
  {
    title: "Lifelong Fitness Habits",
    desc: "Students develop habits that promote health and well-being for life.",
  },
];

const HowWeMove = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-[95vh] flex items-center justify-center text-white">
        <img
          src="img 7.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            How We Move
          </h1>
          <p className="max-w-8xl mx-auto text-lg opacity-90">
            Movement fuels learning, confidence, and lifelong wellness.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 max-w-8xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Movement as a Foundation for Growth
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Physical activity is essential to student development. Through sports,
          fitness, and active learning environments, students build healthy
          bodies, sharp minds, and strong character.
        </p>
      </section>

      {/* PILLARS */}
      <section className="px-6 max-w-8xl mx-auto space-y-32 pb-28">
        {pillars.map((item, i) => (
          <motion.div
            key={i}
            className={`grid md:grid-cols-2 gap-14 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={item.img}
                className="w-full h-105 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* FEATURES GRID */}
      <section className="bg-gray-100 py-28 px-6">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURE STORY */}
      <section className="py-28 px-6 max-w-8xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Movement in Action
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From sports fields to active classrooms, students experience movement
            as a natural part of learning—enhancing performance, energy, and
            engagement every day.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="img 6.png"
            className="w-full h-95 object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-black text-white text-center px-6">
        <h2 className="text-4xl font-semibold mb-6">
          Experience Movement That Matters
        </h2>
        <p className="text-gray-300 mb-6">
          Discover how physical activity enhances learning and growth.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition">
          Explore Athletics
        </button>
      </section>

    </div>
  );
};

export default HowWeMove;